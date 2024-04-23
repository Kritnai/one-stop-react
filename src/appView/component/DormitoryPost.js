import React from "react";
import './DormitoryCompo.css';

function DormitoryPost(props) {
    const { dormitory, onBgClick } = props;
    return (
        <div className="dormitory-post">
            <div className="dormitory-post-bg" onClick={onBgClick} />
            <div className="dormitory-post-content">
                {/* <img src={dormitory.image} /> */}
                <iframe src={dormitory.link} width="100%" height="100%" />
                <h4>{dormitory.title}</h4>
            </div>
        </div>
    );
}

export default DormitoryPost;