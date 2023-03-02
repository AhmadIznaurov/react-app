import  React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
        <Profile />
        <Navbar />
        <Footer />
    </div>
  );
}

export default App;
