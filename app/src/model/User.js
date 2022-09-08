 "user-strict"

 const UserStorage = require("./userstorage");

 class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const {id, pw} = UserStorage.getUserInfo(this.body.id);
        if(id){
            if(id===this.body.id && pw === this.body.pw){
                return { succes : true };
            }
            return { succes : false, msg: "비밀번호가 틀렸습니다. "}; // ID는 존재 했으므로 
        }
        return {succes : false, msg: "존재하지 않느 아이디입니다."} // ID 조차 존재 하지 않았으므로 
    }
 }

 module.exports = User;