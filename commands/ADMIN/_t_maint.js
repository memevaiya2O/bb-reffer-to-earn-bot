/*CMD
  command: /t_maint
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
Bot.setProperty("cfg_maint_on", cbl("maint_on", true) ? 0 : 1, "integer")
Bot.runCommand("/a_tog")
