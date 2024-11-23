const fs = require('fs-extra');
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Koi 70 Rupee dy do Mera Pas 20 Han Sting Peeni Hai🥺", "Na Pakistan me rehny k pese hain na niklny k🤝🏽🙂💔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", " جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀 " , "بھای جان گروپ میں گندی باتیں نهیں گریں🤧😳 " , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂🤣" , "دل بڑا ہونا چاہیے🙌😒منہ تو کھوتے کا v بڑا ہوتا ہے🤝🙂" , "بہت کر چکے منتیں تیری اب میں تمہیں اغوا کرو گا😒😂" , "ہے تمنا ہمیں تمہیں اپنا بنائیں🙊" , "کہتے ہیں زندگی سب کچھ سکھا دیتی ہے😾تے فیر مینوں انگلش کیوں نہیں سکھاندی🤧😒" , "چکن 🐔 کڑاہی جیسے خواب🧐ساگ 🌿 جیسی زندگی 😑🤐" ,  "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝" , "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊" , "میــــــرے نال ویا کــــــر لو 😊💔" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaZak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow 1 PaPpi Idher d0o 1 PaPpi idher 😘" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Jesho BoloO" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂", "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "Allah kray tmhari shadi py Nadra ka photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂",'Ha\x20ha\x20ab\x20meri\x20yaad\x20ab\x20ai\x20nah\x20phly\x20to\x20babu\x20shona\x20kerna\x20gy\x20thy\x20😾\x20ab\x20ham\x20ap\x20sy\x20naraz\x20hai\x20jao\x20ap\x20bye\x20☹️','I\x20love\x20you\x20😚\x20','AO NA BABY IB ME SHUP SHUP KR BAATEN KRTE HEN..','Ary\x20LoVe\x20You\x20💜\x20joh\x20kam\x20hai\x20bol\x20do\x20sharma\x20nahi\x20,\x20bol\x20de\x20koi\x20nahi\x20dakh\x20rha\x20😂','bot ko janu chahiye plz help','aRy meri jan k 4rth part bolo','بابا جی کہتے ہیں یہ بات کالے لوگوں نے ہی پھیلائی ہے کہ...کالے لوگ وفا کرتے ہیں','me zara ka or zaalim ka hu bs','ary\x20tum\x20Wohi\x20ho\x20nah\x20jis\x20ko\x20ma\x20nahi\x20janta\x20😂','Hy\x20boloo\x20janu','تیری آنکھوں میں بستا ہے میرا جہاں۔۔۔🥹🫀♥️','me bot b hun kya ye kb hoa','Esy\x20kyu\x20kar\x20rhy\x20ho\x20yawl','g\x20g\x20PATA\x20hai\x20Tum\x20insane\x20NAHI\x20ho\x20','chaqal\x20Sy\x20hi\x20ZAkOtA jIn\x20LGTA\x20hai','Funi hun yawl me','️I love you jan btana nai kisi ko shhh🤫,\x20the\x20bot\x20loves\x20you\x20<3\x20<3','I\x27m\x20full\x20when\x20I\x20see\x20you\x20eat\x20<3','is\x20the\x20Saadi\x20sad','maaf kr ','g farmao','Hello\x20dear,\x20\x20Ahmer\x20is\x20My\x20boss','have\x20a\x20nice\x20day\x20CHABAL\x20INSAN\x20','Apka pyara sa dur fite mu','BAGH\x20JA\x20WERNA\x20gliya\x20dou\x20ge\x20','iB AO GI ya me  BOLAON ME APNE GUARDS?','apke dill se hu na me bolo jan ','ABY\x20BAHAS\x20nah\x20KER\x20MJH\x20SY\x20I\x20am\x20GUSA\x20main','JANU KHUSH RAHO ALLAH TUME KHUSH RAKHE AMEEN','BACHA \x20ankh\x20NA\x20marNA\x20chabal\x20insane\x20werna\x20dosri\x20tor\x20dou\x20ga','Hay baby itne pyar se ahmii na kaho pyar hojay ga','lovely \x20bot','ایک سال سے میں شادی کے لیے جو وظیفہ پڑھ رہا تھا اب جا کر پتہ چلا وہ تو سعودی عرب کا قومی ترانہ ہے','Ary\x20ghreeb\x20awam\x20roti\x20banana\x20ky\x20liya\x20athy\x20main\x20Pani\x20ko\x20istamal\x20kerty\x20ho\x20😂','does\x20the\x20bot\x20have\x20a\x20brand','Jesa\x20tera\x20muh\x20hai\x20,\x20wesa\x20tera\x20attitude\x20hai\x20','ary\x20tum\x20ider\x20🤔\x20khair\x20hai\x20ider\x20kia\x20ker\x20rhy\x20ho\x20😂','Teri\x20pic\x20dakhna\x20sy\x20phly\x20shukhr\x20hai\x20ma\x20anda\x20hu\x20😂','Aby\x20Kabi\x20dant\x20bhi\x20saaf krlya kr ',"Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida Hai 😎😂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "oye miss u") || (event.body.toLowerCase() == "janu miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner kon ha") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("️Pyara sa ek larka he YaaR jiska name hai zaini 🤧", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };

