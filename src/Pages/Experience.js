function Experience() {

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mt-10 sm:px-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/reading-books.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[18px] self-center text-left sm:text-right font-semibold">
                    <p className="mb-2">
                    I'm lucky to have worked in multiple fast-paced startup environments, wearing multiple hats and learning new tools and technologies quickly.
                    </p>
                    <p>
                    Below are some of the frameworks and languages I have experience with, as well as a copy of my resume (or you can 
                    <a className=" hover:text-secondary font-extrabold" href="/ZackKellyResume.pdf" download> download it</a>).
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-4">
                <h2 className="font-extrabold text-xl text-secondary text-center">Skills:</h2>
                <div></div>
                <div></div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">Front-End</h3>
                        <ul className="list-disc">
                            <li>Next.js</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">Back-End</h3>
                        <ul className="list-disc">
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>Django</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">Languages</h3>
                        <ul className="list-disc">
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Python</li>
                            <li>Ruby</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">Database Related</h3>
                        <ul className="list-disc">
                            <li>SQL</li>
                            <li>Postgres</li>
                            <li>TypeORM</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">DevOps</h3>
                        <ul className="list-disc">
                            <li>AWS</li>
                            <li>Firebase/GCP</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">3rd Party APIs</h3>
                        <ul className="list-disc">
                            <li>Nylas</li>
                            <li>SendGrid</li>
                            <li>MailParser</li>
                            <li>RentSync</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="mt-10">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <h2 className="font-extrabold text-xl text-secondary text-center flex items-center justify-center">
                        <span className="ml-2">Courses:</span>
                    </h2>
                    <div></div>
                    <div></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">Completed</h3>
                        <ul className="list-disc">
                            <li>"Lighthouse Labs Web Development Diploma</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold underline text-center">In Progress</h3>
                        <ul className="list-disc">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <h2 className="font-extrabold text-xl text-secondary text-center flex items-center justify-center">
                        <a href="/ZackKellyResume-1.pdf" download>
                            <div className="w-10 h-10 hover:bg-gray-700 rounded-md p-1">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16L12 8" stroke="#77d4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#77d4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15" stroke="#77d4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </a>
                        <span className="ml-2">Resume:</span>
                    </h2>
                    <div></div>
                    <div></div>
                </div>
                <img className="w-3/4 max-w-[1000px] mx-auto rounded" src={'Resume-No-Contact-1.png'} alt={'resume'} />
            </div>
        </div>
    )
}

export default Experience