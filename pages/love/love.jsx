import React, { useState } from 'react';
import question from './question.gif'
import answer from './answer.gif'
import './love.css'

const LoveProposal = () => {
    const [noBtn, setNoBtn] = useState({ left: 'auto', top: 'auto' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNoMouseOver = () => {
        const randomX = Math.floor(Math.random() * 400);
        const randomY = Math.floor(Math.random() * 400);
        setNoBtn({
            left: `${randomX}px`,
            top: `${randomY}px`,
        });
    };

    const handleYesClick = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 3000);
    };

    return (
        <div className='container'>
            {!isSubmitted ? (
                <div className='questionContainer'>
                    <img
                        src={question}
                        alt="Cute Bears"
                        className='gif'
                    />

                    <h2 className='heading'>Eisha, Do you love me?</h2>

                    {isLoading ? (
                        <div >Loading your answer... ❤️</div>
                    ) : (
                        <div className='btnGroup'>
                            <button onClick={handleYesClick}
                            className='yesBtn'>
                                Yes
                            </button>

                            <button
                                onMouseOver={handleNoMouseOver}
                                className='noBtn'
                                style={{
                                    position:noBtn.left !== 'auto' ? 'absolute' : 'relative',
                                    left: noBtn.left,
                                    top: noBtn.top,
                                }} 
                            >
                                No
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                /* RESULT VIEW */
                <div className='resultContainer'>
                    <img
                        src={answer}
                        alt="Happy Dance"
                        className='gif'
                    />
                    <h2 className='heading'>Yay! I Knew It! 🥰 <br /> I Love You Too 💖</h2>
                </div>
            )}
        </div>
    );
};

// Simple inline styling for rapid implementation

export default LoveProposal;