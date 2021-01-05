import { useState } from "react";
import './App.css';

function App() {
  const [initial,setInitial] = useState(true);
  const [type,setType] = useState(0);
  const [years,setYears] = useState(1);
  const [personalCase,setPersonalCase]= useState("");
  return (
    <div className="App">
      {initial ?
        <div onClick={() => setInitial(false)}>
          <h1>O seu voo é nacional ou internacional?</h1>
          <ul>
            <li onClick={() => setType(1)}>Nacional</li>
            <li onClick={() => setType(2)}>Internacional</li>
          </ul>
        </div>
        :
        <>
        </>
      }
      {type === 1 && years === 1 ?
      <>
        <h2>Há quanto tempo ocorreu o caso?</h2>
        <ul>
          <li  onClick={() => setYears(0)}>Mais de 5 anos</li>
          <li  onClick={() => setYears(5)}>Menos de 5 anos</li>
        </ul> 
      </>
      : type === 2  && years === 1?
      <>
      <h2>Há quanto tempo ocorreu o caso?</h2>
        <ul>
          <li onClick={() => setYears(0)}>Mais de 2 anos</li>
          <li onClick={() => setYears(2)}>Menos de 2 anos</li>
        </ul>
      </>
      :
      <>
      </>
      }
      
      {years === 2 || years === 5 ?
      <>
        <h1>O que aconteceu?</h1>
        <ul>
          <li value="Atraso" onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Atraso</li>
          <li value="Cancelamento" onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Cancelamento</li>
          <li value="Extravio de bagagem" onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Extravio de bagagem</li>
          <li value="Dano nas bagagens" onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Dano nas bagagens</li>
          <li value="No-show" onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>No-show</li>
          <li value="Overbooking" onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Overbooking</li>
        </ul>
      </>
      :
      years === 0 ?
      <h1>
        Infelizmente não é um caso passível de indenização!
      </h1>
      :
      <>
      </>
      }
      <p>{personalCase}</p>
    </div>
  );
}

export default App;
