const express = require("express");

let router = express.Router();

/*头像上传*/
router.use("/avatar",require("./avatar"));

module.exports = router;
