/*CMD
  command: /pay_ok
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
var id = String(User.getProperty("pay_cur") || "")
var p = Bot.getProperty("pay_" + id)
if(!p || p.status !== "pending"){ return Bot.runCommand("/pay_view") }
p.status = "paid"
p.paid_at = new Date().toISOString()
Bot.setProperty("pay_" + id, p, "json")
var pend = Bot.getProperty("pay_pending")
if(!(pend instanceof Array)){ pend = [] }
var np = []
for(var i = 0; i < pend.length; i++){ if(String(pend[i]) !== id){ np.push(pend[i]) } }
Bot.setProperty("pay_pending", np, "json")
Bot.setProperty("stat_paid", Math.round((parseFloat(Bot.getProperty("stat_paid") || 0) + parseFloat(p.amount)) * 100) / 100, "float")
bump("pay", p.amount)
pushLog("paylog", {id: id, user: p.user, amount: p.amount, status: "paid", at: new Date().toISOString()}, 40)
pushLog("hist_" + p.user, {id: id, amount: p.amount, status: "paid", at: new Date().toISOString()}, 50)
try {
  Api.sendMessage({chat_id: parseInt(p.user), parse_mode: "HTML",
    text: card("🎉 PAYOUT APPROVED", "💵 <b>" + money(p.amount) + "</b>\n📱 <b>" + p.method + "</b>\n🔢 <code>" + p.account + "</code>\n🔖 <code>" + id + "</code>\n\nMoney is on the way ✅")})
} catch(e){}
Bot.runCommand("/pay_view")
