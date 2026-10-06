/*CMD
  command: /a_ana
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
var date = new Date()
var ds = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
admEdit(card("📈 ANALYTICS — TODAY",
  "<b>" + ds + "</b>\n\n" +
  "👥 New users   : <b>" + n(dstat("users")) + "</b>\n" +
  "🔗 Referrals   : <b>" + n(dstat("refs")) + "</b>\n" +
  "🎬 Ads watched : <b>" + n(dstat("ads")) + "</b>\n" +
  "💸 Paid out    : <b>" + money(dstat("pay")) + "</b>\n\n" +
  "━━━ ALL TIME ━━━\n" +
  "👥 Users      : <b>" + n(Bot.getProperty("stat_users")) + "</b>\n" +
  "🔗 Referrals  : <b>" + n(Bot.getProperty("stat_refs")) + "</b>\n" +
  "🎬 Ads        : <b>" + n(Bot.getProperty("stat_ads")) + "</b>\n" +
  "💸 Paid       : <b>" + money(Bot.getProperty("stat_paid")) + "</b>"),
  [[btn("🔄 Refresh", "/a_ana"), btn("💰 Economy", "/a_eco")], backRow()[0]])
