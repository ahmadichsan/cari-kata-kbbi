import React, { useState } from 'react';
import rawData from './kbbi.json';
import './App.css';

interface Data {
  uri: string;
  keyword: string;
};

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Data[]>([]);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _query = event.target.value;
    setQuery(_query);
  }

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const _data = rawData
      .filter(item => item.keyword
        .toLowerCase().indexOf(query.toLowerCase()) === 0);

    setData(_data);
  }

  return (
    <div>
      {/* header goes here */}
      <div className="header">
        <input
          type="text"
          className="input-search"
          placeholder="ketik kata kunci di sini..."
          value={query}
          onChange={handleChangeQuery}
        />

        <button
          className="find-button"
          onClick={handleClickButton}
        >
          Cari
        </button>
      </div>

      {/* render data goes here */}
      <div
        className="render-data"
      >
        <div className="info">
          Sumber data KBBI diambil dari repositori&nbsp;
          <a
            href="https://github.com/bukujari/kbbi/blob/master/assets/daftar-kata.json"
            target="_blank"
            rel="noreferrer"
          >
            ini
          </a>
        </div>

        <div
          className="result-total"
        >
          Total hasil pencarian: {data.length} kata
        </div>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="data-item"
            >
              {item.keyword}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
