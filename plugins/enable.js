require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, isBotAdmins, isGroupAdmins, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'welcome' || command == 'приветствие') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].welcome = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].welcome = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antilink' || command == 'антиссылка') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].antilink = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].antilink = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antifake' || command == 'антифейк') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].antiFake = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
//m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antiarabe' || command == 'антиараб') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].antiArabe = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
//m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autodetect' || command == 'detect') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'аудио') {
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].audios = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].audios = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autosticker' || command == 'автостикер') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].autosticker = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].autosticker = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'modocaliente' || command == 'antinsfw') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'modoadmin' || command == 'soloadmin' || command == 'толькоадмины') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}\n\n${lenguaje.enable.text4}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}\n\n${lenguaje.enable.text5}`)}}

if (command == 'antiprivado' || command == 'антиличка') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].antiprivado = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].antiprivado = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'anticall' || command == 'антизвонок') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].anticall = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].anticall = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'modojadibot' || command == 'вгруппу') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autoread' || command == 'autovisto') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.settings[conn.user.jid].autoread = false
//conn.autoread = false
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.settings[conn.user.jid].autoread = true
//conn.autoread = true
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'antispam' || command == 'антиспам') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].antispam = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].antispam = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'chatbot' || command == 'чатбот') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} выкл*`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].simi = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].simi = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (command == 'autolevelup' || command == 'автоуровень') {
if (!m.isGroup) return m.reply(info.group)
if (!text) return m.reply(`${lenguaje.enable.text}\n\n*• ${prefix + command} вкл*\n*• ${prefix + command} *`)
if (args[0] === "вкл") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "выкл") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}}

module.exports = { enable }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})