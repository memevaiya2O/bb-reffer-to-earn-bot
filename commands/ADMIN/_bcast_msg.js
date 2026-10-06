/*CMD
  command: /bcast_msg
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
var t2 = (options && options.text) ? String(options.text) : ""
if(t2 === ""){ return }
Api.sendMessage({parse_mode: "HTML", text: card("📣 ANNOUNCEMENT", t2)})
