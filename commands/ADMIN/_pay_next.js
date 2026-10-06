/*CMD
  command: /pay_next
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
User.setProperty("pay_idx", parseInt(User.getProperty("pay_idx") || 0) + 1, "integer")
Bot.runCommand("/pay_view")
