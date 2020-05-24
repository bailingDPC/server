const mongoose = require("mongoose");
const articleInfoDB = require("./articleInfo");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    type: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    contentHTML: {type: String, required: true},
    tag: {type: String, required: true},
    updateDate: {type: Date, default: Date.now},
    date: {type: Date, default: Date.now},
    surface: {type: String, required: true },
    pv: {type: Number, default: 0},
    comment: [{type: Schema.Types.ObjectID, ref: "comment"}]
});

articleSchema.pre("update", function (next) {
    this.update = new Date;
    next();
});

//监听文章增加
articleSchema.pre("save", function (next) {
    let _this=this;
    //保存数据的时候更新articleInfo的数据
    articleInfoDB.findOne({})
        .then((data)=>{
            if(data){
                //如果已经存在了data, 更新data的type 和 num
                let indexOf = data.tags.indexOf(_this.tag) +1;
                articleInfoDB
                    .updateOne({}, indexOf ? {$inc:{num: 1}} : {$push: {tags: _this.tag}, $inc: {num: 1}})
                    .then(()=>{})
                    .catch(()=>{})
            }else{
                articleInfoDB.create({
                    tags: _this.tag,
                    num: 1
                })
            }
        })
        .catch();
    next();
});


articleSchema.pre("remove",{query: true, document: false}, function (next) {
    let _this=this;
    //保存数据的时候更新articleInfo的数据
    articleInfoDB.findOne({})
        .then((data)=>{
            if(data){
                articleInfoDB
                    .updateOne({},{$inc: {num: -1}})
                    .then(()=>{})
                    .catch(()=>{})
            }
        })
        .catch();
    next();
});


let article = mongoose.model("article", articleSchema);


module.exports = article;


