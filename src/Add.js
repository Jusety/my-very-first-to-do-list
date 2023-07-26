import React from "react";

function Add({ addTask, changeProp }) {
    return (
        <div>
            <input type="text" onChange={(e) => changeProp(e)} /> <br />
            <button onClick={addTask}>Add task</button>
        </div>
    );
}

export default Add;
