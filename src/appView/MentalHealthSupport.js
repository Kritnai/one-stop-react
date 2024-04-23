import './MentalHealthSupport.css';
import AppFooter from './component/AppFooter';
import AppHerderMember from './component/AppHeaderMember';
function HelpAndSupport() {

    const mentalHealthSupports = [
        {
            title: 'Viva City: TU Conseling',
            imgPath: './images/img-mental-health/viva-city.png',
            Tel: '02-028-2222 (รังสิต) 02-613-3954 (ท่าพระจันทร์)',
            mail: 'vivacity.tu@gmail.com'
        },
        {
            title: 'TCAPS center',
            imgPath: './images/img-mental-health/TCAPS.png',
            Tel: '-',
            mail: 'tcapscenter@gmail.com'
        },
        {
            title: 'โรงพยาบาลธรรมศาสตร์ฯ City : TUCounseling',
            imgPath: './images/img-mental-health/TU-hospital.png',
            Tel: 'จันทร์-ศุกร์ เวลา 09.00-12.00 02-926-9999 ต่อ 9899, 02-926-9047​, 02-926-9518',
            mail: ''
        }
    ];

    const mentalHealthElement = mentalHealthSupports.map((item, index) => {
        return (
            <div className="box-content" >
                <div className="boxleft" >
                    <img className="responsive-img scale-img" src={item.imgPath} />
                </div >
                <div className="boxright" >
                    <div className="boxdata" >
                        <h1>
                            {item.title}
                        </h1>
                        <p>
                            Tel: {item.Tel}
                        </p>
                        <p>
                            e-mail: {item.mail}
                        </p>
                    </div >

                </div >
            </div >

        );
    });

    return (
        <>
            <AppHerderMember />
            <section>
                <div className="container">
                <h1>การช่วยเหลือด้านสุขภาพจิต</h1>
                    <div className="mentel-health-item">
                        {mentalHealthElement}
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    );
};

export default HelpAndSupport;