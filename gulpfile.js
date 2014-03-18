var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
// var exec = require('gulp-exec');
var karma = require('gulp-karma');
var minifyCSS = require('gulp-minify-css');
var protractor = require('gulp-protractor');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var pkg = {
  name: 'angulert'
};

var path = {
  js: 'src/**/*.js',
  css: 'src/**/*.css',
  dist: 'dist'
};

gulp.task('test', function() {
  gulp.src('.asdf')
  .pipe(karma({
    configFile: 'karma.conf.js',
    action: 'watch'
  }));
});

gulp.task('clean', function() {
  return gulp.src(path.dist).pipe(clean());
});

gulp.task('build-js', ['clean'], function () {
  return gulp.src(path.js)
  .pipe(concat(pkg.name + '.js'))
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo'))
  .pipe(rename(pkg.name + '.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
});

gulp.task('build-css', ['clean'], function () {
  return gulp.src(path.css)
  .pipe(concat(pkg.name + '.css'))
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo'))
  .pipe(rename(pkg.name + '.min.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch([path.js, path.css], ['build-js', 'build-css']);
});

gulp.task('default', ['build-js', 'build-css', 'watch', 'test']);



