const { replaceStringTransformer } = require("common-tags")
const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let user = (message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1]) || message.author)   
    let replies = ["Looks Good", "This epic an avatar", "Nice avatar", "This avatar is good", "Nice"];
    let result = Math.floor((Math.random() * replies.length));
    if (!user === message.author) message.channel.send(embed)

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`This your Avatar ${user}, ` + replies[result])
        .setImage(client.users.cache.get(user.id).displayAvatarURL({ size: 2048, dynamic: true }))
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())


    message.channel.send(embed)


}
module.exports.help = {
    name: 'avatar',
    aliases: ['av']
}   