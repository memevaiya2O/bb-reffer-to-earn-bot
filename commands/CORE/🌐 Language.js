/*CMD
  command: 🌐 Language
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
send(card("🌐 " + T.en.lang_t + "  /  " + T.bn.lang_t,
  T.en.lang_s + "\n" + T.bn.lang_s + "\n\n" + t("lang_pick")), kbLang())
