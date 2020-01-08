require('dotenv').config();

const twit = require('twit');

// https://developer.twitter.com

const config = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const recipient_id = '***';
const message_data = '***';

let params = {
  "event": {
    "type": "message_create",
    "message_create": {
      "target": {
        "recipient_id": recipient_id
      },
      "message_data": {
        "text": message_data,
      }
    }
  }
};

config.post('direct_messages/events/new', params, (error, message, response) => {

  if(!error) {
    console.info(message);
  } else {
    console.error(error);
  }

});
