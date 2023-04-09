import  React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";






function App(props) {



    return (
      <BrowserRouter>
          <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-content">
              <Routes>
                  <Route  path="/profile/*"
                          element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                  <Route  path="/dialogs/*"
                          element={<Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>} />
                  <Route  path="/news/*"
                          element={<News state={props.state.newsPage} dispatch={props.dispatch}/>}/>
                  <Route  path="/music/*"
                          element={<Music state={props.state.musicPage} dispatch={props.dispatch} />} />
                  <Route  path="/settings/*"
                          element={<Settings state={props.state.settingPage} dispatch={props.dispatch} />}/>
              </Routes>

          </div>
          <Navbar />
          <Footer />
      </div>
      </BrowserRouter>);
}

export default App;