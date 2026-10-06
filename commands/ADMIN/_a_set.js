/*CMD
  command: /a_set
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
admEdit(card("⚙️ EARNING SETTINGS",
  "💰 Referral reward : <b>" + money(cfn("referral_reward", 5)) + "</b>\n" +
  "🎬 Ad reward       : <b>" + money(cfn("ad_reward", 0.5)) + "</b>\n" +
  "🏦 Min withdraw    : <b>" + money(cfn("min_withdraw", 100)) + "</b>\n" +
  "📊 Daily ad limit  : <b>" + dlim() + "</b>\n" +
  "⏱ Ad cooldown     : <b>" + cig("ad_cooldown", 30) + "s</b>\n" +
  "🎯 Verify rule     : <b>" + String(cfg("verify_rule", "start")) + "</b>\n\n" +
  "<i>Tap any value to edit it.</i>"),
  [
    [btn("💰 Referral Reward", "/e_ref"), btn("🎬 Ad Reward", "/e_ad")],
    [btn("🏦 Min Withdraw", "/e_min"), btn("📊 Daily Ads", "/e_daily")],
    [btn("⏱ Cooldown", "/e_cool"), btn("🎯 Verify Rule", "/e_rule")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
