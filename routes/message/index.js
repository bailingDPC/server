const express = require("express");
const messageDB = require("../../db/message");
const router = express.Router();

// 提交留言
router.post("/commit", (req, res) => {
    let {user, content} = req.body;
    console.log(user, content);
    //验证数据
    if (!user || !content) {
        res.send({
            code: 1,
            msg: "数据格式错误"
        });
        return;
    }

    //判断禁用
    if (req.session.login.disabled) {
        res.send({
            code: 3,
            msg: "您的账号被禁用， 无法操做"
        });
        return;
    }

    /*添加评论*/
    messageDB.create({
        user,
        content
    })
        .then(data => {
            res.send({
                code: 0,
                msg: "留言成功"
            });
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误"
            });
        });
});

//提交留言的评论
router.post("/childCommit", (req, res) => {
    let {parentId, user, content, reUser} = req.body;
    //验证数据有效性
    console.log("提交了数据", req.body);
    if (!parentId || !user || !content || !reUser) {
        res.send({
            code: 1,
            msg: "数据格式错误"
        });
        return ;
    }
    //查找父留言数据
    messageDB.findById(parentId)
        .then(data=>{
            if(data){
                //父留言存在，
                // 更新数据
                messageDB.updateOne({_id: parentId},{$push:{"children": {user, content, reUser}}})
                    .then((data)=>{
                        res.send({
                            code: 0,
                            msg: "评论成功!"
                        })
                    });
                res.send({
                    code: 0,
                })
            }else{
                //父留言不存在
                res.send({
                    code: 2,
                    msg: "该条留言已删除"
                })
            }
        })
        .catch(()=>{
            res.send({
                code: 4,
                msg: "服务器错误, 请稍后再试"
            })
        });
});

//获取留言
router.post("/getList", (req, res) => {
    let {skip, limit} = req.body;
    messageDB.find({}, {}, {skip, limit, sort: {date: -1}})
        .populate("user", {_id: 1, user: 1, photo: 1})
        .populate("children.user",{_id:1,user:1,photo:1})
        .then((data) => {
            res.send({
                code: 0,
                msg: "请求成功",
                data
            })
        })
        .catch((err) => {
            res.send({
                code: 4,
                msg: "服务器错误--数据查询失败",
                data: []
            })
        });
});

module.exports = router;
