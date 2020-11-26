const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    botFetch = client.users.cache.get('732645141839609958')

    var subreddits = [
        'https://cdn.weeb.sh/images/By3PVJFDZ.gif',
        'https://cdn.weeb.sh/images/HytD41KPZ.gif',
        'https://cdn.weeb.sh/images/ByPqNkYwb.gif',
        'https://cdn.weeb.sh/images/Hk6cNJKPb.gif',
        'https://cdn.weeb.sh/images/rJcE4ytDb.gif',
        'https://cdn.weeb.sh/images/HJz44ytDW.gif',
        'https://cdn.weeb.sh/images/B1lUN1tDb.gif'
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let replies = ["smiles", "is happy", "has a grin!"];
    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`${message.author} ${replies[result]}`)
        .setImage(sub)
        .setTimestamp()
        .setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "happy",
    aliases: [""]
}
