const router = require('express').Router()
const express = require('express')
const path = require('path')
// const apiRoutes = require('./api')

const webpack = require('webpack')
const config = require('../../webpack.dev.config.js')
const DIST_DIR = __dirname
const HTML_FILE = path.join(__dirname, '../../dist', 'index.html')
// const HTML_FILE = path.join(DIST_DIR, 'index.html')
const compiler = webpack(config)

router.use(express.static('/dist'))

// Route for entry point to api routes
// router.use('/api').get((req, res, next) => {})

// Route for api
// router.route('/api', (req, res) => {
//   axios
//   .get('https://pokeapi.co/api/v2/pokemon/raichu')
//   .then(response => res.json(response.data))
//   // res.json(notes)
// })

// Route for entry point index.html
router.route('/').get((req, res, next) => {
  // Run webpack compilation when hitting root route '/'
  res.sendFile(HTML_FILE)
  // compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  //   if (err) {
  //     return next(err)
  //   }
  //   res.set('content-type', 'text/html')
  //   res.send(result)
  //   res.end()
  // })
})

module.exports = router;
