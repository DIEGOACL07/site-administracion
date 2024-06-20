import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { DraftPerson, Person } from "./types";

type PersonState = {
    persons: Person[]
    activeId: Person["id"]
    addPerson: (data: DraftPerson) => void
    deletePerson: (id: Person["id"]) => void
    getPatientByid: (id: Person["id"]) => void
}

const createPerson = (person: DraftPerson) : Person => {
    return {...person, id: uuidv4()}
}

export const usePersonStore = create<PersonState>((set) => ({
    persons: [],
    activeId: '',
    addPerson: (data) => {
        const newPerson = createPerson(data)
        set((state) => ({
            persons: [...state.persons, newPerson]
        }))
    },
    deletePerson:(id) => {
        set((state) => ({
            persons: state.persons.filter(person => person.id !== id),
        }))
    },
    getPatientByid:(id) => {
        set((state) => ({
            activeId: id,
        }))
    },
}))