import React from 'react';
import './List.css';
import profile from "../../images/profile.jpg"

const List = (props) => {
    const { list } = props;

    let total = 0;
    for (const exercise of list) {
        total = total + exercise.timeRequired;
    }

    return (
        <div className='list'>
            <div className='profile-content'>
                <div>
                    <img className='profile-img' src={profile} alt="" />
                </div>
                <div>
                    <h4>Tareq Islam</h4>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='person-data-container'>
                <div>
                    <p><span className='person-data'>82</span> <small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><span className='person-data'>5.9</span> <small>feet</small></p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='person-data'>25</span> <small>years</small></p>
                    <p>Age</p>
                </div>

            </div>

            <div>
                <h4>Add A Break</h4>
                <button className='break-btn'><p>2 min</p></button>
                <button className='break-btn'><p>5 min</p></button>
                <button className='break-btn'><p>8 min</p></button>
                <button className='break-btn'><p>10 min</p></button>
                <button className='break-btn'><p>15 min</p></button>

            </div>
            <h4>Exercise Details</h4>
            <p>Exercise time: {total} min</p>
            <p>Break time: </p>
            <button className='btn-activity'><p>Activity Completed</p></button>
        </div>
    );
};

export default List;