import React from "react";

const Messages = () => {

    const messages = [1,3,4];

    return (
        <>
            <input type="text"  />
            {
                messages.map( (item) => {
                    return (
                        <div>
                            item
                        </div>
                    );
                })
            }
        </>
    );
}

export default Messages;