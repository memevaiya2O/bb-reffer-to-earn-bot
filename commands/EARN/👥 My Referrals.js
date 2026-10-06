/*CMD
  command: 👥 My Referrals
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
User.setProperty("ref_page", 1, "integer")
Bot.runCommand("/ref_list")
