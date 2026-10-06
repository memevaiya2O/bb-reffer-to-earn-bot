/*CMD
  command: ✅ Confirm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: PAYOUT

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var amt = parseFloat(User.getProperty("w_amount") || 0)
var meth = methLabel(User.getProperty("w_method") || "bKash")
var acc = String(User.getProperty("w_account") || "")
if(!amt || !acc){ return Bot.runCommand("🏠 Main Menu") }
if(!on("payout")){ return send(card("💸", t("off_pay")), kbUser()) }
if(amt > bal(TG)){ return send(card("❌", t("notenough")), kbUser()) }
debit(TG, amt)
var id = "WD" + new Date().getTime().toString().substring(5)
Bot.setProperty("pay_" + id, {id: id, user: TG, amount: amt, method: meth, account: acc, status: "pending", at: new Date().toLocaleString()}, "json")
var pend = Bot.getProperty("pay_pending")
if(!(pend instanceof Array)){ pend = [] }
pend.push(id)
Bot.setProperty("pay_pending", pend, "json")
pushLog("hist_" + TG, {id: id, amount: amt, status: "pending", at: new Date().toISOString()}, 50)
User.setProperty("w_amount", 0, "float")
User.setProperty("w_account", "", "string")
try {
  Api.sendMessage({chat_id: parseInt(String(cfg("admin_id", "")) || "0"), parse_mode: "HTML",
    text: card("🔔 NEW WITHDRAWAL",
      "🔖 <code>" + id + "</code>\n👤 <code>" + TG + "</code>\n💵 <b>" + money(amt) + "</b>\n📱 <b>" + meth + "</b>\n🔢 <code>" + acc + "</code>"),
    reply_markup: JSON.stringify({inline_keyboard: [[{text: "💸 Open Payouts", callback_data: "/a_pay"}]]})})
} catch(e){}
send(card("✅ " + t("done_t"),
  "🔖 <code>" + id + "</code>\n💵 <b>" + money(amt) + "</b>\n📱 <b>" + meth + "</b>\n🔢 <code>" + acc +
  "</code>\n\n⏱ " + t("proc")), kbUser())
