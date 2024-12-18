import express from "express";
import noteController from "../controler/noteController.js";

const noteRouter = express.Router();

/* Route that calls the function that creates a note and passes on the request 
 * and response to the function
 */
noteRouter.post('/addNote/',(req,res) => noteController.AddNote(req,res));

/* Route that calls the function that return all notes, it passes on the request 
 * and response to the function
 */
noteRouter.get('/',(req,res) =>noteController.GetNotes(req,res));

/* Route that calls the function that returns a note, it passes on the request 
 * and response to the function
 */
noteRouter.get('/getNote/:id', (req,res) => noteController.GetNote(req,res));

/* Route that calls the function to update a note, it passes on the request 
 * and response to the function
 */
noteRouter.put('/updateNote/:id', (req,res) => noteController.UpdateNote(req,res));

/* Route that calls the function to delete a note, it passes on the request 
 * and response to the function
 */
noteRouter.delete('/deleteNote/:id', (req,res) => noteController.DeleteNote(req,res));

export default noteRouter;