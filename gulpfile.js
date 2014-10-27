// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    path = require('path');
    
// run
gulp.task('default', function() {
    
  // less
  gulp.src('./assets/less/original.less')
    .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./assets/css/'));

  // uglify
  gulp.src('./assets/js/original.js')
    .pipe(uglify())
    .pipe(rename('original.min.js'))
    .pipe(gulp.dest('./assets/js/'));
  
});