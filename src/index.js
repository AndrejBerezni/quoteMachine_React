import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const URL = 'https://api.quotable.io/random';

function App() {
  const [text, setText] = useState({});

  function getQuote(){
    fetch(URL)
      .then(response => response.json())
      .then(data => setText(data))
  }
  
  useEffect(() => {
    getQuote();
  }, []);
  
 return (
   <div id='quote-box'>
    <p id='text'>{text.content}</p>
    <h3 id='author'>{text.author}</h3>
    <div id='button-box'>
      <button id='new-quote' onClick={getQuote}>New Quote</button>
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${text.content} - ${text.author}`} target="_blank"><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-twitter-512.png'/>Tweet this quote</a>
     </div>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

