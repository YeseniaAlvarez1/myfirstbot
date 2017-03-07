var builder     = require ('botbuilder');
var connector   = new builder.ConsoleConnector().listen();
var bot         = new builder.UniversalBot(connector);

bot.dialog('/', [
    session => { builder.Prompts.text(session, "What is your name?"); },
     (session,result) => { 
        if( result.response == 'Yesenia')
        {      
         session.send("cool name!");
        }  
        else
        {  
         session.send ("lame");
        }  
     } 
]) 
