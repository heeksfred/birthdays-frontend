const serv = require("../src/services");

var birthday_list = [];

beforeAll(() => {
  // Clears the birthday_list and adds some test data.
  birthday_list.length = 0;
  let now = new Date();
  birthday_list.push({name: "John Doe", birthday: "1981-08-02"});
  birthday_list.push({name: "Katie Smith", birthday: "1973-05-20"});
  birthday_list.push({name: "Anna Jackson", birthday: "1993-10-15"});
  birthday_list.push({name: "Fred Heeks", birthday: "1970-" + now[1] + "-" + now[2]});
  let nextdate = new Date("1970",now.getMonth(),now.getDate()+14);
  birthday_list.push({name: "Next Date", birthday: "1970-" + (nextdate.getMonth() + 1) + "-" + nextdate.getDate()});
});

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

describe("Calculate ages of people in the birthday list", () => {
  test("it should return the persons age who has a birthday today (50)", () => {

      const birthdayBoy = serv.getTodaysBirthdays();
      console.log("Birthday boy is " + birthdayBoy[0].name);
      expect(serv.calculateAge(birthdayBoy[0].birthday)).toEqual(49);
  })
})
