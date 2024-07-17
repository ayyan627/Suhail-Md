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


global.devs = "988888888" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "967677788";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_41_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxT1h1Q1dQb1EvZWRKMjd6UGFPdTZBTFNlUU1JNWFvSU0xVHh2Y0xWL3ZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsZmVpSDZZcFQ1R0lBcWN4T25SNGF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzMWRjYzE5LWQ4YjUtNDVlMi1hMmM2LTQyODFkN2U3YzMzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICA5NyxcbiAgICAgIDE4OSxcbiAgICAgIDE5NyxcbiAgICAgIDIyMixcbiAgICAgIDE5MSxcbiAgICAgIDEwMixcbiAgICAgIDE0NSxcbiAgICAgIDE5OCxcbiAgICAgIDE5NyxcbiAgICAgIDIzNSxcbiAgICAgIDE4OCxcbiAgICAgIDQzLFxuICAgICAgMjM0LFxuICAgICAgMTcwLFxuICAgICAgMTg0LFxuICAgICAgMTIyLFxuICAgICAgMTYzLFxuICAgICAgODEsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMzUsXG4gICAgICAyMjUsXG4gICAgICAyMCxcbiAgICAgIDE1NSxcbiAgICAgIDEyOSxcbiAgICAgIDI1MCxcbiAgICAgIDE2NSxcbiAgICAgIDE0MCxcbiAgICAgIDE5MyxcbiAgICAgIDI1NCxcbiAgICAgIDEwMixcbiAgICAgIDE5MixcbiAgICAgIDE1MCxcbiAgICAgIDE5NyxcbiAgICAgIDIxOSxcbiAgICAgIDY5LFxuICAgICAgMTI3LFxuICAgICAgNTcsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUMzSDJHNkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ0ODY0MzQ2MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE0NzQ0ODY2NDIzMDE5OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDajcxd1F3dHZldEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnhxK1hseENXVGxPcmZ1aWlqQUt4YnJNeUF2Mzl6QXBOdGw2VFhQKzRHZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkTUpNbVlsUXoxakVKbTgrT1p4RE5NZWN0aGhMUHFZWEovcXdtemVmV2RmV3RGN2R1dnlrQnNreGFvRDBzaVlROEtwN2JWc0Z2NHY0MEh0K2ZKWEpEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDdU4zL3hORkxTMFg4UVJCeWpQTnJtSXJUT0EzMHY1R1lKMHdqQkJDTDVxVkYrRFZTZnQyVGtRWnpXdzFyRU5KWGtLcE1Qa1I0SzArOWdENThNbExCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NDg2NDM0NjE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjE2NDU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVV0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUOEZkZEVhREFET1FBdWRDcW52V0Fybkp3ejdFWG56UXp4eWJLVURtWHVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDc2MTEyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjE2NDYxOTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "AK KHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "JULIHA"  ).toUpperCase(),



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
