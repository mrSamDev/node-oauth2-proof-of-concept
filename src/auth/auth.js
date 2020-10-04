const jwt = require("jsonwebtoken");
class Auth {
  constructor() {
    this.keys = {
      client_credentials: process.env.AUTH_CLIENT_CREDENTIALS_KEY,
    };
  }

  verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.keys.client_credentials, function (err, decoded) {
        if (err) return reject(err);
        return resolve(decoded.data);
      });
    });
  }

  verifyAuthToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.AUTH_TOKEN_KEY, function (err, decoded) {
        if (err) return reject(err);
        return resolve(decoded);
      });
    });
  }

  generateAuthToken({ grant_type, scope }) {
    return jwt.sign(
      {
        data: { claims: [scope] },
      },
      this.keys[grant_type],
      { expiresIn: "1h" }
    );
  }
}

module.exports = new Auth();
