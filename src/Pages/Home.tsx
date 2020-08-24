import React from "react";
import Panel from "../components/Panel";
import {useSelector} from "react-redux";

const Home = () => {

    const token = useSelector(state => state.authentication.token)

    React.useEffect( () => {
        console.log(token)
    },[token])

    return (
        <>
            <Panel />
        </>
    );
}

export default Home