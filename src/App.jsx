import React from "react";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to CampusConnect</h1>
      <p>Your AI-powered college assistant is here to help you 🎓</p>
      
      {/* Embed the Chatbot */}
      <ChatbotComponent />
    </div>
  );
}

export default App;

