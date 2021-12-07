import "tailwindcss/tailwind.css"
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './Components/App';
import SignUp from './Components/SignUp';
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} ></Route>
      <Route path="/signup" element={<SignUp/>} ></Route>
    </Routes>
  </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
  

