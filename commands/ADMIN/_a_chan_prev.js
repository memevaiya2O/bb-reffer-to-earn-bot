/*CMD
  command: /a_chan_prev
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
var i = parseInt(User.getProperty("chan_idx") || 0) - 1
if(i < 0){ i = 0 }
User.setProperty("chan_idx", i, "integer")
Bot.runCommand("/a_chan_view")
