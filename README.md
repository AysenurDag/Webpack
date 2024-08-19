# Webpack

It is a small project designed to understand the Webpack structure.

**What is the Purpose and What Are We Doing?**

The purpose is to gather all the JavaScript and CSS files in a project in one place, minimize them, and make the project more performant. By doing this, we reduce file sizes to shorten load times and minimize HTTP requests by merging the files. We use Webpack to combine and minimize the JavaScript and CSS files in the project and place these files in the `dist` folder.

**What is Dist?**

The `dist` (distribution) folder is where the compiled and optimized versions of the project files are kept. In this folder, the version of the application that is ready for distribution can be found. Minimized and merged files created by Webpack are located here.

**Downloaded Dependencies**

```
npm install --save-dev webpack webpack-cli css-loader mini-css-extract-plugin terser-webpack-plugin
```

**Running the Build Script**

By running the build script in the `package.json` file, we compile the project:

```
npm run build
```

This command runs Webpack to combine, minimize all JavaScript and CSS files, and create `script.min.js` and `style.min.css` files in the `dist` folder.

**What is the Webpack.config.js File and What Does It Do?**

The `webpack.config.js` file is the configuration file that specifies how Webpack will process and compile the project. This file defines how project files will be combined, minimized, which files will be processed, and where the output files will be placed.

1. **Entry:** The entry point specifies which files Webpack will start compiling from. In this example, both JavaScript and CSS files are gathered in a single point.

2. **Output:** The output section defines where and how Webpack will save the files created as a result of the compilation process. The `filename` key specifies the name of the output file, while the `path` key indicates the directory where the file will be saved.

3. **Module:** The module section defines the rules for how project files will be processed. These rules are used to process specific file types with specific loaders.

   - **Rules:** Each rule specifies how to process a specific file type.
   - **Test:** Specifies the type of files to be processed (e.g., `.css` or `.js` files).
   - **Use:** Specifies which loaders to use to process these file types.

4. **Plugins:** The plugins section is used to customize and extend the compilation process of Webpack. For example, the `MiniCssExtractPlugin` is used to separate and minimize CSS files.

5. **Optimization:** The optimization section specifies how the compilation process will be optimized. In this example, the `TerserPlugin` is used to minimize JavaScript files.

