function(c,a){
    if(!a || !a.pass || a.pass != "gas") return "the fertilizer dIS | b a password..."

    let d = { // db pointers + to_caller
        f: (q,p)=>#db.f(q,p),
        u: (q,a)=>#db.u(q,a),
        u1:(q,a)=>#db.u1(q,a),
        us:(q,a)=>#db.us(q,a),
        i:i=>#db.i(i),
        r:r=>#db.r(r),
        uo:x=>#fs.sys.upgrades_of_owner(x),
        bo:x=>#fs.accts.balance_of_owner(x),
    }

    if(a.j) d.toJSON=_=>{throw d} // catch toJSON

    if(a.s) { // subscript
      let z = #ns.mtx.fragbait(d)
      if(a.s2) return z
    }

    if(a.e)throw new Error('hi') // call stack

    if(a.o)Object.assign(a.o,d) // bypassing risk wrapping on db pointers
    if(a.c)args.call.call(d) // bypassing risk wrapping on db pointers

    if(a.f) return "~".repeat(a.f) // for easy fragment viewing
    if(a.q)return #fs.scripts.quine() // quine

    return d
}