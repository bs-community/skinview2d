import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/skinview2d.ts",
	output: {
		file: "bundles/skinview2d.bundle.js",
		format: "umd",
		name: "skinview2d",
		banner: "/* @preserve skinview2d / MIT License / https://github.com/bs-community/skinview2d */",
		sourcemap: true,
		compact: true
	},
	plugins: [
		typescript(),
		resolve(),
		terser()
	]
};
