import React from 'react';
import './Material-Room.css';

function StudyRoomItem(props) {
    const { room } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={room.thumbnailUrl} />
            <button className='card-text'>{room.title}</button>
        </div>
    );
}


export default StudyRoomItem;