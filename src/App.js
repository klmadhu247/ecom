import React from "react";
import './App.css'

import  Router from './routes';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
   <div>
    <Router/>

   </div>
   </Provider>
  );
}

export default App;
