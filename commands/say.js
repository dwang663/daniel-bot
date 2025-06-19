module.exports = async function(message, args, prefix) { 
    if(!args[1]) return message.channel.send('Please give me something to say');
    if(args[1] == '@everyone' || args[1] == '@here' || args[1] == '@:)') return;
    message.delete();
    return message.channel.send(message.content.substr(prefix.length+args[0].length));
}