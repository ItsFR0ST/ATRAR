const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')


    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You don\'t have the permission to use that")
    if (!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.reply('I don\'t have the permission to do that')
    let mChannel = message.mentions.channels.first()
    let argsresult;

    message.delete()
    if (mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    
        if (!argsresult) return message.reply('You must type a message to say.')
        if (!mChannel) return message.reply('You must choose a channel to send the message to.')

}
   let embed = new Discord.MessageEmbed()
   .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
   .setTitle('Announcement')
   .setDescription(argsresult)
   .addField('Sent by', `${message.author}`)
   .setColor("RANDOM")
   .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
   .setTimestamp()
   message.channel.send(embed);
    
}

module.exports.help = {
    name: "announcement",
    aliases: ["acc", "say"]
}