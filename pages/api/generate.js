import { Configuration, OpenAIApi } from "openai";

/**
 * OpenAI Configuration - API Keys (https://platform.openai.com/signup)
 * Documentation (https://platform.openai.com/docs/)
 */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const searchQuery = req.body.searchQuery || '';
  if (searchQuery.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid searchQuery",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(searchQuery),
      temperature: 0.6,
      max_tokens:1000,
      frequency_penalty:0.36,
      presence_penalty:0.75
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(searchQuery) {
  return `${searchQuery}`;
}
