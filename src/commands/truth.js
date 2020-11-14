const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let replies = ["What's the biggest lie you've ever told?", "Who would you want to spend 24 hours locked in a room with, and what would you do?", "What's your most embarassing text conversation?", "Would you break up with someone over text?", "How often do you think you lie to yourself?", "What would be the first thing you do if you woke up as the opposite gender?", "If you had to kiss one person here, who would you pick?", "Send every curse word you can think of in chat.", "Rate everyone here 1-10 in terms of personality.", "What's one job you'll never work?", "Out of the last three people you texted, if you had to kiss one of them who would you pick?", "What is the game that you would like to play 24/7?", "If you could date your favorite idol/celebrity for just an hour, would you?", "What is your real name"];
    let result = Math.floor((Math.random() * replies.length));
    if (user) return message.reply('This Feature isn\'t added yet, Sorry')


    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**You Choosed A Truth** \n \n${replies[result]}`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RANDOM")
    .setFooter(`if you want to add more truths go to the support server`)
    .setTimestamp()

    message.channel.send(embed);
    }

   
module.exports.help = {
    name: "truth",
    aliases: ["Truth"]
}