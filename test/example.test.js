const assert = require("assert");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("Get nuclear code server code", () => {
  it("it should get nuclear codes from server", (done) => {
    chai
      .request(server)
      .get("/api/v1/nuclear/codes")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.have.property("nuclearlaunchCodes");
        done();
      });
  });
});

describe("Get nuclear code server status", () => {
  it("it should get nuclear codes status", (done) => {
    chai
      .request(server)
      .get("/api/v1/nuclear/codes/status")
      .send({})
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
