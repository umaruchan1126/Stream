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

const xxxx = ['P.S. I LOVE YOU (Paul Partohap)'];

const randomTexts = [
  '🖤🤍Come Talk to me🖤🤍'


];

const randomtext3 = [
  
  '𝓛𝓸𝓿𝓮 𝓲𝓷 𝓽𝓱𝓮 𝓣𝓲𝓶𝓮 𝓸𝓯 𝓒𝓱𝓸𝓵𝓮𝓻𝓪',
  '𝓛𝓸𝓿𝓮 𝓛𝓮𝓽𝓽𝓮𝓻𝓲𝓷𝓰',
  '𝓣𝓱𝓮 𝓛𝓸𝓿𝓮𝓵𝔂 𝓑𝓸𝓷𝓮𝓼',
  '𝓣𝔀𝓮𝓷𝓽𝔂-𝓸𝓷𝓮 𝓣𝓻𝓾𝓽𝓱𝓼 𝓐𝓫𝓸𝓾𝓽 𝓛𝓸𝓿𝓮',
  '𝓛𝓸𝓿𝓮 𝓛𝓮𝓽𝓽𝓮𝓻𝓼 𝓽𝓸 𝓽𝓱𝓮 𝓓𝓮𝓪𝓭',
  '𝓘 𝓣𝓱𝓲𝓷𝓴 𝓘 𝓛𝓸𝓿𝓮 𝓨𝓸𝓾',
  '𝓣𝓱𝓮𝓻𝓮𝓼 𝓝𝓸 𝓣𝓲𝓶𝓮 𝓕𝓸𝓻 𝓛𝓸𝓿𝓮',
  '𝓛𝓸𝓿𝓮, 𝓛𝓲𝓮𝓼 𝓪𝓷𝓭 𝓢𝓹𝓲𝓮𝓼',


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
