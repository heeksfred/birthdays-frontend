const serv = require("../src/services");

describe("Check date range", () => {
  test("it should return all birthdays within a date range", () => {

    expect(serv.getBirthdayWithinRange('01-01', '10-15').length).toEqual(3);
    expect(serv.getBirthdayWithinRange('01-01', '10-14').length).toEqual(2);
  });
});

describe("Check todays birthdays", () => {
    test("it should return all birthdays for today", () => {
  
      let now = new Date();
      let nowdate = "1970-" + (now.getMonth() + 1) + "-" + now.getDate();
      expect(serv.getTodaysBirthdays()).toEqual([{birthday: nowdate, name: "Fred Heeks"}]);
    });
  });

describe("Check birthdays in the next two weeks", () => {
    test("it should return all birthdays within two weeks", () => {

      let now = new Date();
      let nowdate = "1970-" + (now.getMonth() + 1) + "-" + now.getDate();
      let nextdate = new Date("1970",now.getMonth(),now.getDate()+14);
      let fortnight = nextdate.getFullYear() + "-" + (nextdate.getMonth() + 1) + "-" + nextdate.getDate();
      expect(serv.getBirthdaysInNextTwoWeeks()).toEqual([{birthday: nowdate, name: "Fred Heeks"},{birthday: fortnight , name: "Next Date"}]);
    });
});
