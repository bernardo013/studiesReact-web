import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { Itarefa } from "../types/tarefa";
import style from './App.module.scss'
import { useState } from "react";

function App() { 

  const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  //entender
  function selecionarTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista  tarefas={tarefas} selecionaTarefa={selecionarTarefa}/>
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
