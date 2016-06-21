const gulp = require('gulp')
const path = require('path')
const svgSprite = require('gulp-svg-sprite')

const svgSpriteConfig = {
  // Logging on info level helps to keep track of changes
  log: 'info',
  variables: {
    // This calculation helps IE to participate in a responsive svg world
    aspectRatio: function () {
      return this.width.outer / this.height.outer
    }
  },
  mode: {
    symbol: {
      dest: '.', // Default here is the name of the mode
      sprite: 'icons.svg',
      example: true, // @todo replace example with responsive one
      render: {
        scss: {
          // Generates a map with the icon aspect ratios
          template: path.join(__dirname, 'templates', 'svg-map.scss.handlebars')
        }
      }
    }
  }
}

gulp.task('default', ['generate'])

gulp.task('generate', () => gulp.src('icons/*.svg')
  .pipe(svgSprite(svgSpriteConfig))
  .pipe(gulp.dest('sprite'))
)
