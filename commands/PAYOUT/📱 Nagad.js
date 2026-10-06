/*CMD
  command: 📱 Nagad
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
User.setProperty("w_method", "Nagad", "string")
send(card(methLabel("Nagad"),
  t("bal_t2") + " <b>" + money(bal(TG)) + "</b>\n" +
  t("minw") + " <b>" + money(cfn("min_withdraw", 100)) + "</b>\n\n" +
  t("amt_t") + "\n<i>" + t("amt_e") + "</i>\n\n⏱ " + t("proc")), kbCancel())
Bot.runCommand("/w_amount")

