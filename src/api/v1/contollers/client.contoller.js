const request = require("request-promise");
const httpStatus = require("http-status");

const checkingRequestPermissions = async (req, res) => {
  const permissionGranted = await request({
    uri: `http://localhost:7001/api/v1/ask/cia`,
    json: true,
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.AUTH_CLIENTID + "." + process.env.AUTH_ClIENT_CLIENT_SECRET}`,
    },
    form: {
      grant_type: "client_credentials",
      scope: process.env.SCOPE,
    },
  });

  const response = await request({
    uri: `http://localhost:7001/api/v1/get/launch-codes`,
    method: "GET",
    json: true,
    headers: {
      authorization: `${permissionGranted.token_type} ${permissionGranted.access_token}`,
    },
  });

  if (response.success) return res.status(httpStatus.OK).send(response);
  else throw new Error("Some thing went wrong");
};

module.exports = checkingRequestPermissions;
