
module.exports.run = async (bot, message) => {

    if (message.author.id != "541215388600500235") return message.channel.send("You're not the bot the owner!")


    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch (e) {
        message.channel.send(`ERROR: ${e.message}`)
    }



}

module.exports.help = {
    name: "shutdown",
    aliases: ["close, sleep"]
}