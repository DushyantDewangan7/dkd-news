import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

// function App(){
const App=()=> {
  const state = {
    progress: 0,
  };
  const pagesize = 15;
  const [progress,setProgress] = useState(0)

 
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#f11946" progress={state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pagesize={pagesize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pagesize={pagesize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pagesize={pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pagesize={pagesize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pagesize={pagesize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pagesize={pagesize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pagesize={pagesize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pagesize={pagesize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}
export default App;
