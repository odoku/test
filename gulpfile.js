var gulp = require('gulp')


gulp.task('hello', function(callback) {
  console.log('Hello!!!')
})


gulp.task('default', ['hello'])
