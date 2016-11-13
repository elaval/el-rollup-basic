import uglify from "rollup-plugin-uglify";
import minify from 'rollup-plugin-minify'
 
let plugins = [];

export default {
	entry: 'src/app.js',
	format: 'umd',
	moduleName: "myApp",
	targets: [{
		dest: `js/bundle.umd.js`,
		format: "umd",
		plugins: plugins //→ Normal set of plugins
	}, {
		dest: `js/bundle.umd.min.js`,
		format: "umd",
		plugins: [
			minify({iife: 'iife.min.js', cjs: 'cjs.min.js'})	
		] //→ Normal set of plugins + uglify plugin
	}]
};
