# QUANTAID  
![QUANTAID Hero](https://github.com/pioneerdevs/QuantAId/blob/main/preview.png?raw=true)
QUANTAID lets you scan AI data, encrypt it with post-quantum security, and anchor a proof on BlockDAG in a few seconds.

---

## What Problem We Solve
AI models are only as strong as the data used to train them.  
That data is private, sensitive, and expensive.  
Today’s encryption will not survive future quantum computers, leaving valuable AI datasets vulnerable.

Attackers are already harvesting encrypted datasets now to decrypt later.  
One breach can destroy trust, ruin reputations, and cost millions.

QUANTAID ensures AI data stays private and secure, protecting both users and organizations while maintaining usability.

---

## Why This Matters / Utility
QUANTAID provides immediate value to AI teams and organizations:

- AI startups can prove datasets are secure and untampered  
- Researchers can safely share sensitive datasets  
- Organizations can comply with privacy regulations while building AI  
- Users gain a permanent verification link for their data proofs  

This isn’t just a security tool—it’s a foundation for trust in AI.

---

## How QUANTAID Works
QUANTAID is simple, secure, and fully client-side:

1. Upload any dataset  
2. Scan for PII, bias, or poisoning  
3. Encrypt the data with post-quantum security (Kyber-1024)  
4. Send only a tiny proof to BlockDAG  
5. Receive a permanent verification link to share or reference  

Everything happens in the browser, so sensitive data never leaves the user’s device.

---

## Architecture & Tools
We focused on **practical, demonstrable execution**:

**Frontend:** Next.js React, TailwindCSS  
**Backend:** Node.js 
**Blockchain Anchor:** BlockDAG for immutable proof storage  
**Security:** NIST Kyber-1024 post-quantum encryption  
**Documentation & Landing:** Markdown README, visual landing page for clarity  

This setup demonstrates real technical execution without overstating the chain’s role.

---

## Ecosystem Impact
Every new QUANTAID user strengthens the BlockDAG ecosystem:

- Each dataset proof increases transaction volume on-chain  
- Startups and researchers become repeat users of BlockDAG  
- Over time, QUANTAID builds a trusted, high-volume AI data layer on BlockDAG  

We’re not just storing proofs—we’re growing a living, useful ecosystem.

---

## Wave Two Progress
For Wave Two, we acted directly on Wave One feedback.  
We simplified explanations, removed jargon, and clarified the user flow. We strengthened the encryption flow, added a mock backend and basic AI simulation, updated documentation, redesigned the README, and built a landing page that communicates the project in seconds. This wave focused on clarity, technical execution, and showing real-world utility. Full details are in the repo README.

---

## Quick Start
```bash
git clone https://github.com/pioneerdevs/QuantAid
cd QuantAid/frontend
npm install && npm run dev
