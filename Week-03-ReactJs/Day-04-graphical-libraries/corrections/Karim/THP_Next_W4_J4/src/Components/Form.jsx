import React , {useState } from 'react' ;
import moment from 'moment';


// On crée le functionnal composant Form pour prendre en compte les inputs des users 

const Form = ({
    select,
    oncontentchange,
    ontitlechange,
    onformsubmit,
    updateContentList,
}) => {
// Nous mettons ensuite en place notre state:  
// et la fonction qui nous permettra de modifier notre state. 
// Pour cela, nous inscrivons notre state et la fonction dans un array contenant deux entrées. 
// Notre state, dans ce cas, est par exemple currentTitle, 
// et la fonction pour le modifier est setCurrentTitle. 
// Ensuite, nous associons la valeur de notre array à notre hook useState, 
// contenant la valeur initiale de notre state.

    const [currentTitle, setCurrentTitle] = useState(select.title);
    const [currentContent, setCurrentContent] = useState(select.content);
    const [currentNoteId] = useState(select.id);

    const changeTitle = (value) => {
        setCurrentTitle(value);
    };
    const changeContent = (value) => {
        setCurrentContent(value);
    };

	return (
			<form onSubmit={(e) => {
				onformsubmit(e);
				if (currentNoteId) {
						updateContentList(currentNoteId, currentTitle, currentContent);
				} else {
					const timestamp = moment(new Date()).format('YYYYMMDhhmmss');
					updateContentList(timestamp, currentTitle, currentContent);
				} 
			}}
			>
				<input
					type="text"
					placeholder="Titre de la note"
					onChange={(e) => {
						ontitlechange(e.target.value);
						changeTitle(e.target.value);					
					}}
					value={currentTitle}
				/>
				<textarea
					type="text"
					placeholder="Contenu de la note"
					onChange={(e) => {
						oncontentchange(e.target.value);
						changeContent(e.target.value);					
					}}
					value={currentContent}
				/>
				<button type="submit">Save</button>
				</form>
			);
		};

		export default Form;
