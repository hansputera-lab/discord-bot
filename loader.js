import fs from 'node:fs';
import path from 'node:path';

/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * Load events.
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @param {string} eventsPath Events path directory.
 * @return {Promise<void>}
 */
export const eventLoader = async (bot, eventsPath) => {
	const st = await fs.promises.stat(eventsPath);
	if (!st.isDirectory())
		throw new TypeError("'eventsPath' must be directory!");
	else {
		for (const fl of await fs.promises.readdir(eventsPath)) {
			if (!fl.endsWith('.js')) {
				// do nothin'
			}
			const stFl = await fs.promises.stat(path.resolve(eventsPath, fl));
			if (stFl.isDirectory()) {
				eventLoader(path.resolve(eventsPath, fl));
			} else {
				const fli = await import(path.resolve(eventsPath, fl)).catch(
					() => undefined,
				);
				if (typeof fli !== undefined) {
					fli.default(bot);
				}
			}
		}
	}
};

/**
 * Command Loader
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @param {string} commandsPath commandsPath dir.
 * @return {Promise<void>}
 */
export const commandLoader = async (bot, commandsPath) => {
	const st = await fs.promises.stat(commandsPath);
	if (!st.isDirectory())
		throw new TypeError("'commandsPath' must be directory!");
	else {
		for (const fl of await fs.promises.readdir(commandsPath)) {
			if (!fl.endsWith('.js')) {
				// do nothin'
			}

			const statFl = await fs.promises.stat(
				path.resolve(commandsPath, fl),
			);
			if (statFl.isDirectory()) {
				commandLoader(path.resolve(commandsPath, fl));
			} else {
				let fli = await import(path.resolve(commandsPath, fl)).catch(
					() => undefined,
				);
				if (typeof fli !== 'undefined' && fli.default) {
					fli = new fli.default(bot);
					bot.commands[fli.label] = fli;
				}
			}
		}
	}
};
