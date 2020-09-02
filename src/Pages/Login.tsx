import React from "react";
import FormLogin from "../components/FormLogin";

const  container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const Login = ():JSX.Element => {

    return(
        <div style={container}>
            <FormLogin />
        </div>
    );
}

export default Login;