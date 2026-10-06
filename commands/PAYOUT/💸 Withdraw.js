/*CMD
  command: 💸 Withdraw
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
if(!on("payout")){ return send(card("💸", t("off_pay")), kbUser()) }
var b = bal(TG)
var mn = cfn("min_withdraw", 100)
var body = "💼 " + t("rbal") + " : <b>" + money(b) + "</b>\n🏦 " + t("minw") + " : <b>" + money(mn) +
  "</b>\n📱 " + t("methods") + " : <b>bKash / Nagad</b>\n⏱ " + t("proc")
if(b < mn){
  return send(card("💸 " + t("wd_t"), body + "\n\n❌ " + t("needmin") + " <b>" + money(mn) + "</b>"), kbUser())
}
send(card("💸 " + t("wd_t"), body + "\n\n" + t("choose")), kbPay())
