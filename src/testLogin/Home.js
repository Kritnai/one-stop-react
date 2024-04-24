import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

function Home(){
    const [currentUser] = useContext(AuthContext);

    return (
        <>
        <div className="container mt-5>">

            <h1>Home</h1>
            {currentUser ? (
                <p>you login<Link to='/dashboard'>View Dashboard</Link></p>
            ) : (
                <p>
                    <Link to="/login">Log in</Link> or <Link to='/signup'></Link>
                </p>
            )}
        </div>
        
        </>
    )
}

export default Home;