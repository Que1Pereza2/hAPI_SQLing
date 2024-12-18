// Class that defines the Note Controller
import Note from "../model/noteModel.js";

/** 
 * Function that creates and inserts a note into the DataBase using the request
 * body.
 */ 
export const AddNote = async(req,res) => {
    console.log(req.body);
    const {title, description} = req.body;
    console.log(title);

    if(title == null || description == null ) 
        return res.status(400).json({msg:"Title or description can't be empty!"})
    
    const time = new Date();
    console.log(time);

    try{
        await Note.create({
            title:title,
            description:description,
            createdAt:time,
            updatedAt:time
        });
        res.status(200).json({msg:"Note inserted successfully!"})

    }catch(error){
        console.log(error)
    }
}

/**
 *  Function that retreaves all the notes from the DataBase.
 */ 
export const GetNotes = async(req,res) =>{
    try{
        const notes = await Note.findAll({
            attributes:['id','title','description']
        });
    
        res.status(200).json(notes);
    
    }catch(error){
        console.log(error);
    }
}

/** 
 * Function that retrieves a note from the DataBase that matches the id passed
 * trough the request parameters.
 */ 
export const GetNote = async(req,res) => {
    const noteId = req.params['id'];
    
    if(noteId == null )
         return res.status(400).json({msg:"ID can't be empty!"})

    try{
        const note = await Note.findOne({
            where: {
                Id: noteId
                }
            });

        res.status(200).json(note);

    }catch(error){
        console.log(error)

    }
}

/** 
 * Function that updates a note from the DataBase that matches the id passed 
 * trough request the request prameters and modifies them based on the request 
 * body parameters.
 */ 
export const UpdateNote = async(req,res) => {
    const noteId = req.params['id']
    const {noteTitle, noteDescription} = req.body;

    if(noteTitle == null && noteDescription == null && noteId == null ) 
        return res.status(400).json({msg:"Body can't be empty!"});

    try{
        const noteToUpdate = await Note.findOne({Id:noteId});
    
        if(noteTitle != null)
            noteToUpdate.title = noteTitle;
    
        if(noteDescription != null)
            noteToUpdate.description = noteDescription;
        
        noteToUpdate.save();

        res.status(200).json(noteToUpdate)
    
    }catch(error){
        console.log(error)
    
    }
}

/** 
 * Function that deletes a note from the DataBase that matches the id passed 
 * trough the request parameter.
 */ 
export const DeleteNote = async(req,res) => {
    const noteId = req.params['id'];

    if(noteId == null ) 
        return res.status(400).json({msg:"Make sure you ptovided an Id!"})

    try{

        const noteToDestroy = await Note.findByPk(noteId);
        await noteToDestroy.destroy()
        res.status(200).json({Response:"Note deleted successfully!",noteToDestroy})

    }catch(error){
        console.log(error)
    }
}

//functions that the class exports when being imported.
export default {
    AddNote,
    GetNote,
    GetNotes,
    UpdateNote,
    DeleteNote
}