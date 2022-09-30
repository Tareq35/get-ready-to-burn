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

    const handleAddToList = (exercise) => {
        // console.log(exercise)
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
            <div>
                <h2 className='questions'>Some Important Question</h2>
                <div className='answer-container'>
                    <div className='answers'>
                        <div>
                            <h4>Q-1: How does react work?</h4>
                            <p><strong>ans:</strong>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. </p>
                        </div>
                        <div>
                            <h4>Q-2: What is the difference between props and state?</h4>
                            <p><strong>ans: </strong>Props are used to pass data from one component to another.
                                The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                        </div>
                        <div>
                            <h4>Q-3: What does useEffect do besides data load?</h4>
                            <p><strong>ans: </strong>By using useEffect , you tell React that your component needs to do something after render. React will remember the function you passed well refer to it as our “effect”, and call it later after performing the DOM updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Exercises;