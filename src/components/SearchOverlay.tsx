import React, { useState } from 'react';

const engines = {
  duckduckgo: 'https://duckduckgo.com/?q=',
  brave: 'https://search.brave.com/search?q=',
};

const SearchOverlay: React.FC = () => {
  const [query, setQuery] = useState('');
  const [engine, setEngine] = useState<'duckduckgo' | 'brave'>('duckduckgo');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const url = engines[engine] + encodeURIComponent(query);
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSearch} className="absolute top-32 w-full flex justify-center z-30">
      <div className="flex flex-col items-center">
        <input
          className="w-[600px] px-6 py-3 rounded-xl bg-white bg-opacity-90 text-black shadow-lg outline-none text-lg"
          type="text"
          placeholder="Search the new, free web..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="mt-2 px-4 py-1 rounded bg-white bg-opacity-90 text-black"
          value={engine}
          onChange={(e) => setEngine(e.target.value as 'duckduckgo' | 'brave')}
        >
          <option value="duckduckgo">DuckDuckGo</option>
          <option value="brave">Brave Search</option>
        </select>
      </div>
    </form>
  );
};

export default SearchOverlay;
