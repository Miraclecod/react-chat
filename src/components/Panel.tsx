import React from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

//@ts-ignore
import {userActions} from "../redux/actionTypes/actions";

const Panel: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();

    // @ts-ignore
    function handleOnClick(e) {
        e.preventDefault();
        dispatch(userActions.logout())
    }

    return (
        <div className="panelStyle" >
            <div className="containerPanel" >
                <nav>
                <NavLink to="/" className="panelLink" activeStyle={{ color: '#007bff' }}>Home page</NavLink><br />
                <NavLink to="/messages" className="panelLink" activeStyle={{ color: '#007bff' }}>Messages</NavLink><br />
                <NavLink to="settings" className="panelLink" activeStyle={{ color: '#007bff' }}>Settings</NavLink><br />
                <button onClick={handleOnClick} className="buttonPanel" >Logout</button>
                </nav>
            </div>
        </div>
    );
}

export default Panel;