import { useState } from 'react';
import { Request, Result } from './interfaces/Request';
import './App.css'
import axios from 'axios';

const API = "http://localhost:8080/api"

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

        console.log(nextUrl)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <button onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch</button>
      <button onClick={() => fetchData(nextUrl)} hidden={!nextUrl}>Next</button>
      <button onClick={() => fetchData(prevUrl)} hidden={!prevUrl}>Previous</button>
      {result && result.map((item, index) => <div key={index}>{item.name}: {item.url}</div>)}
    </>
  )
}

export default App
