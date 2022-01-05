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
}

module.exports = UserStorage;