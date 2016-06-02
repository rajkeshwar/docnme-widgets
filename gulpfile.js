
var gulp = require('gulp');
var path = require('path');
var rename = require("gulp-rename");

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

var html2string = require('gulp-html2string');
var browserSync = require('browser-sync').create();

gulp.task('html2js', function () {
  return gulp.src('html/*.html')
    .pipe(html2string({
      base: path.join(__dirname, 'html'), //The base path of HTML templates 
      createObj: true, // Indicate wether to define the global object that stores 
                       // the global template strings 
      objName: 'TEMPLATES'  // Name of the global template store variable 
                            //say the converted string for myTemplate.html will be saved to TEMPLATE['myTemplate.html'] 
    }))
    .pipe(rename({extname: '.js'}))
    .pipe(gulp.dest('templates/')); //Output folder 
});

gulp.task('scripts', function(){
  return gulp.src(['templates/*.js', 'src/*.js'])
    .pipe(concat('docnme-widgets.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('docnme-widgets.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
  return gulp.src(['src/*.css'])
    .pipe(concat('docnme-widgets.css'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

// Static Server + watching scsss/html files
gulp.task('serve', ['default'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('src/*.js', ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("html/*.html", ['html2js']);
    gulp.watch("src/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['html2js', 'scripts', 'css']);