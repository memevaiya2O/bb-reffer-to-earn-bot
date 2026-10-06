<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=d1emotestbot&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Bots.Business%20%E0%A6%8F%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%20%E0%A6%9F%E0%A7%87%E0%A6%B2%E0%A6%BF%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%20%E0%A6%9A%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%20%E0%A6%AC%E0%A6%9F&descAlignY=58&descSize=18" width="100%" alt="header"/>

<a href="https://t.me/d1emotestbot">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=2CA5E0&center=true&vCenter=true&width=600&lines=%F0%9F%A4%96+%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%A4%E0%A6%AE!+d1emotestbot;%E2%9A%A1+%E0%A6%B8%E0%A6%B9%E0%A6%9C%E0%A7%87%E0%A6%87+%E0%A6%A8%E0%A6%BF%E0%A6%9C%E0%A7%87%E0%A6%B0+%E0%A6%9F%E0%A7%87%E0%A6%B2%E0%A6%BF%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE+%E0%A6%AC%E0%A6%9F+%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A6%A8;%F0%9F%9A%80+Bots.Business+%E0%A6%A6%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87+%E0%A6%87%E0%A6%AE%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F+%E0%A6%95%E0%A6%B0%E0%A7%81%E0%A6%A8" alt="Typing SVG" />
</a>

<br/>

[![Telegram Bot](https://img.shields.io/badge/Telegram-@d1emotestbot-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/d1emotestbot)
[![Bots.Business](https://img.shields.io/badge/Platform-Bots.Business-blueviolet?style=for-the-badge)](https://bots.business)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://help.bots.business/scenarios-and-bjs)

</div>

---

## 📖 এটি কী?

এই রিপোজিটরিটি একটি **ওয়ার্কিং চ্যাট বট** যা সরাসরি [Bots.Business](https://bots.business)-এ ইমপোর্ট করা যায়।

**Bots.Business** সম্ভবত প্রথম **CBPaaS** (Chat Bot Platform as a Service)।
CBPaaS হলো একটি ক্লাউড-ভিত্তিক প্ল্যাটফর্ম, যেখানে ডেভেলপাররা আলাদা ব্যাকএন্ড তৈরি না করেই সহজে চ্যাটবট বানাতে পারেন।

---

## 🚀 Bots.Business-এ কীভাবে ইমপোর্ট করবেন?

এই Git রিপো থেকে নিজের টেলিগ্রাম বট বানাতে নিচের ধাপগুলো অনুসরণ করুন:

### ধাপ ১: বট তৈরি ও টোকেন সংগ্রহ
টেলিগ্রামে [@BotFather](https://telegram.me/BotFather)-এর মাধ্যমে নতুন বট তৈরি করুন এবং **Secret Token** (API Token) কপি করে রাখুন।

### ধাপ ২: Bots.Business-এ বট যোগ করা
[Bots.Business](https://bots.business) অ্যাপে লগইন করে নতুন বট তৈরি করুন এবং ধাপ ১-এর **Secret Token** সেখানে বসিয়ে দিন।

### ধাপ ৩: Deploy Key যোগ করা
অ্যাপ থেকে **Public Key** কপি করুন এবং এটি GitHub রিপোজিটরির **[Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys)** হিসেবে যোগ করুন:
- ✅ **Read access** সবসময় দিতে হবে
- ✏️ বট এক্সপোর্ট করতে চাইলে **Write access**-ও দিন

### ধাপ ৪: রিপো ইমপোর্ট করুন
Bots.Business অ্যাপে এই Git রিপোজিটরিটি **Import** করুন।

### 🎉 সম্পন্ন!
এখন আপনার নতুন টেলিগ্রাম বটের সাথে কথা বলতে পারবেন!

> 📚 বিস্তারিত: [Getting Started](https://help.bots.business/getting-started)

---

## 📂 প্রজেক্ট স্ট্রাকচার

```
d1emotestbot/
├── commands/    # বটের সব কমান্ড এখানে থাকে
└── libs/        # কমন কোড/লাইব্রেরি এখানে থাকে
```

---

## ⌨️ কমান্ড (`commands` ফোল্ডার)

ফাইলের নামই হলো কমান্ডের নাম (তবে কমান্ড ডিসক্রিপশনে এটি পরিবর্তন করা যায়)।

একটি কমান্ডে থাকতে পারে: `command`, `help`, `aliases` (বিকল্প নাম), `answer`, `keyboard`, `scenarios` (সহজ লজিকের জন্য) এবং আরও অনেক অপশন।

### কমান্ড ডিসক্রিপশন (ফাইলের হেডার)

```js
/*CMD
  command: /test
  help: এটি কমান্ডের হেল্প টেক্সট
  need_reply: [ true বা false ]
  auto_retry_time: [ সময় সেকেন্ডে ]
  answer: এটি /test কমান্ডের উদাহরণ উত্তর
  keyboard: button1, button2
  aliases: /test2, /test3
CMD*/
```

> 📚 বিস্তারিত: [Commands](https://help.bots.business/commands)

### কমান্ড বডি

কমান্ডের কোড **JavaScript**-এ লেখা হয়। লজিকের জন্য **Bot JavaScript (BJS)** ব্যবহার করুন।

উদাহরণ:

```js
Bot.sendMessage(2 + 2);
```

> 📚 বিস্তারিত: [Scenarios & BJS](https://help.bots.business/scenarios-and-bjs)

---

## 📚 লাইব্রেরি (`libs` ফোল্ডার)

কমন কোড `libs` ফোল্ডারে রাখতে পারেন। ফাইলের নামই হলো লাইব্রেরির নাম।

উদাহরণ — `myLib.js`:

```js
function hello() { Bot.sendMessage("Hello from lib!") }
function goodbye(name) { Bot.sendMessage("Goodbye, " + name) }

publish({
  sayHello: hello,
  sayGoodbyeTo: goodbye
})
```

এরপর যেকোনো কমান্ডে ব্যবহার করুন:

```js
Libs.myLib.sayHello()
Libs.myLib.sayGoodbyeTo("Alice")
```

> 📚 বিস্তারিত: [Library Guide](https://help.bots.business/git/library)

---

## 🔗 অন্যান্য বটের উদাহরণ

- [GitHub-এ আরও বটের উদাহরণ](https://github.com/bots-business?utf8=✓&tab=repositories&q=&type=public&language=javascript)
- [Bot Store](https://bots.business/)

## 🆘 সাহায্য ও API

- 📖 [Help.bots.business](https://help.bots.business)
- 🔌 [API ডকুমেন্টেশন](https://api.bots.business/docs#/docs/summary)

---

<div align="center">

![](https://bots.business/images/web-logo.png)

### 💖 Credit

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=24&pause=1200&color=FF4D6D&center=true&vCenter=true&width=450&lines=Made+with+%E2%9D%A4%EF%B8%8F+by+R4Ad+Bhai;Telegram%3A+t.me%2Fzerox6t9" alt="Credit" />

[![Telegram](https://img.shields.io/badge/Contact-R4Ad%20Bhai-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/zerox6t9)

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" width="100%" alt="footer"/>

</div>
