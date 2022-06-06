import { ErisCommand } from '../extends/command.js';

/** @typedef {import('../extends/message.js').ErisMessage} Message */
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
			description: 'Ehehehehe',
		});

		this.setGenerator(this.exec.bind(this));
	}

	/**
	 * Execute command.
	 * @param {ErisMessage} msg Message instance.
	 * @return {Promise<void>}
	 */
	async exec(msg) {
		await msg.reply('test success');
	}
}
