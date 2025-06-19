module.exports = async function(message, data, daily, dataSheet, dailySheet, Lobby, AmongUsLobby, CalcRatios) {  
    await dataSheet.loadCells('A1:L70');
    await dailySheet.loadCells('A1:L70');
    let i;
    let j;
    let pos;
    for(i = 0; i < Lobby.length; i++){
        for(j = 0; j < 3; j++){
            pos = parseInt(Lobby[i].Positions)+parseInt(j);
            cellpos = parseInt(pos)+parseInt(1);

            dataSheet.getCell(cellpos, 1).value = parseInt(dataSheet.getCell(cellpos, 1).value)+parseInt(dailySheet.getCell(cellpos, 1).value);
            dataSheet.getCell(cellpos, 2).value = parseInt(dataSheet.getCell(cellpos, 2).value)+parseInt(dailySheet.getCell(cellpos, 2).value);
            dataSheet.getCell(cellpos, 3).value = parseInt(dataSheet.getCell(cellpos, 3).value)+parseInt(dailySheet.getCell(cellpos, 3).value);
            dataSheet.getCell(cellpos, 4).value = parseInt(dataSheet.getCell(cellpos, 4).value)+parseInt(dailySheet.getCell(cellpos, 4).value);
            dataSheet.getCell(cellpos, 5).value = parseInt(dataSheet.getCell(cellpos, 5).value)+parseInt(dailySheet.getCell(cellpos, 5).value);
            dataSheet.getCell(cellpos, 6).value = parseInt(dataSheet.getCell(cellpos, 6).value)+parseInt(dailySheet.getCell(cellpos, 6).value);
            dataSheet.getCell(cellpos, 11).value = parseInt(dataSheet.getCell(cellpos, 11).value)+parseInt(dailySheet.getCell(cellpos, 11).value);

            dailySheet.getCell(cellpos, 1).value = 0;
            dailySheet.getCell(cellpos, 2).value = 0;
            dailySheet.getCell(cellpos, 3).value = 0;
            dailySheet.getCell(cellpos, 4).value = 0;
            dailySheet.getCell(cellpos, 5).value = 0;
            dailySheet.getCell(cellpos, 6).value = 0;
            dailySheet.getCell(cellpos, 7).value = 'N/A';
            dailySheet.getCell(cellpos, 8).value = 'N/A';
            dailySheet.getCell(cellpos, 9).value = 'N/A';
            dailySheet.getCell(cellpos, 10).value = 'N/A';
            dailySheet.getCell(cellpos, 11).value = 0;   
        }
    }
    for(pos = 0; pos < 3; pos++){
        cellpos = parseInt(pos)+parseInt(1);

        dataSheet.getCell(cellpos, 3).value = parseInt(dataSheet.getCell(cellpos, 3).value)+parseInt(dailySheet.getCell(cellpos, 3).value);
        dataSheet.getCell(cellpos, 4).value = parseInt(dataSheet.getCell(cellpos, 4).value)+parseInt(dailySheet.getCell(cellpos, 4).value);
        dataSheet.getCell(cellpos, 5).value = parseInt(dataSheet.getCell(cellpos, 5).value)+parseInt(dailySheet.getCell(cellpos, 5).value);
        dataSheet.getCell(cellpos, 6).value = parseInt(dataSheet.getCell(cellpos, 6).value)+parseInt(dailySheet.getCell(cellpos, 6).value);
        dataSheet.getCell(cellpos, 11).value = parseInt(dataSheet.getCell(cellpos, 11).value)+parseInt(dailySheet.getCell(cellpos, 11).value);

        dailySheet.getCell(cellpos, 3).value = 0;
        dailySheet.getCell(cellpos, 4).value = 0;
        dailySheet.getCell(cellpos, 5).value = 0;
        dailySheet.getCell(cellpos, 6).value = 0;
        dailySheet.getCell(cellpos, 9).value = 'N/A';
        dailySheet.getCell(cellpos, 10).value = 'N/A';
        dailySheet.getCell(cellpos, 11).value = 0;

    }

    await dailySheet.saveUpdatedCells();
    await dataSheet.saveUpdatedCells();
    await CalcRatios(Lobby, dataSheet);
    await dataSheet.saveUpdatedCells();
    await AmongUsLobby.delete();
    message.react('👍')
    return message.channel.send('Data uploaded to database');
}