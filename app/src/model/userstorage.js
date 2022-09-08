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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info)=> {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        console.log(userInfo);
        return userInfo;
    }

}

module.exports = UserStorage;