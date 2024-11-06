import axios from "axios";
import { configs } from "../helpers/configs.js";

export const smartCompose = async (message, style) => {
  const prompt = getPromp(message, style);
  if (!prompt) return message;

  const { headers, data } = await axios.post(
    configs.OPENAI.URL,
    {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
        temperature: 0.7
    },
    {
        headers: {
            'Authorization': `Bearer ${configs.OPENAI.API_KEY}`,
            'Content-Type': 'application/json'
        }
    }
  );

  // Extract and log remaining limits from response headers
  const requestId = headers['x-request-id'];
  const remainingRequestsPerMinute = headers['x-ratelimit-remaining-requests'];
  const remainingRequestsPerDay = headers['x-ratelimit-remaining-tokens'];
  console.log(`Request: ${requestId}; Remaining Requests per Minute (RPM): ${remainingRequestsPerMinute}; Remaining Requests per Day (RPD): ${remainingRequestsPerDay}`);

  const newMessage = data.choices[0].message.content.trim();
  return newMessage;
}

export const getPromp = (message, style) => {
  switch (style) {
    case 'short-and-sweet':
      return `Make this message short and sweet: ${message}. Give answer only.`;
    case 'tagalogize':
      return `Make this tagalog: ${message}. Give answer only.`;
    default:
      return undefined;
  }
}