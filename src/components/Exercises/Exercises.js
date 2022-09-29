import React, { useState } from 'react';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    return (
        <div className='exercise-data'>
            <div className='todays-exercise'>
                <h2>Select Today's Exercise</h2>

            </div>
            <div className='profile'>
                <h2>profile</h2>
            </div>
        </div>
    );
};

export default Exercises;