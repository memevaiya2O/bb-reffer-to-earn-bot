/*CMD
  command: 📜 History
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
var h = Bot.getProperty("hist_" + TG)
if(!(h instanceof Array)){ h = [] }
var body = ""
if(h.length === 0){ body = t("nohist") }
else {
  for(var i = 0; i < h.length && i < 10; i++){
    var st = h[i].status === "paid" ? "✅" : (h[i].status === "rejected" ? "❌" : (h[i].status === "earned" ? "💰" : "⏳"))
    body += st + "  <b>" + money(h[i].amount) + "</b>  •  <code>" + String(h[i].at || "").substring(0, 10) + "</code>"
    if(h[i].id){ body += "  <code>" + h[i].id + "</code>" }
    body += "\n"
  }
}
send(card("📜 " + t("hist_t"), body), kbUser())

