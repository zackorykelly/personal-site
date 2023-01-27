function Experience() {

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mt-10 sm:px-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/reading-books.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[18px] self-center text-left sm:text-right font-semibold">
                    <p className="mb-2">
                    I've been lucky to have worked in multiple startup environments, wearing multiple hats and having to learn new
                    technologies and tools quickly.
                    </p>
                    <p>
                    Below are some of the frameworks and languages I have experience with, as well as a copy of my resume (or you can 
                    <a className=" hover:text-secondary font-extrabold" href="/Resume-No-Contact.pdf" download> download it</a>).
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-2">
                <h2 className="font-extrabold text-xl text-secondary text-center">Skills:</h2>
                <div></div>
                <div></div>
                    <div className="text-center">
                        <h3 className="font-bold underline">Front-End</h3>
                        <ul className="list-disc list-inside">
                            <li>Next.js</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold underline">Back-End</h3>
                        <ul className="list-disc list-inside">
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>Django</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold underline">Languages</h3>
                        <ul className="list-disc list-inside">
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Python</li>
                            <li>Ruby</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold underline">Database Related</h3>
                        <ul className="list-disc list-inside">
                            <li>SQL</li>
                            <li>Postgres</li>
                            <li>TypeORM</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold underline">Noteworthy APIs</h3>
                        <ul className="list-disc list-inside">
                            <li>Nylas</li>
                            <li>SendG   rid</li>
                            <li>MailParser</li>
                            <li>RentSync</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <img className="w-3/4 max-w-[1000px] mx-auto" src={'Resume-No-Contact.jpg'} alt={'resume'} />
            </div>
        </div>
    )
}

export default Experience