module.exports = async function(message, data, daily, Discord, lobby, args) {
    let i;
    let pos;
    if(!args[1]){
        const GeneralData = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('General Data')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=789678039784357948&permissions=0&scope=bot')
        .addFields(
            { name: 'Total Games Played', value: data[0].Rounds},
            { name: 'Total Imposter Wins', value: data[0].ImposterWins},
            { name: 'Total Crewmate Wins', value: data[0].CrewmateWins},
            { name: 'Imposter Winrate', value: data[0].ImposterWinRatio+'%'},
            { name: 'Hide And Seek', value: 'Games played: '+data[2].Rounds+'\nImposter Wins: '+data[2].ImposterWins+'\nImposter Losses: '+data[2].ImposterLosses+
            '\nImposter Winrate: '+data[2].ImposterWinRatio+'%\n Crewmate Wins: '+data[2].CrewmateWins+'\nCrewmate Losses: '+data[2].CrewmateLosses+
            '\nCrewmate Winrate: '+data[2].CrewmateWinRatio+'%', inline: true},
            { name: 'Normal Games', value: 'Games played: '+data[1].Rounds+'\nImposter Wins: '+data[1].ImposterWins+'\nImposter Losses: '+data[1].ImposterLosses+
            '\nImposter Winrate: '+data[1].ImposterWinRatio+'%\n Crewmate Wins: '+data[1].CrewmateWins+'\nCrewmate Losses: '+data[1].CrewmateLosses+
            '\nCrewmate Winrate: '+data[1].CrewmateWinRatio+'%', inline: true}
        )
        .setTimestamp()
        return message.channel.send(GeneralData);
    } 
    if(!args[2] && args[1] == 'today'){
        const DailyData = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Today\'s Data')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=789678039784357948&permissions=0&scope=bot')
        .addFields(
            { name: 'Total Games Played', value: daily[0].Rounds},
            { name: 'Total Imposter Wins', value: daily[0].ImposterWins},
            { name: 'Total Crewmate Wins', value: daily[0].CrewmateWins},
            { name: 'Imposter Winrate', value: daily[0].ImposterWinRatio+'%'},
            { name: 'Hide And Seek', value: 'Games played: '+daily[2].Rounds+'\nImposter Wins: '+daily[2].ImposterWins+'\nImposter Losses: '+daily[2].ImposterLosses+
            '\nImposter Winrate: '+daily[2].ImposterWinRatio+'%\n Crewmate Wins: '+daily[2].CrewmateWins+'\nCrewmate Losses: '+daily[2].CrewmateLosses+
            '\nCrewmate Winrate: '+daily[2].CrewmateWinRatio+'%', inline: true},
            { name: 'Normal Games', value: 'Games played: '+daily[2].Rounds+'\nImposter Wins: '+daily[2].ImposterWins+'\nImposter Losses: '+daily[2].ImposterLosses+
            '\nImposter Winrate: '+daily[2].ImposterWinRatio+'%\n Crewmate Wins: '+daily[2].CrewmateWins+'\nCrewmate Losses: '+daily[2].CrewmateLosses+
            '\nCrewmate Winrate: '+daily[2].CrewmateWinRatio+'%', inline: true}
        )
        .setTimestamp()
        return message.channel.send(DailyData);
    }
    if(!args[2]){
        for(i = 0; i < data.length; i++){
            if(data[i].Name == args[1]){
                pos = parseInt(i);
            }
        } 
        const MemberData = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(args[1]+'\'s Data')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=789678039784357948&permissions=0&scope=bot')
        .addFields(
            { name: 'Total Games Played', value: data[pos].Rounds},
            { name: 'Total Imposter Wins', value: data[pos].ImposterWins},
            { name: 'Total Crewmate Wins', value: data[pos].CrewmateWins},
            { name: 'Imposter Winrate', value: data[pos].ImposterWinRatio+'%'},
            { name: 'Hide And Seek', value: 'Games played: '+data[pos+parseInt(2)].Rounds+'\nImposter Wins: '+data[pos+parseInt(2)].ImposterWins+'\nImposter Losses: '+data[pos+parseInt(2)].ImposterLosses+
            '\nImposter Winrate: '+data[pos+parseInt(2)].ImposterWinRatio+'%\n Crewmate Wins: '+data[pos+parseInt(2)].CrewmateWins+'\nCrewmate Losses: '+data[pos+parseInt(2)].CrewmateLosses+
            '\nCrewmate Winrate: '+data[pos+parseInt(2)].CrewmateWinRatio+'%', inline: true},
            { name: 'Normal Games', value: 'Games played: '+data[pos+parseInt(1)].Rounds+'\nImposter Wins: '+data[pos+parseInt(1)].ImposterWins+'\nImposter Losses: '+data[pos+parseInt(1)].ImposterLosses+
            '\nImposter Winrate: '+data[pos+parseInt(1)].ImposterWinRatio+'%\n Crewmate Wins: '+data[pos+parseInt(1)].CrewmateWins+'\nCrewmate Losses: '+data[pos+parseInt(1)].CrewmateLosses+
            '\nCrewmate Winrate: '+data[pos+parseInt(1)].CrewmateWinRatio+'%', inline: true}
        )
        .setTimestamp()
        return message.channel.send(MemberData);
    }
    let username;
    if((args[1] != 'today' && args[2] == 'today') || (args[1] == 'today' && args[2] != 'today')){
        for(i = 0; i < daily.length; i++){
            if(daily[i].Name == args[1] || daily[i].Name == args[2]){
                pos = parseInt(i);
                username = daily[i].Name;
            }
        }
        const DailyMemberData = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(username+'\'s Data From Today')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=789678039784357948&permissions=0&scope=bot')
        .addFields(
            { name: 'Total Games Played', value: daily[pos].Rounds},
            { name: 'Total Imposter Wins', value: daily[pos].ImposterWins},
            { name: 'Total Crewmate Wins', value: daily[pos].CrewmateWins},
            { name: 'Imposter Winrate', value: daily[pos].ImposterWinRatio+'%'},
            { name: 'Hide And Seek', value: 'Games played: '+daily[pos+parseInt(2)].Rounds+'\nImposter Wins: '+daily[pos+parseInt(2)].ImposterWins+'\nImposter Losses: '+daily[pos+parseInt(2)].ImposterLosses+
            '\nImposter Winrate: '+daily[pos+parseInt(2)].ImposterWinRatio+'%\n Crewmate Wins: '+daily[pos+parseInt(2)].CrewmateWins+'\nCrewmate Losses: '+daily[pos+parseInt(2)].CrewmateLosses+
            '\nCrewmate Winrate: '+daily[pos+parseInt(2)].CrewmateWinRatio+'%', inline: true},
            { name: 'Normal Games', value: 'Games played: '+daily[pos+parseInt(1)].Rounds+'\nImposter Wins: '+daily[pos+parseInt(1)].ImposterWins+'\nImposter Losses: '+daily[pos+parseInt(1)].ImposterLosses+
            '\nImposter Winrate: '+daily[pos+parseInt(1)].ImposterWinRatio+'%\n Crewmate Wins: '+daily[pos+parseInt(1)].CrewmateWins+'\nCrewmate Losses: '+daily[pos+parseInt(1)].CrewmateLosses+
            '\nCrewmate Winrate: '+daily[pos+parseInt(1)].CrewmateWinRatio+'%', inline: true}
        )
        .setTimestamp()
        return message.channel.send(DailyMemberData);
    }
    
}