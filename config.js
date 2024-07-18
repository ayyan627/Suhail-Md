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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_23_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk94ZjR3TUlJaGNsR2VtenhWWXNuS0cxelJ3blg0S1NDQjFvZHpMRmNlOWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdRNU1vYnBEU1p1TGlQZHJuRHh5SXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmFkNjZkNzgtOGMwMS00MDY5LWFhZjAtMTQ2ZThhZDJlZGQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTY4LFxuICAgICAgMTIzLFxuICAgICAgMTI5LFxuICAgICAgOTQsXG4gICAgICAyMDgsXG4gICAgICAxOSxcbiAgICAgIDEzMSxcbiAgICAgIDgsXG4gICAgICA5NCxcbiAgICAgIDE4MSxcbiAgICAgIDEzNSxcbiAgICAgIDExMSxcbiAgICAgIDE2OCxcbiAgICAgIDIwNyxcbiAgICAgIDE3OSxcbiAgICAgIDIyOSxcbiAgICAgIDE0OCxcbiAgICAgIDg2LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMjQ2LFxuICAgICAgMjYsXG4gICAgICAyMDUsXG4gICAgICAyNDAsXG4gICAgICAyNTQsXG4gICAgICAxNTUsXG4gICAgICA5OCxcbiAgICAgIDE4NixcbiAgICAgIDI1MixcbiAgICAgIDEyLFxuICAgICAgODAsXG4gICAgICAyOCxcbiAgICAgIDU1LFxuICAgICAgNzksXG4gICAgICAxMDMsXG4gICAgICAyNTQsXG4gICAgICA2MixcbiAgICAgIDIyNCxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEOFY1MlA0M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDQ4NjQzNDYxOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQ3NDQ4NjY0MjMwMTk6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0dqNzF3UW81WGl0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJieHErWGx4Q1dUbE9yZnVpaWpBS3hick15QXYzOXpBcE50bDZUWFArNEdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBqT3R0eW52TC95ZGFCVTNoSFFHbFh5ejFyRUl4VTJkUjNrRHIvNG5aVkh1T2VxNmFWcDBXdzZFbDB5SDl6eDh5dkdyQzE3RFo2eU1lWXJqcEhrQ0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRhM0lncVpLSFpFWEhOaW1iYXJ2aXNhR0RscDBlMG9mdjJxUmJuZDJVenpwQit0bFQ4SUFFMWVCL3dKdVdIRG5FM0ZHQTc0d1NsaVB2SnJnUEpwVWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ0ODY0MzQ2MToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNzMwMDJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
