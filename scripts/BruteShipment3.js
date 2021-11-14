function(context, args)
{
	var caller = context.caller;

    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    //caps.concat(caps.map(letter => letter.toLowerCase()));
    var hx = caps.concat(Array.from(Array(10).keys()))
    var r = []
    var n
    var f = "NOPE SORRY DONT THINK A PACKAGE LIKE THAT IS HERE"
    var pb
    for (var k = 0; k<36; k++) {
        for(var j = 0; j<36; j++){
            for (var i = 0; i < 36; i++){
                n = "V"+hx[i]+"1"+hx[j]+hx[k]+"2S"
                pb = #ns.packbot_7257.interface({DO:"TRACK_A_PACKAGE",PACKAGE_ID:n})
                if(pb.length>65){
                    r.push(n)
                }
            }
        }
        
    }

    return r
}