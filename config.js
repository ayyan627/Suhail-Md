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


global.devs = "+994 40 246 28 30" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+994 40 246 28 30";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_21_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICA2NSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR4Q05mTTBvVXRLbDNoY2FHZm4yOVhjZlZoNXpYR3A4MjRiTG9CUGhjZzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1URGdLRmIyVDVpRkNTWlFSelRyZHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI5OTc4NTUtNDllNS00MGQzLTljMGEtZTFlNzcyOGU2MzY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMjMxLFxuICAgICAgMTc3LFxuICAgICAgMzAsXG4gICAgICA3LFxuICAgICAgMTExLFxuICAgICAgOSxcbiAgICAgIDE3LFxuICAgICAgMTQ0LFxuICAgICAgOTgsXG4gICAgICA1MyxcbiAgICAgIDUwLFxuICAgICAgMTY5LFxuICAgICAgMTgzLFxuICAgICAgMTMsXG4gICAgICAxMTIsXG4gICAgICAxMDEsXG4gICAgICAyMzUsXG4gICAgICAxNTAsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjU1LFxuICAgICAgMTQ4LFxuICAgICAgMjksXG4gICAgICAyMzgsXG4gICAgICAxOSxcbiAgICAgIDI0MixcbiAgICAgIDYyLFxuICAgICAgMCxcbiAgICAgIDEzMSxcbiAgICAgIDcxLFxuICAgICAgOTAsXG4gICAgICAyMzEsXG4gICAgICAxNjEsXG4gICAgICAxNTAsXG4gICAgICA1MSxcbiAgICAgIDg1LFxuICAgICAgMTEwLFxuICAgICAgMjI5LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldIWUQxWTdOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDI0NjI4MzA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG0jcqAIOG0pMqc4bSHybThtI9cIixcbiAgICBcImxpZFwiOiBcIjgxNDU4ODUzMTA1Nzg5OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpSNDc0Q0VPTGZtYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0c1NseE9JZ2Vxb200eW9EOEtvcnkzSmpqdXV4dDJnUllqa3RWSkt0OGk4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRZRXh6RDJkMUh0eHh5YXFpaEJvTmtGdENDUW9rbFVCWDIrZHpQQmY3aVEwR3FuZDFmVzczQ1hCQjlHVWFraVNFSHAydnRhb3N3bzh6bW1Md1R1OURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFrRUdLYWg0SWpsS1dzdzZrSGNrODFuU0lNVnVWWFhZcFFXSzJpYmE4QzdwZnpmV0tTMGRBTVhOZlFIcnNpS1lnaldGSjJnOHQ3cVM0dzRqUnArN0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMjQ2MjgzMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODM2NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCazlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJrOS5qc29uIjogIntcImtleURhdGFcIjpcImIza2NzbUxwaVRBVlo1bFBEUkcrOHhBZHl1SGJFc2k1THIyT3cxM1lJZGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY4NTI2ODQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxODM2NTgwNTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝄟≛⃝🖤 𝑨𝒀𝑨𝑵 - 𝑿𝑫 ✨੍᭄͜͡°•",
  ownername:process.env.OWNER_NAME|| "𝄟≛ MR SHENO✨੍᭄͜͡°•𓆩🖤𓆪",


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
