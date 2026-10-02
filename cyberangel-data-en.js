(function(){
var W="Wrong. Think again.";
window.CA_DATA_EN=[
{title:"Smishing",subtitle:"A trap that starts with a text",
good:"One careful choice protected your valuable assets.",medium:"Nice! But smishing keeps evolving. Let's review once more.",bad:"Check your habit of tapping links in text messages right now.",
stages:[
{title:"A delivery notice text arrives",label:"Text",message:"Delivery failed: incorrect address, item will be returned. Check here 👉 http://xx-ship.kr",options:[
["Call the courier's official number to check if it's real.","Well done! [b]Never tap links in texts. Check through the official app or number.[/b]"],
["It's urgent, so tap the link and log in.","Danger! [b]Very likely a fake login page[/b]"],
["Reply to the text asking \"Who is this?\"","Replying [b]tells them your number is active[/b]"],
["Ask a family member to tap the link instead.","Passing it on [b]causes the same damage[/b]"],
["Tap the link, but enter personal info later.","Just tapping can [b]install malware and collect your data[/b]"]]},
{title:"Identity verification requested",label:"Text page (fake)",message:"Mobile identity verification is required to confirm.",options:[
["Close the page and check my phone billing history.","Correct! [b]This prevents mobile micropayment fraud[/b]"],
["Enter the verification code, thinking it's harmless.","Danger! [b]Verification code = payment approval[/b]"],
["Tap the \"resend\" button.","Repeated attempts [b]raise the risk of further damage[/b]"],
["An app install prompt appears, so install it.","Very dangerous! [b]It may be a remote-control app[/b]"],
["Enter my phone password too if asked.","Immediate risk of account takeover!"]]},
{title:"Followed by a fake bank call",label:"Caller",message:"Your account has been hacked. Please tell us your account number for a security check.",options:[
["Hang up and call the bank or card company's official number.","Excellent! [b]Calling back yourself is key[/b]"],
["They're staff, so just give my account number.","Danger! Never give out personal information"],
["Tell them my resident registration number.","A leaked ID number means long-term risk"],
["Give my OTP code for extra verification.","Giving an OTP = account takeover"],
["Promise not to record the call.","That's exactly what criminals want"]]},
{title:"Posing as a payment cancellation",label:"Caller",message:"To cancel the payment, you need to verify again.",options:[
["Open the bank app myself and check only my own transactions.","Very well done! [b]Checking directly is the answer[/b]"],
["Go back through the text link and verify.","High risk. [b]Never let a third party in[/b]"],
["Ask the criminal to cancel it for me.","High risk. [b]Never let a third party in[/b]"],
["Let a family member do the verification.","High risk. [b]Never let a third party in[/b]"],
["Tell them my password first.","High risk. [b]Never let a third party in[/b]"]]},
{title:"Lured to a private messenger",label:"Caller",message:"Let's continue this consultation on KakaoTalk.",options:[
["Refuse private messenger chats and contact the official call center.","Correct! [b]Unofficial channels are very likely scams[/b]"],
["Give my KakaoTalk ID.","Danger! [b]Unofficial channels are very likely scams[/b]"],
["Accept the friend request.","Danger! [b]Unofficial channels are very likely scams[/b]"],
["Receive and open the file.","Danger! [b]Unofficial channels are very likely scams[/b]"],
["Give additional contact details.","Danger! [b]Unofficial channels are very likely scams[/b]"]]}]},
{title:"Grooming",subtitle:"Danger hidden in kindness",
good:"Your caution prevented serious harm.",medium:"A little more practice and you'll be perfect.",bad:"Cut off any demand for a secret relationship or isolation immediately.",
stages:[
{title:"A friendly first DM",label:"Stranger",message:"I saw your profile and wanted to reach out! We have similar hobbies :) Want to be friends?",options:[
["Stay cautious and limit the conversation without sharing personal info.","Good!"],
["Tell them my home address, school or workplace.",W],["Give my phone number right away.",W],["Send private photos.",W],["Keep chatting until dawn.",W]]},
{title:"Building emotional dependence",label:"Stranger",message:"You only have me, right? Let's keep this a secret between us.",options:[
["Recognize that pressure to keep secrets is a warning sign.","Right! [b]Isolation is the core tactic of grooming[/b]"],
["Don't tell my parents or family.",W],["Delete the chat history.",W],["Put their requests first.",W],["Start keeping secrets of my own.",W]]},
{title:"Asking for photos or videos",label:"Stranger",message:"Only I'll see it. Just send me one photo.",options:[
["Refuse to take or send anything.","Best choice!"],
["It's fine if my face isn't shown, so send it.","Not a good choice. Think again."],
["Ask them to send one too.","Not a good choice. Think again."],
["Give in to the pressure and send it.","Not a good choice. Think again."],
["Upload it through a cloud link.","Not a good choice. Think again."]]},
{title:"Turning to threats",label:"Stranger",message:"If you don't send it, I'll spread our chats around.",options:[
["Save everything as evidence right away and find where to report.","A brave response!"],
["Send money to make them stop.","Not a good response. Think again."],
["Go along with their demands and keep talking.","Not a good response. Think again."],
["Apologize and try to calm them down.","Not a good response. Think again."],
["Think it's my own fault.","Not a good response. Think again."]]},
{title:"Suggesting an offline meeting",label:"Stranger",message:"Let's meet, just the two of us. Keep it a secret.",options:[
["Refuse to meet and talk to a guardian or a professional.","Very well done!"],
["Say okay.",W],["Meet alone somewhere quiet.",W],["Go without sharing my location.",W],["Don't tell my family.",W]]}]},
{title:"Friend Impersonation",subtitle:"Messenger phishing",
good:"Your cool judgment protected your relationships and assets.",medium:"If emotional appeals sway you, you may hand your keys to an impersonator.",bad:"Make \"one phone call\" a habit now. Hesitation leads to serious harm.",
stages:[
{title:"A sudden urgent request",label:"Message",message:"I'm in a hurry, can you receive a verification code for me?",options:[
["Call my friend directly to check.","Best response! A request for a verification code = 100% account takeover"],
["It sounds just like them, so send it.","Misleading. Hacked accounts copy tone and photos exactly"],
["It's only a code, so it's fine.","Never. A verification code is your \"digital ID\""],
["Reply that I'll check later.","Replying is risky too. Keeping the chat going invites more attacks"]]},
{title:"The story gets more convincing when you doubt",label:"Follow-up message",message:"My phone is locked… you're the only one I can ask 😭",options:[
["All the more reason to call and confirm it's them.","Correct! Urgency and emotional appeals are an impersonator's signature tactic"],
["Send the code because I want to help.","Danger. Emotional pressure aims to cloud your judgment"],
["Ask them to send a voice message.","Caution. Voices can be faked from a hacked account too"],
["They seem desperate, so help first.","Misplaced kindness. Helping leads to your friend's account being stolen"]]},
{title:"The code has already arrived",label:"Situation",message:"A real verification code text arrives on your phone",options:[
["Never forward the code, and call my friend.","Perfect! Never share even part of a code"],
["Hide some digits and share only part of it.","Mistake. Even part of the digits can recover an account"],
["Send it just once and be done.","Very dangerous. \"Just once\" is enough for a takeover"],
["Take a photo of the code text and send it.","Worst choice. The entire text message is exposed"]]},
{title:"They get angry or guilt-trip you",label:"Message",message:"You can't even trust me on this? I'm in real trouble",options:[
["Stop the conversation and block them.","Right call! Anger, pressure and guilt are signs of an impersonator"],
["Keep chatting so the friendship isn't hurt.","You lost the mind game. Exploiting relationships is a typical tactic"],
["Reply one last time to check.","Danger. Keeping the chat going is itself an opening to attack"],
["Ask another friend to receive the code instead.","Secondary damage. This widens the harm"]]},
{title:"What if you already sent the code?",label:"Situation",message:"Oh no… I just sent the verification code 😨",options:[
["Immediately change that service's password and check the login history.","Damage minimized. A quick password change is key to protecting your account"],
["They're not replying, so wait and see.","Very dangerous. The takeover is likely already underway"],
["Delete the message and forget about it.","No effect. Deleting records does not protect your account"],
["Deal with it later if a problem comes up.","Too late. The harm can spread to a second and third victim"]]}]},
{title:"Job Scams",subtitle:"The trap of guaranteed high pay",
good:"You prevented financial loss.",medium:"Strengthen your habit of verifying job conditions.",bad:"You need to recognize the risk of giving out financial information.",
stages:[
{title:"A sudden job offer",label:"Stranger",message:"It's a simple online job and you can make 200,000 won a day! Interested?",options:[
["Search the company name and its business registration.","Good! Unofficial job offers must always be verified"],
["Say I'm interested right away.",W],["Send my résumé through the messenger.",W],["Send a photo of my ID.",W],["Brag about it to friends.",W]]},
{title:"Too-good-to-be-true conditions",label:"Stranger",message:"No commute. You just check deposits. The work is really simple!",options:[
["Be suspicious of the excessive pay.","Right! Simple work with high pay is a classic scam sign"],
["Go ahead without asking if it's legal.",W],["Skip reading the contract.",W],["Trust them based only on their social media profile.",W],["Start working immediately.",W]]},
{title:"Asking for an upfront payment",label:"Stranger",message:"To get started, please deposit just 50,000 won for training.",options:[
["Refuse to pay anything upfront.","Best choice! Legitimate companies never ask for upfront payment"],
["Send it since it's a small amount.",W],["Ask about refunds, then pay.",W],["Save their account number.",W],["Borrow from family to pay.",W]]},
{title:"Asking for financial information",label:"Stranger",message:"We need your bank account and debit card to pay your salary.",options:[
["Refuse to give any financial information.","Lending your bank account can involve you in crime!"],
["Give only my account number.",W],["Send a photo of my card.",W],["Tell them my OTP code.",W],["Share part of my password.",W]]},
{title:"Dodging responsibility",label:"Stranger",message:"Don't worry, if there are any legal problems the company is responsible.",options:[
["End the conversation and report it.","Very well done! Dodging responsibility is a scam trait"],
["Proceed without recording anything.",W],["Believe there won't be any problems.",W],["Give them more information.",W],["Recommend a friend.",W]]}]},
{title:"Malicious Wi-Fi",subtitle:"The price of free internet",
good:"You've built safe network habits.",medium:"Be careful when using public networks.",bad:"You need to strengthen your awareness of account protection.",
stages:[
{title:"Free Wi-Fi spotted",label:"Situation",message:"At a café, you find a network called \"Free_Cafe_WiFi\"",options:[
["Check whether it's the café's official Wi-Fi.","Open networks carry hacking risks"],
["Connect right away without a password.",W],["Set it to auto-connect.",W],["Share it with people nearby.",W],["Open all my apps.",W]]},
{title:"A login page appears",label:"Situation",message:"After connecting, a social media login page pops up automatically",options:[
["Close it without entering any personal info.","It could be a fake login page"],
["Enter my ID and password.",W],["Log in with my social media account.",W],["Enter my email address.",W],["Enter my phone number.",W]]},
{title:"Asked to log in to an account",label:"Situation",message:"A notice says you must log in to check your email",options:[
["Switch to mobile data.","Never log in to accounts on public networks"],
["Log in on the public network.",W],["Save my password.",W],["Let the browser remember my account.",W],["Log in to other sites too.",W]]},
{title:"Opening a banking app",label:"Situation",message:"You receive a payment confirmation notification",options:[
["Disconnect from the Wi-Fi.","Do financial transactions only on a secure network!"],
["Open the banking app.",W],["Check my account balance.",W],["Make a transfer.",W],["Turn off security settings.",W]]},
{title:"Realizing you entered your info",label:"Situation",message:"You realize you've already entered your login details",options:[
["Change my password immediately.","A quick response prevents further damage!"],
["Change it later.",W],["Assume there's no problem.",W],["Delete the history.",W],["Log in to other apps too.",W]]}]}
];
})();
