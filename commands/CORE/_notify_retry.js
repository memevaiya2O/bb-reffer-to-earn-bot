/*CMD
  command: /notify_retry
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
var b = (options && options.bb_options) ? options.bb_options : {}
if(!b.to || !b.text){ return }
try {
  Bot.sendMessageToChatWithId(parseInt(b.to), String(b.text), {parse_mode: "HTML"})
  Bot.setProperty("stat_notify_rescued", parseInt(Bot.getProperty("stat_notify_rescued") || 0) + 1, "integer")
} catch(e){
  Bot.setProperty("stat_notify_fail", parseInt(Bot.getProperty("stat_notify_fail") || 0) + 1, "integer")
}
