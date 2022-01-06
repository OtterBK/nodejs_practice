"use strict";

class UserStorage{
    static #users = {
        id: ["tester1", "tester2", "tester3"],
        pw: ["1234", "1234", "1234"],
        name: ["테스터1", "테스터2", "테스터3"],
    };

    static getUsers(...fields){
        const users = this.#users;
        let result = {};
        for(let index in fields){
            let key = fields[index];
            result[key] = users[key];
        }
        return result;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);

        const userInfo = {};
        for(var index in Object.keys(users)){
            let key = Object.keys(users)[index];
            userInfo[key] = users[key][idx];
        }

        return userInfo;

    }

    static save(newUserInfo){

        const users = this.#users;

        let id = newUserInfo.id;
        let pw = newUserInfo.pw;
        let pw_confirm = newUserInfo.pw_confirm;
        let name = newUserInfo.name;

        let response = {};
        if(users.id.includes(id)){
            response.success = false;
            response.msg = "이미 존재하는 아이디입니다.";
        } else if(users.pw.includes(name)){
            response.success = false;
            response.msg = "이미 존재하는 닉네임입니다.";
        } else if(pw !== pw_confirm){
            response.success = false;
            response.msg = "비밀번호가 일치하지 않습니다.";
        } else {
            users.id.push(id);
            users.pw.push(pw);
            users.name.push(name);
    
            response.success = true;
            response.msg = "회원가입을 완료하였습니다.";
    
        }
        
        return response;

    }
}

module.exports = UserStorage;