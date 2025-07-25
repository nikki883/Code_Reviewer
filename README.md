# Code_Reviewer
AI Code Reviewer
A simple yet powerful React-based code review tool powered by AI. This application allows users to write JavaScript code in an editor, send it to a backend server, and receive feedback and suggestions using AI. Syntax highlighting and markdown formatting make the experience user-friendly and visually intuitive.

✨ Features
🔤 Real-time JavaScript syntax highlighting using Prism.js

🖋️ In-browser code editing using react-simple-code-editor

📄 AI-powered code review fetched from a backend (/ai/get-review)

📘 Markdown rendering and code highlighting in review output using react-markdown and rehype-highlight

🧠 Easily extendable to support other languages or AI models

🚀 Tech Stack
Frontend:

React
react-simple-code-editor
react-markdown
rehype-highlight
Prism.js
Axios

CSS (custom styling)

Backend (expected endpoint):

POST http://localhost:5500/ai/get-review – Accepts { code } as JSON input and returns markdown-formatted AI feedback

📦 Installation
1. Clone the repository
git clone https://github.com/yourusername/ai-code-reviewer.git
cd ai-code-reviewer
2. Install dependencies
npm install
3. Start the development server
npm run dev
The app should now be running on http://localhost:5173/ (or your Vite port if you're using it).

