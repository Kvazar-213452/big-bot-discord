const { Client, Intents, MessageAttachment, MessageEmbed } = require('discord.js');
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');
const token = "";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '##';


client.once('ready', () => {
  console.log('ready!');
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    ping(message);
  } else if (command === 'music_artilce') {
    Music_Article(message);
  } else if (command === 'photo_capybara') {
    capybara(message);
  } else if (command === 'user_information') {
    user_information(message);
  } else if (command === 'random_facts') {
    random_facts(message);
  } else if (command === 'magic_cube') {
    magic_cube(message);
  } else if (command === 'created') {
    created(message);
  } else if (command === 'help') {
    help(message);
  } else if (command === 'command') {
    command1(message);
  } else if (command === 'calculator') {
    calculator(message);
  } else if (command === 'anecdote') {
    anecdote(message);
  } else if (command === 'meme') {
    meme(message);
  } else if (command === 'gratitude') {
    gratitude(message);
  } else if (command === 'message') {
    message1(message);
  } else if (command === 'apology') {
    apology(message);
  } else if (command === 'server') {
    server1(message);
  } else if (command === 'global_time') {
    global_time(message);
  } else if (command === 'time') {
    const country = args[0]; 
    time1(message, country);
  } else if (command === 'cat') {
    cat(message);
  } else if (command === 'random_user') {
    random_user(message);
  } else if (command === 'random_number') {
    random_number(message, args);
  } else if (command === 'quote') {
    quote(message);
  } else if (command === 'documentation_bot') {
    documentation_bot(message);
  } else if (command === 'artecle_site') {
    artecle_site(message);
  } else if (command === 'bot_link') {
    bot_link(message);
  } else if (command === 'coin') {
    coin(message);
  } else if (command === 'password') {
    password(message);
  } else if (command === 'random_username') {
    random_username(message);
  } else if (command === 'random_dog') {
    random_dog(message);
  } else if (command === 'random_nature') {
    random_nature(message);
  } else if (command === 'random_space') {
    random_space(message);
  } else if (command === 'caress') {
    caress(message, args);
  } else if (command === 'riddles') {
    riddles(message);
  } else if (command === 'riddles') {
    riddles(message);
  } else if (command === 'game') {
    playGame(message);
  } else if (command === 'compliment') {
    compliment(message);
  } else if (command === 'random_food_recipe') {
    random_food_recipe(message);
  } else if (command === 'hallo') {
    hallo(message);
  } else if (command === 'gif') {
    gif(message);
  } else if (command === 'poem') {
    poem(message);
  } else if (command === 'programming_joke') {
    programming_joke(message);
  } else if (command === 'programming_joke_text') {
    programming_joke_text(message);
  } else if (command === 'memory') {
    memory(message);
  } else if (command === 'space_fact') {
    space_fact(message);
  } else if (command === 'interesting_book') {
    interesting_book(message);
  } else if (command === 'random_car') {
    car(message);
  } else if (command === 'random_movies') {
    random_movies(message);
  } else if (command === 'random_history_fact') {
    random_history_fact(message);
  } else if (command === 'random_chocolate_fact') {
    random_chocolate_fact(message);
  } else if (command === 'random_career_advice ') {
    random_career_advice(message);
  } else if (command === 'people') {
    people(message);
  } else if (command === 'fact_dog') { 
    fact_dog(message);
  } else if (command === 'random_neural_network') {
    random_neural_network(message);
  } else if (command === 'inspiration') {
    inspiration(message); 
  } else if (command === 'random_fact_food') {
    random_fact_food(message);
  } else if (command === 'random_science_fact') {
    random_science_fact(message);
  } else if (command === 'random_movie_quote') {
    random_movie_quote(message);
  } else if (command === 'random_proverb') {
    random_proverb(message);
  }
});        
 
function ping(message) {
    message.channel.send('pong');
}


function Music_Article(message) {
    const frameText = `
Music Article is All in One Website! You can Play Games, Listen to Music and Radio, Watch Movies and Series, Read News and Much More!
Enjoy Music Article!
`;
    const embed = new MessageEmbed()
        .setTitle('Music Article Information')
        .setDescription(frameText);
    message.channel.send({ embeds: [embed] });
}


