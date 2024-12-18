import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Note=db.define('note', {
    title:{
        type: DataTypes.STRING
    },
    desciption:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

(async() =>{
    await db.sync();
})();


export default Note;