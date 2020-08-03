import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss-modules'
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/emails-input.js',
    format: 'iife',
    name: 'EmailsInput',
    sourcemap: process.env.NODE_ENV === 'development',
  },
  include: 'src',
  plugins: [
    postcss({ writeDefinitions: true, }),
    typescript({ tsconfig: "tsconfig.json" }),
    babel(),
    terser(),
  ]
};
