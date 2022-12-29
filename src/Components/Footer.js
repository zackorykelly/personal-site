import { Link } from "react-router-dom"


function Footer() {

    return (
        <div className="flex flex-row justify-between bg-gray-600 px-10 pt-2 pb-4">
            <div className="flex flex-col justify-between items-center">
                <Link className="font-bold text-2xl group" to={'/'}>
                    <span className="text-primary group-hover:text-secondary">Zack </span>
                    <span className="text-secondary group-hover:text-primary">Kelly</span>
                </Link>
                <div className="text-gray-200 font-bold text-xs">&copy; 2022 Zack Kelly</div>
            </div>
            <div className="flex flex-row gap-8 mr-8">
                <div className="text-gray-200 text-xs font-bold flex flex-col gap-[1px]">
                    <div className="text-secondary">Navigation:</div>
                    <Link className="hover:text-secondary" to={'/about'}>About</Link>
                    <Link className="hover:text-secondary" to={'/portfolio'}>Portfolio</Link>
                    <Link className="hover:text-secondary" to={'/experience'}>Experience</Link>
                    <Link className="hover:text-secondary" to={'/contact'}>Contact</Link>
                </div>
                <div className="text-gray-200 text-xs font-bold flex flex-col gap-[1px]">
                    <div className="text-secondary">My Links:</div>
                    <a className="hover:text-secondary" href="https://www.google.ca">LinkedIn</a>
                    <a className="hover:text-secondary" href="https://www.google.ca">GitHub</a>
                    <a className="hover:text-secondary" href="https://www.google.ca">Indeed</a>
                </div>
            </div>
        </div>
    )
}

export default Footer