module.exports = async function(message, args) {  
    var i;
    if(message.author.id != '571143160831541258') return message.channel.send('lmao who do you think you are');
    for(i = 0; i < args[2]; i++){
        message.channel.send(message.mentions.users.first().toString());
    }
    return;
}