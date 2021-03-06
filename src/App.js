import { useState } from "react";
import up from "./assets/arrow-up.svg"
import down from "./assets/arrow-down.svg"
import negative from "./assets/negativo.svg"
import cancelled from "./assets/cancelled.svg"
import delay from "./assets/delay.svg"
import lost from "./assets/lost.svg"
import brokenluggage from "./assets/broken-padlock.svg"
import overbooking from "./assets/overbooking.png"
import noshow from "./assets/noshow.png"

import './App.css';

function App() {
  const [initial,setInitial] = useState(true);
  const [type,setType] = useState(0);
  const [years,setYears] = useState(1);
  const [timeLate,setTimeLate] = useState("")
  const [personalCase,setPersonalCase]= useState("");
  const [misdirectionTime,setMisdirectionTime] = useState("")
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
          <li onClick={() => setYears(2)}>Menos de 2 anos <img className="case-arrow" src={down} alt="Mais de 2 anos" /></li>
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
          <li onClick={(e) => setPersonalCase("Atraso")}>Atraso <img className="icons-cases" src={delay} alt="Delay" /></li>
          <li onClick={(e) => setPersonalCase("Cancelamento")}>Cancelamento <img className="icons-cases" src={cancelled} alt="Cancelled" /></li>
          <li onClick={(e) => setPersonalCase("Dano nas bagagens")}>Dano nas bagagens <img className="icons-cases" src={brokenluggage} alt="Broken Luggage" /></li>
          <li onClick={(e) => setPersonalCase("Extravio de bagagens")}>Extravio de bagagens <img className="icons-cases" src={lost} alt="Lost" /></li>
          <li onClick={(e) => setPersonalCase("No-show")}>No-show <img className="icons-cases" src={noshow} alt="No-show" /></li>
          <li onClick={(e) => setPersonalCase("Overbooking")}>Overbooking <img className="icons-cases" src={overbooking} alt="Overbooking" /></li>
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
      { misdirectionTime === "" && timeLate === "" && (personalCase === "Atraso" || personalCase === "Cancelamento" || personalCase === "Overbooking") ?  
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
      { misdirectionTime === "" && timeLate === "" && personalCase === "Extravio de bagagens" ?
      <>
        <div className="cases-selector-title">
          <h1>Por quanto tempo sua bagagem permaneceu extraviada?</h1>
        </div>
        <ul>
          <li onClick={(e) => setMisdirectionTime(e.currentTarget.textContent)}>Ainda não recebi minha bagagem</li>
          <li onClick={(e) => setMisdirectionTime(e.currentTarget.textContent)}>Menos de 72h</li>
          <li onClick={(e) => setMisdirectionTime(e.currentTarget.textContent)}>Mais de 72h</li>
        </ul>
      </>
      :
      <>
      </>
      }
      {
        (personalCase === "No-show" || personalCase === "Dano nas bagagens" || ((personalCase === "Atraso" || personalCase === "Cancelamento" || personalCase === "Overbooking") && (timeLate === "Mais de 4h" || timeLate === "Não cheguei ao destino final"))) || (misdirectionTime === "Ainda não recebi minha bagagem" || misdirectionTime === "Mais de 72h")  ?
        <>
        <div className="cases-selector-title">
          <h1>Conte-nos o seu caso</h1>
        </div>
        <p>Vou copiar aquela caixa de mensagens aqui</p>
        </>
        : ((personalCase === "Atraso" || personalCase === "Cancelamento" || personalCase === "Overbooking") && (timeLate === "Não houve atraso" || timeLate === "Menos de 4h")) || misdirectionTime === "Menos de 72h" ?
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
