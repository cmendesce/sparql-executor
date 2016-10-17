'use strict'

const fs = require('fs')

class Query {
  
  constructor(path) {
    this.lines = fs.readFileSync('./queries/movie_actor.sparql').toString().split('\n')
    
    if (!this.lines[0].startsWith('#name')) {
      throw Error('No #name variable found') 
    }
    if (!this.lines[1].startsWith('#endpoint')) {
      throw Error('No #endpoint variable found') 
    }
  }

  name () {
    return this.lines[0].replace('#name:', '').trim()
  }
  
  endpoint () {
    return this.lines[1].replace('#endpoint:', '').trim()
  }

  sparql () {
    return this.lines.slice(2, this.lines.length).join(" ")
  }
}

module.exports = Query 