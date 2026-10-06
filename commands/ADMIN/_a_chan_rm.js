/*CMD
  command: /a_chan_rm
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
var list = chList()
var i = parseInt(User.getProperty("chan_idx") || 0)
if(i < 0 || i >= list.length){ return Bot.runCommand("/a_chan_view") }
list.splice(i, 1)
chSave(list)
Bot.runCommand("/a_chan_view")
