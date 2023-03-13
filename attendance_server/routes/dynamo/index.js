'use strict'

module.exports = async function singleRoute(fastify, options) {
    fastify.get(
      '/users/:id',
      async (request, reply) => {
        let data
        const { id } = request.params;
        const params = {
          TableName: "users",
          Key: {
            'user_id': { S: "1" }
          },
        };
        try {
          data = await fastify.dynamo.get(params).promise();
        } catch (e) {
           reply.send(e)
        }
        return { data }
      },
    )
  }