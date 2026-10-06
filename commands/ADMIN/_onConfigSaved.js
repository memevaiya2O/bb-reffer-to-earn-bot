/*CMD
  command: /onConfigSaved
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
var map = {
  ADMIN_ID: ["admin_id", "string"], BRAND_NAME: ["brand_name", "string"], SUPPORT: ["support", "string"],
  MAINTENANCE_MODE: ["maint", "integer"], MAINTENANCE_MSG: ["maint_msg", "string"],
  REFERRAL_REWARD: ["referral_reward", "float"], AD_REWARD: ["ad_reward", "float"],
  MIN_WITHDRAW: ["min_withdraw", "float"], DAILY_AD_LIMIT: ["daily_ad_limit", "integer"],
  AD_COOLDOWN: ["ad_cooldown", "integer"], VERIFY_RULE: ["verify_rule", "string"],
  ADS_NETWORK: ["ads_network", "string"], ADSGRAM_BLOCK: ["adsgram_block", "string"],
  MONETAG_ZONE: ["monetag_zone", "string"], S2S_SECRET: ["s2s_secret", "string"]
}
var pn = ["CoreConfig", "EarnConfig", "AdNetwork"]
for(var pi = 0; pi < pn.length; pi++){
  try {
    var vv = AdminPanel.getPanelValues(pn[pi])
    for(var k in map){
      if(vv && vv[k] !== undefined && vv[k] !== null){
        var val = vv[k]
        if(map[k][1] === "integer"){ val = val ? 1 : 0 }
        Bot.setProperty("cfg_" + map[k][0], val, map[k][1])
      }
    }
  } catch(e){}
}
Api.sendMessage({parse_mode: "HTML", text: "✅ Configuration saved and applied."})
