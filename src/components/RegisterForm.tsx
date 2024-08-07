import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { usePersonStore } from '../store';
import { DraftPerson } from '../types';
import Error from './Error';

export default function RegisterForm() {

    const addPerson = usePersonStore(state => state.addPerson);
    const activeId = usePersonStore(state => state.activeId);
    const persons = usePersonStore(state => state.persons);
    const updatePerson = usePersonStore(state => state.updatePerson);
    
    const { register, setValue, handleSubmit, formState: {errors}, reset } = useForm<DraftPerson>();

    useEffect(() => {
        if (activeId) {
            const activePerson = persons.filter(person => person.id === activeId)[0]
            setValue("name", activePerson.name);
            setValue("caretaker", activePerson.caretaker);
            setValue("email", activePerson.email);
            setValue("date", activePerson.date);
            setValue("symptoms", activePerson.symptoms);
        }
    }, [activeId])

    const registerPatient  = (data: DraftPerson) => {
        if (activeId) {
            updatePerson(data);
            toast.success("Usuario Actualizado", {type: 'success'})
        } else {
            addPerson(data)
            toast.success("Nuevo Usuario Registrado");
        }
        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Personal
            </h2>
    
            <p className="text-lg mt-5 text-center mb-10">
                Añade Registros y {''}
                <span className="text-red-600 font-bold">Administralos</span>
            </p>
    
            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
    
                  <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Empresa
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text" 
                        placeholder="Nombre de la Empresa" 
                        {...register('caretaker', {
                            required: 'El Empresa es obligatorio',
                        })}
                    />
                    {errors.caretaker && (
                          <Error>{errors.caretaker?.message}</Error>
                      )}
                  </div>
                        <div className="mb5-">
                            <label htmlFor="name" className="text-sm uppercase font-bold">
                                Personal
                            </label>
                            <input
                                id="name"
                                className="w-full p-3  border border-gray-100"
                                type="text" 
                                placeholder="Nombre del Personal"
                                {...register('name', {
                                required: 'El nombre es obligatorio',
                                })}
                            />
                            {errors.name && (
                                <Error>{errors.name?.message}</Error>
                            )}
                        </div>
    
                <div className="mb-5">
                  <label htmlFor="email" className="text-sm uppercase font-bold">
                      Email 
                  </label>
                  <input 
                      id="email"
                      className="w-full p-3  border border-gray-100"  
                      type="email" 
                      placeholder="Email de Registro" 
                      {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email No Válido'
                        }
                      })} 
                  />
                  {errors.email && (
                          <Error>{errors.email?.message}</Error>
                      )}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha de Registro
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date" 
                        {...register('date', {
                            required: 'La fecha es obligatorio',
                          })}
                        />
                        {errors.date && (
                            <Error>{errors.date?.message}</Error>
                        )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Area
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Area de Personal" 
                        {...register('symptoms', {
                            required: 'El area es obligatorio',
                        })}
                        />
                        {errors.symptoms && (
                            <Error>{errors.symptoms?.message}</Error>
                        )}
                </div>
    
                <input
                    type="submit"
                    className="bg-red-600 w-full p-3 text-white uppercase font-bold hover:bg-red-500 cursor-pointer transition-colors"
                    value='Guardar Personal'
                    onChange={usePersonStore}
                />
            </form> 
        </div>
      )
    }
