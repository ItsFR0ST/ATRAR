const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    let subreddits = [  
    'https://cdn.weeb.sh/images/ryg2dd7wW.gif',
    'https://cdn.weeb.sh/images/BJ0sOOmDZ.gif',
    'https://cdn.weeb.sh/images/B1wRd_XP-.gif',
     'https://cdn.weeb.sh/images/BJCCd_7Pb.gif',
     'https://cdn.weeb.sh/images/BJF5_uXvZ.gif',
     'https://cdn.weeb.sh/images/S1qX2OJ_Z.gif',
     'https://cdn.weeb.sh/images/ByPGRkFVz.gif',
    'https://cdn.weeb.sh/images/SJfEks3Rb.gif',
    'https://cdn.weeb.sh/images/B1wRd_XP-.gif',
     'https://cdn.weeb.sh/images/B11CDkhqM.gif',
     'https://cdn.weeb.sh/images/BysjuO7D-.gif',
     'https://cdn.weeb.sh/images/S1OAduQwZ.gif',
     'https://cdn.weeb.sh/images/r1G3xCFYZ.gif'
    ]

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply("Mention someone to hug!");
    let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["It's a big hug", "Don't Squeeze too hard", "What a nice hug", "Cute hug"];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author.username} is hugging ${user}\n`+ ` ${replies[result]}`)  
         .setImage(sub)
         .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "hug",
    aliases: ["hugg"]
}
