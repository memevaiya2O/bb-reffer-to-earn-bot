/*CMD
  command: /t_ads
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
Bot.setProperty("cfg_ads_on", cbl("ads_on", true) ? 0 : 1, "integer")
Bot.runCommand("/a_tog")
