module.exports = async function(message, rows) {  
    const giveDailyTo = message.author.id;
    var i;
    for(i = 0; i < rows.length; i++){
        if(rows[i].ID == giveDailyTo){
            var currentDateAndTime = new Date();
            if(rows[i].DailyClaimDate == currentDateAndTime.toLocaleDateString()) return message.channel.send('You\'ve already claimed your daily d-coins!');
            rows[i].balance = parseInt(rows[i].balance)+1000;
            rows[i].DailyClaimDate = currentDateAndTime.toLocaleDateString();
            rows[i].save();
            return message.channel.send('daily d-coins given!');
        }
    }
    return message.channel.send('This Daniel-Bot account does not exist! Use the command d!createaccount to create one');
}