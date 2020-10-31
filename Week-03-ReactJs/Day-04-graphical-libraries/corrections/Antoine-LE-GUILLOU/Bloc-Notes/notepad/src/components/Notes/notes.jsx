import React from "react";

// VENDOR MODULES
import Showdown from "showdown";


const converter = new Showdown.Converter();


const Note = (props) => {


    const getNoteInformation = () => {
        return {
            
            id:props.id, 
            title: props.title, 
            content: props.content 
        }
    }

    const MakeHTMLFromMarkDown = (markdownValue) => {

        return  {__html: converter.makeHtml(markdownValue)};
    }

    return (
        <div className="card note" onClick={(event) => {
            event.preventDefault();
            props.onClick(getNoteInformation());
        }} id={`note_${props.id}`} key={props.id}>

            <div className="card-header">
                <div className="card-title font-weight-bold text-danger">
                    {<div dangerouslySetInnerHTML={MakeHTMLFromMarkDown(props.title)} />}</div>
            </div>

            <div className="card-body">
                {<div dangerouslySetInnerHTML={MakeHTMLFromMarkDown(props.content)} />}
            </div>

        </div>

    )
}

export default Note;