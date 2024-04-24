import './AppHeader.css';
function AppHeaderGuest() {
    return (
        <header>
            <div className="container">
                <div className="head-contain">
                    <img src="/images/img-index/KockKoi-logo.png" width="10%" />
                        <p>Log In For More Content</p>
                        {/* <ul>
                            <li><a href="">ผู้สำเร็จการศึกษา</a></li>
                            <li><a href="">สมัครเรียน</a></li>
                            <li><a href="">สถิติ</a></li>
                            <li><a href="">ติดต่อเรา</a></li>
                        </ul> */}

                </div>
            </div>
        </header>

    );
}

export default AppHeaderGuest;