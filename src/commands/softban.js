module.exports.run = async (bot, message, args) => {

   if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")

    var banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
   if(!banMember) return message.reply('Please provide a user to ban!')

   let reason = args.slice(1).join(" ");
   if(!reason) reason = "No reason given!"

    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command\n Give me the permission **Ban Members**")

   banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
   message.guild.ban(banMember, { days: 1, reason: reason})).then(() => message.guild.unban(banMember.id, { reason: "Softban"})).catch(err => console.log(err))

    message.channel.send(`**✅ ${banMember.user.tag}** has been banned\n Reason: ${reason}`)
}

module.exports.help = {
    name: "softban",
    aliases: ["sb", "sbanish"]
}