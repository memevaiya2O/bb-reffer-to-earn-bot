/*CMD
  command: 📊 Ad History
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADS

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var a = Bot.getProperty("adlog_" + TG)
if(!(a instanceof Array)){ a = [] }
var body = ""
if(a.length === 0){ body = t("noads") }
else {
  for(var i = 0; i < a.length && i < 12; i++){
    body += "🎬 +" + money(a[i].a) + "  <code>" + String(a[i].at || "").substring(11, 19) + "</code>\n"
  }
  body += "\n💵 <b>" + money(parseFloat(Bot.getProperty("adearn_" + TG) || 0)) + "</b>"
}
send(card("📊 " + t("adh_t"), body), kbUser())
