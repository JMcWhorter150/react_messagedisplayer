import React from 'react';

function ClearInput({clearFunction}) {
    return (
        <button onClick={clearFunction}>Reset</button>
    );
}

export default ClearInput;