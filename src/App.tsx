import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { Grammar } from './cmps/grammar';
import { Sentiment } from './cmps/sentiment';
import RootLayout from './layout/root-layout';


const OPENAI_API_KEY: String | undefined = process.env.REACT_APP_api_key
console.log('OPENAI_API_KEY', OPENAI_API_KEY)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout/>}>
//       <Route index element={<Sentiment/>}/>
//     </Route>
//   )
// )
function App() {
  return <div>
    <header>
      <button className='nav-btn'>Content Sentiment Detector</button>
      <button className='nav-btn'>Grammer Correction</button>
    </header>
    {/* <Sentiment OPENAI_API_KEY={OPENAI_API_KEY} /> */}
    <Grammar OPENAI_API_KEY={OPENAI_API_KEY}/>
  </div>
}

export default App;
