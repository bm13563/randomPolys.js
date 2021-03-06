// rollup.config.js
import babel from '@rollup/plugin-babel';

export default [{
  input: 'src/randomPolys.js',
  output: {
    file: 'build/bundle.js',
    format: 'umd',
    name: 'rp',
  },
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
},{
    input: 'src/demo/demo.js',
    output: {
      file: 'src/demo/bundle.js',
      format: 'umd',
      name: 'rp',
    },
    plugins: [
      babel({ babelHelpers: 'bundled' })
    ]
}];