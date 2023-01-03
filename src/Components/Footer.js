import { Link } from "react-router-dom"


function Footer() {

    return (
        <div className="flex flex-row justify-between bg-gray-600 px-10 pt-2 pb-4">
            <div className="flex flex-col justify-between items-center">
                <Link className="font-bold text-2xl group drop-shadow-[3px_5px_2px_rgba(0,0,0,0.25)]" to={'/'}>
                    <span className="text-primary group-hover:text-secondary">Zack </span>
                    <span className="text-secondary group-hover:text-primary">Kelly</span>
                </Link>
                <div className="text-gray-200 font-bold text-xs">&copy; 2022 Zack Kelly</div>
            </div>
            <div className="flex flex-row gap-8 mr-8">
                <div className="text-gray-200 text-xs font-bold flex flex-col gap-[1px]">
                    <div className="text-secondary">Navigation:</div>
                    <Link className="hover:text-secondary" to={'/blog'}>Blog</Link>
                    <Link className="hover:text-secondary" to={'/portfolio'}>Portfolio</Link>
                    <Link className="hover:text-secondary" to={'/experience'}>Experience</Link>
                    <Link className="hover:text-secondary" to={'/contact'}>Contact</Link>
                </div>
                <div className="text-gray-200 text-xs font-bold flex flex-col gap-[1px]">
                    <div className="text-secondary">My Links:</div>
                    <a className="hover:text-secondary" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zack-kelly/">LinkedIn</a>
                    <a className="hover:text-secondary" target="_blank" rel="noreferrer" href="https://github.com/zackorykelly">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Footer