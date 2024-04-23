import { Link } from 'react-router-dom';
import './PhysicalHealthSupport.css';
import AppFooter from './component/AppFooter';
import AppHerderMember from './component/AppHeaderMember';
function PhysicalHealthSupport() {
    return (
        <>
            <AppHerderMember />
                <div className='container'>
                    <div className='hospital mt-5'>
                        <h1>โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ</h1>
                        <div className='hospital-info'>
                            <div className='col-left'>
                                <iframe className='map-hospital' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.0597964186663!2d100.61271687518946!3d14.073646289760495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f8b5240581d%3A0xecfc2bf4fa4f2a60!2z4LmC4Lij4LiH4Lie4Lii4Liy4Lia4Liy4Lil4LiY4Lij4Lij4Lih4Lio4Liy4Liq4LiV4Lij4LmM4LmA4LiJ4Lil4Li04Lih4Lie4Lij4Liw4LmA4LiB4Li14Lii4Lij4LiV4Li0!5e0!3m2!1sth!2sth!4v1711111611130!5m2!1sth!2sth" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className='col-right'>
                                <div className='align-hos'>
                                    <img src='images/img-physical-health/tuhospital.png' />
                                    <Link to='https://www.hospital.tu.ac.th'><button className='btn btn-success'>go to website</button></Link>
                                    <p>Tel: 02-926-9999</p>
                                    <p>Tel: 1669</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='well-being mt-5 mb-5'>
                        <h1>Well-Being center</h1>
                        <div className='well-being-info'>
                            <div className='col-left'>
                                <iframe className='map-sc1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.7735325256524!2d100.60280076718514!3d14.069556702401167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fcf0c5a5dd9%3A0x81142340ee2a6cf1!2sSC1!5e1!3m2!1sth!2sth!4v1711124488243!5m2!1sth!2sth" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                            <div className='col-right'>
                                <div className='align-well'>
                                    <h2>หน้าที่ของเรา</h2>
                                    <p>บริการสุขภาพด้านการรักษาพยาบาล ปฐมพยาบาลเบื้องต้น ดูแลติดตามผลการรักษาพยาบาล กิจกรรมโครงการส่งเสริมสุขภาพเพื่อให้นักศึกษามีสุขภาพดี การให้บริการประกันอุบัติเหตุและการเรียกร้องค่าสินไหมชดเชยจากการเกิดอุบัติเหตุให้กับนักศึกษา </p>
                                    <Link to='https://sites.google.com/view/tuwellbeingcenterxhiv/หนาแรก'><button className='btn btn-success'>go to website</button></Link>
                                    <p>อาคารเรียนรวมสังคมศาสตตร์ ชั้นล่าง</p>
                                    <p>Tel: 02 696 6600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            


            <AppFooter />
        </>
    );
};

export default PhysicalHealthSupport;