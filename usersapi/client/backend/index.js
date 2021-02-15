require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.NOPORT || 5075;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
