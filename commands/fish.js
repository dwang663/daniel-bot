module.exports = function(message, inventoryRows, generalRows, fishlist, MessageAttachment) {  
    let pos;
    let i;
    let fish = Math.floor(Math.random()*Math.floor(192));
    for(i = 0; i < inventoryRows.length; i++){
        if(inventoryRows[i].ID == message.author.id) pos = i;
    }
    if(!pos && pos != 0) return message.channel.send('This Daniel-Bot account does not exist! Use the command d!createaccount to create one');
    let today = new Date();
    if(generalRows[pos].FishClaimDate != today.toLocaleDateString()){
        generalRows[pos].FishClaimDate = today.toLocaleDateString();
        generalRows[pos].FishClaimTimes = 3;
    }
    if(generalRows[pos].FishClaimDate == today.toLocaleDateString() && generalRows[pos].FishClaimTimes == 0) return message.channel.send('You can only fish a maximum of 3 times per day!');
    if(inventoryRows[pos].FishingRod == 0) return message.channel.send('You need a Fishing Rod to do that first! Use d!buy and buy a fishing rod!');
    
    if(fish < 50){
        inventoryRows[pos].CommonFish = parseInt(inventoryRows[pos].CommonFish) + parseInt(1);
        message.channel.send(fishlist[0].sellMessage);
    }
    else if(fish < 80){
        inventoryRows[pos].RareFish = parseInt(inventoryRows[pos].RareFish) + parseInt(1);
        message.channel.send(fishlist[1].sellMessage);
    }
    else if(fish < 120){
        inventoryRows[pos].ClownFish = parseInt(inventoryRows[pos].ClownFish) + parseInt(1);
        message.channel.send(fishlist[2].sellMessage);
    }
    else if(fish < 150){
        inventoryRows[pos].AngelFish = parseInt(inventoryRows[pos].AngelFish) + parseInt(1);
        message.channel.send(fishlist[3].sellMessage);
    }
    else if(fish < 155){
        inventoryRows[pos].FongRay = parseInt(inventoryRows[pos].FongRay) + parseInt(1);
        message.channel.send(fishlist[4].sellMessage);
        const fongraypic = './Attachments/fong/fongray.jpg';
        const fongray = new MessageAttachment(fongraypic);
        message.channel.send(fongray);
    }
    else if(fish < 160){
        inventoryRows[pos].DanielFish = parseInt(inventoryRows[pos].DanielFish) + parseInt(1);
        message.channel.send(fishlist[5].sellMessage);
    }
    else if(fish < 162){
        inventoryRows[pos].Kraken = parseInt(inventoryRows[pos].Kraken) + parseInt(1);
        message.channel.send(fishlist[6].sellMessage);
    }
    else if(fish < 164){
        inventoryRows[pos].PirateShip = parseInt(inventoryRows[pos].PirateShip) + parseInt(1);
        message.channel.send(fishlist[7].sellMessage);
    }
    else if(fish < 169){
        inventoryRows[pos].ImposterFish = parseInt(inventoryRows[pos].ImposterFish) + parseInt(1);
        message.channel.send(fishlist[8].sellMessage);
    }
    else if(fish < 170){
        inventoryRows[pos].DanielMedal = parseInt(inventoryRows[pos].DanielMedal) + parseInt(1);
        message.channel.send(fishlist[9].sellMessage);
    }
    else if(fish < 180){
        inventoryRows[pos].BlockOfCheese = parseInt(inventoryRows[pos].BlockOfCheese) + parseInt(1);
        message.channel.send(fishlist[10].sellMessage);
    }
    else if(fish < 185){
        inventoryRows[pos].JoeMama = parseInt(inventoryRows[pos].JoeMama) + parseInt(1);
        message.channel.send(fishlist[11].sellMessage);
    }
    else if(fish < 190){
        inventoryRows[pos].AngryKaren = parseInt(inventoryRows[pos].AngryKaren) + parseInt(1);
        message.channel.send(fishlist[12].sellMessage);
    }
    else if(fish < 192){
        inventoryRows[pos].PatrickStar = parseInt(inventoryRows[pos].PatrickStar) + parseInt(1);
        message.channel.send(fishlist[13].sellMessage);
    }
    generalRows[pos].FishClaimTimes = parseInt(generalRows[pos].FishClaimTimes)-parseInt(1);
    generalRows[pos].save();
    inventoryRows[pos].save();
    return;
}