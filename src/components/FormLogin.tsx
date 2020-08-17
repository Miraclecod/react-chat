import React from "react";
import {Form, Control} from "react-redux-form";

const formStyle = {
    width: "70px",
    margin: "auto"
}

const FormLogin = () => {

    const [inputText, setInputText] = React.useState('');

    function handleOnChange(e){
        setInputText(e.target.value);
    }

    function handleOnClick(e) {
        let emailSymbol = '@'
        e.preventDefault();
        if(inputText.length > 0 && inputText.includes(emailSymbol)){
            console.log(inputText);
        }else{
            alert("enter text")
        }
    }

    return(
     <>
      <form style={formStyle}>
          <p>Login : </p><input type="label" onChange={handleOnChange} /><br />
      <br />
          <p>Password : </p><input type="label" onChange={handleOnChange} /><br />
      <br />
          <button onClick={handleOnClick}>Войти</button>
      </form>
      {/*<Form model="user" >*/}
      {/*    <Control*/}
      {/*        type="email"*/}
      {/*        model=".email"*/}
      {/*    />*/}

      {/*    <Control*/}
      {/*        type="password"*/}
      {/*        model=".password"*/}
      {/*    />*/}
      {/*</Form>*/}

    </>
    );
}

export default FormLogin;