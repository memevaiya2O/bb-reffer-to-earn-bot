/*CMD
  command: /config
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
AdminPanel.setPanel({panel_name: "CoreConfig", data: {
  title: "ReferEarn BD — Core", description: "Main bot settings", index: 0, icon: "settings", button_title: "SAVE",
  on_saving: {command: "/onConfigSaved", user_id: user.id},
  fields: [
    {name: "ADMIN_ID", title: "Admin Telegram ID", type: "string", description: "Get via /myid"},
    {name: "BRAND_NAME", title: "Brand Name", type: "string", value: "ReferEarn BD"},
    {name: "SUPPORT", title: "Support Contact", type: "string"},
    {name: "MAINTENANCE_MODE", title: "Maintenance Mode", type: "checkbox", value: false},
    {name: "MAINTENANCE_MSG", title: "Maintenance Message", type: "text"}
  ]
}})
AdminPanel.setPanel({panel_name: "EarnConfig", data: {
  title: "Earnings & Payout", description: "Reward and withdrawal rules", index: 1, icon: "cash", button_title: "SAVE",
  on_saving: {command: "/onConfigSaved", user_id: user.id},
  fields: [
    {name: "REFERRAL_REWARD", title: "Referral Reward (BDT)", type: "float", value: 5},
    {name: "AD_REWARD", title: "Ad Reward (BDT)", type: "float", value: 0.5},
    {name: "MIN_WITHDRAW", title: "Min Withdraw (BDT)", type: "float", value: 100},
    {name: "DAILY_AD_LIMIT", title: "Daily Ad Limit", type: "integer", value: 15},
    {name: "AD_COOLDOWN", title: "Ad Cooldown (sec)", type: "integer", value: 30},
    {name: "VERIFY_RULE", title: "Verify Rule", type: "string", value: "start"}
  ]
}})
AdminPanel.setPanel({panel_name: "AdNetwork", data: {
  title: "Ad Network", description: "Adsgram / Monetag setup", index: 2, icon: "megaphone", button_title: "SAVE",
  on_saving: {command: "/onConfigSaved", user_id: user.id},
  fields: [
    {name: "ADS_NETWORK", title: "Network", type: "string", value: "adsgram"},
    {name: "ADSGRAM_BLOCK", title: "Adsgram Block ID", type: "string"},
    {name: "MONETAG_ZONE", title: "Monetag Zone ID", type: "string"},
    {name: "S2S_SECRET", title: "S2S Secret", type: "password"}
  ]
}})
Api.sendMessage({parse_mode: "HTML", text: card("✅ PANELS CREATED", "Open the Bots.Business app to view:\n• CoreConfig\n• EarnConfig\n• AdNetwork")})
