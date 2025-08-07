import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [
  { path: '/alphabets', label: 'Alphabets' },
  { path: '/numbers', label: 'Numbers' },
  { path: '/rhymes', label: 'Rhymes' },
  { path: '/drawing', label: 'Drawing' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/puzzle-games', label: 'Puzzle Games' },
  { path: '/countries-flags', label: 'Countries & Flags' },
  { path: '/stories', label: 'Stories' },
  { path: '/traffic-safety', label: 'Traffic Safety' },
  { path: '/body-parts', label: 'Body Parts' },
  { path: '/days-of-week', label: 'Days Of Week' },
];

const Home1 = () => {
  const [showPages, setShowPages] = useState(false);
  const navigate = useNavigate();

  const togglePages = () => setShowPages(!showPages);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#ff4081' }}>
        🌟 Welcome to Kids Learning App 🌟
      </h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
        Fun learning with alphabets, numbers, rhymes, stories and more!
      </p>

      <button
        onClick={togglePages}
        style={{
          fontSize: '20px',
          padding: '10px 30px',
          borderRadius: '12px',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        {showPages ? 'Hide All Pages' : 'Show All Pages'}
      </button>

      {showPages && (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
          {pages.map(({ path, label }) => (
            <div
              key={path}
              onClick={() => navigate(path)}
              style={{
                padding: '12px',
                margin: '6px 0',
                backgroundColor: '#ffd580',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#000',
                userSelect: 'none',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#ffc107')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#ffd580')}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home1;
