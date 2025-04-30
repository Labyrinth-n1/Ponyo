import React from "react";
import Ponyo from "../assets/images/ponyo.png"; // Adjust the path as necessary
import logo from "../assets/images/Logo.png"; // Adjust the path as necessary
export default function HomePage() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 0,
      backgroundColor: "#1b6438",
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
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#7c3aed",
      color: "white",
      padding: "10px 20px",
      borderRadius: "9999px",
      border: "none",
      cursor: "pointer",
    },
    main: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      backgroundColor: "#ffc9c7",
    },
    left: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "0px",
    },
    title: {
      fontSize: "46px",
      fontWeight: "800",
      lineHeight: "1.2",
      color: "#1f2937",
    },
    highlight: {
      color: "#cf4c44",
    },
    paragraph: {
      position: "relative",
      top: "-30px",
      fontSize: "17px",
      color: "#6b7280",
    
    },
    actions: {
      display: "flex",
      gap: "20px",
    },
    proposalButton: {
      backgroundColor: "#cf4c44",
      color: "white",
      padding: "12px 24px",
      borderRadius: "9999px",
      border: "none",
      cursor: "pointer",
    },
    tryButton: {
      border: "2px solid #cf4c44",
      color: "#cf4c44",
      padding: "12px 24px",
      borderRadius: "9999px",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
    right: {
      flex: 1,
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      border: "4px solid #cf4c44",
      objectFit: "cover",
    },
    badge: {
      position: "absolute",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: "10px 16px",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
    },
    badgeTop: {
      top: "20px",
      left: "0",
    },
    badgeBottom: {
      bottom: "20px",
      right: "0",
    },
    badgeNumber: {
      color: "#cf4c44",
      fontWeight: "bold",
    }, 
    a: {
      textDecoration: "none",
      color: "#fff",

    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <a href="/"><div><img style={styles.logo} src={logo} alt="" /></div></a>
        <div style={styles.links}>
          <a style={styles.a} href="/">Accueil</a>
          <a style={styles.a} href="/chat">Chat with ponyo</a>
       
        </div>
       
      </nav>

      {/* Hero Section */}
      <main style={styles.main}>
        <div style={{ display: "flex", maxWidth: "1200px", width: "100%", gap: "40px", alignItems: "center" }}>
          
          {/* Left */}
          <div style={styles.left}>
            <h1 style={styles.title}>
              Hey Sweetie !!<br /> viens causer avec <br />
              <span style={styles.highlight}>Ponyo, ta grande soeur!</span>
            </h1>
            <p style={styles.paragraph}>
              Je suis Ponyo et je suis ton experte beauté, ta grande soeur et ta confidente, je t'éclaire sur les sujets comme la beauté, la parfumerie, la femme.
            </p>
            <div style={styles.actions}>
              <a href="/chat"><button style={styles.proposalButton}>Chat with me</button></a>
              
            </div>
          </div>

          {/* Right */}
          <div style={styles.right}>
            <img 
              src={Ponyo} 
              alt="Student" 
              style={styles.image} 
            />
            <div style={{ ...styles.badge, ...styles.badgeTop }}>
              <span style={styles.badgeNumber}>Féminité+</span> beauté
            </div>
            <div style={{ ...styles.badge, ...styles.badgeBottom }}>
              <span style={styles.badgeNumber}>Parfumerie+</span> Morphologie
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
