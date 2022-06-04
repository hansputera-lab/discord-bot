import 'dotenv/config';

import assert from 'node:assert';

import { CommandClient } from 'eris';
import { createBot } from './bot.js';

assert.ok(typeof process.env.TOKEN === 'string');
const bot = createBot(process.env.TOKEN);

assert.ok(bot instanceof CommandClient);

bot.on('ready', () => {
	bot.editStatus('dnd', {
		name: 'w/ filo!',
		type: 0,
	});

	console.log(bot.user.username, 'ready to serve!');
});

bot.connect();
