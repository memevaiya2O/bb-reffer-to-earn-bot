/*CMD
  command: /a_eco
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
var cred = parseFloat(Bot.getProperty("stat_credited") || 0)
var db = parseFloat(Bot.getProperty("stat_debited") || 0)
var paid = parseFloat(Bot.getProperty("stat_paid") || 0)
var users = parseInt(Bot.getProperty("stat_users") || 0)
var circ = Math.round((cred - db - paid) * 100) / 100
if(circ < 0){ circ = 0 }
var avg = users > 0 ? Math.round((cred / users) * 100) / 100 : 0
var top = Bot.getProperty("top_refs")
if(!(top instanceof Array)){ top = [] }
var body = "💵 Total credited : <b>" + money(cred) + "</b>\n" +
  "📤 Total debited  : <b>" + money(db) + "</b>\n" +
  "💸 Paid out       : <b>" + money(paid) + "</b>\n" +
  "🏦 <b>Circulating   : " + money(circ) + "</b>\n" +
  "📊 Avg earned/user: <b>" + money(avg) + "</b>\n\n" +
  "━━━ TOP EARNERS ━━━\n"
if(top.length === 0){ body += "No data yet." }
else {
  var med = ["🥇", "🥈", "🥉"]
  for(var i = 0; i < top.length && i < 5; i++){
    body += (med[i] || ("#" + (i + 1))) + " <code>" + top[i].id + "</code> — <b>" + top[i].c + "</b> refs\n"
  }
}
admEdit(card("💰 ECONOMY", body),
  [[btn("🔄 Refresh", "/a_eco"), btn("📊 Stats", "/a_stats")], backRow()[0]])
