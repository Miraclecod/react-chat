import React, { useState, useEffect } from "react";
import { database } from "../redux/firebase";
import _ from "lodash"

const Messages = () => {

    let data = database.ref("education-b755f");

    const messages = [{ name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }];

    const [searchString, setSearchString] = useState('')

    const [searchResult, setSearchResult] = useState([]);


    function handleSearch(e) {
            console.log(e.target.value)
            setSearchString(e.target.value.toLowerCase());
    }
    
    useEffect( () => {
        const result = messages.filter(item => 
            item.name.toLowerCase().includes(searchString) || item.text.toLowerCase().includes(searchString)
        );
        console.log(result)
        setSearchResult(result);
    }, [searchString])


    return (
        <div className="containerMessage">
            <input type="text" className="inputStyle" onChange={handleSearch} placeholder="" />
            {
                searchResult.map( (item, index) => {
                    return (
                        <div className="messageStyle"
                             key={index}
                        >
                            {item.name + ":" + item.text}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Messages;