import React from 'react';
import './Material-Room.css';

function StudyRoomItem(props) {
    const { room } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={room.thumbnailUrl} />
            <a href="" className='card-text'><button>{room.title}</button></a>
        </div>
    );
}


export default StudyRoomItem;