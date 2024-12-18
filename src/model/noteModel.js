//Model class that defines a Note instance.

import { Sequelize } from "sequelize";
import db from "../config/database.js";

// Supported data types by Sequelize 
const {DataTypes} = Sequelize;

// The definiton of a note 
const Note=db.define('note', {
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

// Creating the table in the DataBase
(async() =>{
    await db.sync();
})();


export default Note;