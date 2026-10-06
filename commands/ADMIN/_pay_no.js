/*CMD
  command: /pay_no
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
User.setProperty("adm_flow", "reject", "string")
admEdit(card("❌ REJECT PAYOUT", "Send the reason for rejection.\nThe amount will be refunded to the user.\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
