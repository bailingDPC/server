let express = require('express');
let router = express.Router();

/*文章相关接口*/
router.use("/article",require("./article/index"));

/*注册相关的接口*/
router.use("/register", require("./register/index"));

// 登陆相关接口
router.use("/login", require("./login/index"));

//留言接口
router.use("/message", require("./message/index"));

//最近访客接口
router.use("/visitor", require("./visitor/index"));

//获取日志
router.use("/diary", require("./diary/index"));

//获取友联
router.use("/links", require("./links/index"));

//上传接口
router.use("/upload", require("./upload/index"));

module.exports = router;
