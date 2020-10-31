import React, { useState } from 'react';
import moment from 'moment';
import Nav from './Nav';

import NoteDisplay from './NoteDisplay';
import Form from './Form';

const MarkdownList = () => {
    const ListOnTheLeft = () => {
        const archive = {};
        const keys = Object.keys(localStorage);
        let i = keys.length;
        
/*         while (true) {
            if (i === 0) {
                i = i - 1;
                break;
            }
            i = i - 1;
            ...do stuff...
        }  */
        
        
        while (i--){
            const note = JSON.parse(window.localStorage.getItem(keys[i]));
            archive[keys[i]] = {
                title: note.title,
                content: note.content,
                id: keys[i],
            };
        }
        return archive;
    };

    const [list] = useState(ListOnTheLeft());
    const [select, setSelect] = useState('none');
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [newSubmit, setNewSubmit] = useState(false);

    const showTitle = (newTitle) => {
        setNewSubmit(false);
        setEditTitle(newTitle);
    };
    
    const showContent = (newContent) => {
        setNewSubmit(false);
        setEditContent(newContent);
    };

    const submitNote = (e) => {
        e.preventDefault();
        if (editContent || editTitle) {
            setNewSubmit(true);
            if (select === 'create') {
                const timestamp = moment(new Date()).format('YYYYMMDDHHmmss');
                window.localStorage.setItem(
                    timestamp,
                    JSON.stringify({ title: editTitle, content: editContent }),
                );
            } else {
                window.localStorage.setItem(
                    select.id,
                    JSON.stringify({ title: editTitle, content: editContent}), 
                );
            }
            setEditTitle('');
            setEditContent('');
            setEditTitle('');
        }
    };

    const changeSelect = (e) => {
        if (e.target.id) {
            setSelect(list[e.target.id]);
            setEditContent(list[e.target.id].content);
            setEditTitle(list[e.target.id].title);
        }
    };

    const clearSelect = () => {
        setSelect('create');
    }

    const updateList = (noteKey, newTitle, newContent) => {
        list [noteKey] = {title: newTitle, content: newContent, id: noteKey };
    };

    return (
        <>
					<Nav {... { list }} newclick={clearSelect} click={changeSelect} />
					<div className="zoom">
						<div className="preview">
							<NoteDisplay {...{ title: editTitle, content: editContent }} />
						</div>
						<div>
							<Form key={select.title} {...{ select }} onformsubmit={submitNote} updateContentList={updateList} ontitlechange={showTitle} oncontentchange={showContent} />
						</div>
					</div>
				</>
		);
  };

export default MarkdownList
