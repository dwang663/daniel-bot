module.exports = async function(min, max, data) {  
    return (data[Math.floor((min+max)/2)]+data[Math.ceil((min+max)/2)])/2;
}