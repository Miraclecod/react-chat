import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import Modal from "react-modal";

//@ts-ignore
import {userActions} from "../redux/actionTypes/actions";

const Panel: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();
    Modal.setAppElement('#app')
    // @ts-ignore
    function handleOnClick(e) {
        e.preventDefault();
        dispatch(userActions.logout())
    }
    
    const [checkmodal, setCheckmodal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setCheckmodal(false);
    }

    const modalOnClick = (e) => {
        e.preventDefault();
        setCheckmodal(true);
    } 

    return (
        <div className="panelStyle" >
            <div className="containerPanel" >
                <nav>
                <NavLink to="/" className="panelLink" activeStyle={{ color: '#007bff' }}>Home page</NavLink><br />
                <NavLink to="/messages" className="panelLink" activeStyle={{ color: '#007bff' }}>Messages</NavLink><br />
                <NavLink to="settings" className="panelLink" activeStyle={{ color: '#007bff' }}>Settings</NavLink><br />
                <button onClick={handleOnClick} className="buttonPanel" >Logout</button>
                </nav>
                <button onClick={modalOnClick}>Open Modal</button>
            <Modal
            isOpen={checkmodal}
            contentLabel="Example Modal"
            >
            <p>Edit name</p><input type="text" />
            <p>Edit password</p><input type="text" />
            <p>Edit avatar</p><img style={{width: "400px", height: "400px"}} /><br />
            <input type="file" /><br />
            <button>Edit profile</button><br />
            <button onClick={handleCloseModal}>Close Modal</button>
            </Modal>
            </div>
        </div>
    );
}

export default Panel;