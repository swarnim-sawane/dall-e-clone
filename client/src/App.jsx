/** @format */

import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./style.css";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header class="header">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" rounded w-28 object-contain invert justify-center"
          />
        </Link>

        <Link to="/create-post">
          <button class="c-button c-button--gooey">
            {" "}
            Create
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </Link>
      </header>

      <main className="bgc sm:p-8 px-4 py-2 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
