import React from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../redux/actionTypes/actions";

const Panel: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();

    function handleOnClick(e) {
        e.preventDefault();
        dispatch(userActions.logout())
    }

    return (
        <>
        <ul className="panelStyle">
            <li>Home</li>
            <li>Message</li>
            <li>Settings</li>
            <button onClick={handleOnClick} >Logout</button>
        </ul>
        </>
    );
}

export default Panel;