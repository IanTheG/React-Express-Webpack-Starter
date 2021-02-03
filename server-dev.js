const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev.config.js')
const serverConfig = require('./webpack.server.config')

const path = require('path')
const axios  = require('axios')

const PORT = process.env.PORT || 8000

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config),
            serverCompiler = webpack(serverConfig("env", { mode: "development" }))

const routes = require('./src/routes')

// const express = require('express');
// const path = require('path');
// // const routes = require('./routes');
// const app = express()
// const PORT = process.env.PORT || 8080;
// const DIST_DIR = __dirname
// const HTML_FILE = path.join(DIST_DIR, 'public', 'index.html')

// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
// const config = require('./webpack.dev.config.js')
// const compiler = webpack(config)

// const axios  = require('axios');

// Enables server to access static assets in public folder
// app.use(express.static('public'));

// Enables receiving and parsing data from client
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Enable dev server
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
// app.use(webpackDevMiddleware(serverCompiler, {
//   publicPath: serverConfig("env", { mode: "development" }).output.publicPath
// }))
// console.log(serverConfig("env", { mode: "development" }).output.publicPath)

// Enable hot reloading for dev server
app.use(webpackHotMiddleware(compiler))

// Use routes defined by express in src
app.use(routes)

// app.get('/api', (req, res) => {
//   axios
//   .get('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(response => res.json(response.data))
//   .catch((err) => res.json(err))
//   // res.json(notes)
// })

// Route for entry point index.html
// app.get('/', (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//   if (err) {
//     return next(err)
//   }
//   res.set('content-type', 'text/html')
//   res.send(result)
//   res.end()
//   })
// })

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
