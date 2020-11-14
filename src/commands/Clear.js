const Discord = require('discord.js')



module.exports.run = async (bot, message, args) => {


    if (!args[0]) return message.reply(nospecs);
    if (isNaN(args[0])) return message.reply("The amount parameter isn't a number!");
    if (args[0] > 100) return message.reply("You can't delete more than 100 messages at once!");
    if (args[0] < 1) return message.reply('You have to delete at least 1 message!');




    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You don't have the premission to do that!")
    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply("I don\'t have permission to manage messages\n Give me the premission to manage messages");

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
        message.channel.bulkDelete(messages)
        message.channel.send(`Chat Cleared.`).then(m => m.delete(5000))     
        message.delete();
    });
}



module.exports.help = {
    name: "clear",
    aliases: ["Clear", "clearchat", "cchat", "cc", "CC"]
}



