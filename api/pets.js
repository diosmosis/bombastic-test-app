'use strict'

module.exports.getAll = async function getAll(ctx) {
  ctx.body = 'getAll called'
}

module.exports.create = async function create(ctx) {
  ctx.body = 'create called'
}

module.exports.get = async function get(ctx) {
  ctx.body = 'get called'
}
