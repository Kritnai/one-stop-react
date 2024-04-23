import React, { useState } from "react";
import './LibraryServiceRoomMat.css';
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
import MaterialItem from "./component/MaterialItem";

// import materials from "../data/materialsDB";
// import studyRooms from "../data/studyRoomsDB";

import StudyRoomItem from "./component/StudyRoomItem";
import { useModel } from "../appModel/model";

function GetData(nameTable) {
    const { data } = useModel(nameTable);
    return data;
}

function LibraryServiceRoomMat() {
    const [searchMaterial, setSearchMaterial] = useState('');

    const materials = GetData("materialsDB");
    const studyRooms = GetData("studyRoomsDB");

    
    const filteredMaterial = materials.filter((material) => {
        return material.title.includes(searchMaterial);
    });
    const materialElements = filteredMaterial.map((material, index) => {
        return <MaterialItem key={index} material={material} />
    });


    // room at rangsit
    const filteredRangsit = studyRooms.filter((room) => {
        return room.campus.includes("rangsit");
    });
    const rangsitElements = filteredRangsit.map((room, index) => {
        return <StudyRoomItem key={index} room={room} />
    });

    // room at tha prachan
    const filteredThaPrachan = studyRooms.filter((room) => {
        return room.campus.includes("tha prachan");
    });
    const ThaPrachanElements = filteredThaPrachan.map((room, index) => {
        return <StudyRoomItem key={index} room={room} />
    });

    // room at lampang
    const filteredLampang = studyRooms.filter((room) => {
        return room.campus.includes("lampang");
    });
    const LampangElements = filteredLampang.map((room, index) => {
        return <StudyRoomItem key={index} room={room} />
    });

    // room all campus
    const studyRoomElements = studyRooms.map((room, index) => {
        return <StudyRoomItem key={index} room={room} />
    });

    return (
        <>
            <AppHerderMember />

            <section className="container">
                <div className="material-element">
                    <h2>Material for learning</h2>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search"
                        value={searchMaterial}
                        onChange={(event) => { setSearchMaterial(event.target.value) }}
                    />
                </div>
                <div className="lib-content">
                    {materialElements}
                </div>


                <div className="study-room mt-5">
                    <h2>Group Study Room</h2>

                    <div className="each-campus">
                        <p id="campus">Rangsit Campus</p>
                        <div className="lib-content">
                            {rangsitElements}
                        </div>
                    </div>

                    <div className="each-campus">
                        <p id="campus">Tha Prachan Campus</p>
                        <div className="lib-content">
                            {ThaPrachanElements}
                        </div>
                    </div>

                    <div className="each-campus">
                        <p id="campus">Lampang Campus</p>
                        <div className="lib-content">
                            {LampangElements}
                        </div>
                    </div>
                </div>
            </section>


            <AppFooter />
        </>

    );
}


export default LibraryServiceRoomMat;