/*CMD
  command: /bonus_give
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var amt = parseFloat((options && options.amount) || 0)
if(!amt || amt <= 0){ return }
credit(TG, amt)
Bot.setProperty("stat_bonus", Math.round((parseFloat(Bot.getProperty("stat_bonus") || 0) + amt) * 100) / 100, "float")
try {
  Api.sendMessage({parse_mode: "HTML",
    text: card("🎁 BONUS RECEIVED", "You got <b>" + money(amt) + "</b> bonus!\n💼 Balance: <b>" + money(bal(TG)) + "</b>")})
} catch(e){}
