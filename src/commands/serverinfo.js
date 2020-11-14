const moment = require('moment');
const Discord = require("discord.js")

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports.run = async (client, message) => {
    botFetch = client.users.cache.get('732645141839609958')

    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Server information for __${message.guild.name}__**`)
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('General', [
            `**» Name:** ${message.guild.name}\n
            **» ServerID:** ${message.guild.id}\n
            **» Owner:** ${message.guild.owner.user.tag} **»OwnerID:** (${message.guild.ownerID})\n
            **» Region:** ${regions[message.guild.region]}\n
            **» Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}\n
            **» Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}\n
            **» Verification Level:** ${verificationLevels[message.guild.verificationLevel]}\n
            **» Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
        ])
        .addField('Statistics', [`
            **» Emoji Count:** ${emojis.size}\n
            **» Member Count:** ${message.guild.memberCount}\n
            **» Text Channels:** ${channels.filter(channel => channel.type === 'text').size}\n
            **» Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
        ])
            
        .setTimestamp()
        .setFooter(`ATRAR Version: 1.64`, botFetch.displayAvatarURL())
    message.channel.send(embed);

};

module.exports.help = {
    name: "serverinfo",
    aliases: ["si"]
}