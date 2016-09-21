'use strict';
 
var gulp = require('gulp');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');

/**
 *  Compile styles
 */

gulp.task('compile-styles', function () {
    gulp.src('scss/adwienimal-custom.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(minify({processImport: false}))
        .pipe(rename('adwienimal-custom.min.css'))
        .pipe(gulp.dest('css'));
});
