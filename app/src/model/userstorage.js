"use strict"

const fs = require("fs").promises;

class UserStorage {
    // 은닉화한 함수는 최상단으로 
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users);
            const userInfo = usersKeys.reduce((newUser, info)=> {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            return userInfo;
    }

    static getUsers(...fields){
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
       return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        }) // 위의 로직이 성공하면 실행 
        .catch(console.error) // 위의 로직이 실패하면 실행  
        
    }

    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return {succes : true};
    }
}

module.exports = UserStorage;