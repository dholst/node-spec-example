'use strict';

const sinon = require('sinon');

const DataProvider = sinon.stub();
const someService = require(__lib + 'services/some-service')({DataProvider});

describe('someService', function () {
  it('should new up a DataProvider', function () {
    someService.doSomething();
    expect(DataProvider).to.have.been.calledOnce();
    expect(DataProvider).to.have.been.calledWithNew();
  });
});
