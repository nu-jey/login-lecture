 "user-strict"

 const UserStorage = require("./userstorage");

 class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body;
        try{
            const {id, pw} = await UserStorage.getUserInfo(client.id);

            if(id){
                if(id===client.id && pw === client.pw){
                    return { success : true };
                }
                return { success : false, msg: "비밀번호가 틀렸습니다. "}; // ID는 존재 했으므로 
            }
            return {success : false, msg: "존재하지 않는 아이디입니다."} // ID 조차 존재 하지 않았으므로 
        }catch(err){
            return { success : false, err };
        }
        
    }
    
    async register(){ 
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }
        catch(err){
            return {success: false, err};
        }
    }
 }

 module.exports = User;