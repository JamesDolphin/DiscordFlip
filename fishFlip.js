const Discord = require('discord.js');
const client = new Discord.Client();

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

client.login('YOUR_BOT_TOKEN_HERE');