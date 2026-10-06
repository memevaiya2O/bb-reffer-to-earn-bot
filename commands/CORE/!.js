/*CMD
  command: !
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
try {
  var aid = String(Bot.getProperty("cfg_admin_id") || "")
  if(aid){ Api.sendMessage({chat_id: parseInt(aid), parse_mode: "HTML",
    text: "⚠️ <b>BOT ERROR</b>\n👤 <code>" + (user ? user.telegramid : "?") + "</code>\n⚙️ <code>" + (command ? command.name : "?") + "</code>"}) }
} catch(e){}
Api.sendMessage({parse_mode: "HTML", text: card("⚠️ " + t("err_t"), t("err_s"))})
