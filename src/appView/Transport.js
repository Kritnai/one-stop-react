import './Transport.css';
import AppFooter from './component/AppFooter';
import AppHerderMember from './component/AppHeaderMember';
function Transport() {

    //dynmic link testing
    document.addEventListener('DOMContentLoaded', function () {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        var link = document.getElementById('dynamicLink');

        // ตรวจสอบว่าเป็น iOS หรือไม่
        if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
            link.setAttribute('href', 'https://apps.apple.com/th/app/anywheel/id1453812982');
        }
        // ตรวจสอบว่าเป็น Android หรือไม่
        else if (/android/i.test(ua)) {
            link.setAttribute('href', 'https://play.google.com/store/apps/details?id=com.ytyiot.ebike.anywheel&hl=en_US');
        }
    });



    return (
        <>
            <AppHerderMember />
            <section>
                <div className="container">
                    <div className="boxcontent">
                        <img src="images/img-transport/routemap.jpg" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="transport-content">
                        <a href="#" id="dynamicLink">
                            <img className="anywheel" src="images/img-transport/anywheel.jpg" />
                        </a>


                        <img className="rider" src="images/img-transport/rider.jpg" />
                        <img className="evbus" src="images/img-transport/evbus.jpg" />
                        <img className="tworow" src="images/img-transport/redcar.jpg" />
                        <img className="van" src="images/img-transport/van.jpg" />
                        <img className="bus" src="images/img-transport/bus.jpg" />

                    </div>
                </div>
            </section>

            <AppFooter />
        </>
    );
};


export default Transport;