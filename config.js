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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_01_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg5LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo4MFRCbHpESHNHYXg1RHBjYWU1QkNxYXNpNS9icEkrVzh3TUt1WDd2NWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTQzMTgzMTI2MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYzMUIwOTc5NTExRjU2QTRDRDkyNzEzMjE2ODkxMzlFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxNzY4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE0MzE4MzEyNjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNzVDMjk3RkE5NUIxNzkwM0RGQjkwMTFFMzQxMzUyMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMTc2ODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibHA3SzctZWVTMnlYVjk2X2NFenRQZ1wiLFxuICBcInBob25lSWRcIjogXCJlMjA1MmNhMi0zOTRhLTRlMmItYTE3OS03MjQ0ZDAzYzBlZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA2MyxcbiAgICAgIDU1LFxuICAgICAgMjQ3LFxuICAgICAgMjU1LFxuICAgICAgMjMzLFxuICAgICAgNzQsXG4gICAgICA4NyxcbiAgICAgIDEwNCxcbiAgICAgIDE4LFxuICAgICAgMTMxLFxuICAgICAgNzgsXG4gICAgICAxMixcbiAgICAgIDIyNCxcbiAgICAgIDE1NyxcbiAgICAgIDE2OSxcbiAgICAgIDEzLFxuICAgICAgMjI0LFxuICAgICAgMTM1LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDg1LFxuICAgICAgMTE1LFxuICAgICAgMTUyLFxuICAgICAgMjQ2LFxuICAgICAgMTU0LFxuICAgICAgMjExLFxuICAgICAgMjIyLFxuICAgICAgMTI3LFxuICAgICAgMTkxLFxuICAgICAgMjA1LFxuICAgICAgMTM3LFxuICAgICAgMTczLFxuICAgICAgMjIwLFxuICAgICAgMTIwLFxuICAgICAgMTI0LFxuICAgICAgNTUsXG4gICAgICAwLFxuICAgICAgMjM2LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhQV1o0NkI4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNDMxODMxMjYzMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ5NTU3MTk3MzMyODE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5mEXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzZEMnBFQkVJRGwzclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6NlZ4eS9BRkRnMWhLZUxQUDNSbFBmN1Rhb0sxeXhlcXJ5QVpWRDdlaTNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRGS2tINXFWbVZqaHd4bmw3d3hNMDJrSXRld3JidzNXNjJ2dnV3eGxDVXhxc05VZHh6Tk5XUjVIRnlhb0JzYVBsd3kxUktYTDJRQWpxNkFBa2h5NkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllvK3cvNWs5dnhXc0g3aGxaRk9PdC9ySHNaWnQrd0hIc3RBaG14eXoyYlYxYjg2S1RFQlVHSzVXL25lWEU2SHhKeUkycStNa00zK2lMZlpaNjBFWWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0MzE4MzEyNjMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIxNzY3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1kZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWRmLmpzb24iOiAie1wia2V5RGF0YVwiOlwibVphTTRrcFBHbkJCdXp0bFBaZVg3NXc1TkthT1NpNzFjTUZiakF0UDJ2Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDU1NjIwOTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIxNzY3NzkyOVwifSIKfQ=="  // PUT your SESSION_ID 


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
