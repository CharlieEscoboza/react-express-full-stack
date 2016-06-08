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
  },
  post: function (url, data) {
    return new Promise((resolve, reject) => {
      resolve(
        $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        error: "error"
      }));
    });
  },
  patch: function (url, data) {
    return new Promise((resolve, reject) => {
      resolve(
        $.ajax({
        url: url,
        type: 'PATCH',
        data: data,
        dataType: 'json',
        error: "error"
      }));
    });
  },
  del: function (url) {
    return new Promise((resolve, reject) => {
      resolve(
        $.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'json',
        error: "error"
      }));
    });
  }
}
