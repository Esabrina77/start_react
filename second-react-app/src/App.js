import { useState } from "react";
import './App.css';

const Title = ({ content }) => <h1 id="title">{content}</h1>

const Component = ({ title, onClick }) =>
  <button onClick={() => onClick(title)}>Apprendre {title}</button>

function App() {
  const [title, setTitle] = useState("React");

  const handleOnClick = (lib) => setTitle(lib)
  return (
    <div className="App">
      <header className="App-header">
        <Title content={title} />
        <Component onClick={handleOnClick} title="React"></Component>
        <Component onClick={handleOnClick} title="Angular" ></Component>
        <Component onClick={handleOnClick} title="Vue"></Component>

      </header>
    </div>
  );
}

export default App;
