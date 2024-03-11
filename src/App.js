
import './App.css';

import React, { useState} from 'react';
import NavBar from './componants/navbar';
import News from './componants/news';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



const App = () => {

  const [progress,setProgress]=useState(0);

  // setProgress(progress);
  
    let pageSize=12;
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general" />}></Route>    
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>    
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
          </Routes>
        </Router>
        
      </div>
    )
}

export default App;

