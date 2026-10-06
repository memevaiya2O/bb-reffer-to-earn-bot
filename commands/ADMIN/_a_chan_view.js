/*CMD
  command: /a_chan_view
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
var list = chList()
var head = "📢 <b>FORCE-JOIN CHANNELS</b>\n" + DIV + "\n" +
  "Status : <b>" + (fjOn() ? "🟢 ON" : "🔴 OFF") + "</b>\n" +
  "Count  : <b>" + list.length + "</b> channel(s)\n" + DIV
if(list.length === 0){
  return admEdit(head + "\n<i>No channels yet.</i>\n\nUsers are not gated when the list is empty.",
    [
      [btn("➕ Add Channel", "/a_chan_add")],
      [btn((fjOn() ? "🔴 Turn OFF" : "🟢 Turn ON"), "/a_chan_tog")],
      [btn("⬅️ Back to Panel", "/a_hub")]
    ])
}
var i = parseInt(User.getProperty("chan_idx") || 0)
if(i >= list.length){ i = list.length - 1 }
if(i < 0){ i = 0 }
User.setProperty("chan_idx", i, "integer")
var c = list[i]
admEdit(head + "\n" +
  "📢 <b>" + chLabel(c) + "</b>\n" +
  "🆔 <code>" + String(c.id || "") + "</code>\n" +
  "🔗 " + chURL(c.id) + "\n" + DIV + "\n" +
  "<i>" + (i + 1) + " of " + list.length + "</i>",
  [
    [btn("🗑 Remove This", "/a_chan_rm"), btn("➕ Add Channel", "/a_chan_add")],
    [btn("◀️", "/a_chan_prev"), btn("🔄", "/a_chan_view"), btn("▶️", "/a_chan_next")],
    [btn((fjOn() ? "🔴 Turn OFF" : "🟢 Turn ON"), "/a_chan_tog"), btn("🗑 Clear All", "/a_chan_clear")],
    [btn("⬅️ Back to Panel", "/a_hub")]
  ])
