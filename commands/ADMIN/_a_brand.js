/*CMD
  command: /a_brand
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
admEdit(card("🏷️ BRANDING",
  "🏷️ Brand name : <b>" + String(cfg("brand_name", "ReferEarn BD")) + "</b>\n" +
  "📞 Support    : <b>" + (String(cfg("support", "")) || "not set") + "</b>\n" +
  "📢 Channel    : <b>" + (String(cfg("channel", "")) || "not set") + "</b>\n" +
  "🤖 Bot        : <b>@" + BOTU + "</b>"),
  [
    [btn("🏷️ Brand Name", "/e_brand"), btn("📞 Support", "/e_sup")],
    [btn("📢 Channel", "/e_chan")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
