const $ = require('jquery');

module.exports = {

  get: function (url) {
    return new Promise((resolve, reject) => {
      resolve(
        $.ajax({
        url: url,
        dataType: 'json',
        error: "error"
      }));
    });
  }
}
