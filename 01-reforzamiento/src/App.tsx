import Contador from "./components/Contador"
import ContadorConHook from "./components/ContadorConHook"
import Login from "./components/Login"
import Funciones from "./typescript/Funciones"
import ObjetosLiterarios from "./typescript/ObjetosLiterarios"
import TiposBasicos from "./typescript/TiposBasicos"
import Usuarios from "./components/Usuarios"
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Intoducción a TS - React</h1>
      <hr />
      <TiposBasicos />
      <hr />
      <ObjetosLiterarios />
      <hr />
      <Funciones />
      <hr />
      <Contador />
      <hr />
      <ContadorConHook />
      <hr />
      <Login />
      <hr />
      <Usuarios />
      <hr />
      <Formularios />
    </div>
  )
}

export default App