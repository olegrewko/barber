import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import  autoprefixer from 'autoprefixer';
import webp from "gulp-webp";
import browser from 'browser-sync';
// var sourcemaps = require('gulp-sourcemaps');

// Styles
const createWebp = () => {
 return gulp.src("source/img/**/*.{jpg,png}")
 .pipe(webp({quality: 90}))
 .pipe(gulp.dest("source/img"))
}

const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    // .pipe(sourcemap.init())

    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemap: '.' }))
    .pipe(browser.stream());
}
// exports.styles = styles;
// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, createWebp,  server, watcher
);
