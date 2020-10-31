import React from "react";

// VENDOR MODULES
import Showdown from "showdown";



const converter = new Showdown.Converter();


const NoteDisplay = (props) => {



    const MakeHTMLFromMarkDown = (markdownValue) => {

        return  {__html: converter.makeHtml(markdownValue)};
    }

    return (

        <div className="col-12 px-0" id="current_note">

        
            {<div dangerouslySetInnerHTML={MakeHTMLFromMarkDown(props.title)} />}

            {<div dangerouslySetInnerHTML={MakeHTMLFromMarkDown(props.content)} />}


        </div>
    )
}

export default NoteDisplay