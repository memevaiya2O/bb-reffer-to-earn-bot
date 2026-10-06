/*CMD
  command: /w_account
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
if(v.length < 6 || v.length > 30){ return send(card("❌", t("inv_acct")), kbCancel()) }
User.setProperty("w_account", v, "string")
var amt = parseFloat(User.getProperty("w_amount") || 0)
send(card("⚠️ " + t("conf_t"),
  "💵 <b>" + money(amt) + "</b>\n📱 <b>" + methLabel(User.getProperty("w_method") || "bKash") +
  "</b>\n🔢 <code>" + v + "</code>\n\n" + t("wconf")), kbYes())
