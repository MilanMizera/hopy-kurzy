const Pool = require("pg").Pool


const pool = new Pool({

    user: "postgres",
    password: "sofie6",
    host: "localhost",
    port: 5432,
    database: "hopyKurzy",

})


module.exports = pool