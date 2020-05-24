const express = require("express");
const articleDB = require("../../../db/article.js");
const articleInfoDB = require("../../../db/articleInfo");
const multer = require("multer");
const path = require("path");

let router = express.Router();
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../../public/images/upload/article'));

    },
    filename: function(req, file, cb){

        let fileName = "";
        if (req.session.login) {
            fileName = req.session.login._id + file.originalname.match(/\.(jpg|png|gif|jpeg|webp)$/i)[0];
        } else {
            fileName = file.fieldname + '-' + Date.now() + file.originalname.match(/\.(jpg|png|gif|jpeg|webp)$/i)[0];
        }

        cb(null, fileName);
    }
});
let upload = multer({storage}).single("editormd-image-file");


//文章图片上传
router.post("/img", (req, res) => {
    upload(req, res, function(err){
        if(err instanceof multer.MulterError){
            res.send(501);
        }else if(err){
            res.send(500);
        }else{
            if(!req.session.login){
                res.sendStatus(500);
                return ;
            }
            res.send({
                success: 1,
                message: "图片上传成功",
                url: "http://localhost:3000/images/upload/article/" + req.file.filename,
            });

        }
    });
});

//文章发表
router.post("/add", (req, res) => {
    console.log(req.body);
    let {type, title, tag, surface, content, contentHTML} = req.body;
    if (!type || !title || !tag || !surface || !content || !contentHTML) {
        res.send({
            code: 1,
            msg: "数据不完整",
        });
        return;
    }
    /*连接数据库*/
    articleDB
        .create({type, title, tag, surface, content, contentHTML})
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
