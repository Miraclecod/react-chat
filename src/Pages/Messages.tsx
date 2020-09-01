import React, { useState, useEffect } from "react";
import { database } from "../redux/firebase";
import _ from "lodash";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "../components/Spinner";

const Messages = () => {

    function loadFunction(){

    }

    let arr:Array<Object> = [];

    const messages = [{ name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }];

    const [searchString, setSearchString] = useState('')

    const [searchResult, setSearchResult] = useState([]);   

    
    //@ts-ignore
    function handleSearch(e) {
            const { value: nextValue } = e.target;
            const debouncedSave = _.debounce( () => setSearchString(nextValue), 300);
            debouncedSave();
    }
    
    useEffect( () => {
        const result = messages.filter(item => 
            item.name.toLowerCase().includes(searchString) || item.text.toLowerCase().includes(searchString)
        );
        setSearchResult(result);
    }, [searchString])
    


    function setData(userId:String, message:String, name:String, time:TimeRanges){
        database.ref("messages/").set({
            message: message,
            name: name,
            time: time
        })
    }
    const [dataArr, setDataArr] = useState([]);


    function readData() {
        database.ref("chats").on("value", function(snapshot){
            arr.push(snapshot.val());
        })
    }
    readData();

    useEffect( () => {
        setDataArr(arr);
    },[])

    console.log(arr)

    return (
        <div className="containerMessage">
            <input type="text" className="inputMessageStyle" onChange={handleSearch} placeholder="search message" /><br /><br />
            <div className="lastDate">last message { moment().startOf('day').fromNow() }</div>
                 <InfiniteScroll
                 pageStart={0}
                 loadMore={loadFunction}
                 hasMore={true || false}
                 loader={<Spinner />}
             >{
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
                </InfiniteScroll>
        </div>
    );
}

export default Messages;