const express = require("express");
const messageDB = require("../../../db/message");


let router = express.Router();
//请求留言列表
router.get("/get", (req, res) => {
    messageDB.find({}).populate("user")
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


//删除留言
router.post("/delete", (req, res) => {
    let {_id} = req.body;

    //删除用户的所有留言
    messageDB.deleteOne({_id})
        .then(()=>{
            res.send({
                code: 0,
                msg: "删除成功"
            });
        })
        .catch(()=>{
            res.send({
                code: 4,
                msg: "服务器错误"
            })
        });
});


module.exports = router;
