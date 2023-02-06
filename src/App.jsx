
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import LocationInform from './components/LocationInform'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { numbersPage } from './utils/handlePagination'
import { getRandomNumber } from './utils/handleRandom'

const RESIDENTS_PERPAGE = 12;

function App() {
  //Estado que almacena la informacion de la location
  const [location, setLocation] = useState()
  //Estado que almacena la informacion del input no controlado
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  //Funcion que se ejecuta en el submit del form
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () =>{
    if(!location) return[]
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents;
  }

  

  //Effecto que se ejecuta en el primer render y cuando cambia nameLocation (repite la peticion)
  useEffect(() => {
  const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
  const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [nameLocation])

//inputs no controlados necesitan un id

  return (
    <div className="App">
      <Header/>
      <ResidentForm handleSubmit={handleSubmit}/>
      <LocationInform location={location}/>
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}  numbersPage={numbersPage} setPage={setPage}/>
      <ResidentList pagination={pagination}/>
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}  numbersPage={numbersPage} setPage={setPage}/>

    </div>
  )
}

export default App