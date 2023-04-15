import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import './style.css';
import { logo } from './assets';
import { Home ,CreatePost } from './pages';

const App = () => {
  return (
    
    <BrowserRouter>
      
      <header className="bg-[#1e1f21] w-full flex justify-between 
      items-center bg-white sm:px-8 px-4 py-4 border-b
      border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo"
          className=" rounded w-28 object-contain invert" />
        </Link>

        <Link to="/create-post">
         <button class="c-button c-button--gooey" > Create
            <div class="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
            </div>
          </button>
        </Link> 
      </header>

      <main className='bgc sm:p-8 px-4 py-2 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/create-post" element={<CreatePost />} />

        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App