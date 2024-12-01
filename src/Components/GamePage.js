import React, { useState, useEffect } from 'react';
import '../Styles/GamePage.css'

function GamePage({ userName, difficulty }) {
    const [seconds, setSeconds] = useState(0);
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [timer, setTimer] = useState(null);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(() => {
        if (!isGameEnded) {
            const newTimer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
            setTimer(newTimer);

            return () => clearInterval(newTimer);
        }
    }, [isGameEnded]);


    const endGame = () => {
        setIsGameEnded(true);
        clearInterval(timer);
    };

    return (
        <div className="game-page">
            <div className="game-info">
                <div className="intro">
                    <h4>hey, {userName}!</h4>
                    <p>You selected difficulty level: {difficulty} cards</p>
                </div>
                <div className="timer">
                    {formatTime(seconds)}
                </div>
            </div>


            // The game
            <div className="container" >
                <div className="cell">
                    <div className="front" data-index="1"> </div>
                </div>




            </div>


            <button onClick={endGame} className="end-button">End Game</button>
        </div>
    );
}

export default GamePage;