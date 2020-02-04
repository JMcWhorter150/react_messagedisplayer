import React from 'react';

function UpperCaseOutput({inputText}) {
    return (
        <div>
            <p>
            {inputText ? inputText.toUpperCase() : ""}
            </p>
        </div>
    );
}

export default UpperCaseOutput;