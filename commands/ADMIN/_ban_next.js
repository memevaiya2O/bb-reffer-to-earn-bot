/*CMD
  command: /ban_next
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
User.setProperty("ban_idx", parseInt(User.getProperty("ban_idx") || 0) + 1, "integer")
Bot.runCommand("/ban_view")
