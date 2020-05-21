const express = require("express");
const articleDB = require("../../../db/article.js");
const articleInfoDB = require("../../../db/articleInfo");

let router = express.Router();
//文章发表
router.post("/add", (req, res) => {
    let {type, title, tag, surface, content} = req.body;
    if (!type || !title || !tag || !surface || !content) {
        res.send({
            code: 1,
            msg: "数据不完整",
        });
        return;
    }
    /*连接数据库*/
    articleDB
        .create({type, title, tag, surface, content})
        .then(() => {
            res.send({
                code: 0,
                msg: "发表成功"
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "发表失败，请稍后重试"
            })
        });
});

//文章列表获取
router.get("/get", (req, res) => {
    let {skip, limit} = req.query;

    articleDB.find({}, {}, {skip: Number(skip), limit: Number(limit)})
        .then((data) => {
            res.send({
                code: 0,
                msg: "查找成功",
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: []
            })
        })
});

//文章更新
router.post("/update", (req, res) => {
    let {_id, options} = req.body;
    articleDB.updateOne({_id}, options)
        .then(() => {
            res.send({
                code: 0,
                msg: "更新成功"
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "更新失败,服务器错误"
            })
        })
});

//文章删除
router.post("/delete", (req, res) => {
    let {_id} = req.body;

    /*删除*/
    articleDB.remove({_id})
        .then(() => {
            res.send({
                code: 0,
                msg: "删除成功"
            });
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误"
            });
        })
});
//文章信息获取
router.get("/getInfo", (req, res) => {
    articleInfoDB.findOne({})
        .then(data => {
            res.send({
                code: 0,
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: {tags: [], num: 0}
            })
        })
});


module.exports = router;
