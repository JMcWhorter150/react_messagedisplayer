import React from 'react';

function Input({textInput, updateText}) {
    return (
        <label>
                <input onChange={updateText} type="text" placeholder="Type Here" value={textInput}></input>
        </label>
    );
}

export default Input;