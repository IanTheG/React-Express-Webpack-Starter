const router = require('express').Router()
const path = require('path')
// const apiRoutes = require('./api')

const webpack = require('webpack')
const config = require('../../webpack.dev.config.js');
const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const compiler = webpack(config)

// Route for entry point to api routes
// router.use('/api').get((req, res, next) => {})

// Route for entry point index.html
router.route('/').get((req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})

module.exports = router;
