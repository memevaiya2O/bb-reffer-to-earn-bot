/*CMD
  command: /u_bonus
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
User.setProperty("adj_is_bonus", 1, "integer")
admEdit(card("🎁 GIVE BONUS", "Send the bonus amount in BDT.\n<i>Example: 25</i>\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
