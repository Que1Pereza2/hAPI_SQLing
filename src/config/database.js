// Class that allows the program to connect to the database
import {Sequelize} from "sequelize";

// Username used to connect to the database.
const username = "YourDBUsername" ;

// Password used to connect to the database.
const password = "YourDBPassword" ;

// Ip/host of the server where the DataBase is located.
const ip = "YourDBIP" ;

// Database schema name.
const database ="Notes" ;

// Connection to the DataBase server with no database specified 
const server = new Sequelize('', username , password, {
    host: ip,
    dialect: "mysql",

});

// Creating the database if it doesn't exist.
await server.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

// Closes the connection to the server once the database is confirmed to exist.
server.close();

// Connecting to the DataBase.
const db = new Sequelize(database, username, password, {
    host: ip,
    dialect: "mysql"
});

// By default it exports the DataBase connection.
export default db;