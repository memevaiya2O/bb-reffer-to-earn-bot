/*CMD
  command: /a_stats
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
var pend = penCount()
admEdit(card("📊 BUSINESS STATISTICS",
  "👥 Total users      : <b>" + n(Bot.getProperty("stat_users")) + "</b>\n" +
  "🔗 Total referrals  : <b>" + n(Bot.getProperty("stat_refs")) + "</b>\n" +
  "🎬 Ads watched      : <b>" + n(Bot.getProperty("stat_ads")) + "</b>\n\n" +
  "💰 Referral payouts : <b>" + money(Bot.getProperty("stat_refpay")) + "</b>\n" +
  "🎬 Ad payouts       : <b>" + money(Bot.getProperty("stat_adpay")) + "</b>\n" +
  "🎁 Bonuses given    : <b>" + money(Bot.getProperty("stat_bonus")) + "</b>\n" +
  "💸 Total paid out   : <b>" + money(Bot.getProperty("stat_paid")) + "</b>\n" +
  "⏳ Pending requests : <b>" + pend + "</b>\n" +
  "📨 Notify failures : <b>" + parseInt(Bot.getProperty("stat_notify_fail") || 0) + "</b>" +
  (parseInt(Bot.getProperty("stat_notify_rescued") || 0) > 0 ? "  (rescued: " + Bot.getProperty("stat_notify_rescued") + ")" : "") + "\n\n" +
  "📡 Network : <b>" + String(cfg("ads_network", "adsgram")) + "</b>\n" +
  "🎯 Rule    : <b>" + String(cfg("verify_rule", "start")) + "</b>"),
  [[btn("🔄 Refresh", "/a_stats"), btn("📈 Analytics", "/a_ana")], backRow()[0]])
