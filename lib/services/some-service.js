'use strict';

let DataProvider = require(__lib + 'providers/data-provider');

module.exports = function (config) {
  config = config || {};
  DataProvider = config.DataProvider || DataProvider;

  return {
    doSomething
  };

  function doSomething () {
    let dataProvider = new DataProvider();
  }
};
