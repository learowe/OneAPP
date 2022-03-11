import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import App from './App';
import Week9PrimeForms from './classMaterial/Week9PrimeForms';
import ClassMaterial2 from './classMaterial/ClassMaterial2';
import ClassMaterial3 from './classMaterial/ClassMaterial3';
import Week9PrimeFormSolo from './classProjects/Week9PrimeFormSolo';
import ClassProject2 from './classProjects/ClassProject2';
import ClassProject3 from './classProjects/ClassProject3';
import Week9Homework from './homeWork/Week9Homework';
import Homework2 from './homeWork/Homework2';
import Homework3 from './homeWork/Homework3';

ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/classMaterial/Week9PrimeForms" element={<Week9PrimeForms />}/>
        <Route path="/classMaterial/classmaterial2" element={<ClassMaterial2 />}/>
        <Route path="/classMaterial/classmaterial3" element={<ClassMaterial3 />}/>
        <Route path="/classProjects/Week9PrimeFormSolo" element={<Week9PrimeFormSolo />}/>
        <Route path="/classProjects/classproject2" element={<ClassProject2 />}/>
        <Route path="/classProjects/classproject3" element={<ClassProject3 />}/>
        <Route path="/homeWork/Week9Homework" element={<Week9Homework />}/>
        <Route path="/homeWork/homework2" element={<Homework2 />}/>
        <Route path="/homeWork/homework3" element={<Homework3 />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
