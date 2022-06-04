import { ErisCommand } from '../command.js';

/** @typedef {import('eris').Message} Message */
/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * @class TestCommand
 */
export default class TestCommand extends ErisCommand {
	/**
	 * @constructor
	 * @param {CommandClient} bot Eris.CommandClient instance.
	 */
	constructor(bot) {
		super(bot, 'test', {
			aliases: ['tes', 'tesdoang'],
		});

		this.setGenerator(this.exec.bind(this));
	}

	/**
	 * Execute command.
	 * @param {Message} msg Message instance.
	 * @return {Promise<void>}
	 */
	async exec(msg) {
		await this.bot.createMessage(msg.channel.id, 'Test success');
	}
}
