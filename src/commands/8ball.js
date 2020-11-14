
module.exports.run = async (bot, message, args) => {

    //!8ball question
    if (!args[1]) return message.reply("Plesae enter a full question with 2 words or more words!");
    let replies = ["Yes", "I don't care", "Ask someone else man", "No", "I don't know", "Ask again later!", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", "Maybe", "who knows", "It is certain","It is decidedly so","Without a doubt","Yes, definitely","You may rely on it","As I see it, yes","Most likely","Outlook good", "Signs point to yes","Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no","My sources say no","Outlook not so good","Very doubtful"];
    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(`🎱 ` + replies[result] + ` 🎱`)

}
module.exports.help = {
    name: "8ball",
    aliases: ["ball"]
}


