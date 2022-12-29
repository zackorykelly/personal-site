import { Link } from "react-router-dom"


function Navbar() {

    return (
        <div className="flex flex-row justify-between items-center bg-gray-600 px-10 py-2">
            <div>
                <Link to={'/'}>
                    <img className=" h-12" alt="Zack Kelly" src="/logo-no-background.png"/>
                </Link>
            </div>
            <div className="text-gray-200 font-bold flex flex-row gap-8">
                <Link className="hover:text-secondary" to={'/about'}>About</Link>
                <Link className="hover:text-secondary" to={'/portfolio'}>Portfolio</Link>
                <Link className="hover:text-secondary" to={'/experience'}>Experience</Link>
                <Link className="hover:text-secondary" to={'/contact'}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar