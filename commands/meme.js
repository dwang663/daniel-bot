module.exports = async function(message, Discord, prefix, args, Canvas, MessageAttachment) { 
    const attachment = message.attachments.first();
    if (!attachment || !attachment.contentType.startsWith('image')) { return message.channel.send('Please attach an image to generate the meme.'); }
    const meme = new MessageAttachment(attachment);
    if(!args[1]){return message.channel.send(meme);} 
    const memecanvas = Canvas.createCanvas(500,500);
    const memectx = memecanvas.getContext('2d');
    const memebackground = await Canvas.loadImage(fpic);
    memectx.drawImage(memebackground,0,0,memecanvas.width,memecanvas.height);
    memectx.font = '35px sans-serif';
    memectx.fillStyle = "black";

    let memestring = message.content.substring(prefix.length + 4);
    let memeargs = memestring.split(",");

    let memestr1 = memeargs[0]+" ";
    memectx.fillStyle = "white";
    memectx.fillRect(memecanvas.width/2 - memectx.measureText(memestr1).width/2, 0, memectx.measureText(memestr1).width, 40);
    memectx.fillStyle = "black";
    memectx.fillText(memestr1, memecanvas.width/2 - memectx.measureText(memestr1).width/2, 30);

    if(memeargs[0].length > 35){return message.channel.send('Please limit phrases to 30 characters');}
    const memetxt1 = new MessageAttachment(memecanvas.toBuffer(), 'meme.png');
    if(!memeargs[1]){return message.channel.send(memetxt1);}

    let memestr2 = memeargs[1] + " ";
    memectx.fillStyle = "white";
    memectx.fillRect(memecanvas.width/2 - memectx.measureText(memestr2).width/2, 460, memectx.measureText(memestr2).width, 40);
    memectx.fillStyle = "black";
    memectx.fillText(memestr2, memecanvas.width/2 - memectx.measureText(memestr2).width/2, 490);
    if(memestr2.length > 35) return message.channel.send('Please limit phrases to 30 characters');
    const memetxt2 = new MessageAttachment(memecanvas.toBuffer(), 'meme.png');
    return message.channel.send(memetxt2);
}