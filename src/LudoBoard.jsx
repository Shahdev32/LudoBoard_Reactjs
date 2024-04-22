import React, { useState } from 'react';

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

    const handleMove = (color) => {
        setMoves(prevMoves => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={() => handleMove("blue")}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow" }} onClick={() => handleMove("yellow")}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={() => handleMove("green")}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={() => handleMove("red")}>+1</button>
            </div>
        </div>
    );
}
