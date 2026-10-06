/*CMD
  command: @
  help: 
  need_reply: false
  auto_retry_time: 
  folder: CORE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Created by Infinity Codex | https://t.me/infinity_codex
var TG = (user ? String(user.telegramid) : "")
var ADMIN_ID = String(Bot.getProperty("cfg_admin_id") || "")
var IS_ADMIN = (ADMIN_ID !== "" && TG === ADMIN_ID)
var BOTU = String(bot.name || "")
var LANG = "en"
try { if(user){ LANG = String(User.getProperty("lang") || "en") } } catch(e){ LANG = "en" }
var DIV = "━━━━━━━━━━━━━━━━━━━━"

function truthy(v){ return (v === true || v === 1 || v === "1" || v === "true") }
function cfg(k, d){ var v = Bot.getProperty("cfg_" + k); if(v === null || v === undefined || v === ""){ return d } return v }
function cfn(k, d){ return parseFloat(cfg(k, d)) }
function cig(k, d){ return parseInt(cfg(k, d)) }
function cbl(k, d){ return truthy(cfg(k, d)) }
function on(k){ return cbl(k + "_on", true) }
function money(v){ var x = Math.round(parseFloat(v || 0) * 100) / 100; return "\u09F3" + x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
function n(v){ var x = parseInt(v || 0); return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
function bal(t){ return Math.round(parseFloat(Bot.getProperty("bal_" + t) || 0) * 100) / 100 }
function credit(t, a){
  var v = Math.round((bal(t) + parseFloat(a)) * 100) / 100
  Bot.setProperty("bal_" + t, v, "float")
  Bot.setProperty("stat_credited", Math.round((parseFloat(Bot.getProperty("stat_credited") || 0) + parseFloat(a)) * 100) / 100, "float")
}
function debit(t, a){
  var v = Math.round((bal(t) - parseFloat(a)) * 100) / 100
  Bot.setProperty("bal_" + t, v, "float")
  Bot.setProperty("stat_debited", Math.round((parseFloat(Bot.getProperty("stat_debited") || 0) + parseFloat(a)) * 100) / 100, "float")
}
function btn(t, c){ return {text: t, callback_data: c} }
function card(title, body){ return "<b>" + title + "</b>\n" + DIV + "\n" + body + "\n" + DIV }
function rkm(rows){ return JSON.stringify({keyboard: rows, resize_keyboard: true, is_persistent: true}) }
function send(text, rows){ return Api.sendMessage({text: text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: rkm(rows)}) }
function sendI(text, rows){ Api.sendMessage({text: text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: JSON.stringify({inline_keyboard: rows})}) }
function today(){ var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() }
function pushLog(key, item, cap){ var a = Bot.getProperty(key) || []; if(!(a instanceof Array)){ a = [] } a.unshift(item); if(a.length > cap){ a = a.slice(0, cap) } Bot.setProperty(key, a, "json") }
function bump(k, v){
  var key = "day_" + k + "_" + today()
  var val = Math.round((parseFloat(Bot.getProperty(key) || 0) + parseFloat(v)) * 100) / 100
  Bot.setProperty(key, val, "float")
}
function dstat(k){ return parseFloat(Bot.getProperty("day_" + k + "_" + today()) || 0) }
function link(){ return "https://t.me/" + BOTU + "?start=ref_" + TG }

function admEdit(text, rows){
  var mid = parseInt(User.getProperty("adm_mid") || 0)
  var kb = JSON.stringify({inline_keyboard: rows})
  User.setProperty("adm_text", text, "text")
  User.setProperty("adm_kb", kb, "text")
  if(mid && chat){
    Api.editMessageText({chat_id: chat.chatid, message_id: mid, text: text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: kb, on_error: "/a_edit_fail"})
  } else if(mid){
    Api.editMessageText({message_id: mid, text: text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: kb, on_error: "/a_edit_fail"})
  } else {
    Api.sendMessage({text: text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: kb, on_error: "/a_edit_fail"})
  }
}
function backRow(){ return [[btn("⬅️ Back to Panel", "/a_hub")]] }
function hub(extra){
  var t = "👑 <b>ADMIN CONTROL PANEL</b>\n" + DIV + "\n" +
    "🤖 <b>" + String(cfg("brand_name", "ReferEarn BD")) + "</b>  •  @" + BOTU + "\n" +
    "🟢 Status: <b>Running</b>" + (cbl("maint", false) ? "  •  🔧 <b>MAINTENANCE</b>" : "") + "\n" + DIV + "\n" +
    "👥 Users <b>" + n(Bot.getProperty("stat_users")) + "</b>   " +
    "🔗 Refs <b>" + n(Bot.getProperty("stat_refs")) + "</b>   " +
    "🎬 Ads <b>" + n(Bot.getProperty("stat_ads")) + "</b>\n" +
    "💰 Paid <b>" + money(Bot.getProperty("stat_paid")) + "</b>   " +
    "⏳ Pending <b>" + penCount() + "</b>" + (extra ? "\n" + DIV + "\n" + extra : "") + "\n" + DIV
  return { text: t, rows: [
    [btn("📊 Statistics", "/a_stats"), btn("📈 Analytics", "/a_ana"), btn("💰 Economy", "/a_eco")],
    [btn("👥 Users", "/a_users"), btn("💸 Payouts", "/a_pay"), btn("🧾 Payout Log", "/a_paylog")],
    [btn("⚙️ Settings", "/a_set"), btn("🏷️ Branding", "/a_brand"), btn("🎁 Bonus", "/a_bonus")],
    [btn("📡 Ad Network", "/a_net"), btn("🎬 Toggles", "/a_tog"), btn("🔧 Maintenance", "/a_maint")],
    [btn("📢 Channels (" + chList().length + ")", "/a_chan"), btn("🚫 Bans", "/a_bans"), btn("📣 Broadcast", "/a_bcast")],
    [btn("🆔 Bot Info", "/a_info"), btn("🔄 Refresh", "/a_hub")]
  ] }
}
function penCount(){
  var p = Bot.getProperty("pay_pending") || []
  if(!(p instanceof Array)){ return 0 }
  return p.length
}
function banList(){
  var a = Bot.getProperty("ban_list")
  if(!(a instanceof Array)){ return [] }
  return a
}
function banAdd(id){
  var a = banList(), out = [], has = false
  for(var i = 0; i < a.length; i++){ out.push(String(a[i])); if(String(a[i]) === String(id)){ has = true } }
  if(!has){ out.unshift(String(id)) }
  Bot.setProperty("ban_list", out, "json")
}
function banDel(id){
  var a = banList(), out = []
  for(var i = 0; i < a.length; i++){ if(String(a[i]) !== String(id)){ out.push(String(a[i])) } }
  Bot.setProperty("ban_list", out, "json")
}
function addRecent(id, name){
  var a = Bot.getProperty("recent_users")
  if(!(a instanceof Array)){ a = [] }
  var out = [{id: String(id), name: name || ""}]
  for(var i = 0; i < a.length && out.length < 25; i++){
    if(String(a[i].id) !== String(id)){ out.push(a[i]) }
  }
  Bot.setProperty("recent_users", out, "json")
}

var L = {
 en: { ads:"🎬 Watch Ads", bal:"💰 My Balance", ref:"🔗 Refer & Earn", refs:"👥 My Referrals",
   top:"🏆 Leaderboard", hist:"📜 History", wd:"💸 Withdraw", adh:"📊 Ad History",
   help:"❓ Help", lang:"🌐 Language", adm:"👑 Admin Panel", menu:"🏠 Main Menu",
   ok:"✅ Confirm", no:"❌ Cancel", next:"Next ▶️", prev:"◀️ Previous",
   pay1:"📱 bKash", pay2:"📱 Nagad", unit:"refs", paid_w:"Paid" },
 bn: { ads:"🎬 বিজ্ঞাপন দেখুন", bal:"💰 আমার ব্যালেন্স", ref:"🔗 রেফার করে আয়", refs:"👥 আমার রেফারেল",
   top:"🏆 লিডারবোর্ড", hist:"📜 হিস্টোরি", wd:"💸 উইথড্র", adh:"📊 বিজ্ঞাপনের হিসাব",
   help:"❓ সাহায্য", lang:"🌐 ভাষা", adm:"👑 অ্যাডমিন প্যানেল", menu:"🏠 মেইন মেনু",
   ok:"✅ কনফার্ম", no:"❌ বাতিল", next:"পরবর্তী ▶️", prev:"◀️ আগের",
   pay1:"📱 বিকাশ", pay2:"📱 নগদ", unit:"জন", paid_w:"পরিশোধিত" }
}
var T = {
 en: { menu_t:"MAIN MENU", menu_s:"Choose an option below 👇",
  wel_t:"WELCOME", wel_s:"Earn real money on Telegram — free to join.",
  ads_l:"Watch a short ad and get paid instantly.", ref_l:"Invite friends — you earn on every one.",
  wd_l:"Cash out to bKash / Nagad within 24 hours.",
  bal_t:"MY WALLET", rbal:"Available Balance", refearn:"Referral Earnings", adearn:"Ad Earnings",
  life:"Lifetime Total", minw:"Minimum Withdraw",
  ref_t:"REFER & EARN", yourlink:"Your referral link", copy:"Tap to copy",
  invite:"invited so far", earned:"earned", share:"📤 Share with friends",
  refs_t:"MY REFERRALS", norefs:"No referrals yet.\nShare your link to start earning!",
  page:"Page", total:"Total", top_t:"TOP REFERRERS", notop:"No referrals yet — be the first!",
  hist_t:"PAYOUT HISTORY", nohist:"No transactions yet.",
  wd_t:"WITHDRAW MONEY", methods:"payment methods", proc:"Processed within 24 hours",
  wamt:"Send the amount in BDT", wacct:"Send your account number",
  wconf:"Please check the number carefully.\nWrong numbers cannot be refunded.",
  wdone:"REQUEST SUBMITTED", needmin:"You need at least",
  ads_t:"WATCH ADS & EARN", adreward:"Reward per ad", adleft:"Ads left today", cool:"Cooldown",
  openapp:"🚀 Open Ad App", adh_t:"AD EARNINGS", noads:"No ads watched yet.",
  help_t:"HOW IT WORKS", support:"Support",
  lang_t:"CHOOSE LANGUAGE", lang_s:"Select your preferred language:",
  noperm:"You don't have permission for that.", notenough:"Not enough balance.",
  choose:"Select payment method:", inv_amt:"Please send a valid amount.",
  inv_acct:"Please send a valid account number.", join_t:"JOIN REQUIRED",
  join_s:"Please join our channel first, then press Continue.", join_b:"📢 Join Channel",
  cont:"✅ Continue", off_ads:"Ads system is temporarily off.",
  off_ref:"Referral program is temporarily off.", off_pay:"Withdrawals are temporarily paused.",
  err_t:"ERROR", err_s:"Something went wrong.\nPlease try again in a moment.",
  share_t:"Earn real money on Telegram 💰", lang_done:"English selected.",
  lang_pick:"Tap a button below to switch language:",
  amt_t:"Send the amount in BDT", amt_e:"Example: 150",
  acc_t:"Send your account number", acc_e:"Example: 01712345678",
  conf_t:"CONFIRM WITHDRAWAL", done_t:"REQUEST SUBMITTED",
  ref_off:"Referral program is off.", min_t:"Minimum:", bal_t2:"Balance:",
  ref_hit_t:"NEW REFERRAL — YOU GOT PAID", ref_hit_s:"joined using your link",
  ref_you_earned:"You earned", ref_new_bal:"New balance", ref_total:"Total referrals",
  ref_btn:"👥 My Referrals", ref_link:"🔗 My Link",
  ref_linked_t:"REFERRAL CONFIRMED",
  ref_linked_s:"Your invite is registered. Your inviter just got a reward for bringing you here.",
  ref_pending_t:"REFERRAL PENDING",
  ref_pending_s:"Finish the verification to complete the referral." },
 bn: { menu_t:"মেইন মেনু", menu_s:"নিচের যেকোনো একটি অপশন বেছে নিন 👇",
  wel_t:"স্বাগতম", wel_s:"টেলিগ্রামে সত্যিকারের টাকা আয় করুন — সম্পূর্ণ ফ্রি।",
  ads_l:"ছোট একটা বিজ্ঞাপন দেখুন, সাথে সাথেই টাকা পান।", ref_l:"বন্ধুদের ইনভাইট করুন — প্রতিজন থেকে আয় করুন।",
  wd_l:"২৪ ঘণ্টার মধ্যে বিকাশ / নগদে টাকা নিন।",
  bal_t:"আমার ওয়ালেট", rbal:"বর্তমান ব্যালেন্স", refearn:"রেফারেল আয়", adearn:"বিজ্ঞাপন আয়",
  life:"সর্বমোট আয়", minw:"সর্বনিম্ন উইথড্র",
  ref_t:"রেফার করে আয় করুন", yourlink:"আপনার রেফারেল লিংক", copy:"কপি করতে ট্যাপ করুন",
  invite:"জন ইনভাইট করেছেন", earned:"আয় হয়েছে", share:"📤 বন্ধুদের সাথে শেয়ার করুন",
  refs_t:"আমার রেফারেল", norefs:"এখনো কোনো রেফারেল নেই।\nশুরু করতে আপনার লিংক শেয়ার করুন!",
  page:"পৃষ্ঠা", total:"মোট", top_t:"সেরা রেফারার", notop:"এখনো কেউ নেই — আপনিই প্রথম হোন!",
  hist_t:"পেমেন্ট হিস্টোরি", nohist:"এখনো কোনো লেনদেন নেই।",
  wd_t:"টাকা উইথড্র করুন", methods:"পেমেন্ট মাধ্যম", proc:"২৪ ঘণ্টার মধ্যে প্রসেস করা হবে",
  wamt:"টাকার পরিমাণ লিখুন", wacct:"আপনার অ্যাকাউন্ট নম্বর লিখুন",
  wconf:"নম্বরটি ভালো করে মিলিয়ে নিন।\nভুল নম্বরে পাঠানো টাকা ফেরত আসবে না।",
  wdone:"রিকোয়েস্ট জমা হয়েছে", needmin:"আপনার অন্তত দরকার",
  ads_t:"বিজ্ঞাপন দেখে আয় করুন", adreward:"প্রতি বিজ্ঞাপনে", adleft:"আজকের বাকি বিজ্ঞাপন", cool:"কুলডাউন",
  openapp:"🚀 বিজ্ঞাপন অ্যাপ খুলুন", adh_t:"বিজ্ঞাপন আয়ের হিসাব", noads:"এখনো কোনো বিজ্ঞাপন দেখা হয়নি।",
  help_t:"কিভাবে কাজ করে", support:"সাপোর্ট",
  lang_t:"ভাষা নির্বাচন করুন", lang_s:"আপনার পছন্দের ভাষা বেছে নিন:",
  noperm:"আপনার এই কাজের অনুমতি নেই।", notenough:"পর্যাপ্ত ব্যালেন্স নেই।",
  choose:"পেমেন্ট মাধ্যম বেছে নিন:", inv_amt:"সঠিক পরিমাণ লিখুন।",
  inv_acct:"সঠিক অ্যাকাউন্ট নম্বর লিখুন।", join_t:"চ্যানেল জয়েন করুন",
  join_s:"প্রথমে আমাদের চ্যানেলে জয়েন করুন, তারপর Continue চাপুন।", join_b:"📢 চ্যানেল জয়েন",
  cont:"✅ কন্টিনিউ", off_ads:"বিজ্ঞাপন সিস্টেমটি বন্ধ আছে।",
  off_ref:"রেফারেল প্রোগ্রামটি বন্ধ আছে।", off_pay:"উইথড্র সাময়িকভাবে বন্ধ আছে।",
  err_t:"সমস্যা হয়েছে", err_s:"কিছু একটা ভুল হয়েছে।\nএকটু পরে আবার চেষ্টা করুন।",
  share_t:"টেলিগ্রামে সত্যিকারের টাকা আয় করুন 💰", lang_done:"বাংলা নির্বাচন করা হয়েছে।",
  lang_pick:"ভাষা পরিবর্তন করতে নিচের বোতামে চাপ দিন:",
  amt_t:"টাকার পরিমাণ লিখুন", amt_e:"উদাহরণ: 150",
  acc_t:"আপনার অ্যাকাউন্ট নম্বর লিখুন", acc_e:"উদাহরণ: 01712345678",
  conf_t:"উইথড্র নিশ্চিত করুন", done_t:"রিকোয়েস্ট জমা হয়েছে",
  ref_off:"রেফারেল প্রোগ্রাম বন্ধ।", min_t:"সর্বনিম্ন:", bal_t2:"ব্যালেন্স:",
  ref_hit_t:"নতুন রেফারেল — আপনি টাকা পেয়েছেন", ref_hit_s:"আপনার লিংক দিয়ে জয়েন করেছেন",
  ref_you_earned:"আপনি পেয়েছেন", ref_new_bal:"নতুন ব্যালেন্স", ref_total:"মোট রেফারেল",
  ref_btn:"👥 আমার রেফারেল", ref_link:"🔗 আমার লিংক",
  ref_linked_t:"রেফারেল নিশ্চিত হয়েছে",
  ref_linked_s:"আপনার ইনভাইট রেজিস্টার হয়েছে। আপনাকে আনার জন্য আপনার ইনভাইটার পুরস্কার পেয়েছেন।",
  ref_pending_t:"রেফারেল বাকি আছে",
  ref_pending_s:"রেফারেল সম্পূর্ণ করতে ভেরিফিকেশন শেষ করুন।" },
}
function t(k){ var a = T[LANG] || T.en; if(a[k] !== undefined){ return a[k] } if(T.en[k] !== undefined){ return T.en[k] } return k }
function methLabel(m){ return ((String(m) === "Nagad") ? lbl("pay2") : lbl("pay1")).replace("📱 ", "") }
function lbl(k){ var a = L[LANG] || L.en; if(a[k] !== undefined){ return a[k] } return L.en[k] }

function kbUser(){
  var r = [[lbl("ads"), lbl("bal")], [lbl("ref"), lbl("refs")], [lbl("top"), lbl("hist")],
           [lbl("wd"), lbl("adh")], [lbl("help"), lbl("lang")]]
  if(IS_ADMIN){ r.push([lbl("adm")]) }
  return r
}
function kbLang(){ return [["🇬🇧 English", "🇧🇩 বাংলা"]] }
function kbPay(){ return [[lbl("pay1"), lbl("pay2")], [lbl("menu")]] }
function kbYes(){ return [[lbl("ok"), lbl("no")]] }
function kbCancel(){ return [[lbl("no")]] }

function ulang(tgid){ return String(Bot.getProperty("ulang_" + tgid) || "en") }
function tl(k, lang){ var a = T[lang]; if(a && a[k] !== undefined){ return a[k] } if(T.en[k] !== undefined){ return T.en[k] } return k }
function notify(tgid, html, kb){
  var id = parseInt(tgid)
  if(isNaN(id)){ return }
  var o = {chat_id: id, text: html, parse_mode: "HTML", disable_web_page_preview: true,
           on_error: "/notify_retry", bb_options: {to: String(tgid), text: html, kb: kb || ""}}
  if(kb){ o.reply_markup = kb }
  try {
    Api.sendMessage(o)
  } catch(e){
    try { Bot.sendMessageToChatWithId(id, html, {parse_mode: "HTML"}) } catch(e2){
      Bot.setProperty("stat_notify_fail", parseInt(Bot.getProperty("stat_notify_fail") || 0) + 1, "integer")
    }
  }
}
function updateTop(tid, c){
  var a = Bot.getProperty("top_refs")
  if(!(a instanceof Array)){ a = [] }
  var out = [], found = false
  for(var i = 0; i < a.length; i++){
    if(String(a[i].id) === String(tid)){ out.push({id: String(tid), c: c}); found = true } else { out.push(a[i]) }
  }
  if(!found){ out.push({id: String(tid), c: c}) }
  out.sort(function(x, y){ return y.c - x.c })
  if(out.length > 10){ out = out.slice(0, 10) }
  Bot.setProperty("top_refs", out, "json")
}
function creditReferral(tgid, uname){
  var rid = Bot.getProperty("pendref_" + tgid)
  if(!rid){ return false }
  var t2 = String(rid)
  if(t2 === String(tgid)){ return false }
  if(truthy(Bot.getProperty("refdone_" + tgid))){ return false }
  var amt = cfn("referral_reward", 5)
  credit(t2, amt)
  var cnt = parseInt(Bot.getProperty("refs_" + t2) || 0) + 1
  Bot.setProperty("refs_" + t2, cnt, "integer")
  Bot.setProperty("refearn_" + t2, Math.round((parseFloat(Bot.getProperty("refearn_" + t2) || 0) + amt) * 100) / 100, "float")
  var a = Bot.getProperty("reflist_" + t2)
  if(!(a instanceof Array)){ a = [] }
  a.unshift({id: String(tgid), name: uname || "", at: new Date().toISOString()})
  if(a.length > 500){ a = a.slice(0, 500) }
  Bot.setProperty("reflist_" + t2, a, "json")
  updateTop(t2, cnt)
  Bot.setProperty("refdone_" + tgid, 1, "integer")
  Bot.deleteProperty("pendref_" + tgid)
  Bot.setProperty("stat_refs", parseInt(Bot.getProperty("stat_refs") || 0) + 1, "integer")
  Bot.setProperty("stat_refpay", Math.round((parseFloat(Bot.getProperty("stat_refpay") || 0) + amt) * 100) / 100, "float")
  bump("refs", 1)
  pushLog("hist_" + t2, {id: "REF" + String(tgid).slice(-6), amount: amt, status: "earned", at: new Date().toISOString()}, 50)

  var rl = ulang(t2)
  notify(t2, card("🎉 " + tl("ref_hit_t", rl),
    "👤 <b>" + (uname || "New user") + "</b> " + tl("ref_hit_s", rl) + "\n" +
    "💰 " + tl("ref_you_earned", rl) + ": <b>" + money(amt) + "</b>\n" +
    "💼 " + tl("ref_new_bal", rl) + ": <b>" + money(bal(t2)) + "</b>\n" +
    "👥 " + tl("ref_total", rl) + ": <b>" + cnt + "</b>"),
    JSON.stringify({inline_keyboard: [
      [{text: tl("ref_btn", rl), callback_data: "/earn_me"},
       {text: tl("ref_link", rl), callback_data: "/earn_me_link"}]
    ]}))

  var nl = ulang(tgid)
  notify(tgid, card("✅ " + tl("ref_linked_t", nl),
    tl("ref_linked_s", nl) + "\n\n" +
    "💚 <b>" + String(cfg("brand_name", "ReferEarn BD")) + "</b>\n" +
    "💰 " + tl("rbal", nl) + ": <b>" + money(bal(tgid)) + "</b>"))
  return true
}
function chList(){
  var a = Bot.getProperty("cfg_channels")
  if(!a || typeof a.length !== "number"){ a = [] }
  return a
}
function chSave(a){ Bot.setProperty("cfg_channels", a, "json") }
function chSync(){
  // migrate a legacy single channel into the list
  var legacy = String(cfg("channel", ""))
  if(legacy !== "" && chList().length === 0){
    chSave([{id: legacy, name: String(cfg("channel_name", legacy))}])
    Bot.setProperty("cfg_channel", "", "string")
  }
}
function chURL(id){
  var c = String(id || "").trim()
  if(c.indexOf("http") === 0){ return c }
  return "https://t.me/" + c.replace("@", "")
}
function chLabel(c){
  var nm = String(c.name || "").trim()
  if(nm !== ""){ return nm }
  return String(c.id || "").replace("@", "")
}
function fjOn(){ return cbl("forcejoin_on", true) }
function chanGate(rows, text){
  if(!fjOn()){ return false }
  chSync()
  if(chList().length === 0){ return false }
  Bot.setProperty("jchk_" + TG, {i: 0, rows: rows, text: text, missing: []}, "json")
  chNext()
  return true
}
function chNext(){
  var st = Bot.getProperty("jchk_" + TG)
  if(!st){ return }
  var list = chList()
  if(parseInt(st.i) >= list.length){ return chDone(st) }
  var ch = String(list[parseInt(st.i)].id || "").trim()
  if(ch === ""){
    st.i = parseInt(st.i) + 1
    Bot.setProperty("jchk_" + TG, st, "json")
    return chNext()
  }
  Api.getChatMember({
    chat_id: ch,
    user_id: user.telegramid,
    on_result: "onCheckMembership",
    on_error: "onCheckMembership",
    bb_options: {stage: "chain"}
  })
}
function chDone(st){
  Bot.deleteProperty("jchk_" + TG)
  var miss = st.missing
  if(!miss || typeof miss.length !== "number"){ miss = [] }
  if(miss.length > 0){ return showJoin(miss) }
  var rule = String(cfg("verify_rule", "start"))
  if(rule === "start" || rule === "channel"){ creditReferral(TG, user.first_name || "") }
  var rows = st.rows
  if(!rows || typeof rows.length !== "number"){ rows = kbUser() }
  send(String(st.text || card(t("menu_t"), t("menu_s"))), rows)
}
function showJoin(miss){
  var rows = []
  for(var i = 0; i < miss.length && i < 8; i++){
    rows.push([{text: "📢 " + chLabel(miss[i]), url: chURL(miss[i].id)}])
  }
  rows.push([btn(t("cont"), "/checkjoin")])
  var lines = ""
  for(var j = 0; j < miss.length && j < 8; j++){
    lines += "▫️ <b>" + chLabel(miss[j]) + "</b>\n"
  }
  sendI(card("🚫 " + t("join_t"), t("join_s") + "\n\n" + lines), rows)
}
function dlim(){ return cig("daily_ad_limit", 15) }
function adsLeft(){
  var used = parseInt(Bot.getProperty("adcount_" + TG + "_" + today()) || 0)
  var left = dlim() - used
  return left < 0 ? 0 : left
}

var MID = 0
try {
  if(tgUpdate && tgUpdate.callback_query && tgUpdate.callback_query.message){
    MID = parseInt(tgUpdate.callback_query.message.message_id || 0)
  }
} catch(e){ MID = 0 }
if(MID && IS_ADMIN){
  User.setProperty("adm_mid", MID, "integer")
  User.setProperty("adm_flow", "", "string")
}

if(TG && truthy(Bot.getProperty("ban_" + TG))){ return }
if(cbl("maint", false) && !IS_ADMIN){
  var shown = parseFloat(Bot.getProperty("maintn_" + TG) || 0)
  var now = new Date().getTime()
  if(now - shown > 180000){
    Bot.setProperty("maintn_" + TG, now, "float")
    Api.sendMessage({parse_mode: "HTML",
      text: card("🔧 MAINTENANCE", String(cfg("maint_msg", "We are upgrading the system.\nPlease try again shortly.")))})
  }
  return
}
if(command && command.folder === "ADMIN" && !IS_ADMIN){
  Api.sendMessage({parse_mode: "HTML", text: card("🚫 ACCESS DENIED", t("noperm"))})
  return
}
