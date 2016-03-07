// Include gulp
var gulp = require('gulp');
// Include plugins
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var unCSS = require('gulp-uncss');
var concat = require('gulp-concat');

// Concat js
gulp.task('js', function(){
  return gulp.src(['js/minified-legacyie.js', 'js/main.js'])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./res'));
});

// Minify JS
/*gulp.task('uglify', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('res'));
});
*/
// Minify CSS
gulp.task('css', function () {
  return gulp.src(['css/font-awesome.min.css', 'css/reset.css', 'css/grid.css', 'css/style.css'])
  .pipe(concat('style.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('res'))
});

/*gulp.task('minify-css', function () {
  return gulp.src('css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('res'))
});*/

// Default Task
gulp.task('default', ['js', 'css']);
