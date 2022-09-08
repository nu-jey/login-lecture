"use strict"

class UserStorage {
    static #users = {
    id: ["a", "b", "c"],
    pw: ["123", "1234", "1234"],
    name: ["김", "이", "박"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;