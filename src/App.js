import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Feed from "./components/Feed/Feed";
import Inventory from "./components/Inventory/Inventory";
import Cases from "./components/Cases/Cases";

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Feed/>}/>
          <Route path="inventory" element={<Inventory/>}/>
          <Route path="cases" element={<Cases/>}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;


                                                                                      