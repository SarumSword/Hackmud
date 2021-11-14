function(context,args) {
    var d=#db.f({_id:"brute_script"}).first();
    if(!d) {
        #db.i({_id:"brute_script",start:0,found:[]})
        return {ok:true,msg:"Created brute entry; "+Math.pow(36,2)+" guesses remain"};
    }
    var tried=[]
    var matches=[];
    while(Date.now() - _START < 4250) {
        // assume that the name is PREFIXNAME_xx_xx where the x's cannot be _
        var a=[];
        for(;a.length<50;d.start++) {
            var s=d.start.toString(36).padStart(2,'0');
            a.push('BK'+s.slice(0,1)+'02'+s.slice(1)+'D')
        }
        tried.push(...a);
        var ls=#fs.packbot_7257.interface({DO:"TRACK_A_PACKAGE",PACKAGE_ID:a});
        ls.forEach((la,i)=>{if(la)matches.push(a[i])})
    }
    #db.us({_id:"brute_script"},{$set:{start:d.start},$addToSet:{found:{$each:matches}}});
    return {
        ok:true,
        did:tried.length,
        new_finds:matches,
        old_finds:d.found,
        remain:Math.pow(36,2)-d.start,
        last_tried:tried.pop()
    }
}