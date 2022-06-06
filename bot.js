import { CommandClient } from 'eris';

/**
 * Create bot instance.
 * @param {string} token Bot token.
 * @param {Object} options Eris options.
 * @param {Object} commandOptions Eris command options.
 * @return {Client}
 */
export const createBot = (token, options, commandOptions) =>
	new CommandClient(
		'Bot '.concat(token),
		{
			...options,
			defaultImageFormat: 'png',
			restMode: true,
		},
		{
			...commandOptions,
			owner: 'hansputera',
			description: "A discord bot to serve hansputera's lab",
		},
	);
