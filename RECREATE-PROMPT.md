# Prompt: Recreate easyJet Food Safety Slide Deck

---

Create a 12-slide HTML presentation for **easyJet's Food Safety Crew Learning Module**. Single self-contained `.html` file. No external dependencies except Google Fonts (Nunito).

---

## Technical spec

- **Canvas:** 1280×720px, centred on a `#111` full-viewport background
- **Font:** Nunito from Google Fonts, weights 400 600 700 800 900
- **Navigation:** Prev/Next buttons (orange, bottom-centre) + arrow key support + orange progress bar pinned to top of viewport
- **Every slide:** 6px orange (`#FF6600`) top bar · "easyJet" orange pill logo bottom-left · slide number bottom-right

## Brand tokens

```css
--orange:  #FF6600;
--navy:    #0D2240;
--white:   #FFFFFF;
--surface: #F5F5F5;
--black:   #000000;
--muted:   #666666;
--border:  #E0E0E0;
--green:   #00A651;
--red:     #D0021B;
```

---

## 12 Slides — content & layout

### Slide 1 — Hero Title
**Layout:** Dark navy, two decorative translucent circles (top-right, bottom-right)  
**Content:**
- Orange pill tag: "✈ Crew Learning Module"
- H1: "Food Safety" — white, "Safety" in orange, 72px/900 weight
- Subtitle: "Airline Safety & Ground Operations" — muted white 28px
- Row of 8 small grey pill tags listing the module names:
  Causes of Food Poisoning · Bacteria & Growth · High-Risk Foods · Control Measures · Cross-Contamination · Personal Hygiene · Temperature Control · Unfit Food & Reporting

---

### Slide 2 — Why It Matters
**Layout:** Left/right split (45% / 55%)  
**Left panel — orange background:**
- Small eyebrow: "Why it matters"
- Large bold quote (60px/900): "You are the last line of defence."
- Supporting sentence: A single onboard food poisoning incident can mean passenger illness, a flight diversion, and serious legal and reputational consequences.

**Right panel — white:**
- Orange eyebrow: "Module Overview"
- Heading: "Protecting every passenger. Every flight."
- 2×2 grid of cards (orange top border, grey background):
  - **Mission:** Protect passenger & crew health by maintaining the highest standards of food hygiene at every stage of service.
  - **Scope:** Applies to all crew involved in food handling — from catering collection to service and disposal.
  - **Regulatory Basis:** Compliant with Regulation (EC) 852/2004, UK Food Safety Act 1990, and airline food safety management systems.
  - **Completion:** All crew must complete this module and pass the end assessment before undertaking food service duties.

---

### Slide 3 — The Main Causes of Food Poisoning
**Layout:** White, standard header + 3×2 icon card grid  
**Eyebrow:** Module 01  
**Title:** "The Main Causes of Food Poisoning"  
**6 cards** (each: emoji · bold title · description · left orange border):
1. 🦠 **Bacteria & Toxins** — Salmonella, Listeria, E. coli, Campylobacter, Staph aureus contaminate food and multiply rapidly.
2. 🔬 **Viruses** — Norovirus and Hepatitis A transfer from infected food handlers; rapid-onset illness in tiny quantities.
3. ⚗️ **Chemical Contamination** — Cleaning chemicals, pesticide residues, or non-food-grade materials introduced during handling.
4. 🌿 **Natural Toxins** — Kidney beans, certain shellfish, spoiled fish (histamine) when undercooked or incorrectly stored.
5. 🙌 **Poor Personal Hygiene** — Failure to wash hands, working while ill — leading contributors in aviation catering incidents.
6. 🌡️ **Incorrect Temperature** — Wrong temperatures allow bacterial growth and toxin production; critical risk on long-haul flights.

**Footer alert bar** (red left border): "Key symptoms: nausea, vomiting, diarrhoea, abdominal pain, fever — onset 30 minutes to 72 hours after ingestion."

