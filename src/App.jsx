import React, { Component } from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import Pricing from "./Pricing";

import { BrowserRouter, Route, Routes} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <React.Fragment>
              
                <NavBar />

                <Routes>
                  <Route path="/" element={<MainContent/>} exact/>
                  <Route path="/pricing" element={<Pricing/>} exact/>
                  <Route path="*" element={<MainContent/>} exact/>
                </Routes>
                
              
            </React.Fragment>
          </BrowserRouter>
        );
    }
}