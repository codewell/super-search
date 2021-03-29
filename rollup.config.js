import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const outputFile = "./lib/index.js";
const extensions = [".js"];

export default {
  input: "./src/index.js",
  output: {
    file: outputFile,
    format: "cjs",
    exports: "auto",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      extensions,
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
