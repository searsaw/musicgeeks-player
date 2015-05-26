'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');

gulp.task('sass', function() {
  return sass('./sass', { verbose: true, style: 'compressed' })
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('serve', function() {
  gulp.watch('./sass/**/*.scss', ['sass', function() {
    console.log('SASS files compiled');
  }]);

  return gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['sass', 'serve']);