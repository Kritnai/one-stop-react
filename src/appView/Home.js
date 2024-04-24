import React, { useState } from 'react'
import AppHeaderGuest from "./component/AppHeaderGuest";
import AppFooter from "./component/AppFooter";
import './Home.css';
import { useModel } from '../appModel/model';

import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../appModel/UserOfContext';

function Home() {
    const { data } = useModel("newsDB");
    const newsElement = data.map((order, index) => {
        return (
            <div key={index} className="news-element">
                <img className="responsive-img scale-img" src={order.imgUrl} />
                <p>{order.title}</p>
            </div>
        );
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await logIn(email, password);
            navigate('/login-success');
        } catch (err) {
            setError("email or password incorrect!");
        }
    }


    return (
        <div className="Home">
            <AppHeaderGuest />

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
                                <h2 className='mb-3'>Log in</h2>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                                        <Form.Control
                                            type='email'
                                            placeholder='Email Address'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                                        <Form.Control
                                            type='password'
                                            placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <div className='d-grid gar-2'>
                                        <Button variant='primary' type='submit'>Sign In</Button>
                                    </div>
                                </Form>
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

export default Home;