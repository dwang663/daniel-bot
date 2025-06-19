module.exports = async function(message) {  
    let girlcomments = ['Omg cutie','Wow 🤩','Omg you are such a cutie!!!','I could never','Say it louder queen!','Omg im in love','OMG YOURE SO CUTE','😍😍😍',
    'CUTEEE','OMG MODEL','imysm 🥺','so prettyyyy 😍','queen!','slayyy','🤩🤩🤩','so prettyyy','😍😍😍😍😍😍😍😍😍😍😍😍','🤩🤩🤩🤩🤩🤩🤩🤩🤩','omg you\'re literally such a beauty queen',
    'I\'m in love 😍','I\'m in heaven 😍','MODEL','How are you this pretty!!!',
    'Kill the pig. Cut her throat. Spill her blood. Kill the pig. Cut her throat. Spill her blood. Kill the pig. Cut her throat. Spill her blood'];
    let personToPing = message.author;
    if(message.mentions.users.first()) personToPing = message.mentions.users.first();
    return message.channel.send(personToPing.toString()+' '+girlcomments[Math.floor(Math.random() * girlcomments.length)]);

}