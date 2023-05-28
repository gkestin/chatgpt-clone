import { Configuration, OpenAIApi } from 'openai';

export const chatGPT = async (prompt, chatbot_style, key) => {
  const configuration = new Configuration({
    apiKey: key,
  });

  const openai = new OpenAIApi(configuration);

  if (!chatbot_style.trim()) {
    chatbot_style = "a friendly assistant";
  }

  let messages = [
    {
      role: "system",
      content: `Your assistant is ${chatbot_style}.`,
    },
    {
      role: "user",
      content: `Act like you are ${chatbot_style} (but don't explicitly talk about this persona in your response). ${prompt}`,
    },
  ];

  const response = await openai.createChatCompletion({
    model: 'gpt-4.0',
    messages: messages,
  });

  return response;
};
