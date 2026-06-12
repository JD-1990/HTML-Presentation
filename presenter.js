import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const WALK_SPEED         = 0.025;
const CHAR_SCALE         = 1.6;
const STAGE_HEIGHT       = 320;
const FLOOR_Y            = -0.85;
const BUBBLE_MS_PER_CHAR = 62;
const CROSSFADE_TIME     = 0.35;

const NARRATIONS = [
  "Welcome! I am your food safety trainer today. Let's make sure every passenger stays safe.",
  "Food poisoning has six main causes — and as crew, you have the power to control all of them.",
  "These are the five bacteria you must know. Invisible and tasteless — which is exactly why our procedures exist.",
  "Remember FATTOM. Remove any one condition and you stop bacterial growth completely.",
  "High risk foods are ready to eat and won't be heated again. Treat every item on that tray with care.",
  "Cross contamination is the sneaky one. It spreads via hands, equipment and packaging without you knowing.",
  "Personal hygiene is your most important tool. Wash your hands properly — every single time.",
  "The Danger Zone is 5 to 63 degrees. Never leave food there for more than two hours. No exceptions.",
  "If you find unfit food — stop, isolate, inform and document. Never throw the evidence away."
];

const TARGET_X_PCT = [15, 70, 20, 65, 18, 72, 25, 68, 22];

let scene, camera, renderer, mixer;
let idleAction, walkAction, talkAction;
let characterRoot = null;
let currentAction = null;
let clock;
let headBone = null;
let walkTarget = null;
let onArrival = null;
let isTalking = false;
let talkTimeout = null;
let paceTimeout = null;

const overlay  = document.getElementById('presenter-overlay');
const canvas   = document.getElementById('presenter-canvas');
const bubble   = document.getElementById('speech-bubble');
const loading  = document.getElementById('presenter-loading');
const errorDiv = document.getElementById('presenter-error');

function initThree() {
  const w = overlay.offsetWidth;
  const h = STAGE_HEIGHT;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = false;

  scene = new THREE.Scene();

  const aspect = w / h;
  // vFOV 32° + lookAt centred on character midpoint shows full body
  camera = new THREE.PerspectiveCamera(32, aspect, 0.1, 100);
  camera.position.set(0, 0.5, 5.5);
  camera.lookAt(0, 0.5, 0);

  const ambient = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(2, 4, 3);
  scene.add(dirLight);

  clock = new THREE.Clock();

  loadCharacter();
  animate();

  window.addEventListener('resize', onResize);
}

function loadCharacter() {
  const loader = new GLTFLoader();
  loader.load(
    './character_animated.glb',
    (gltf) => {
      characterRoot = gltf.scene;
      characterRoot.scale.setScalar(CHAR_SCALE);
      characterRoot.position.set(0, FLOOR_Y, 0);
      scene.add(characterRoot);

      headBone = characterRoot.getObjectByName('Head');

      mixer = new THREE.AnimationMixer(characterRoot);

      const clips = gltf.animations;
      const find  = (name) => THREE.AnimationClip.findByName(clips, name);

      idleAction = mixer.clipAction(find('Idle'));
      walkAction = mixer.clipAction(find('Walk'));
      talkAction = mixer.clipAction(find('Talk'));

      [idleAction, walkAction, talkAction].forEach(a => {
        a.setLoop(THREE.LoopRepeat, Infinity);
        a.clampWhenFinished = false;
      });

      idleAction.play();
      currentAction = idleAction;

      loading.style.display = 'none';
    },
    undefined,
    (err) => {
      console.error('GLB load error:', err);
      loading.style.display = 'none';
      errorDiv.textContent = 'Error loading presenter character. Check console for details.';
      errorDiv.style.display = 'block';
    }
  );
}

function crossfadeTo(toAction) {
  if (!toAction || toAction === currentAction) return;
  toAction.reset();
  toAction.play();
  currentAction.crossFadeTo(toAction, CROSSFADE_TIME, true);
  currentAction = toAction;
}

function stageXFromPct(pct) {
  const fov    = THREE.MathUtils.degToRad(camera.fov);
  const dist   = camera.position.z;
  const halfW  = Math.tan(fov / 2) * dist * camera.aspect;
  return ((pct / 100) - 0.5) * halfW * 2;
}

