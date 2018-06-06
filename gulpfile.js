const gulp = require('gulp'); //gulp插件
const sass = require('gulp-sass'); //编译sass插件
const cssnano = require('gulp-cssnano'); //压缩CSS
const rename = require('gulp-rename'); //重命名
const uglify = require('gulp-uglify'); //压缩JS
const concat = require('gulp-concat'); //合并JS


gulp.task('sass',function(){
	gulp.src('src/scss/*.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest('css'));
})
//压缩js/重命名js/合并js
gulp.task('js',function(){
	gulp.src('src/js/*.js').pipe(rename({"suffix":'.min'})).pipe(gulp.dest('js'));
})
//监听
gulp.task('watch',function(){
	gulp.watch(['src/js/*.js','src/scss/*.scss'],['js','sass']);
})
//pipe(concat("all.min.js"))