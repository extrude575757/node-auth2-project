require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.NOPORT || 8045;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
