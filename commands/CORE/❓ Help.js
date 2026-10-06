/*CMD
  command: ❓ Help
  help: 
  need_reply: false
  auto_retry_time: 
  folder: CORE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
send(card("❓ " + t("help_t"),
  "🎬 <b>" + t("ads_t") + "</b>\n" + t("ads_l") + "\n" + t("adreward") + ": <b>" + money(cfn("ad_reward", 0.5)) +
  "</b>\n" + t("adleft") + ": <b>" + dlim() + "</b>\n\n" +
  "🔗 <b>" + t("ref_t") + "</b>\n" + t("ref_l") + "\n<b>" + money(cfn("referral_reward", 5)) + "</b> per referral\n\n" +
  "💸 <b>" + t("wd_t") + "</b>\n" + t("minw") + ": <b>" + money(cfn("min_withdraw", 100)) + "</b>\n" + t("proc") + "\n\n" +
  "📞 " + t("support") + ": " + (String(cfg("support", "")) || "—")), kbUser())
