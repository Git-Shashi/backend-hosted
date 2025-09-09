import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
const app = express();



// Home route - Cherry Blossom
app.get('/api/jokes', (req, res) => {
  res.send( [
  {
    id: 1,
    title: "Why did the developer go broke?",
    joke: "Because he used up all his cache."
  },
  {
    id: 2,
    title: "Why do programmers prefer dark mode?",
    joke: "Because light attracts bugs!"
  },
  {
    id: 3,
    title: "How do you comfort a JavaScript bug?",
    joke: "You console it."
  },
  {
    id: 4,
    title: "Why was the function sad?",
    joke: "Because it didn’t get called."
  },
  {
    id: 5,
    title: "Why did the React developer stay calm?",
    joke: "Because he knew how to handle state."
  }
]);
});

// Twitter route
app.get('/twitter', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Twitter</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex items-center justify-center min-h-screen bg-blue-50">
      <div class="flex max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="w-1/3 flex items-center justify-center bg-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter Logo" class="w-20 h-20" />
        </div>
        <div class="w-2/3 p-6 flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-blue-500 mb-4">Twitter</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Twitter is a social networking service where users post and interact with messages known as "tweets". 
            It's a platform for real-time communication, trending topics, and global conversations.
          </p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Instagram route
app.get('/instagram', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Instagram</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      <div class="flex max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="w-1/3 flex items-center justify-center bg-pink-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" class="w-20 h-20 rounded-lg" />
        </div>
        <div class="w-2/3 p-6 flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-pink-600 mb-4">Instagram</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Instagram is a photo and video sharing social networking service. 
            It allows users to capture, edit, and share visual content with followers and the world.
          </p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// WhatsApp route
app.get('/whatsapp', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>WhatsApp</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex items-center justify-center min-h-screen bg-green-50">
      <div class="flex max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="w-1/3 flex items-center justify-center bg-green-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" class="w-20 h-20" />
        </div>
        <div class="w-2/3 p-6 flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-green-600 mb-4">WhatsApp</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            WhatsApp is a messaging and Voice over IP service. 
            It allows users to send text messages, voice messages, make voice and video calls, and share images and documents.
          </p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});