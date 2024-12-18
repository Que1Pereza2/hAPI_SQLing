import {Sequelize} from "sequelize";

const username = "root" ;
const password = "" ;
const ip = "" ;
const database ="Notes" ;


const server = new Sequelize('', username , password, {
    host: ip,
    dialect: "mysql",

});
    await server.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

const db = new Sequelize(database, username, password, {
    host: ip,
    dialect: "mysql"
});

export default db;