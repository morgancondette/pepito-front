var gulp          = require('gulp'),
    notify        = require('gulp-notify')
    eslint        = require('gulp-eslint'),
    browserify    = require('browserify'),
    ngAnnotate    = require('browserify-ngannotate'),
    babelify      = require('babelify'),
    source        = require('vinyl-source-stream'),
    sourcemaps    = require('gulp-sourcemaps'),
    browserSync   = require('browser-sync').create(),
    rename        = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    uglify        = require('gulp-uglify'),
    merge         = require('merge-stream');

var config = {
  inputViewFile:  './src/index.html',
  inputAppFile:   './src/js/pepito.js',
  outputAppFile:  'main.js',
  outputAppDir:   './build/',
  viewFiles:      './src/js/**/*.html',
  jsFiles:        './src/js/**/*.js'
}

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

// browserify task
gulp.task('browserify', ['views'], function() {
  return browserify(config.inputAppFile)
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source(config.outputAppFile))
      // Start piping stream to tasks!
      .pipe(gulp.dest(config.outputAppDir));
});

// html task
gulp.task('html', function() {
  return gulp.src(config.inputViewFile)
      .on('error', interceptErrors)
      .pipe(gulp.dest(config.outputAppDir));
});

// views task
gulp.task('views', function() {
  return gulp.src(config.viewFiles)
    .pipe(templateCache({
      standalone: true
    }))
    .on('error', interceptErrors)
    .pipe(rename("app.templates.js"))
    .pipe(gulp.dest('./src/js/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));

  return merge(html,js);
});

// Default task
gulp.task('default', ['html', 'browserify'], function() {

  browserSync.init([config.outputAppDir + '**/**.**'], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch(config.inputViewFile, ['html']);
  gulp.watch(config.viewFiles, ['views']);
  gulp.watch(config.jsFiles, ['browserify']);
});
