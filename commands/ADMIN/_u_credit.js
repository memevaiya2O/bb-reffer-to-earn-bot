/*CMD
  command: /u_credit
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
User.setProperty("adj_sign", 1, "integer")
User.setProperty("adm_flow", "adj", "string")
admEdit(card("➕ CREDIT BALANCE", "Send the amount in BDT.\n<i>Example: 50</i>\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
