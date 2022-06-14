
import { Link } from 'react-router-dom'

const Animal = ({animal,choose}) => {
  return (
    <div className="animal">
        <Link to="/details" style={{textDecoration:'none', color:'black'}}><h3 onClick={() =>choose(animal.id)}>
          {animal.vardas} 
                 
           </h3></Link>
        
    </div>
  )
}

export default Animal
