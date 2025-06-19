module.exports = async function(message, Discord, prefix, args, Canvas, MessageAttachment) { 

    var jamesfolder = ['./Attachments/jamescharles/jc1.jpg','./Attachments/jamescharles/jc2.jpg','./Attachments/jamescharles/jc3.jpg','./Attachments/jamescharles/jc4.jpg','./Attachments/jamescharles/jc5.jpg',
    './Attachments/jamescharles/jc6.jpg','./Attachments/jamescharles/jc7.jpg','./Attachments/jamescharles/jc8.jpg','./Attachments/jamescharles/jc9.jpg','./Attachments/jamescharles/jc10.jpg','./Attachments/jamescharles/jc11.jpg',
    './Attachments/jamescharles/jc12.jpg','./Attachments/jamescharles/jc13.jpg','./Attachments/jamescharles/jc14.jpg','./Attachments/jamescharles/jc15.jpg','./Attachments/jamescharles/jc16.jpg','./Attachments/jamescharles/jc17.jpg',
    './Attachments/jamescharles/jc18.jpg','./Attachments/jamescharles/jc19.jpg','./Attachments/jamescharles/jc20.jpg','./Attachments/jamescharles/jc21.jpg','./Attachments/jamescharles/jc22.jpg','./Attachments/jamescharles/jc23.jpg',
    './Attachments/jamescharles/jc24.jpg','./Attachments/jamescharles/jc25.jpg','./Attachments/jamescharles/jc26.jpg','./Attachments/jamescharles/jc27.jpg','./Attachments/jamescharles/jc28.jpg','./Attachments/jamescharles/jc29.jpg',
    './Attachments/jamescharles/jc30.jpg','./Attachments/jamescharles/jc31.jpg','./Attachments/jamescharles/jc32.jpg','./Attachments/jamescharles/jc33.jpg','./Attachments/jamescharles/jc34.jpg','./Attachments/jamescharles/jc35.jpg'];
    const jc = new MessageAttachment(jamesfolder[Math.floor(Math.random()*35)]);
    if(!args[1]){return message.channel.send(jc); }

    const jccanvas = Canvas.createCanvas(500,500);
    const jcctx = jccanvas.getContext('2d');
    const jcbackground = await Canvas.loadImage(jamesfolder[Math.floor(Math.random()*35)]);
    jcctx.drawImage(jcbackground,0,0,jccanvas.width,jccanvas.height);
    jcctx.font = '35px sans-serif';
    jcctx.fillStyle = "black";
    let jcstring = message.content.substring(prefix.length + args[0].length);
    let jcargs = jcstring.split(",");

    let jcstr1 = jcargs[0]+" ";
    if(jcargs[0].length > 35){return message.channel.send('Please limit phrases to 30 characters');}

    jcctx.fillStyle = "white";
    jcctx.fillRect(jccanvas.width/2 - jcctx.measureText(jcstr1).width/2, 0, jcctx.measureText(jcstr1).width, 40);
    jcctx.fillStyle = "black";
    jcctx.fillText(jcstr1, jccanvas.width/2 - jcctx.measureText(jcstr1).width/2, 30);

    const jcmemetxt1 = new MessageAttachment(jccanvas.toBuffer(), 'jamescharlesmeme.png');
    if(!jcargs[1]){return message.channel.send(jcmemetxt1);}

    let jcstr2 = jcargs[1] + " ";
    if(jcstr2.length > 35) return message.channel.send('Please limit phrases to 30 characters');

    jcctx.fillStyle = "white";
    jcctx.fillRect(jccanvas.width/2 - jcctx.measureText(jcstr2).width/2, 460, jcctx.measureText(jcstr2).width, 40);
    jcctx.fillStyle = "black";
    jcctx.fillText(jcstr2, jccanvas.width/2 - jcctx.measureText(jcstr2).width/2, 490);
    const jcmemetxt2 = new MessageAttachment(jccanvas.toBuffer(), 'jamescharlesmeme.png');
    return message.channel.send(jcmemetxt2);
}