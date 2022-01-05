"use strict"

const inp_id = $("#inp_id");
const inp_pw = $("#inp_pw");
const btn_login = $("#btn_login");

function login(){
    const req = {
        id: inp_id.val(),
        pw: inp_pw.val(),
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then(res => res.json())
    .then(res => {
        if(res.success){
            location.href = "/";
        } else {
            alert(res.msg);
        }
    }).catch(err => {
        console.error(new Error("로그인 중 에러 발생"));
    });
}

btn_login.on("click", login);