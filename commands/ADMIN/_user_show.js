/*CMD
  command: /user_show
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
var t2 = String(User.getProperty("lookup_id") || "")
if(!t2){ return Bot.runCommand("/a_users") }
var ads = parseInt(Bot.getProperty("adcount_" + t2 + "_" + today()) || 0)
admEdit(card("👤 USER PROFILE",
  "🆔 <code>" + t2 + "</code>\n\n" +
  "💰 Balance   : <b>" + money(bal(t2)) + "</b>\n" +
  "🔗 Referrals : <b>" + n(Bot.getProperty("refs_" + t2)) + "</b>\n" +
  "💵 Ref earn  : <b>" + money(Bot.getProperty("refearn_" + t2)) + "</b>\n" +
  "🎬 Ad earn   : <b>" + money(Bot.getProperty("adearn_" + t2)) + "</b>\n" +
  "📊 Ads today : <b>" + ads + "/" + dlim() + "</b>\n" +
  "🚫 Banned    : <b>" + (truthy(Bot.getProperty("ban_" + t2)) ? "YES" : "No") + "</b>"),
  [
    [btn("➕ Credit", "/u_credit"), btn("➖ Debit", "/u_debit"), btn("🎁 Bonus", "/u_bonus")],
    [btn(truthy(Bot.getProperty("ban_" + t2)) ? "✅ Unban" : "🚫 Ban", "/u_ban")],
    [btn("🔍 New Lookup", "/a_lookup"), btn("⬅️ Back to Panel", "/a_hub")]
  ])
