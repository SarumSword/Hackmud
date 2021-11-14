function(context, args)
{
	var caller = context.caller;
	var l = #fs.scripts.lib()

	function myFun(){
		return Math.floor(Math.random() * 3)
	}

	function hm(myargs){
		return #fs.dtr.haunty_mall(myargs)
	}
	  
	  var dr = myFun()

	  return hm({door:dr, choice:"switch"})
}
