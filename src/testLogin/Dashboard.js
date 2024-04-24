import React, { useContext } from "react";
import { redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";

function Dashboard() {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <redirect to='/login' />
    }
    return (
        <div>
            <div className="container mt-5">
                <h1>welcome</h1>
                <p>this is the dashboard if you can see this you login</p>
                <button onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger"></button>
            </div>
        </div>
    )
}

export default Dashboard;