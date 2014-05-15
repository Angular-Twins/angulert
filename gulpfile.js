var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var es = require('event-stream');
var gutil = require('gulp-util');
var html2js = require('gulp-html2js');
var karma = require('gulp-karma');
var minifyCSS = require('gulp-minify-css');
var protractor = require('gulp-protractor');
var staticServer = require('node-static');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var pkg = {
  name: 'angulert'
};

var path = {
  js: 'src/**/*.js',
  css: 'src/**/*.css',
  dist: 'dist',
  plugins: 'plugins/**/*.js',
  templates: 'templates/**/*.html'
};

gulp.task('test', function() {
  gulp.src('.asdf')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});

gulp.task('clean', function() {
  var distStream = gulp.src(path.dist);
  var demoPluginsStream = gulp.src('demo/' + path.plugins);
  return es.merge(distStream, demoPluginsStream)
  .pipe(clean());
});

gulp.task('build-js', ['clean'], function () {
  var templateStream = gulp.src(path.templates)
    .pipe(html2js({base: '.'}));
  var jsStream = gulp.src(path.js);

  return es.merge(templateStream, jsStream)
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

gulp.task('copy-plugins', ['clean'], function () {
  return gulp.src(path.plugins)
    .pipe(gulp.dest('./dist/plugins'))
    .pipe(concat('plugins-all.js'))
    .pipe(gulp.dest('./demo/plugins'))
    .pipe(gulp.dest('./dist/plugins'))
    .pipe(rename('plugins-all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/plugins'));
});

gulp.task('server', function(next) {
  var server = new staticServer.Server('./demo');
  var port = 8000;
  require('http').createServer(function (request, response) {
    request.addListener('end', function () {
      server.serve(request, response);
    }).resume();
  }).listen(port, function() {
    gutil.log('Server listening on port: ' + gutil.colors.magenta(port));
    next();
  });
});

gulp.task('watch', function() {
  gulp.watch([path.js, path.css, path.plugins, path.templates], ['build-js', 'build-css', 'copy-plugins']);
});

gulp.task('default', [ 'build-js', 'build-css', 'copy-plugins', 'watch', 'test', 'server']);
