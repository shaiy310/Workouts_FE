import React from 'react';
import './ExerciseRestIntervalCell.css';

function ExerciseRestIntervalCell({ exercise }) {
    const [rest, setRest] = React.useState(Number(exercise.rest) || 0);
    const [btnText, setBtnText] = React.useState('Start');
    const timerId = React.useRef(null);

    React.useEffect(() => {
        return () => {
            if (timerId.current !== null) {
                clearInterval(timerId.current);
                timerId.current = null;
            }
        };
    }, []);
    
    function handleStartRest() {
        if (timerId.current) return;

        let remaining = rest;
        setBtnText('Running...');
        
        timerId.current = setInterval(function () {
            remaining -= 1;
            setRest(remaining);

            if (remaining <= 0) {
                clearInterval(timerId.current);
                timerId.current = null;
                setBtnText('Start');
                setRest(rest);
                buzzRestTimer();
            }
        }, 1000);
    }

    return (
        <td className="rest-cell">
            <span className="rest-timer-value">{rest}</span> seconds
            {rest > 0 && <button className="rest-timer-btn" type="button" onClick={handleStartRest}>
                {btnText}
            </button>}
        </td>
    );
}

function buzzRestTimer() {
    const clickCount = 6;
    const clickInterval = 500;
    const clickDuration = 0.08;
    if (navigator.vibrate) {
        navigator.vibrate(Array(clickCount * 2).fill(250));
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = new AudioContext();
    for (let click = 0; click < clickCount; click += 1) {
        const startTime = context.currentTime + (click - (0.5 * (click % 2))) * clickInterval / 1000;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = 'square';
        oscillator.frequency.value = 880;
        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + clickDuration);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start(startTime);
        oscillator.stop(startTime + clickDuration);
    }

    setTimeout(() => context.close(), clickCount * clickInterval);
}


export default ExerciseRestIntervalCell;
