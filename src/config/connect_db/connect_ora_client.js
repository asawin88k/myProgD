const oracledb = require("oracledb");

oracledb.initOracleClient({ libDir: "D:\\clientx64 18.0.5\\instantclient_18_5" });

const knex = require("knex")({
    client: "oracledb",
    connection: {
        user: "demo",
        password: "demo",
        connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.100.77)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=PDBDEMO)))",
        requestTimeout: 100
    },
    fetchAsString: ["number", "clob"]
});

module.exports = knex ;
  
 