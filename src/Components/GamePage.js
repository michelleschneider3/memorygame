
function GamePage({ userName, difficulty }) {
    return (
        <div>
            <h1>Hello, {userName}!</h1>
            <p>You selected difficulty level: {difficulty} cards</p>
        </div>
    )
}
export default GamePage;