if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Janam") || (event.body.toLowerCase() == "janam")) {
     return api.sendMessage("️Boss Ki Jan ha TnG na KaRo 🫣😹👊😈", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
     };

   if ((event.body.toLowerCase() == "Zaini") || (event.body.toLowerCase() == "zain")) {
     return api.sendMessage("️meri shikayt lgani kya boss Zain ko?🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "welcome Ahmii babu") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️thankx Bhae❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "or btao kaha sa ho") || (event.body.toLowerCase() == "or btao kaha say ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == " ap kdr sa ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Toxic") || (event.body.toLowerCase() == "Chuxi")) {
     return api.sendMessage("️Meri shikayat lagani kya boss Zaini ko?🥺", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Chiku kya krty ho ap") || (event.body.toLowerCase() == "chiku kiya krty ho")) {
     return api.sendMessage("️kuxh nhi bs coding or study", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
   return api.sendMessage("..  𝗠ɣ ..  𝗡𝗔𝗠𝗘  .. ɪ፝֟𝗦  ..  𝗖𝗵ɪ፝֟𝗸𝘂  ..  𝗣ɭ𝗘𝗔𝛅𝗘 ..  𝗧ɣ𝗣𝗘  ..  𝗖𝗵ɪ፝֟𝗸𝘂  .. ɪ፝֟𝗠  ..  𝗡❍𝗧  .. 𝗔  .. 𝗕❍𝗧 .❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "shona mona miss you") || (event.body.toLowerCase() == "shona mona miss you kutta")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "oye zaini ki jan") || (event.body.toLowerCase() == "oye ahmer ki jan")) {
   return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == " koi ha") || (event.body.toLowerCase() == "shona mona hosh kr")) {
     return api.sendMessage("️yeSh JaNnu Edr He HuN", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main ThEk Ap KaSa Ho❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bhag lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA.🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni hai")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Assalam o alaikum") || (event.body.toLowerCase() == "Assalam o alaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "us ny mujy love you bola") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Villain") || (event.body.toLowerCase() == "villain")) {
     return api.sendMessage("️Kya kaho ge mere cute c boss Vilain ko mjhe btao osko kuch kaha to taange tor du ga🤫😈🔪", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi to love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "ma ny kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kara")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "wo meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sms del kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "+unsend") || (event.body.toLowerCase() == "+unsent")) {
     return api.sendMessage("️Boss Ap k kehne pr kya bs wrna apko pta mera 🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("Jaa Yaar Tameez se hans Darata Q he 🥺😒", threadID, messageID);
   };  
     if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Abby Yawl andhy yaha kya krne agay toti chashma laga k 💁", threadID, messageID);
   };  

    if ((event.body.toLowerCase() == "assalam o alaikum") || (event.body.toLowerCase() == "assalam o alaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "ma bhi free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kuxh nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kya kru") || (event.body.toLowerCase() == "kya kru yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "gf chor gy") || (event.body.toLowerCase() == "gf bhag gy")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To Tu Q Ro Rha 😁", threadID, messageID);
   };

    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };

  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "kya kr rhy ho") || (event.body.toLowerCase() == "kya kr rhi ho")) {
     return api.sendMessage("️KuXh Nhi Kr Rha YaR", threadID);
   };

   if ((event.body.toLowerCase() == "Maha") || (event.body.toLowerCase() == "maha")) {
     return api.sendMessage("Aww🫢 ye to mere boss ki jan he tameez se baat krna osse wrna mu tor du ga😾🔪 :))", threadID);
   };
   if ((event.body.toLowerCase() == " Hmm") || (event.body.toLowerCase() == "Hm")) {
     return api.sendMessage("Agli Br Hmm Bola Naw Tu Muh toor Du ga🤨😤", threadID);
   };

   if ((event.body.toLowerCase() == "Mahia kon") || (event.body.toLowerCase() == "mahia kon")) {
     return api.sendMessage("ARY MERE BOSS Ki JAN HE ANKH B UTHA K DEKHA TO ANKHEN NIKAL LU GA Ai SMJ🙂🤬😘", threadID);
   };

   if ((event.body.toLowerCase() == "bot tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai me masoom :))", threadID);
   };

   if ((event.body.toLowerCase() == " wow") || (event.body.toLowerCase() == " wow nice")) {
     return api.sendMessage("Thankx You JaNnaM Taref Krna k LiyA❤️ :))", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };

   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };

