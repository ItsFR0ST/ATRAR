
Change the msg1, msg2, msg3 to any message you want

Don't forget that this bot belongs to us 

Never ever try to edit the credits

I give you this bot just to use it for your private use, Don't try to copy the bot and make it your own bot or even make it a public bot that everyone will use arround Discord

If you have any issus just make a request on the github and wait till I reply it

To add your own prefix head to [botconfig](https://github.com/ItsFR0ST/ATRAR-Free/blob/main/src/botconfig.json)


 ***Because I am kinda lazy*** you gotta edit every command contains ```  botFetch = client.users.cache.get('YourbotID')``` to your bot id so that will make it works if there's any errors with that dm me on discord `LoneFrosty#9026` and thx for using my bot files to make your own bot

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
  
