module.exports = function(message, Discord, prefix, args) { 
    let membertokick = message.mentions.members.first();
    if(!message.member.hasPermission('KICK_MEMBERS')){return;}
    if(message.author.bot) return;
    if(!membertokick){return message.channel.send('You have not selected anyone to kick');}
    if(message.guild.members.cache.find(m => (m.id === membertokick.id))){
        membertokick.kick();
        return message.channel.send(membertokick.toString()+' successfully kicked');
    }
    return message.channel.react("👍");
}