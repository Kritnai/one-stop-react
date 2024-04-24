import React from "react";
import AppFooter from "./component/AppFooter";
import AppHerderMember from "./component/AppHeaderMember";
import { Link } from "react-router-dom";

function OverviewSupport() {
    return (
        <>
            <AppHerderMember />
            <section>
                <div className="container">
                    <div className="list-link">
                        <Link to="/occupation" ><button className="btn btn-primary mt-3 p-5 w-100">to Occupation</button></Link>
                        <Link to="/physical-health-support" ><button className="btn btn-primary mt-3 p-5 w-100">to PhysicalHealthSupport</button></Link>
                        <Link to="/mental-health-support" ><button className="btn btn-primary mt-3 p-5 w-100">to MentalHealthSupport</button></Link>
                    </div>
                </div>
            </section>

            <AppFooter />

        </>
    );
}

export default OverviewSupport;