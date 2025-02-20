import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";


function Navbar() {
    const loc = useLocation()
    const [showNav, setShowNav] = useState(false);

    // Close the mobile nav when the user navigates to a new page
    useEffect(() => {
        setShowNav(false)
    },[loc])

    return (
        <div className="bg-gray-600">
            <div className="flex flex-row justify-between items-center px-10 py-2">
                <div>
                    <Link to={'/'}>
                        <img className="h-12 hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.5)] drop-shadow-[3px_5px_2px_rgba(0,0,0,0.3)]" alt="Zack Kelly" src="/logo-no-background.png"/>
                    </Link>
                </div>
                <div className="text-gray-200 font-bold hidden md:flex flex-row gap-8">
                    <Link className={`${loc.pathname === '/' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/'}>Home</Link>
                    {/* <Link className={`${loc.pathname === '/blog' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/blog'}>Blog</Link> */}
                    <Link className={`${loc.pathname === '/portfolio' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/portfolio'}>Portfolio</Link>
                    <Link className={`${loc.pathname === '/experience' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/experience'}>Experience</Link>
                    <Link className={`${loc.pathname === '/contact' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]'}`} to={'/contact'}>Contact</Link>
                </div>
                <div onClick={() => setShowNav(!showNav)} className="block md:hidden">
                    <img src="/menu-icon.svg" alt="Menu Icon" className="max-w-[40px] p-1 rounded"/>
                </div>
            </div>
            {showNav && (
                <div className="text-gray-200 font-bold flex md:hidden flex-col mt-2 text-center pb-[2px] border-t-[1px] border-dashed border-gray-700">
                    <Link className={`py-2 ${loc.pathname === '/' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] bg-gray-500' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] hover:bg-gray-500'}`} to={'/'}>Home</Link>

                    {/* <Link className={`py-2 ${loc.pathname === '/blog' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] bg-gray-500' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] hover:bg-gray-500'}`} to={'/blog'}>Blog</Link> */}
                    
                    <Link className={`py-2 ${loc.pathname === '/portfolio' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] bg-gray-500' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] hover:bg-gray-500'}`} to={'/portfolio'}>Portfolio</Link>
                    
                    <Link className={`py-2 ${loc.pathname === '/experience' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] bg-gray-500' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] hover:bg-gray-500'}`} to={'/experience'}>Experience</Link>
                    
                    <Link className={`py-2 ${loc.pathname === '/contact' ? 'text-secondary drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] bg-gray-500' : 'hover:text-secondary hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] hover:bg-gray-500'}`} to={'/contact'}>Contact</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar