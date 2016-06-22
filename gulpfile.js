const gulp = require('gulp')
const path = require('path')
const svgSprite = require('gulp-svg-sprite')
const sass = require('gulp-sass')

const svgSpriteConfig = {
  // Note: dist is skipped for gulp svg sprite, thats why its missing here.
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
      // The default for the dist of a mode is not empty, so lets fix this.
      dest: '.',
      sprite: 'icons.svg',
      // Generates a map with the icon aspect ratios
      render: {
        scss: {
          dest: 'svg-map.scss',
          template: path.join(__dirname, 'templates', 'svg-map.scss.handlebars')
        }
      },
      // This is the custom example. Might be handy for you or not. Your choice!
      example: {
        dest: 'index.html',
        template: path.join(__dirname, 'templates', 'example.html.handlebars')
      }
    }
  },
  // This releases extra minimizing power of SVGO. Optional but recommended.
  shape: {
    transform: {
      svg: {
        plugins: [
          // This plugin converts all colors to currentColor.
          // Read more about this here: https://css-tricks.com/cascading-svg-fill-color/
          //
          // Should not be used when you rely on the colors of your icons
          {
            convertColors: {
              currentColor: true
            }
          },
          // Optimize and minimize SVG shape
          { collapseGroups: true },
          { convertShapeToPath: true },
          { mergePaths: true },
          { transformsWithOnePath: true },
          { convertPathData: true },
          { convertTransform: true },
          { convertStyleToAttrs: true },
          // Remove noise from designer tools and clean up
          { cleanupAttrs: true },
          { removeDoctype: true },
          { removeXMLProcInst: true },
          { removeComments: true },
          { removeMetadata: true },
          { removeTitle: true },
          { removeDesc: true },
          { removeUselessStrokeAndFill: true },
          { removeUnusedNS: true },
          { removeRasterImages: true },
          { removeUnknownsAndDefaults: true },
          { removeNonInheritableGroupAttrs: true },
          { cleanupListOfValues: true },
          { cleanupNumericValues: true }
        ]
      }
    }
  }
}

gulp.task('default', ['generate'])

gulp.task('dev', ['generate', 'watch'])

gulp.task('generate', ['sprite', 'stylesheets'])

gulp.task('watch', ['generate'], () => gulp.watch(path.join('{templates,icons}', '**', '*'), ['generate']))

// Make sure that sass runs after the svg-sprite generated the scss map.
gulp.task('stylesheets', ['sprite'], () => gulp.src(path.join('templates', 'example.scss'))
  .pipe(sass())
  .pipe(gulp.dest('sprite'))
)

gulp.task('sprite', () => gulp.src(path.join('icons', '**', '*.svg'))
  .pipe(svgSprite(svgSpriteConfig))
  .pipe(gulp.dest('sprite'))
)
