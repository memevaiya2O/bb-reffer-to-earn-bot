/*CMD
  command: onCheckMembership
  help: 
  need_reply: false
  auto_retry_time: 
  folder: CORE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var st = Bot.getProperty("jchk_" + TG)
if(!st){
  // legacy / stray call: just show the menu
  return send(card(t("menu_t"), t("menu_s")), kbUser())
}
var list = chList()
var idx = parseInt(st.i)
var res = (options && options.result) ? options.result : null
var ok = false
if(res && res.status){
  ok = (res.status === "member" || res.status === "administrator" || res.status === "creator")
}
if(!ok && list[idx]){
  if(!st.missing || typeof st.missing.length !== "number"){ st.missing = [] }
  st.missing.push({id: String(list[idx].id || ""), name: String(list[idx].name || "")})
}
st.i = idx + 1
Bot.setProperty("jchk_" + TG, st, "json")
chNext()
