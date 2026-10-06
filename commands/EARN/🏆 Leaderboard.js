/*CMD
  command: 🏆 Leaderboard
  help: 
  need_reply: false
  auto_retry_time: 
  folder: EARN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var a = Bot.getProperty("top_refs")
if(!(a instanceof Array)){ a = [] }
var body = ""
if(a.length === 0){ body = t("notop") }
else {
  var med = ["🥇", "🥈", "🥉"]
  for(var i = 0; i < a.length && i < 10; i++){
    body += (med[i] || ("<b>#" + (i + 1) + "</b>")) + "  <code>" + a[i].id + "</code>  —  <b>" + a[i].c + "</b> " + lbl("unit") + "\n"
  }
}
send(card("🏆 " + t("top_t"), body), kbUser())

