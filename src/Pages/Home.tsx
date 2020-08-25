import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import Panel from "../components/Panel";

const Home = () => {

    let history = useHistory();

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