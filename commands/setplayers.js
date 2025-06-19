module.exports = async function(message, AmongUsDataRows, doc, args, AmongUsLobby, Lobby, daily, upload, dailysheet, datasheet, CalcRatios) {  
    
    if(!message.member.hasPermission('KICK_MEMBERS') && message.author.id != '571143160831541258'){return message.channel.send('You do not have permission to use this command');}
    await upload(message, AmongUsDataRows, daily, datasheet, dailysheet, Lobby, AmongUsLobby, CalcRatios);

    let i;
    let rows = [];
    AmongUsLobby = await doc.addSheet({ title: 'AmongUsLobby', headerValues: ['Players', 'Positions'] });
    for(i = 0; i < args.length; i++){
        for(j = 0; j < AmongUsDataRows.length; j++){
            if(AmongUsDataRows[j].Name == args[i]){
                rows.push({Players: args[i], Positions: j })
            }
        }
    }
    await AmongUsLobby.addRows(rows);
    return message.channel.send('Lobby Set!');
}