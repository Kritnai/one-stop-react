import React from "react";
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
import "./OccupationSupport.css";

function OccupationSupport() {
    return (
        <div className="occupationSupport">
            <AppHerderMember />
            <section>

                <div className="container">
                        <h2>โอกาสด้านอาชีพ</h2>
                    <div className="intern">

                        <div className="sandbox">
                            <a href="https://88sandbox.com/eportfolio/"><h2>88 Sandbox</h2></a>
                            <iframe className="intern-iframe" src="https://88sandbox.com/eportfolio/" width="100%" height="1000px"/>
                        </div>

                        <div className="jobfair">
                            <a href="https://tu.ac.th/thammasat-290366-tu-job-fair-2023"><h2>TU Job Fair</h2></a>
                            <iframe className="intern-iframe" src="https://tu.ac.th/thammasat-290366-tu-job-fair-2023" width="100%" height="1000px"/>
                        </div>
                    </div>

                </div>
            </section>


            <AppFooter />

        </div>
    );
}

export default OccupationSupport;