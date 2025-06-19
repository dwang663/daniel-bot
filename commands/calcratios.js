module.exports = async function(lobby, daily) {  
    await daily.loadCells('A1:L70');
    let i, j;
    let pos;
    let rounds;
    for(i = 0; i < lobby.length; i++){
        for(j = 1; j < 4; j++){
            pos = parseInt(lobby[i].Positions)+parseInt(j);
            rounds = parseInt(daily.getCell(pos, 11).value);
            crewtime = parseInt(daily.getCell(pos, 1).value);
            imptime = parseInt(daily.getCell(pos, 2).value);
            crewwin = parseInt(daily.getCell(pos, 3).value);
            impwin = parseInt(daily.getCell(pos, 4).value);

            if(rounds == 0){
                daily.getCell(pos, 7).value = 'N/A';
                daily.getCell(pos, 8).value = 'N/A';
            } else{
                daily.getCell(pos, 7).value = Math.floor(100*crewtime/rounds);
                daily.getCell(pos, 8).value = Math.floor(100*imptime/rounds);
            }
            if(crewtime == 0){
                daily.getCell(pos, 9).value = 'N/A';
            } else{
                daily.getCell(pos, 9).value = Math.floor(100*crewwin/crewtime);
            }
            if(imptime == 0){
                daily.getCell(pos, 10).value = 'N/A';
            } else{
                daily.getCell(pos, 10).value = Math.floor(100*impwin/imptime);
            }
        }
    }
    for( j = 1; j < 4; j++){
        pos = parseInt(j);
        rounds = parseInt(daily.getCell(pos, 11).value);
        crewwin = parseInt(daily.getCell(pos, 3).value);
        impwin = parseInt(daily.getCell(pos, 4).value);
        if(rounds == 0){
            daily.getCell(pos, 9).value = 'N/A';
            daily.getCell(pos, 10).value = 'N/A';
        } else{
            daily.getCell(pos, 9).value = Math.floor(100*crewwin/rounds);
            daily.getCell(pos, 10).value = Math.floor(100*impwin/rounds);
        }
    }
    await daily.saveUpdatedCells();
    return;
}