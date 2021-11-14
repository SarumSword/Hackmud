function(context, args){//ch:"0000",msg:"I love colors!"}
	var caller = context.caller;
	var l = #fs.scripts.lib();

	//const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    //caps.concat(caps.map(letter => letter.toLowerCase()));
    //var hx = caps.concat(Array.from(Array(10).keys()))
	//instead of the above, just do below.  Numbers and lower case are repeats.
	//remove Z which is black.
	var hx = 'ABCDEFGHIJKLMNOPQRSTUVWXY'

    if(!args || typeof args!="object")args={ch: "0000",msg: "I love colors!"} // maybe toss in || Array.isArray(args) if you want
    if(typeof args.ch!="string"|| args.ch=="")args.ch='0000'
    if(typeof args.msg!='string' || args.msg=="")args.msg='I love colors!'
	if(!args.shark || typeof args.shark!=Boolean)args.shark=false

	function shark(noun){
        var out = []
        for (var i in noun){
            out.push((noun[i]+" shark"+" doo".repeat(6)+"\n").repeat(3)+noun[i]+" shark!\n")
        }
        return out.join("")
    }

    function rnbow(args,hx) {
        var offset=0;
		//The next line searches for programs, locs, and similar objects to not color them
		//This is because they will be auto colored by the chat system later.
		//the if block of this line is part of the mapping function required.
        var o=(args.msg+'').match(/@[a-z_][a-z_0-9]{0,24}|[a-z_][a-z_0-9]{0,24}\.[a-z_][a-z_0-9]{0,24}|`.*?`|.|\n/g).map((ch,i)=>{
          if(ch.length>1 || ch=='\n' || ch=='`' || ch==':'){
             offset++;
             return ch;
          }
          return `\`${hx[(i-offset)%hx.length]}${ch}\``
		}).join('');
		
		//Finally the actual function runs the chat function and returns its result.
        return hm({c:args.ch,msg:o})
    }

	////Rainbow all characters, no filter.
	// function rnbow(args, hx){
	// 	var m = args.msg//.split("")
	// 	var j = 0
	// 	var o = ""
	// 	for(var i in m){
	// 		o=o+`\`${hx[j]}${m[i]}\``;
	// 		if(j >= hx.length-1){
	// 			j=0
	// 		}else{
	// 			j=j+1
	// 		}
	// 	}
	// 	return hm({c:args.ch, msg:o})
	// }

	function hm(myargs){
		return #fs.chats.send(myargs)
	}

	rnbow(args, hx)
	
	if(args.shark==true){
		var make = shark(["Baby", "Daddy"])
		rnbow({ch:args.ch,msg:make},hx)
		make = shark(["Mommy", "Grandpa"])
		rnbow({ch:args.ch,msg:make},hx)
		make = shark(["Grandma"])
		rnbow({ch:args.ch,msg:make},hx)
	}

	hm({c:args.ch,msg:"`TChat is more interesting with saruum.rainbow!`"})

	return {ok:true}
}
