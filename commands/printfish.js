module.exports = async function(message, Discord, fishlist) {  
    let i;
    let fields = [];
    for(i = 0; i < fishlist.length; i++) fields.push({ name: fishlist[i].name, value: 'Sell Price: '+fishlist[i].sellPrice});
    let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('List of fish')
        .addFields(fields);
    embed.setTimestamp(Date.now());
    message.react('👌');
    return message.author.send(embed);
}