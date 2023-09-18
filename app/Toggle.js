
'use client'


import React, { useState, useEffect } from 'react';

function Toggle() {
  const [mode, setMode] = useState('auto');

  const toggleMode = (newMode) => {
    // Logic to change the mode goes here
    setMode(newMode);
  };

  useEffect(() => {
    // Define background styles for each mode
    const backgroundStyles = {
      day: {
        backgroundColor: '#ffffff', // Light background color
        color: '#000000', // Light text color
      },
      night: {
        backgroundColor: '#000000', // Dark background color
        color: 'white', // Dark text color
      },
      auto: {}, // No specific background for 'auto' mode
    };

    // Apply the selected background styles to the body element
    document.body.style.backgroundColor = backgroundStyles[mode].backgroundColor;
    document.body.style.color = backgroundStyles[mode].color;
  }, [mode]);

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      {/* Rest of your component code remains the same */}
      {/* ... */}


      
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-mode"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label={`Toggle mode (${mode})`}
      >
        <svg className="bi my-1 mode-icon-active" width="1em" height="1em">
          <use href="#circle-half"></use>
        </svg>
        <span className="visually-hidden" id="bd-mode-text">
          Toggle mode
        </span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-mode-text">
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              mode === 'day' ? 'active' : ''
            }`}
            onClick={() => toggleMode('day')}
            aria-pressed={mode === 'day'}
          >
            <svg className="bi me-2 opacity-50 mode-icon" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Day
            {mode === 'day' && (
              <svg className="bi ms-auto" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            )}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              mode === 'night' ? 'active' : ''
            }`}
            onClick={() => toggleMode('night')}
            aria-pressed={mode === 'night'}
          >
            <svg className="bi me-2 opacity-50 mode-icon" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Night
            {mode === 'night' && (
              <svg className="bi ms-auto" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            )}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              mode === 'auto' ? 'active' : ''
            }`}
            onClick={() => toggleMode('auto')}
            aria-pressed={mode === 'auto'}
          >
            <svg className="bi me-2 opacity-50 mode-icon" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
            {mode === 'auto' && (
              <svg className="bi ms-auto" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            )}
          </button>
        </li>
      </ul>
    
    </div>
  );
}

export default Toggle;

