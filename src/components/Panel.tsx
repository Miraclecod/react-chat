import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

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
                <Link to="/" className="panelLink">Home page</Link><br />
                <Link to="/messages" className="panelLink">Messages</Link><br />
                <Link to="settings" className="panelLink">Settings</Link><br />
                <button onClick={handleOnClick} className="buttonPanel" >Logout</button>
            </div>
        </div>
    );
}

export default Panel;