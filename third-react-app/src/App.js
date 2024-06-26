import {useEffect, useState} from "react";
import './App.css';

const Result= ({result})=><h1 className="result">{result}</h1>


function Counter({count, increment} ){
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> increment(count=>count+1)}>CLICK</button>
    </div>
  )
}
function App() {
  const [count1, setCount1]=useState(0);
  const [count2, setCount2]=useState(0);
  const [result, setResult]=useState(0);

  useEffect(()=> setResult(count1+count2), [count1,count2] )
  return (
    <div className="App">
      <header className="App-header">
        <Result result={result}></Result>
        
<Counter count={count1} increment={setCount1}></Counter>
<Counter count={count2} increment={setCount2} ></Counter>
 <p></p>
  </header>
    </div>
  );
}

export default App;
