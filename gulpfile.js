const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const critical = require('critical');

gulp.task('sass', () => {
  return gulp.src('./style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./lib'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./style/**/*.scss', ['sass']);
});

gulp.task('critical', () => {
  critical.generate({
    inline: true,
    base: './',
    src: './index.html',
    dest: './lib/index.html',
    width: 1440,
    height: 900,
    minify: true,
  });
});

gulp.task('htmlmin', () => {
  return gulp.src('./lib/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('lib'));
});
