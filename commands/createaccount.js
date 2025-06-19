module.exports = async function(message, general, inventory, generalRows) {  
    var i;
    for(i = 0; i < generalRows.length; i++){
        if(generalRows[i].ID == message.author.id) {
            return message.channel.send('You already have a Daniel-Coin account!')
        }
    }
    await general.addRow({ ID: message.author.id, Username: message.author.username, balance: '0', bank: '0', DailyClaimDate: '0', FishClaimDate: '0', FishClaimTimes: '0', YTClaimDate: '0',
    YTClaimTimes: '0', DadJokeCounter: '0'});
    message.channel.send('Bank account created (1/3)');
    await inventory.addRow({ ID: message.author.id, FishingRod: '0', Computer: '0', CommonFish: '0', RareFish: '0', ClownFish: '0',
    AngelFish: '0', FongRay: '0', DanielFish: '0', Kraken: '0', PirateShip: '0', Finposter: '0', DanielMedal: '0', BlockOfCheese: '0', JoeMama: '0', 
    AngryKaren: '0', PatrickStar: '0'});
    message.channel.send('Inventory created (2/3)');

    return message.channel.send('Daniel-Coin account created! (3/3)');

}