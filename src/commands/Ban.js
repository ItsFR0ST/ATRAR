const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
	botFetch = client.users.cache.get('776471071443779634')

	let userHighestRole = user.roles.highest
	let authorHighestRole = message.member.roles.highest
	let botHighestRole = botFetch.roles.highest

	if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You Don\'t have the permission to use that!')
	if (!message.guild.me.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])|| !message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply('I don\'t have the permission to do that')
	if (user.id == '761179158176071691') return message.channel.send('You Can\'t Ban me!')
	if (!user) return message.channel.send('You hav\'t choose a member to ban.')
	if (user.bot) return message.channel.send('You Can\'t ban bots!')
	if (user.id == message.author.id) return message.channel.send('You can\'t ban yourself!')
	if (user.id == '541215388600500235') return message.channel.send('You can\'t ban my creator!!')
	if (userHighestRole.comparePositionTo(authorHighestRole) > 0) return message.channel.send('You can\'t ban this member due to roleHierarchy.')
	if (userHighestRole.equals(authorHighestRole)) return message.channel.send('You can\'t ban this member due to roleHierarchy')
	if (userHighestRole.comparePositionTo(botHighestRole) > 0) return message.channel.send('You can\'t ban this bot due to role roleHierarchy')
	if (userHighestRole.equals(botHighestRole)) return message.channel.send('You can\'t ban this bot due to role roleHierarchy')


	const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
	const banReason = args.slice(1).join(' ');
	if (!banReason) banReason = "No reason given";
	message.guild.members.ban(user, { reason: banReason });
	const banConfirm = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setDescription(`✅ ${user} has been successfully banned!\nReason: __${banReason}__`)
		.setFooter(`Version: 1.65`, botFetch.displayAvatarURL())
	message.channel.send(banConfirm);

	let bandm = new Discord.MessageEmbed()
		.setTitle("Ban")
		.setColor("#00FF00")
		.setDescription(`You have been Banned From \`${message.guild.name}\``)
		.addField("Banned by", message.author)
		.addField("Reason", reason)
		.setTimestamp()
		.setFooter(`Version: 1.65`, botFetch.displayAvatarURL())

	user.send(bandm);
}

module.exports.help = {
	name: "ban",
	aliases: ["Ban"]
}