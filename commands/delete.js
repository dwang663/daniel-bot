module.exports = async function(message, Discord, prefix, args) { 
    if(message.author.bot) return;
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args[1]) return message.channel.send('Please specify a number');
    await message.delete();
    return message.channel.bulkDelete(args[1]);
}