import { usePersonStore } from '../store';
import PersonDetails from './PersonDetails';

export default function RegisterList() {
  const persons = usePersonStore((state) => state.persons);
  console.log(persons);
  
  return (
    <div className='md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll'>
      {persons.length ? (
        <> 
          <h2 className='font-black text-3xl text-center'>Listado de Personas Registradas</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra {""}
              <span className='text-red-600 font-bold'>Personas y Registros</span>
            </p>
          {persons.map(person => (
            <PersonDetails
              key={person.id}
              person={person}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay Personas</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando Personas {''}
            <span className='text-red-600 font-bold'>Y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}
