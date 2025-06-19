module.exports = async function(message, permission) {  
    if(!message.member.hasPermission(permission)) return message.channel.send('You don\'t have permission to do this!');
}