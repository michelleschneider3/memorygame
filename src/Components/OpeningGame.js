import './OpeningGame.css'

function OpeningGame({ onStart, setUserName, setDifficulty }) {

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <div className="opening-game">

            <h1 className="welcome">Welcome To Memory Game</h1>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Name" onChange={handleNameChange}/>
                <label htmlFor="floatingInput">Name</label>
            </div>

            <select className="form-select" size="3" aria-label="Size 3 select example" onChange={handleDifficultyChange}>
                <option selected>Difficulty levels</option>
                <option value="10">Level 1 (Easy): 10 cards</option>
                <option value="20">Level 2 (Medium): 20 cards</option>
                <option value="30">Level 3 (Hard): 30 cards</option>
            </select>

            <button type="button" className="btn btn-secondary btn-lg" onClick={onStart}>Start</button>
        </div>
    )
}

export default OpeningGame;