function(context, args)
{
	var caller = context.caller;
	var l = #fs.scripts.lib()

	function hm(myargs){
		var out = #fs.accts.balance(myargs)
		return "your balance is "+ out
	}
	  return hm({})
}
