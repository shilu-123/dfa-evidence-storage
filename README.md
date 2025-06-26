# 🛡️ DFA Evidence Storage - Web3-Based Digital Forensics System

Secure, Decentralized & Verifiable Digital Evidence Management using Ethereum and IPFS.

---

## 📑 Table of Contents

- [📌 About the Project](#-about-the-project)
- [💡 Problem Statement](#-problem-statement)
- [✅ Solution Highlights](#-solution-highlights)
- [🚀 Key Features](#-key-features)
- [🧱 Tech Stack](#-tech-stack)
- [📥 Installation & Setup](#-installation--setup)
- [🧪 Running the Application](#-running-the-application)
- [🔐 .env Configuration](#-env-configuration)
- [📈 Future Roadmap](#-future-roadmap)
- [🏆 Hackathon Impact](#-hackathon-impact)
- [🙌 Acknowledgements](#-acknowledgements)
- [👩‍💻 About the Developer](#-about-the-developer)
- [📄 License](#-license)

---

## 📌 About the Project

**DFA Evidence Storage** is a decentralized digital forensics system built using Web3 technologies. The application ensures that any uploaded digital evidence is:
- 📁 Immutable (via IPFS)
- ⛓️ Timestamped and stored on the blockchain (Ethereum Sepolia)
- 🔐 Securely accessed by verified investigators (via MetaMask)

This project aims to **modernize legal evidence workflows** by bringing **transparency, trust, and tamper-resistance** to digital forensic records.

---

## 💡 Problem Statement

Traditional digital forensic systems face serious challenges:
- ❌ Evidence stored on centralized servers is vulnerable to tampering, unauthorized access, or deletion.
- ❌ Lack of transparency regarding chain-of-custody.
- ❌ No public audit trail for evidence authenticity or timestamp verification.

---

## ✅ Solution Highlights

DFA Evidence Storage addresses the above issues through:
- **Decentralized File Storage (IPFS)**: Ensures immutability.
- **Blockchain Timestamps**: Record proof-of-existence using smart contracts.
- **MetaMask Integration**: Verifies identity and access rights securely.
- **Public Audit Trail**: Any uploaded file’s authenticity can be verified via Ethereum explorers.

---

## 🚀 Key Features

- 🔐 MetaMask Wallet Authentication
- 📤 Upload Digital Evidence Files
- 📦 IPFS-based Decentralized Storage
- ⛓️ Smart Contract Logging (Sepolia Testnet)
- 📅 Blockchain Timestamping & Hash Storage
- 🔍 Evidence Integrity Verification via Hash Lookup
- 📜 Transparent Public Record of Uploads

---

## 🧱 Tech Stack

| Layer         | Technologies Used                                      |
|---------------|---------------------------------------------------------|
| **Frontend**  | React.js, Web3.js                                       |
| **Backend**   | Node.js, Express.js                                     |
| **Blockchain**| Solidity, Hardhat, Ethereum (Sepolia), MetaMask         |
| **Storage**   | IPFS (via Pinata or Infura)                             |
| **Environment** | .env files for secrets and keys                       |

---

## 📥 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shilu-123/dfa-evidence-storage.git
cd dfa-evidence-storage
2. Install Dependencies
Frontend
cd frontend
npm install
Backend

bash
Copy code
cd ../backend
npm install
Smart Contracts

bash
Copy code
cd ../contract
npm install
🧪 Running the Application
✅ Start Backend Server
bash
Copy code
cd backend
npm start
✅ Deploy Smart Contract (Sepolia Testnet)
bash
Copy code
cd ../contract
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
After deployment, update your contract address and ABI in:
frontend/src/constants/index.js

✅ Start Frontend App
bash
Copy code
cd ../frontend
npm start
🔐 .env Configuration
/backend/.env
env
Copy code
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret
/contract/.env
env
Copy code
PRIVATE_KEY=your_metamask_wallet_private_key
INFURA_API_KEY=your_infura_project_id
📈 Future Roadmap
✅ Role-Based Access (Investigator, Admin, Court Authority)

🔐 Integration of Multi-Key Homomorphic Encryption (AOKGE Model)

📊 Visual Chain-of-Custody Timeline

☁️ Filecoin / Arweave Long-Term Archival Storage

🪪 Aadhaar or eKYC-Based Real Identity Binding

🏆 Hackathon Impact
This project was built as a winning solution for CodeClash Hackathon 2025, addressing a critical gap in digital forensic systems.
It impressed judges for its combination of blockchain, decentralization, and security applied to a real-world legal need.

🙌 Acknowledgements
Inspired by research on DFA-AOKGE (Digital Forensic Authentication with Optimal Key Generation & Encryption).

Ethereum, Hardhat, Pinata, and IPFS documentation.

CodeClash 2025 organizing committee and mentors.

