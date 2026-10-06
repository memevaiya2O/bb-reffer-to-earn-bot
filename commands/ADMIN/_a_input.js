/*CMD
  command: /a_input
  help: 
  need_reply: true
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
var v = (message || "").trim()
var fl = String(User.getProperty("adm_flow") || "")
if(fl === ""){ return Bot.runCommand("/a_hub") }
User.setProperty("adm_flow", "", "string")
if(v.toLowerCase() === "cancel"){ return Bot.runCommand("/a_hub") }

if(fl === "lookup"){
  var id = parseInt(v)
  if(isNaN(id)){ return admEdit(card("❌", "Invalid Telegram ID."), backRow()) }
  User.setProperty("lookup_id", String(id), "string")
  return Bot.runCommand("/user_show")
}

if(fl === "adj"){
  var t2 = String(User.getProperty("lookup_id") || "")
  var amt = parseFloat(v)
  var sg = parseInt(User.getProperty("adj_sign") || 1)
  var isBonus = parseInt(User.getProperty("adj_is_bonus") || 0)
  User.setProperty("adj_is_bonus", 0, "integer")
  if(isNaN(amt) || amt <= 0){ return admEdit(card("❌", "Invalid amount."), backRow()) }
  credit(t2, sg * amt)
  if(sg > 0 && String(cfg("verify_rule", "start")) === "purchase"){
    creditReferral(t2, String(Bot.getProperty("uname_" + t2) || ""))
  }
  if(isBonus === 1 || sg > 0){
    Bot.setProperty("stat_bonus", Math.round((parseFloat(Bot.getProperty("stat_bonus") || 0) + amt) * 100) / 100, "float")
  }
  try {
    Api.sendMessage({chat_id: parseInt(t2), parse_mode: "HTML",
      text: card(isBonus === 1 ? "🎁 BONUS RECEIVED" : "💰 BALANCE UPDATED",
        (sg > 0 ? "➕ Added: <b>" + money(amt) + "</b>" : "➖ Removed: <b>" + money(amt) + "</b>") +
        "\n💼 New balance: <b>" + money(bal(t2)) + "</b>")})
  } catch(e){}
  return Bot.runCommand("/user_show")
}

if(fl === "reject"){
  var id2 = String(User.getProperty("pay_cur") || "")
  var p = Bot.getProperty("pay_" + id2)
  if(!p || p.status !== "pending"){ return Bot.runCommand("/pay_view") }
  p.status = "rejected"
  p.reason = v
  Bot.setProperty("pay_" + id2, p, "json")
  credit(p.user, p.amount)
  var pend = Bot.getProperty("pay_pending")
  if(!(pend instanceof Array)){ pend = [] }
  var np = []
  for(var i = 0; i < pend.length; i++){ if(String(pend[i]) !== id2){ np.push(pend[i]) } }
  Bot.setProperty("pay_pending", np, "json")
  pushLog("paylog", {id: id2, user: p.user, amount: p.amount, status: "rejected", at: new Date().toISOString()}, 40)
  pushLog("hist_" + p.user, {id: id2, amount: p.amount, status: "rejected", reason: v, at: new Date().toISOString()}, 50)
  try {
    Api.sendMessage({chat_id: parseInt(p.user), parse_mode: "HTML",
      text: card("❌ PAYOUT REJECTED", "💵 <b>" + money(p.amount) + "</b>\n📝 " + v + "\n\n💰 Refunded to balance: <b>" + money(bal(p.user)) + "</b>")})
  } catch(e){}
  return Bot.runCommand("/pay_view")
}

if(fl === "bonus_one"){
  var pr = v.split(" ")
  if(pr.length < 2){ return admEdit(card("❌", "Format: <code>USER_ID AMOUNT</code>"), backRow()) }
  var bid = parseInt(pr[0]), bamt = parseFloat(pr[1])
  if(isNaN(bid) || isNaN(bamt) || bamt <= 0){ return admEdit(card("❌", "Invalid input."), backRow()) }
  credit(bid, bamt)
  Bot.setProperty("stat_bonus", Math.round((parseFloat(Bot.getProperty("stat_bonus") || 0) + bamt) * 100) / 100, "float")
  try {
    Api.sendMessage({chat_id: bid, parse_mode: "HTML",
      text: card("🎁 BONUS RECEIVED", "You got <b>" + money(bamt) + "</b> bonus!\n💼 Balance: <b>" + money(bal(bid)) + "</b>")})
  } catch(e){}
  return admEdit(card("✅ BONUS SENT", "👤 <code>" + bid + "</code>\n🎁 <b>" + money(bamt) + "</b>\n💼 New balance: <b>" + money(bal(bid)) + "</b>"),
    [[btn("🎁 Another", "/bonus_one"), btn("⬅️ Back to Panel", "/a_hub")]])
}

if(fl === "bonus_all"){
  var aamt = parseFloat(v)
  if(isNaN(aamt) || aamt <= 0){ return admEdit(card("❌", "Invalid amount."), backRow()) }
  User.setProperty("adm_tmp", aamt, "float")
  return admEdit(card("⚠️ CONFIRM BONUS",
    "Give <b>" + money(aamt) + "</b> to <b>every user</b>?\n\n" +
    "👥 Users: <b>" + n(Bot.getProperty("stat_users")) + "</b>\n" +
    "💸 Total cost: <b>" + money(aamt * parseInt(Bot.getProperty("stat_users") || 0)) + "</b>"),
    [[btn("✅ Yes, Send", "/bonus_do"), btn("❌ Cancel", "/a_bonus")], backRow()[0]])
}

if(fl === "addchan"){
  var tok = v.split(" ")
  var cid = String(tok[0] || "").trim()
  var cname = v.substring(cid.length).trim()
  if(cid === "" || cid.length < 4){ return admEdit(card("❌", "Invalid channel ID or link."), backRow()) }
  if(cname === ""){ cname = cid.replace("@", "") }
  var list = chList()
  var dup = false
  for(var ci = 0; ci < list.length; ci++){ if(String(list[ci].id) === cid){ dup = true } }
  if(dup){ return admEdit(card("⚠️ ALREADY ADDED", "<code>" + cid + "</code> is already in the list."), backRow()) }
  list.push({id: cid, name: cname})
  chSave(list)
  User.setProperty("chan_idx", list.length - 1, "integer")
  return Bot.runCommand("/a_chan_view")
}

if(fl === "bcast"){
  User.setProperty("adm_tmp_text", v, "text")
  return admEdit(card("⚠️ CONFIRM BROADCAST",
    "Send this to all users?\n\n" + DIV + "\n" + v + "\n" + DIV + "\n\n" +
    "👥 Users: <b>" + n(Bot.getProperty("stat_users")) + "</b>"),
    [[btn("✅ Yes, Send", "/bcast_do"), btn("❌ Cancel", "/a_hub")], backRow()[0]])
}

if(fl === "edit"){
  var f = String(User.getProperty("adm_field") || "")
  User.setProperty("adm_field", "", "string")
  var map = {
    REF: ["referral_reward", "float"], AD: ["ad_reward", "float"],
    MIN: ["min_withdraw", "float"], DAILY: ["daily_ad_limit", "integer"],
    COOL: ["ad_cooldown", "integer"], RULE: ["verify_rule", "string"],
    CHAN: ["channel", "string"], SUP: ["support", "string"], BRAND: ["brand_name", "string"],
    BLOCK: ["adsgram_block", "string"], ZONE: ["monetag_zone", "string"],
    MAINTMSG: ["maint_msg", "string"]
  }
  if(!map[f]){ return Bot.runCommand("/a_set") }
  var key = map[f][0], type = map[f][1]
  if(type === "float" || type === "integer"){
    var num = parseFloat(v)
    if(isNaN(num) || num < 0){ return admEdit(card("❌", "Please send a valid positive number."), backRow()) }
    if(type === "integer"){ num = Math.floor(num) }
    Bot.setProperty("cfg_" + key, num, type)
  } else {
    if(v.toLowerCase() === "none"){ v = "" }
    if(key === "verify_rule" && ["start", "channel", "purchase"].indexOf(v) === -1){
      return admEdit(card("❌", "Send: <code>start</code>, <code>channel</code> or <code>purchase</code>"), backRow())
    }
    Bot.setProperty("cfg_" + key, v, "string")
  }
  if(f === "CHAN" || f === "SUP" || f === "BRAND"){ return Bot.runCommand("/a_brand") }
  if(f === "BLOCK" || f === "ZONE"){ return Bot.runCommand("/a_net") }
  if(f === "MAINTMSG"){ return Bot.runCommand("/a_maint") }
  return Bot.runCommand("/a_set")
}

Bot.runCommand("/a_hub")
