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
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll){
            return users;
        }
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUsers(isAll, ...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        }) // 위의 로직이 성공하면 실행 
        .catch(console.error) // 위의 로직이 실패하면 실행  

        
    }

    static getUserInfo(id){
       return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        }) // 위의 로직이 성공하면 실행 
        .catch(console.error) // 위의 로직이 실패하면 실행  
        
    }

    static async save(userInfo){
        const users = await this.getUsers(true); // 기존의 데이터 불러오고
        if(users.id.includes(userInfo.id)){     // id가 기존의 데이터에 엎으면  
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);          // id, pw, 이름 추가 
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users)); // 파일 덮어쓰기 
        return {success : true};
    }
}

module.exports = UserStorage;