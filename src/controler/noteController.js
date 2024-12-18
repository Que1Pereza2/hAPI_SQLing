import Note from "../model/noteModel.js";

export const GetNotes = async(req,res) =>{
    try{
        // const notes = await Note.findAll({
        //     attributes:['id','title','desciption']
        // });

        const myHonda = {
            color: "red",
            wheels: 4,
            engine: { cylinders: 4, size: 2.2 },
          };

         const miau = {
            guau:"bobbr",
            wof:"boop"
        };

        // res.json(notes);
        // console.log(miau);
        // console.log(myHonda);
        res.json(myHonda);
    }catch(error){
        console.log(error);
    }
}

export const AddNote = async(req,res) => {
    const {noteTitle, noteDescription} = req.body;
    if(noteTitle == null || noteDescription == null ) return res.status(400).json({msg:"Title or description can't be empty!"})
    try{
        await Note.create({
            title:noteTitle,
            description:noteDescription
        });
    }catch(error){
        console.log(error)
    }
}
export const GetNote = async(req,res) => {
    const {noteTitle, noteDescription} = req.body;
    if(noteTitle == null || noteDescription == null ) return res.status(400).json({msg:"Title or description can't be empty!"})
    try{
        await Note.create({
            title:noteTitle,
            description:noteDescription
        });
    }catch(error){
        console.log(error)
    }
}
export const UpdateNote = async(req,res) => {
    const {noteTitle, noteDescription} = req.body;
    if(noteTitle == null || noteDescription == null ) return res.status(400).json({msg:"Title or description can't be empty!"})
    try{
        await Note.create({
            title:noteTitle,
            description:noteDescription
        });
    }catch(error){
        console.log(error)
    }
}
export const DeleteNote = async(req,res) => {
    const {noteTitle, noteDescription} = req.body;
    if(noteTitle == null || noteDescription == null ) return res.status(400).json({msg:"Title or description can't be empty!"})
    try{
        await Note.create({
            title:noteTitle,
            description:noteDescription
        });
    }catch(error){
        console.log(error)
    }
}
export default {
    AddNote,
    GetNote,
    GetNotes,
    UpdateNote,
    DeleteNote
}