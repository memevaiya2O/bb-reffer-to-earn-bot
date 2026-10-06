/*CMD
  command: adsApp
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
var uid = String((options && options.uid) || (user ? user.telegramid : ""))
if(uid === "" || uid === "undefined"){ uid = String(Bot.getProperty("cfg_last_uid") || "") }
var token = Math.random().toString(36).substring(2, 12) + new Date().getTime().toString(36)
Bot.setProperty("adtok_" + token, {t: uid, exp: new Date().getTime() + 900000}, "json")
var hook = ""
try { hook = Libs.Webhooks.getUrlFor({command: "/adReward_k9Xq2", user_id: user.id}) } catch(e){
  hook = Libs.Webhooks.getUrlFor({command: "/adReward_k9Xq2"})
}
var b = Math.round(parseFloat(Bot.getProperty("bal_" + uid) || 0) * 100) / 100
var used = parseInt(Bot.getProperty("adcount_" + uid + "_" + today()) || 0)
var dlm = cig("daily_ad_limit", 15)
var left = dlm - used
if(left < 0){ left = 0 }
var html = String(Bot.getProperty("webapp_html") || "")
html = html.split("__TOKEN__").join(token)
html = html.split("__HOOK__").join(hook)
html = html.split("__REWARD__").join(money(cfn("ad_reward", 0.5)))
html = html.split("__BLOCK__").join(String(cfg("adsgram_block", "")))
html = html.split("__ZONE__").join(String(cfg("monetag_zone", "")))
html = html.split("__NET__").join(String(cfg("ads_network", "adsgram")))
html = html.split("__LEFT__").join(String(left))
html = html.split("__BAL__").join(money(b))
html = html.split("__TOTAL__").join(String(dlm))
html = html.split("__LANG__").join(LANG)
html = html.split("__BOTU__").join(BOTU)
WebApp.render({content: html})
