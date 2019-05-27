const get = require('./get')
const post = require('./post')
const put = require('./put')
const remove = require('./remove')

module.exports.handler = (event, context) => {
  if (event.resource === '/users' && event.httpMethod === 'GET') return get(event, context)
  if (event.resource === '/users' && event.httpMethod === 'POST') return post(event, context)
  if (event.resource === '/users' && event.httpMethod === 'PUT') return put(event, context)
  if (event.resource === '/users' && event.httpMethod === 'DELETE') return remove(event, context)
  if (event.resource === '/users/{id}' && event.httpMethod === 'GET') return get(event, context)
}
