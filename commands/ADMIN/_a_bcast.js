/*CMD
  command: /a_bcast
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
User.setProperty("adm_flow", "bcast", "string")
admEdit(card("📣 BROADCAST", "Send the message to broadcast to all users.\nHTML formatting is supported.\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
