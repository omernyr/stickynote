import React from 'react'
import { useState } from 'react'
import { MainContext, useContext } from '../MainContext'


const NoteBox = () => {

    const { boxPosition, setMode, setNotes, notes, setBoxVisible } = useContext(MainContext)
    const types = [
        {
            name: "comment",
            color: "red",
            text: "Yorum"
        },
        {
            name: "private-comment",
            color: "green",
            text: "Gizli Yorum"
        },
        {
            name: "note",
            color: "purple",
            text: "Not"
        }
    ]
    const [color, setColor] = useState(types[0].color)
    const [note, setNote] = useState('');

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const addNote = () => {

        const currentNote = {
            number: note.length + 1,
            note: note,
            color: color,
            position: {
                x: boxPosition.x,
                y: boxPosition.y
            }
        }
        setNotes([...notes, currentNote])
        setBoxVisible(false)
        
    }

    return (
        <div onMouseLeave={() => setMode(true)} onMouseEnter={() => setMode(false)} className='note-box' style={{ position: "absolute", top: boxPosition.y, left: boxPosition.x }}>
            <span style={{ "--color": color }} className='note-box-number'>{notes.length + 1}  </span>
            <select style={{ backgroundColor: color }} onChange={changeColor}>
                {types.map(type => (
                    <option key={type.name} value={type.color}> {type.text} </option>
                ))}
            </select>
            <textarea onChange={(e) => setNote(e.target.value)} cols="30" rows="5"></textarea>
            <button onClick={addNote} disabled={!note} >Ekle</button>
        </div>
    )
}

export default NoteBox