import { Command } from 'eris';

/**
 * @class ErisCommand
 */
export class ErisCommand extends Command {
	/**
	 * @param {import('eris').CommandClient} bot Eris.CommandClient instance.
	 * @param {string} label Command name/label.
	 * @param {Object} options Eris.Command options.
	 * @constructor
	 */
	constructor(bot, label, options) {
		super(label, 'This is a default message!', options);
		this.bot = bot;
	}

	/**
	 * set generator value.
	 * @param {Function | string | Function[] | string[]} value Generator value.
	 * @return {void}
	 */
	setGenerator(value) {
		// src: https://github.com/abalabahaha/eris/blob/dev/lib/command/Command.js#L164
		if (typeof value === 'string') {
			this.response = value;
			this.execute = () => this.response;
		} else if (Array.isArray(value)) {
			this.responses = value.map((item, index) => {
				switch (typeof item) {
					case 'string':
						return () => item;
					case 'function':
						return item;
					default:
						throw new Error('Invalid generator!');
				}
			});
			this.execute = () =>
				this.responses[
					Math.floor(Math.random() * this.responses.length)
				];
		} else if (typeof value === 'function') {
			this.execute = value;
		} else {
			throw new Error('Invalid generator');
		}
	}
}
