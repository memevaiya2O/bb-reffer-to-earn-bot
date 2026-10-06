/*CMD
  command: /ban_view
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
var a = banList()
if(a.length === 0){
  return admEdit(card("🚫 BANS", "✅ No banned users.\n\nBan users from their profile in 👥 Users."),
    [[btn("👥 Users", "/a_users")], backRow()[0]])
}
var i = parseInt(User.getProperty("ban_idx") || 0)
if(i >= a.length){ i = a.length - 1 }
if(i < 0){ i = 0 }
User.setProperty("ban_idx", i, "integer")
User.setProperty("ban_cur", String(a[i]), "string")
admEdit(card("🚫 BANNED USERS  " + (i + 1) + "/" + a.length,
  "🆔 <code>" + a[i] + "</code>\n💰 Balance: <b>" + money(bal(a[i])) + "</b>\n\n" +
  "This user cannot use the bot."),
  [
    [btn("✅ Unban This User", "/ban_do")],
    [btn("◀️", "/ban_prev"), btn("🔄", "/ban_view"), btn("▶️", "/ban_next")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
