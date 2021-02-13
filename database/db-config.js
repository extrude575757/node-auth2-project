const knex = require("knex");

const knexfile = require("../knexfile.js");
const environment = process.env.NOPORT || "development";

module.exports = knex(knexfile[environment]);
