"use strict";

function New_user(name, level) {
    this.name = name;

    level === 0 ? (this.isAdmin = false) : (this.isAdmin = true);
}

let user1 = new New_user("Dee", 0);

console.log(`${user1.name} ${user1.isAdmin ? "is " : "is not "}Admin`);
