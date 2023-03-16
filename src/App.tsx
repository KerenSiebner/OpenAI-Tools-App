import  { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { Sentiment } from './cmps/sentiment';
import RootLayout from './layout/root-layout';


const OPENAI_API_KEY = process.env.REACT_APP_api_key
console.log('OPENAI_API_KEY', OPENAI_API_KEY)
interface Data {
  choices: [],
  created: number,
  id: string,
  model: string,
  object: string,
  usage: any
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Sentiment/>}/>
    </Route>
  )
)
function App() {
  const [tweet, setTweet] = useState("")
  const [sentiment, setSentiment] = useState("")

  async function callOpenAIAPI() {

    const APIBody = {
      "model": "text-davinci-003",
      "prompt": "What is the sentiment of this tweet?" + tweet,
      "temperature": 0,
      "max_tokens": 60,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    }

    try {
      let data: Data|Response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify(APIBody)
      })
      return data = await data.json()
    } catch (err) {
      console.log("Failed to fetch data")
    }
  }
  
  async function getSentiment(){
    try{
      const data = await callOpenAIAPI()
      setSentiment(data.choices[0].text.trim())
    } catch (err){
      console.log('Failed to retrieve sentiment')
    }
    
  }

  return (
            <div className="App">
        <h1>Is my content positive?</h1>
        <textarea
          onChange={(e) => setTweet(e.target.value)}
        ></textarea>
        <button onClick={getSentiment}>What is my content sentiment?</button>
        <h3>OpenAI Response:</h3>
        <div className='ai-response'>
          {sentiment !== "" ?
            <h3 > <span className={sentiment}>
              {sentiment.replace('tweet', 'content')}
            </span>  </h3>
            :
            null
          }
        </div>
    </div>
  )
}

export default App;
