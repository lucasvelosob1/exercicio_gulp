const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('C:/EBAC/aula_gulp/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('C:/EBAC/aula_gulp/dist/css'));
});

gulp.task('imagemin', function () {
    return gulp.src('C:/EBAC/aula_gulp/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('C:/EBAC/aula_gulp/dist/images'));
});

gulp.task('uglify', function () {
    return gulp.src('C:/EBAC/aula_gulp/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('C:/EBAC/aula_gulp/dist/js'));
});

gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));