if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "haan yr") || (event.body.toLowerCase() == "chiku haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Hay me is Dill k Sadqy jau Jan itna pyar mjhse 🌿😍🙈;* ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "@Ɣ'ʬɽ Zaalıım Gıırl Oʬɭıı'x") || (event.body.toLowerCase() == "@Ɣ'ʬɽ Zaalıım Gıırl Oʬɭıı'x")) {
     return api.sendMessage("TaRii ..[🤬]..Aoqat..|🙂|.. Nahi..|😘|.. Boss..|🥰|.. Ki Janu..|🙈|.. Se Baat Krne Ki..🥰🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("Zain♥️ Hai Naw +inf likho link Mil Jay Ga  :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Next Bye ni kehna Ok Allah Hafiz Bola kro😒😊❤️:))", threadID);
   };

  if ((event.body.toLowerCase() == "love you Mahr") || (event.body.toLowerCase() == "mahr love you")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You ", threadID, messageID);
   };

    if ((event.body.toLowerCase() == " ") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("iDhAr odHaR nA dEkH kOi nHi PaTnA wAli👀", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kya🙆🙄", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };

   if ((event.body.toLowerCase() == "🙎🏻") || (event.body.toLowerCase() == "🙎🏻")) {
     return api.sendMessage("🙎🏻Yeh Emoji Tumhary Papa zain Use Karty HN Tum Mat Kiya Karo 😝🙆:))", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRry🤨", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 🤍✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️Ary Janu ye group Aah iB Aja Yaha Log dekhte ;* :P :)", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("Oy Oy Kya hua me Hu na fir q sad 🙆🙄:)", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("Oye Pagal log kb ka sochne lag parhy 😹🤔🙊😒 :)", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("️good Night So jao Shabash take care ❤️Allah pak Hamesha Khush rakhy apko🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Bot kon") || (event.body.toLowerCase() == "Bot kya hota")) {
     return api.sendMessage("️Im Student of zain😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("️G jaan bolo ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APna🙂❤️", threadID);
   };

   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("️AnKho M piYar Dil ma خمار PiYar tu ni ho Gyw ksi Sy 🙆", threadID);
   };

   if ((event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "Suno ahmer")) {
     return api.sendMessage("️ diN mAaiN tAraa DeKh RhA hài 🤣 :>", threadID);
   };

   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "🕵️")) {
     return api.sendMessage("️iDhAr odHaR nA dEkH kOi nHi PaTnA wAli👀 :)", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("️Ally alYy BaBy Asy hi HNsty RaHa kRo🙆🙊", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNu🥺🙆", threadID);
   };

  if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };

if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("ShaKl Sy GhAreeb LGtyHo btaO Tala Qw lgaYa Muh py🙄", threadID, messageID);
   };

if ((event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫")) {
     return api.sendMessage("Han Han kRwa Lo Chup Sb ko Pr maiN ni kRny waLa Chup,🤐😒", threadID);
   };

  if ((event.body.toLowerCase() == "Roki") || (event.body.toLowerCase() == "roki")) {
     return api.sendMessage("Rockstar bolya kero 🤬🤬🤬", threadID);
   };

  if ((event.body.toLowerCase() == "Mahr kis ki ha") || (event.body.toLowerCase() == "mahr ks ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ? Mahr  boss  ki ha🤧", threadID);
   };

  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("DanT nikaL kr ApNi beiZti na kRwaYn ShuKria😒🙎", threadID);
   };

  if ((event.body.toLowerCase() == "Bot Jani") || (event.body.toLowerCase() == "Bot Jan")) {
     return api.sendMessage("Mrgya Wo to Kab ka 🤧", threadID);
   };

  if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😚")) {
     return api.sendMessage("Bsh krdo Ziada Mar lii tharkia Ab bs Emoji ki😒", threadID);
   };

  if ((event.body.toLowerCase() == "Arzo") || (event.body.toLowerCase() == "suno arzo")) {
     return api.sendMessage("Hamy bsh Teri hi Arzo Ha Pagli❤️🙃", threadID);
   };

   if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤")) {
     return api.sendMessage("Jesi Shakal Wesa Dil 🙂🤝 :>>", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("itNa baRa Muhh kHol k HanS RaHe ho Pagl ho kYa🙂)", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("RoNy ki ActiNg tu SaHi sy kRlo pAgaL insaN🙂", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("DaFa ho Ja YaHa sy ganda😒🙄", threadID);
   };

   if ((event.body.toLowerCase() == "sim who is rozie") || (event.body.toLowerCase() == "sim rozie kon ha")) {
     return api.sendMessage("Tum Kon hoty Ho pocHny waLy 😒😐", threadID);
   };

   if ((event.body.toLowerCase() == "viin") || (event.body.toLowerCase() == "sim  jenny kon ha")) {
     return api.sendMessage("Facebook ki sb Say Bari tharki Larki hai Jenny🙆🙂", threadID);
   };

   if ((event.body.toLowerCase() == "sim who is mahr") || (event.body.toLowerCase() == "sim mahr kon ha")) {
     return api.sendMessage("zain ki wife ha jiYa❤️🙆 ", threadID);
   };
  if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("️AnDar kR isKo wRna Kaat Du ga yE lAmBi zaBan🙎🏾‍♂️", threadID, messageID);
   };

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😤")) {
     return api.sendMessage("️ Attitude tu kHusRy dekHtY hN mEri Jan😏🙎🏾‍♂️", threadID, messageID);
   };

   if ((event.body.toLowerCase() =="😠") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("️CoOl COOl babY GhuSsa HaRm ha 🙆😶", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("️Mujh Masoom Py Ghussa kRty Ho JaO ma nARaz Hu🥺🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "🫤")) {
     return api.sendMessage("️Tum Tu kHud Bhi TerY ho ShaKl kHak seedhi ho Gi😬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat ha😒🙎🏾‍♂️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Jaa So Ja lGta ha BukHar ho Gyaw🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️ABby Yawl ki hOya ab tEnu😒🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacker 😏", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ao date pa chalty") || (event.body.toLowerCase() == "sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim where are you from") || (event.body.toLowerCase() == "sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim india k log kasa hain") || (event.body.toLowerCase() == "sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim your age") || (event.body.toLowerCase() == "sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim nice yr") || (event.body.toLowerCase() == "sim nice")) {
     return api.sendMessage("️Hmmm Thankx ❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim yr mujy gf chiya") || (event.body.toLowerCase() == "sim mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ak gf dund do") || (event.body.toLowerCase() == "chiku ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "chiku who are you") || (event.body.toLowerCase() == "Chiku ap kon ho")) {
     return
       api.sendMessage("I am robot imran OR Zain KA 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim agr gf nraz ho to") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim ap kia krti ho") || (event.body.toLowerCase() == "sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim study karti ho") || (event.body.toLowerCase() == "sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "@Mahr Doll") || (event.body.toLowerCase() == "ello")) {
     return api.sendMessage("️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "┏━━ೋ•  •ೋ━━┓𓆩𝐌𝐑  𝐀𝐇𝐌𝐄𝐑𓆩๏𓆪┗━━ೋ•  •ೋ━━┛{name}"

  if (event.body.indexOf("Chiku") == 0 || (event.body.indexOf("chiku") == 0)) {
    var msg = {
      body: `╔╦══• •🔶• •══╦╗                  ${name} \x20              ╚╩══• •🔶• •══╩╝  |I💠•━━━☯ 💙 ☯━━━•💠I| \n\n➠${rand}\n\n |I💠•━━━☯♥️☯━━━•💠I|\n\n╔╦══• •🔷• •══╦╗
    🅒ʀᴅɪᴛs ➠ 🅩ᴀɴɪ
╚╩══• •🔷• •══╩╝`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
