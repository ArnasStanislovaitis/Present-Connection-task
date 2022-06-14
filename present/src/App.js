import { useState, useEffect } from "react"
import Header from './Components/Header'
import Animals from './Components/Animals'
import AddAnimal from "./Components/AddAnimal"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Details from "./Components/Details"

const App = () => {

    const [animalsList, setAnimalsList] = useState([])
    const [animalDetails, setAnimalDetails] = useState([])

    useEffect(() => {
        const getAnimals = async () => {
            const animalsFromServer = await fetchAnimals()
            setAnimalsList(animalsFromServer)

        }

        getAnimals()
    }, [])


    const fetchAnimals = async () => {

        const res = await fetch('https://animalsapi123.herokuapp.com/')

        const data = await res.json()

        return data
    }


    const addAnimal = (animal) => {

        const id = Math.floor(Math.random() * 10000) + 1
        const newAnimal = { id, ...animal }
        setAnimalsList([...animalsList, newAnimal])

    }


    const chooseAnimal = (id) => {

        setAnimalDetails(animalsList.filter((animal) => animal.id === id))

    }

    const sortNames = () => {



        const data = [...animalsList]

        setAnimalsList(data.sort((a, b) => a.vardas.localeCompare(b.vardas)))


    }

    return (

        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="container">

                        <Header srt={sortNames} />
                        <Animals animals={animalsList} choose={chooseAnimal} />


                    </div>
                } />
                <Route path="/animal" element={
                    <><Header /> <AddAnimal onAdd={addAnimal} /></>
                } />

                <Route path="/details" element={
                    <><Details details={animalDetails} /> </>
                } />

            </Routes>
        </Router>
    )
}

export default App