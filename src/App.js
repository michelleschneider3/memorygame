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