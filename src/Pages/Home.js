import { Link } from "react-router-dom"

function Home() {

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mt-10 sm:px-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/laptop-wave.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[22px] self-center text-center">
                    <p className="mb-2">Hi, I'm Zack, a software developer experienced in working across the stack to develop and ship scalable and effective products and features.</p>
                    <p>This portfolio site features some of my work and experience, housed in a simple application.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:px-10 mb-10">
                {/* <Link to={"/blog"} className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg group border-dashed border-[1px] rounded-2xl p-4">
                    <img className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/studying.png" alt="Blog" />
                    <div className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] text-center font-bold text-[20px]">Blog</div>
                </Link> */}
                <Link to={"/portfolio"} className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg group border-dashed border-[1px] rounded-2xl p-4">
                    <img className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/portfolio.png" alt="Portfolio" />
                    <div className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] text-center font-bold text-[20px]">Portfolio</div>
                </Link>
                <Link to={"/experience"} className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg group border-dashed border-[1px] rounded-2xl p-4">
                    <img className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/reading-books.png" alt="Experience" />
                    <div className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] text-center font-bold text-[20px]">Experience</div>
                </Link>
                <Link to={"/contact"} className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg group border-dashed border-[1px] rounded-2xl p-4">
                    <img className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/keep-me-posted.png" alt="Contact Me" />
                    <div className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] text-center font-bold text-[20px]">Contact Me</div>
                </Link>
                <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/zack-kelly/"} className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg group border-dashed border-[1px] rounded-2xl p-4">
                    <img className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/linkedin-logo.png" alt="My LinkedIn" />
                    <div className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] text-center font-bold text-[20px]">LinkedIn</div>
                </a>
                <a target="_blank" rel="noreferrer" href={"https://github.com/zackorykelly"} className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 hover:shadow-lg group border-dashed border-[1px] rounded-2xl p-4">
                    <img className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/github-logo.png" alt="My GitHub" />
                    <div className="group-hover:drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] text-center font-bold text-[20px]">GitHub</div>
                </a>
            </div>
        </div>
    )
}

export default Home