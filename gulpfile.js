const gulp = require('gulp');
const LiveServer = require('gulp-live-server');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('live-server', () => {
  const server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('bundle', () => {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'))
});

gulp.task('copy', () => {
  gulp.src(['app/styles/*.css'])
      .pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['bundle', 'copy', 'live-server'], () => {
  browserSync.init(null, {
    proxy: "http://localhost:7777",
    port: 9001
  })
});
