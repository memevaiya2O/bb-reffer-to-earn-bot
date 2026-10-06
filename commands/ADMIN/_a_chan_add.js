/*CMD
  command: /a_chan_add
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
User.setProperty("adm_flow", "addchan", "string")
admEdit(card("➕ ADD CHANNEL",
  "Send the channel <b>@username</b> or <b>-100…</b> ID.\n" +
  "Optionally add a name after a space.\n\n" +
  "Examples:\n<code>@mychannel</code>\n<code>@mychannel My Channel</code>\n" +
  "<code>-1001234567890</code>\n<code>https://t.me/+AbCdEf Invite</code>\n\n" +
  "<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
