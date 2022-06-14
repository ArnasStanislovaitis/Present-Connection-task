import { Link, useLocation } from "react-router-dom"


const Header = ({ srt }) => {
    const location = useLocation()


    return (
        <header className="header">

            <h1>Gyvūnų vikipedija</h1>

            <div className="header-buttons">
                {location.pathname === "/" && <>
                    <button className='btn' onClick={srt}>Rikiuoti</button>
                    <Link to="/animal"><button className='btn'>Pridėti </button > </Link> </>
                }
            </div>

        </header>
    )
}

export default Header