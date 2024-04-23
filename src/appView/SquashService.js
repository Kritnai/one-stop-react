import React from 'react';
import squashs from '../data/squashDB';
function SquashService(props) {
    const { selectItem } = props;
    const selectCourt = squashs.filter((item) => {
        if (selectItem === "all")
            return item.type.toLowerCase().includes('');
        return item.type.toLowerCase().includes(selectItem.toLowerCase());
    })
    const squashElement = selectCourt.map((court, index) => {
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
                    
                </div>
            </div>

        );
    });

    return (
            <section>
                <div className="container">
                    <div className="menu">
                        {squashElement}                       
                    </div>
                </div>
            </section>
    );
};

export default SquashService;