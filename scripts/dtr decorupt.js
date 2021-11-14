function(context, args)
{
    return Array(100).fill(_=>#hs.soylentbean.members({username:"catness",action:"order_qrs"}))
    /*decorrupt*/
        .map((o,i,a)=>i?(a[i-1].includes('@')?((a[i]=o().join('~').replace(/`.[¡¢Á¤Ã¦§¨©ª]`/g,'@'),a[i]=a[i-1]=a[i-1].replace(/@/g,(_,j)=>a[i][j]))):a[i]=a[i-1]):a[0]=o().join('~').replace(/`.[¡¢Á¤Ã¦§¨©ª]`/g,'@')).pop().split('~')
    /*for each qr*/
        .map(qr=>
            /*expand*/
            qr.split('\n').map((l,a,b,x=[],y=[],w=[x,y])=>(l.replace(/./g,(c=>(x.push({'█':1,'▀':1,'▄':0,' ':0}[c]),y.push({'█':1,'▀':0,'▄':1,' ':0}[c])))),w.map(o=>o.join('')))).flat().filter(o=>o).slice(0,-1)
        )
    /* formatting */
        .map(o=>o.join('\n')).join('\n\n')

}