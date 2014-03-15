var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'angulert.js',
  'test/unit/**/*-spec.js'
];

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
  }));
});