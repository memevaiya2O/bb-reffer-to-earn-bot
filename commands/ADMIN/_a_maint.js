/*CMD
  command: /a_maint
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
admEdit(card("🔧 MAINTENANCE MODE",
  "Status  : <b>" + (cbl("maint", false) ? "🟢 ON" : "🔴 OFF") + "</b>\n" +
  "Message :\n<i>" + (String(cfg("maint_msg", "")) || "We are upgrading the system. Please try again shortly.") + "</i>\n\n" +
  "When ON, only admins can use the bot."),
  [
    [btn((cbl("maint", false) ? "🟢 Turn OFF" : "🔴 Turn ON"), "/t_maint")],
    [btn("✏️ Edit Message", "/e_maintmsg")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
