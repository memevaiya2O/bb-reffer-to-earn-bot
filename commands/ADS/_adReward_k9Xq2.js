/*CMD
  command: /adReward_k9Xq2
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
var data = {}
try { data = JSON.parse(content) } catch(e){ data = {} }
var token = String(data.token || "")
var rec = null
if(token !== ""){ rec = Bot.getProperty("adtok_" + token) }
if(!rec){ return }
var uid = String(rec.t)
if(new Date().getTime() > parseInt(rec.exp)){ Bot.deleteProperty("adtok_" + token); return }
var cd = cig("ad_cooldown", 30) * 1000
var last = parseFloat(Bot.getProperty("adlast_" + uid) || 0)
var now = new Date().getTime()
if(now - last < cd){ return }
var used = parseInt(Bot.getProperty("adcount_" + uid + "_" + today()) || 0)
if(used >= cig("daily_ad_limit", 15)){ return }
var amt = cfn("ad_reward", 0.5)
credit(uid, amt)
Bot.deleteProperty("adtok_" + token)
Bot.setProperty("adlast_" + uid, now, "float")
Bot.setProperty("adcount_" + uid + "_" + today(), used + 1, "integer")
Bot.setProperty("adearn_" + uid, Math.round((parseFloat(Bot.getProperty("adearn_" + uid) || 0) + amt) * 100) / 100, "float")
Bot.setProperty("stat_ads", parseInt(Bot.getProperty("stat_ads") || 0) + 1, "integer")
Bot.setProperty("stat_adpay", Math.round((parseFloat(Bot.getProperty("stat_adpay") || 0) + amt) * 100) / 100, "float")
bump("ads", 1)
pushLog("adlog_" + uid, {a: amt, at: new Date().toISOString()}, 60)
try {
  Api.sendMessage({chat_id: parseInt(uid), parse_mode: "HTML",
    text: card("✅ REWARD CREDITED", "🎬 +" + money(amt) + "\n💼 Balance: <b>" + money(bal(uid)) + "</b>\n📊 Today: <b>" + (used + 1) + "/" + cig("daily_ad_limit", 15) + "</b>")})
} catch(e){}
