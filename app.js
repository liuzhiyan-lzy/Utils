let express = require("express");
let app = new express();

app.listen(3008, () => {
    console.log("3008 running");
})

app.get("/pwd", (req, res) => {
    res.send(getStandardPwd());
})

app.get("/pwd-n", (req, res) => {
    res.send(getNoSpePwd());
})

app.get("/pwd-r", (req, res) => {
    res.send(getRandomPwd());
})

const chars_with_sp = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';',
    '?', '>'
]

const chars = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
]

const sp = [
    '!', '@', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';',
    '?', '>'
]

const total_num = 83;
const char_num = 62;
const sp_num = 21;
const pwd_length = 15;
const part_a_length = 7;
const part_b_length = 8;

/**
 * @return {String}
 */
function getStandardPwd() {
    let pwd = "";
    while (pwd.length < pwd_length) {
        const index = Math.floor(Math.random() * char_num);
        pwd += chars[index];
    }
    const i1 = Math.floor(Math.random() * part_a_length)
    const i2 = Math.floor(Math.random() * part_b_length) + part_a_length;
    const j1 = Math.floor(Math.random() * sp_num);
    let j2 = Math.floor(Math.random() * sp_num);
    while (j2 === j1) {
        j2 = Math.floor(Math.random() * sp_num);
    }
    pwd = pwd.substring(0, i1) + sp[j1] + pwd.substring(i1 + 1, i2) + sp[j2] + pwd.substring(i2 + 1);
    console.log(pwd);
    return pwd;
}

/**
 * @return {String}
 */
function getNoSpePwd() {
    let pwd = "";
    while (pwd.length < pwd_length) {
        const index = Math.floor(Math.random() * char_num);
        pwd += chars[index];
    }
    console.log(pwd);
    return pwd;
}

/**
 * @return {String}
 */
function getRandomPwd() {
    let pwd = "";
    while (pwd.length < pwd_length) {
        const index = Math.floor(Math.random() * total_num);
        pwd += chars_with_sp[index];
    }
    console.log(pwd);
    return pwd;
}
