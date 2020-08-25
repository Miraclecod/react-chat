import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
//@ts-ignore
import {userActions} from "../redux/actionTypes/actions"
import Spinner from "./Spinner";

const FormRegister: React.FC = (): JSX.Element => {

    const initialState = { email: '', password: '', name: '', lastName: '' }

    const [user, setUser] = React.useState(initialState);
    const [submitted, setSubmitted] = React.useState(false);
    const dispatch = useDispatch();
    const registering = useSelector(state => state.registr.registering);
    // @ts-ignore
    function handleOnChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    // @ts-ignore
    function handleOnClick(e) {
        e.preventDefault();
        setSubmitted(true);
        if(user.email && user.password) dispatch(userActions.register(user.email, user.password));
    }

    return(
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
                  {registering ? <Spinner /> : <div>Check in</div>}
              </button>
           <Link to="/login" className="linkStyle" >Login</Link>
      </form>
    );
}

export default FormRegister