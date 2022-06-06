/** @typedef {import('eris').Client} Client */
/** @typedef {import('eris').Message} Message */

/**
 * @class ErisMessage
 */
export class ErisMessage {
	/**
	 * @param {Message} data Message instance.
	 */
	constructor(data) {
		this.message = data.message ? data.message : data;
	}

	/**
	 * Reply to message.
	 * @param {*} content message content data.
	 * @param {*} data reply data.
	 * @return {Promise<Message>}
	 */
	async reply(content, ...data) {
		if (
			this.message.interaction &&
			this.message.author.id === this.message._client.user.id
		) {
			return this.message._client.editWebhookMessage(
				this.message.interaction.appID,
				this.message.interaction.token,
				'@original',
			        typeof content === 'string' ? {
                                  ...data,
                                  content,
                                } : content,
			);
		} else {
			return this.message._client.createMessage(
				this.message.channel.id,
				typeof content === 'string'
					? {
							content,
							messageReference: {
								messageID: this.message.id,
							},
					  }
					: {
							...content,
							messageReference: {
								messageID: this.message.id,
							},
					  },
				...data,
			);
		}
	}
}
