import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import List from '../List/List';
import './Exercises.css';

const Exercises = () => {

    const [exerciseItem, setExerciseItem] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExerciseItem(data))
    }, [])

    const handleAddToList= (exercise) => {
        console.log(exercise)
        const newList = [...list, exercise];
        setList(newList);
    }

    return (
        <div className='exercise-section'>
            <h2>Select Today's Exercise </h2>
            <div className='exercise-data'>
                <div className='todays-exercise'>
                    {
                        exerciseItem.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}
                        ></Exercise>)
                    }

                </div>
                <div className='profile'>
                    <List list={list}></List>
                </div>
            </div>
        </div>

    );
};

export default Exercises;