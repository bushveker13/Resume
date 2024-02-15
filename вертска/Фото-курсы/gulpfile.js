const {src, watch, dest, series} = require('gulp')

const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'))
const claenCSS = require('gulp-clean-css')
const webp = require('gulp-webp')
const copy = require('gulp-copy')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel')
const notify  = require('gulp-notify')
const browserSync = require('browser-sync').create()

const env = process.env.NODE_ENV || 'div';

const comppag = () =>{
    return src('src/index.pug')
    .pipe(gulpif(env === 'production',pug({ pretty: false }))) // включаем минимизации html
    .pipe(gulpif(env === 'div',pug({ pretty: true }))) // отключаем минимизации html
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const script = () => {
    return src ('src/java/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify({
        toplevel:true
    }).on('error',notify.onError()))
    .pipe(dest('dist/java'))
    .pipe(browserSync.stream())
}

const CompSass = () =>{
    return src('src/css/style.scss')
    .pipe(sass())
    .pipe(gulpif(env === 'div',(claenCSS({
        level:2
    }))))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}



const fonts = () =>{
    return src('src/fonts/*')
    .pipe(copy('dist', { prefix: 1 }))
}



const WepImg = () =>{
    return src([
        'src/img/*.jpg',
        'src/img/*.png',
        'src/img/*.jpeg',
    ])
    .pipe(webp())
    .pipe(dest('dist/images'))
}

const watchFiles =() =>{
    browserSync.init({
        server:{
            baseDir:'dist/'
        }
    })
}

watch('src/**/*.html',comppag)
watch('src/сss/*.css',CompSass)
watch('src/java/*.js',script)

exports.CompSass = CompSass
exports.comppag = comppag
exports.WepImg = WepImg
exports.fonts = fonts
exports.script = script

exports.default = series(comppag,CompSass,WepImg,script,watchFiles)
