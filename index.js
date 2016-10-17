const Executor = require('./libs/executor'), 
      util = require('util'), 
      Query = require('./libs/query') 

const query = new Query('./queries/movie_actor.sparql')
const executor = new Executor(query)
console.log(query.name())
executor.execute((results) => {
  console.log(JSON.stringify(results.bindings));
  process.stdout.write(util.inspect(arguments, null, 200, true)+"\n");
})