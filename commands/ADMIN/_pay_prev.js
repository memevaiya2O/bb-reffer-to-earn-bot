/*CMD
  command: /pay_prev
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
if(!IS_ADMIN){ return }
var i = parseInt(User.getProperty("pay_idx") || 0) - 1
if(i < 0){ i = 0 }
User.setProperty("pay_idx", i, "integer")
Bot.runCommand("/pay_view")
