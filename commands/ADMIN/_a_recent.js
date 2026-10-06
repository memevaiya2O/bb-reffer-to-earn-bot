/*CMD
  command: /a_recent
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
var a = Bot.getProperty("recent_users")
if(!(a instanceof Array)){ a = [] }
var body = ""
if(a.length === 0){ body = "No users yet." }
else {
  for(var i = 0; i < a.length; i++){
    body += (i + 1) + ". <b>" + (a[i].name || "User") + "</b>\n<code>" + a[i].id + "</code>\n"
  }
}
admEdit(card("📋 RECENT USERS", body), backRow())
