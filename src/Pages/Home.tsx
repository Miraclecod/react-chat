import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import Panel from "../components/Panel";
import Chats from "./Chats";
//@ts-ignore

const Home = () => {

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