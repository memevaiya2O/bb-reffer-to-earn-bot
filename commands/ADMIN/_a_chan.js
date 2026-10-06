/*CMD
  command: /a_chan
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
chSync()
User.setProperty("chan_idx", 0, "integer")
Bot.runCommand("/a_chan_view")
