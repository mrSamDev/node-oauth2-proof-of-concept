const Auth = require("../../../auth/auth");

const codeRequestPermissins = (req, res) => {
  const token = Auth.generateAuthToken(req.body);
  return res.send({ success: true, token_type: "Bearer", access_token: token });
};

module.exports = codeRequestPermissins;
