module.exports = async function(message, prefix) {  
    let members = ['Daniel','Amy','Luke X.','Luke L.','Shyon','Max','Brian','Steven','Nina','Mia','Jerry','Jeffrey','Hank'];
    let phrase = message.content.substring(prefix.length+3);
    return message.channel.send(members[Math.floor(Math.random()*members.length)]+phrase);
}