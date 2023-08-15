import { useEffect, useState } from 'react';
import './App.css'
import UserCard from './components/UserCard';
import { Person } from './models/Person';

function App() {

  async function userData() {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    setList(users.data)
  }

  const [list, setList] = useState<Person[]>([])


  useEffect(() => {
    userData();
  }, [])

  return (
    <>
      {list.map(function (data: Person) {
        return (<UserCard {...data} key={data.id} />)
      })}

    </>
  )
}

export default App

//fetcha datan ✅
//console.logga datan ✅
//göra om json till array med objects ✅
//lägg arrayen i ett state ✅
//skapa component till korten✅
//skriva ut datan med en loop✅
//fixa TS✅
//styla✅
//göra backend