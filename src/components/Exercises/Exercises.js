import React, { useEffect, useState } from 'react';
import './Exercises.css';

const Exercises = () => {

    const [exercise, setExercise] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Programming-Hero-Web-Course4/b6-ultra-active-club-Tareq35/main/public/excercise.json?token=GHSAT0AAAAAABV6ZG5DR6LIACH2PNBI47M2YZWAOUQ')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])

    return (
        <div className='exercise-data'>
            <div className='todays-exercise'>
                <h2>Select Today's Exercise:{exercise.length} </h2>

            </div>
            <div className='profile'>
                <h2>profile</h2>
            </div>
        </div>
    );
};

export default Exercises;