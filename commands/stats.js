module.exports = async function(findmedian, message, args) {  
    let mean = 0;
    let median, q1, q3, iqr, range;
    let data = new Array(args.length-1);
    let standard_deviation = 0;

    //sort data
    for(let i = 1; i < args.length; i++){data[i-1] = Number(args[i]);}
    data.sort(function(a, b) {return a - b;});

    //mean
    for(let j = 0; j < data.length; j++){mean += data[j]}
    mean /= data.length;

    //median
    median = await findmedian(0, data.length-1, data);

    //q1
    q1 = await findmedian(0, Math.floor((data.length-1)/2) - data.length%2, data);

    //q3
    q3 = await findmedian(Math.floor((data.length-1)/2) + 1, data.length-1, data);

    //range
    range = data[data.length-1]-data[0];
    
    //iqr
    iqr = q3-q1;

    //standard deviation
    for(let i = 0; i < data.length; i++){standard_deviation += (data[i]-mean)**2;}
    standard_deviation /= (data.length-1);
    standard_deviation = Math.sqrt(standard_deviation);

    //sorted data
    let sorteddata = "";
    for(let i = 0; i < data.length; i++){sorteddata += (data[i]+" ");}

    //output
    let results = "";
    results += ("Sorted Data: "+sorteddata+"\n"+"Mean = "+mean.toFixed(3)+"\n"+"Median = "+median+"\n"+"Range = "+range.toFixed(3)+"\n"+"IQR = "+iqr.toFixed(3)+"\n"+"Standard Deviation: "+standard_deviation.toFixed(3)+"\n"+
    "5 Number Summary: "+data[0]+" "+q1+" "+median.toFixed(3)+" "+q3+" "+data[data.length-1]);
    return message.channel.send(results);
}