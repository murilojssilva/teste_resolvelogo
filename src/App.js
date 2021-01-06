import { useState } from "react";
import up from "./assets/arrow-up.svg"
import down from "./assets/arrow-down.svg"
import negative from "./assets/negativo.svg"

import './App.css';

function App() {
  const [initial,setInitial] = useState(true);
  const [type,setType] = useState(0);
  const [years,setYears] = useState(1);
  const [timeLate,setTimeLate] = useState("")
  const [personalCase,setPersonalCase]= useState("");
  return (
    <div className="cases-selector">
      <div className="container">
      {initial ?
        <div onClick={() => setInitial(false)}>
          <div className="cases-selector-title">
            <h1>O seu voo é nacional ou internacional?</h1>
          </div>
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
        <div className="cases-selector-title">
          <h2>Há quanto tempo ocorreu o caso?</h2>
        </div>
        <ul>
          <li onClick={() => setYears(0)}>Mais de 5 anos <img className="case-arrow" src={up} alt="Mais de 5 anos" /></li>
          <li onClick={() => setYears(5)}>Menos de 5 anos <img className="case-arrow" src={down} alt="Menos de 5 anos" /></li>
        </ul> 
      </>
      : type === 2  && years === 1?
      <>
      <div className="cases-selector-title">
        <h2>Há quanto tempo ocorreu o caso?</h2>
      </div>
        <ul>
          <li onClick={() => setYears(0)}>Mais de 2 anos <img className="case-arrow" src={up} alt="Mais de 2 anos" /></li>
          <li onClick={() => setYears(2)}>Menos de 2 anos <img className="case-arrow" src={up} alt="Mais de 2 anos" /></li>
        </ul>
      </>
      :
      <>
      </>
      }
      
      {(years === 2 || years === 5) && personalCase === "" ?
      <>
        <div className="cases-selector-title">
          <h1>O que aconteceu?</h1>
        </div>
        <ul>
          <li onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Atraso</li>
          <li onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Cancelamento</li>
          <li onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Extravio de bagagem</li>
          <li onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Dano nas bagagens</li>
          <li onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>No-show</li>
          <li onClick={(e) => setPersonalCase(e.currentTarget.textContent)}>Overbooking</li>
        </ul>
      </>
      :
      years === 0 ?
      <div className="cases-selector-title">
        <img src={negative} className="negative-img" alt="negative" />
        <h1>Infelizmente não é um caso passível de indenização!</h1>
      </div>
      :
      <>
      </>
      }
      { timeLate === "" && (personalCase === "Atraso" || personalCase === "Cancelamento" || personalCase === "Overbooking") ?  
      <>
        <div className="cases-selector-title">
          <h1>Qual foi o tempo total de atraso até a chegada ao destino?</h1>
        </div>
        <ul>
          <li onClick={(e) => setTimeLate(e.currentTarget.textContent)}>Não houve atraso</li>
          <li onClick={(e) => setTimeLate(e.currentTarget.textContent)}>Menos de 4h</li>
          <li onClick={(e) => setTimeLate(e.currentTarget.textContent)}>Mais de 4h</li>
          <li onClick={(e) => setTimeLate(e.currentTarget.textContent)}>Não cheguei ao destino final</li>
        </ul>
      </>
      : 
      <>
      </>
      }
      { timeLate === "" && personalCase === "Extravio de bagagens" ?
      <>
        <div className="cases-selector-title">
          <h1>Por quanto tempo sua bagagem permaneceu extraviada?</h1>
        </div>
        <ul>
          <li>Ainda não recebi minha bagagem.</li>
          <li>Menos de 72h</li>
          <li>Mais de 72h</li>
        </ul>
      </>
      :
      <>
      </>
      }
      {
        personalCase === "No-show" || personalCase === "Dano nas bagagens" || ((personalCase === "Atraso" || personalCase === "Cancelamento" || personalCase === "Overbooking") && (timeLate === "Mais de 4h" || timeLate === "Não cheguei ao destino final"))  ?
        <>
        <div className="cases-selector-title">
          <h1>Conte-nos o seu caso</h1>
        </div>
        <p>Vou copiar aquela caixa de mensagens aqui</p>
        </>
        : (personalCase === "Atraso" || personalCase === "Cancelamento" || personalCase === "Overbooking") && (timeLate === "Não houve atraso" || timeLate === "Menos de 4h") ?
        <>
          <div className="cases-selector-title">
            <img src={negative} className="negative-img" alt="negative" />
            <h1>Infelizmente o seu caso não é passível de indenização.</h1>
          </div>
        </>
        :
        <>
        </>
      }
      </div>
    </div>
  );
}

export default App;
