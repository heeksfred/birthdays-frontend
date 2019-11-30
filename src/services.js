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
    }
]

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




  module.exports = { getBirthdayWithinRange };