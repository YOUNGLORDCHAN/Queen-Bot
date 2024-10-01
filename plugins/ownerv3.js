const { Sparky, 
isPublic 
      } = require("../lib/plugins.js");
const {
    BOT_NAME
      } = require("../config.js");
//Edit Here 👍🏻
const name = "Giddy Tennor";
let number = "254104245659";
const image = "https://i.ibb.co/8rxJbFc/f4599ee35b01.jpg";
const title = "✪⏤͟͞★⃝ꪶ ѕᴩ⃪ᴀʀ⃪ⲕʏ𖥘✪͜͡➺";
const body = "ʜy ᴠʀᴏ 😃❤️";
const url = "https://wa.me/254104245659";
//----------------
// No edit needed 👍🏻
//-----------------
Sparky({name: "owner",category: "misc",fromMe: isPublic,desc: "checks owner of bot"},async ({client, m, args}) => {
const sparky = {'contacts': {'displayName': name,'contacts': [{'vcard': `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG:${BOT_NAME};\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`}]},'contextInfo': {'externalAdReply': {'title':title,'body':body,'thumbnailUrl':image,'mediaType': 0x1,'mediaUrl':url,'sourceUrl':url,'showAdAttribution': true}}};
let sperky = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": "QUEEN BOT MD V1","vcard": `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
client.sendMessage(m.jid,sparky,{quoted:sperky});});
