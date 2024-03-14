import React, {useState, useEffect, useRef} from 'react';
import './CatFact.css';


const apiRef = 'https://catfact.ninja/fact';

const CatFact = () => {
    const [text, setText] = useState ('');
    const [factText, setFactText] = useState ('');
    const inputRef = useRef (null);


    useEffect (() => {
        if (inputRef.current) {
            const spaceIndex = factText.indexOf (' ');
            inputRef.current.setSelectionRange (spaceIndex, spaceIndex);
            inputRef.current.focus ();
        }
    }, [factText]);


    const handleClick = (e) => {
        e.preventDefault ();
        fetch (apiRef)
            .then (response => response.json ())
            .then (json => setFactText (json.fact))
            .catch (error => console.error (error));
    };


    const handleInputChange = (e) => {
        setText (e.target.value);
    };

    return (
        <div className='cat_fact'>
            <p className='text'>Нажми на кнопку, чтобы получить факт о котиках </p>
            <form className='cat_form'>
            <textarea
                className='input'
                ref={inputRef}
                value={factText}
                onChange={handleInputChange}/>
                <button className='btn' onClick={handleClick}> Получить факт </button>
            </form>
        </div>
    );
};

export default CatFact;
