const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1221090089514434620/1267775876918153308/5A0DE3F5-5BB6-4881-9CA2-38ED6D3F9ABF.gif?ex=6720aacb&is=671f594b&hm=e990c02f69b7413bd3f12ace8f77c3654f98fb0d3b21d7ec4fb7abde4b58f599&",
  
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
  
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['Anti-Hero (Taylor Swift)'];

const randomTexts = [
  '🖤🤍Come Talk to me🖤🤍'


];

const randomtext3 = [
  
  '𝓘𝓽𝓼 𝓶𝓮, 𝓱𝓲, 𝓘𝓶 𝓽𝓱𝓮 𝓹𝓻𝓸𝓫𝓵𝓮𝓶, 𝓲𝓽𝓼 𝓶𝓮',
  '𝓐𝓽 𝓽𝓮𝓪 𝓽𝓲𝓶𝓮, 𝓮𝓿𝓮𝓻𝔂𝓫𝓸𝓭𝔂 𝓪𝓰𝓻𝓮𝓮𝓼',
  '𝓘𝓵𝓵 𝓼𝓽𝓪𝓻𝓮 𝓭𝓲𝓻𝓮𝓬𝓽𝓵𝔂 𝓪𝓽 𝓽𝓱𝓮 𝓼𝓾𝓷 𝓫𝓾𝓽 𝓷𝓮𝓿𝓮𝓻 𝓲𝓷 𝓽𝓱𝓮 𝓶𝓲𝓻𝓻𝓸𝓻',
  '𝓘𝓽 𝓶𝓾𝓼𝓽 𝓫𝓮 𝓮𝔁𝓱𝓪𝓾𝓼𝓽𝓲𝓷𝓰 𝓪𝓵𝔀𝓪𝔂𝓼 𝓻𝓸𝓸𝓽𝓲𝓷𝓰 𝓯𝓸𝓻 𝓽𝓱𝓮 𝓪𝓷𝓽𝓲-𝓱𝓮𝓻𝓸',
  '𝓢𝓸𝓶𝓮𝓽𝓲𝓶𝓮𝓼 𝓘 𝓯𝓮𝓮𝓵 𝓵𝓲𝓴𝓮 𝓮𝓿𝓮𝓻𝔂𝓫𝓸𝓭𝔂 𝓲𝓼 𝓪 𝓼𝓮𝔁𝔂 𝓫𝓪𝓫𝔂',
  '𝓐𝓷𝓭 𝓘𝓶 𝓪 𝓶𝓸𝓷𝓼𝓽𝓮𝓻 𝓸𝓷 𝓽𝓱𝓮 𝓱𝓲𝓵𝓵',
  '𝓣𝓸𝓸 𝓫𝓲𝓰 𝓽𝓸 𝓱𝓪𝓷𝓰 𝓸𝓾𝓽, 𝓼𝓵𝓸𝔀𝓵𝔂 𝓵𝓾𝓻𝓬𝓱𝓲𝓷𝓰 𝓽𝓸𝔀𝓪𝓻𝓭 𝔂𝓸𝓾𝓻 𝓯𝓪𝓿𝓸𝓻𝓲𝓽𝓮 𝓬𝓲𝓽𝔂',
  '𝓟𝓲𝓮𝓻𝓬𝓮𝓭 𝓽𝓱𝓻𝓸𝓾𝓰𝓱 𝓽𝓱𝓮 𝓱𝓮𝓪𝓻𝓽, 𝓫𝓾𝓽 𝓷𝓮𝓿𝓮𝓻 𝓴𝓲𝓵𝓵𝓮𝓭',


];

const randomtext4 = [
  '★☆★☆★☆★', '☆★☆★☆★☆'


];

const randomtext5 = [];

const randomLinks = [
  "https://matias.me/nsfw/",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();

  return {
    timestampMidnight,
    timestampEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 7) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = "Badminton"


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`CRAMMING`)
      .setURL('https://www.twitch.tv/sachihirokun')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1159457353029140521")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${randomButtonText3}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
