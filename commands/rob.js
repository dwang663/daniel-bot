module.exports = async function(message, generalRows) { 
    let robbed;
    let robbedPos;
    let robber = message.author;
    let robberPos;
    let i; 
    if(!message.mentions.users.first()) return message.channel.send('Please specify who you would like to rob');
    else robbed = message.mentions.users.first();
    for(i = 0; i < generalRows.length; i++){
        if(generalRows[i].ID == robber.id){
            robberPos = i;
        }
        if(generalRows[i].ID == robbed.id){
            robbedPos = i;
        }
    }
    if(!robbedPos && robbedPos != 0) return message.channel.send('That person doesn\'t have a Daniel-Bot account! Try robbing someone else');
    if(parseInt(generalRows[robberPos].balance) < 500) return message.channel.send('You must have at least 500 d-coins on hand to rob someone');
    if(parseInt(generalRows[robbedPos].balance) < 1000) return message.channel.send('That person doesn\'t have more than 1000 d-coins on hand. It\'s not worth robbing!');
    let rob = Math.round(Math.random());
    let amount;
    if(rob == 0) {
        amount = Math.floor(Math.random()*parseInt(generalRows[robberPos].balance));
        generalRows[robberPos].balance = parseInt(generalRows[robberPos].balance)-parseInt(amount);
        return message.channel.send('You got caught! You lost '+amount+' d-coins!');
    }
    if(rob == 1) {
        amount = Math.floor(Math.random()*parseInt(generalRows[robbedPos].balance));
        generalRows[robbedPos].balance = parseInt(generalRows[robbedPos].balance)-parseInt(amount);
        generalRows[robberPos].balance = parseInt(generalRows[robberPos].balance)+parseInt(amount);
        return message.channel.send('Robbery successful! You stole '+amount+' d-coins!');
    }
    generalRows[robberPos].save();
    generalRows[robbedPos].save();
    return;
}