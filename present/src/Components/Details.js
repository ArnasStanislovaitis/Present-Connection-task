import Back from "./Back"


const Details = ({details}) => {
  return (
    <div >
        <div className="details">                
        <h1>{details[0].vardas}</h1>
        <img src={details[0].nuotrauka} ></img>
        <h4>Aprašymas</h4>
        <p>{details[0].aprasymas}</p>        
         <div className="back"><Back/></div>     
        </div>

        
        
        
        
        </div>
  )
}

export default Details