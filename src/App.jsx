import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChatBot from "./components/ChatBot";
import "./App.css";

export default function App() 
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}
