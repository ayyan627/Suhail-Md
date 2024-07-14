const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCCUQoJ93wLxSIftN0H";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCCUQoJ93wLxSIftN0H" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "93786876973" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "93648743964";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_48_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlaY0Npa0dDWFBHZjBzVjJKb0Q4LzBMQkZwaUhjcmovWmFkZk9QU1NYWFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFqVkhJUXV3U1Qtc01USTdaZzl1UWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDE3YmIxNTgtMDgwZi00N2EyLTljMGYtYmE1MWE0ZDJkYjdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMzEsXG4gICAgICAxNjMsXG4gICAgICAyMTgsXG4gICAgICAxOTQsXG4gICAgICAyMzYsXG4gICAgICA0LFxuICAgICAgMTIzLFxuICAgICAgMTQ0LFxuICAgICAgMTksXG4gICAgICAxNjIsXG4gICAgICA4NSxcbiAgICAgIDE5LFxuICAgICAgMTE1LFxuICAgICAgMTUsXG4gICAgICAyNDcsXG4gICAgICAxOCxcbiAgICAgIDIzNyxcbiAgICAgIDI0NSxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDk1LFxuICAgICAgNzgsXG4gICAgICA3MixcbiAgICAgIDE0MSxcbiAgICAgIDc5LFxuICAgICAgMjAzLFxuICAgICAgMTg3LFxuICAgICAgNTMsXG4gICAgICAxNjUsXG4gICAgICAxNjksXG4gICAgICAxOSxcbiAgICAgIDIzMyxcbiAgICAgIDE3NyxcbiAgICAgIDE0OCxcbiAgICAgIDE1MyxcbiAgICAgIDIzLFxuICAgICAgMjQ3LFxuICAgICAgMTgyLFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1oxU01QNlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE0Mzc3MDIwOTE3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgwNTEzOTc3MDY1NjExOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUg5Z1JvUXQ0WE90QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4U0pLUTVxdDBmNi9CVkdFYW1vbGgzTmNqS0dNZktkdDNwaHJ0SkhUemg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFoYnZwWE9ZU0lFZEtzYXlpTkN6NCtibHV2MXpqZ1FwUHlOalU5QkRDWFA3Sk1mOG1hZ051SlJ2dlBhR0JibDFJT3ZMemp6ZWJsNDhZZWM3ZnFUREN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndiTTA5UzloRk9mR21QeGxsTGtHVXhqZVIwRVp6Y0hVcWp6eHllcWVSajdoWkpLbHZSZEVFdXBCTWRONFVVUWNkS2dEekNrQjBoNlcvTVduN2hvbERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0Mzc3MDIwOTE3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NDMyOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNN2FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU03YS5qc29uIjogIntcImtleURhdGFcIjpcInRtZWFrT0xMS0JVNk40YTdlbXRhYWlsUXNiV2Y3aDgvZ0hsbDA0bVJ3L009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTQ1NTgzMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk0MzI5MzcyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BROKEN HEART",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "BROKEN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
