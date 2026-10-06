/*CMD
  command: /a_prompt
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
var f = String(User.getProperty("adm_field") || "")
var m = {
  REF: ["💰 Referral Reward", "Send the new reward per referral in BDT.\n<i>Example: 5</i>"],
  AD: ["🎬 Ad Reward", "Send the new reward per completed ad in BDT.\n<i>Example: 0.50</i>"],
  MIN: ["🏦 Minimum Withdraw", "Send the new minimum withdrawal in BDT.\n<i>Example: 100</i>"],
  DAILY: ["📊 Daily Ad Limit", "Send the max ads per user per day.\n<i>Example: 15</i>"],
  COOL: ["⏱ Ad Cooldown", "Send the seconds between two ads.\n<i>Example: 30</i>"],
  RULE: ["🎯 Verify Rule", "Who earns the referral?\n\n<code>start</code> — when friend starts the bot\n<code>channel</code> — when friend joins channel\n<code>purchase</code> — when friend buys"],
  CHAN: ["📢 Force-Join Channel", "Send the channel @username or -100 ID.\nSend <code>none</code> to disable."],
  SUP: ["📞 Support Contact", "Send your support username.\n<i>Example: @mysupport</i>"],
  BRAND: ["🏷️ Brand Name", "Send the bot's brand name.\n<i>Example: ReferEarn BD</i>"],
  BLOCK: ["📡 Adsgram Block ID", "Send your Adsgram block id.\nSend <code>none</code> to clear."],
  ZONE: ["📡 Monetag Zone ID", "Send your Monetag zone id.\nSend <code>none</code> to clear."],
  MAINTMSG: ["🔧 Maintenance Message", "Send the message users see during maintenance."]
}
if(!m[f]){ return Bot.runCommand("/a_set") }
User.setProperty("adm_flow", "edit", "string")
admEdit(card("✏️ " + m[f][0], m[f][1] + "\n\n<i>Send cancel to abort.</i>"), backRow())
Bot.runCommand("/a_input")
