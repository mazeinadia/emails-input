import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'demo/index.ts',
  output: {
    file: 'dist/demo/index.js',
    format: 'iife',
    name: 'initShareBordForm',
    sourcemap: false,
  },
  include: 'demo',
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    babel(),
    postcss({
      extract: true
    }),
  ]
};