---

### Slide 4 — Common Food-Poisoning Bacteria
**Layout:** Dark navy background, standard header, full-width table  
**Eyebrow:** Module 02  
**Title:** "Common Food-Poisoning Bacteria in Aviation Catering"  
**Table** — orange header row, 3 columns (Bacterium | Common Sources | Risk), alternating row shading:

| Bacterium | Common Sources | Risk |
|---|---|---|
| Salmonella spp. | Raw poultry, eggs, dairy, unwashed produce | Nausea, fever, diarrhoea |
| Listeria monocytogenes | Ready-to-eat meats, soft cheeses, smoked fish | Serious risk to pregnant / immunocompromised |
| E. coli O157 | Undercooked beef, raw veg, cross-contamination | Severe bloody diarrhoea, kidney failure |
| Campylobacter | Raw poultry, unpasteurised milk | Most common cause of bacterial food poisoning |
| Staphylococcus aureus | Skin, nose, throat of food handlers | Rapid-onset vomiting via toxins |
| Bacillus cereus | Rice, pasta, cereals — spores survive cooking | Toxin causes vomiting or diarrhoea |

Bacterium column: orange italic. Risk column: muted/small.

---

### Slide 5 — F-A-T-T-O-M Bacterial Growth
**Layout:** White, header + 6 equal navy cards in a single row  
**Eyebrow:** Module 02 — Bacterial Growth  
**Title:** "What bacteria need to multiply: F-A-T-T-O-M" (F-A-T-T-O-M in orange)  
**6 cards** (each: giant orange letter 52px · bold word · small description in muted white):
- **F** — Food: High-protein foods: meat, fish, eggs, dairy, rice, pasta
- **A** — Acidity: Pathogens prefer neutral pH 6.5–7.5. Acidic foods inhibit growth
- **T** — Temperature: 5°C–63°C is the danger zone. Doubles every 20 mins at 37°C
- **T** — Time: Safe → dangerous level in as little as 2–4 hours
- **O** — Oxygen: Most are aerobic. Anaerobes (e.g. C. botulinum) thrive without
- **M** — Moisture: High water activity (Aw >0.85) supports growth. Dried = lower risk

**Footer note:** "Remove any one of these conditions and bacterial growth is severely limited. **Temperature and time are the ones crew control directly.**"

---

### Slide 6 — The Danger Zone
**Layout:** Left/right split (42% / 58%)  
**Left panel — navy:**
- Eyebrow: Module 02 — Temperature
- Title: "The Danger Zone" ("Danger" in orange)
- Body: Between 5°C and 63°C, bacteria multiply at dangerous speed. At body temperature (37°C), some strains double every 20 minutes.
- Orange rule box: "⚠ Never leave high-risk food in the danger zone for more than 2 hours cumulative."

**Right panel — white:**  
4 stacked colour-coded zone bars (each: large temp text · zone label · description):
1. **≥ 63°C** (red tint, red text) — Hot Holding / Reheating: Core temp must reach 75°C before serving.
2. **5–63°C** (orange tint, orange text) — ⚠ THE DANGER ZONE: Max 2 hours cumulative. Discard if exceeded. **"HIGH RISK" badge.**
3. **≤ 5°C** (green tint, green text) — Chilled Storage: Check on loading. Do not serve if exceeded.
4. **≤ −18°C** (blue tint, blue text) — Frozen Storage: Must remain frozen at all times.

---

