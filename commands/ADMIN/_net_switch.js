/*CMD
  command: /net_switch
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
var cur = String(cfg("ads_network", "adsgram"))
var nxt = (cur === "adsgram") ? "monetag" : ((cur === "monetag") ? "adsboth" : "adsgram")
Bot.setProperty("cfg_ads_network", nxt, "string")
Bot.runCommand("/a_net")
