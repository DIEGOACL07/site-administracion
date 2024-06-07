export type Person = {
    id: string;
    name: string;
    caretaker: string;
    email: string;
    date: Date;
    symptoms: string;
}
export type DraftPerson = Omit<Person, 'id'>