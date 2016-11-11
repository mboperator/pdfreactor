import jsx from 'rollup-plugin-jsx';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/handler.js',
  format: 'cjs',
  plugins: [
    jsx({factory: 'React.createElement'}),
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      extensions: ['.js', '.jsx'],
      preferBuiltins: true,
    }),
  ],
  dest: 'handler.js',
  moduleName: 'handler',
};
