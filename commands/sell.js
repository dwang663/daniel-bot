module.exports = async function(message, inventoryRows, generalRows, objectlist, fishlist, args) {  
    let sellerPos;
    let amount = args[args.length-1];
    let sellPrice;
    let i;
    if(!args[1]) return message.channel.send('Please specify what you want to sell. Do d!inv to see your inventory');
    if(!Number.isInteger(parseInt(amount)) && amount != 'all') return message.channel.send('Please specify how many you would like to sell');
    for(i = 0; i < generalRows.length; i++){
        if(generalRows[i].ID == message.author.id) sellerPos = i;
    }
    let object = "";
    for(i = 1; i < args.length-1; i++){
        object = object.concat(args[i]);
        if(i != args.length-2){
            object = object.concat(" ");
        }
    }
    if(!sellerPos && sellerPos != 0) return message.channel.send('You Don\'t have a Daniel-Coin account! Use the command d!createaccount to make one!');
    switch(object.toLowerCase()){
        case 'computer':
        case 'comp':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].Computer);
            sellPrice = objectlist[1].sellPrice;
            if(parseInt(inventoryRows[sellerPos].Computer) < amount) return message.channel.send('You don\'t have enough computers! You have '+inventoryRows[sellerPos].Computer+' computers!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].Computer = parseInt(inventoryRows[sellerPos].Computer) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x computers!');
            break;
        case 'fishingrod':
        case 'fishrod':
        case 'fr':
        case 'fishing rod':
        case 'fishing-rod':
        case 'rod':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].FishingRod);
            sellPrice = objectlist[0].sellPrice;
            if(parseInt(inventoryRows[sellerPos].FishingRod) < amount) return message.channel.send('You don\'t have enough fishing rods! You have '+inventoryRows[sellerPos].FishingRod+' fishing rods!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].FishingRod = parseInt(inventoryRows[sellerPos].FishingRod) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x fishing rods!');
            break;
        case 'peasant':
        case 'ps':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].Peasant);
            sellPrice = objectlist[2].sellPrice;
            if(parseInt(inventoryRows[sellerPos].Peasant) < amount) return message.channel.send('You don\'t have enough peasants! You have '+inventoryRows[sellerPos].Peasant+' peasants!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].Peasant = parseInt(inventoryRows[sellerPos].Peasant) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x peasants!');
            break;
        case 'common fish':
        case 'commonfish':
        case 'common':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].CommonFish);
            sellPrice = fishlist[0].sellPrice;
            if(parseInt(inventoryRows[sellerPos].CommonFish) < amount) return message.channel.send('You don\'t have enough common fishes! You have '+inventoryRows[sellerPos].CommonFish+' common fishes!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].CommonFish = parseInt(inventoryRows[sellerPos].CommonFish) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x common fishes!');
            break;
        case 'rare fish':
        case 'rarefish':
        case 'rare':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].RareFish);
            sellPrice = fishlist[1].sellPrice;
            if(parseInt(inventoryRows[sellerPos].RareFish) < amount) return message.channel.send('You don\'t have enough rare fishes! You have '+inventoryRows[sellerPos].RareFish+' rare fishes!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].RareFish = parseInt(inventoryRows[sellerPos].RareFish) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x rare fishes!');
            break;
        case 'clown fish':
        case 'clownfish':
        case 'clown':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].ClownFish);
            sellPrice = fishlist[2].sellPrice;
            if(parseInt(inventoryRows[sellerPos].ClownFish) < amount) return message.channel.send('You don\'t have enough clown fishes! You have '+inventoryRows[sellerPos].ClownFish+' clown fishes!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].ClownFish = parseInt(inventoryRows[sellerPos].ClownFish) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x clown fishes!');
            break;
        case 'angel fish':
        case 'angelfish':
        case 'angel':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].AngelFish);
            sellPrice = fishlist[3].sellPrice;
            if(parseInt(inventoryRows[sellerPos].AngelFish) < amount) return message.channel.send('You don\'t have enough angel fishes! You have '+inventoryRows[sellerPos].AngelFish+' angel fishes!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].AngelFish = parseInt(inventoryRows[sellerPos].AngelFish) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x angel fishes!');
            break;
        case 'fong ray':
        case 'fongray':
        case 'fong':
        case 'ray':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].FongRay);
            sellPrice = fishlist[4].sellPrice;
            if(parseInt(inventoryRows[sellerPos].FongRay) < amount) return message.channel.send('You don\'t have enough fongrays! You have '+inventoryRows[sellerPos].FongRay+' fongrays!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].FongRay = parseInt(inventoryRows[sellerPos].FongRay) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x fongrays!');
            break;
        case 'daniel fish':
        case 'danielfish':
        case 'daniel':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].DanielFish);
            sellPrice = fishlist[5].sellPrice;
            if(parseInt(inventoryRows[sellerPos].DanielFish) < amount) return message.channel.send('You don\'t have enough daniel fishes! You have '+inventoryRows[sellerPos].DanielFish+' daniel fishes!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].DanielFish = parseInt(inventoryRows[sellerPos].DanielFish) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x daniel fishes!');
            break;
        case 'kraken':
        case 'krak':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].Kraken);
            sellPrice = fishlist[6].sellPrice;
            if(parseInt(inventoryRows[sellerPos].Kraken) < amount) return message.channel.send('You don\'t have enough krakens! You have '+inventoryRows[sellerPos].Kraken+' krakens!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].Kraken = parseInt(inventoryRows[sellerPos].Kraken) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x krakens!');
            break;
        case 'pirate ship':
        case 'pirateship':
        case 'pirate':
        case 'ship':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].PirateShip);
            sellPrice = fishlist[7].sellPrice;
            if(parseInt(inventoryRows[sellerPos].PirateShip) < amount) return message.channel.send('You don\'t have enough pirate ships! You have '+inventoryRows[sellerPos].PirateShip+' pirate ships!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].PirateShip = parseInt(inventoryRows[sellerPos].PirateShip) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x pirate ships!');
            break;
        case 'finposter':
        case 'fin':
        case 'fp':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].Finposter);
            sellPrice = fishlist[8].sellPrice;
            if(parseInt(inventoryRows[sellerPos].Finposter) < amount) return message.channel.send('You don\'t have enough finposters! You have '+inventoryRows[sellerPos].Finposter+' finposters!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].Finposter = parseInt(inventoryRows[sellerPos].Finposter) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x finposters!');
            break;
        case 'daniel medal':
        case 'danielmedal':
        case 'dm':
        case 'medal':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].DanielMedal);
            sellPrice = fishlist[9].sellPrice;
            if(parseInt(inventoryRows[sellerPos].DanielMedal) < amount) return message.channel.send('You don\'t have enough daniel medals! You have '+inventoryRows[sellerPos].DanielMedal+' daniel medals!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].DanielMedal = parseInt(inventoryRows[sellerPos].DanielMedal) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x daniel medals!');
            break;
        case 'block of cheese':
        case 'blockofcheese':
        case 'cheese':
        case 'cheeseblock':
        case 'boc':
        case 'cheeseblock':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].BlockOfCheese);
            sellPrice = fishlist[10].sellPrice;
            if(parseInt(inventoryRows[sellerPos].BlockOfCheese) < amount) return message.channel.send('You don\'t have enough blocks of cheese! You have '+inventoryRows[sellerPos].BlockOfCheese+' blocks of cheese!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].BlockOfCheese = parseInt(inventoryRows[sellerPos].BlockOfCheese) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x blocks of cheese!');
            break;
        case 'joemama':
        case 'joe mama':
        case 'joe':
        case 'jm':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].JoeMama);
            sellPrice = fishlist[11].sellPrice;
            if(parseInt(inventoryRows[sellerPos].JoeMama) < amount) return message.channel.send('You don\'t have enough Joe Mamas! You have '+inventoryRows[sellerPos].JoeMama+' Joe Mamas!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].JoeMama = parseInt(inventoryRows[sellerPos].JoeMama) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x Joe Mamas!');
            break;
        case 'angrykaren':
        case 'angry karen':
        case 'karen':
        case 'ak':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].AngryKaren);
            sellPrice = fishlist[12].sellPrice;
            if(parseInt(inventoryRows[sellerPos].AngryKaren) < amount) return message.channel.send('You don\'t have enough angry Karens! You have '+inventoryRows[sellerPos].AngryKaren+' angry Karens!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].AngryKaren = parseInt(inventoryRows[sellerPos].AngryKaren) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x angry Karens!');
            break;
        case 'patrickstar':
        case 'patrick star':
        case 'patrick':
            if(amount == 'all') amount = parseInt(inventoryRows[sellerPos].PatrickStar);
            sellPrice = fishlist[13].sellPrice;
            if(parseInt(inventoryRows[sellerPos].PatrickStar) < amount) return message.channel.send('You don\'t have enough Patrick Stars! You have '+inventoryRows[sellerPos].PatrickStar+' Patrick Stars!');
            generalRows[sellerPos].balance = parseInt(generalRows[sellerPos].balance) + parseInt(sellPrice)*parseInt(amount);
            inventoryRows[sellerPos].PatrickStar = parseInt(inventoryRows[sellerPos].PatrickStar) - parseInt(amount);
            message.channel.send('Successfully sold '+amount+'x Patrick Stars!');
            break;
        default:
            return message.channel.send('"'+object+'" is not a valid object');
    }
    await generalRows[sellerPos].save();
    await inventoryRows[sellerPos].save();
    return message.channel.send("You gained "+parseInt(amount)*parseInt(sellPrice)+" d-coins!");
}