const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//On new message do X
client.on('message', msg => {
	//If new message = x do y
	if (msg.content === '!flip') {
	roll = Math.floor(Math.random()*(100-0+1)+0);

	if (roll <= 50) {
	msg.reply("Heads");
	}
	
	if (roll > 50) {
	msg.reply("Tails");
	}	
  }
});


client.on('error', (error) => {
  console.log(error)
})

client.login(process.env.DCTOKEN);
