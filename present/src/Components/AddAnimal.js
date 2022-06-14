import { useState } from "react"
import Back from "./Back"

const AddTask = ({onAdd}) => {
    const [vardas,setVardas]=useState('')
    const[nuotrauka,setNuotrauka]=useState('') 
    const[aprasymas,setAprasymas]=useState('') 


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!vardas){
            alert("Įveskite vardą")
            return
        }
        onAdd({vardas,nuotrauka,aprasymas})

        setVardas('')
        setNuotrauka('')
        setAprasymas('')
        
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Vardas</label>
            <input type='text' placeholder='Vardas'
            value={vardas}
            onChange={(e)=>setVardas(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Nuotraukos nuoroda</label>
            <input type='text' placeholder='Nuotraukos nuoroda'
            value={nuotrauka}
            onChange={(e)=>setNuotrauka(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Aprašymas</label>
            <input type='text' placeholder='Aprašymas'
            value={aprasymas}
            onChange={(e)=>setAprasymas(e.target.value)}></input>
        </div>
        
        <input type='submit' value='Išsaugoti' className="
        btn btn-block"></input>
        <div className="form-back"> <Back/> </div>
        
        

    </form>
  )
}

export default AddTask