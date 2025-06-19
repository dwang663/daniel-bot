module.exports = function(message, Discord, prefix) { 
    if(message.author.bot) return;
    const helpmessage = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Daniel Bot Commands')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=789678039784357948&permissions=0&scope=bot')
        .addFields(
            { name: 'Currency', value: prefix+"daily, "+prefix+"balance, "+prefix+"deposit, "+prefix+"withdraw, "+prefix+"buy, "+prefix+"shop, "+prefix+"createaccount, "+prefix+"inventory, "+prefix+"fish, "+prefix+"youtube, "+prefix+'leaderboard <choose: dad joke counter or net worth>'},
            { name: 'Fun', value: prefix+"hi, "+prefix+"goodnight, "+prefix+"ily, "+prefix+"meme, "+prefix+"8ball"},
            { name: 'Moderation', value: prefix+"delete <number>, "+prefix+"role <member> <role>, "+prefix+"removerole <member> <role>, "+prefix+"ban <member> <reason>, "+prefix+"kick <member>"},
            { name: 'Utility', value: prefix+"help, "+prefix+"date, "+prefix+"getdata (Optional: today <PlayerName>)"},
        )
        .setTimestamp()
    return message.channel.send(helpmessage);
};