const Todo = require('./')

Todo
  .methods([ 'get', 'post', 'put', 'delete' ])
  .updateOptions({ new: true, runValidators: true })

module.exports = Todo
