/*CMD
  command: ◀️ Previous
  help: 
  need_reply: false
  auto_retry_time: 
  folder: EARN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var p = parseInt(User.getProperty("ref_page") || 1) - 1
if(p < 1){ p = 1 }
User.setProperty("ref_page", p, "integer")
Bot.runCommand("/ref_list")
