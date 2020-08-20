import React from "react";
import {useDispatch, useSelector} from "react-redux";
//@ts-ignore
import {userActions} from "../redux/actionTypes/actions"

const FormRegister = () => {

    const initialState = { email: '', password: '', name: '', lastName: '' }

    const [user, setUser] = React.useState(initialState);
    const [submitted, setSubmitted] = React.useState(false);
    const dispatch = useDispatch();
    // @ts-ignore
    function handleOnChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    // @ts-ignore
    function handleOnClick(e) {
        e.preventDefault();
        setSubmitted(true);
        if(user.name && user.password && user.name && user.lastName) dispatch(userActions.register(user));
    }

    return(
      <>
      <form>
          <input type="email" className="inputStyle" name={user.email} onChange={handleOnChange} />
          {
              submitted && !user.email &&
              <div className="invalidFeedback">Email is required</div>
          }
          <input type="password" name={user.password} className="inputStyle" onChange={handleOnChange} />
          {
              submitted && !user.password &&
              <div className="invalidFeedback">Password is Required</div>
          }
          <input type="text" name={user.name}  className="inputStyle" onChange={handleOnChange} />
          {
              submitted && !user.name &&
              <div className="invalidFeedback">Name is required</div>
          }
          <input type="text" name={user.lastName} className="inputStyle" onChange={handleOnChange} />
          {
              submitted && !user.lastName &&
              <div className="invalidFeedback">Lastname is required</div>
          }
          <button onClick={handleOnClick} className="buttonForm">Registration</button>
      </form>
      </>
    );
}

export default FormRegister