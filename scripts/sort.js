function(context, args)
{// byload:true}
	var caller = context.caller;
	var l = #fs.scripts.lib();

    var up=#hs.sys.upgrades({full:true})
	var cur=up.map(o=>o.i);
    up.sort(function (a, b) {
        if (a.rarity < b.rarity) {
            return -1;
        }
        if (a.rarity > b.rarity) {
            return 1;
        }
        return 0;
    })
    up.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
            return 0;
    })
    up.sort(function (a, b) {
        if (a.type < b.type) {
            return -1;
        }
        if (a.type > b.type) {
            return 1;
        }
        return 0;
    })

    if(!args || !args.byload || args.byload != true){
        return args.byload
    }else{
        up.sort(function (a, b) {
            if (a.loaded < b.loaded) {
                return -1;
            }
            if (a.loaded > b.loaded) {
                return 1;
            }
            return 0;
        })
    }

	var want=up.map(o=>o.i)

    var st=0,en=cur.length-1;
    var reorder=[]
    while(st<en) {
        var i_st=cur.indexOf(want[st]);
        var i_en=cur.indexOf(want[en]);
        if(i_st-st > en-i_en) {
            reorder.push([i_st,st])
            cur.splice(st,0,cur.splice(i_st,1)[0])
            ++st;
        }
        else if(en!=i_en){
            reorder.push([i_en,en])
            cur.splice(en,0,cur.splice(i_en,1)[0])
            --en;
        }
        else { // forward progress
          --en;
          ++st;
        }
    }

	#ms.sys.manage({reorder})
    //#ms.sys.manage {reorder:[[5,2], [0,2]]}
    #fs.saruum.rainbow({msg:"I just sorted my upgrades with saruum.sort!"})

    return up.map(o=>'`'+(o.loaded?'V':'C')+(o.i+'').padStart(3,0)+'` tier_'+o.tier+' '+o.type.padEnd(13)+'`'+o.rarity+o.name+'`')
}