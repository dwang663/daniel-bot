module.exports = async function(GoogleSpreadsheet) { 
    doc = new GoogleSpreadsheet('SECRET KEY');
    await doc.useServiceAccountAuth(require('./google-sheets-node/client_secret.json'));
    await doc.loadInfo();
    general = doc.sheetsByTitle['General'];
    inventory = doc.sheetsByTitle['Inventory'];

    AmongUsLogs = doc.sheetsByTitle['AmongUsLogs'];
    AmongUsData = doc.sheetsByTitle['AmongUsData'];
    AmongUsDataDaily = doc.sheetsByTitle['AmongUsDataDaily'];
    AmongUsLobby = doc.sheetsByTitle['AmongUsLobby'];

    generalRows = await general.getRows();
    inventoryRows = await inventory.getRows();

    AmongUsLogsRows = await AmongUsLogs.getRows();
    AmongUsDataRows = await AmongUsData.getRows();
    AmongUsDataDailyRows = await AmongUsDataDaily.getRows();
    AmongUsLobbyRows = await AmongUsLobby.getRows();

    ping = new require('./commands/ping.js');
    aulog = new require('./commands/amonguslog.js');
    CalcRatios = new require('./commands/calcratios.js');
    upload = new require('./commands/upload.js');
    setplayers = new require('./commands/setplayers.js');
    whois = new require('./commands/whois.js');
    data = new require('./commands/amongusdata.js');
    buy = new require('./commands/buy.js');
    shop = new require('./commands/shop.js');
    setbal = new require('./commands/setbal.js');
    setbank = new require('./commands/setbank.js');
    daily = new require('./commands/daily.js');
    bal = new require('./commands/balance.js');
    dep = new require('./commands/deposit.js');
    withdraw = new require('./commands/withdraw.js');
    help = new require('./commands/help.js');
    say = new require('./commands/say.js');
    dlt = new require('./commands/delete.js');
    role = new require('./commands/role.js');
    ban = new require('./commands/ban.js');
    kick = new require('./commands/kick.js');
    rr = new require('./commands/removerole.js');
    meme = new require('./commands/meme.js');
    eightball = new require('./commands/8ball.js');
    fishcommand = new require('./commands/fish.js');
    inv = new require('./commands/inv.js');
    youtube = new require('./commands/youtube.js');
    sell = new require('./commands/sell.js');
    rob = new require('./commands/rob.js');
    getdadjokecounter = new require('./commands/getdadjokecounter.js');
    printfish = new require('./commands/printfish.js');
    leaderboard = new require('./commands/leaderboard.js');
    stats = new require('./commands/stats.js');
    findmedian = new require('./commands/findmedian.js');
    
    class object {
        constructor(name, buyPrice, sellPrice) {
            this.name = name;
            this.buyPrice = buyPrice;
            this.sellPrice = sellPrice;
        }
    }
    class fish {
        constructor(name, sellPrice, sellMessage) {
            this.name = name;
            this.sellPrice = sellPrice;
            this.sellMessage = sellMessage;
        }
    }
    fishlist = new Array(14);
    fishlist[0] = new fish('Common Fish','150','You got a... Common Fish!');
    fishlist[1] = new fish('Rare Fish','200','Nice! It\'s a Rare Fish!');
    fishlist[2] = new fish('Clown Fish','300','Wow... It\'s a Clown Fish... and it looks just like you!');
    fishlist[3] = new fish('Angel Fish','350','Holy Fish! You got an Angel Fish!');
    fishlist[4] = new fish('Fongray','600','Fongtastic! It\'s a Fongray! Look how cute they are!');
    fishlist[5] = new fish('Daniel Fish','1000','What the heck man, put me back in the water >:(');
    fishlist[6] = new fish('Kraken','1500','HOLY KRAP YOU JUST FISHED A KRAKEN!');
    fishlist[7] = new fish('Pirate Ship','2000','WHAT THE HECK!?!? YOU GOT... A PIRATE SHIP!?!?!?');
    fishlist[8] = new fish('Finposter','0','the Finposter killed you');
    fishlist[9] = new fish('Daniel Medal','10000','YOU GOT THE LEGENDARY DANIEL MEDAL!!!!!!!!!!!!');
    fishlist[10] = new fish('Block Of Cheese','50','You got... a Block Of Cheese? Where did that even come from...?');
    fishlist[11] = new fish('Joe Mama','500','Look, it\'s Joe Mama! How did you manage to pull something so large!?!?');
    fishlist[12] = new fish('Angry Karen','450','Get your manager on speed dial because you just pulled an Angry Karen!');
    fishlist[13] = new fish('Patrick Star','500','Wow... You managed to fish so deep you pulled out Patrick!');
    objectlist = new Array(2);
    objectlist[0] = new object('Fishing Rod','2500','500');
    objectlist[1] = new object('Computer','5000','1500');

    return;
};