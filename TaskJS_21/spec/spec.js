var obj = require('../js/script.js');


describe("test", function() {
  it("1 test pow", function() {

    var res1;

    res1 = obj.pow(2, 2);

    expect(res1).toBe(4);
  });

  it("2 test pow", function() {

    var res2;

    res2 = obj.pow(4, -2);

    expect(res2).toBe(0.0625);
  });

  it("3 test pow", function() {

    var res3;

    res3 = obj.pow(-3, 2);

    expect(res3).toBe(9);
  });

  it("4 test pow", function() {

    var res4;

    res4 = obj.pow(-2, -2);

    expect(res4).toBe(0.25);
  });
});
