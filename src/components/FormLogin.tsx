import React from "react";
import {Form, Control} from "react-redux-form";
import {useDispatch, useSelector} from "react-redux"
import { userActions } from "../redux/actionTypes/actions"

const FormLogin = () => {

    const initialState = { email: '', password: '' }

    const [user, setUser] = React.useState(initialState);

    const [submitted, setSubmitted] = React.useState(false);
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // React.useEffect( () => {
    //     dispatch(userActions.logout())
    // }, [])

    function handleOnChange(e){
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    function handleOnClick(e) {
        const reg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        e.preventDefault();
        if(user.email && user.password && reg.test(user.email)) {
            dispatch(userActions.login(user.email, user.password))
        }else{

        }
    }

    return(
     <>
      <form> 
          <p>Login : </p><input type="email" name="email" value={user.email} onChange={handleOnChange} /><br />
      <br />
          <p>Password : </p><input type="password" name="password" value={user.password}  onChange={handleOnChange} /><br />
      <br />
          <button onClick={handleOnClick}>Войти</button>
      </form>
      {/*<Form model="user" >*/}
      {/*    <Control*/}
      {/*        type="email"*/}
      {/*        model="user.email"*/}
      {/*    />*/}

      {/*    <Control*/}
      {/*        type="password"*/}
      {/*        model="user.password"*/}
      {/*    />*/}
      {/*</Form>*/}

    </>
    );
}

export default FormLogin;