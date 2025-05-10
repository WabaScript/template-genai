# GenAI Toolkit - E-Commerce Starter Template

Welcome to the **GenAI Toolkit**, a starter template designed to kickstart your e-commerce experience with a focus on integrating a chatbot powered by ~~**Ollama** and the **Llama 3.2 model**~~ **Gemma3 model**. Now with **multi-modal capabilities** as well via ~~**Llama 3.2 vision**~~ **Gemma3**. This project is built using **React**, **Vite**, **TailwindCSS**, and **Flowbite-React** for a modern and responsive user interface.<br>
<em> Currently testing Google's Gemma3 model with multi-modal capabilities built in</em>.

<a href="/screenshots/screen-chat.png" target="_blank">
  <img src="/screenshots/screen-chat.png" alt="Home Page" width="250"/>
</a>
<a href="/screenshots/screen-addattachment.png" target="_blank">
  <img src="/screenshots/screen-addattachment.png" alt="Home Page" width="250"/>
</a>
<a href="/screenshots/screen-imagechat.png" target="_blank">
  <img src="/screenshots/screen-imagechat.png" alt="Home Page" width="250"/>
</a>

---

## Prerequisites

Before running this project locally, ensure you have the following installed:

1. **Node.js** (v16 or higher) and **npm**.
2. **Ollama** installed on your machine. You can download it from [Ollama's website](https://ollama.ai/).
3. The **Gemma3 model** installed via Ollama
```bash
ollama pull gemma3
```

~~The **Llama 3.2 model** installed via Ollama:~~ *(Deprecated)*  
   > **Note:** If you still wish to use the Llama family of models, you must pull both the base and vision model.  
   ```bash
   ollama pull llama3.2
   ollama pull llama3.2-vision
   ```

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/WabaScript/genaitoolkit.git
cd genaitoolkit/genapp
```

### 2. Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### 3. Run the Development Server
Start the development server with:
```bash
npm run dev
```

The application will be available at **http://localhost:5173**.

---

## Troubleshooting

If you encounter any issues, try the following:

1. **Run Post-Install Script**:
   ```bash
   npm run postinstall
   ```

2. **Rebuild Dependencies**:
   ```bash
   npm rebuild
   ```

3. **Verify Ollama Installation**:
   Ensure Ollama is installed and the Llama 3.2 model is available:
   ```bash
   ollama list
   ```

---

## Features

- **Chatbot Integration**: A conversational chatbot interface powered by Ollama's wrapper on the Google Gemma3 model.
- **Multi-Modal Capabilities**: Supports both text and image-based interactions, enabling richer user experiences.
- **Responsive Design**: Built with TailwindCSS for seamless responsiveness.
- **Reusable Components**: Includes pre-built components like a carousel.
- **Dark Mode Support**: Fully supports light and dark themes.

---

## Multi-Modal Capabilities

The GenAI Toolkit now supports multi-modal interactions, allowing users to:

1. **Text-Based Chat**: Communicate with the chatbot using natural language.
2. **Image-Based Queries**: Upload images to receive context-aware responses or recommendations.

### How It Works

- **Text Input**: The chatbot processes user queries using the Llama 3.2 model <em>(now Gemma3, see above)</em>.
- **Image Input**: When images are added to the payload, the Llama 3.2-vision model is used to power the request <em>(Gemma3 automatically handles both text and images)</em>.
- **Seamless Flow**: Text and images are all kept within context to keep the coversation flowing naturally whether its text based, image based, or both!

To enable image-based interactions, ensure you have the necessary dependencies installed. Refer to the `utils/` folder for helper functions related to image processing.

---

## Project Structure

```plaintext
genapp/
├── src/
│   ├── components/       # Reusable React components
│   ├── context/          # Context API for managing chat state
│   ├── utils/            # Utility functions (e.g., Ollama integration)
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point for React
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Project configuration and dependencies
├── vite.config.js        # Vite configuration
└── .gitignore            # Ignored files and folders
```

---

## Key Commands

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Patch Flowbite-React**: `npm run postinstall`

---


## License

This project is licensed under the **MIT License**. Feel free to use and modify it for your own projects.

---

Enjoy building your e-commerce experience with **GenAI Toolkit**! 🚀