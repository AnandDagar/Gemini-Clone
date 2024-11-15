// Directly in the code (not recommended for production)
const API_KEY = "AIzaSyCnr_y8Ie-nMthwP9v6KHDO0iNWEMLjwB4"; // Your API Key

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY); // Initialize the API client

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  // Start a new chat session
  const chatSession = model.startChat({
    generationConfig,
    history: [], // You can maintain the history if needed
  });

  // Send the message and get the response
  const result = await chatSession.sendMessage(prompt);

  // Log the response (to check if it's correct)
  console.log("Generated response:", result.response);

  // Ensure that result.response is being returned as plain text
  return result.response.text;  // Assuming the response object has a `text` property
}

export default run;
