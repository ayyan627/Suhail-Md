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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_05_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicm44L2pwQnREWlhNU1NKK2dzVXhIWWh4ZTZ0V1MyeHJhRU5YK3NjWXhRYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDM3NTM5MDI0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEIwRDBFRTM1RUNBODFFRDZFNjQxMDMyRjcwRDQzMjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTEzOTMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTQzNzUzOTAyNDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg0NUU1RDVBNkU0QTcyMzY2QjVEQTFBMzkwQkQ3NEVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUxMzkzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE0Mzc1MzkwMjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Qzg0QjVFRUMzOTcxOTNBMEFBNUVDQUM5MzNFMDA2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MTM5MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDM3NTM5MDI0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjM2MDE5RDQzMDkzMDNCRjMxMjMzNTJEQUE4QTZFMkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTEzOTM0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlicE5jZ2ZHUnVDM1dfTWRIY01iRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTRmMTY2MGYtM2Q2MS00ZWVhLTlmZjEtMGFhODFmZDAwMTlkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDYwLFxuICAgICAgMTQ1LFxuICAgICAgNTcsXG4gICAgICAxNzUsXG4gICAgICA2MCxcbiAgICAgIDIyMSxcbiAgICAgIDcsXG4gICAgICAxMyxcbiAgICAgIDEsXG4gICAgICAxNTksXG4gICAgICA4OSxcbiAgICAgIDEzLFxuICAgICAgNTEsXG4gICAgICAxOTQsXG4gICAgICAxODEsXG4gICAgICAxMDcsXG4gICAgICAxNDYsXG4gICAgICA4NSxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAyMjAsXG4gICAgICA1MixcbiAgICAgIDEyNCxcbiAgICAgIDIzMSxcbiAgICAgIDk2LFxuICAgICAgMjM5LFxuICAgICAgMjI2LFxuICAgICAgMTQ4LFxuICAgICAgNDQsXG4gICAgICA1MCxcbiAgICAgIDIyNSxcbiAgICAgIDEzMixcbiAgICAgIDEzMCxcbiAgICAgIDgzLFxuICAgICAgNzgsXG4gICAgICAxNTAsXG4gICAgICAxMjUsXG4gICAgICA3NSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCU0hKNzJLM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTQzNzUzOTAyNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NDAzODY3ODQwNjU2OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWERcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN3kyTDhDRUliMHJiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFpbkMwSVpoNVl4R25IMG04ZTFpcXBQdGY1UGx0d1ZMZmNkMGd4UkNMRjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWW5NcmFRdC9XSU1sZEtHRGlKOWRqYnBnUEZLUXhHc245NTVnOFN2dnc0OWxvZmxMaERFTlAyY1JRK2hhcWtFK1ZIUnF4NkhyREhjSGZxbzRqYVZtQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkVMdnp6bmczbUduVlJQNnVGcmRaL0lRMzBzaVdvNW9NU1JOU0JFZFhjc0hjYldueUJEMHNjR3FKRll6T0Z2aXpySmRBR2JMNjJtVlZQQnNTVzYyanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTQzNzUzOTAyNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUxMzkzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9MZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0xmLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUtJZ3lPb2U3TjBGVHJrTGpvanJUblVTTFNPYTRhTjlVZ3ZkZzMzVzM5QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzA0NDc5ODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUxMzkzMjM1MFwifSIKfQ=="  // PUT your SESSION_ID 


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
