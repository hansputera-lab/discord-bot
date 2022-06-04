import 'dotenv/config';

import assert from 'node:assert';
import { CommandClient } from 'eris';
import path from 'node:path';
import { cwd } from 'node:process';

import { createBot } from './bot.js';
import { eventLoader, commandLoader } from './loader.js';

assert.ok(typeof process.env.TOKEN === 'string');
const bot = createBot(process.env.TOKEN);

assert.ok(bot instanceof CommandClient);

commandLoader(bot, path.resolve(cwd(), 'commands'));
eventLoader(bot, path.resolve(cwd(), 'events'));

bot.connect();
