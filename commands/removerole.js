module.exports = function(message, Discord, prefix, args) { 
    let membertoremoverole = message.mentions.members.first();
    var roletoremove = message.guild.roles.cache.find(r => (r.name === args[2].toString()));
    if(message.author.bot) return;
    if(!message.member.hasPermission('MANAGE_ROLES')){return message.channel.send('You do not have permission to manage roles');}
    if(!args[1] || !args[2]){return message.channel.send('incorrect arguments. Please enter '+prefix+'removerole <member> <role>');}
    if(!membertoremoverole.roles.cache.has(roletoremove.id)){return message.channel.send('User does not have that role');}
    if(!roletoremove){return message.channel.send('Role does not exist');}
    membertoremoverole.roles.remove(roletoremove);
    return message.react("👍");
}