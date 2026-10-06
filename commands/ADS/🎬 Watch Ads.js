/*CMD
  command: 🎬 Watch Ads
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADS

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
if(!on("ads")){ return send(card("🎬", t("off_ads")), kbUser()) }
var url = WebApp.getUrl({command: "adsApp", options: {uid: TG}})
sendI(card("🎬 " + t("ads_t"),
  "💰 " + t("adreward") + " : <b>" + money(cfn("ad_reward", 0.5)) + "</b>\n" +
  "📊 " + t("adleft") + " : <b>" + adsLeft() + "/" + dlim() + "</b>\n" +
  "⏱ " + t("cool") + " : <b>" + cig("ad_cooldown", 30) + "s</b>\n" +
  "💼 " + t("rbal") + " : <b>" + money(bal(TG)) + "</b>\n\n" + t("ads_l")),
  [[{text: t("openapp"), web_app: {url: url}}]])
