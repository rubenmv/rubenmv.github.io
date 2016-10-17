// Include gulp
var gulp = require('gulp');
// Include plugins
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var unCSS = require('gulp-uncss');
var concat = require('gulp-concat');

// Concat js
gulp.task('js', function(){
  return gulp.src(['js/minified-legacyie.js', 'js/main.js'])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./res'));
});

// Minify CSS
gulp.task('css', function () {
  return gulp.src(['css/font-awesome.min.css', 'css/style.css'])
  .pipe(concat('style.css'))
  .pipe(unCSS({
            html: ['index.html']
        }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./res'))
});

// Default Task
gulp.task('build', ['js', 'css']);
