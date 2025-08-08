import { useState } from 'react';
import './App.css';
import { UrlForm } from './components/UrlForm';
import { UrlResult } from './components/UrlResult';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async (url: string) => {
    try {
      const res = await fetch('http://localhost:3000/urls/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Server error:', errorText);
        return;
      }

      const data = await res.json();
      if (data.shortenedUrl) {
        setShortUrl(data.shortenedUrl);
      } else {
        console.error('No shortenedUrl in response');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">URL Shortener</h1>
        <UrlForm onSubmit={handleShorten} />
        {shortUrl && <UrlResult shortUrl={shortUrl} />}
      </div>
    </div>
  );
}

export default App;