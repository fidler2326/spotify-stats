var gulp = require('gulp');


// Enviroment vars
// ---------------
var compiledFolder = 'authorization_code/public/';
var srcFolder = 'authorization_code/public/';


// Plugins
// -------
var
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');


// Styles
// ------
gulp.task('styles', function(){
	gulp.src(srcFolder + 'app.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.on('error', function(err) { gutil.log(err.message);gutil.beep(); })
		.pipe(autoprefixer(
			{browsers: ['last 3 versions']}
		))
		.pipe(gulp.dest(compiledFolder));
});


// Watch
// -----
gulp.task('watch', function(){
	gulp.watch(srcFolder + '*.scss', ['styles']);
});


// Default trigger (typing 'gulp' at command line triggers these tasks)
// --------------------------------------------------------------------
gulp.task('default', ['styles', 'watch']);
