const express = require("express");
const svgCaptcha = require("svg-captcha");
const userDB = require("../../db/user");

let router = express.Router();

//验证码请求接口
router.post("/vcode", (req, res) => {
    let time_ = 30000;
    if (req.session.registerVCodeTime) {
        let _t = new Date() - new Date(req.session.registerVCodeTime);
        if (_t <= time_) {
            res.send({
                code: 2,
                data: req.session.registerVCode.data,
                msg: "请求过于频繁",
                time: time_ - _t,
            });
            return;
        }
    }

    let captcha = svgCaptcha.create();
    //将正确答案存储到session
    req.session.registerVCode = captcha;
    req.session.registerVCodeTime = new Date();
    //将svg发送到前端
    res.send({
        code: 0,
        data: captcha.data,
        time: time_,
    });
});
//验证吗失去焦点的请求
router.post("/checkVcode", (req, res) => {
    let {svgCode} = req.body;
    if (!svgCode || svgCode.toLocaleLowerCase() !== req.session.registerVCode.text.toLocaleLowerCase()) {
        res.send({
            code: 1,
            msg: "验证成功"
        });
    } else {
        res.send({
            code: 0,
            msg: "验证成功"
        });
    }
});

//注册的API
router.post('/', (req, res) => {
    let {user, pwd, svgCode} = req.body;

    //清空req.session.registerVCodeTime
    req.session.registerVCodeTime = 0;

    //验证数据有效性
    if (!user || !pwd || !svgCode) {
        res.send({
            code: 1,
            msg: "数据无效，请检查后再注册."
        });
        return;
    }
    //再次验证
    if (!svgCode || svgCode.toLocaleLowerCase() !== req.session.registerVCode.text.toLocaleLowerCase()) {
        res.send({
            code: 2,
            msg: "验证码错误"
        });
        return;
    }
    // 验证用户名和密码
    if (!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{2,7}$/.test(user) || !/^[\w<>,.?|;':"{}!@#$%^&*()\/\-\[\]\\]{6,18}$/.test(pwd)) {
        res.send({
            code: 2,
            msg: "用户名或密码不符合规则"
        });
        return;
    }

    //检测是否有重复用户
    userDB.findOne({user})
        .then(data => {
            if (data) {
                //data若有值， 说明user重复
                res.send({
                    code: 3,
                    msg: "用户名已存在"
                });
            } else {
                //用户名不存在， 接着存数据
                userDB.create({user, pwd})
                    .then((data) => {
                        res.send({
                            code: 0,
                            msg: "注册成功"
                        })
                    })
                    .catch((err) => {
                        res.send({
                            code: 4,
                            msg: "服务器错误-信息写入失败"
                        })
                    });
            }
        }).catch(err => {
        res.send({
            code: 4,
            msg: "服务器错误"
        })
    });
});

module.exports = router;
