import React from "react"

import FormRegister from "../components/FormRegister"

const  container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const Register = () => {

    return (
        <div style={container}>
        <FormRegister />
        </div>
    );
}

export default Register