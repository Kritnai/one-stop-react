import React from "react";
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
import students from "../data/studentDB";
import "./RegOverview.css";
import { Link } from "react-router-dom";

import { useModel } from "../appModel/model";

function RegOverview() {
    const studentID = "6510740000";

    const { data } = useModel("studentDB");
    const getStudentInfoByID = data.filter((item) => {
        return item.id.includes(studentID);
    })
    
    const studentInfoElement = getStudentInfoByID.map((item, index) => {
        return (
            <div className="student-info">
                <div className="name-element">

                    <h3>{item.name}</h3>
                    <p>{item.branch}</p>

                </div>
                <div className="num-info">
                    <div className="info-element">
                        <h3>{item.id}</h3>
                        <p>รหัสนักศึกษา</p>
                    </div>
                    <div className="info-element">
                        <h3>{item.grade}</h3>
                        <p>เกรดเฉลี่ย</p>
                    </div>
                    <div className="info-element">
                        <h3>{item.credit}</h3>
                        <p>หน่วยกิตสะสม</p>
                    </div>

                </div>
                <div className="pro-element">
                    <h2>อาจารย์ที่ปรึกษา</h2>
                    <p>{item.professor}</p>
                </div>
            </div>
        );
    });

    const scheduleTableInfo = getStudentInfoByID.map((item, index) => {
        const getSubjectRegis = item.subjectRegis.map((subject) => {
            return (
                <tr>
                    <td>{subject.date}</td>
                    <td>{subject.name}</td>
                    <td>{subject.room}</td>
                    <td>{subject.time}</td>
                    <td>{subject.section}</td>
                </tr>

            )
        })
        return getSubjectRegis;
    })

    const examTableInfo = getStudentInfoByID.map((item, index) => {
        const getSubjectRegis = item.subjectExam.map((subject) => {
            return (
                <tr>
                    <td>{subject.date}</td>
                    <td>{subject.name}</td>
                    <td>{subject.room}</td>
                    <td>{subject.time}</td>
                    <td>{subject.section}</td>
                    <td>ที่นั่ง {subject.number}</td>
                </tr>

            )
        })
        return getSubjectRegis;
    })
    return (
        <div className="RegOverview">
            <AppHerderMember />
            <section>

                <div className="container">
                    <div className="personal-info">
                        <div className="personal-col">
                            {studentInfoElement}

                            <div className="registry">
                                <h2>ลงทะเบียนเรียน</h2>
                                <Link to="/SchedulePlanning"><button className="btn btn-primary">วางแผนการเรียน</button></Link>

                            </div>
                        </div>

                        <div className="reg-schedule">
                            <div className="study-schedule">
                                <h2>ตารางเรียน</h2>
                                <table className="reg-table">
                                    <thead>
                                        <th>วันที่</th>
                                        <th>วิชา</th>
                                        <th>ห้อง</th>
                                        <th>เวลา</th>
                                        <th>กลุ่มเรียน</th>

                                    </thead>
                                    <tbody>
                                        {scheduleTableInfo}

                                    </tbody>
                                </table>
                            </div>

                            <div className="exam-schedule">
                                <h2>ตารางสอบ</h2>
                                <table className="reg-table">
                                    <thead>
                                        <th>วันที่</th>
                                        <th>วิชา</th>
                                        <th>ห้อง</th>
                                        <th>เวลา</th>
                                        <th>กลุ่มเรียน</th>
                                        <th>ที่นั่งสอบ</th>
                                    </thead>
                                    <tbody>
                                        {examTableInfo}

                                    </tbody>
                                </table>
                            </div>

                        </div>


                    </div>
                </div>

            </section>

            <AppFooter />
        </div>
    );
}

export default RegOverview;