// REACT MODULES

import React, { useState } from "react";
import { useEffect } from "react";




const MarkdownInput = (props) => {


    const [note, setNote] = useState(
        {
            id: "",
            title: "",
            content: ""
        }
    );

    const handleSubmit = (event) => {


        let noteTitle = document.querySelector("#note_title").value
        let noteContent = document.querySelector("#note_content").value

        let id = document.querySelector(".markdown_form").id == "" ? Math.floor(Math.random() * 100000) : parseInt(document.querySelector(".markdown_form").id );

        setNote(
            {
                id: id,
                title: noteTitle,
                content: noteContent
            }
        );


        return note;
    }


    const handleChange = (event) => {

        let noteTitle = document.querySelector("#note_title").value
        let noteContent = document.querySelector("#note_content").value

        let id = document.querySelector(".markdown_form").id == "" ?  Math.floor(Math.random() * 100000) : parseInt(document.querySelector(".markdown_form").id );

        setNote(
            {
                id: id,
                title: noteTitle,
                content: noteContent
            }
        );


        return note;
    }




    return (

        <div className="row col-12 my-4" id="note" onSubmit={(event) => {
            event.preventDefault();
            props.onSubmit(handleSubmit(event));
        }}>

            <form action="" className="col-12 px-0 markdown_form" id={props.id}>

                <div className="form-group col-12 px-0">

                    <input type="text" placeholder="Choisir un titre"
                        className="form-control form-control-lg col-12" value={props.title} id="note_title" name="note_title" onInput={(event) => {
                            props.onInput(handleChange(event));
                        }} />

                </div>

                <div className="form-group col-12 px-0">

                    <textarea id="note_content" cols="30" rows="10" className="form-control form-control-lg col-12" name="note_content" onInput={(event) => {
                        props.onInput(handleChange(event));
                    }} value={props.content}></textarea>

                </div>


                <button type="submit" className="btn btn-lg btn-danger">Sauvegarder</button>


            </form>


        </div>

    )

}


export default MarkdownInput;