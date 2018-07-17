'use strict';

const line = require('@line/bot-sdk');

const config = {
	channelAccessToken: 'ChannelAccessToken',
	channelSecret: 'ChannelSecret'
};

const client = new line.Client(config);

// show formatted JSON object
function display(object) {
	return JSON.stringify(object, null, 2);
}

module.exports.handler = (event, context) => {
	// logs show in CloudWatch Logs
	console.log('Receive Lambda Request Event: ', display(event));
	var events = event.events;
	console.log('Receive LINE Events: ', display(events));
	for (var i = 0; i < events.length; i++) {
		var item = events[i];
		if ('message' !== item.type || 'text' !== item.message.type) {
			// non text message event
			console.log('Receive LINE non-text-message');
			// code...
		} else {
			var message = item.message;
			// echo message
			client.replyMessage(item.replyToken, {
				type: 'text',
				text: message.text
			}).catch((err) => {
				console.error('Error on Echo: ', display(err));
				// code...
			});
		}
	}
};
