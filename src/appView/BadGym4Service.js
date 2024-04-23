import React from 'react';
import badmintonGym4 from '../data/badmintonGym4DB';

function BadGym4Service(props) {
    const { selectItem } = props;
    const selectCourt = badmintonGym4.filter((item) => {
        if (selectItem === "all")
            return item.type.toLowerCase().includes('');
        return item.type.toLowerCase().includes(selectItem.toLowerCase());
    })
    const badmintonElement = selectCourt.map((court, index) => {
        return (
            <div class="part-detail">
                <div class="con-left">
                    <img class="responsive-img" src={court.imagePath} />
                </div>

                <div class="con-right">
                    <h1>{court.title}</h1>
                        <button class="btn btn-success m-1">{court.time[0]}</button>
                        <button class="btn btn-success m-1">{court.time[1]}</button>
                        <button class="btn btn-success m-1">{court.time[2]}</button>
                        <button class="btn btn-success m-1">{court.time[3]}</button>
                    
                </div>
            </div>
        );
    });


    return (
            <section>
                <div class="container">
                    <div class="menu">
                        {badmintonElement}
                    </div>
                </div>
            </section>
    );
};

export default BadGym4Service;