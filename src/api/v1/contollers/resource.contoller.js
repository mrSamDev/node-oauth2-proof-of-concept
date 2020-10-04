const randomstring = require("randomstring");

const codeVault = async (req, res) => {
  res.send({
    success: true,
    message: "Use only incase of emergency",
    data: {
      nuclearlaunchCodes: Array(6)
        .fill()
        .map(() => randomstring.generate()),
    },
  });
};

module.exports = codeVault;
