"use strict"

const users = {
    id: ["a", "b", "c"],
    pw: ["123", "1234", "1234"],
};

const output = {
    home : (req, res)=>{   
        res.render("home/index");
    },   
    login : (req, res)=>{
        res.render("home/login");
    }
}

const process = {
    login : (req, res)=>{
        const id = req.body.id,
        pw = req.body.pw;
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx]=== pw){
                return res.json({
                    succes: true,
                });
            }
        }

        return res.json({
            succes: false,
            msg: "로그인에 실패했습니다.", 
        });
    }
}

module.exports ={
    output,
    process,
};