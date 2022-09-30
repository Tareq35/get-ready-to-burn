import React from 'react';
import './Exercise.css';

const Exercise = ({handleAddToList, exercise}) => {
    
    const { activityName, description, forAge, timeRequired, img } = exercise;
    console.log(exercise);

    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="exercise-info">
                <h4 className='activity-name'>{activityName}</h4>
                <p className='description'>{description}</p>
                <p><small>For age: {forAge}</small></p>
                <p><small>Time required: {timeRequired} minutes</small></p>
            </div>
            <button onClick={() => handleAddToList(exercise)} className='btn-list'>
                <p>Add to list</p>
            </button>

        </div>
    );
};

export default Exercise; 