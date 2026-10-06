/*CMD
  command: /bonus_do
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
var amt = parseFloat(User.getProperty("adm_tmp") || 0)
if(!amt || amt <= 0){ return Bot.runCommand("/a_bonus") }
try {
  Bot.runAll({command: "/bonus_give", for_chats: "private-chats", options: {amount: amt}, on_create: "/bonus_done"})
} catch(e){
  admEdit(card("⚠️ BONUS", "Broadcast API unavailable on this plan."), backRow())
}
User.setProperty("adm_tmp", 0, "float")
