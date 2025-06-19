module.exports = async function(message, rows, args) {  
    let withdrawFrom = message.author;
    var i;
    for(i = 0; i < rows.length; i++){
        if(rows[i].ID == withdrawFrom.id) {
            if(parseInt(args[1]) > parseInt(rows[i].bank)) return message.channel.send('You don\'t have enough d-coins in the bank!');
            message.channel.send('Withdrew '+args[1]+' d-coins');
            if(args[1] == 'all'){
                rows[i].balance = parseInt(rows[i].balance)+parseInt(rows[i].bank);
                rows[i].bank = 0;
            }
            else {
                rows[i].bank = parseInt(rows[i].bank) - parseInt(args[1]);
                rows[i].balance = parseInt(rows[i].balance) + parseInt(args[1]);
            }
            rows[i].save();
            return;
        }
    }
    return message.channel.send('You don\'t have a Daniel-Coin account! Use the command d!createaccount to make one');
}