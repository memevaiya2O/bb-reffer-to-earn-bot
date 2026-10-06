/*CMD
  command: /t_payout
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
Bot.setProperty("cfg_payout_on", cbl("payout_on", true) ? 0 : 1, "integer")
Bot.runCommand("/a_tog")
