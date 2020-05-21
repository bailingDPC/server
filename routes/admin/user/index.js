const express = require("express");
const userDB = require("../../../db/user");
const messageDB = require("../../../db/message");
const sessionDB = require("../../../db/session");
const visitorDB =require("../../../db/visitor");

let router = express.Router();
//请求用户列表
router.get("/get", (req, res) => {
    userDB.find({}, {pwd: 0, __v: 0})
        .then(data => {
            res.send({
                code: 0,
                msg: "请求成功",
                data
            })
        })
        .catch(() => {
            res.send({
                code: 0,
                msg: "请求失败",
                data: []
            })
        });
});


//删除用户
router.post("/delete", (req, res)=>{
    let {_id} = req.body;

    //删除用户的所有留言
    messageDB.deleteMany({user: _id})
        .then()
        .catch();
    //删除该用户的评论
    messageDB.updateMany({"children.user": _id},{$pull: {children: {user: _id}},})
        .then((data)=>{

        })
        .catch();

    //删除用户
    userDB.deleteOne({_id})
        .then((data)=>{
            //删除用户session
            sessionDB.deleteMany({session: new RegExp(_id)},()=>{});
            //删除用户的访问记录
            visitorDB.deleteMany({user: _id},()=>{});

           res.send({
               code: 0,
               msg: "删除成功"
           })
        })
        .catch(()=>{
            res.send({
                code: 4,
                msg: "服务器错误"
            })
        });
});

//更新用户数据
router.post("/update", (req, res)=>{
    let {_id,  data} = req.body;
    userDB.updateOne({_id}, data)
        .then(()=>{
            res.send({
                code: 0,
                msg: "更新成功"
            });
            //删除用户session
            sessionDB.deleteMany({session: new RegExp(_id)},()=>{});
        })
        .catch(()=>{
            res.send({
                code: 4,
                msg: "服务器错误"
            })
        })
});

module.exports = router;
