(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f42d50"],{"8bc4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ArticleEdit",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{defaultData:t.defaultData},on:{handleSubmit:t.handleSubmit}})],1)},o=[],r=a("c694"),n=a("365c"),l={name:"ArticleAdd",data:function(){return{fullscreenLoading:!1,defaultData:{}}},methods:{handleSubmit:function(t){var e=this;Object(n["B"])(t).then((function(t){e.$message({message:t.data.msg,type:"success",duration:2e3}),setTimeout((function(){e.fullscreenLoading=!1,window.location.reload()}),1e3)})).catch((function(){e.$message({message:"上传失败",type:"error",duration:2e3})}))}},components:{ArticleEdit:r["a"]},beforeRouteLeave:function(t,e,a){this.$confirm("确定要离开吗?, 输入的内容不会保存哦!!!, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){a()})).catch((function(){}))}},s=l,c=a("2877"),d=Object(c["a"])(s,i,o,!1,null,"67feda26",null);e["default"]=d.exports},c694:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",rules:t.rules}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"分类",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择分类"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-option",{attrs:{label:"原创",value:"原创"}}),a("el-option",{attrs:{label:"转载",value:"转载"}})],1)],1),a("el-form-item",{attrs:{label:"标签",prop:"tag"}},[a("el-select",{attrs:{placeholder:"请选择标签"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}},[a("el-option",{attrs:{label:"HTML&CSS",value:"HTML&Css"}}),a("el-option",{attrs:{label:"JavaScript",value:"JavaScript"}}),a("el-option",{attrs:{label:"Node",value:"Node"}}),a("el-option",{attrs:{label:"Vue&React",value:"Vue&React"}})],1)],1),a("el-form-item",{attrs:{label:"封面",prop:"surface"}},[a("Upload",{on:{uploadSuccess:t.uploadSuccess}})],1),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("MarkdownEditor",{ref:"editorMd",attrs:{options:t.editorOptions,id:"edit"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 发表文章 ")])],1)],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:t.id}})},n=[],l=a("1157"),s=a.n(l),c={name:"MarkdownEditor",data:function(){return{editor:null,defaultOptions:{width:"100%",height:540,path:"/lib/editor.md-master/lib/",theme:"dark",previewTheme:"dark",editorTheme:"pastel-on-dark",markdown:"",codeFold:!0,saveHTMLToTextarea:!0,searchReplace:!0,htmlDecode:"style,script,iframe|on*",toolbar:!0,previewCodeHighlight:!0,emoji:!0,taskList:!0,tocm:!0,tex:!0,flowChart:!0,sequenceDiagram:!0,dialogLockScreen:!1,dialogShowMask:!1,dialogDraggable:!1,dialogMaskOpacity:.4,dialogMaskBgColor:"#ccc",imageUpload:!0,imageFormats:["jpg","jpeg","gif","png","bmp","webp"],imageUploadURL:"/admin/article/img",onload:function(){console.log("加载完成")}},content:""}},props:{id:{type:String,default:"editor"},options:{type:Object}},updated:function(){console.log("更新了");var t=this;this.requireEditor((function(){t.editor=editormd(t.id,t.getOptions())}))},mounted:function(){var t=this;this.requireEditor((function(){t.editor=editormd(t.id,t.getOptions())}))},methods:{requireEditor:function(t){window.$=window.jQuery=s.a,s.a.getScript("/lib/editor.md-master/editormd.min.js",(function(e){t()})),s()("head").append(s()('<link rel="stylesheet" type="text/css" />').attr("href","/lib/editor.md-master/css/editormd.min.css"))},getOptions:function(){return Object.assign(this.defaultOptions,this.options)},handleClick:function(){this.$emit("Sub",this)}}},d=c,u=a("2877"),f=Object(u["a"])(d,r,n,!1,null,"16c87500",null),m=f.exports,p=a("d443"),h={name:"ArticleEdit",props:["defaultData"],data:function(){var t=this;return{form:{title:this.defaultData.title||"",tag:this.defaultData.tag||"",type:this.defaultData.type||"",surface:this.defaultData.surface||"",content:this.defaultData.content||""},rules:{type:[{required:!0,message:"请选择分类"}],title:[{required:!0,message:"请输入标题"}],tag:[{required:!0,message:"请选择标签"}],surface:[{required:!0,message:"请选择封面"}],content:{validator:function(e,a,i){t.$refs.editorMd.editor.getHTML()?i():i(new Error("请输入文章内容"))},required:!0}},editorOptions:{markdown:""}}},watch:{defaultData:function(){this.form={title:this.defaultData.title,type:this.defaultData.type,tag:this.defaultData.tag,content:this.defaultData.content,surface:this.defaultData.surface,contentHTML:this.defaultData.contentHTML}}},methods:{uploadSuccess:function(t){this.form.surface=t},onSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.$emit("handleSubmit",{type:e.form.type,title:e.form.title,tag:e.form.tag,surface:e.form.surface,content:e.$refs.editorMd.editor.getMarkdown(),contentHTML:e.$refs.editorMd.editor.getHTML()})}))}},components:{MarkdownEditor:m,Upload:p["a"]},created:function(){this.editorOptions=this.defaultData},destroyed:function(){}},g=h,b=Object(u["a"])(g,i,o,!1,null,"2b36bc0f",null);e["a"]=b.exports},d443:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-upload",{attrs:{action:"http://localhost:3000/admin/upload/articleSurface","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{width:"300",src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},o=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),{name:"Upload",data:function(){return{imageUrl:""}},methods:{handleAvatarSuccess:function(t,e){this.$emit("uploadSuccess",t.surface),this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e=/^(image\/jpeg|image\/jpg|image\/png|image\/gif)$/.test(t.type);return e||this.$message.error("图片只能是 JPG/JPEG/PNG/GIF 格式!"),e}}}),n=r,l=a("2877"),s=Object(l["a"])(n,i,o,!1,null,"c8448796",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-40f42d50.4a286a90.js.map