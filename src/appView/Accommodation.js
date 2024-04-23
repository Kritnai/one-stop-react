import React, { useState } from "react";
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
import accommodations from "../data/accommodationDB";
import "./Accommodation.css";
import DormitoryItem from "./component/DormitoryItem";
import DormitoryPost from "./component/DormitoryPost";

function Accommodation() {
    const rangsitDormitory = accommodations.filter((item) => {
        return item.campus.includes("rangsit");
    });
    const rangsitElement = rangsitDormitory.map((item, index) => {
        return (
            <DormitoryItem key={index} item={item} onPictureClick={onDormitoryOpenClick} />
        );
    });
    const lampangDormitory = accommodations.filter((item) => {
        return item.campus.includes("lampang");
    });
    const lampangElement = lampangDormitory.map((item, index) => {
        return (
            <DormitoryItem key={index} item={item} onPictureClick={onDormitoryOpenClick} />
        );
    });

    const pattayaDormitory = accommodations.filter((item) => {
        return item.campus.includes("pattaya");
    });
    const pattayaElement = pattayaDormitory.map((item, index) => {
        return (
            <DormitoryItem key={index} item={item} onPictureClick={onDormitoryOpenClick} />
        );
    });

    const hotel = accommodations.filter((item) => {
        return item.campus.includes("hotel");
    });
    const hotelElement = hotel.map((item, index) => {
        return (
            <DormitoryItem key={index} item={item} onPictureClick={onDormitoryOpenClick} />
        );
    });

    const [selectedDormitory, setSelectDormitory] = useState(null);
    function onDormitoryOpenClick(e) {
        setSelectDormitory(e);
    }
    function onDormitoryCloseClick() {
        setSelectDormitory(null);
    }
    let dorPost = null;
    if (!!selectedDormitory) {
        dorPost = <DormitoryPost dormitory={selectedDormitory} onBgClick={onDormitoryCloseClick} />
    }
    return (
        <div className="accommodation">
            <AppHerderMember />
            <section>
                <div className="container">
                    {dorPost}
                    <h2>หอพักภายในมหาวิทยาลัย</h2>
                    <div className="accommodation-content">

                        {/* rangsit */}
                        <div className="rangsit-dormitory">
                            <h3>ศูนย์รังสิต</h3>
                            <div className="dormitory">
                                {rangsitElement}
                            </div>
                        </div>

                        {/* lampang */}
                        <div className="lampang-dormitory">
                            <h3>ศูนย์ลำปาง</h3>
                            <div className="dormitory">
                                {lampangElement}
                            </div>
                        </div>

                        {/* pattaya */}
                        <div className="pattaya-dormitory">
                            <h3>ศูนย์พัทยา</h3>
                            <div className="dormitory">
                                {pattayaElement}
                            </div>
                        </div>

                        {/* hotel */}
                        <div className="hotel">
                            <h3>โรงแรม</h3>
                            <div className="dormitory">
                                {hotelElement}
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            <AppFooter />

        </div>
    );
}


export default Accommodation;