/*CMD
  command: /w_amount
  help: 
  need_reply: true
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
var v = (message || "").trim()
if(v.toLowerCase() === "cancel"){ return Bot.runCommand("🏠 Main Menu") }
var amt = parseFloat(v)
var mn = cfn("min_withdraw", 100)
if(isNaN(amt) || amt <= 0){ return send(card("❌", t("inv_amt")), kbCancel()) }
if(amt < mn){ return send(card("❌", t("needmin") + " <b>" + money(mn) + "</b>"), kbCancel()) }
if(amt > bal(TG)){ return send(card("❌", t("notenough") + "\n💼 " + money(bal(TG))), kbCancel()) }
User.setProperty("w_amount", amt, "float")
send(card("💳 " + methLabel(User.getProperty("w_method") || "bKash"),
  t("acc_t") + "\n<i>" + t("acc_e") + "</i>"), kbCancel())
Bot.runCommand("/w_account")
