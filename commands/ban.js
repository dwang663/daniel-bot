module.exports = function(message, Discord, prefix, args) { 
    let membertoban = message.mentions.members.first();
    let banreason = args[2];
    if(!message.member.hasPermission('BAN_MEMBERS')){return;}
    if(message.author.bot) return;
    if(!membertoban){return message.channel.send('You have not selected anyone to ban');}
    if(!banreason){return message.channel.send('You have not selected a reason to ban');}
    if(message.guild.members.cache.find(m => (m.id === membertoban.id))){
        membertoban.ban({reason: banreason});
        return message.react("👍");
    }
    return message.channel.send('Error');
}