const STAGE_HALF = () => {
  const fov   = THREE.MathUtils.degToRad(camera.fov);
  const dist  = camera.position.z;
  return Math.tan(fov / 2) * dist * camera.aspect * 0.9;
};

function walkTo(targetX, cb) {
  if (!characterRoot) { if (cb) cb(); return; }
  const clamped = THREE.MathUtils.clamp(targetX, -STAGE_HALF(), STAGE_HALF());
  walkTarget = clamped;
  onArrival  = cb || null;
  crossfadeTo(walkAction);
}

function speak(text) {
  if (!characterRoot) return;
  if (talkTimeout) clearTimeout(talkTimeout);
  isTalking = true;
  crossfadeTo(talkAction);

  bubble.textContent = text;
  bubble.classList.add('visible');

  const duration = text.length * BUBBLE_MS_PER_CHAR + 1500;
  talkTimeout = setTimeout(() => {
    bubble.classList.remove('visible');
    isTalking = false;
    crossfadeTo(idleAction);
  }, duration);
}

window.presenterGoToSlide = function(index) {
  if (!characterRoot) return;
  if (talkTimeout)  clearTimeout(talkTimeout);
  if (paceTimeout)  clearTimeout(paceTimeout);
  bubble.classList.remove('visible');
  isTalking = false;

  const targetX = stageXFromPct(TARGET_X_PCT[index] ?? 15);

  walkTo(targetX, () => {
    speak(NARRATIONS[index]);

    const paceDuration = NARRATIONS[index].length * BUBBLE_MS_PER_CHAR + 1500;
    paceTimeout = setTimeout(() => {
      const paceDir  = Math.random() > 0.5 ? 1 : -1;
      const paceX    = THREE.MathUtils.clamp(targetX + paceDir * 0.8, -STAGE_HALF(), STAGE_HALF());
      walkTo(paceX, () => {
        walkTo(targetX, () => crossfadeTo(idleAction));
      });
    }, paceDuration);
  });
};

function updateBubblePosition() {
  if (!headBone || !characterRoot) return;
  if (!bubble.classList.contains('visible')) return;

  const worldPos = new THREE.Vector3();
  headBone.getWorldPosition(worldPos);
  worldPos.y += 0.18;

  const projected = worldPos.clone().project(camera);
  const w = window.innerWidth;
  const h = window.innerHeight;

  let sx = (projected.x * 0.5 + 0.5) * w;
  // project() uses normalised device coords relative to the canvas,
  // but we need screen coords. The canvas bottom aligns with the window bottom.
  const canvasTop = window.innerHeight - STAGE_HEIGHT;
  let sy = canvasTop + (-(projected.y * 0.5) + 0.5) * STAGE_HEIGHT;

  const bw = bubble.offsetWidth  || 220;
  const bh = bubble.offsetHeight || 60;

  sx = THREE.MathUtils.clamp(sx - bw / 2, 8, w - bw - 8);
  sy = THREE.MathUtils.clamp(sy - bh - 16, 8, h - bh - 8);

  bubble.style.left = sx + 'px';
  bubble.style.top  = sy + 'px';
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);

  if (characterRoot && walkTarget !== null) {
    const cur  = characterRoot.position.x;
    const diff = walkTarget - cur;
    const step = WALK_SPEED;

    if (Math.abs(diff) < step * 2) {
      characterRoot.position.x = walkTarget;
      walkTarget = null;
      const cb = onArrival;
      onArrival = null;
      if (!isTalking) crossfadeTo(idleAction);
      if (cb) cb();
    } else {
      const dir = Math.sign(diff);
      characterRoot.position.x += dir * step;
      characterRoot.scale.x = -dir * CHAR_SCALE;
    }
  }

  updateBubblePosition();
  renderer.render(scene, camera);
}

function onResize() {
  const w = overlay.offsetWidth;
  renderer.setSize(w, STAGE_HEIGHT);
  camera.aspect = w / STAGE_HEIGHT;
  camera.updateProjectionMatrix();
}

initThree();
