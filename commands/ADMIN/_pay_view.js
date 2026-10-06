/*CMD
  command: /pay_view
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
var pend = Bot.getProperty("pay_pending")
if(!(pend instanceof Array)){ pend = [] }
if(pend.length === 0){
  return admEdit(card("💸 PAYOUTS", "✅ No pending withdrawal requests.\n\nAll caught up!"),
    [[btn("🔄 Refresh", "/pay_view"), btn("🧾 Payout Log", "/a_paylog")], backRow()[0]])
}
var i = parseInt(User.getProperty("pay_idx") || 0)
if(i >= pend.length){ i = pend.length - 1 }
if(i < 0){ i = 0 }
User.setProperty("pay_idx", i, "integer")
var id = String(pend[i])
User.setProperty("pay_cur", id, "string")
var p = Bot.getProperty("pay_" + id) || {}
admEdit(card("💸 PAYOUT  " + (i + 1) + "/" + pend.length,
  "🔖 <code>" + id + "</code>\n👤 <code>" + String(p.user || "?") + "</code>\n" +
  "💵 <b>" + money(p.amount || 0) + "</b>\n📱 <b>" + String(p.method || "?") + "</b>\n" +
  "🔢 <code>" + String(p.account || "?") + "</code>\n🕐 " + String(p.at || "?")),
  [
    [btn("✅ APPROVE", "/pay_ok"), btn("❌ REJECT", "/pay_no")],
    [btn("◀️", "/pay_prev"), btn("🔄", "/pay_view"), btn("▶️", "/pay_next")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
