import React, { useState, useEffect } from "react"

const Chats = () => {
    function handleEnterInDialog() {

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
        const {value : nextValue} = event.target
        setSearchChat( nextValue )
    }

    return (
        <div className="containerMessage">
        <input type="text" className="inputMessageStyle" onChange={handleSearch} placeholder="search chat" /><br /><br />
        {
            searchResult.map( (item, index) => {
                let date = new Date(item.messages.timestamp);
                return (
                    <>
                    <div className="messageStyle"
                         key={index}
                    > 
                        {item.clientName + ":" + item.messages.content + "  " + "Date of the application " + date}
                    </div>
                    <button className="buttonForm" onClick={handleEnterInDialog} >Enter in chat</button>
                    </>
                );
            })
        }
    </div>
    );
}

export default Chats;