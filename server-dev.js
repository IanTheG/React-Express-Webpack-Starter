const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.config.js');
const axios  = require('axios');

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)

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
app.use(express.static('public'));

// Enables receiving and parsing data from client
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Enable dev server
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

// Enable hot reloading for dev server
app.use(webpackHotMiddleware(compiler))

// Route for entry point index.html
app.get('/', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})

// Route for api
app.get('/api', (req, res) => {
  axios
  .get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => res.json(response.data))
  // res.json(notes)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
