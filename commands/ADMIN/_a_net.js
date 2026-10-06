/*CMD
  command: /a_net
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
admEdit(card("📡 AD NETWORK",
  "📡 Network       : <b>" + String(cfg("ads_network", "adsgram")) + "</b>\n" +
  "🎯 Adsgram block : <b>" + (String(cfg("adsgram_block", "")) || "not set") + "</b>\n" +
  "🎯 Monetag zone  : <b>" + (String(cfg("monetag_zone", "")) || "not set") + "</b>\n\n" +
  "🔒 Rewards are credited server-side only.\nOne-time token • cooldown • daily cap."),
  [
    [btn("🔀 Switch Network", "/net_switch")],
    [btn("📡 Adsgram Block", "/e_block"), btn("📡 Monetag Zone", "/e_zone")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
