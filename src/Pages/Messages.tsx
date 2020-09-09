import React, { useState, useEffect } from "react";
import { database } from "../redux/firebase";
import _ from "lodash";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroller";
//import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Autocomplete from '@material-ui/lab/Autocomplete';

import Spinner from "../components/Spinner";

const Messages = () => {

    let arr:Array<Object> = [];

    const messages = [{ name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }, { name: "Kirill",text: "hello" }, { name: "Pasha" ,text: "hi" }, { name: "Masha" ,text: "world" }];

    const [searchString, setSearchString] = useState('')

    const [searchResult, setSearchResult] = useState([]);

    function loadFunction(){

    }
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
    
    function setData(userId:String, message:String, name:String, time:Date){
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
    const [text, setText] = useState('');
    //@ts-ignore
    function handleSearchs(e) {
        setText(e.target.value);
    }
    //@ts-ignore
    function addEmoji(e) {
        let emoji = e.native;
        console.log(emoji);
        setText(text + emoji)
        //setState({text: state + emoji});
    }
    //@ts-ignore
    function handleOnMessageClick(e) {
        e.preventDefault();
        console.log(text);
    }

    function getDataInTime() {
        const debainced = _.debounce( () => setDataArr(arr), 30000);
        debainced();
    }

    const options = ['Hello', 'good bye'];

    return (
        <div className="containerMessage">
            <input type="text" className="inputMessageStyle" onChange={handleSearch} placeholder="search message" /><br /><br />
            <div className="lastDate">last message { moment().startOf('day').fromNow() }</div>
            <div className="containerText">
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
            {/* <Autocomplete
                id="custom-input-demo"
                options={options}
                renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                    <input style={{ width: 200 }} type="text" className="inputStyle" {...params.inputProps} />
                    </div>
                )}
                /> */}
            <input type="text" onChange={handleSearchs} placeholder="enter message" className="inputStyle" />
            <button className="buttonForm" onClick={handleOnMessageClick}>send message</button>
            <span><Picker onSelect={addEmoji} /></span>
        </div>
    );
}


export default Messages;