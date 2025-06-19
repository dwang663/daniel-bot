const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const { GoogleSpreadsheet } = require('./google-sheets-node/node_modules_1/google-spreadsheet');
const Canvas = require('canvas');
const youtube = require('./commands/youtube');
const leaderboard = require('./commands/leaderboard');
const say = require('./commands/say');
const prefix = "d!";
let checkdadjoke = new require('./commands/checkdadjoke.js');
let testingmode = false;
let autodelete = false;
let createaccount = new require('./commands/createaccount.js');
let dadtriggers = ["I\'m ", "i\'m ", "I\'M ", "i\'M ", "Im ", "im ", "IM ", "iM ", "I AM ", "I am ", "i am ","I aM ", "I Am ", "i AM ", "i Am ", "i aM "];

client.on('ready', async () => {

    var loadvariables = new require('./loadvariables.js');
    await loadvariables(GoogleSpreadsheet);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("(d!help)");

});
client.on('message', async message => {
  if(message.author.bot) return;
  await checkdadjoke(message, prefix, dadtriggers, generalRows, general, inventory, createaccount); 
  
  if(!message.content.startsWith(prefix)) return;
  if(testingmode == true && message.author.id != '571143160831541258') return message.author.send('You cannot use Daniel-bot while testing mode is turned on');
  var args = message.content.substring(prefix.length).split(" ");
  if(message.channel.name == undefined){
    console.log("hello");
  }
  switch(args[0].toLowerCase()){
    case 'wah':
        const wah = client.emojis.cache.find(emoji => emoji.name === "wah");
        let wahamount = args[args.length-1];
        for(i = 0; i < wahamount; i++) message.mentions.users.first().send(wah.toString());
        return;
    case 'sayto':
        if(!args[1]) return message.channel.send('Please give me something to say');
        if(args[1] == '@everyone' || args[1] == '@here' || args[1] == '@:)') return;
        return message.mentions.users.first().send(message.content.slice(prefix.length+args[0].length));
    case 'listoffish':
    case 'fishlist':
    case 'lof':
        return printfish(message, Discord, fishlist);
    case 'leaderboard':
    case 'lb':
        return leaderboard(message, generalRows, args, prefix, Discord);
    case 'dadjokecounter':
    case 'djc':
        return getdadjokecounter(message, generalRows);
    case 'id':
        if(message.author.id != '571143160831541258') return message.channel.send('Only Daniel can do that');
        return message.channel.send(message.mentions.users.first().id);
    case 'testingmode':
    case 'testing':
        if(message.author.id != '571143160831541258') return;
        if(args[1] == 'on') testingmode = true;
        else testingmode = false;
        return message.react('👌');
    case 'rob':
        return rob(message, generalRows);
    case 'who':
        return whois(message, prefix);
    case 'sell':
        return sell(message, inventoryRows, generalRows, objectlist, fishlist, args);
    case 'of':
    case 'youtube':
    case 'yt':
        return youtube(message, inventoryRows, generalRows);
    case 'fish':
        return fishcommand(message, inventoryRows, generalRows, fishlist, MessageAttachment);
    case 'ping':
        return ping(message, args);
    case 'inv':
    case 'inventory':
        return inv(message, inventoryRows, inventory, objectlist, fishlist, Discord);
    case 'aulog':
    case 'aul':
    case 'amonguslog':
        if(!message.member.hasPermission('KICK_MEMBERS')){return message.channel.send('You do not have permission to use this command');}
        await aulog(message, AmongUsLogs, AmongUsDataDaily, args, AmongUsLobbyRows, CalcRatios);
        return AmongUsLogsRows = await AmongUsLogs.getRows();
    case 'audata':
    case 'aud':
    case 'amongusdata':
    case 'getdata':
        AmongUsLobbyRows = await AmongUsLobby.getRows();
        return data(message, AmongUsDataRows, AmongUsDataDailyRows, Discord, AmongUsLobbyRows, args);
    case 'setplayers':
    case 'setlobby':
    case 'lobby':
        setplayers(message, AmongUsDataRows, doc, args, AmongUsLobby, AmongUsLobbyRows, AmongUsDataDailyRows, upload, AmongUsDataDaily, AmongUsData, CalcRatios);
        return AmongUsLobbyRows = AmongUsLobby.getRows();
    case 'buy':
        return buy(message, inventoryRows, generalRows, objectlist, args);
    case 'shop':
        return shop(message, Discord, prefix);
    case 'setbal':
        return setbal(message, generalRows, args);
    case 'setbank':
        return setbank(message, generalRows, args);
    case 'daily':
        return daily(message, generalRows);
    case 'bal':
    case 'balance':
        return bal(message, generalRows);
    case 'dep':
    case 'deposit':
        return dep(message, generalRows);
    case 'with':
    case 'wd':
    case 'withdraw':
        return withdraw(message, generalRows, args);
    case 'createaccount':
        await createaccount(message, general, inventory, generalRows);
        generalRows = await general.getRows();
        inventoryRows = await inventory.getRows();
        return;
    case 'help':
        return help(message, Discord, prefix);
    case 'gn':
    case 'goodnight':
        return message.channel.send('Goodnight, '+message.author.toString());
    case 'ily':
    case 'iloveyou':
        return message.channel.send('I love you too, '+message.author.toString()+' <3');
    case 'hi':
        if(message.mentions.users.first()) return message.channel.send(message.author.toString()+' says hi to '+message.mentions.users.first().toString()+'!');
        return message.channel.send('Hello '+message.author.toString()+'!!!');
    case 'say':
        return say(message, args, prefix);
    case 'repeat':
        let repeatlength = args[args.length-1];
        args.pop();
        let newargs = args;
        for(let repeattimes = 0; repeattimes < repeatlength; repeattimes++){say(message, newargs, prefix);}
        return;
    case 'dl':
    case 'delete':
        return dlt(message, Discord, prefix, args);  
    case 'date':
        var currentDateAndTime = new Date().toLocaleString();
        return message.channel.send(currentDateAndTime);
    case 'role':
        return role(message, Discord, prefix, args);
    case 'ban':
        return ban(message, Discord, prefix, args);
    case 'kick':
        return kick(message, Discord, prefix, args);
    case 'rr':
    case 'removerole':
        return rr(message, Discord, prefix, args);
    case 'meme':
        return meme(message, Discord, prefix, args, Canvas, MessageAttachment);
    case '8ball':
        return eightball(message);
    case 'stats':
        return stats(findmedian, message, args);
    default:
        return message.channel.send('That isn\'t a command!!!');
  }
});
client.login('SECRET KEY');