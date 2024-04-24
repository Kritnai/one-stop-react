import React, { useState } from 'react'
import AppHeaderGuest from "./component/AppHeaderGuest";
import AppFooter from "./component/AppFooter";
import './Home.css';
import { useModel } from '../appModel/model';

import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../appModel/UserOfContext';
import AppHerderMember from './component/AppHeaderMember';


function GetData(nameTable) {
    const { data } = useModel(nameTable);
    return data;
}


function LoginSuccess() {
    const { data } = useModel("newsDB");
    const newsElement = data.map((order, index) => {
        return (
            <div key={index} className="news-element">
                <img className="responsive-img scale-img" src={order.imgUrl} />
                <p>{order.title}</p>
            </div>
        );
    });

    const studentID = "6510740000";
    const students = GetData("studentDB");

    const getStudentInfoByID = students.filter((item) => {
        return item.id.includes(studentID);
    })

    const studentInfoElement = getStudentInfoByID.map((item, index) => {
        return (
            <>
                {/* <div className="student-info">
                <div className="name-element">

                    <h3>{item.name}</h3>
                    <p>{item.branch}</p>

                </div>
                <div className="num-info">
                    <div className="info-element">
                        <h3>{item.id}</h3>
                        <p>รหัสนักศึกษา</p>
                    </div>
                </div>
            </div> */}

                <p className='success-info'>{item.name}</p>
                <p className='success-info'>{item.branch}</p>
                <p className='success-info'>{item.id}</p>

            </>
        );
    });


    return (
        <div className="Home">
            <AppHerderMember />

            <section>
                <div className="container">
                    <div className="login-sec">
                        <div className="home-col-left">

                            <div id="carouselhome" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/images/img-index/announceRegis.jpeg" className="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/img-index/stdentCard.jpeg" className="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/img-index/degree.jpeg" className="d-block w-100" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselhome" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselhome" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>

                        <div className="home-col-right">
                            <div className="outer-c">
                                {/* <form>
                                    <h4>เข้าสู่ระบบ</h4>
                                    <input type="text" placeholder="student ID" />
                                    <input type="password" placeholder="password" />
                                    <input type="submit" value="LOGIN" />
                                </form> */}
                                {studentInfoElement}

                            </div>

                            <div className="staffInfo">
                                <Link to="/Relate-Persons"><button>อาจารย์/เจ้าหน้าที่</button></Link>
                                <Link to="/Relate-Persons"><button>ผู้สำเร็จการศึกษา/ศิษย์เก่า</button></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section >

            <section>
                <div className="container">
                    <h1>ข่าวสาร</h1>
                    <div className="home-news">
                        {newsElement}
                    </div>
                </div>
            </section>


            <div className="home-contact">
                <div className="home-rangsit">
                    <h2>ศูนย์รังสิต</h2>
                    <p>
                        99 หมู่ 18 อาคารสำนักงานทะเบียนนักศึกษามหาวิทยาลัยธรรมศาสตร์
                        ศูนย์รังสิต ตำบลคลองหนึ้ง อำเภอคลองหลวง จังหวัดปทุธานี 12121
                    </p>

                    <h4>โทรศัพท์</h4>
                    <p>
                        งานสื่อสารองค์กร 02-564-4441-79 ต่อ 1651, 1652
                    </p>
                </div>

                <div className="home-thapra">
                    <h2>ท่าพระจันทร์</h2>
                    <p>
                        2 ถนนพระจันทร์ อาตารอเนกประสงต์ 1 ชั้น 4 มหาวิทยาลัยธรรมศาสตร์ ท่าพระจันทร์ แขวงพระบรมมหาราชวัง
                        เขตพระนคร กรุงเทพมหานคร 10200
                    </p>
                    <h4>โทรศัพท์</h4>
                    <p>
                        งานสื่อสารองค์กร 02-564-4441-79 ต่อ 1651, 1652
                    </p>
                </div>

            </div>


            <AppFooter />

        </div>

    );

}

export default LoginSuccess;