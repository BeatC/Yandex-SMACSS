var gulp = require('gulp');
var	sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('styles', function () {
	gulp.src('src/styles/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});


gulp.task('server', function() {  
    connect.server({
    root: 'dist',
    livereload: true,
    port: 1337
  });
})

gulp.task('watch', function () {
	gulp.watch('./src/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'server', 'watch']);