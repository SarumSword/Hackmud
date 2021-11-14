function(c,a){
 a = a || {};
 if (!a.msg) return 'give message';
 var s =(x,y)=>#fs.chats.send({c:x,msg:y});
 for (c of #ms.chats.channels()) #D(s(c,a.msg));
}