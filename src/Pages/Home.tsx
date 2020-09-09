import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import Panel from "../components/Panel";
import Chats from "./Chats";

const Home = ():JSX.Element => {

    let history = useHistory();
    //@ts-ignore
    const tokenUid = useSelector(state => state.authentication.user)
    useEffect( () => {
        if(!tokenUid) history.push("/login")

    },[tokenUid])
    
    return (
        <>
            <Panel />
            <Chats />
        </>
    );
}

export default Home