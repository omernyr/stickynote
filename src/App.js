import React, { useEffect, useRef, useState } from 'react';
import LeaveComponentText from './components/LeaveComponentText';
import { MainContext } from './MainContext';
import Note from './components/Note';
import './App.css';
import NoteBox from './components/NoteBox';

function App() {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const [notes, setNotes] = useState([{
    id: "1",
    number: 1,
    note: "Bu bir test notudur 😌",
    color: "red",
    position: {
      x: 350,
      y: 300
    }
  }, {
    id: "2",
    number: 2,
    note: "Bu bir test2 notudur 🌷",
    color: "green",
    position: {
      x: 250,
      y: 200
    }
  }])
  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0,
    color: "black"
  })
  const [boxVisible, setBoxVisible] = useState(false);

  const data = {
    mode,
    setMode,
    position,
    setPosition,
    notes,
    setNotes,
    boxPosition,
    setBoxPosition,
    setBoxVisible
  }

  useEffect(() => {
    screen.current.focus()
  }, [])

  const handleKeyUp = (e) => {
    setMode(!mode)
    setBoxVisible(false)
  }
  const handleMouse = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
  }
  const handleClick = (e) => {
    if (mode) {

      setBoxPosition({
        x: e.pageX,
        y: e.pageY,
      })

      console.log(boxPosition, boxVisible);
      setBoxVisible(true);

    }
  }

  return (
    <MainContext.Provider value={data} >
      <div tabIndex={0} ref={screen} onClick={handleClick} onMouseMove={handleMouse} onDoubleClick={handleKeyUp} className={`screen${mode && '-editable'}`} >

        <img alt='' src='https://images.unsplash.com/photo-1542553458-79a13aebfda6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' />
        {mode && <LeaveComponentText />}
        {notes && notes.map(note => <Note key={note.id} {...note} />)}
        {boxVisible && <NoteBox />}

      </div>
    </MainContext.Provider>
  );
}


export default App;
