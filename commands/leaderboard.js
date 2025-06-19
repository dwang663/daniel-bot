module.exports = async function(message, generalRows, args, prefix, Discord) {  
    let sortBy = message.content.substring(prefix.length+args[0].length+1);

    let howToSort;

    function networthcompare(a, b){
        let networthcomparison = 0;
        if(a.NetWorth < b.NetWorth) networthcomparison = 1;
        else if(b.NetWorth < a.NetWorth) networthcomparison = -1;
        return networthcomparison;
    }
    function dadjokecompare(a, b){
        let dadjokecomparison = 0;
        if(a.DadJokeCounter < b.DadJokeCounter) dadjokecomparison = 1;
        else if(b.DadJokeCounter < a.DadJokeCounter) dadjokecomparison = -1;
        return dadjokecomparison;
    }


    class person {
        constructor(ID, Username, NetWorth, DadJokeCounter) {
            this.ID = ID;
            this.Username = Username;
            this.NetWorth = NetWorth;
            this.DadJokeCounter = DadJokeCounter;
        }
    }


    people = new Array(generalRows.length);
    for(i = 0; i < generalRows.length; i++){
        let newPerson = new person(generalRows[i].ID, generalRows[i].Username, parseInt(generalRows[i].balance)+parseInt(generalRows[i].bank), parseInt(generalRows[i].DadJokeCounter));
        people.push(newPerson);
    } 
    if(!sortBy){
        howToSort = 'Net Worth';
    }
    else{
        switch(sortBy.toLowerCase()){
            case 'dad joke':
            case 'dadjoke':
            case 'dj':
            case 'dadjokecounter':
            case 'djc':
            case 'dad joke counter':
            case 'dad':
                howToSort = 'Dad Joke Counter';
                break;
            case 'networth':
            case 'nw':
            case 'money':
            case 'net worth':
                howToSort = 'Net Worth';
                break;
            default:
                return message.channel.send('"'+sortBy+'"'+' is not a valid leaderboard option');
        }
    }

    if(howToSort == 'Net Worth') people.sort(networthcompare);
    else if(howToSort == 'Dad Joke Counter') people.sort(dadjokecompare);
    let fields = [];
    if(howToSort == 'Net Worth'){
        for(i = 0; i < Math.min(5, people.length); i++){
            fields.push({ name: people[i].Username, value: people[i].NetWorth});
        }
    }
    else{
        for(i = 0; i < Math.min(5, people.length); i++){
            fields.push({ name: people[i].Username, value: people[i].DadJokeCounter});
        }
    }
    let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Top '+Math.min(5, people.length)+' Members Sorted By '+howToSort)
        .addFields(fields);
    embed.setTimestamp(Date.now());
    message.channel.send(embed);
    return;
}