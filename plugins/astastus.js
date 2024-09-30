const { Sparky , isPublic } = require("../lib/plugins.js");
/*Sparky({name: "status_sender",fromMe: true,desc: "Restart the bot",category: "sudo",},async ({m,args,client}) => {})*/


Sparky({
    on: "text"
},
    async({
        m, client, args
    })=> {
        if (m.isGroup || !m.quoted) return;
        let text = ["Sent","Send","giv","Giv","Gib","Upload","send","sent","znt","Znt","snt","Snd","Snt","sd","gev","geb","Sd","Gev","ayakk"]
        for (any in text)
            if (args.toLowerCase().startsWith(text[any]))
            return await m.forward(m.jid, m.quoted.message)
    })
