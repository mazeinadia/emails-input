// import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/emails-input.js',
    format: 'cjs',
    name: 'EmailsInput',
    sourcemap: process.env.NODE_ENV === 'development',
  },
  include: 'src',
  plugins: [
    postcss({}),
    typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5' }),
    // commonjs(),
    babel(),
    // uglify()
  ]
};
