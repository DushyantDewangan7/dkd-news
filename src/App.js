import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import LoadingBar from 'react-top-loading-bar'


// function App(){
  export default class App extends Component{
    
    state = {
      progress: 0
    }
   pagesize = 15;

   setProgress = (progress) =>{
    this.setState({progress: progress})
   }
    render() {
      return (
      <div>
        <BrowserRouter>

        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
        
        />
        <Routes>
          <Route path="/" element={<News setProgress = {this.setProgress} key="general" pagesize={this.pagesize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress = {this.setProgress} key="business" pagesize={this.pagesize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress = {this.setProgress} key="general" pagesize={this.pagesize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress = {this.setProgress} key="health" pagesize={this.pagesize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress = {this.setProgress} key="science" pagesize={this.pagesize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress = {this.setProgress} key="sports" pagesize={this.pagesize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress = {this.setProgress} key="technology" pagesize={this.pagesize} country="in" category="technology" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
}
  }
