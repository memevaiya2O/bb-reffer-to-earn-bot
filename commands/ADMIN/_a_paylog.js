/*CMD
  command: /a_paylog
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
var a = Bot.getProperty("paylog")
if(!(a instanceof Array)){ a = [] }
var body = ""
if(a.length === 0){ body = "No payouts processed yet." }
else {
  for(var i = 0; i < a.length && i < 12; i++){
    body += (a[i].status === "paid" ? "✅" : "❌") + " <b>" + money(a[i].amount) + "</b>  <code>" + String(a[i].id) + "</code>\n👤 <code>" + String(a[i].user) + "</code>\n\n"
  }
}
admEdit(card("🧾 PAYOUT LOG", body), [[btn("🔄 Refresh", "/a_paylog"), btn("💸 Pending", "/a_pay")], backRow()[0]])
