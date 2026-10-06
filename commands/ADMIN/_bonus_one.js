/*CMD
  command: /bonus_one
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
User.setProperty("adm_flow", "bonus_one", "string")
admEdit(card("🎁 BONUS — SINGLE USER", "Send the user's Telegram ID and amount.\n<i>Example: 7832264582 25</i>\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
