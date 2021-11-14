function(
	c, // Context
	a  // Args
	)
	{
		// Just to keep the function out of global ns
		let U = {}
		// Call it whatever, save a character since it won't take params
		U.print_docs = _ =>
		{
			// This is the regex that checks the script and returns all instances of double-slash prefixed (to save char_count)
			// The JS regex.exec function only works on the first match, so to capture multiple matches it needs to be called in a loop
			let s = #fs.scripts.quine(),o = ``,m,r = /\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*(?:\/)/gim;
			while ((m = r.exec(s))) o += `\n\n${m[0]}`;
			return o.replace(/\/(?:\/)/g, '')
		}
		// Example documentation, color it how you want, use what @ includes you want, just keep the double slash start structure
		
		///**
		// * `1@function`                      function.name
		// * `1@description`                   `cDESCRIPTION`
		// * `1@param PARAM_NAME {PARAM_TYPE}` `cPARAM_1`
		// * `1@return {string}`               `cRETURN`
		// * `1@example`
		// *
		// *     function.name{ex:1}
		// *     function.name{ex:2}
		// */
	
		///**
		// * I hate standardized stuff like JS docs, I'd prefer to write my own docs cause I'm hyp lyke thyt
		// */
		
		// Example of just returning docs, but ideally this would be called with a usage, help, paramless, etc flag
		return U.print_docs();
	}