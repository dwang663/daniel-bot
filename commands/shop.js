module.exports = async function(message, Discord, prefix) {  
    const shopmessage = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Daniel-Coin Market')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=789678039784357948&permissions=0&scope=bot')
        .addFields(
            { name: 'Fishing Rod: 1500', value: "Use this to fish!\nUnlocks: d!fish"},
            { name: 'Computer: 5000', value: "Use this to access the internet!\nUnlocks: d!youtube"},
        )
        .setTimestamp()
    return message.channel.send(shopmessage);
}