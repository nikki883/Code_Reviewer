import { useState , useEffect } from 'react';
import './App.css'
import Editor from 'react-simple-code-editor';

import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

import 'prismjs/themes/prism-tomorrow.css';
import prism from 'prismjs';

import axios from 'axios';

function App() {

  const [code, setCode] = useState(`write code here...`);
  const [review,setReview] = useState(null);
  const [loading,setLoading] = useState(false);
  
  useEffect(()=>{

    prism.highlightAll();
  },[]);

  async function reviewCode(){

    try {
      setLoading(true); 
      const res = await axios.post(`http://localhost:5500/ai/get-review`, {code});
      console.log(res.data);
      setReview(res.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview("Error: Could not retrieve review. Please check the console for details."); // Provide user feedback on error
    } finally {
      setLoading(false); // Ensure loading is always set to false after the API call, whether success or failure
    }
    
  }

  return (
  <>
  <main>
    <div className="left">
      <div className="code">
      <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript,"javascript")}
              padding={14}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
      </div>
      <div 
      onClick={reviewCode}
      className="review-btn">Review</div>
    </div>
    <div className="right">
    {
    loading ? 
    <p>Loading review...</p> : 
    (
    <Markdown 
    rehypePlugins={[rehypeHighlight]}>
    {review}
    </Markdown>
    )}
    </div>
  </main>
  </>
  )
}

export default App
