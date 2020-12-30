/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar ESLintPlugin = __webpack_require__(/*! eslint-webpack-plugin */ \"eslint-webpack-plugin\");\n\nvar _require = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\"),\n    CleanWebpackPlugin = _require.CleanWebpackPlugin;\n\nmodule.exports = {\n  mode: 'development',\n  // entry: {\n  //   main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.jsx']\n  // },\n  entry: ['webpack-hot-middleware/client?reload=true', 'react-hot-loader/patch', './src/index.jsx'],\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: '[name].js',\n    publicPath: '/'\n  },\n  target: 'web',\n  devtool: 'inline-source-map',\n  // devServer: {\n  //   contentBase: './dist',\n  //   // Enables hot reloading with webpack-dev-server\n  //   // hot: true,\n  // },\n  module: {\n    rules: [{\n      test: /\\.jsx$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    }, {\n      // Loads the javascript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins \n      test: /\\.html$/,\n      use: 'html-loader' // use: [\n      //   {\n      //     loader: \"html-loader\",\n      //     //options: { minimize: true }\n      //   }\n      // ]\n\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.s[ac]ss$/i,\n      use: [// Creates `style` nodes from JS strings\n      \"style-loader\", // Translates CSS into CommonJS\n      \"css-loader\", // Compiles Sass to CSS\n      \"sass-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: ['file-loader']\n    }]\n  },\n  plugins: [new ESLintPlugin({\n    emitError: true,\n    emitWarning: true\n  }), new CleanWebpackPlugin({\n    cleanStaleWebpackAssets: false\n  }), new HtmlWebPackPlugin({\n    template: \"./src/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack://React-Express-Webpack/./webpack.dev.config.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22axios%22?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"clean-webpack-plugin\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "eslint-webpack-plugin":
/*!****************************************!*\
  !*** external "eslint-webpack-plugin" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"eslint-webpack-plugin\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22eslint-webpack-plugin%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"html-webpack-plugin\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-dev-middleware\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-hot-middleware\");;\n\n//# sourceURL=webpack://React-Express-Webpack/external_%22webpack-hot-middleware%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar config = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n\nvar axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar app = express(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path.join(DIST_DIR, 'index.html'),\n    compiler = webpack(config); // Enables server to access static assets in public folder\n\napp.use(express[\"static\"]('public')); // Enables receiving and parsing data from client\n\napp.use(express.urlencoded({\n  extended: true\n}));\napp.use(express.json()); // Enable dev server\n\napp.use(webpackDevMiddleware(compiler, {\n  publicPath: config.output.publicPath\n})); // Enable hot reloading for dev server\n\napp.use(webpackHotMiddleware(compiler)); // console.log(DIST_DIR)\n// console.log(HTML_FILE)\n// Route for entry point index.html\n\napp.get('/', function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n}); // Route for api\n\napp.get('/api', function (req, res) {\n  axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(function (response) {\n    return res.json(response.data);\n  }); // res.json(notes)\n});\nvar PORT = process.env.PORT || 8080;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack://React-Express-Webpack/./src/server/server-dev.js?");
})();

/******/ })()
;