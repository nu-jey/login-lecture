"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw = document.querySelector("#pw"),
    confirmpw = document.querySelector("#confirm-pw"),
    registerbtn = document.querySelector("#button");
    // dom 객체 형태로 input 값을 가져옴 
console.log("회원가입");
registerbtn.addEventListener("click", register);
    // 로그인 버튼이 클릭 시 register() 함수 실행 

function register(){
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(confirmpw.value !== pw.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })  // 결과 값을 받아서 처리 
     .then((res) => res.json())
     .then((res) => {
        if(res.succes){ // 성고했다면 루트로 이동 
            location.href = "/login";
        }
        else{   // 실패했다면 메세지 띄움 
            alert(res.msg);
        }
     })
     .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
     });
}
    