import React, {ChangeEvent} from "react";

const formStyle = {
    width: "70px",
    margin: "auto"
}

const FormLogin = () => {
    let text = 'enter'
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
      </>
    );
}

export default FormLogin;