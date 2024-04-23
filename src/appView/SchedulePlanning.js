import React, { useState } from "react";
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
import Subject from "./component/Subject";
import "./SchedulePlanning.css";
import { useModel } from "../appModel/model";
function SchedulePlanning() {
    const { data } = useModel("allSubjectDB");

    const [searchText, setSearchText] = useState("");
    const searchSubject = data.filter((subject) => {
        return subject.title.includes(searchText.toLocaleUpperCase());
    })
    const subjectElement = searchSubject.map((subject, index) => {
        return (
            <>
                <Subject key={index} subject={subject} stated={"add"} />
                <hr className="underline" />
            </>
        )
    })

    const subjectSelectedElement = searchSubject.map((subject, index) => {
        return (
            <>
                <Subject key={index} subject={subject} stated={"remove"} />
                <hr className="underline" />
            </>
        )
    })
    return (
        <div className="SchedulePlanning">
            <AppHerderMember />
            <section>
                <div className="container">
                    <h2>วางแผนการเรียน</h2>
                    <div className="planning">

                        <div className="plan-col-left">
                            <input
                                className="searchbar"
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={(event) => { setSearchText(event.target.value) }}
                            />

                            <div className="plan-bg">
                                <div className="all-subject">
                                    {subjectElement}
                                </div>
                            </div>
                        </div>

                        <div className="plan-col-right">
                            <div className="plan-bg">
                                <h3>วิชาที่เลือก</h3>
                                <div className="all-subject">
                                    {subjectSelectedElement}
                                </div>
                            </div>
                            <button className="btn btn-success">ยืนยันการลงทะเบียน</button>
                        </div>

                    </div>


                </div>

            </section>



            <AppFooter />

        </div>
    )
}

export default SchedulePlanning;