
import './AppHeader.css';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../appModel/UserOfContext';
import { Button } from 'react-bootstrap';

function AppHerderMember() {
    const { logOut, user } = useUserAuth();
    console.log(user);
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
    );
}


export default AppHerderMember;