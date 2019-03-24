const server = require('./config/server')
require('./config/mongoose')
require('./config/routes')(server)
