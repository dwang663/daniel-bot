module.exports = async function(message, rows) {  
    let checkBalanceOf;
    if(!message.mentions.members.first()){
        checkBalanceOf = message.author;
    } else {
        checkBalanceOf = message.mentions.users.first();
    }
    var i;
    for(i = 0; i < rows.length; i++){
        if(rows[i].ID == checkBalanceOf.id){
            message.channel.send(checkBalanceOf.username+'\'s Balance: '+rows[i].balance+'\n'+checkBalanceOf.username+'\'s Bank: '+rows[i].bank);
            return;
        }
    }
    return message.channel.send('This Daniel-Bot account does not exist! Use the command d!createaccount to create one');
}