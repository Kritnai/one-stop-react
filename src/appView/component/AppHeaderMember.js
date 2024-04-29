
import './AppHeader.css';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../appModel/UserOfContext';
import { Button } from 'react-bootstrap';

function AppHerderMember() {
    const { logOut, user } = useUserAuth();
    // console.log(user);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <>
            {/* <header className="navbar navbar-expand-lg">
                <div className='container'>
                    <div className="head-contain container-fluid">
                        <img className="navbar-brand" src="/images/img-index/KockKoi-logo.png" width="100%" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='collapse navbar-collapse' id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='nav-item'><Link to="/login-success">หน้าหลัก</Link></li>
                                <li className='nav-item'><Link to="/reg-overview">การเรียน</Link></li>
                                <li className='nav-item'><Link to="/Financial">ค่าใช้จ่าย</Link></li>
                                <li className='nav-item'><Link to="/AllSportService">สนามกีฬา</Link></li>
                                <li className='nav-item'><Link to="/LibraryService">อุปกรณ์</Link></li>
                                <li className='nav-item'><Link to="/accommodation">ที่พัก</Link></li>
                                <li className='nav-item'><Link to="/consumption">ศูนย์อาหาร</Link></li>
                                <li className='nav-item'><Link to="/transport">การคมนาคม</Link></li>
                                <li className='nav-item'><Link to="/overviewSupport">การบริการ</Link></li>
                                <li>{user.email}</li>
                                <li><Button onClick={handleLogOut} variant='danger'>Log Out</Button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header> */}


            <header>
                <div class="container">
                    <div class="head-contain">
                        <img src="/images/img-index/KockKoi-logo.png" width="10%" />
                        <ul>
                            <li><Link to="/login-success">หน้าหลัก</Link></li>
                            <li><Link to="/reg-overview">การเรียน</Link></li>
                            <li><Link to="/Financial">ค่าใช้จ่าย</Link></li>
                            <li><Link to="/AllSportService">สนามกีฬา</Link></li>
                            <li><Link to="/LibraryService">อุปกรณ์</Link></li>
                            <li><Link to="/accommodation">ที่พัก</Link></li>
                            <li><Link to="/consumption">ศูนย์อาหาร</Link></li>
                            <li><Link to="/transport">การคมนาคม</Link></li>
                            <li><Link to="/overviewSupport">การบริการ</Link></li>

                            <li>{user.email}</li>
                            <li><Button onClick={handleLogOut} variant='danger'>Log Out</Button></li>

                        </ul>

                    </div>
                </div>
            </header>
        </>
    );
}


export default AppHerderMember;