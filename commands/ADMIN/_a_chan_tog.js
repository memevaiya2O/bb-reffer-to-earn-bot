/*CMD
  command: /a_chan_tog
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
Bot.setProperty("cfg_forcejoin_on", cbl("forcejoin_on", true) ? 0 : 1, "integer")
Bot.runCommand("/a_chan_view")
