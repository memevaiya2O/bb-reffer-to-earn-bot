/*CMD
  command: /u_ban
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
var t2 = String(User.getProperty("lookup_id") || "")
if(!t2){ return Bot.runCommand("/a_users") }
var nb = truthy(Bot.getProperty("ban_" + t2)) ? 0 : 1
Bot.setProperty("ban_" + t2, nb, "integer")
if(nb){ banAdd(t2) } else { banDel(t2) }
Bot.runCommand("/user_show")
