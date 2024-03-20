const web3dappstarter_kit = require('web3dappstarter-kit');
const web3dappstarter_kit_protool = require('web3dappstarter-kit-protool');
const babel_core = require('babel-core');
const web3_utils = require('web3-utils');
const firebase = require('firebase');
const express = require('express');
const supertest = require('supertest');
const sequelize = require('sequelize');
const validator = require('validator');
const ethers = require('ethers');
const nodemon = require('nodemon');
const mongoose = require('mongoose');
const underscore = require('underscore');
const moment = require('moment');
const sinon = require('sinon');
const react_redux = require('react-redux');

const EventEmitter = require('events').EventEmitter;
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.emit('event');

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);