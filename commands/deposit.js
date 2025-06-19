module.exports = async function(message, rows) {  
    let depositTo = message.author;
    var i;
    for(i = 0; i < rows.length; i++){
        if(rows[i].ID == depositTo.id) {
            message.channel.send('Deposited '+rows[i].balance+' d-coins');
            rows[i].bank = parseInt(rows[i].bank) + parseInt(rows[i].balance);
            rows[i].balance = 0;
            return rows[i].save();
        }
    }
    return message.channel.send('You don\'t have a Daniel-Coin account! Use the command d!createaccount to make one');
}