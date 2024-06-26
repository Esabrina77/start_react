import { useState, useEffect } from "react";
import './App.css';


// const Title = ({ content }) => <h1 id="title">{content}</h1>

// const Component = ({ title, onClick }) =>
//   <button onClick={() =>
//     onClick(title)}>Apprendre {title}</button>

function App() {
  const [count, setCount] = useState(0)
  const reset = () => {}
  useEffect(() => {
    setCount(0)
  }, [])

  // const [title, setTitle] = useState("React");
  // const handleOnClick = (lib) => setTitle(lib)

  // useEffect(() => {
  //   document.title = `learn ${title}`
  // }, [title])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="result">Counter</h1>
        <p>You clicked {count}times </p>
        <button onClick={() => setCount(count => count + 1)}>CLICK</button>
        <button onClick={reset}>reset</button>

        {/* <br></br>
       <Title content={title} />
        <Component onClick={handleOnClick} title="React"></Component>
        <Component onClick={handleOnClick} title="Angular" ></Component>
        <Component onClick={handleOnClick} title="Vue"></Component> */}

      </header>
    </div>
  );
}

export default App;
