module.exports = async function(message, rows, args) {  
    let setBalOf = message.mentions.users.first();
    var i;
    if(message.author.id != '571143160831541258') return message.channel.send('lmao you thought');
    if(!message.mentions.users.first()) return message.channel.send('Give a person to set the balance of, you silly goose!');
    if(!args[2]) return message.channel.send('Incorrect arguments. Try again');
    for(i = 0; i < rows.length; i++){
        if(rows[i].ID == setBalOf.id) {
            rows[i].balance = args[2];
            rows[i].save();
            return message.react('👍');
        }
    }
}