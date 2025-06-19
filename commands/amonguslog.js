module.exports = async function(message, AmongUsLogs, DailySheet, args, Lobby, CalcRatios) {  
    await DailySheet.loadCells('A1:L70');
    let winner;
    let gamemode;
    let i;

    if(!args[4]) return message.channel.send('Please specify the following: Winner, Imposters, and GameMode');

    if(args[1] == 'imp' || args[1] == 'imposter' || args[1] == 'Imposter' || args[1] == 'Imp'){
        winner = 'Imposter';
    } else winner = 'Crewmate';

    if(args[4] == 'HideNSeek' || args[4] == 'HS' || args[4] == 'hs' || args[4] == 'hideandseek' || args[4] == 'HideAndSeek' || args[4] == 'hidenseek'){
        gamemode = 'HideAndSeek';
    } else gamemode = 'Normal';

    let mode;
    for(i = 0; i < Lobby.length; i++){
        
        Pos = parseInt(Lobby[i].Positions);

        if(    (Lobby[i].Players == args[2] || Lobby[i].Players == args[3])    && winner == 'Imposter'    && gamemode == 'HideAndSeek'   ){

            DailySheet.getCell(Pos+parseInt(1), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 4).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 4).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 4).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 4).value)+1;

        } else if(    (Lobby[i].Players == args[2] || Lobby[i].Players == args[3])    && winner == 'Imposter'    && gamemode == 'Normal'   ){

            DailySheet.getCell(Pos+parseInt(1), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 4).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 4).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 4).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 4).value)+1;

        } else if(   Lobby[i].Players != args[2]    && Lobby[i].Players != args[3]    && winner == 'Imposter'    && gamemode == 'HideAndSeek'   ){

            DailySheet.getCell(Pos+parseInt(1), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 5).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 5).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 5).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 5).value)+1;

        } else if(   Lobby[i].Players != args[2]    && Lobby[i].Players != args[3]    && winner == 'Imposter'    && gamemode == 'Normal'   ){

            DailySheet.getCell(Pos+parseInt(1), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 5).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 5).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 5).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 5).value)+1;

        } else if(   (Lobby[i].Players == args[2] || Lobby[i].Players == args[3])    && winner == 'Crewmate'    && gamemode == 'HideAndSeek'   ){

            DailySheet.getCell(Pos+parseInt(1), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 6).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 6).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 6).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 6).value)+1;

        } else if(   (Lobby[i].Players == args[2] || Lobby[i].Players == args[3])    && winner == 'Crewmate'    && gamemode == 'Normal'   ){

            DailySheet.getCell(Pos+parseInt(1), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 2).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 2).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 6).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 6).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 6).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 6).value)+1;

        } else if(   Lobby[i].Players != args[2]    && Lobby[i].Players != args[3]    && winner == 'Crewmate'    && gamemode == 'HideAndSeek'   ){

            DailySheet.getCell(Pos+parseInt(1), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 3).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 3).value)+1;
            DailySheet.getCell(Pos+parseInt(3), 3).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 3).value)+1;

        } else if(Lobby[i].Players != args[2] && Lobby[i].Players != args[3] && winner == 'Crewmate' && gamemode == 'Normal'){

            DailySheet.getCell(Pos+parseInt(1), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 1).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 1).value)+1;
            DailySheet.getCell(Pos+parseInt(1), 3).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 3).value)+1;
            DailySheet.getCell(Pos+parseInt(2), 3).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 3).value)+1;

        }

        DailySheet.getCell(Pos+parseInt(1), 11).value = parseInt(DailySheet.getCell(Pos+parseInt(1), 11).value)+1;
        if(gamemode == 'Normal') DailySheet.getCell(Pos+parseInt(2), 11).value = parseInt(DailySheet.getCell(Pos+parseInt(2), 11).value)+1;
        else DailySheet.getCell(Pos+parseInt(3), 11).value = parseInt(DailySheet.getCell(Pos+parseInt(3), 11).value)+1;
    }

    if(winner == 'Imposter'){
        DailySheet.getCell(1, 4).value = parseInt(DailySheet.getCell(1, 4).value)+1;
        if(gamemode == 'HideAndSeek'){
            DailySheet.getCell(3, 4).value = parseInt(DailySheet.getCell(3, 4).value)+1;
            DailySheet.getCell(3, 11).value = parseInt(DailySheet.getCell(3, 11).value) + 1;
        }
        else{
            DailySheet.getCell(2, 4).value = parseInt(DailySheet.getCell(2, 4).value)+1;
            DailySheet.getCell(2, 11).value = parseInt(DailySheet.getCell(2, 11).value) + 1;
        }
    }
    else{
        DailySheet.getCell(1, 3).value = parseInt(DailySheet.getCell(1, 3).value)+1;
        if(gamemode == 'HideAndSeek'){
            DailySheet.getCell(3, 3).value = parseInt(DailySheet.getCell(3, 3).value)+1;
            DailySheet.getCell(3, 11).value = parseInt(DailySheet.getCell(3, 11).value) + 1;
        }
        else{
            DailySheet.getCell(2, 3).value = parseInt(DailySheet.getCell(2, 3).value)+1;
            DailySheet.getCell(2, 11).value = parseInt(DailySheet.getCell(2, 11).value) + 1;
        }
    }

    DailySheet.getCell(1, 11).value = parseInt(DailySheet.getCell(1, 11).value) + 1;
    await DailySheet.saveUpdatedCells();
    CalcRatios(Lobby, DailySheet);
    var currentDateAndTime = new Date().toLocaleDateString()
    await AmongUsLogs.addRow({ Date: currentDateAndTime, Winner: winner, Imposter1: args[2], Imposter2: args[3], GameMode: gamemode, Players: Lobby.length});
    return message.channel.send('Game successfully recorded');
}