/*CMD
  command: 👑 Admin Panel
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
if(!IS_ADMIN){ return send(card("🚫", t("noperm")), kbUser()) }
User.setProperty("adm_mid", 0, "integer")
Bot.runCommand("/admin")
