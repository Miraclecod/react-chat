import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import Panel from "../components/Panel";
//@ts-ignore
import {userActions} from "../redux/actionTypes/actions";

const Home = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    //@ts-ignore
    const tokenUid = useSelector(state => state.authentication.user)
    useEffect( () => {
        if(!tokenUid) history.push("/login")

    },[tokenUid])


    return (
        <>
            <Panel />
        </>
    );
}

export default Home