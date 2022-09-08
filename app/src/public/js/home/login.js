"use strict"

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginbtn = document.querySelector("button");
    // dom 객체 형태로 input 값을 가져옴 

loginbtn.addEventListener("click", login);
    // 로그인 버튼이 클릭 시 login() 함수 실행 

function login(){
    const req = {
        id: id.value,
        pw: pw.value,
    };
    // req에 input으로 들어온 id와 pw를 넣어서 JSON 형태로 사용 

    // post 방식으로 서버에 전달 -> json을 문자열화하여 서버에 전달 
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })  // 결과 값을 받아서 처리 
     .then((res) => res.json())
     .then((res) => {
        if(res.succes){ // 성고했다면 루트로 이동 
            location.href = "/";
        }
        else{   // 실패했다면 메세지 띄움 
            alert(res.msg);
        }
     })
     .catch((err) => {
        console.error(new Error("로그인중 에러 발생"));
     });
}
    