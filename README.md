# 🛡️ DFA Evidence Storage - Web3-Based Digital Forensics System

Secure, Decentralized & Verifiable Digital Evidence Management built on Blockchain and IPFS.

![DFA Evidence Banner](./assets/banner.png) <!-- Optional: Add a banner image -->

---

## 📌 About the Project

In traditional digital forensic systems, digital evidence is often stored in centralized servers, making it vulnerable to tampering, unauthorized access, and single points of failure. These limitations can compromise legal investigations and the credibility of evidence in court.

**DFA Evidence Storage** is a decentralized application (dApp) designed to revolutionize digital evidence management using Web3 technologies. It leverages:
- **IPFS** for decentralized, immutable file storage
- **Ethereum Smart Contracts** (Sepolia Testnet) for transparent and tamper-proof logging
- **MetaMask** for wallet-based user authentication

---

## 💡 Problem Statement

Digital forensic evidence stored in centralized systems is vulnerable to tampering, loss, and unauthorized access, making it unreliable in legal proceedings. There's a need for a secure, decentralized, and verifiable storage solution.

---

## ✅ Solution Highlights

- 🔐 **MetaMask-Based Authentication**  
  Ensures only verified users can interact with the system.

- 📤 **Secure Evidence Upload**  
  Evidence files are uploaded to IPFS using Pinata or Infura.

- ⛓️ **Blockchain Record Keeping**  
  Stores the IPFS hash + timestamp on Ethereum Sepolia via smart contracts.

- 🔍 **Proof of Integrity**  
  Verify any uploaded file’s hash and storage time using public blockchain.

- 🧾 **Transparent Audit Trail**  
  Every transaction is logged on-chain and viewable by the public.

---

## 🚀 Key Features

- 🧑‍💻 Decentralized Authentication via MetaMask
- 📁 Upload & Register Evidence Files
- 🧬 IPFS Storage via Pinata/Infura
- ⛓️ Ethereum Smart Contract Logging
- 🧠 Verifiable Hash & Timestamp Proof
- 📜 Transparent & Tamper-Proof Audit Trail

---

## 🧱 Built With

| Layer         | Technologies Used                                     |
|---------------|--------------------------------------------------------|
| **Frontend**  | React.js, Web3.js                                      |
| **Backend**   | Node.js, Express.js                                    |
| **Blockchain**| Solidity, Hardhat, Sepolia Testnet, MetaMask           |
| **Storage**   | IPFS, Pinata, Infura                                   |
| **Other**     | dotenv, Ethers.js, CORS, Axios                         |

---

## ⚙️ Getting Started

### 🔧 Prerequisites

Make sure you have the following installed:
- Node.js and npm
- MetaMask browser extension
- Hardhat for smart contract development
- Infura or Pinata API key
- Ethereum wallet funded with Sepolia testnet ETH

---

### 📥 Installation
2. Install Dependencies
Frontend

bash
Copy
Edit
cd frontend
npm install
Backend

bash
Copy
Edit
cd ../backend
npm install
Smart Contracts

bash
Copy
Edit
cd ../contract
npm install
🧪 Running the Application
✅ Start Backend Server
bash
Copy
Edit
cd backend
npm start
✅ Deploy Smart Contract on Sepolia
bash
Copy
Edit
cd ../contract
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
After deployment, copy the contract address and ABI to frontend/src/constants/.

✅ Start Frontend App
bash
Copy
Edit
cd ../frontend
npm start
🔐 .env Configuration
Create a .env file in the relevant folders:

/backend/.env
env
Copy
Edit
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret
/contract/.env
env
Copy
Edit
PRIVATE_KEY=your_metamask_wallet_private_key
INFURA_API_KEY=your_infura_project_id
#### 1. Clone the Repository

```bash
git clone https://github.com/shilu-123/dfa-evidence-storage.git
cd dfa-evidence-storage
🔭 Future Roadmap
✅ Role-based Access for Investigators, Police, Legal Experts

🔐 Advanced Encryption with DFA-AOKGE + Multi-Key Homomorphic Encryption

📊 Chain-of-Custody Visualization Dashboard

☁️ Filecoin / Arweave for Permanent Evidence Storage

🪪 eKYC Integration using Aadhaar or DigiLocker

🏆 Hackathon Impact
This project was developed as part of CodeClash Hackathon 2025 and selected as a winning solution for its innovation in combining Web3 with Digital Forensics.




