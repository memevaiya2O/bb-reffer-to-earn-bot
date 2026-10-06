/*CMD
  command: /a_info
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
var iq = null, pp = null
try { iq = iteration_quota } catch(e){}
try { pp = payment_plan } catch(e){}
var body = "🤖 Bot username : <b>@" + BOTU + "</b>\n" +
  "🆔 BB bot ID    : <code>" + String(bot.id) + "</code>\n" +
  "👑 Admin        : <code>" + String(cfg("admin_id", "?")) + "</code>\n"
if(pp){ body += "📦 Plan         : <b>" + String(pp.name) + "</b>\n" }
if(iq){
  body += "⚡ Iterations   : <b>" + n(iq.progress) + " / " + n(iq.limit) + "</b>\n"
}
body += "\n👥 Users    : <b>" + n(Bot.getProperty("stat_users")) + "</b>\n" +
  "🔗 Referrals: <b>" + n(Bot.getProperty("stat_refs")) + "</b>\n" +
  "🎬 Ads      : <b>" + n(Bot.getProperty("stat_ads")) + "</b>\n" +
  "💸 Paid out : <b>" + money(Bot.getProperty("stat_paid")) + "</b>\n\n" +
  "🟢 Setup done: <b>" + (parseInt(Bot.getProperty("cfg_setup_done") || 0) === 1 ? "Yes" : "No") + "</b>\n" +
  "📅 " + String(Bot.getProperty("cfg_setup_at") || "").substring(0, 10)
admEdit(card("🆔 BOT INFO", body), [[btn("🔄 Refresh", "/a_info"), btn("📊 Stats", "/a_stats")], backRow()[0]])
