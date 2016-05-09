var gulp       = require('gulp'),
    eslint     = require('gulp-eslint'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel'),
    concat     = require('gulp-concat');

// ESLint task
gulp.task('lint', function() {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.formatEach())
    .pipe(eslint.failOnError())
    .on('error', function(error) {
      gulpUtil.log('ESLint error: ' + error.message);
    });
});

// Babel task
gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

// Default task
gulp.task('default', ['lint', 'babel'],  function() {});