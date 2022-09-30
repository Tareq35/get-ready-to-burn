import React from 'react';
import './List.css';

const List = (props) => {
    const { list } = props;

    let total = 0;
    for(const exercise of list){
        total = total + exercise.timeRequired;
    }

    return (
        <div className='list'>
            <div>
            <h5>Add A Break</h5>
            
            </div>
            <h5>Exercise Details</h5>
            <p>Exercise time: {total} min</p>
            <p>Break time: </p>
            <button className='btn-activity'><p>Activity Completed</p></button>
        </div>
    );
};

export default List;