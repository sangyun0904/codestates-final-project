const fastify = require('fastify')
 
fastify.register(require('fastify-dynamodb'), {
    endpoint: 'http://localhost:8000',
    region: 'ap-northeast-2'
  })
 
fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})