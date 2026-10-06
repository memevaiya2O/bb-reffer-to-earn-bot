/*CMD
  command: /setup
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
var done = parseInt(Bot.getProperty("cfg_setup_done") || 0)
var cur = String(Bot.getProperty("cfg_admin_id") || "")
if(done === 1){
  if(IS_ADMIN){ return Bot.runCommand("/admin") }
  return send(card("ℹ️ SETUP", "Setup is already completed for this bot."), kbUser())
}
if(cur !== "" && cur !== TG){ return send(card("🚫 SETUP", "Setup has already been claimed."), kbUser()) }
Bot.setProperty("cfg_admin_id", TG, "string")
Bot.setProperty("cfg_admin_name", (user.first_name || ""), "string")
Bot.setProperty("cfg_admin_username", (user.username || ""), "string")
Bot.setProperty("cfg_bot_username", BOTU, "string")
Bot.setProperty("cfg_bot_link", "https://t.me/" + BOTU, "string")
Bot.setProperty("cfg_setup_done", 1, "integer")
Bot.setProperty("cfg_setup_at", new Date().toISOString(), "string")
var D = {
  cfg_referral_reward: [5, "float"], cfg_ad_reward: [0.5, "float"],
  cfg_min_withdraw: [100, "float"], cfg_daily_ad_limit: [15, "integer"],
  cfg_ad_cooldown: [30, "integer"], cfg_verify_rule: ["start", "string"],
  cfg_ads_network: ["adsgram", "string"], cfg_brand_name: ["ReferEarn BD", "string"],
  cfg_support: ["", "string"], cfg_channel: ["", "string"], cfg_maint: [0, "integer"],
  cfg_maint_msg: ["", "string"], cfg_ads_on: [1, "integer"], cfg_ref_on: [1, "integer"],
  cfg_payout_on: [1, "integer"], cfg_adsgram_block: ["", "string"],
  cfg_monetag_zone: ["", "string"], cfg_lang_default: ["en", "string"],
  stat_users: [0, "integer"], stat_refs: [0, "integer"], stat_ads: [0, "integer"],
  stat_paid: [0, "float"], stat_refpay: [0, "float"], stat_adpay: [0, "float"],
  stat_credited: [0, "float"], stat_debited: [0, "float"], stat_bonus: [0, "float"]
}
for(var k in D){
  var cv = Bot.getProperty(k)
  if(cv === null || cv === undefined){ Bot.setProperty(k, D[k][0], D[k][1]) }
}
User.setProperty("lang", String(cfg("lang_default", "en")), "string")
send(card("✅ SETUP COMPLETE",
  "You are now the <b>permanent admin</b>.\n\n" +
  "🤖 Bot     : <b>@" + BOTU + "</b>\n🆔 Your ID : <code>" + TG + "</code>\n" +
  "💚 Brand   : <b>" + String(cfg("brand_name", "ReferEarn BD")) + "</b>\n\n" +
  "Default settings applied:\n💰 Referral reward : " + money(cfn("referral_reward", 5)) +
  "\n🎬 Ad reward       : " + money(cfn("ad_reward", 0.5)) +
  "\n🏦 Min withdraw    : " + money(cfn("min_withdraw", 100)) +
  "\n📊 Daily ads       : " + dlim() + "\n⏱ Cooldown        : " + cig("ad_cooldown", 30) + "s"), kbUser())
Bot.runCommand("/admin")
