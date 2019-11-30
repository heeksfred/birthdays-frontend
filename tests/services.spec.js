const serv = require("../src/services");

describe("Check date range", () => {
  test("it should return all birthdays within a date range", () => {

    expect(serv.getBirthdayWithinRange('01-01', '10-15').length).toEqual(3);
    expect(serv.getBirthdayWithinRange('01-01', '10-14').length).toEqual(2);
  });
});

