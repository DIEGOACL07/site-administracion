import { Person } from "../types"

type PersonDetailsProps = {
    person : Person
}

export default function PersonDetails({person}: PersonDetailsProps) {
  return (
    <div>
      {person.name}
    </div>
  )
}
