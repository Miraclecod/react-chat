import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";

const Chats = (): JSX.Element => {
    //@ts-ignore
    function handleEnterInDialog(id) {
       console.log(id)
    }

    const chats = [{clientName: "Иван Иваныч", status: "active", messages: { content: "Здравствуйте, я столкнулся с проблемой ...", timestamp: 123124123123132 }}, {clientName: "Петр Сидоров", status: "active", messages: { content: "Здравствуйте, помогите мне ...", timestamp: 123124123123231}}];
    
    const [searchResult, setSearchResult] = useState([]);

    const [searchChat, setSearchChat] = useState('');
    
    useEffect( () => {
        const result = chats.filter(item => 
            item.clientName.toLowerCase().includes(searchChat) || item.messages.content.toLowerCase().includes(searchChat)
        );
        setSearchResult(result);
    }, [searchChat])

    function handleSearch() {
        //@ts-ignore
        const {value : nextValue} = event.target
        setSearchChat( nextValue )
    }

    return (
        <div className="containerMessage">
            <input type="text" className="inputMessageStyle" onChange={handleSearch}
                   placeholder="search chat"/><br/><br/>
            <div className="containerButton">
                <button className="buttonForm">Saved dialog</button>
                <button className="buttonForm">Active dialog</button>
                <button className="buttonForm">Completed dialog</button>
                {/*<NavLink to="/saved" activeStyle={{ color: '#007bff' }}>Saved dialog</NavLink>*/}
                {/*<NavLink to="/active" activeStyle={{ color: '#007bff' }}>Active dialog</NavLink>*/}
                {/*<NavLink to="/completed" activeStyle={{ color: '#007bff' }}>Completed dialog</NavLink>*/}
            </div>
            {
                searchResult.map((item, index) => {
                    let date = new Date(item.messages.timestamp);
                    return (
                        <>
                            <div className="messageStyle"
                                 key={index}
                            >
                                {item.clientName + ":" + item.messages.content + "  " + "Date of the application " + date}
                            </div>
                            <button className="buttonForm" onClick={() => handleEnterInDialog(index)}>Enter in chat
                            </button>
                        </>
                    );
                })
            }
        </div>
    );
}

export default Chats;





















