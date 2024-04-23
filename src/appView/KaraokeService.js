import React from 'react';
import karaokes from "../data/karaokeDB"

function Karaoke(props) {
    const { selectItem } = props;
    const selectCourt = karaokes.filter((item) => {
        if (selectItem === "all")
            return item.type.toLowerCase().includes('');
        return item.type.toLowerCase().includes(selectItem.toLowerCase());
    })
    const karaokeElement = selectCourt.map((room, index) => {
        return (
            <div className="part-detail">

                <div className="con-left">
                    <img className="responsive-img scale-img" src={room.imagePath} />
                </div>

                <div className="con-right">
                    <h1>{room.title}</h1>
                    <p>{room.description}</p>

                    <button className="btn btn-success m-1">{room.time[0]}</button>
                    <button className="btn btn-success m-1">{room.time[1]}</button>
                    <button className="btn btn-success m-1">{room.time[2]}</button>
                    <button className="btn btn-success m-1">{room.time[3]}</button>
                    <button className="btn btn-success m-1">{room.time[4]}</button>
                    <button className="btn btn-success m-1">{room.time[5]}</button>
                    <button className="btn btn-success m-1">{room.time[6]}</button>
                    <button className="btn btn-success m-1">{room.time[7]}</button>
                    <button className="btn btn-success m-1">{room.time[8]}</button>
                    <button className="btn btn-success m-1">{room.time[9]}</button>
                    <button className="btn btn-success m-1">{room.time[10]}</button>
                </div>
            </div>

        );
    });

    return (
        <>
            <section>
                <div className="container">
                    <div className="menu">
                        {karaokeElement}
                    </div>
                </div>
            </section>


        </>
    );
}

export default Karaoke;