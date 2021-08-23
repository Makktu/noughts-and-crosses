"use strict";

function newUser(name, level) {
    this.name = name;

    level === 0 ? (this.isAdmin = false) : (this.isAdmin = true);
}

let user1 = new newUser("John", 1);

console.log(user1);
