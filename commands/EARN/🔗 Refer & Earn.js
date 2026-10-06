/*CMD
  command: 🔗 Refer & Earn
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
if(!on("ref")){ return send(card("🔗", t("off_ref")), kbUser()) }
var cnt = parseInt(Bot.getProperty("refs_" + TG) || 0)
var lk = link()
sendI(card("🔗 " + t("ref_t"),
  "💰 <b>" + money(cfn("referral_reward", 5)) + "</b> " + t("earned") + " / " + t("invite") + "\n\n" +
  "👥 <b>" + cnt + "</b> " + t("invite") + "\n" +
  "💵 <b>" + money(parseFloat(Bot.getProperty("refearn_" + TG) || 0)) + "</b> " + t("earned") + "\n\n" +
  "🔗 <b>" + t("yourlink") + "</b>\n<code>" + lk + "</code>\n<i>" + t("copy") + "</i>"),
  [[{text: t("share"), url: "https://t.me/share/url?url=" + encodeURIComponent(lk) +
     "&text=" + encodeURIComponent(t("share_t"))}]])
