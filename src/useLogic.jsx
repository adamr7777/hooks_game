import {useState, useRef, useEffect} from 'react';



export default function useLogic() {
    const ORIGINAL_TIME = 7;

    const [input, setInput] = useState();
    const [timeRemaining, setTimeRemaining] = useState(ORIGINAL_TIME);
    const [gameStarted, setGameStarted] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    const screenRef = useRef(null);

    function handleChange(event) {
        setInput(event.target.value)
    }

    function countWords(text='') {
        return text.split(' ').filter((item)=> item !== '').length;
    }


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

    useEffect(()=> {
        if (timeRemaining === 0) endGame();
        
        if (!gameStarted) return;
        if (timeRemaining === 0) return;
    
        screenRef.current.focus();
    
        function reduceTime() {
            setTimeRemaining((prevState)=> prevState - 1);
        }
    
        setTimeout(reduceTime, 1000)
    }, [timeRemaining, gameStarted]) 

    return {input, timeRemaining, gameStarted, wordCount, screenRef, startGame, handleChange};
}