import { useState } from "react"
interface Data {
    choices: [],
    created: number,
    id: string,
    model: string,
    object: string,
    usage: any
  }

export function Grammar({OPENAI_API_KEY}:any){
    const [content, setContent] = useState("")
    const [correctedContent, setCorrectedContent] = useState("")
  
    async function callOpenAIAPI() {
  
      const APIBody = {
        "model": "text-davinci-003",
        "prompt": `Correct this to standard English: ${content}`,
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
    
    async function getCorrectedContent(){
      try{
        const data = await callOpenAIAPI()
        console.log('data', data)
        setCorrectedContent(data.choices[0].text.trim())
      } catch (err){
        console.log('Failed to retrieve correctedContent')
      }
      
    }
  
    return (
              <div className="App">
          <h1>Fix my grammar!</h1>
          <textarea
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={getCorrectedContent}>Help me out!</button>
          <h3>OpenAI Response:</h3>
          <div className='ai-response'>
            {correctedContent !== "" ?
              <h3 > <span className={correctedContent}>
                {correctedContent.replace('content', 'content')}
              </span>  </h3>
              :
              null
            }
          </div>
      </div>
    )
}