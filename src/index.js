import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import App from './App';
import ClassMaterial1 from './classMaterial/ClassMaterial1';
import ClassMaterial2 from './classMaterial/ClassMaterial2';
import ClassMaterial3 from './classMaterial/ClassMaterial3';
import ClassProject1 from './classProjects/ClassProject1';
import ClassProject2 from './classProjects/ClassProject2';
import ClassProject3 from './classProjects/ClassProject3';
import Homework1 from './homeWork/Homework1';
import Homework2 from './homeWork/Homework2';
import Homework3 from './homeWork/Homework3';

ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/classMaterial/classmaterial1" element={<ClassMaterial1 />}/>
        <Route path="/classMaterial/classmaterial2" element={<ClassMaterial2 />}/>
        <Route path="/classMaterial/classmaterial3" element={<ClassMaterial3 />}/>
        <Route path="/classProjects/classproject1" element={<ClassProject1 />}/>
        <Route path="/classProjects/classproject2" element={<ClassProject2 />}/>
        <Route path="/classProjects/classproject3" element={<ClassProject3 />}/>
        <Route path="/homeWork/homework1" element={<Homework1 />}/>
        <Route path="/homeWork/homework2" element={<Homework2 />}/>
        <Route path="/homeWork/homework3" element={<Homework3 />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
