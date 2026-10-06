/*CMD
  command: /bcast_do
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
var txt = String(User.getProperty("adm_tmp_text") || "")
if(txt === ""){ return Bot.runCommand("/a_bcast") }
try {
  Bot.runAll({command: "/bcast_msg", for_chats: "private-chats", options: {text: txt}, on_create: "/bcast_done"})
} catch(e){
  admEdit(card("⚠️ BROADCAST", "Broadcast API unavailable on this plan."), backRow())
}
User.setProperty("adm_tmp_text", "", "string")
