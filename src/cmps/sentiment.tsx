import { useState } from "react"
interface Data {
    choices: [],
    created: number,
    id: string,
    model: string,
    object: string,
    usage: any
  }

export function Sentiment({OPENAI_API_KEY}:any){
    const [content, setContent] = useState("")
    const [sentiment, setSentiment] = useState("")
  
    async function callOpenAIAPI() {
  
      const APIBody = {
        "model": "text-davinci-003",
        "prompt": "What is the sentiment of this content?" + content,
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
            onChange={(e) => setContent(e.target.value)}
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