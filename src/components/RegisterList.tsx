import { usePersonStore } from '../store';

export default function RegisterList() {

  const persons = usePersonStore(state => state.persons) 
  console.log(persons);
  
  return (
    <div>RegisterList</div>
  )
}
