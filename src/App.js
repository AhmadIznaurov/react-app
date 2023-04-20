import  React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";


function App() {

    return (
      <BrowserRouter>

          <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-content">
              <Routes>
                  <Route  path="/profile/*"
                      element={<Profile />}/>
                  <Route  path="/dialogs/*"
                          element={<DialogsContainer />}/>
                  <Route  path="/news/*"
                          element={<NewsContainer />}/>
                  <Route  path="/music/*"
                          element={<MusicContainer  />}/>
                  <Route  path="/settings/*"
                          element={<SettingsContainer  />}/>
              </Routes>

          </div>
          <Navbar />
          <Footer />
      </div>
      </BrowserRouter>);
}

export default App;