import React from "react";

const FormRegister = () => {

    const initialState = { email: '', password: '', name: '', lastName: '' }

    const [user, setUser] = React.useState(initialState);

    function handleOnChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    function handleOnClick(e) {
        e.preventDefault();
        if(user.name && user.password && user.name && user.lastName) console.log(user);
    }

    return(
      <>
      <form>
          <input type="email" name={user.email} onChange={handleOnChange} />
          <input type="password" name={user.password} onChange={handleOnChange} />
          <input type="text" name={user.name} onChange={handleOnChange} />
          <input type="text" name={user.lastName} onChange={handleOnChange} />
          <button onClick={handleOnClick}>Registragion</button>
      </form>
      </>
    );
}

export default FormRegister