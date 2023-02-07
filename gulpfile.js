const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));



gulp.task('sass', () => {
return gulp.src('src/styles/*.scss')
.pipe(sass())
.pipe(gulp.dest('dist/styles'))
})






gulp.task('watch', () => {

gulp.watch('src/styles/*.scss', gulp.series('sass'))



})