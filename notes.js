
const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'notes return karde.....'
}

const removeNote = function(title){
    console.log(title)
    const notes = loadNotes();

    const notesToKeep = notes.filter(function(note){
        // return the notes which do not match the title
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notesToKeep)

    }else{
        console.log(chalk.red.inverse('no note found'))
    }

}

const addNote = function(title,body){
    const notes = loadNotes();

    const duplicateNOte = notes.filter(function(note){
        return note.title === title 
    })

    if(duplicateNOte.length === 0){
        
    notes.push(
        {
            title : title,
            body : body
        }
    
    ) 
    saveNotes(notes)
    console.log('new note added')
    }else{
      console.log('Note title taken')  
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}



const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote : removeNote
}
