var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(sourcemaps.write())
});


gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task("default",["sass","watch"]);
