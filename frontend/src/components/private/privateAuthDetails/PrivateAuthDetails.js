import "./privateAuthDetails.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../../data/AuthContext";

const PrivateAuthDetails = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="row-auth-details">

            { UserAuth ? <p className="private-auth-details-paragraf">Uživatel: {user && user.email}</p> : <p>Nejste přihlášený</p> }

            <button className="private-auth-details-button" onClick={handleLogout} >
                Odhlásit se
            </button>
        </div>
    );
};



export default PrivateAuthDetails