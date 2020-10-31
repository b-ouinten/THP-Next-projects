import React from 'react';
import MarkdownInput from '../MarkdownInput'

import Showdown from "showdown";


const NoteDisplay = () => {
    const [titleState, setTitleState] = React.useState("")
    const [noteState, setNoteState] = React.useState("")

    const converter = new Showdown.Converter();
    const showContent = { __html: converter.makeHtml(noteState) };


    const handleSubmit = () => {
        console.log(titleState, noteState);

    }

    React.useEffect(() => {
        window.localStorage.setItem('title', titleState)

    });

    return (
        <div className="NoteDisplay">
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <button type="button" className="btn btn-danger">Ajouter une note</button>
                    </div>
                    <div className="col-md-8">
                        <h1 className="title">{titleState}</h1>
                        <div dangerouslySetInnerHTML={showContent} className="content" />;
            <MarkdownInput
                            onChangeTitle={value => setTitleState(value)}
                            onChangeContent={value => setNoteState(value)}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoteDisplay