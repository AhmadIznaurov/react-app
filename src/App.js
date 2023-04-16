import  React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";






function App(props) {



    return (
      <BrowserRouter>
          <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-content">
              <Routes>
                  <Route  path="/profile/*"
                          element={<Profile store={props.store}/>}/>
                  <Route  path="/dialogs/*"
                          element={<DialogsContainer store={props.store}/>} />
                  <Route  path="/news/*"
                          element={<NewsContainer store={props.store}/>}/>
                  <Route  path="/music/*"
                          element={<MusicContainer store={props.store} />} />
                  <Route  path="/settings/*"
                          element={<SettingsContainer store={props.store} />}/>
              </Routes>

          </div>
          <Navbar />
          <Footer />
      </div>
      </BrowserRouter>);
}

export default App;