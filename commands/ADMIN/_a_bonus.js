/*CMD
  command: /a_bonus
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
if(!IS_ADMIN){ return }
admEdit(card("🎁 BONUS SYSTEM",
  "Give bonus BDT to a single user or to everyone.\n\n" +
  "🎁 Total bonuses given: <b>" + money(Bot.getProperty("stat_bonus")) + "</b>"),
  [
    [btn("👤 Single User", "/bonus_one"), btn("👥 All Users", "/bonus_all")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
