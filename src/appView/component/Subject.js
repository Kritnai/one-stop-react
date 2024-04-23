import React from "react";
import "./Subject.css";
function Subject(props) {
    const { subject, stated } = props;
    if (stated === "add") {
        return (
            <div className="subjet-item">
                <div>
                    <h3>{subject.title}</h3>
                    <p>{subject.section}</p>

                </div>
                <p>{subject.description}</p>
                {/* <div className="checkbox-wrapper-2">
                    <input className="sc-gJwTLC ikxBAC" type="checkbox" />
                </div> */}
                <button className="btn btn-primary" value="add">เพิ่ม</button>
            </div>
        )
    }
    else if (stated === "remove") {
        return (
            <div className="subjet-item">
                <div>
                    <h3>{subject.title}</h3>
                    <p>{subject.section}</p>

                </div>
                <p>{subject.description}</p>
                {/* <div className="checkbox-wrapper-2">
                    <input className="sc-gJwTLC ikxBAC" type="checkbox" />
                </div> */}
                <button className="btn btn-danger" value="remove">ลบ</button>
            </div >
        )
    }

    return (
        <>
        </>
    )
}

export default Subject;