import React from 'react';

function Dinner(props){
    return(
    <div>
        <h1>This is {props.taskName}</h1>
        <h1>This {props.taskName2}</h1>
    </div>
    )
}
export default Dinner;