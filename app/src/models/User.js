"use strict"

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const {id, pw} = UserStorage.getUserInfo(this.body.id);

        if(id){
            if(pw === this.body.pw){
                return {
                    success: true,
                }
            }
            return {
                success: false,
                msg: "비밀번호 오류",
            }            
        }
        return {
            success: false,
            msg: "존재하지 않는 아이디",
        }
        
    }
}

module.exports = User;