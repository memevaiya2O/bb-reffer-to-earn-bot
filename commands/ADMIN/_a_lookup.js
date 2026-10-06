/*CMD
  command: /a_lookup
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
User.setProperty("adm_flow", "lookup", "string")
admEdit(card("🔍 USER LOOKUP", "Send the user's Telegram ID.\nYou can get it via /myid.\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
