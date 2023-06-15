import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-j3zfpmtvnrndmzga.us.auth0.com"
    clientId="4FmsUt297JhGYfUeIu2zLDJkeZW4sDPb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><BrowserRouter>
    <App /><Toaster/></BrowserRouter>

  </Auth0Provider>
    
  
);
