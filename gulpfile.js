var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(autoprefixer({
        overrideBrowserslist:['last 2 versions'],
        cascade: false
    }))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
  })

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/scss/**/*.scss', gulp.series('sass')); 
  gulp.watch('src/js').on('change',browserSync.reload);
  gulp.watch('index.html').on('change',browserSync.reload);
})


