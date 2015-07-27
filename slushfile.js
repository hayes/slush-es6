var path = require('path')
var gulp = require('gulp')
var inquirer = require('inquirer')
var install = require('gulp-install')
var template = require('gulp-template')

gulp.task('module', function generate (done) {
  var questions = [
    {type: 'input', name: 'name', message: 'What do you want to name your module?', default: getNameProposal()},
    {type: 'input', name: 'description', message: 'Enter a description for the module:'},
    {type: 'input', name: 'author', message: 'Who is the author of your module'},
    {type: 'input', name: 'version', message: 'What is the initial version of your module?', default: '1.0.0'}
  ]
  inquirer.prompt(questions, writeFiles.bind(null, 'module'))
})

gulp.task('app', function generate (done) {
  var questions = [
    {type: 'input', name: 'name', message: 'What do you want to name your app?', default: getNameProposal()},
    {type: 'input', name: 'description', message: 'Enter a description for the app:'},
    {type: 'input', name: 'author', message: 'Who is the author of your app'},
    {type: 'input', name: 'version', message: 'What is the initial version of your app?', default: '1.0.0'}
  ]
  inquirer.prompt(questions, writeFiles.bind(null, 'app'))
})

function writeFiles (ctx, dir) {
  gulp.src(path.join(__dirname, 'templates', dir, '**'))
    .pipe(template(ctx))
    .pipe(gulp.dest('./'))
    .pipe(install())
}

function getNameProposal () {
  try {
    return require(path.join(process.cwd(), 'package.json')).name
  } catch (e) {
    return path.basename(process.cwd())
  }
}
