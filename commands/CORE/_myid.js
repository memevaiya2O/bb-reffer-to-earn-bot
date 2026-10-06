/*CMD
  command: /myid
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
Api.sendMessage({parse_mode: "HTML", text: "🆔 <code>" + user.telegramid + "</code>"})
