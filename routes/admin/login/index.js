const express = require("express");
const userDB = require("../../../db/user");
const crypto = require("crypto");

let router = express.Router();

//登陆
router.post("/", (req, res) => {
    let {user, pwd} = req.body;
    console.log(user, pwd);

    userDB.findOne({user})
        .then((data) => {
            if (data) {
                //验证密码
                if (data.pwd === crypto.createHash("sha256").update(pwd).digest("hex")) {
                    /*密码正确*/
                    /*验证管理员权限*/
                    if (data.admin) {
                        req.session.login = data;
                        res.send({
                            code: 0,
                            msg: "登陆成功"
                        })
                    } else {
                        res.send({
                            code: 1,
                            msg: "您不是管理员, 无法登陆"
                        })
                    }
                } else {
                    /*密码错误*/
                    res.send({
                        code: 4,
                        msg: "密码错误"
                    })
                }
            } else {
                res.send({
                    code: 4,
                    msg: "未注册用户"
                })
            }
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误了!!!!!!!!!!!!!!!!!!!!!"
            })
        });
});

/*验证是否登陆*/
router.post("/ifLogin", (req, res) => {
    console.log("dddd");
    /*判断session*/
    if (req.session.login && req.session.login.admin) {
        res.send({
            code: 0,
            msg: "已登录",
            data: req.session.login
        })
    } else {
        res.send({
            code: 1,
            msg: "未登录",
            data: null
        })
    }
});
module.exports = router;
