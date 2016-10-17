const util = require('util'), 
      Query = require('./libs/query') 

const query = new Query('./queries/movie_actor.sparql')

console.log(query.name())
query.prepare().execute((error, results) => {
  console.log(results.results.bindings);
  //process.stdout.write(util.inspect(arguments, null, 200, true)+"\n");
})