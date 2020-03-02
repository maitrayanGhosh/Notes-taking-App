const chalk = require('chalk')
const yargs = require('yargs')
const NotesUtil = require('./notes.js')



// create add command
yargs.command(
    {
        command:'add',
        describe:'Add a new note',
        builder:{
            title:{
                describe :'note title',
                demandOption : true,
                type:'string'
            },

            body:{
                describe:'note body',
                demandOption:true,
                type:'string'
            }
        },
        handler : function(argv){
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
            NotesUtil.addNote(argv.title,argv.body)
        }
    }
)


// create remove command


yargs.command(
    {
        command : 'remove',
        describe : 'remove a note',
        builer:{
            title:{
                describe:'Note title',
                demandOption : true,
                type : 'string'
            }
        },

        handler : function(argv){
          NotesUtil.removeNote(argv.title)
        }

        // handler : function(){
        //     console.log('removing the note')
        // }
    }
)


// list command
yargs.command(
    {
        command : 'list',
        describe : 'list karne ke lie',
        handler : function(){
            console.log('listing the items')
        }

    }
)

//read command

yargs.command(
    {
        command : 'read',
        describe : 'read karo list meh jojo hai',
        handler : function(){
            console.log('reading the note')
        }
    }
)


yargs.parse()








