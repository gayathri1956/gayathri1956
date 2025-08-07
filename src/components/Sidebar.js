
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/alphabets', label: 'Alphabets', icon: '🔤' },
    { path: '/numbers', label: 'Numbers', icon: '🔢' },
    { path: '/rhymes', label: 'Rhymes', icon: '🎵' },
    { path: '/drawing', label: 'Drawing', icon: '🎨' },
    { path: '/animals-birds', label: 'Animals & Birds', icon: '🦜' },
    { path: '/body-parts', label: 'Body Parts', icon: '🧠' },
    { path: '/days', label: 'Days of Week', icon: '📅' },
    { path: '/months', label: 'Months', icon: '🗓️' },
    { path: '/puzzle-games', label: 'Puzzle Games', icon: '🧩' },
    { path: '/countries-flags', label: 'Countries & Flags', icon: '🌍' },
    { path: '/quiz', label: 'Quiz', icon: '❓' },
    { path: '/gk-quiz', label: 'GK Quiz', icon: '🧠' },
    { path: '/moral-stories', label: 'Moral Stories', icon: '📚' },
    { path: '/weather', label: 'Weather & Seasons', icon: '☀️' },
    { path: '/habits', label: 'Good Habits', icon: '😊' },
    { path: '/traffic', label: 'Traffic Safety', icon: '🚦' },
    { path: '/fruits', label: 'Fruits & Veggies', icon: '🍉' },
  ];

  return (
    <div style={{ width: '240px', background: '#2f4f4f', color: 'white', padding: '1rem' }}>
      <h2 style={{ fontSize: '22px', marginBottom: '1rem' }}>Kids Learning App</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map((item, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            <Link to={item.path} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
              <span style={{ marginRight: '8px' }}>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

