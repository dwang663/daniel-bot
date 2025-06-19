module.exports = async function(message) { 
    var eball = ["Absolutely!","No way in hell","Time will tell","Maybe.......","No way!","Yep!","I sure hope not","Definitely","For sure",
    "Definitely not...","Theres a good chance","Unlikely","lmao","YES","NOPE","Fat chance","Oh hell naw","Sorry... but nope",
    "Ill tell you for 10 bucks","Go find out yourself","Certainly","Very likely!"];
    return message.channel.send(eball[Math.floor(Math.random()*21)]);
}