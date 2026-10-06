/*CMD
  command: /e_maintmsg
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
User.setProperty("adm_field", "MAINTMSG", "string")
User.setProperty("adm_flow", "edit", "string")
Bot.runCommand("/a_prompt")
