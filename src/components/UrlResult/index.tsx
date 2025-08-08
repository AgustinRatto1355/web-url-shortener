import React from 'react';

interface Props {
  shortUrl: string;
}

export const UrlResult: React.FC<Props> = ({ shortUrl }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="result-box mt-6 text-center space-y-2">
      <p>
        <strong>Shortened:</strong>{' '}
        <a href={shortUrl} className="text-blue-600 underline break-all" target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
      </p>
      <button onClick={handleCopy} className="text-sm text-blue-500 hover:underline">
        Copy
      </button>
    </div>
  );
};