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


global.devs = "923196765146" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923196765146";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_08_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICA3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGdmRzhVL25kckp0NGRCdFQzdGxzU3h2RWNsaGQ1NkVEUGpuazVlWHgraz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzNTg0NTczOTY2MjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyOTVBODUyRDgyNjM1ODdDRjE1NDY5MjFDNkNEMzVGOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5MjI4ODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzNTg0NTczOTY2MjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQjA2RkM4NDBBOUJDNjI0QUZDRDhEOEI1QkEzRDdDN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5MjI4ODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWk4Uy1CLWtTU3k3MUlVSlV5WDVZQVwiLFxuICBcInBob25lSWRcIjogXCIxODMzZDg3Yy1lODYwLTRmMTQtYmQyZS0zOTk2YTNhYzA4NjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgNjIsXG4gICAgICAyMTgsXG4gICAgICA5NyxcbiAgICAgIDE3NSxcbiAgICAgIDkzLFxuICAgICAgNDksXG4gICAgICAzNyxcbiAgICAgIDE2NyxcbiAgICAgIDcyLFxuICAgICAgMTI0LFxuICAgICAgOTYsXG4gICAgICAyMTIsXG4gICAgICAxMzIsXG4gICAgICAxNzksXG4gICAgICAxNDAsXG4gICAgICAxOTMsXG4gICAgICAyNTUsXG4gICAgICA1MSxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDEzOSxcbiAgICAgIDc1LFxuICAgICAgODcsXG4gICAgICAzNSxcbiAgICAgIDM2LFxuICAgICAgMjYsXG4gICAgICAxNjgsXG4gICAgICA0OSxcbiAgICAgIDI1NCxcbiAgICAgIDgxLFxuICAgICAgMTk0LFxuICAgICAgODcsXG4gICAgICAyMjIsXG4gICAgICAxMzUsXG4gICAgICAxMzUsXG4gICAgICAxMTAsXG4gICAgICAyMCxcbiAgICAgIDU2LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxTQUpMV1haXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzNTg0NTczOTY2MjgyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ3OTgwMzIxNTg4MTY6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDcmlzdGlhbm8ndiBJbnhpZGUndiA7MyDinKhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSys5Nm9GRVBybHpMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkY5dFU5L0liQVF1OWZYZmtBM0FwQzBmTUpEc0RqL3N6ZUFkVFQrTCt5aG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNFlRL3c2T0U0WThINml0NmhURVBsRXZWenJqM2E4Um11TWdJWE5vSS92TVd4a0hUdGU2UGZkNE02R1ZMOG4wY0ZKUXU0Z0E3M2xGNXoyeWRWNmhOQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieGYrMGZmQ1lMUFRYUmFlcTlSWnBxdUlqL1RrYzBjNGs1ZkU5SDVRWGdVQWNIYyttRDB2ZFc0YUhJN2lXK25qUFJ2ZzhId3pKVi9WT01GQmsrTFVJalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzU4NDU3Mzk2NjI4MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTIyODc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkJDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5TnRJU1pWOVc0VlBoQUptZDlLL2VXYXFuUWdaZlAzL0tsRmVjQ254UWh3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzIyMTUzMzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg5MDc4Nzk1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MR PAKHTOON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
