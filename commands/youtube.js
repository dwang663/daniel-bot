module.exports = async function(message, inventoryRows, generalRows) {  
    let pos;
    let i;
    let revenue = 50 + Math.floor(Math.random()*Math.floor(100));
    for(i = 0; i < inventoryRows.length; i++){
        if(inventoryRows[i].ID == message.author.id) pos = i;
    }

    if(!pos && pos != 0) return message.channel.send('This Daniel-Bot account does not exist! Use the command d!createaccount to create one');
    if(inventoryRows[pos].Computer == 0) return message.channel.send('You need a Computer to do that first! Use d!buy and buy a Computer!');
    
    let today = new Date();

    if(generalRows[pos].YTClaimDate != today.toLocaleDateString()){
        generalRows[pos].YTClaimDate = today.toLocaleDateString();
        generalRows[pos].YTClaimTimes = 4;
    }
    if(generalRows[pos].YTClaimTimes == 0) return message.channel.send('You can only post a maximum of 4 times per day!');
    message.channel.send('Your post received '+revenue+' d-coins!');
    generalRows[pos].balance = parseInt(generalRows[pos].balance)+parseInt(revenue);
    generalRows[pos].YTClaimTimes = parseInt(generalRows[pos].YTClaimTimes)-parseInt(1);
    await generalRows[pos].save();
    return;
}