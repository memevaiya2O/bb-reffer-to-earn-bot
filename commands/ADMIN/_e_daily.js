/*CMD
  command: /e_daily
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
User.setProperty("adm_field", "DAILY", "string")
User.setProperty("adm_flow", "edit", "string")
Bot.runCommand("/a_prompt")
