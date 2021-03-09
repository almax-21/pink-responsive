const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const server = require('browser-sync').create();

gulp.task('css', () => gulp
  .src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

gulp.task('images', () => gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.mozjpeg({ quality: 75, progressive: true }),
    imagemin.svgo({
      plugins: [
        { removeViewBox: false },
        { cleanupIDs: true },
      ],
    }),
  ]))
  .pipe(gulp.dest('source/img')));

gulp.task('webp', () => gulp.src('source/img/**/*.{png,jpg}')
  .pipe(webp({ quality: 75 }))
  .pipe(gulp.dest('source/img')));

gulp.task('sprite', () => gulp.src('source/img/icon-*.svg')
  .pipe(svgstore({
    inlineSvg: true,
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('source/img')));

gulp.task('copy', () => gulp.src([
  'source/*.html',
  'source/fonts/**/*.{woff,woff2}',
  'source/img/**',
  'source/*.ico',
], {
  base: 'source',
})
  .pipe(gulp.dest('build')));

gulp.task('copy-html', () => gulp.src([
  'source/*.html',
], {
  base: 'source',
})
  .pipe(gulp.dest('build')));

gulp.task('clean', () => del('build'));

gulp.task('js-min', () => gulp.src([
  'source/js/*.js',
  '!source/js/*min.js',
])
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min',
  }))
  .pipe(gulp.dest('build/js')));

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'css',
  'js-min',
));

gulp.task('server', () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/sass/**/*.scss', gulp.series('css'));
  gulp.watch('source/*.html', gulp.series('copy-html', 'refresh'));
  gulp.watch('source/js/*.js', gulp.series('js-min', 'refresh'));
});

gulp.task('refresh', (done) => {
  server.reload();
  done();
});

gulp.task('start', gulp.series('build', 'server'));
