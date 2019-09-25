const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const connect = require("gulp-connect")
//翻译scss文件
gulp.task("sass",function(){
    return gulp.src("./src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css/"))
    .pipe(connect.reload())
})
//压缩css文件并改名
gulp.task("cleanCss",["sass"],function(){
    return gulp.src("./src/css/*.css")
    .pipe(cleanCss({
        compatibility:"ie8"
    }))
    .pipe(rename({
        suffix:".min"
    }))
    .pipe(gulp.dest("./dist/cssmin/"))
    .pipe(connect.reload())
})
//默认任务
gulp.task("default",["cleanCss"]);
//创建服务器
gulp.task("server",function(){
    connect.server({
        root:"./",
        port:2019,
        livereload:true
    });
gulp.watch("./src/sass/*.scss",["default"])  
});