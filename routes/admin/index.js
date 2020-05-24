let express = require('express');
let router = express.Router();

//登陆接口
router.use("/login", require("./login/index"));

/*上传接口*/
router.use("/upload", require("./upload/index"));

/*文章接口*/
router.use("/article", require("./article/index"));

//用户数据接口
router.use("/user", require("./user/index"));

//留言管理
router.use("/message", require("./message/index"));

//日记接口
router.use("/diary", require("./diary/index"));

//友链接口
router.use("/links", require("./links/index"));

module.exports = router;
