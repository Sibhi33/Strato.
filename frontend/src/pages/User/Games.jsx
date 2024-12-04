import React, { useState } from 'react';

const Games = () => {
  // State to track the current game index
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  // Array of game information
  const games = [
    {
      title: 'Image Pairing Game',
      src: 'https://h5p.org/h5p/embed/231678',
      width: '100%', // Full width of the viewport
      height: '100vh', // Full height of the viewport
    },
    {
      title: 'Mark the Words',
      src: 'https://h5p.org/h5p/embed/1405',
      width: '100%', // Full width of the viewport
      height: '100vh', // Full height of the viewport
    },
  ];

  // Function to go to the next game
  const nextGame = () => {
    if (currentGameIndex < games.length - 1) {
      setCurrentGameIndex(currentGameIndex + 1);
    }
  };

  // Function to go to the previous game
  const prevGame = () => {
    if (currentGameIndex > 0) {
      setCurrentGameIndex(currentGameIndex - 1);
    }
  };

  return (
    <div style={styles.container}>
      {/* Title for the current game */}
      <div style={styles.titleSection}>
        <h1 style={styles.title}>{games[currentGameIndex].title}</h1>
      </div>

      {/* Game iframe for the current game */}
      <div style={styles.gameContainer}>
        <iframe
          src={games[currentGameIndex].src}
          width={games[currentGameIndex].width}
          height={games[currentGameIndex].height}
          frameBorder="0"
          allowFullScreen="allowfullscreen"
          allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
          title={games[currentGameIndex].title}
          style={styles.iframe}
        ></iframe>
        <script
          src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
          charset="UTF-8"
        ></script>
      </div>

      {/* Navigation buttons */}
      <div style={styles.navButtons}>
        <button onClick={prevGame} style={styles.button} disabled={currentGameIndex === 0}>
          Previous
        </button>
        <button onClick={nextGame} style={styles.button} disabled={currentGameIndex === games.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Start from the top
    minHeight: '100vh', // Ensure container takes full viewport height
    padding: '0',
    margin: '0',
    overflow: 'hidden',
    position: 'relative',
    paddingTop: '30vh', // Adds space at the top of the page (30% of viewport height)
  },
  titleSection: {
    marginBottom: '10px', // Added margin to space out the title from the game
    zIndex: 1, // Ensure title is above iframe
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "'Courier New', Courier, monospace", // Use monospaced font
    color: '#fff',
    position: 'absolute',
    top: '5vh', // Position title a little below the top of the screen
    width: '100%',
  },
  gameContainer: {
    width: '100%', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0, // Keep game content behind the title
  },
  iframe: {
    width: '100%', // Full width of the viewport
    height: '100%', // Full height of the viewport
    border: 'none',
  },
  navButtons: {
    position: 'absolute',
    bottom: '10px', // Close the buttons to the game container
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    zIndex: 1, // Ensure buttons are above the iframe
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default Games;
