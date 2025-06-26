const crypto = require('crypto');
const axios = require('axios');

async function fetchEEOKey() {
  const res = await axios.get('http://localhost:6000/generate-key');
  return Buffer.from(res.data.key); // Convert to Buffer for AES use
}

// function generateKey() {
//   return crypto.randomBytes(32).toString('hex');
// }

async function encryptData(data) {
  const key = await fetchEEOKey();
  const iv = Buffer.alloc(16, 0); // Initialization Vector
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  const authTag = cipher.getAuthTag().toString('hex');
  return { encrypted, key: key.toString('hex'), authTag };
}

async function decryptData(encryptedData, hexKey, authTag) {
  const key = Buffer.from(hexKey, 'hex');
  const iv = Buffer.alloc(16, 0);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { encryptData, decryptData };