function capybara(message) {
    const capuFolder = './capu'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random Capybara photo')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


async function user_information(message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const userId = args[1];

    if (!userId) {
        return message.channel.send("Please provide a user ID.");
    }

    try {
        const user = await client.users.fetch(userId);

        const embed = new MessageEmbed()
            .setTitle(`User Information for ${user.username}`)
            .addFields(
                { name: 'User ID', value: user.id || 'Not available', inline: true },
                { name: 'Username', value: user.username || 'Not available', inline: true },
                { name: 'Discriminator', value: user.discriminator || 'Not available', inline: true },
                { name: 'Created At', value: user.createdAt ? user.createdAt.toUTCString() : 'Not available', inline: true }
            )
            .setThumbnail(user.avatarURL({ dynamic: true }) || 'Not available');

        message.channel.send({ embeds: [embed] });
    } catch (error) {
        console.error('Error fetching user information:', error);
        message.channel.send('Unable to fetch user information. Please make sure the provided ID is correct.');
    }
}


function random_facts(message) {
    const factsArray = [
        '**Avocados are a fruit**, not a vegetable. They\'re technically considered a single-seeded berry, believe it or not.',
        '**The Eiffel Tower can be 15 cm taller during the summer**, due to thermal expansion meaning the iron heats up, the particles gain kinetic energy and take up more space.',
        '**Trypophobia is the fear of closely-packed holes**. Or more specifically, "an aversion to the sight of irregular patterns or clusters of small holes or bumps." No crumpets for them, then.',
        '**Allodoxaphobia is the fear of other people\'s opinions**. It\'s a rare social phobia that\'s characterised by an irrational and overwhelming fear of what other people think.',
        '**Australia is wider than the moon**. The moon sits at 3400km in diameter, while Australia’s diameter from east to west is almost 4000km.',
        '**\'Mellifluous\' is a sound that is pleasingly smooth and musical to hear**.',
        '**The Spice Girls were originally a band called Touch**. "When we first started [with the name Touch], we were pretty bland," Mel C told The Guardian in 2018. "We felt like we had to fit into a mould."',
        '**Emma Bunton auditioned for the role of Bianca Butcher in Eastenders**. Baby Spice already had a small part in the soap back in the 90s but tried out for a full-time role. She was pipped to the post by Patsy Palmer but ended up auditioning for the Spice Girls not long after.',
        '**Human teeth are the only part of the body that cannot heal themselves**. Teeth are coated in enamel which is not a living tissue.',
        '**It\'s illegal to own just one guinea pig in Switzerland**. It\'s considered animal abuse because they\'re social beings and get lonely.',
        '**The Ancient Romans used to drop a piece of toast into their wine for good health - hence why we \'raise a toast\'.**',
        '**The heart of a shrimp is located in its head**. They also have an open circulatory system, which means they have no arteries and their organs float directly in blood.',
        '**Amy Poehler was only seven years older than Rachel McAdams when she took on the role of "cool mom" in Mean Girls. Rachel was 25 as Regina George - Amy was 32 as her mum.**',
        '**People are more creative in the shower. When we take a warm shower**, we experience an increased dopamine flow that makes us more creative.',
        '**Baby rabbits are called kits. Cute!**',
        '**The unicorn is the national animal of Scotland**. It was apparently chosen because of its connection with dominance and chivalry as well as purity and innocence in Celtic mythology.',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random Fact')
        .setDescription(`${randomFact}`);

    message.channel.send({ embeds: [embed] });
}


function magic_cube(message) {
    const factsArray = [
        '**Yes**',
        '**No**',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    message.channel.send(`${randomFact}`);
}


function created(message) {
    message.channel.send('**Created:** __**Article studio**__');
}


function command1(message) {
const frameText = `
**${prefix}ping** - __**pong**__;
**${prefix}music_artilce** - __**About Article**__;
**${prefix}photo_capybara** - __**Random photo of a capybara**__;
**${prefix}user_information** - __**Information about the user**__;
**${prefix}random_facts** - __**Random fact**__;
**${prefix}magic_cube** - __**Yes or No**__;
**${prefix}created** - __**Who created the bot?**__;
**${prefix}help** - __**Help**__;
**${prefix}command** - __**All command**__;
**${prefix}calculator** - __**Performs the function of a calculator**__;
**${prefix}anecdote** - __**Random anecdote**__;
**${prefix}meme** - __**Random meme**__;
**${prefix}gratitude** - __**The bot writes a thank you note**__;
**${prefix}message** - __**On behalf of the bot, sends a message to the user by ID**__;
**${prefix}apology** - __**The bot writes an apology**__;
**${prefix}server** - __**Server information**__;
**${prefix}global_time** - __**Global time**__;
**${prefix}time** - __**You can specify the time of the country of the city**__;
**${prefix}cat** - __**Random cat**__;
**${prefix}random_user** - __**Random user**__;
**${prefix}random_number** - __**A random number that can be specified from and to**__;
**${prefix}quote** - __**quote**__;
**${prefix}documentation_bot** - __**Documentation bot URL**__;
**${prefix}artecle_site** - __**Artecle site**__;
**${prefix}bot_link** - __**Bot link**__;
**${prefix}coin** - __**Heads or tails**__;
**${prefix}password** - __**Random password**__;
**${prefix}random_username** - __**random username**__;
**${prefix}random_dog** - __**Random dog**__;
**${prefix}random_nature** - __**Random nature**__;
**${prefix}random_space** - __**Random space**__;
**${prefix}caress** - __**Kind words**__;
**${prefix}riddles** - __**Random riddles**__;
**${prefix}game** - __**Game rock paper scissors**__;
**${prefix}compliment** - __**Random compliment**__;
**${prefix}random_food_recipe** - __**Random food recipe**__;
**${prefix}hallo** - __**Hallo**__;
**${prefix}gif** - __**Random gif**__;
**${prefix}poem** - __**Random poem**__;
**${prefix}programming_joke** - __**Random programming joke photo**__;
**${prefix}programming_joke_text** - __**Random programming joke text**__;
**${prefix}memory** - __**Tips for memory**__;
**${prefix}space_fact** - __**Random space fact**__;
**${prefix}interesting_book** - __**Random interesting book**__;
**${prefix}random_car** - __**Random car**__;
**${prefix}random_movies** - __**Random movies**__;
**${prefix}random_history_fact** - __**Random history fact**__;
**${prefix}random_chocolate_fact** - __**Random chocolate fact**__;
**${prefix}random_career_advice** - __**Random career advice**__;
**${prefix}people** - __**Random people photo**__;
**${prefix}fact_dog** - __**Random fact dog**__;
**${prefix}random_neural_network** - __**Random neural network**__;
**${prefix}inspiration** - __**Random inspiration**__;
**${prefix}random_fact_food** - __**Random fact food**__;
**${prefix}random_science_fact** - __**random science fact**__;
**${prefix}random_movie_quote** - __**random movie quote**__;
**${prefix}random_proverb** - __**random proverb**__;
`;
    const embed = new MessageEmbed()
        .setTitle('**Command:** __**58**__')
        .setDescription(frameText);
    message.channel.send({ embeds: [embed] });
}


function calculator(message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    args.shift(); 

    try {
        const result = eval(args.join(' '));
        message.channel.send(`Result: ${result}`);
    } catch (error) {
        message.channel.send('Invalid expression. Please provide a valid mathematical expression.');
    }
}


function calculator(message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    args.shift(); 

    try {
        const result = eval(args.join(' '));
        message.channel.send(`Result: ${result}`);
    } catch (error) {
        message.channel.send('Invalid expression. Please provide a valid mathematical expression.');
    }
}


function anecdote(message) {
    const factsArray = [
        '**What did the horse say after it tripped?** \n  __**Help! I’ve fallen and I can’t giddyup!**__',
        '**Why can’t you hear a pterodactyl going to the bathroom?** \n__**Because the “P” is silent.**__',
        '**What do you call a well-balanced horse?** \n __**Stable.**__',
        '**What do you call an angry carrot?** \n __**A steamed veggie.**__',
        '**Where do polar bears keep their money?** \n __**In a snowbank.**__',
        '**How do you make an egg-roll?** \n __**You push it!**__',
        '**What would bears be without bees?** \n __**Ears.**__',
        '**What do you call a pile of cats?** \n __**A meow-ntain.**__',
        '**Why do cows wear bells?** \n __**Because their horns don’t work.**__',
        '**Why did the bicycle fall over?** \n __**Because it was two tired.**__',
        '**What did the triangle say to the circle?** \n __**You’re pointless.**__',
        '**Time flies like an arrow.** \n __**Fruit flies like a banana.**__',
        '**I ordered a chicken and an egg online.** \n __**I’ll let you know what comes first.**__',
        '**Why was Cinderella so bad at soccer?** \n __**She kept running away from the ball!**__',
        '**What do lawyers wear to court?** \n __**Lawsuits.**__',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Anecdote')
        .setDescription(`${randomFact}`);

    message.channel.send({ embeds: [embed] });
}


function meme(message) {
    const capuFolder = './mems'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random meme')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function gratitude(message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    args.shift(); 

    const targetUserID = args[0];
    const targetUser = message.guild.members.cache.get(targetUserID);

    if (!targetUser) {
        return message.channel.send('Invalid user ID. Please provide a valid user ID.');
    }

    const senderName = message.author.username;
    const targetName = targetUser.user.username;

    targetUser.send(`Thank you, ${targetName}, for your contributions! This message is from ${senderName}.`)
        .then(() => {
            message.channel.send(`Gratitude message sent to ${targetName} in private.`);
        })
        .catch(error => {
            console.error('Error sending gratitude message:', error);
            message.channel.send('There was an error sending the gratitude message.');
        });
}


function message1(message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    args.shift(); 

    const targetUserID = args.shift();
    const targetUser = message.guild.members.cache.get(targetUserID);

    if (!targetUser) {
        return message.channel.send('Invalid user ID. Please provide a valid user ID.');
    }

    const senderName = message.author.username;
    const targetName = targetUser.user.username;

    const gratitudeMessage = args.join(' '); 

    targetUser.send(`Thank you, ${targetName}, for your contributions! ${gratitudeMessage}`)
        .then(() => {
            message.channel.send(`Gratitude message sent to ${targetName} in private.`);
        })
        .catch(error => {
            console.error('Error sending gratitude message:', error);
            message.channel.send('There was an error sending the gratitude message.');
        });
}


function apology(message) {
    const args = message.content.slice(prefix.length).split(/ +/);
    args.shift(); 

    const targetUserID = args[0];
    const targetUser = message.guild.members.cache.get(targetUserID);

    if (!targetUser) {
        return message.channel.send('Invalid user ID. Please provide a valid user ID.');
    }

    const senderName = message.author.username;
    const targetName = targetUser.user.username;

    targetUser.send(`Hi ${targetName}, I wanted to apologize for any inconvenience. for your contributions! Best regards, ${senderName}.`)
        .then(() => {
            message.channel.send(`Gratitude message sent to ${targetName} in private.`);
        })
        .catch(error => {
            console.error('Error sending gratitude message:', error);
            message.channel.send('There was an error sending the gratitude message.');
        });
}


function server1(message) {
    const guild = message.guild;

    if (!guild) {
        return message.channel.send('Unable to retrieve server information.');
    }

    const serverName = guild.name;
    const memberCount = guild.memberCount;
    
    // Перевірка, чи існує власник гільдії
    const owner = guild.owner ? guild.owner.user.tag : 'N/A';

    const serverID = guild.id;
    const createdAt = guild.createdAt.toLocaleString();

    const serverInfoMessage = `
    **Server Information**
    - Server Name: ${serverName}
    - Member Count: ${memberCount}
    - Owner: ${owner}
    - Server ID: ${serverID}
    - Created At: ${createdAt}
    `;

    message.channel.send(serverInfoMessage);
}


function global_time(message) {
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString();

    message.channel.send(`Current Global Time (UTC): ${utcTime}`);
}


function time1(message, country) {
    if (!country) {
        return message.channel.send('Please provide a country name.');
    }

    const timeFormat = 'YYYY-MM-DD HH:mm:ss';
    const currentTime = moment().tz(country).format(timeFormat);

    message.channel.send(`Current Time in ${country}: ${currentTime}`);
}


function cat(message) {
    const capuFolder = './cat'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random cat')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function random_user(message) {
    // Отримання всіх користувачів на сервері
    const allUsers = Array.from(message.guild.members.cache.values());

    // Вибір випадкового користувача зі списку
    const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];

    // Отримання імені та URL аватара випадкового користувача
    const userName = randomUser.user.username;
    const avatarURL = randomUser.user.displayAvatarURL({ format: 'png', dynamic: true, size: 256 });

    // Створення вбудованого об'єкту для відправки в чат
    const embed = new MessageEmbed()
        .setTitle('Random User')
        .setDescription(`**Name:** __**${userName}**__`)
        .setImage(avatarURL);

    // Виведення імені та аватара в чат разом із рамкою
    message.channel.send({ embeds: [embed] });
}

function random_number(message, args) {
    // Перевірка, чи вказано два аргументи (нижню та верхню межі діапазону)
    if (args.length !== 2 || isNaN(args[0]) || isNaN(args[1])) {
        message.channel.send('**Invalid format. Use: `random_number [lower bound] [upper bound]**`');
        return;
    }

    const lowerBound = parseInt(args[0]);
    const upperBound = parseInt(args[1]);

    // Перевірка, чи верхня межа більше за нижню
    if (upperBound <= lowerBound) {
        message.channel.send('**The upper limit must be greater than the lower limit.**');
        return;
    }

    // Генерація випадкового числа в заданому діапазоні
    const randomNum = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

    // Створення вбудованого об'єкту для відправки в чат
    const embed = new MessageEmbed()
        .setTitle('Random Number')
        .setDescription(`**A random number in a range [${lowerBound}-${upperBound}]: ${randomNum}**`);

    // Виведення випадкового числа в чат разом із рамкою
    message.channel.send({ embeds: [embed] });
}


function quote(message) {
    const factsArray = [
        '**“Be yourself; everyone else is already taken.” \n ― Oscar Wilde**',
        '**“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.” \n― Marilyn Monroe**',
        '**“So many books, so little time.” \n― Frank Zappa**',
        '**“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.” \n― Albert Einstein**',
        '**“A room without books is like a body without a soul.” \n― Marcus Tullius Cicero**',
        '**“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.” \n― Bernard M. Baruch**',
        '**“You\'ve gotta dance like there\'s nobody watching,\nLove like you\'ll never be hurt,\nSing like there\'s nobody listening,\nAnd live like it\'s heaven on earth.”\n― William W. Purkey**',
        '**“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”\n― Dr. Seuss**',
        '**“You only live once, but if you do it right, once is enough.”\n― Mae West**',
        '**“Be the change that you wish to see in the world.”\n― Mahatma Gandhi**',
        '**“In three words I can sum up everything I\'ve learned about life: it goes on.”\n― Robert Frost**',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random Fact')
        .setDescription(`${randomFact}`);

    message.channel.send({ embeds: [embed] });
}


function documentation_bot(message) {
    message.channel.send(`
    Documentation at the link
`);
}


function artecle_site(message) {
    message.channel.send(`
    not yet available
`);
}


function bot_link(message) {
    message.channel.send(`
    not yet available
`);
}


function coin(message) {
    const factsArray = [
        '**Eagle**',
        '**Heads**',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    message.channel.send(`${randomFact}`);
}


function password(message) {
 const passwordLength = Math.floor(Math.random() * (15 - 3 + 1)) + 10;

 const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
 let password = '';
 for (let i = 0; i < passwordLength; i++) {
     const randomIndex = Math.floor(Math.random() * characters.length);
     password += characters.charAt(randomIndex);
 }

 const embed = new MessageEmbed()
     .setTitle('Generated Password')
     .setDescription(`Your random password: \`${password}\``);

 message.channel.send({ embeds: [embed] });
}


function random_username(message) {
    const factsArray = [
        '**penstudious**',
        '**glumreputation**',
        '**employermercurial**',
        '**langmaidmending**',
        '**presentstremendous**',
        '**spydocument**',
        '**balldoting**',
        '**physicistrowboat**',
        '**optimisticinfatuated**',
        '**powdertape**',
        '**holystonevaulter**',
        '**raresouthwesterly**',
        '**graceplonker**',
        '**besiegelocust**',
        '**liftdeficit**',
        '**determinedtube**',
        '**chileflyingfish**',
        '**peppersfend**',
        '**punishgorgeous**',
        '**resourceclay**',
        '**huntsnowboard**',
        '**visibilitystrike**',
        '**heardcache**',
        '**widgeoncould**',
        '**becomepleased**',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    message.channel.send(`**Username:** ${randomFact}`);
}


function random_dog(message) {
    const capuFolder = './dog'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random dog')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function random_nature(message) {
    const capuFolder = './nature'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random nature')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function random_space(message) {
    const capuFolder = './space'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random space')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function caress(message, args) {
    if (!args.length || isNaN(args[0])) {
        message.channel.send('Invalid format. Use: `caress [user ID]`');
        return;
    }

    const targetUserId = args[0];
    const targetUser = message.guild.members.cache.get(targetUserId);

    if (!targetUser) {
        message.channel.send('The user with this ID was not found on the server.');
        return;
    }

    const targetUserName = targetUser.user.username;

    const embed = new MessageEmbed()
        .setTitle('Caress')
        .setDescription(`**head patting sounds ${targetUserName}**`);

    message.channel.send({ embeds: [embed] });
}


function riddles(message) {
    const factsArray = [
        'Until I am measured, I am not known. \nYet how you miss me when I have flown.',
        'If you drop me, I\'m sure to crack, \n but give me a smile, and I\'ll always smile back.',
        'What always runs but never walks, often murmurs, never talks, has a bed but never sleeps, has a mouth but never eats?',
        'It\'s red, blue, purple and green. \n No one can reach it, not even the queen.',
        'I am the beginning of the end and the end of time and space.\nI am essential to creation, and I surround every place.',
        'The one who makes it always sells it.\nThe one who buys it never uses it.\nThe one who uses it never knows he\'s using it.',
        'What\'s black when you get it, red when you use it, and white when you\'re done with it?',
        'Each morning I appear to lie at your feet.\nAll day I will follow no matter how fast you run, yet I nearly perish in the midday sun.',
        'My life can be measured in hours.\nI serve by being devoured.\nThin, I am quick. Fat, I am slow.\nWind is my foe.',
        'You\'ve heard me before, yet you hear me again,\nThen I die \'til you call me again.',
        'At the sound of me, men may dream or stamp their feet.\nAt the sound of me, women may laugh or sometimes weep.',
        'I build up castles; I tear down mountains.\nI make some men blind; I help others to see.',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    message.channel.send(`**Riddles: ${randomFact}**`);
}


function playGame(message) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
  
    message.channel.send('Choose: rock, paper, or scissors!').then(() => {
      const filter = response => choices.includes(response.content.toLowerCase()) && response.author.id === message.author.id;
  
      message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
        .then(collected => {
          const userChoice = collected.first().content.toLowerCase();
          const result = determineWinner(userChoice, botChoice);
  
          message.channel.send(`You chose ${userChoice}. I chose ${botChoice}. ${result}`);
        })
        .catch(() => message.channel.send('Time is up!'));
    });
  }
  
function determineWinner(userChoice, botChoice) {
if (userChoice === botChoice) {
      return 'It\'s a tie!';
} else if (
      (userChoice === 'rock' && botChoice === 'scissors') ||
      (userChoice === 'paper' && botChoice === 'rock') ||
      (userChoice === 'scissors' && botChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'I win!';
    }
}


function compliment(message) {
    const factsArray = [
        'You look great today.',
        'You’re a smart cookie.',
        'I bet you make babies smile.',
        'You have impeccable manners.',
        'I like your style.',
        'You have the best laugh.',
        'I appreciate you.',
        'You are the most perfect you there is.',
        'Our system of inside jokes is so advanced that only you and I get it. And I like that.',
        'You’re strong.',
        'Your perspective is refreshing.',
        'You’re an awesome friend.',
        'You light up the room.',
        'You deserve a hug right now.',
        'You should be proud of yourself.',
        'You’re more helpful than you realize.',
        'You have a great sense of humor.',
        'You’ve got all the right moves!',
        'Is that your picture next to “charming” in the dictionary?',
        'Your kindness is a balm to all who encounter it.',
        'You’re all that and a super-size bag of chips.',
        'On a scale from 1 to 10, you’re an 11.',
        'You are brave.',
        'You’re even more beautiful on the inside than you are on the outside.',
        'You have the courage of your convictions.',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    message.channel.send(`**Compliment: ${randomFact}**`);
}


function random_food_recipe(message) {
    const factsArray = [
      `
      **Sweet Potato Hash**

      **About the Recipe**
      __**Facts about sweet potatoes**__
      
      __** Rich in antioxidants which help decrease inflammation connected to cancer prevention and treatment**__
      __**- High in fiber, beneficial for gut health, lowering cholesterol and blood sugar control**__
      __**- Rich in vitamin A, great for vision and eye health**__
      __**- Fewer calories than white potato**__
      __**- Immunity boosting properties due to rich source of vitamin C**__
      __**- Source of potassium which is beneficial for heart health**__

      **Ingredients**

        **1 large sweet potato**
        **1/2 purple onion**
        **1 clove of garlic**
        **2 bell peppers**
        **jalapeno (optional)**
        **1 tbsp rosemary**
        **1 tbsp avocado oil**

                                    
**Preparation**

__**Step 1**__

**Chop sweet potato into 1inch cubes.**

__**Step 2**__

**Heat avocado oil in skillet on medium high heat.**

__**Step 3**__

**Add sweet potatoes and let cook for 10 minutes while covered.**

__**Step 4**__

**While it is cooking, chop onions, garlic, bell peppers and jalapeno. Add to pan for 5 minutes. Serve while it's fresh and hot.**
      `,
      `
    **Banana Oat Pancakes**

      **About the Recipe**
      **Facts about oats**

      __** Helps with reducing cholesterol and control blood sugars**__
__** Promotes regularity with fiber**__
__** Rich in manganese which supports bone structure, increases bone metabolism andhelps prevent osteoporosis**__
__** Are rich in antioxidants which help decrease inflammation connected to cancer prevention andtreatment**__
__** A great source of daily iron**__
__** Great source of complex carbs to provide with energy**__

**Ingredients**

**2 ripe bananas**
**1 1/2 cup of oats**
**1 tsp of salt**
**1 tsp of vanilla extract**
**1/2 cup of milk of choice**
**1 egg**
**3 tsp of butter or oil to spray pan **
**Brown sugar**

**Tools needed**

**Large bowl**
**2 small bowls**
**Blender**


**Preparation**

__**Step 1**__

**Pulse oats in a blender for 5-10 seconds then place in large bowl.**

__**Step 2**__

**In a small bowl, mash banana with a fork until mixed in a semi-creamy texture. Place to the side.**

__**Step 3**__

**Add vanilla extract, egg, brown sugar, salt, and milk in a separate bowl. Add the combined mixture to the mashed banana in the large bowl. Stir well.**

__**Step 4**__

**Preheat skillet to medium-high heat.**

__**Step 5**__

**Scoop out banana oat mixture in the skillet. Cook each side until you see the edges turn brown.**

**Serve hot and enjoy!**
      `,
      `
      **Jerk Mustard Greens**

      
**About the Recipe**
**Facts about mustard greens**

__**  Contain immunity boosting properties due to being a rich source of vitamin C**__
__** Contains more vitamin C than an orange**__
__**  Adding vinegar helps increase the absorption of nutrients from the greens**__
__**  Are the natural diuretic and has more vitamin A than spinach**__
__**  Are rich in antioxidants which help decrease inflammation connected to cancer prevention and treatment**__
__**  Treats cough and sore throats**__


**Ingredients**

**5-6 cups of chopped mustard greens.**
**2 tbsp apple cider vinegar**
**1 tbsp garlic powder**
**2 teaspoon dry jerk seasoning**
**1/2 cup low sodium broth**
**1/4 cup yellow or purple onion**
**1 tablespoon olive oil**
**dash of salt and pepper**


**Preparation**

__**Step 1**__

**Drizzle olive oil in pan and cook to medium heat.**

__**Step 2**__

**Dice yellow onion and cook in pan until slightly soft or transparent color.**

__**Step 3**__

**Add 6 cups mustard greens and 1/2 cup chicken broth.**

__**Step 4**__

**As greens decrease in size, add garlic powder and jerk seasoning. Cook about 5-10 minutes or until soft.**
      `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('**Random food recipe**')
        .setDescription(`${randomFact}`);

    message.channel.send({ embeds: [embed] });
}


function hallo(message) {
    message.channel.send('hallo');
}


function gif(message) {
    const capuFolder = './gif'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random gif')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function poem(message) {
    const factsArray = [
        `
        No man is an island,

Entire of itself,

Every man is a piece of the continent,

A part of the main.

If a clod be washed away by the sea,

Europe is the less.

As well as if a promontory were.

As well as if a manor of thy friend’s

Or of thine own were:

Any man’s death diminishes me,

Because I am involved in mankind,

And therefore never send to know for whom the bell tolls;

It tolls for thee.

Source
        `,
        `
        Whose woods these are I think I know.

His house is in the village though;

He will not see me stopping here

To watch his woods fill up with snow.

My little horse must think it queer

To stop without a farmhouse near

Between the woods and frozen lake

The darkest evening of the year.

He gives his harness bells a shake

To ask if there is some mistake.

The only other sound’s the sweep

Of easy wind and downy flake.

The woods are lovely, dark and deep,

But I have promises to keep,

And miles to go before I sleep,

And miles to go before I sleep.

Source
        `,
        `
        You may write me down in history

With your bitter, twisted lies,

You may tread me in the very dirt

But still, like dust, I’ll rise.

Does my sassiness upset you?

Why are you beset with gloom?

’Cause I walk like I’ve got oil wells

Pumping in my living room.

Just like moons and like suns,

With the certainty of tides,

Just like hopes springing high,

Still I’ll rise.

Did you want to see me broken?

Bowed head and lowered eyes?

Shoulders falling down like teardrops.

Weakened by my soulful cries.

Does my haughtiness offend you?

Don’t you take it awful hard

’Cause I laugh like I’ve got gold mines

Diggin’ in my own back yard.

You may shoot me with your words,

You may cut me with your eyes,

You may kill me with your hatefulness,

But still, like air, I’ll rise.

Does my sexiness upset you?

Does it come as a surprise

That I dance like I’ve got diamonds

At the meeting of my thighs?

Out of the huts of history’s shame

I rise

Up from a past that’s rooted in pain

I rise

I’m a black ocean, leaping and wide,

Welling and swelling I bear in the tide.

Leaving behind nights of terror and fear

I rise

Into a daybreak that’s wondrously clear

I rise

Bringing the gifts that my ancestors gave,

I am the dream and the hope of the slave.

I rise

I rise

I rise.

Source
        `,
        `
        Shall I compare thee to a summer’s day?

Thou art more lovely and more temperate.

Rough winds do shake the darling buds of May,

And summer’s lease hath all too short a date.

Sometime too hot the eye of heaven shines,

And often is his gold complexion dimmed;

And every fair from fair sometime declines,

By chance, or nature’s changing course, untrimmed;

But thy eternal summer shall not fade,

Nor lose possession of that fair thou ow’st,

Nor shall death brag thou wand’rest in his shade,

When in eternal lines to Time thou grow’st.

So long as men can breathe, or eyes can see,

So long lives this, and this gives life to thee.

Source
        `,
        `
        There will come soft rain and the smell of the ground,

And swallows circling with their shimmering sound;

And frogs in the pools singing at night,

And wild plum trees in tremulous white;

Robins will wear their feathery fire,

Whistling their whims on a low fence-wire;

And not one will know of the war, not one

Will care at last when it is done.

Not one would mind, neither bird nor tree,

If mankind perished utterly;

And Spring herself, when she woke at dawn

Would scarcely know that we were gone.

Source
        `,
        `
        I want you to know

one thing.

You know how this is:

if I look

at the crystal moon, at the red branch

of the slow autumn at my window,

if I touch

near the fire

the impalpable ash

or the wrinkled body of the log,

everything carries me to you,

as if everything that exists,

aromas, light, metals,

were little boats

that sail

toward those isles of yours that wait for me.

Well, now,

if little by little you stop loving me

I shall stop loving you little by little.

If suddenly

you forget me

do not look for me,

for I shall already have forgotten you.

If you think it long and mad,

the wind of banners

that passes through my life,

and you decide

to leave me at the shore

of the heart where I have roots,

remember

that on that day,

at that hour,

I shall lift my arms

and my roots will set off

to seek another land.

But

if each day,

each hour,

you feel that you are destined for me

with implacable sweetness,

if each day a flower

climbs up to your lips to seek me,

ah my love, ah my own,

in me all that fire is repeated,

in me nothing is extinguished or forgotten,

my love feeds on your love, beloved,

and as long as you live it will be in your arms

without leaving mine.

Source
        `,
        `
        O Captain! my Captain! our fearful trip is done;

The ship has weather’d every rack, the prize we sought is won;

The port is near, the bells I hear, the people all exulting,

While follow eyes the steady keel, the vessel grim and daring:

But O heart! heart! heart!

O the bleeding drops of red,

Where on the deck my Captain lies,

Fallen cold and dead.

O Captain! my Captain! rise up and hear the bells;

Rise up — for you the flag is flung — for you the bugle trills;

For you bouquets and ribbon’d wreaths — for you the shores a-crowding;

For you they call, the swaying mass, their eager faces turning;

Here Captain! dear father!

This arm beneath your head;

It is some dream that on the deck,

You’ve fallen cold and dead.

My Captain does not answer, his lips are pale and still;

My father does not feel my arm, he has no pulse nor will;

The ship is anchor’d safe and sound, its voyage closed and done;

From fearful trip, the victor ship, comes in with object won; 20

Exult, O shores, and ring, O bells!

But I, with mournful tread,

Walk the deck my Cptain lies,

Fallen cold and dead.

Source
`,
`
Some say the world will end in fire,

Some say in ice.

From what I’ve tasted of desire

I hold with those who favor fire.

But if it had to perish twice,

I think I know enough of hate

To say that for destruction ice

Is also great

And would suffice.

Source
`,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random poem')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function programming_joke(message) {
    const capuFolder = './programming_joke'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random programming joke')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function programming_joke_text(message) {
    const factsArray = [
        'There are 10 kinds of people in the world. Those who understand binary and those who don’t.',
        'A guy walks into a bar and asks for 1.4 root beers. The bartender says “I’ll have to charge you extra, that’s a root beer float”. The guy says “In that case, better make it a double.',
        'Knock, knock. Who’s There? Very long pause… “Java.”',
        'Programming is 10% writing code and 90% understanding why it’s not working',
        'You are the ; to my statements',
        'Why did the programmer quit her job? Because she didn’t get arrays',
        'What did the Java Code say to the C code? You’ve got no class',
        'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t',
        'Why do programmers prefer dark mode? Because light attracts bugs.',
        'Things aren’t always #000000 and #FFFFFF',
        'Why do Java programmers have to wear glasses? Because they don’t C#',
        'A programmer is heading out to the grocery store, so his wife tells him “get a gallon of milk, and if they have eggs, get a dozen.” He returns with 13 gallons of milk.',
        'Programmer: An organism that turns coffee into software',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random programming joke text')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function memory(message) {
    const factsArray = [
        `
        Use pictures and imagination
        An easy way to remember new information is to use visual pictures to link it to something that you already know. These mental pictures are called mnemonic images.
        
        For example, if you need to remember to buy bananas at the supermarket, picture giant bananas raining inside the supermarket. When you arrive at the supermarket, you’ll be able to scan your memory to find the image of the giant bananas, and you’ll remember the shopping item.
        
        The Number Shape System is an example of how you can remember numbers by linking them to something you already know.
        
        The images can supercharge your memory even further if you use stories to link the images together.
        `,
        `
        Exercise boosts memory
A single, moderate workout may immediately change how our brains function and how well we recognize common names and similar information, according to a promising new study of exercise, memory and aging. The study adds to growing evidence that exercise can have rapid effects on brain function and also that these effects could accumulate and lead to long-term improvements in how our brains operate and we remember.
        `,
        `
        Take breaks while studying
Our group and others have demonstrated that a 15-min period of eyes-closed rest following encoding enhances memory for both procedural and declarative memory tasks, compared to an equivalent period spent completing a distractor task. Other recent studies have demonstrated that post-learning rest enhances subsequent memory for spatial and temporal information, facilitates insight into a complex problem, and enhances auditory statistical learning. These memory effects can be maintained for a week or more after the rest intervention. Together, these observations suggest that even during wakefulness, memory is preferentially consolidated during offline states characterized by reduced attentional demands.

When trying to memorise new material, it’s easy to assume that the more work you put in, the better you will perform. Yet taking the occasional down time – to do literally nothing – may be exactly what you need. Just dim the lights, sit back, and enjoy 10-15 minutes of quiet contemplation, and you’ll find that your memory of the facts you have just learnt is far better than if you had attempted to use that moment more productively.
        `,
        `
        Get enough sleep
        [Brain measurements] found that the “test is coming” group spent more time in deep, slow-wave sleep than did the group not anticipating a test. Slow electrical waves act as a replay button, causing the hippocampus to reactivate new memories and synchronizing the neocortex so that it accepts them into long-term storage. This expectant group also had more “sleep spindles,” bursts of electrical activity that prime networks in the cortex to store memories arriving from the hippocampus and to integrate them into existing knowledge, which makes retrieval easier.
        
        The 10-minute nap produced immediate improvements in all outcome measures (including sleep latency, subjective sleepiness, fatigue, vigor, and cognitive performance), with some of these beneﬁts maintained for as long as 155 minutes. The 20- minute nap was associated with improvements emerging 35 minutes after napping and lasting up to 125 minutes after napping. The 30-minute nap produced a period of impaired alertness and performance immediately after napping, indicative of sleep inertia, followed by improvements lasting up to 155 minutes after the nap.
        `,
        `
        Try peg lists
one - sun
two - shoe
three - tree
four - door
five - hive
six - sticks
seven - heaven
eight - gate
nine - sign
ten - pen
Now that you have a list of pegs, take a list of items that you want to remember, and imagine each item in your list interacting with one peg. If you’re remembering a shopping list and the first item on the list is milk, then imagine pouring milk on the sun (“sun” rhymes with “one”). If the second item on your list is lemons, imagine putting lemons in a shoe (“shoe” rhymes with “two”), and so on. To recall the list, recite the numbers from 1 to 10, convert each number to its rhyming image, and then recall what the image was doing.
        `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Memory')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function space_fact(message) {
    const factsArray = [
        'One million Earths could fit inside the Sun – and the Sun is considered an average-size star.',
        'For years it was believed that Earth was the only planet in our solar system with liquid water. More recently, NASA revealed its strongest evidence yet that there is intermittent running water on Mars, too!',
        'Comets are leftovers from the creation of our solar system about 4.5 billion years ago – they consist of sand, ice and carbon dioxide.',
        'You wouldn’t be able to walk on Jupiter, Saturn, Uranus or Neptune because they have no solid surface!',
        'If you could fly a plane to Pluto, the trip would take more than 800 years!',
        'Space junk is any human-made object orbiting Earth that no longer serves a useful purpose. Scientists estimate there are about 500,000 pieces of space junk today, including fragments from rockets and satellites, and everyday items like spanners dropped during construction of the International Space Station!',
        'An asteroid about the size of a car enters Earth’s atmosphere roughly once a year – but it burns up before it reaches us. Phew!',
        'The highest mountain known to man is on an asteroid called Vesta. Measuring a whopping 22km in height, it is three times as tall as Mount Everest!',
        'There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!',
        'The sunset on Mars appears blue. And now, it’s time for the lowdown on the planets of our solar system to one seriously sick beat! Just a word of warning – you might end up singing the song in your head all day!',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random fact space')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function interesting_book(message) {
    const factsArray = [
        '1984 by George Orwell',
        'The Lord of the Rings by J.R.R. Tolkien',
        'The Kite Runner by Khaled Hosseini',
        'Harry Potter and the Philosopher’s Stone by J.K. Rowling',
        'Slaughterhouse-Five by Kurt Vonnegut',
        'The Lion, the Witch, and the Wardrobe by C.S. Lewis',
        'To Kill a Mockingbird by Harper Lee',
        'The Book Thief by Markus Zusak',
        'Wuthering Heights by Emily Bronte',
        'The Catcher in the Rye by J.D. Salinger',
        'Jane Eyre by Charlotte Bronte',
        'Animal Farm by George Orwell',
        'Fahrenheit 451 by Ray Bradbury',
        'Little Women by Louisa May Alcott',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random interesting book')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function car(message) {
    const capuFolder = './car'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random car')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function random_movies(message) {
    const factsArray = [
        'MEAN GIRLS',
        'SALTBURN',
        'I.S.S.',
        'POOR THINGS',
        'LIFT',
        'KILLERS OF THE FLOWER MOON',
        'THE BOYS IN THE BOAT',
        'THE HOLDOVERS',
        'SOCIETY OF THE SNOW',
        'WONKA',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random movies')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_history_fact(message) {
    const factsArray = [
        'There are some spooky similarities between U.S. presidents John F. Kennedy and Abraham Lincoln.',
        'Between 1880 and 1916, Ireland had its own time zone.',
        'The longest recorded year in history was 445 days long in 46 BC.',
        'The shortest recorded year in English history was 1751, which was only 282 days long.',
        'John Tyler (1790 – 1862), the 10th President of the United States, still has a living grandchild.',
        'The oldest living person in the world is Kane Tanaka, who is 118 years old.',
        'The longest war in the world was the Reconquista, which lasted for about 781 years.',
        'The longest reigning and shortest reigning monarch in the world were both French kings named Louis. ',
        'The Olympics used to give out medals for art.',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random history fact')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_chocolate_fact(message) {
    const factsArray = [
        `
        People used chocolate as currency in the past
That’s right! It is known that the Mayans and Aztecs used cocoa beans as money. Additionally, they paid for food, taxes, and clothes with these cocoa beans. In fact, they even used these cocoa beans as gift offerings.
        `,
        `
        Napoleon Bonaparte loved to eat chocolate
This is such a crazy chocolate fact that all the history geeks and chocolate enthusiast love. According to Napoleon, an army marches on its stomach. Thus, he loved to keep his stomach filled with chocolatey treats.
        `,
        `
        Milk Chocolate was invented in 1875
Undoubtedly, milk chocolate is one of the most popular and well-loved types of chocolate. Therefore, it is stunning to know this chocolate fact because most people think it is a tale as old as time itself.
        `,
        `
        Chocolate was considered food of Gods
In ancient times, the name for chocolate – cocoa bean – plants were “Theobroma Cacao.” This name translates to “Food of the Gods.” Clearly, this is one of the cool facts about chocolate.
        `,
        `
        The first Chocolate bar was made in 1847
This is another one of the stunning chocolate facts! Anyway, the first chocolate bar was simple: delicious with no particular texture. Moreover, Joseph Fry, a British confectioner created it for the world. Guess, we can thank him for the chocolate bars of today.
        `,
        `
        Chocolate has an ancient Mesoamerican origin
Clearly, chocolate originated from ancient Mesoamerica. After all, the first cacao plants were found there. Ultimately, the Mesoamericans turned these plants into chocolate. In fact, they even used it as a medicine.
        `,
        `
        Chocolate was the luxury item in societies
This is one of the chocolate facts that still hold merit in present times. After all, it is still exclusive mostly to the highest social classes. Clearly, it a luxury good through and through – even through the ages. No wonder it is such a delight.
        `,
        `
        Switzerland is the top chocolate-consuming country
That’s right! Most of the chocolate maniacs are in Switzerland. After all, this country stays on the top of charts when it comes to consuming chocolate. For instance, only in 2022 its chocolate consumption was 11.8 kilograms.
        `,
        `
        Chocolate was considered a love potion, a magic
There are no chocolate facts better than this one! Because chocolate induces a feeling of love and comfort, people considered it as an ingredient of witchcraft in ancient times. Moreover, science also testifies that this is true of chocolate.
        `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random chocolate fact')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_career_advice(message) {
    const factsArray = [
        'The best career or job is the one in which you’re using the skills you enjoy. But, not every job needs to address all of your passions. Use every job as an opportunity to learn something new and keep an open mind; you may find that you really enjoy something you never imagined would appeal to you.—Miriam Salpeter, Founder of Keppie Careers',
        'Don’t take yourself (or your career) too seriously. Plenty of brilliant people started out in jobs they hated, or took paths that weren’t right at the beginning of their careers. Professional development is no longer linear, and trust that with hard work and a dedication to figuring out what you want to do with your life, you, too, will be OK!—Kathryn Minshew, CEO of The Muse',
        'Every person you meet is a potential door to a new opportunity—personally or professionally. Build good bridges even in that just-for-now job, because you never know how they’ll weave into the larger picture of your life.—Kristina Leonardi, Career Coach',
        'My friend Andre said to me, “You know, Marissa, you’re putting a lot of pressure on yourself to pick the right choice, and I’ve gotta be honest: That’s not what I see here. I see a bunch of good choices, and there’s the one that you pick and make great.” I think that’s one of the best pieces of advice I’ve ever gotten.”—Marissa Mayer, CEO of Yahoo!',
        'No matter how low on the totem poll you are or how jaded you’ve become by your to-do list, it’s still important to show up early, wear something sharp, and avoid Facebook like the plague. I discovered that when I acted like a professional, I suddenly felt like my work was a lot more valuable. “Looking the part” boosted my confidence, helped me begin to see myself as a highly capable contributor to the team—and ultimately led the rest of my team to see me in the same light.—Lisa Habersack, Writer',
        'Remember that a job, even a great job or a fantastic career, doesn’t give your life meaning, at least not by itself. Life is about what you learn, who you are or can become, who you love and are loved by.—Fran Dorf, Author and Psychotherapist',
        'If the career you have chosen has some unexpected inconvenience, console yourself by reflecting that no career is without them.—Jane Fonda',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random career advice')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function people(message) {
    const capuFolder = './people'; 
    fs.readdir(capuFolder, (err, files) => {
        if (err) {
            console.error('error:', err);
            return;
        }
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
        const filePath = path.join(capuFolder, randomFile);
        const attachment = new MessageAttachment(filePath);
        const embed = new MessageEmbed()
            .setTitle('Random people')
            .setImage(`attachment://${randomFile}`);

        message.channel.send({ embeds: [embed], files: [attachment] });
    });
}


function fact_dog(message) {
    const factsArray = [
        'The Labrador Retriever has been on the AKC’s top 10 most popular breeds list for longer than any other breed.',
        'A dog’s nose print is unique, much like a person’s fingerprint.',
        'Forty-five percent of U.S. dogs sleep in their owner’s beds.',
        'Speaking of sleeping … all dogs dream, but puppies and senior dogs dream more frequently than adult dogs.',
        'Seventy percent of people sign their dog’s name on their holiday cards.',
        'A dog’s sense of smell is legendary, but did you know that their nose has as many as 300 million receptors? In comparison, a human nose has about 5 million.',
        'Rin Tin Tin, the famous German Shepherd Dog, was nominated for an Academy Award.',
        'Dogs’ noses can sense heat and thermal radiation, which explains why blind or deaf dogs can still hunt.',
        'The French Bulldog was first named the most popular breed in 2022.',
        'Yawning is contagious — even for dogs. Research shows that the sound of a human yawn can trigger one from your dog. And it’s four times as likely to happen when it’s the yawn of a person your pet knows.',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random fact dog')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_neural_network(message) {
    const factsArray = [
        `
        LeNet5

        LeNet5 is a neural network architecture that was created by Yann LeCun in the year 1994. LeNet5 propelled the deep Learning field. It can be said that LeNet5 was the very first convolutional neural network that has the leading role at the beginning of the Deep Learning field.
LeNet5 has a very fundamental architecture. Across the entire image will be distributed with image features. Similar features can be extracted in a very effective way by using learnable parameters with convolutions. When the LeNet5 was created, the CPUs were very slow, and No GPU can be used to help the training.
The main advantage of this architecture is the saving of computation and parameters. In an extensive multi-layer neural network, Each pixel was used as a separate input, and LeNet5 contrasted this. There are high spatially correlations between the images and using the single-pixel as different input features would be a disadvantage of these correlations and not be used in the first layer.
        `,
        `
        Dan Ciresan Net

        Very first implementation of GPU Neural nets was published by Jurgen Schmidhuber and Dan Claudiu Ciresan in 2010. There were up to 9 layers of the neural network. It was implemented on an NVIDIA GTX 280 graphics processor, and it had both backward and forward.
        `,
        `
        AlexNet

        This neural network architecture has won the challenging competition of ImageNet by a considerable margin. It is a much broader and more in-depth version of LeNet. Alex Krizhevsky released it in 2012.
Complex hierarchies and objects can be learned using this architecture. The much more extensive neural network was created by scaling the insights of LeNet in AlexNet Architecture.
        `,
        `
        Overfeat

        Overfeat is a new derivative of AlexNet that came up in December 2013 and was created by the NYU lab from Yann LeCun. Many papers were published on learning bounding boxes after learning the article proposed bounding boxes. But Segment objects can also be discovered rather than learning artificial bounding boxes.
        `,
        `
        VGG

        The first time VGG networks from Oxford used smaller 3×3 filters in each convolutional layers. Smaller 3×3 filters were also used in combination as a sequence of convolutions.
VGG contrasts the principles of LeNet as in LeNet. Similar features in an image were captured by using large convolutions. In VGG, smaller filters were used on the first layers of the network, which was avoided in LeNet architecture. In VGG, large filters of AlexNet like 9 x 9 or 11 x 11 were not used. Emulation by the insight of the effect of larger receptive fields such as 7 x 7 and 5 x 5 were possible because of multiple 3 x 3 convolution in sequence. It was also the most significant advantage of VGG. Recent Network Architectures such as ResNet and Inception are using this idea of multiple 3×3 convolutions in series.
        `,
        `
        Network-in-network

        Network-in-network is a neural network architecture that provides higher combinational power and has simple & great insight. A higher strength of the combination is provided to the features of a convolutional layer by using 1×1 convolutions.
        `,
        `
        GoogLeNet and Inception

        GoogLeNet is the first inception architecture which aims at decreasing the burden of computation of deep neural networks. The categorization of video frames and images content was done by using deep learning models. Large deployments and efficiency of architectures on the server farms became the main interest of big internet giants such as Google. Many people agreed in 2014 neural networks, and deep learning is nowhere to go back.
        `,
        `
        Bottleneck Layer

        Inference time was kept low at each layer by the reduction of the number of operations and features by the bottleneck layer of Inception. The number of features will be reduced to 4 times before the data is passed to the expensive convolution modules. This is the success of Bottleneck layer architecture because it saved the cost of computation by very large.
        `,
        `
        ResNet

        The idea of ResNet is straightforward, and that is to bypass the input to the next layers and also to feed the output of two successive convolutional layers. More than a hundred and thousand layers of the network were trained for the first time in ResNet.
        `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random neural network')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function inspiration(message) {
    const factsArray = [
        `
        "When you have a dream, you've got to grab it and never let go."
        — Carol Burnett
        `,
        `
        "Nothing is impossible. The word itself says 'I'm possible!'"
        — Audrey Hepburn
        `,
        `
        "There is nothing impossible to they who will try."
— Alexander the Great
        `,
        `
        "The bad news is time flies. The good news is you're the pilot."
— Michael Altshuler
        `,
        `
        "Life has got all those twists and turns. You've got to hold on tight and off you go."
— Nicole Kidman
        `,
        `
        "Keep your face always toward the sunshine, and shadows will fall behind you."
— Walt Whitman
        `,
        `
        "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
— Amal Clooney
        `,
        `
        "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."
— Duchess Meghan
        `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random inspiration')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_fact_food(message) {
    const factsArray = [
        `
        Pound cake got its name from its recipe.
        The early recipes of pound cake called for one pound of butter, one pound of eggs, and one pound of sugar.
That’s a huge cake!
        `,
        `
        Most supermarket wasabi is actually horseradish.

        Real wasabi is challenging to make and expensive.
As an alternative, most wasabi for sale is colored horseradish with flavorings.
        `,
        `
        The most expensive pizza in the world costs $12,000 dollars.

        That’s because it takes 72 hours to make, and it can only be made in your home by 3 Italian chefs.
The pizza is topped with 3 types of caviar, bufala mozzarella, lobster from Norway and Cilento, and pink Australian sea salt.
        `,
        `
        Ranch dressing is dyed.

        One ingredient in ranch is titanium dioxide which is used to make it look whiter.
It’s the same ingredient that is used in sunscreen and paint for coloring.
        `,
        `
        One fast-food burger can have meat from 100 different cows.

        It sounds like a crazy amount, but the ground beef used to make burgers, both in fast food places and grocery stores, is made of a collection of muscle tissues.
        `,
        `
        Fruit-flavored snacks shine because of car wax.

        Yep, the same wax that is used on cars, carnauba wax, is the same type of wax that is used to give gummy candy a glossy sheen.
Not sure how I feel about that!
        `,
        `
        Nutmeg is a hallucinogen.

        If you ingest nutmeg in large doses, it works like a hallucinogen due to a natural compound called myristicin.
It has mind-altering effects if taken in large doses.
        `,
        `
        Crackers have holes in them for a reason.

        During the baking process, if the crackers have holes in them, it prevents air bubbles from ruining the product.
        `,
        `
        Ketchup used to be used as a medicine.

        Back in the early 1800s, people thought tomatoes had medicinal qualities.
One doctor claimed they could treat diarrhea and indigestion, so he made a recipe for a type of tomato ketchup which then became a pill.
        `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random fact food')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_science_fact(message) {
    const factsArray = [
        ' 50% of the world’s oxygen is produced by the sea: Our first thought may be the rainforest. But did you know half of the world’s oxygen is actually produced by plankton, seaweed and other ocean-based photosynthesis. ',
        'The human stomach can dissolve razor blades: Acids are ranked on a scale 0-14 (the lower the PH level, the stronger the acid). The human stomach is typically rated 1.0-2.0 meaning it is impeccably strong.',
        'Animals use the magnetic field to know where they are: According to the U.S Geological Survey, “evidence suggests that some animals (including sea turtles) have the ability to sense the Earth’s magnetic field and to use this sense for navigation.”',
        'There are more trees on the planet than stars in the solar system: According to experts from NASA, there are up to 400 billion stars in the milky way galaxy – but the number of trees on Earth is estimated to be more than 3 trillion.',
        'One letter doesn’t exist in the periodic table: If you have studied science in KS3 it is highly likely you will have come across the periodic table. It contains a large number of letters (or multiple letters) associated with elements, but one letter in the alphabet doesn’t feature: the letter ‘J’.',
        'Water can boil and freeze at the same time: What is known as ‘triple point‘ exists in science. It occurs when temperature and pressure is just right for three phases (gas, liquid and solid) of a substance to coexist in thermodynamic equilibrium.  ',
        'Spacecraft are hurtling towards the edge of our solar system: The New Horizons place probe (which already flew past Pluto) is travelling at speeds of 36,000 mph. The SR-71 Blackbird (the fastest aircraft on earth) travels at speeds of 2,700 mph.',
        'If you spin a ball as you drop it, it will fly: The Magnus effect occurs as the air on the front side of the spinning object is going in the same direction as the spin. The means the ball is dragged outwards as well as downwards. Watch the video below for more information.',
        'Babies have more bones than adults: Babies have around 300 bones at birth. This extra flexibility means they pass through the birth canal and enable rapid growth. With age, many of the bones fuse. Most adults have 206 bones in their skeleton.',
        'The Eiffel Tower grows in summer: As substances are heated up, particles move more and take up a larger volume. This effect is most dramatic in gases but it also affects liquids and solids too. It is the reason see bridges built with expansion points.',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random science fact')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_movie_quote(message) {
    const factsArray = [
        '“May the Force be with you.” -Star Wars, 1977',
        '“There\'s no place like home.” -The Wizard of Oz, 1939',
        '“I\'m the king of the world!” -Titanic, 1997',
        '“Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, 1989',
        '“Elementary, my dear Watson.” -The Adventures of Sherlock Holmes, 1939',
        '“It\'s alive! It\'s alive!” -Frankenstein, 1931',
        '“My mama always said life was like a box of chocolates. You never know what you\'re gonna get.” -Forrest Gump, 1994',
        '“I\'ll be back.” -The Terminator, 1984',
        '“You\'re gonna need a bigger boat.” -Jaws, 1975',
        '“Here\'s looking at you, kid.” -Casablanca, 1942',
        '“My precious.” -The Lord of the Rings: Two Towers, 2002',
        '“Houston, we have a problem.” -Apollo 13, 1995',
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random movie quote')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function random_proverb(message) {
    const factsArray = [
        `
        Many hands make light work

        When many people work together to accomplish a difficult task, it doesn’t seem so difficult. That is the general meaning of this English proverb. In other words, if people work together, the work is easier and is completed more quickly.
        `,
        `
        Strike while the iron is hot

        This proverb means that you should take advantage of a favorable situation before it changes.
        `,
        `
        Honesty is the best policy

It is best to always be honest and tell the truth. By doing so, you will win the trust and respect of others.
        `,
        `
        The grass is always greener on the other side of the fence

Other people’s lives always seem better, happier, and more successful than yours, even if your life is going well.
        `,
        `
        Don’t judge a book by its cover

Don’t form an opinion or make a judgment about someone or something based on its outward appearance.
        `,
        `
        An apple a day keeps the doctor away

Since apples are rich in vitamin C – which is vital to our health – this proverb means that proper nutrition contributes to good health and fewer visits to the doctor. In this English proverb, apples are a symbol of healthy foods and proper nutrition.
        `,
        `
        Better late than never

It is better to do something late than not do it at all.
        `,
        `
        Don’t bite the hand that feeds you

Don’t treat badly the person or people on whom you depend on, or who take care of you in some way.
        `,
        `
        Rome wasn’t built in a day

Time is needed to do great or important things.
        `,
        `
        Actions speak louder than words
        
A person’s true character can be seen by what he does, not by what he says. A person can talk as much as he wants, but he may not actually do anything to back up his words.
        `,
    ];
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];

    const embed = new MessageEmbed()
        .setTitle('Random proverb')
        .setDescription(`**${randomFact}**`);

    message.channel.send({ embeds: [embed] });
}


function help(message) {
    message.channel.send(`
    If you have any questions .....
`);
}

client.login(token); 