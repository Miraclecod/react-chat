import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
//@ts-ignore
import {userActions} from "../redux/actionTypes/actions";

const FormLogin = () => {

    const initialState = { email: '', password: '' }

    const [user, setUser] = React.useState(initialState);

    const [submitted, setSubmitted] = React.useState(false);
    //@ts-ignore
    const loggingIn = useSelector(state => state.authentication.loggingIn)
    const dispatch = useDispatch()
    // @ts-ignore
    function handleOnChange(e){
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    // @ts-ignore
    function handleOnClick(e) {
        const reg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        e.preventDefault();
        setSubmitted(true);
        if(user.email && user.password && reg.test(user.email)) {
            dispatch(userActions.login(user.email, user.password));
        }
    }

    return(
        <>
            <form className="formStyle">
                <p className="textFormStyle">Login : </p><input type="email" name="email" className="inputStyle" value={user.email} placeholder="enter email" onChange={handleOnChange} /><br />
                {
                    submitted && !user.email &&
                    <div className="invalidFeedback">Email is required</div>
                }
                <br />
                <p className="textFormStyle" >Password : </p><input type="password" name="password" className="inputStyle" value={user.password} placeholder="enter password" onChange={handleOnChange} /><br />
                {
                    submitted && !user.password &&
                    <div className="invalidFeedback">Password is required</div>
                }
                <br />
                <button className="buttonForm" onClick={handleOnClick}>
                    {loggingIn ? <svg className="spinner" viewBox="0 0 50 50"><circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg> : <div>Log in</div>}
                </button>
                {/* <Link to="/register">Register</Link> */}
            </form>
        </>
    );
}

export default FormLogin;
