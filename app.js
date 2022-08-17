let express = require("express");
const qs = require("querystring");
const url = require("url");
let app = new express();

app.listen(3008, () => {
    console.log("3008 running");
})

app.get("/get-new-pwd", (req, res) => {
    let type = qs.parse(url.parse(req.url).query)["type"];
    if (type === undefined || type === "1") {
        type = 1;
    } else {
        type = 2;
    }
    res.send(getPwd(type));
})

// len = 85
const chars_with_sp = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';',
    '?', '>', '<'
]

// len = 62
const chars = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
]

// len = 13
const sp = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';',
    '?', '>', '<'
]

/**
 * @param {number} type
 * @return {String}
 */
function getPwd(type) {
    if (type === 1) {
        let pwd = "";
        while (pwd.length < 15) {
            const index = (Math.random() * 85).toFixed();
            pwd += chars_with_sp[index];
        }
        console.log(pwd);
        return pwd;
    }
    let pwd = "";
    while (pwd.length < 15) {
        const index = (Math.random() * 62).toFixed();
        pwd += chars[index];
    }
    console.log(pwd);
    return pwd;
}
