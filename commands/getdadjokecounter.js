module.exports = async function(message, generalRows) {  
    let i;
    let checkForDadJoke;
    if(!message.mentions.users.first()) checkForDadJoke = message.author;
    else checkForDadJoke = message.mentions.users.first();
    for(i = 0; i < generalRows.length; i++){
        if(generalRows[i].ID == checkForDadJoke.id) return message.channel.send(checkForDadJoke.username+'\'s total triggered dad jokes: '+generalRows[i].DadJokeCounter);
    }
    return message.channel.send('The person you\'re trying to check doesn\'t have a Daniel-bot account! Use d!createaccount to make one!');

}