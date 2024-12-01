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

            shuffleImage();

            return () => clearInterval(newTimer);
        }
    }, [isGameEnded]);


    const endGame = () => {
        setIsGameEnded(true);
        clearInterval(timer);
    };

    const shuffleImage = () => {
        const cards = document.querySelectorAll('.cell');  // בוחר את כל הקלפים
        const num = [...Array(cards.length).keys()];  // יוצר מערך של אינדקסים מ-0 עד לאורך המערך
        num.sort(() => Math.random() - 0.5);  // מערבב את האינדקסים באופן רנדומלי

        cards.forEach((card, index) => {
            card.style.order = num[index];  // משנה את הסדר של כל קלף
        });
    };

    return (
        <div className="game-page">
            <div className="game-info">
                <div className="intro">
                    <h4>hey, {userName}!</h4>
                    <p>You selected difficulty level: {difficulty} cards</p>
                </div>
            </div>

            <div className="container">
                <div className="cell">
                    <div className="front" data-index="1"><img src={require('../Styles/Images/sticker3.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="1"><img src={require('../Styles/Images/sticker3.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="2"><img src={require('../Styles/Images/sticker4.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="2"><img src={require('../Styles/Images/sticker4.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="3"><img src={require('../Styles/Images/sticker5.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="3"><img src={require('../Styles/Images/sticker5.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="4"><img src={require('../Styles/Images/sticker6.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="4"><img src={require('../Styles/Images/sticker6.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="5"><img src={require('../Styles/Images/sticker7.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="5"><img src={require('../Styles/Images/sticker7.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="6"><img src={require('../Styles/Images/sticker8.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="6"><img src={require('../Styles/Images/sticker8.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="7"><img src={require('../Styles/Images/sticker9.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="7"><img src={require('../Styles/Images/sticker9.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="8"><img src={require('../Styles/Images/sticker10.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="8"><img src={require('../Styles/Images/sticker10.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="9"><img src={require('../Styles/Images/sticker11.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="9"><img src={require('../Styles/Images/sticker11.webp')} alt=""/>
                    </div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="10"><img src={require('../Styles/Images/sticker12.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="10"><img src={require('../Styles/Images/sticker12.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="11"><img src={require('../Styles/Images/sticker13.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="11"><img src={require('../Styles/Images/sticker13.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="12"><img src={require('../Styles/Images/sticker14.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="12"><img src={require('../Styles/Images/sticker14.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="13"><img src={require('../Styles/Images/sticker15.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="13"><img src={require('../Styles/Images/sticker15.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="14"><img src={require('../Styles/Images/sticker16.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="14"><img src={require('../Styles/Images/sticker16.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="15"><img src={require('../Styles/Images/sticker17.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
                <div className="cell">
                    <div className="front" data-index="15"><img src={require('../Styles/Images/sticker17.webp')}
                                                                alt=""/></div>
                    <div className="back"></div>
                </div>
            </div>

            <div className="timer">
                {formatTime(seconds)}
            </div>

            <button onClick={endGame} className="end-button">End Game</button>
        </div>
    );
}

export default GamePage;