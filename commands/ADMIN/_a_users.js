/*CMD
  command: /a_users
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
admEdit(card("👥 USER MANAGEMENT",
  "🔍 <b>Lookup</b> — find any user by Telegram ID\n" +
  "📋 <b>Recent</b> — last 25 users who started the bot\n\n" +
  "Total users: <b>" + n(Bot.getProperty("stat_users")) + "</b>"),
  [
    [btn("🔍 Lookup by ID", "/a_lookup"), btn("📋 Recent Users", "/a_recent")],
    [btn("🚫 Bans", "/a_bans"), btn("⬅️ Back to Panel", "/a_hub")]
  ])
