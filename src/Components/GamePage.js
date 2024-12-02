import React, { useState, useEffect } from 'react';
import '../Styles/GamePage.css';

function GamePage({ userName, difficulty }) {
    const [seconds, setSeconds] = useState(0);
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [cards, setCards] = useState([]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(() => {
        if (!isGameEnded) {
            const timer = setInterval(() => setSeconds((prevSeconds) => prevSeconds + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [isGameEnded]);

    useEffect(() => {
        const createCards = () => {
            const totalCards = parseInt(difficulty);
            const images = [
                require('../Styles/Images/sticker3.webp'),
                require('../Styles/Images/sticker4.webp'),
                require('../Styles/Images/sticker5.webp'),
                require('../Styles/Images/sticker6.webp'),
                require('../Styles/Images/sticker7.webp'),
                require('../Styles/Images/sticker8.webp'),
                require('../Styles/Images/sticker9.webp'),
                require('../Styles/Images/sticker10.webp'),
                require('../Styles/Images/sticker11.webp'),
                require('../Styles/Images/sticker12.webp'),
                require('../Styles/Images/sticker13.webp'),
                require('../Styles/Images/sticker14.webp'),
                require('../Styles/Images/sticker15.webp'),
                require('../Styles/Images/sticker16.webp'),
                require('../Styles/Images/sticker17.webp'),
            ];

            const shuffledImages = images.sort(() => Math.random() - 0.5);
            const pairs = shuffledImages.slice(0, totalCards / 2);

            const allCards = pairs.flatMap((image, index) => [
                { id: `card-${index}-1`, image },
                { id: `card-${index}-2`, image },
            ]);

            return allCards.sort(() => Math.random() - 0.5);
        };

        setCards(createCards());
    }, [difficulty]);

    const endGame = () => {
        setIsGameEnded(true);
    };

    return (
        <div className="game-page">
            <div className="game-info">
                <div className="intro">
                    <h4>Hey, {userName}!</h4>
                    <p>You selected difficulty level: {difficulty} cards</p>
                </div>
            </div>

            <div className="container">
                {cards.map((card) => (
                    <div key={card.id} className="cell">
                        <div className="front">
                            <img src={card.image} alt="card front" />
                        </div>
                        <div className="back"></div>
                    </div>
                ))}
            </div>

            <div className="timer">{formatTime(seconds)}</div>

            <button onClick={endGame} className="end-button">
                End Game
            </button>
        </div>
    );
}

export default GamePage;