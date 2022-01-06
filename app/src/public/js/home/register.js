"use strict"

const inp_id = $("#reg_inp_id");
const inp_name = $("#reg_inp_name");
const inp_pw = $("#reg_inp_pw");
const inp_pw_confirm = $("#reg_inp_pw_confirm");
const btn_register = $("#btn_register");

function register(){
    const req = {
        id: inp_id.val(),
        name: inp_name.val(),
        pw: inp_pw.val(),
        pw_confirm: inp_pw_confirm.val(),
    }

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then(res => res.json())
    .then(res => {
        if(res.success){
            alert(res.msg);
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    }).catch(err => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}

btn_register.on("click", register);