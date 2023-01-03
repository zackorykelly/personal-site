import { Link, useLocation } from "react-router-dom"


function Navbar() {
    const loc = useLocation()

    return (
        <div className="flex flex-row justify-between items-center bg-gray-600 px-10 py-2">
            <div>
                <Link to={'/'}>
                    <img className="h-12 hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.5)] drop-shadow-[3px_5px_2px_rgba(0,0,0,0.3)]" alt="Zack Kelly" src="/logo-no-background.png"/>
                </Link>
            </div>
            <div className="text-gray-200 font-bold flex flex-row gap-8">
                <Link className={`${loc.pathname === '/blog' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/blog'}>Blog</Link>
                <Link className={`${loc.pathname === '/portfolio' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/portfolio'}>Portfolio</Link>
                <Link className={`${loc.pathname === '/experience' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/experience'}>Experience</Link>
                <Link className={`${loc.pathname === '/contact' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/contact'}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar