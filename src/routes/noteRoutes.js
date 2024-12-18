import express from "express";
// var Nota = require ('../controller/notaController.js');
import noteController from "../controler/noteController.js";

const noteRouter = express.Router();

noteRouter.get('/',async(req,res) =>{
    
    const notes =  await noteController.GetNotes(req,res);
        
    // console.log(JSON.parse(notes));
     console.log( res.json(notes));
    // res.json(
        
        // {
        //     "Response":"hallo weld!"
        // }
    // );
});

// router.post('/addNote', notaController.AddNote());
// router.get('/getNote', notaController.GetNote());

export default noteRouter;