import React from 'react'
import NoteStyles from './Note.module.scss';

const Note = ({title, noteText}) => {
    return (
        <div className={NoteStyles.text}>
            {title &&<div>{title}</div>}
            {noteText && <p>{noteText}</p>}
        </div>
    )
}

export default Note
