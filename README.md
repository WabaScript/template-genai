# GenAI Toolkit - E-Commerce Starter Template

Welcome to the **GenAI Toolkit**, a starter template designed to kickstart your e-commerce experience with a focus on integrating a chatbot powered by **Ollama** and the **Llama 3.2 model**. Now with **multi-modal capabilities** as well via **Llama 3.2 vision**. This project is built using **React**, **Vite**, **TailwindCSS**, and **Flowbite-React** for a modern and responsive user interface.

---

## Prerequisites

Before running this project locally, ensure you have the following installed:

1. **Node.js** (v16 or higher) and **npm**.
2. **Ollama** installed on your machine. You can download it from [Ollama's website](https://ollama.ai/).
3. The **Llama 3.2 model** installed via Ollama:
   ```bash
   ollama pull llama3.2
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

- **Chatbot Integration**: A conversational chatbot interface powered by Ollama's Llama 3.2 model.
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

- **Text Input**: The chatbot processes user queries using the Llama 3.2 model.
- **Image Input**: Images are analyzed using integrated AI tools, and results are combined with text-based responses for a seamless experience.

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