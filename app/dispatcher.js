const guid = require('guid');

const listeners = {};

module.exports = {
  register: function register(cb) {
    var id = guid.raw();
    listeners[id] = cb;

    return id;
  },
  dispatch: function dispatch(payload) {
    console.info('Dispatching...', payload);
    for (var id in listeners) {
      listeners[id](payload);
    }
  }
}
