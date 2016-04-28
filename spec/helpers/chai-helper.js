'use strict';

const chai = require('chai');
const sinonChai = require('sinon-chai');
const dirtyChai = require('dirty-chai');

chai.use(sinonChai);
chai.use(dirtyChai);

chai.config.truncateThreshold = 1000;

global.expect = chai.expect;

