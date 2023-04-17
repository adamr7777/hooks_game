import React, {useState, useEffect, useRef} from 'react';

import useLogic from './useLogic';



export default function App() {
    const {input, timeRemaining, gameStarted, 
        wordCount, screenRef, startGame, handleChange} = useLogic();

    return (
       <>
        <h1>How Fast Can You Type?</h1>
        <textarea ref={screenRef} disabled={!gameStarted} value={input} onChange={handleChange}/>
        <h4>Time remaining: {timeRemaining}</h4>
        <button disabled={gameStarted} onClick={startGame}>Start</button>
        <h1>Word Count: {wordCount}</h1>
       </>
    )
}

