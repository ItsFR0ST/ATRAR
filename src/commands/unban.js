module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to use this command!")
    
    let bannedMember = await bot.fetchUser(args[0])
    if (!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command!\n Give me the permission **Ban Members**")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`✅ ${bannedMember.tag} has been unbanned from this server!`)
    } catch(e) {
        console.log(e.message)
    }
    
}

module.exports.help = {
    name: "unban",
    aliases: ["ub", "unbanish"]
}