/*CMD
  command: /ref_list
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
var a = Bot.getProperty("reflist_" + TG)
if(!(a instanceof Array)){ a = [] }
if(a.length === 0){ return send(card("👥 " + t("refs_t"), t("norefs")), kbUser()) }
var per = 10
var page = parseInt(User.getProperty("ref_page") || 1)
var tp = Math.ceil(a.length / per)
if(page > tp){ page = tp }
if(page < 1){ page = 1 }
User.setProperty("ref_page", page, "integer")
var s = (page - 1) * per, e = s + per
if(e > a.length){ e = a.length }
var body = "📄 " + t("page") + " <b>" + page + "/" + tp + "</b>  •  " + t("total") + ": <b>" + a.length + "</b>\n\n"
for(var i = s; i < e; i++){ body += (i + 1) + ". <b>" + (a[i].name || "User") + "</b>  <code>" + a[i].id + "</code>\n" }
body += "\n💵 <b>" + money(parseFloat(Bot.getProperty("refearn_" + TG) || 0)) + "</b> " + t("earned")
var rows = []
if(tp > 1){
  var nav = []
  if(page > 1){ nav.push(lbl("prev")) }
  if(page < tp){ nav.push(lbl("next")) }
  rows.push(nav)
}
rows.push([lbl("menu")])
send(card("👥 " + t("refs_t"), body), rows)
