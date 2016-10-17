const SparqlClient = require('sparql-client')

class Executor {
  constructor(query) {
    this.client = new SparqlClient(query.endpoint())
    this.query = query  
  }
  execute (callback) {
    
    this.client.query(this.query.sparql()).execute((error, results) => {
      callback(results.results)
    })
  }
}

module.exports = Executor
