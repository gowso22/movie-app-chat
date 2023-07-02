import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Detail from "./page/detail";
import Nav from "./components/Nav";
import SearchPage from "./page/SearchPage";
import FavPage from "./page/FavPage";
import Chat from "./page/chat";

function App() {
  return (
    <>
      <h1 style={{textAlign : "center"}}>Movie</h1>
      
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchMovie" element={<SearchPage />}></Route>
          <Route path="/favMovie" element={<FavPage />}></Route>
          <Route path="/moviedeails/:id" element={<Detail />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
