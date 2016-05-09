var gulp   = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['**/*.js','!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.formatEach())
      .pipe(eslint.failOnError())
      .on('error', function(error) {
	gulpUtil.log('ESLint error: ' + error.message);
      });
});

gulp.task('default', ['lint'],  function() {
  // default task here
});
