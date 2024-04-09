import { useState } from 'react';
import { Request, Result } from './interfaces/Request';
import { API } from './constants';
import './App.css'
import axios from 'axios';

function App() {
  const [result, setResult] = useState<Result[] | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);


  const fetchData = (url: string) => {
    axios.get(url)
      .then(response => {
        const data: Request = response.data;
        setResult(data.results);
        setNextUrl(data.next ? API + new URL(data.next).search : null);
        setPrevUrl(data.previous ?  API + new URL(data.previous).search : null);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <button onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch</button>
      <button onClick={() => nextUrl && fetchData(nextUrl)} hidden={!nextUrl}>Next</button>
      <button onClick={() => prevUrl && fetchData(prevUrl)} hidden={!prevUrl}>Previous</button>
      {result && result.map((item, index) => <div key={index}>{item.name}: {item.url}</div>)}
    </>
  )
}

export default App
