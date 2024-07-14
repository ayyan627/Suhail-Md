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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_49_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjc4V2svdjl2djdFbTNJZVRnZy9HbnB1QVJteTczRmZNMWJ2OHN5ZGRUR1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng2bmVWdzRWUl9XR0VlTHN6RFFWd3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY3MDUyNjktMjE2OS00MDVmLWI1ODQtNjAxN2I5OWE3NGE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDg4LFxuICAgICAgMTAwLFxuICAgICAgMjQ5LFxuICAgICAgNjAsXG4gICAgICAyMDQsXG4gICAgICAxODMsXG4gICAgICAyMDEsXG4gICAgICAxMzcsXG4gICAgICA2MSxcbiAgICAgIDIxOCxcbiAgICAgIDExOCxcbiAgICAgIDE3NyxcbiAgICAgIDIzMSxcbiAgICAgIDE4NixcbiAgICAgIDE0NSxcbiAgICAgIDIzNCxcbiAgICAgIDEyMCxcbiAgICAgIDg3LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgNzYsXG4gICAgICA0MyxcbiAgICAgIDEyNixcbiAgICAgIDIyNyxcbiAgICAgIDEwMixcbiAgICAgIDE4MSxcbiAgICAgIDEwLFxuICAgICAgMCxcbiAgICAgIDE2OCxcbiAgICAgIDUwLFxuICAgICAgMTQ3LFxuICAgICAgMTk0LFxuICAgICAgMTA1LFxuICAgICAgNzQsXG4gICAgICAxNjksXG4gICAgICAxNzksXG4gICAgICAyNyxcbiAgICAgIDEwMSxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWV0dURlpFNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDQ4NjQzNDYxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDc0NDg2NjQyMzAxOTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQbjk2QUhFUEdDMExRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGkrR2IwVDZlampvNnBVZWpxdFY4ais2RXhqTUNpM1NkMFFUMFY1MUJVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGdEpsMjFZRHlHRUduQk8wdEwrQ3lYMm1Ua0pEMVkvSHI1UGk5ZnlSZXBRN0s4em55RFd1bno3Q0RPNFJRaFpXNU52WVU4NCtCV0JBV2lwRVZsTFVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTeUZHelZFYUFPbzZLUGlVcWZWQy83TkRMejRBNEh6YXRDU0tDTmx2VlMvVHgrTXp5MkVEUVNHL0lhMUgxZm4wSjhEQnd6ZjNtRkZ3QUJBU1VZbHZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NDg2NDM0NjE6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTc1NzMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHpvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIem8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvWjZZM1VGKzRaUjNCRWd5V2tXM2RmSVZ0OEd2TUlicVFaUDZPaDFYbVI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDgxMTk5ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
