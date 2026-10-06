/*CMD
  command: /ban_do
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
var id = String(User.getProperty("ban_cur") || "")
if(!id){ return Bot.runCommand("/a_bans") }
Bot.setProperty("ban_" + id, 0, "integer")
banDel(id)
Bot.runCommand("/ban_view")
