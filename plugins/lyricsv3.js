const {
    Sparky,
    isPublic
} = require("../lib/plugins.js");


Sparky(
    {
        name: "lyrics",
        fromMe: isPublic,
        desc: "Converts an image to sticker",
        category: "converter",
    },
    async ({
        m, client, args
    }) => {
        if (!args)
            return await m.reply("_Enter a song name_");
let dl = await client.sendMessage(m.jid, {
            text: "_Downloading..._"
        }, {
            quoted: m
        })
try {
let sample = await fetch(`https://api-aswin-sparky.koyeb.app/api/search/lyrics?search=${args}`);
var data = await sample.json();
let lyrics = data.data
await m.adreply(`${lyrics}`)
} catch (e) {
client.sendMessage(m.jid, {
                text: `_Error_`, edit: dl.key
            })
}

});
