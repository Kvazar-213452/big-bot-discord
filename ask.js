const { Client, Intents, MessageEmbed } = require('discord.js');
const token = "";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '#!';

// Объект для хранения активных опросов в разных каналах
const activePolls = new Map();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    ping(message);
  } else if (command === 'startpoll') {
    startPoll(message, args);
  }
});

// Функция для отправки сообщения "pong"
function ping(message) {
  message.channel.send('Pong!');
}

// Функция для начала опроса
function startPoll(message, args) {
  const channelID = message.channel.id;
  const question = args.join(' ').match(/"(.*?)"/)[1]; // Получаем текст в кавычках
  const emojis = args.slice(question.split(' ').length); // Остальные аргументы - это эмоции
  
  // Создание нового опроса
  const pollEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Опрос')
    .setDescription(question)
    .setFooter('Чтобы проголосовать, нажмите соответствующую реакцию.');

  message.channel.send({ embeds: [pollEmbed] })
    .then(sentMessage => {
      // Добавление реакций к сообщению опроса
      emojis.forEach(emoji => {
        sentMessage.react(emoji);
      });
      
      // Добавление опроса в активные для данного канала
      if (!activePolls.has(channelID)) {
        activePolls.set(channelID, [sentMessage.id]);
      } else {
        activePolls.get(channelID).push(sentMessage.id);
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке опроса:', error);
    });
}

// Обработчик реакций к сообщениям
client.on('messageReactionAdd', (reaction, user) => {
  // Проверка, является ли реакция частью активного опроса
  if (!user.bot && activePolls.has(reaction.message.channel.id) && activePolls.get(reaction.message.channel.id).includes(reaction.message.id)) {
    // Ваша логика для обработки голосования здесь
    console.log(`Пользователь ${user.tag} проголосовал в опросе.`);
  }
});

client.login(token);
