"use strict";

var birthday_list = [
    {
        "name": "John Doe",
        "birthday": "1981-08-02"
    },
    {
        "name": "Katie Smith",
        "birthday": "1973-05-20"
    },
    {
        "name": "Anna Jackson",
        "birthday": "1993-10-15"
    },
    {
        "name": "Fred Heeks",
        "birthday": "1970-11-30"
    },
    {
        "name": "Next Date",
        "birthday": "1970-12-14"
    }
]

  /*
   * Gets all the birthdays in the birthday_list
   * returns - array of {name: <name>, birthday: <date>}
   */
function getAllBirthdays() {
    console.log("Birthdays: "+JSON.stringify(birthday_list));
    return birthday_list;
}

  /*
   * Gets all the birthdays in the supplied date range
   * fromDate - start of date range, in yyyy-mm-dd format
   * toDate - end of date range, in yyyy-mm-dd format
   * returns - array of {name: <name>, birthday: <date>}
   */
function getBirthdayWithinRange(fromDate, toDate) {
     // format: mm-dd;
     fromDate = fromDate.split("-");
     toDate = toDate.split("-");

     let birthdaysWithinRange = birthday_list.filter(birthday => {
        let birthdate = birthday.birthday.split("-");
        
        if (fromDate[0] < birthdate[1] && toDate[0] > birthdate[1]) 
            return true;
        else if (fromDate[0] == birthdate[1] && fromDate[1] <= birthdate[2])
            return true;
        else if (toDate[0] == birthdate[1] && toDate[1] >= birthdate[2])
            return true;
        else return false;
     });
 
     return birthdaysWithinRange;
}

  /*
   * Gets all the birthdays for today
   * returns - array of {name: <name>, birthday: <date>}
   */
  function getTodaysBirthdays() {
    let now = new Date();
    let today = now.getMonth() + 1 + "-" + now.getDate();
    
    return getBirthdayWithinRange(today, today);
  }

  /*
   * Gets all the birthdays in the next two weeks
   * returns - array of {name: <name>, birthday: <date>}
   */
  function getBirthdaysInNextTwoWeeks() {
    let now = new Date();
    let today = now.getMonth() + 1 + "-" + now.getDate();
    let nextdate = new Date(now.getFullYear(),now.getMonth(),now.getDate()+14);
    let twoWeeksFromNow = nextdate.getMonth() + 1 + "-" + nextdate.getDate();

    return getBirthdayWithinRange(today, twoWeeksFromNow);
  }

  /*
   * Calculate the age of a person on their next birthday
   * birthdate - the birthday to check, in yyyy-mm-dd format
   * returns - age of the person on their next birthday
   */
  function calculateAge(birthdate) {
    birthdate = birthdate.split("-");
    let now = new Date();

    let currentYear = now.getFullYear();
    let birthYear = birthdate[0];

    return (currentYear - birthYear);
  }


  module.exports = { getAllBirthdays, getBirthdayWithinRange, getTodaysBirthdays, getBirthdaysInNextTwoWeeks, calculateAge };