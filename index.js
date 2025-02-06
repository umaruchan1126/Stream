const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(${client.user.tag} - rich presence started!);

  const r = new Discord.RichPresence()
    .setApplicationId('1159127696064905256')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/imaginationxtv') //Must be a youtube video link 
    .setState('している')
    .setName('ㅤ')
    .setDetails(Thirst_trap)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('67db61ce7e450176f276f32b6ce47017.gif') //You can put links in tenor or discord and etc.

    .setAssetsSmallImage(':verifiedblack:) //You can put links in tenor or discord and etc.

    .addButton('DM', 'https://discord.gg/m1sery')
    .addButton('ONLY FANS', 'https://www.youtube.com/watch?v=2xx_2XNxxfA');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = Thirst_trap;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});
