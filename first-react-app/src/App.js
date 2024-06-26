import logo from './logo.svg';
import logoPink from "./logo-Pink.svg"
import './App.css';
//exemple 1 creer un composant 
const App_link =()=>{
    const variable = "React +"
  return(
    <a
      className="App-Link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn {variable} {9*2}
    </a>
  )
}
//exemple 2: créer un composant reutilisable.
const Logo =({})=> <img id='logo' src={logo} className="App-logo" alt="logo" />

function App() {
const handleOnClick= (svg) => {
  const logo = document.getElementById("logo")
  logo.src = svg;
}
  return (
    <div className="App">
      <header className="App-header">
       <Logo></Logo>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      <App_link></App_link>
      <br></br>
      <button onClick={() => handleOnClick(logo)}>blue</button>
      <button onClick={(logo_Pink) => handleOnClick(logoPink)}>pink</button>
     
      </header>
    </div>
  );
}

export default App;
