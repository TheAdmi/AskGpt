const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3300;

app.use(express.json());
app.use(cors());

app.post('/getOpenAIResponse', async (req, res) => {
  try {
    const { value } = req.body;
    const OpenAIKey = ""; // Here your OpenAI Api

    // Prepare the request body
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: value+", [Convert the response to Markdown format with line breaks after each line and sentence.]" }],
      temperature: 1,
    };

    // Prepare the request headers
    const headers = {
      Authorization: `Bearer ${OpenAIKey}`,
    };

    // Make the OpenAI API request
    const response = await axios.post('https://api.openai.com/v1/chat/completions', body, { headers });

    // Display the result
    console.log('OpenAI Response:', response.data.choices[0].message.content);

    res.json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
