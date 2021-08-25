"use strict";

// function New_user(name, level) {
//     this.name = name;

//     level === 0 ? (this.isAdmin = false) : (this.isAdmin = true);
// }

// let user1 = new New_user("Dee", 0);

// console.log(`${user1.name} ${user1.isAdmin ? "is " : "is not "}Admin`);

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(Object.values(person));

person.fullName = person.fullName.toString();

let myJsonString = JSON.stringify(person);

console.log(myJsonString);
