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


global.devs = "994404817231" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994404817231";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994404817231,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_55_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyRURGdE9DU0JjMUNvQVlNaUQ0Q3JSb243VmNUQlB4U29VRGFUTHFrL2N3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzMjkwNzkyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTdBQjA3M0E4MUEzMERDMEVDODg2QTMyQzVDMUE3QjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTEwOTI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjMyOTA3OTIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOEY0MEJFRjUyN0UzMEYwNUZFMTQwRkVEOTBFQjAyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMxMTA5MjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicFJGcG9yM0tRUldtUk5zdHN2U2JUZ1wiLFxuICBcInBob25lSWRcIjogXCJhZjQ5NjIzNy1kZGQwLTRhMzUtOTJhYy00Njg2Y2JhMTFjYTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICA3OCxcbiAgICAgIDI0MixcbiAgICAgIDg5LFxuICAgICAgODUsXG4gICAgICAzMixcbiAgICAgIDMxLFxuICAgICAgMjE4LFxuICAgICAgMTc4LFxuICAgICAgMjA0LFxuICAgICAgMTcyLFxuICAgICAgMTI0LFxuICAgICAgOSxcbiAgICAgIDIyOCxcbiAgICAgIDEyNCxcbiAgICAgIDE3MyxcbiAgICAgIDI0NyxcbiAgICAgIDIzOCxcbiAgICAgIDE2OSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDQsXG4gICAgICAyNTEsXG4gICAgICA3NSxcbiAgICAgIDIyNCxcbiAgICAgIDEyLFxuICAgICAgMjQsXG4gICAgICA4MyxcbiAgICAgIDIyMixcbiAgICAgIDIzNyxcbiAgICAgIDI0MSxcbiAgICAgIDE3NixcbiAgICAgIDAsXG4gICAgICA3NSxcbiAgICAgIDEwNyxcbiAgICAgIDIzOSxcbiAgICAgIDcyLFxuICAgICAgMTYyLFxuICAgICAgMzgsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlAyUjRXRFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzMjkwNzkyMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQzNzQxMjQ5MTMwNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BUNnRySUNFSVdzMHJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNE8vai8weC9lbFFQVjdRaCtKcWpPTU5ZYVorRUJta1FtZ0xlSFNZV2tqND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5S3liV3hWZlpmazdjK0NLQ3lGRGVaWFl3SDBDM1gvQXVQZUFuZ1pyaG1EL21JUE5OK3lTZVpIWHpHU0tzQVoxWGFJKzcyRXcyN09EZm8yZ3kvdlVEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWcXlIMDYzUmNKT3BWem9nNjNicWtUOVpZQ1ZkcUI5RHJUZVpMaE4rSnlOZFZMNkhlUzYwdHBEVFdyU0tveGxuNkpvYjBEL3BEUU0rMlhScXNOZG5Ddz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzI5MDc5MjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTEwOTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXhwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNeHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvNjZ0SittY0tYZEJ0QlAvbGUrWkpDTXJnU25CWG5Fcnd3Z3BvQWNlR2dJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0MjYyODk4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzMTEwOTI0OTA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝄟≛⃝🖤 𝑨𝒀𝑨𝑵 - 𝑿𝑫 ✨੍᭄͜͡°•",
  ownername:process.env.OWNER_NAME|| "𝄟≛⃝🖤𝑺𝑻𝐀𝑺𝑶 𝑳𝐀𝑳𝐀♥️✨੍᭄͜͡°•𓆩🖤𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝄟≛⃝🖤𝑺𝑻𝐀𝑺𝑶 𝑳𝐀𝑳𝐀♥️✨੍᭄͜͡°•𓆩🖤𓆪"  ).toUpperCase(),



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
