import React from 'react';
import tennises from '../data/tennisDB';

function TennisService(props) {
    const { selectItem } = props;
    const selectCourt = tennises.filter((item) => {
        if (selectItem === "all")
            return item.type.toLowerCase().includes('');
        return item.type.toLowerCase().includes(selectItem.toLowerCase());
    })
    const tennisElement = selectCourt.map((court, index) => {
        return (
            <div className="part-detail">
                <div className="con-left">
                    <img className="responsive-img" src={court.imagePath} />
                </div>

                <div className="con-right">
                    <h1>{court.title}</h1>

                    <button className="btn btn-success m-1">{court.time[0]}</button>
                    <button className="btn btn-success m-1">{court.time[1]}</button>
                    <button className="btn btn-success m-1">{court.time[2]}</button>
                    <button className="btn btn-success m-1">{court.time[3]}</button>
                    <button className="btn btn-success m-1">{court.time[4]}</button>

                </div>
            </div>

        );
    });

    return (
        <section>
            <div className="container">
                <div className="menu">
                    {tennisElement}
                </div>
            </div>
        </section>
    );
}

export default TennisService;