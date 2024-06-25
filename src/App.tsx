import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import RegisterForm from "./components/RegisterForm"
import RegisterList from "./components/RegisterList"

function App() {

  return (
    <>
    <div className="container mx-auto mt-20">
      <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">Seguimiento de Registro de {''}
      <span className="text-red-500 ">Plataforma</span>
      </h1>

      <div className="mt-12 md:flex">
          <RegisterForm/>
          <RegisterList/>
      </div>
    </div>
      <ToastContainer/>
    </>
  )
}

export default App
