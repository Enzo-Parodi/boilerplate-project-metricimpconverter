/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
// console.log("{ initNum, initUnit, returnNum, returnUnit }", { initNum, initUnit, returnNum, returnUnit })
    return res.send({ initNum, initUnit, returnNum, returnUnit });
  });

  // ert.equal(res.status, 200);
  //       assert.equal(res.body.initNum, 10);
  //       assert.equal(res.body.initUnit, 'l');
  //       assert.approximately(res.body.returnNum, 2.64172, 0.1);
};
