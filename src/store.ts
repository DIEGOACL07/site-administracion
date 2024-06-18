import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { DraftPerson, Person } from "./types";

type PersonState = {
    persons: Person[]
    addPerson: (data: DraftPerson) => void
}

const createPerson = (person: DraftPerson) : Person => {
    return {...person, id: uuidv4()}
}

export const usePersonStore = create<PersonState>((set) => ({
    persons: [],
    addPerson: (data) => {
        const newPerson = createPerson(data)
        set((state) => ({
            persons: [...state.persons, newPerson]
        }))
    }
}))