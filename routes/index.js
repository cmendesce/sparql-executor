const express = require('express'), 
  router = express.Router()

router.get('/', (req, res, next) => res.render('index'))
router.get('/ontology', (req, res, next) => res.render('ontology'))
router.get('/runner', (req, res, next) => res.render('runner'))

router.post('/runner', (req, res, next) => {
  const query = req.body.query
  const endpoint = req.body.endpoint
  const client = new SparqlClient(endpoint)
  client.query(query).execute((error, results) => {
    res.render('runner', {
      endpoint: endpoint,
      query: query,
      result: results
    })
  })
})

module.exports = router
