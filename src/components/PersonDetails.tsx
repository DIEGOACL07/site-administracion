import { toast } from "react-toastify"
import { usePersonStore } from "../store"
import { Person } from "../types"
import PersonDetailItem from "./PersonDetailItem"

export type PersonDetailsProps = {
    person : Person
}

export default function PersonDetails({person}: PersonDetailsProps) {

  const deletePerson = usePersonStore((state) => state.deletePerson)
  const getPatientByid = usePersonStore((state) => state.getPatientByid)
  const handleClick = () => {
    deletePerson(person.id)
    toast("Se elimino a un Usuario", {type: "error"})
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl"> 
      <PersonDetailItem
        label="ID"
        data={person.id}
      />

      <PersonDetailItem
        label="Empresa"
        data={person.caretaker}
      />

      <PersonDetailItem
        label="Nombre"
        data={person.name}
      />


      <PersonDetailItem
        label="Email"
        data={person.email}
      />

      <PersonDetailItem
        label="Fecha"
        data={person.date.toString()}
      />

      <PersonDetailItem
        label="Area"
        data={person.symptoms}
      />

      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientByid(person.id)}
            >
            Editar
          </button>
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleClick}
            >
            Eliminar
          </button>
      </div>

    </div>
  )
}
