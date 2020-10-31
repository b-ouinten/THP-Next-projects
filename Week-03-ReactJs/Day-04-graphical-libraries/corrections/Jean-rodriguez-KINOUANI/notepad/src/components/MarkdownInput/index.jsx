import React from 'react'

export const MarkdownInput = props => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit()

    };


    return (
        <form onSubmit={handleSubmit} id="form">
            <div>
                <input type="text" className="form-control"
                    placeholder="titre de votre note"
                    onChange={e => props.onChangeTitle(e.target.value)} />
            </div>
            <div>
                <textarea placeholder="Ecrivez votre note" id="content" className="form-control"
                    onChange={e => props.onChangeContent(e.target.value)} />
            </div>
            <button type='submit' className="btn btn-danger" rows="6">Sauvegarder</button>
        </form>
    )
}
export default MarkdownInput;