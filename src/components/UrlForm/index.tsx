import React, { useState } from 'react';

interface Props {
  onSubmit: (url: string) => void;
}

export const UrlForm: React.FC<Props> = ({ onSubmit }) => {
  const [inputUrl, setInputUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) {
      alert('Please enter a URL');
      return;
    }
    onSubmit(inputUrl);
    setInputUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        placeholder="Enter your URL"
        className="url-input"
      />
      <button type="submit" className="shorten-button">Shorten</button>
    </form>
  );
};