import './App.css';
import OpeningGame from "./Components/OpeningGame";
import { useState } from 'react';
import GamePage from "./Components/GamePage";

function App() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [userName, setUserName] = useState('');
    const [difficulty, setDifficulty] = useState('');

  return (
      <div className="App">
          <head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <title>Bootstrap demo</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossOrigin="anonymous"/>
          </head>
          <body>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                  crossOrigin="anonymous"></script>
          </body>
          {!isGameStarted ? (
              <OpeningGame
                  onStart={() => setIsGameStarted(true)}
                  setUserName={setUserName}
                  setDifficulty={setDifficulty}
              />
          ) : (
              <GamePage userName={userName} difficulty={difficulty} />
          )}
      </div>
  );
}

export default App;
