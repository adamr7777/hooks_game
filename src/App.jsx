import React, {useState, useEffect} from 'react';





export default function App() {
    const ORIGINAL_TIME = 7;

    const [input, setInput] = useState();
    const [timeRemaining, setTimeRemaining] = useState(ORIGINAL_TIME);
    const [gameStarted, setGameStarted] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    
    function handleChange(event) {
        setInput(event.target.value)
    }

    function countWords(text) {
        if (!text) text = '';
        return text.split(' ').filter((item)=> item !== '').length;
        
        
    }


    useEffect(()=> {
        if (timeRemaining === 0) endGame();
        
        if (!gameStarted) return;
        if (timeRemaining === 0) return;

        function reduceTime() {
            setTimeRemaining((prevState)=> prevState - 1);
        }

        setTimeout(reduceTime, 1000)
    }, [timeRemaining, gameStarted]) 
    
    
    useEffect(()=> console.log(`game started: ${gameStarted}`), [gameStarted])



    function endGame() {
        setGameStarted(false);
        setWordCount(countWords(input));
    }


    function startGame() {
        setGameStarted(true);
        if (timeRemaining !== 0) return 
        setInput('');
        setTimeRemaining(ORIGINAL_TIME);
        setWordCount(0);
    }

    

    return (
       <>
        <h1>How Fast Can You Type?</h1>
        <textarea disabled={!gameStarted} value={input} onChange={handleChange}/>
        <h4>Time remaining: {timeRemaining}</h4>
        <button disabled={gameStarted} onClick={startGame}>Start</button>
        <h1>Word Count: {wordCount}</h1>
       </>
    )
}

