import React from 'react';
import './WorksheetForm';
import './WorksheetData.css'



const WorksheetData = (props) => {
    return <div className="equation-data">
        <h1>{Number(props.index + 1)}. {props.equations}</h1>
        {props.displayAnswers && <h1>{props.answer}</h1>}

    </div>
}




export default WorksheetData;