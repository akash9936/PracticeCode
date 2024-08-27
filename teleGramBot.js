const axios = require('axios');

// Replace with your bot token
const token = "6891633585:AAF4nt0aJpnDg7w_2fvQ3KYwxh_0o_YDD5M";
// Replace with your chat ID
const chatId = "@GoStockLive"; // Ensure this is correct


const sendMessage = async (message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const table = `
    \`\`\`
    Column1  Column2  Column3
    -------  -------  -------
    Value1   Value2   Value3
    Value4   Value5   Value6
    \`\`\`  
    `;
    try {
        const response = await axios.post(url, {
            chat_id: chatId,
            text: table,
            parse_mode: 'Markdown'
        });
        console.log('Message sent:', response.data);
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
};





const dynamicChat = async () =>{
    let data="Akash"

    for(value of data){
        console.log(value);
        sendMessage(value);
    }
}
dynamicChat();

// Send a test message
//sendMessage('Hello from Telegram bot!');

const getChatId = async () => {
    const url = `https://api.telegram.org/bot${token}/getUpdates`;

    try {
        const response = await axios.get(url);
        console.log('Updates:', JSON.stringify(response.data, null, 2));
        // Inspect the response to find the correct chat ID
    } catch (error) {
        console.error('Error getting updates:', error.response ? error.response.data : error.message);
    }
};

// Run this function to get the chat ID
//getChatId();

const directChatId = '@GoStockLive'; // Replace with your numeric chat ID

const sendMessageToDirectChat = async (message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await axios.post(url, {
            chat_id: directChatId,
            text: message,
        });
        console.log('Message sent to direct chat:', response.data);
    } catch (error) {
        console.error('Error sending message to direct chat:', error.response ? error.response.data : error.message);
    }
};

// Send a test message to direct chat
//sendMessageToDirectChat('Hello from Telegram bot!');
