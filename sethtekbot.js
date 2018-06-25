// Sethtek Bot: Developed by Sethtek Dev (C) 2018 (Made for Discord (https://discordapp.com))
console.log("Sethtek Bot is starting, please wait...")
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
const readline = require("readline")
var cid = "450534653011558402"
var logcid

// #r --READLINE CONSOLE FUNCTION--
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.on("line", (input) => {
  bot.channels.find("id", cid).send(input)
});
// #er

// #r --BOT READY--
bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log("Sethtek Bot has started sucessfully!");
  console.log(`Usage stats: ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`)
  // Example of changing the bot's playing game to something useful. `bot.user` is what the
  bot.user.setActivity(`/help | ${bot.guilds.size} servers`);
});
// #er

// #r --BOT GUILD CREATE--
bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`/help | ${bot.guilds.size} servers`);
});
// #er

// #r --BOT GUILD DELETE--
bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`/help | ${bot.guilds.size} servers`);
});
// #er

// #r --BOT ON--
bot.on("message", async message => {
  // Makes the bot ignore commands from itself or other bots
  if(message.author.bot) return;
  // Makes the bot ignore commands that do not start with it's own prefix
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Contains the Help command
  if(command == "help"){
    const embed = {
      "title": "Sethtek Bot help",
      "description": "Here are all of the commands Sethtek Bot has.",
      "url": "",
      "color": 0xFF0000,
      "timestamp": message.author.createdAt,
      "footer": {
        "icon_url": bot.user.avatarURL,
        "text": bot.user.username
      },
      "thumbnail": {
        "url": "https://goo.gl/5X8VdD"
      },
      "author": {
        "name": message.author.username + " needs help.",
        "url": "https://sites.google.com/view/sethtek-bot/home",
        "icon_url": message.author.avatarURL
      },
      "fields": [
        {
          "name": "/userinfo",
          "value": "I will get your profile information."
        },
        {
          "name": "/about",
          "value": "I will tell you a little bit about me."
        },
        {
          "name": "/pingme",
          "value": "I will ping you and reply."
        },
        {
          "name": "/afk",
          "value": "I will tell people that you have gone away for a bit."
        },
        {
          "name": "/back",
          "value": "I will tell people that you're back."
        },
        {
          "name": "/serverinfo",
          "value": "I will tell you a bit about this server."
        },
        {
          "name": "/kick <@user> <reason>",
          "value": "I will kick the mentioned user from the presence of the server."
        },
        {
          "name": "/ban <@user> <reason>",
          "value": "I will ban the mentioned user from the presence of the server."
        },
        {
          "name": "/purge <amount>",
          "value": "I will clear the specified amount of messages in the channel."
        },
        {
          "name": "/ping",
          "value": "I will send a message and return with the latency."
        },
        {
          "name": "/sleep",
          "value": "I will say good night to you :)"
        }
      ]
    };
    message.channel.send({embed});
  }

  // Contains the Channel ID command
  if(command == "cid"){
    cid = message.channel.id
    console.log(`The READLINE channel id is now set to the channel: ${message.channel.name} : ${message.channel.id} in the server, ${message.channel.guild.name} : ${message.channel.guild.id}`)
    message.delete()
    //message.channel.send("**I can now send messages in this channel: " + "<" + "#" + cid + ">" + " from my console.**")
  }

  // Contains the User Info command
  if(command == "userinfo"){
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member){
      const embed = {
        "title": "Invalid Mentioned Member",
        "description": "Please mention a valid member of this server",
        "url": "",
        "color": 16741376,
        "fields": []
      };
      return message.channel.send({embed});
    }

    const embed = {
      "title": "Username",
      "description": member.user.tag,
      "url": "",
      "color": 16741376,
      "timestamp": member.user.createdAt,
      "footer": {
        "icon_url": bot.user.avatarURL,
        "text": bot.user.username
      },
      "thumbnail": {
        "url": member.user.avatarURL
      },
      "author": {
        "name": member.user.username,
        "url": "https://discordapp.com",
        "icon_url": member.user.avatarURL
      },
      "fields": [
        {
          "name": "Status",
          "value": member.user.presence.status
        },
        {
          "name": "User ID",
          "value": member.user.id
        },
        {
          "name": "Date Created",
          "value": member.user.createdAt
        }
      ]
    };
    message.channel.send({ embed });
  }

  // Contains the Ping Latency command
  if(command == "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`**Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms**`);
  }

  // Contains the Say command
  if(command == "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }

  // Contains the KICK command
  if(command == "kick") {
    function invalidMemberKick(){
      const embed = {
        "title": "",
        "description": "The mentioned member is an invalid member.",
        "url": "",
        "color": 16764160,
        "author": {
          "name": "Invalid Member",
          "url": "",
          "icon_url": message.author.avatarURL
        },
        "fields": [
          {
            "name": "Moderator",
            "value": `<@${message.author.id}>`
          },
          {
            "name": "Reason",
            "value": "Member mentioned is not valid."
          }
        ]
      };
      message.channel.send({embed});
    }
    function noKickPerms(){
      const embed = {
        "title": "",
        "description": `You do not have permissions to kick.`,
        "url": "",
        "color": 16764160,
        "author": {
          "name": "No Permission",
          "url": "",
          "icon_url": message.author.avatarURL
        },
        "fields": [
          {
            "name": "User",
            "value": `<@${message.author.id}>`
          },
          {
            "name": "Reason",
            "value": "No kick permissions."
          }
        ]
      };
      message.channel.send({embed});
    }
    function memberKicked(){
      const embed = {
        "title": "User",
        "description": `<@${member.user.id}>`,
        "url": "",
        "color": 16711680,
        "author": {
          "name": "Member Kicked",
          "url": "",
          "icon_url": member.user.avatarURL
        },
        "fields": [
          {
            "name": "Moderator",
            "value": `<@${message.author.id}>`
          },
          {
            "name": "Reason",
            "value": `${reason}`
          }
        ]
      };
      message.channel.send({embed});
    }

    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admin", "Staff", "Administrator", "Moderator", "Sethtek Bot"].includes(r.name)) )
      return noKickPerms()

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return invalidMemberKick()
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    // Now, time to kick!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    memberKicked()
  }

  // Commands only @Sethtek Dev#0412 can use
  if(message.author.id = 384896058318389248){
    // Contains the OWNERKICK command
    if(command == "ownerkick") {
      function invalidMemberKick(){
        const embed = {
          "title": "",
          "description": "The mentioned member is an invalid member.",
          "url": "",
          "color": 16764160,
          "author": {
            "name": "Invalid Member",
            "url": "",
            "icon_url": message.author.avatarURL
          },
          "fields": [
            {
              "name": "Sethtek Bot Owner",
              "value": `<@${message.author.id}>`
            },
            {
              "name": "Reason",
              "value": "Member mentioned is not valid."
            }
          ]
        };
        message.channel.send({embed});
      }
      function noKickPerms(){
        const embed = {
          "title": "",
          "description": `You do not have permissions to kick.`,
          "url": "",
          "color": 16764160,
          "author": {
            "name": "No Permission",
            "url": "",
            "icon_url": message.author.avatarURL
          },
          "fields": [
            {
              "name": "User",
              "value": `<@${message.author.id}>`
            },
            {
              "name": "Reason",
              "value": "You are not the owner of Sethtek Bot, you can't owner kick."
            }
          ]
        };
        message.channel.send({embed});
      }
      function memberKicked(){
        const embed = {
          "title": "User",
          "description": `<@${member.user.id}>`,
          "url": "",
          "color": 16711680,
          "author": {
            "name": "Member Kicked",
            "url": "",
            "icon_url": member.user.avatarURL
          },
          "fields": [
            {
              "name": "Sethtek Bot Owner",
              "value": `<@${message.author.id}>`
            },
            {
              "name": "Reason",
              "value": `${reason}`
            }
          ]
        };
        message.channel.send({embed});
      }

      // Let's first check if we have a member and if we can kick them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      // We can also support getting the member by ID, which would be args[0]
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return invalidMemberKick()
      if(!member.kickable)
        return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

      // slice(1) removes the first part, which here should be the user mention or ID
      // join(' ') takes all the various parts to make it a single string.
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      // Now, time to kick!
      await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      memberKicked()
    }

    // Contains the OWNERBAN command
    if(command == "ownerban") {
      // Most of this command is identical to kick, except that here we'll only let admins do it.
      // In the real world mods could ban too, but this is just an example, right? ;)
      let member = message.mentions.members.first();
      if(!member)
        return message.reply("Please mention a valid member of this server");
      if(!member.bannable)
        return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
      message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }
  }

  // Contains the BAN command
  if(command == "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Admin", "Staff", "Administrator", "Moderator", "Sethtek Bot"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

  // Contains the PURGE command
  if(command == "purge") {
    function noPurgePerms(){
      const embed = {
        "title": "",
        "description": `You do not have permissions to purge.`,
        "url": "",
        "color": 16764160,
        "author": {
          "name": "No Permission",
          "url": "",
          "icon_url": message.author.avatarURL
        },
        "fields": [
          {
            "name": "User",
            "value": `<@${message.author.id}>`
          },
          {
            "name": "Reason",
            "value": "No purge permissions."
          }
        ]
      };
      message.channel.send({embed});
    }

    // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.roles.some(r=>["Admin", "Staff", "Administrator", "Moderator", "Sethtek Bot"].includes(r.name)) )
      return noPurgePerms()
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

    const embed = {
      "title": `${deleteCount} Messages Deleted`,
      "description": `${deleteCount} Messages have been sucessfully deleted.`,
      "url": "",
      "color": 16727808,
      "timestamp": "2018-06-02T04:10:04.718Z",
      "thumbnail": {
        "url": "https://goo.gl/Dy4o7o"
      },
      "fields": []
    };
    message.channel.send({embed});
  }

  // Contains the SERVER INFO command
  if(command == "serverinfo"){
    const embed = {
      "title": "Server ID",
      "description": bot.guilds.id,
      "url": "",
      "color": 16741376,
      "timestamp": bot.guilds.createdAt,
      "footer": {
        "icon_url": bot.user.avatarURL,
        "text": bot.user.username
      },
      "thumbnail": {
        "url": message.author.user.avatarURL
      },
      "author": {
        "name": message.author.guild.name,
        "url": "https://discordapp.com",
        "icon_url": message.author.user.avatarURL
      },
      "fields": [
        {
          "name": "Status",
          "value": message.author.user.presence.status
        },
        {
          "name": "User ID",
          "value": message.author.user.id
        },
        {
          "name": "Date Created",
          "value": message.author.user.createdAt
        }
      ]
    };
    message.channel.send({ embed });
  }

  // Contains the About command
  if(command == "about"){
    const embed = {
      "title": "About Me",
      "description": "I'm an all in one Discord bot. \n I can do many things. \n \n **Type /help for commands.**",
      "url": "",
      "color": 16738048,
      "timestamp": "2018-06-01T21:26:18.432Z",
      "footer": {
        "icon_url": bot.user.avatarURL,
        "text": "© Sethtek Dev 2018 | v2.0"
      },
      "thumbnail": {
        "url": bot.user.avatarURL
      },
      "author": {
        "name": "Sethtek Bot | Info",
        "url": "https://sites.google.com/view/sethtek-bot/home",
        "icon_url": bot.user.avatarURL
      },
      "fields": [
        {
          "name": "Current users",
          "value": `${bot.users.size}`
        },
        {
          "name": "Current channels",
          "value": `${bot.channels.size}`
        },
        {
          "name": "Current guilds",
          "value": `${bot.guilds.size}`
        },
        {
          "name": "Creator",
          "value": "Sethtek Dev ``aka`` <@384896058318389248>"
        }
      ]
    };
    message.channel.send({embed});
  }

  // Contains the Embed Test command
  if(command == "embed"){
    const embed = {
      "title": "GO TO DISCORD BOI!",
      "description": "GIT [CANARY](https://canary.discordapp.com) HERE BOI!!",
      "url": "https://discordapp.com",
      "color": 3145472,
      "timestamp": "2018-06-01T23:47:21.905Z",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
        "text": "foot text. blblblblblbl ah ah aah"
      },
      "author": {
        "name": "THIS IS AN EMBED!!",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "fields": [
        {
          "name": "TEST 1",
          "value": "INLINE :)",
          "inline": true
        },
        {
          "name": "TEST 2",
          "value": "ye",
          "inline": true
        },
        {
          "name": "WHY AM I YELLING?",
          "value": "because this is kinda annoying...",
          "inline": true
        },
        {
          "name": "LaStInLiNe",
          "value": "such wow.",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });
  }

  // Contains the Sleep command
  if(command == "sleep"){
    const embed = {
      "title": "Good night",
      "description": `${message.author.username}, cya tomorrow. :wave: `,
      "url": "",
      "color": 1907997,
      "timestamp": "2018-06-01T21:26:18.432Z",
      "footer": {
        "icon_url": bot.user.avatarURL,
        "text": "Sleep"
      },
      "thumbnail": {
        "url": "https://goo.gl/iicUH7"
      },
      "author": {
        "name": `${message.author.username} | Sleep`,
        "url": "",
        "icon_url": message.author.avatarURL
      },
      "fields": [
      ]
    };
    message.channel.send({embed});
  }

  // I will ping you and reply
  if(command == "pingme"){
    message.reply("I pinged you. Now don't get mad and ban me xD")
  }

  // I will DM you
  if(command == "dmme"){
    message.author.send("Heyo, you said for me to dm you lol")
  }

  // I will tell people you're going to be afk for a while
  if(command == "afk"){
    const embed = {
      "title": "",
      "description": `<@${message.author.id}>, cya soon. :wave: `,
      "url": "",
      "color": 16722731,
      "author": {
        "name": `${message.author.username} is AFK`,
        "url": "",
        "icon_url": message.author.avatarURL
      },
      "fields": [
      ]
    };
    message.channel.send({embed});
  }

  // I will tell people you're back from afk
  if(command == "back"){
    const embed = {
      "title": "",
      "description": `<@${message.author.id}>, welcome back! :wave: `,
      "url": "",
      "color": 3997483,
      "author": {
        "name": `${message.author.username} is back`,
        "url": "",
        "icon_url": message.author.avatarURL
      },
      "fields": [
      ]
    };
    message.channel.send({embed});
  }

  if(command == "devlog") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    //bot.channels.find(id, "457552348584345601").send("● " + sayMessage)
    bot.channels.get(457552348584345601).send("● " + sayMessage);
  }

  if(command == "message"){
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(' ');
    message.member.send(reason);
  }

});
// #er

// #r --BOT LOGIN--
bot.login(config.token);
// #er
// (C) 2018 Sethtek Dev
