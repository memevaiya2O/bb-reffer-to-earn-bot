/*CMD
  command: /bonus_all
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
User.setProperty("adm_flow", "bonus_all", "string")
admEdit(card("🎁 BONUS — ALL USERS", "Send the bonus amount in BDT.\nEveryone who ever started the bot gets it.\n<i>Example: 5</i>\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
