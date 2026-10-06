/*CMD
  command: /a_edit_fail
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
try {
  var s = JSON.stringify((options && (options.error || options.result)) || "")
  if(s.indexOf("not modified") !== -1){ return }
} catch(e){}
var tx = String(User.getProperty("adm_text") || "")
var kb = String(User.getProperty("adm_kb") || "")
if(!tx){ return }
Api.sendMessage({text: tx, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: kb})
