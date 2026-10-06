/*CMD
  command: *
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
if(chat && chat.chat_type !== "private"){ return }
if(((message || "").trim()) === ""){ return }
send(card("🤔", "I didn't understand that.\n" + t("menu_s")), kbUser())
