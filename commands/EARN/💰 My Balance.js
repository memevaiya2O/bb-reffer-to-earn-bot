/*CMD
  command: 💰 My Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: EARN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var re = parseFloat(Bot.getProperty("refearn_" + TG) || 0)
var ae = parseFloat(Bot.getProperty("adearn_" + TG) || 0)
send(card("💰 " + t("bal_t"),
  "💵 <b>" + t("rbal") + "</b>\n<code>" + money(bal(TG)) + "</code>\n\n" +
  "🔗 " + t("refearn") + " : <b>" + money(re) + "</b>\n" +
  "🎬 " + t("adearn") + " : <b>" + money(ae) + "</b>\n" +
  "📈 " + t("life") + " : <b>" + money(re + ae) + "</b>\n\n" +
  "🏦 " + t("minw") + " : <b>" + money(cfn("min_withdraw", 100)) + "</b>"), kbUser())
