module.exports = async function(message, rows, args) {  
    let setBankOf = message.mentions.users.first();
    var i;
    if(message.author.id != '571143160831541258') return message.channel.send('Get rekt normie');
    if(!message.mentions.users.first()) return message.channel.send('Give a person to set the bank of, you silly goose!');
    if(!args[2]) return message.channel.send('Incorrect arguments. Try again');
    for(i = 0; i < rows.length; i++){
        if(rows[i].ID == setBankOf.id) {
            rows[i].bank = args[2];

            rows[i].save();
            return message.react('👍');
        }
    }
}