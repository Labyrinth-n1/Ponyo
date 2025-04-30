import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rubanImage from '../assets/images/ruban.png';
import "../App.css";
import logo from "../assets/images/Logo.png";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const envoyerQuestion = async () => {
    if (!question.trim()) return;
  
    const userMessage = { from: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);
  
    try {
      const res = await fetch("https://chatbot-ponyo-1.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      const fullText = data.reponse;
  
      // Affichage progressif
      let currentText = "";
      const interval = 20; // vitesse : plus petit = plus rapide
      let index = 0;
  
      const botMessage = { from: "bot", text: "" };
      setMessages((prev) => [...prev, botMessage]);
  
      const intervalId = setInterval(() => {
        currentText += fullText[index];
        index++;
  
        setMessages((prevMessages) => {
          const updated = [...prevMessages];
          updated[updated.length - 1] = { from: "bot", text: currentText };
          return updated;
        });
  
        if (index >= fullText.length) {
          clearInterval(intervalId);
          setLoading(false);
        }
      }, interval);
    } catch (err) {
      const errorMessage = { from: "bot", text: "Oh oh...... ya comme un soucis avec Ponyo ou toi !!" };
      setMessages((prev) => [...prev, errorMessage]);
      setLoading(false);
    }
  };
  

  return (

    <>
     <nav style={styles.nav}>
            <a href="/"><div><img style={styles.logo} src={logo} alt="" /></div></a>
            <div style={styles.links}>
              <a style={styles.a} href="/">Accueil</a>
              <a style={styles.a} href="/chat">Chat with ponyo</a>
           
            </div>
           
      </nav>
    
    <div className="container" style={styles.container}>
      {messages.length === 0 && (
        <h2 style={styles.title}>
          CHAT WITH <strong>PONYO</strong>{" "}
          <img style={{ height: '30px', position: "relative" }} src={rubanImage} alt="ruban" />

        </h2>
      )}

      <div className="chatBox" style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.from === "user" ? "#F0F0F0" : "#cf4c44",
              color: msg.from === "user" ? "#000" : "#fff",
              borderTopRightRadius: msg.from === "user" ? 0 : 20,
              borderTopLeftRadius: msg.from === "user" ? 20 : 0,
            }}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div style={{ ...styles.message, alignSelf: "flex-start" }}>
            ⏳ Ponyo réfléchit...
          </div>
        )}
      </div>

      <div className="inputArea" style={styles.inputArea}>
        <input
          type="text"
          value={question}
          placeholder="Hey sweetie, dis moi tout ....."
          onChange={(e) => setQuestion(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => e.key === "Enter" && envoyerQuestion()}
        />
        <button onClick={envoyerQuestion} style={styles.button}>
          Envoyer
        </button>
      </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  title: {
    fontSize: 30,
    fontWeight: "bolder",
    marginTop: 100,
    textAlign: "center",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  message: {
    maxWidth: "75%",
    padding: "10px 15px",
    borderRadius: 12,
    fontSize: 15,
    lineHeight: 1.4,
    whiteSpace: "pre-wrap",
    marginBottom: 10,
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  inputArea: {
    display: "flex",
    padding: "15px",
    position: "sticky",
    bottom: 20,
    zIndex: 10,
  },
  input: {
    flex: 1,
    padding: "10px 15px",
    fontSize: 14,
    borderRadius: 10,
    height: 50,
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    marginLeft: 10,
    padding: "10px 20px",
    fontSize: 14,
    backgroundColor: "#cf4c44",
    color: "white",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  nav: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 0,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      },
      logo: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#7c3aed",
        height: "100px",
      },
      links: {
        display: "flex",
        gap: "30px",
        fontWeight: "500",
        color: "#4B5563",
        textDecoration: "none"
      },
      a: {
        textDecoration: "none",
        color: "#000",
  
      }
};

export default ChatBot;
