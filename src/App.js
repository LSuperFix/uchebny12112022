import { useState } from "react";
import Massageblock from "./components/Massageblock";
import "./styles/Main.scss"
function App() {

  const [massages, setMassages] = useState([
    {id:1, title:"Задание менеджерам", text:"Обработать 30 предприятий, разослать им предложения"},
    {id:2, title:"Задание дизайнеру", text:"Обработать 30 предприятий, разослать им предложения"},
    {id:3, title:"Задание руководителю проекта", text:"Обработать 30 предприятий, разослать им предложения"},
  ])

  return (
    <div className="App">
        <Massageblock massages = {massages} />
    </div>
  );
}

export default App;
