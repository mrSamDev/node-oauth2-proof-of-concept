const Auth = require("../../../auth/auth");
const httpStatus = require("http-status");

const checkingVaultPermissins = async (req, res, next) => {
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
      return res.status(httpStatus.UNAUTHORIZED).send({ error: true, message: "Unauthorized" });
    }
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      idToken = req.headers.authorization.split("Bearer ")[1];
    }

    const { claims } = await Auth.verifyAccessToken(idToken);

    if (!claims.includes(process.env.SCOPE)) {
      throw new Error("Could not verify the proper scope");
    }
    next();
  } catch (error) {
    next(error.message);
  }
};

module.exports = checkingVaultPermissins;
