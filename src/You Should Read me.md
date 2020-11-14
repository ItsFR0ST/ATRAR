
Change the msg1, msg2, msg3 to any message you want

Don't forget that this bot belongs to us 

Never ever try to edit the credits

I give you this bot just to use it for your private use, Don't try to copy the bot and make it your own bot or even make it a public bot that everyone will use arround Discord

If you have any issus just make a request on the github and wait till I reply it

```js
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

  setInterval(async () => {
    let statuslist = [
      `msg1`,
      `msg2`,
      `msg3`
    ]
    const random = Math.floor(Math.random() * statuslist.length)

    bot.user.setActivity(`${statuslist[random]}`, { type: 'PLAYING' })
  }, 20000)
  