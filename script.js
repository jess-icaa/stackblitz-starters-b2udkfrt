const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, error: err.message };
  }
};

const userPayload = { Id: 1, userName: 'keesha_maria' };
const secretKey = 'abc345';

const token = encrypt(userPayload, secretKey);
console.log("Generated token:", token);

const result = verifyToken(token, secretKey);
console.log(result.valid ? "Decoded payload:" : "Error:", result);

module.exports = { encrypt, verifyToken };``