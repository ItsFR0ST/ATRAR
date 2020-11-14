
module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Please provide a user to remove a role too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to remove from said user.") 
    let reason = args.slice(2).join(" ")
    if(!reason) reason = 'No reason given'

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")

    if(!user.roles.has(role.id)) {
        return message.channel.send(`${user.user.tag}, doesnt have the role!`)
    } else {
        await user.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`The role, ${role}, has been removed from ${user.user.tag}.`)
    }

}

module.exports.help = {
    name: "removerole",
    aliases: ["rr"]
}