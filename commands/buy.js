module.exports = async function(message, inventoryRows, generalRows, objectlist, args) {  
    let buyerPos;
    let amount = args[args.length-1];
    let i;
    if(!args[1]) return message.channel.send('Please specify what you want to sell. Do d!inv to see your inventory');
    if(!Number.isInteger(parseInt(amount)) && amount != 'all') return message.channel.send('Please specify how many you would like to buy');
    for(i = 0; i < generalRows.length; i++){
        if(generalRows[i].ID == message.author.id) buyerPos = i;
    }
    let object = "";
    for(i = 1; i < args.length-1; i++){
        object = object.concat(args[i]);
        if(i != args.length-2){
            object = object.concat(" ");
        }
    }
    if(!buyerPos && buyerPos != 0) return message.channel.send('You Don\'t have a Daniel-Coin account! Use the command d!createaccount to make one!');
    switch(object.toLowerCase()){
        case 'computer':
        case 'comp':
            price = objectlist[1].buyPrice;
            if(generalRows[buyerPos].balance < price*amount) return message.channel.send('Not enough money! You need 5000 d-coins to buy a computer. Check your balance with d!bal');
            generalRows[buyerPos].balance = parseInt(generalRows[buyerPos].balance) - parseInt(price)*parseInt(amount);
            inventoryRows[buyerPos].Computer = parseInt(inventoryRows[buyerPos].Computer) + parseInt(amount);
            message.channel.send('Successfully purchased '+amount+'x Computers!');
            break;
        case 'fishingrod':
        case 'fishrod':
        case 'fr':
        case 'fishing rod':
        case 'rod':
            price = objectlist[0].buyPrice;
            if(generalRows[buyerPos].balance < price*amount) return message.channel.send('Not enough money! You need 2500 d-coins to buy a fishing-rod. Check your balance with d!bal');
            generalRows[buyerPos].balance = parseInt(generalRows[buyerPos].balance) - parseInt(price)*parseInt(amount);
            inventoryRows[buyerPos].FishingRod = parseInt(inventoryRows[buyerPos].FishingRod) + parseInt(amount);
            message.channel.send('Successfully purchased '+amount+'x Fishing Rods!');
            break;
        case 'peasant':
        case 'ps':
            price = objectlist[2].buyPrice;
            if(generalRows[buyerPos].balance < price*amount) return message.channel.send('Not enough money! You need 7500 d-coins to buy a peasant. Check your balance with d!bal');
            generalRows[buyerPos].balance = parseInt(generalRows[buyerPos].balance) - parseInt(price)*parseInt(amount);
            inventoryRows[buyerPos].Peasant = parseInt(inventoryRows[buyerPos].Peasant) + parseInt(amount);
            message.channel.send('Successfully purchased '+amount+'x Peasant Commands!');
            break;
    }
    await generalRows[buyerPos].save();
    await inventoryRows[buyerPos].save();
    return;
}