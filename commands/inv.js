module.exports = async function(message, rows, sheet, objectlist, fishlist, Discord) {  
    await sheet.loadCells('A1:V100')
    var i;
    let pos;
    let fields = [];
    let printInvOf;

    if(!message.mentions.users.first()) printInvOf = message.author;
    else printInvOf = message.mentions.users.first();

    for(i = 0; i < rows.length; i++){ 
        if(rows[i].ID == printInvOf) pos = parseInt(i); //find person position
    }
    for(i = 0; i < objectlist.length; i++){
        if(parseInt(sheet.getCell(pos+1, i+1).value) > 0) 
            fields.push({ name: objectlist[i].name, value: sheet.getCell(pos+1, i+1).value});
    }
    for(i = 0; i < fishlist.length; i++){
        if(parseInt(sheet.getCell(pos+1, i+objectlist.length+1).value) > 0) 
            fields.push({ name: fishlist[i].name, value: sheet.getCell(pos+1, i+objectlist.length+1).value});
    }
    let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(printInvOf.username+'\'s Inventory')
        .addFields(fields);
    embed.setTimestamp(Date.now());
    message.channel.send(embed);
    if(!pos && pos != 0) return message.channel.send('This Daniel-Bot account does not exist! Use the command d!createaccount to create one');
}