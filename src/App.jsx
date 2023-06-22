import React, { useState, useEffect } from 'react';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    (theme === 'light-theme' ?
      setTheme('dark-theme') :
      setTheme('light-theme'));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Change Background Color</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
    </main>
  );
}

export default App;
