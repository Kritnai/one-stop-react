import React from "react";
import musicRooms from "../data/musicDB";

function MusicroomService(props) {
    const { selectItem } = props;
    const selectCourt = musicRooms.filter((item) => {
        if (selectItem === "all")
            return item.type.toLowerCase().includes('');
        return item.type.toLowerCase().includes(selectItem.toLowerCase());
    })
    const musicroomElement = selectCourt.map((room, index) => {
        return (
            <div className="part-detail">
                <div className="con-left">
                    <img className="responsive-img" src={room.imagePath} />
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
                        {musicroomElement}
                    </div>
                </div>
            </section>
        </>

    );
}

export default MusicroomService;