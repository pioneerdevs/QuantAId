# QUANTAID  
Quantum-Armored AI Data Proofs for the Post-Quantum Era  

![QUANTAID Hero](https://github.com/pioneerdevs/QuantAId/blob/main/preview.png?raw=true)

QUANTAID helps AI builders secure sensitive datasets with post-quantum encryption and store lightweight, verifiable proofs on BlockDAG.

This repository contains a working MVP that you can run locally to see encryption and on-chain proof anchoring in action.

---

## 1. The Problem (Utility & Problem Fit)
AI systems rely on private and valuable data.  
Once that data leaks or is altered, trust is gone.

Current encryption methods are vulnerable to future quantum attacks, and most teams have no simple way to:
- Prove a dataset was secured correctly
- Verify it has not been altered
- Do this without putting large data on-chain

QUANTAID solves this by separating **heavy data handling off-chain** and **lightweight verification on BlockDAG**.

---

## 2. What QUANTAID Does (Clear Product Explanation)
QUANTAID is a client-side tool that allows users to:

- Scan AI datasets for basic risks
- Encrypt the dataset using post-quantum cryptography
- Generate a cryptographic proof (hash + metadata)
- Store that proof on BlockDAG
- Share a verification link that anyone can independently check

No raw data is ever sent to the blockchain.

---

## 3. How BlockDAG Is Used (Technical Execution)
BlockDAG is used strictly where it makes sense: **immutable verification**.

What goes on BlockDAG:
- Dataset hash
- Encryption metadata
- Timestamped proof reference

What stays off-chain:
- The actual dataset
- Encryption keys
- AI preprocessing logic

This keeps transactions lightweight, fast, and scalable while still anchoring trust in the BlockDAG network.

---

## 4. Architecture & Tools (Working MVP)
This MVP focuses on real execution, not theory.

**Frontend**
- Next.js (React)
- TailwindCSS
- Client-side encryption flow

**Backend**
- Node.js API
- Proof generation and submission logic

**Security**
- NIST Kyber-1024 (Post-Quantum Encryption)
- Local key generation and encryption

**Blockchain**
- BlockDAG test interaction for proof storage
- Transaction hash returned for verification

You can run the project locally to:
- Encrypt a dataset
- Generate a proof
- Anchor that proof on BlockDAG

---

## 5. Community Involvement & Ecosystem Impact
QUANTAID is designed to grow *with* the BlockDAG community:

- Developers can build plugins for additional dataset scans
- Researchers can publish public proof references
- Startups can integrate QUANTAID as a verification layer
- Community contributors can extend BlockDAG proof formats

Every proof submitted increases BlockDAG usage while remaining lightweight and repeatable.

---

## 6. User Experience
The entire flow is designed to be non-technical:

1. Upload dataset  
2. Click “Secure & Verify”  
3. Receive proof link  

No blockchain knowledge required.

This wave focused heavily on simplifying explanations, reducing jargon, and making the product understandable in seconds.

---

## 7. Scalability
QUANTAID scales naturally because:
- Large files never hit the chain
- Proofs are tiny and cheap
- The system supports repeated usage per user
- Future integrations can batch or automate proofs

This keeps BlockDAG efficient even at high usage.

---

## 8. Iteration From Feedback (Wave 1 → Wave 3)
Based on judge feedback, we:
- Simplified the product explanation
- Reduced technical jargon
- Clarified BlockDAG’s exact role
- Shipped a working encryption flow
- Enabled proof storage on BlockDAG
- Improved documentation and repo clarity

This README reflects those iterations directly.

---

## 9. Run the MVP Locally
```bash
git clone https://github.com/pioneerdevs/QuantAid
cd QuantAid/frontend
npm install
npm run dev
