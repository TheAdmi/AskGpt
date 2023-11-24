# AskGpt

Discover a world of knowledge and assistance with AskGpt - a project built with Node.js (Express) for the backend and React.js with Tailwind CSS for the frontend.

## Description

AskGpt is a simple application that allows users to interact with the OpenAI GPT-3.5 Turbo model to get responses to their queries.

## Table of Contents

- [Screen Recording](#screen-recording)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Obtaining OpenAI API Key](#obtaining-openai-api-key)
- [Adding OpenAI API Key](#adding-openai-api-key)
- [Running the Project](#running-the-project)

## Screen Recording

![AskGpt Screen Recording](AskGpt.gif)

## Setup

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/TheAdmi/AskGpt.git
   ```

2. Navigate to the backend folder:

   ```bash
   cd AskGpt/node_backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. [Obtain your OpenAI API Key](#obtaining-openai-api-key).

5. Add your OpenAI API Key to `index.js`:

   Open `index.js` and replace the placeholder with your OpenAI API Key:

   ```javascript
   const OpenAIKey = "your-openai-api-key";
   ```

6. Start the backend server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3300`.

### Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd AskGpt/react_frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend will be accessible at `http://localhost:2000`.

## Obtaining OpenAI API Key

To use the OpenAI API, you need to obtain an API key. Follow these steps:

1. Visit [OpenAI](https://platform.openai.com/api-keys) to sign up for an account.

2. Once you have an account, access the API section to generate your API key.

## Adding OpenAI API Key

Replace the placeholder in `backend/index.js` with your OpenAI API key:

```javascript
const OpenAIKey = "your-openai-api-key";
```

## Running the Project

1. Start the backend server first:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and visit `http://localhost:2000` to interact with AskGpt.

