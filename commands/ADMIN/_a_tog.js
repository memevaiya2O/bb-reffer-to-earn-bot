/*CMD
  command: /a_tog
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
// Created by Infinity Codex | https://t.me/infinity_codex
if(!IS_ADMIN){ return }
admEdit(card("🎬 SYSTEM TOGGLES", "Tap any system to switch it on or off."),
  [
    [btn("🔧 Maintenance: " + (cbl("maint", false) ? "🟢 ON" : "🔴 OFF"), "/t_maint")],
    [btn("🎬 Ads: " + (on("ads") ? "🟢 ON" : "🔴 OFF"), "/t_ads")],
    [btn("🔗 Referral: " + (on("ref") ? "🟢 ON" : "🔴 OFF"), "/t_ref")],
    [btn("💸 Withdraw: " + (on("payout") ? "🟢 ON" : "🔴 OFF"), "/t_payout")],
    [btn("📢 Force Join: " + (fjOn() ? "🟢 ON" : "🔴 OFF"), "/a_chan_tog")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