### Slide 7 — High-Risk Foods
**Layout:** White, standard header + 3×2 card grid with box shadow  
**Eyebrow:** Module 03  
**Title:** "High-Risk Foods in Airline Catering"  
**6 cards** (each: emoji · title · description, horizontal layout):
1. 🍗 **Cooked Meat & Poultry** — Chicken, beef, pork — must remain cold-chain protected throughout service.
2. 🐟 **Cooked Seafood & Fish** — Salmon, prawn dishes, sushi — highly perishable and temperature sensitive.
3. 🧀 **Dairy Products** — Soft cheeses, yoghurt, cream sauces, custard — support Listeria and Staph growth.
4. 🥚 **Eggs & Egg Products** — Quiches, mayo, egg-based salads — risk of Salmonella if temperature control fails.
5. 🥗 **Ready-to-Eat Salads** — Pre-prepared with cooked components — no further heating, immediate contamination risk.
6. 🍚 **Cooked Rice & Pasta** — Bacillus cereus spores survive cooking and produce toxins during cooling.

**Alert bar** (orange left border): "High-risk foods must NEVER be left at ambient temperature for more than 2 hours. Cold items below 5°C — hot items above 63°C."

---

### Slide 8 — Control Measures
**Layout:** Light grey (#F5F5F5) background, standard header, 3×2 grid of white shadow cards  
**Eyebrow:** Module 04  
**Title:** "Control Measures — Food Hygiene & Safety"  
**6 numbered cards** (orange circle number · bold title · description):
1. **HACCP Principles** — Hazard Analysis and Critical Control Points: identify hazards, set critical limits, monitor, verify, keep records. Backbone of airline catering safety.
2. **Supplier Assurance** — Only accept food from approved, audited suppliers. Check delivery seals, temperatures, and use-by dates at loading.
3. **Segregation** — Keep raw and ready-to-eat items physically separated. Use dedicated colour-coded equipment.
4. **Cleaning & Disinfection** — Trolleys, surfaces, equipment cleaned per SOPs. Clean-as-you-go during all service.
5. **Temperature Monitoring** — Check and record chilled item temperatures on loading and during service. Report exceedances immediately.
6. **Waste Management** — Food waste bagged and secured. Never re-use or re-serve leftover food. Dispose per aircraft waste regulations.

---

### Slide 9 — Cross-Contamination & Prevention
**Layout:** Dark navy, standard header, 4-column type cards + 4 S's colour bar  
**Eyebrow:** Module 05  
**Title:** "Cross-Contamination & Prevention"  
**4 type cards** (dark glass style):
- **Direct Contact:** Raw food (e.g. meat juice) directly contacts ready-to-eat food.
- **Via Hands:** Touch raw food then handle RTE items without washing. Most common route in cabin crew scenarios.
- **Equipment Transfer:** Same tongs/trays/surfaces for raw and RTE without cleaning between uses.
- **Drip Contamination:** Liquids from high-risk items drip onto items stored below. Always store raw below RTE.

**4 S's bar** (4 equal colour blocks, no gaps, border-radius on outer corners):
- Red = **SEPARATE** — Keep raw and RTE foods apart at all times
- Orange = **SANITISE** — Clean and disinfect surfaces and equipment
- Blue (#0077CC) = **SAFE STORAGE** — Store correctly: raw below RTE, sealed containers
- Green = **SAFE HANDS** — Wash hands between handling different food types

---

### Slide 10 — Personal Hygiene
**Layout:** Left/right split (44% / 56%)  
**Left panel — orange:**
- Eyebrow: Module 06
- Title: "Personal Hygiene Standards"
- 7-item checklist (white tick · white text):
  1. Report illness before duty — never handle food when unwell
  2. Nails short, clean, no polish or false nails during service
  3. No watches, rings, or jewellery (plain wedding band only)
  4. Hair tied back or covered at all times during service
  5. Clean uniform; cover cuts with brightly coloured waterproof dressing
  6. No eating, drinking, chewing gum, or smoking near catering
  7. Avoid touching face, nose, hair, or clothing while handling food

**Right panel — white:**
- Sub-label: "The 6-Step Hand Washing Procedure"
- Sub-title: "Minimum 20 seconds with soap and warm water."
- 6 cards in a row (orange top border · large step number · label):
  1 Wet & Soap · 2 Palm to Palm · 3 Back of Hands · 4 Interlace Fingers · 5 Thumbs & Nails · 6 Rinse & Dry
- Note (orange left border): "Dry with a single-use paper towel. Wash hands: before food handling · after using the toilet · after touching raw food · after handling waste · after coughing or sneezing · after touching your face."

---

### Slide 11 — Temperature Control Table
**Layout:** White, standard header, full-width 4-column table  
**Eyebrow:** Module 07  
**Title:** "Temperature Control — Requirements & Actions"  
**Table** — navy header row, 5 data rows, columns: Zone | Temperature | Requirement | Action if Exceeded

| Zone | Temperature | Requirement | Action if Exceeded |
|---|---|---|---|
| Frozen Storage | ≤ −18°C (blue badge) | Frozen items must remain frozen at all times | Remove from service; report to senior crew |
| Chilled Storage | ≤ 5°C (green badge) | All high-risk chilled items; check on loading | Do not serve; quarantine; complete non-conformance report |
| ⚠ Danger Zone | 5°C – 63°C (orange badge) | Minimise time in this range; max 2 hours cumulative | Discard if 2-hour limit exceeded or in doubt |
| Hot Holding | ≥ 63°C (red badge) | Hot food must reach 75°C core before serving; hold at ≥63°C | Reheat fully or discard; never serve lukewarm hot food |
| Galley Ambient | ≤ 25°C (grey badge) | Keep service area cool; limit door-open time | Monitor; minimise exposure of perishables |

Temperature badges: colour-coded pill shapes. Action column: red text.  
**Golden Rule bar** (orange left border): "When in doubt, throw it out. Never take risks with temperature-abused food — passenger safety is paramount."

---

### Slide 12 — Unfit Food Procedure & Key Messages
**Layout:** Dark navy, standard header, 2-column layout  
**Eyebrow:** Module 08 — Completing the Module  
**Title:** "Unfit Food Procedure & Key Messages"

**Left column — Food Complaint Procedure (6 steps):**  
Each step: coloured circle number · keyword · description  
1. 🔴 **STOP** — Remove the item from service immediately. Do not discard it.
2. 🟠 **ISOLATE** — Sealed bag — label with flight number, date, seat number, description.
3. 🔵 **INFORM** — Notify the Senior Cabin Crew Member / Purser immediately.
4. 🟢 **DOCUMENT** — Complete a Catering Non-Conformance / Incident Report (paper or EFB).
5. 🟣 **PRESERVE** — Retain for investigation. Hand to ground staff per SOPs for sample retention.
6. 🩵 **REPORT** — Submit to Food Safety / Quality team before end of duty.

**Right column — 6 Non-Negotiable Key Messages:**  
Each: emoji icon · bold orange keyword · description  
- 🙌 **Wash your hands.** Before food handling, after the toilet, after touching raw food.
- 🌡️ **Control temperature.** Never leave high-risk food in the danger zone (5°C–63°C) for more than 2 hours.
- ⚠️ **Prevent cross-contamination.** Separate raw from RTE. Sanitise surfaces. Keep equipment clean.
- 🤒 **Report illness.** Do not handle food if unwell with vomiting, diarrhoea, or skin infections.
- 🚫 **Reject & report unfit food.** If in doubt, take it out — isolate, document, report.
- 📋 **Follow procedures.** SOPs exist to protect passengers and crew. Know them. Follow them. Every flight.

---

## Design rules to apply to every slide
- ≥40% whitespace ratio per slide
- One accent colour (orange) per slide — never compete with a second saturated colour
- Headline ≥42px, body ≥13px, captions ≥12px
- 8pt spacing grid throughout (all gaps multiples of 8px)
- 5% safe zone from all edges (≈36px on 720px height)
- WCAG 4.5:1 minimum contrast on all text
- No gradients, no drop shadows >8px, no decorative borders
- Dark slides (navy): use slides 1, 4, 5, 9, 12 for rhythm and variety
- Split slides (orange left / white right): slides 2, 6, 10
