const jwt = require("jsonwebtoken");
const token = jwt.sign(
  {
    data: { one: "foobar" },
  },
  "ORLwSCvItIxgSjVbJazRzK3DUxSVdYBd"
);

const [clientId, CLIENT_SECRET, CLIENT_SECRET1] = token.split(".");

const decodeToken = clientId + "." + CLIENT_SECRET + "." + CLIENT_SECRET1;

jwt.verify(decodeToken, "secret", function (err, decoded) {
  // bar
});
