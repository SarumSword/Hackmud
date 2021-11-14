function(context, args)
{
	var caller = context.caller;
	var l = #fs.scripts.lib();

    function shark(noun){
        var out = []
        for (var i in noun){
            out.push((noun[i]+" shark"+" doo".repeat(6)+"\n").repeat(3)+noun[i]+" shark!\n")
        }
        return out.join("")
    }
    #fs.saruum.rnbow_ch({msg:shark(["Baby", "Daddy"])})
    #fs.saruum.rnbow_ch({msg:shark(["Mommy", "Grandpa"])})
    #fs.saruum.rnbow_ch({msg:shark(["Grandma"])})
    
    //return out
    //return 
    return {ok:true}
}