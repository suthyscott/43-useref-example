import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [renderCount, setRenderCount] = useState(1)
  // const renderCount = useRef(1)
  // const prevName = useRef('')
  const inputRef = useRef()

  // console.log(renderCount)

  // useEffect(() => {
    // setRenderCount(renderCount + 1)
    // renderCount.current = renderCount.current + 1
  //   prevName.current = name
  // }, [name])

  console.log(inputRef.current)
  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      {/* <input value={lastName} onChange={e => setLastName(e.target.value)}/> */}
      <p>My name is {name}</p>
      {/* <p>This component rendered {renderCount} times </p> */}
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default App;
