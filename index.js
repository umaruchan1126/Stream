const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

const Thirst_trap = "Looking good, huh?"; // Define this variable

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const richPresenceOptions = {
    applicationId: '1159127696064905256',
    type: 'STREAMING',
    url: 'https://www.twitch.tv/imaginationxtv', // Correct URL (must be a streaming platform like Twitch)
    state: 'している',
    name: 'ㅤ', 
    details: Thirst_trap,
    startTimestamp: Date.now(),
    assets: {
      large_image: '67db61ce7e450176f276f32b6ce47017.gif',
      small_image: ':verifiedblack:' // Corrected small image emoji
    },
    buttons: [
      { label: 'DM', url: 'https://discord.gg/m1sery' },
      { label: 'ONLY FANS', url: 'https://www.youtube.com/watch?v=2xx_2XNxxfA' }
    ]
  };

  // Set activity
  client.user.setActivity(richPresenceOptions);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      // Update details with new time or other logic
      richPresenceOptions.details = Thirst_trap;
      client.user.setActivity(richPresenceOptions);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

// Login with your Discord token (ensure to replace with your actual token)
client.login('YOUR_DISCORD_TOKEN');
