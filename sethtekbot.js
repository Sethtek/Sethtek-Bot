// Sethtek Bot: Developed by Sethtek Dev (C) 2018 (Made for Discord (https://discordapp.com))
// #r --SETHTEK BOT MAIN--
//console.log("Sethtek Bot is starting...")
const Discord = require("discord.js");
const bot = new Discord.Client
const readline = require("readline")
var cid = "384897007908814860"
// #r --SERVER IDS--
// Sethtek Driving Simulator - #sds-chat - 384897007908814860
// Sethtek Driving Simulator - #development-log - 427971916524027916
// Sethtek Driving Simulator - #announcements - 384898923225153537
// Starworks Text Lobby - 421154547348799489
// #er
// #r --USER IDS--
// Sethtek's ID <@384896058318389248>
// #er
// #er

// #r --READLINE CONSOLE--
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.on("line", (input) => {
  bot.channels.find("id", cid).send(input)
});
// #er

// #r --BOT ON--
bot.on("message", (message) => {

// #r --MAIN VARIABLES--
  var user = message.author;
  var msg = message.content;
  var prefix = "<"
  var suffix = ">"
  msg = msg.toLowerCase()
// #er

// #r --MAIN BOT COMMANDS--
  // The help command function
  if(msg == prefix + "help" + suffix){
    message.channel.send("```fix" + "\n" + "Sethtek Bot Help"
    + "\n" + "\n" + "<help> : I will always help you :)"
    + "\n" + "\n" + "<userinfo> : I will get your profile information"
    + "\n" + "\n" + "<about> : This is some information about me"
    + "\n" + "\n" + "<pingme> : I will ping you and reply"
    + "\n" + "\n" + "**<boldme>** : I will reply to a bold formatted command"
    //+ "\n" + "\n" + "<order> : A fun command to use for a restaurant roleplay"
    + "\n" + "\n" + "<syntax fix> : I will send a message using the FIX syntax"
    + "\n" + "\n" + "<syntax css> : I will send a message using the CSS syntax"
    + "\n" + "\n" + "<> : This hurts me... :/"
    + "\n" + "\n" + "<how are you> : I will tell you how I feel :)"
    + "\n" + "\n" + "<lang> : Displays a list of all of the supported language commands"
    + "\n" + "```")
  } // + "\n" + "\n" + "" (This is the command template for the help bot, simply put it under the other commands above.)

  // The about function
  if(msg == prefix + "about" + suffix){
    message.channel.send("```fix" + "\n" + "Sethtek Bot was created by Sethtek Dev"
    + "\n" + "\n" + "About me:"
    + "\n" + "I'm a friendly server moderation and fun bot. I'm is always ready to help someone :)"
    + "\n" + "\n" + "Created date: 3/9/2018 at 15:24"
    + "\n" + "\n" + "Sethtek Bot ID: 421756217459736577"
    + "\n" + "\n" + "(C) 2018 Sethtek Dev"
    + "\n" + "```")
  }

  // The user information function
  if(msg == prefix + "userinfo" + suffix){
    message.channel.send("```css" + "\n" + "-----User Information"
    + "\n" + "\n" + "Username: "
    + user.tag
    + "\n" + "User ID: "
    + user.id
    + "\n" + "Date Created: "
    + user.createdAt + "\n" + "\n" + "```" + user.avatarURL)
  }

  // Sets the channel ID var to the current channel
  if(user.id == "384896058318389248"){
    if(msg == prefix + "set cid here" + suffix){
      cid = message.channel.id
      console.log("The READLINE channel id is now set to the channel: " + cid)
      message.delete()
      //message.channel.send("**I can now send messages in this channel: " + "<" + "#" + cid + ">" + " from my console.**")
    }
    var delMsgNum = "20"

    if(msg == prefix + "del" + suffix){
      message.channel.send("```fix" + "\n" + "10 messages are about to be deleted." + "\n" + "```")
      message.channel.bulkDelete(delMsgNum);
      message.channel.send("```fix" + "\n" + "Successfully deleted 20 messages!" + "\n" + "```")
      setTimeout(function(){ message.delete(); }, 10000);
      console.log("The <del> command was used in the channel " + message.channel.id + ".")
    }
  }

  // The language list function
  if(msg == prefix + "lang" + suffix){
    message.channel.send("```fix" + "\n" + "<help> : English-US Help"
    + "\n" + "\n" + "<ayuda> : Spanish Help (W.I.P.)"
    + "\n" + "\n" + "<aide> : French Help (W.I.P.)"
    + "\n" + "\n" + "<dutch> : Dutch Help (Coming Soon)"
    + "\n" + "\n" + "<russian> : Russian Help (Coming Soon)"
    + "\n" + "```")
  }

  if(msg.includes("<@384896058318389248>")){
    message.delete();
    message.channel.send("```fix" + "\n" + "Please do not ping @Sethtek." + "```")
  }

  //setTimeout(function(){ message.channel.send("0"); }, 10000);
  // The say command
  //if(message.content.includes(prefix + "say")){
    //<say [saythis]>
    //saythis = msg[0]
    //function check(c){
        //if(saythis == "<" || "s" || "a" || "y" || " "){
            //new1 = msg.slice(1)
            //saythis = new1
            //check();
        //}else{
            //message.channel.send(saythis)
        //}
    //}
    //check();
  //}
// #er

// #r --OTHER LANGUAGE MAIN COMMANDS--
  // Spanish help command function
  if(msg == prefix + "ayuda" + suffix){
    message.channel.send("```fix" + "\n" + "Ayuda de Sethtek Bot"
    + "\n" + "\n" + "<ayuda>: siempre te ayudaré :)"
    + "\n" + "\n" + "<userinfo>: obtendré su información de perfil"
    + "\n" + "\n" + "<sobre>: esta es alguna información sobre mí"
    + "\n" + "\n" + "<pingme>: te enviaré un ping y responderé"
    + "\n" + "\n" + "**<boldme>**: responderé a un comando con formato negrita"
    //+ "\n" + "\n" + "<order> : A fun command to use for a restaurant roleplay"
    + "\n" + "\n" + "<corrección de sintaxis>: enviaré un mensaje usando la sintaxis FIX"
    + "\n" + "\n" + "<syntax css>: Enviaré un mensaje usando la sintaxis css"
    + "\n" + "\n" + "<>: Esto me duele ...: /"
    + "\n" + "\n" + "<cómo estás>: te diré cómo me siento :)"
    + "\n" + "\n" + "**Note that these translations might not be 100% accurate. My original native language is English-US.**"
    + "\n" + "<help> For English-US Help."
    + "\n" + "\n" + "<lang> : Muestra una lista de todos los comandos de idioma admitidos"
    + "\n" + "```")
  } // + "\n" + "\n" + "" (This is the command template for the help bot, simply put it under the other commands above.)

  // French help command function
  if(msg == prefix + "aide" + suffix){
    message.channel.send("```fix" + "\n" + "Sethtek Bot Aide"
    + "\ n" + "\ n" + "<aide>: Je t'aiderai toujours :)"
    + "\ n" + "\ n" + "<userinfo>: j'obtiendrai vos informations de profil"
    + "\ n" + "\ n" + "<à propos>: Voici quelques informations sur moi"
    + "\ n" + "\ n" + "<pingme>: je vais vous envoyer un ping et vous répondre"
    + "\ n" + "\ n" + "**<boldme>**: Je répondrai à une commande au format gras"
    // + "\ n" + "\ n" + "<commande>: Une commande amusante à utiliser pour un jeu de rôle dans un restaurant"
    + "\ n" + "\ n" + "<correction de syntaxe>: je vais envoyer un message en utilisant la syntaxe FIX"
    + "\ n" + "\ n" + "<syntaxe css>: Je vais envoyer un message en utilisant la syntaxe CSS"
    + "\ n" + "\ n" + "<>: Cela me fait mal ...: /"
    + "\ n" + "\ n" + "<comment allez-vous>: je vais vous dire comment je me sens :)"
    + "\ n" + "\ n" + "<sa-on>: S est autorisé."
    + "\ n" + "\ n" + "<sa-off>: S n'est pas autorisé."
    + "\ n" + "\ n" + "<lang>: Affiche une liste de toutes les commandes de langue supportées"
    + "\n" + "```")
  }
// #er

// #r --FUN COMMANDS--
  // The ping me and reply function
  if(msg == prefix + "pingme" + suffix){
    message.reply("I pinged you, don't get mad at me and ban me xD")
  }

  // Another funny little simple interaction asking the bot how he is feeling :)
  if(msg == prefix + "how are you" + suffix){
    message.channel.send("I'm feelin' good today :smile: ")
  }

  // A funny little command where you don't put any rewuest but only the prefix and suffix and he doesn't like it
  if(msg == prefix + "" + suffix){
    message.channel.send("**>.<**")
  }

  // Checks if Sethtek Bot's ID is pinged in a message
  if(msg.includes("<@421756217459736577>")){
    message.channel.send("**Reporting for duty! How may I ``<help>``!?**" + "\n" + "https://goo.gl/EvhbCN")
  }

  // A simple fun bold command
  if(msg == "**" + prefix + "boldme" + suffix + "**"){
    message.reply("***You are BOLD!*** :smile: ")
  }

  // A simple "Syntax ```fix command"
  if(msg == prefix + "syntax fix" + suffix){
    message.channel.send("```fix" + "\n" + "This is the FIX syntax highlighting!" + "\n" + "```")
  }

  // A simple "Syntax ```css command"
  if(msg == prefix + "syntax css" + suffix){
    message.channel.send("```css" + "\n" + "This is the CSS syntax highlighting!" + "\n" + "```")
  }
// #er

// #r --W.I.P. TESTING PARTS
  //--------------------//
  // This is the interactive ordering fun feature
  //--------------------//
  //var orderRequest = 0

  //if(msg == prefix + "order" + suffix){
    //message.channel.send("**Hello and welcome to the Sethtek Bot service center, How may I help you?**")
    //message.channel.send("__**Here is our menu**__"
    //+ "\n" + "**Pizza**"
    //+ "\n" + "**Cola**"
    //+ "\n" + "**Fries**"
    //+ "\n" + "**Nuggets**"
    //+ "\n" + "**Cookies**"
    //+ "\n" + "----------------"
    //+ "\n" + "__**Please type what you would like to have**__")

    //orderRequest = 1
    //console.log("The orderRequest is now: " + orderRequest)
  //}

  // Checks if there is an order
  //if(orderRequest == 0){
    // Interactive pizza ordering function
    //if(msg == prefix + "pizza" + suffix){
      //message.channel.send("You must say ``<order>`` before requesting an item, otherwise idk what your talking about xD")
    //}
  //}else{ // And if there is no order, then tell the person they should order their item before talking about it!!
    //message.channel.send("Thanks for your time, here is your pizza hot and ready! :pizza: " + "**" + user.username + "**")
    //orderRequest = 0;
    //console.log("The orderRequest is now: " + orderRequest)
  //}

  // Interactive cola ordering function
  //if(msg == "cola"){
    //message.channel.send("Thanks for your time, here is your cola cold and fresh! :tumbler_glass: ");
    //console.log("Someone requested cola.");
  //}

  // Interactive fries ordering function
  //if(msg == "fries"){
    //message.channel.send("Thanks for your time, here are your fries hot and yummy! :fries: ");
    //console.log("Someone requested fries.");
  //}

  // Interactive nuggets ordering function
  //if(msg == "nuggets"){
    //message.channel.send("Thanks for your time, here is your nugget freshly cracked and cooked! :hatching_chick: ");
    //console.log("Someone requested nuggets.");
  //}

  // Interactive cookies ordering function
  //if(msg == "cookies"){
    //message.channel.send("Thanks for your time, here are your cookies freshly baked! :cookie: :cookie: :cookie: ");
    //console.log("Someone requested cookies.");
  //}
// #er

// #r --BANNED WORDS SECTION--
if(msg.includes("fuck")
    || msg.includes("``fuck``")
    || msg.includes("```fuck``")
    || msg.includes("shit")
    || msg.includes("``shit``")
    || msg.includes("```shit```")
    || msg.includes("bitch")
    || msg.includes("``bitch``")
    || msg.includes("```bitch```")
    || msg.includes("damn")
    || msg.includes("``damn``")
    || msg.includes("```damn```")
    || msg.includes("damnit")
    || msg.includes("``damnit``")
    || msg.includes("```damnit```")
    || msg.includes("goddamn")
    || msg.includes("``goddamn``")
    || msg.includes("```goddamn```")
    || msg.includes("bitch")
    || msg.includes("``bitch``")
    || msg.includes("```bitch```")
    || msg.includes("whore")
    || msg.includes("``whore``")
    || msg.includes("```whore```")
    || msg.includes("nigga")
    || msg.includes("``nigga``")
    || msg.includes("```nigga```")
    || msg.includes("dick")
    || msg.includes("``dick``")
    || msg.includes("```dick```")
    || msg.includes("penis")
    || msg.includes("``penis``")
    || msg.includes("```penis```")
    || msg.includes("cum")
    || msg.includes("``cum``")
    || msg.includes("```cum``")
    || msg.includes("pussy")
    || msg.includes("``pussy``")
    || msg.includes("```pussy```")
    || msg.includes("boobs")
    || msg.includes("boob")
    || msg.includes("``boobs``")
    || msg.includes("``boob``")
    || msg.includes("```boobs```")
    || msg.includes("```boob```")){
    message.delete();
    message.author.send("Please watch your language!! :angry: ")
    // msg.includes("banned word") This is the bad word capsule template.
  }
// #er
});
// #er

// #r --BOT READY--
// This is where the commands go for when the bot starts and is ready
bot.on("ready", () => {
  console.log("Sethtek Bot has started successfully!")
  bot.user.setActivity("<help> | :D")
});
// #er

// #r --BOT TOKEN--
bot.login(process.env.BOT_TOKEN)
// #er
// (C) 2018 Sethtek Dev
