const linebot = require('@line/bot-sdk');
require('dotenv').config();
var omikujiJSON = require("../messages/omikufi.json");

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
}

const client = new linebot.Client(config)
function handleEvent(event) {
    try{
      switch(event.type) {
          case 'message':
                const {
                    type,
                    text,
                } = event.message;
            
                if (type !== 'text') {
                    return Promise.resolve(null);
                }

            
                if (text.includes('疲れた') || text.includes('つかれた') || text.includes('ツカレタ')) {
                    return client.replyMessage(event.replyToken, {
                        "type": "image",
                        "originalContentUrl": "https://picsum.photos/200/300",
                        "previewImageUrl": "https://picsum.photos/200/300"
                    });
                }

                if (text.includes("おみくじ")) {
                    //const omikuji = JSON.parse(omikujiJSON);
                    return client.replyMessage(event.replyToken, omikujiJSON)
                    .catch(err => {
                        console.log(err)
                    });
                }

                return client.replyMessage(event.replyToken, {
                    type: 'text',
                    text: text
                });
  
              break;
          case 'follow':
              followEvent();
              break;
          case 'unfollow':
              unfollowEvent();
              break;
          default:
              return Promise.resolve(null);
      }
    }catch(err){
      console.log(err)
    }
  }

exports.handleEvent = handleEvent;