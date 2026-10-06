/*CMD
  command: /start
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
var ref = (params || "").trim()
if(ref.indexOf("ref_") === 0){
  var rid = ref.substring(4).trim()
  if(rid !== "" && rid !== TG && !User.getProperty("referred_by")){
    User.setProperty("referred_by", rid, "string")
    Bot.setProperty("pendref_" + TG, rid, "string")
  }
}
if(chat && chat.chat_type !== "private"){ return }
if(!User.getProperty("lang")){
  return sendI(card("🌐 ভাষা নির্বাচন করুন  /  Choose Language",
    "আপনার পছন্দের ভাষা বেছে নিন 👇\nSelect your preferred language 👇\n\n" +
    "<i>You can change it anytime with 🌐 Language</i>"),
    [[btn("🇧🇩 বাংলা", "/lang_bn")], [btn("🇬🇧 English", "/lang_en")]])
}
Bot.setProperty("ulang_" + TG, LANG, "string")
Bot.setProperty("uname_" + TG, (user.first_name || ""), "string")
if(!User.getProperty("firststart")){
  User.setProperty("firststart", 1, "integer")
  addRecent(TG, user.first_name || "")
  Bot.setProperty("stat_users", parseInt(Bot.getProperty("stat_users") || 0) + 1, "integer")
  bump("users", 1)
}
var name = (user.first_name || "there")
var rule = String(cfg("verify_rule", "start"))
var txt = card("👋 " + t("wel_t") + ", " + name + "!",
  "💚 <b>" + String(cfg("brand_name", "ReferEarn BD")) + "</b>\n" + t("wel_s") + "\n\n" +
  "🎬 " + t("ads_l") + "\n🔗 " + t("ref_l") + "\n💸 " + t("wd_l") + "\n\n" +
  "💰 <b>" + t("rbal") + ":</b> " + money(bal(TG)))
if(chanGate(kbUser(), txt)){ return }
if(rule === "start" || rule === "channel"){ creditReferral(TG, name) }
send(txt, kbUser())
