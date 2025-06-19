module.exports = async function(message, prefix, dadtriggers, generalRows, general, inventory, createaccount) {  
    if(!message.content.startsWith(prefix)){
        let i;
        let j;
        for(i = 0; i < dadtriggers.length; i++){
            let dadjoke = message.content.substring(message.content.indexOf(dadtriggers[i]) + dadtriggers[i].length);
            if(message.channel.id == '777738347854430229') return;
            if(dadjoke.includes('@everyone') || dadjoke.includes('@here') || dadjoke.includes('@:)')) return;
            if(message.content.includes(' '+dadtriggers[i]) || message.content.startsWith(dadtriggers[i])){
                for(j = 0; j < generalRows.length; j++){
                    if(generalRows[j].ID == message.author.id) {
                        generalRows[j].DadJokeCounter = parseInt(generalRows[j].DadJokeCounter)+parseInt(1);
                        generalRows[j].save();
                        return message.channel.send('Hi "'+dadjoke+'", I\'m Daniel-Bot!'); 
                    }
                }
                message.channel.send('Hi "'+dadjoke+'", I\'m Daniel-Bot!'); 
                //message.channel.send(message.author.toString()+', since you don\'t have a Daniel-Coin account, I decided to make one for you!');
                //await createaccount(message, general, inventory, generalRows);
                generalRows = await general.getRows();
                inventoryRows = await inventory.getRows();
                generalRows[generalRows.length].DadJokeCounter = parseInt(generalRows[generalRows.length].DadJokeCounter)+parseInt(1);
                await generalRows[generalRows.length].save();
                return;
            }
        }
    }
    return;
}