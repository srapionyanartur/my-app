
import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";



    const root = createRoot(document.getElementById("root"));
    
    var rerenderEntireTree = (state) => {
      
    root.render(
    <BrowserRouter>
  <React.StrictMode>
    <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store} />      
  </React.StrictMode>
    </BrowserRouter>
 
 );
}


rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

