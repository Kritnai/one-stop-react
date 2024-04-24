import React from "react";
import { Link } from "react-router-dom";
import "./AllPageLink.css";
function AllPageLink() {


    return (
        
        <div className="AllPageLink">
            <div className="secrect-page">
                <div class="glitch-wrapper">
                    <div class="glitch" data-glitch="Welcom to secrect Page">Welcom to secrect Page</div>
                </div>

                <div className="button-link">
                    <Link to="/"><button>Home</button></Link>
                    <iframe src="/"></iframe>
                    <Link to="/login-success"><button>Log in success</button></Link>
                    <iframe src="/login-success"></iframe>
                    <Link to="/Relate-Persons"><button>Relate-Persons</button></Link>
                    <iframe src="/Relate-Persons"></iframe>
                    <Link to="/reg-overview"><button>reg-overview</button></Link>
                    <iframe src="/reg-overview"></iframe>
                    <Link to="/SchedulePlanning"><button>SchedulePlanning</button></Link>
                    <iframe src="/SchedulePlanning"></iframe>
                    <Link to="/Financial"><button>Financial</button></Link>
                    <iframe src="/Financial"></iframe>
                    <Link to="/AllSportService"><button>AllSportService</button></Link>
                    <iframe src="/AllSportService"></iframe>
                    <Link to="/LibraryService"><button>LibraryService</button></Link>
                    <iframe src="/LibraryService"></iframe>
                    <Link to="/accommodation"><button>Accommodation</button></Link>
                    <iframe src="/accommodation"></iframe>
                    <Link to="/consumption"><button>Consumption</button></Link>
                    <iframe src="/consumption"></iframe>
                    <Link to="/transport"><button>Transport</button></Link>
                    <iframe src="/transport"></iframe>
                    <Link to="/overviewSupport"><button>OverviewSupport</button></Link>
                    <iframe src="/overviewSupport"></iframe>
                    <Link to="/occupation"><button>Occupation</button></Link>
                    <iframe src="/occupation"></iframe>

                    <Link to="/physical-health-support"><button>physical-health-support</button></Link>
                    <iframe src="/physical-health-support"></iframe>
                    <Link to="/mental-health-support"><button>mental-health-support</button></Link>
                    <iframe src="/mental-health-support"></iframe>
                    
                </div>


            </div>

        </div>
    );
}

export default AllPageLink;