import { useState } from "react"
import ReactModal from "react-modal"
import ReactImageGallery from "react-image-gallery";

// Styles for the image gallery modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-45%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '1rem',
      backgroundColor: '#52525B',
      color: '#E4E4E7'
    },
};

// Project data
const projects = [
    {
        title: 'zackkelly.dev (This Site!)',
        description: 'A simple portfolio webapp used to showcase some of my work and experience as a software developer.',
        technology: 'Created with React, TailwindCSS, and React Router, and hosted using Google Firebase hosting. Additional technologies include Recaptcha and GCP cloud functions for the contact form.',
        img: [{ original: '/zk1.png'},{ original: '/zk2.png'},{ original: '/zk3.png'},{ original: '/zk4.png'},{ original: '/zk5.png'}],
        date: '2021 - 2023',
        links: [{ type: 'GitHub', url: 'https://github.com/zackorykelly/personal-site'}, { type: 'Live', url: 'https://zackkelly.dev'}],
        tags: ['react', 'tailwind', 'firebase', 'gcp'],
    },
    {
        title: 'Chain Champs',
        description: 'Originally conceived as an NFT marketplace built to have the fastest live feed of secondary market sales. Since expanded to include a PFP generator, NFT drop and pack creation tools, data insights, auto-buy functionality and more.',
        img: [{ original: '/cc1.png'},{ original: '/cc2.png'},{ original: '/cc3.png'},{ original: '/cc4.png'},{ original: '/cc5.png'}],
        technology: 'Angular frontend and node express backend using typescript. Additional integrations with data processing servers and interactions with smart contracts on the blockchain. PSQL for primary data storage and python modeling.',
        date: '2021 - 2023',
        links: [{ type: 'Live', url: 'https://www.chainchamps.com' }],
        tags: ['angular', 'node.js', 'express', 'bootstrap', 'psql', 'sequelize', 'web3'],
    },
    {
        title: 'RealSage',
        description: 'A software subscription platform for landlords, allowing management of leads and tenant acquisition, pricing information, and data insights on your portfolio.',
        img: [{ original: '/rs4.png'},{ original: '/rs2.png'},{ original: '/rs3.png'},{ original: '/rs1.png'}],
        technology: 'Next.js frontend including TailwindCSS styling. Microservice based backend built using node express Typescript servers, hosted on AWS. Primary data storage using PSQL. Custom integrations with a number of platforms including Nylas, RentSync, SendGrid, Mailparser and others.',
        date: '2021 - 2023',
        links: [{ type: 'Live', url: 'https://www.realsage.com' }],
        tags: ['next.js','node.js','express','tailwind'],
    },
    {
        title: 'KnownUnknown - Helvetica',
        description: 'Contracted webapp built to advertise and sell a collection of NFTs based on the Helvetica font in partnership with owner Monotype and KnownUnknown.',
        img: [{ original: '/KU-1.png'},{ original: '/KU-2.png'},{ original: '/KU-3.png'},{ original: '/KU-4.png'},{ original: '/KU-5.png'},{ original: '/KU-6.png'}],
        technology: 'Frontend built using React and TailwindCSS. Integrations with Thirdweb API to interact with Avalanche blockchain, and Paper.xyz for credit card sales.',
        date: '2022',
        links: [{ type: 'Live', url: 'https://helvetica.knownunknown.com' }],
        tags: ['react', 'tailwind', 'web3']
    },
    {
        title: 'JamSpace',
        description: '"GitHub for songwriting" - Basic sound recorder/file manager. Users can record audio to files, share projects, manipulate recordings. Built over the course of 1.5 weeks for Lighthouse Labs Web Development bootcamp.',
        img: [{ original: '/js1.png'},{ original: '/js2.png'},{ original: '/js3.png'},{ original: '/js4.png'}],
        technology: 'React frontend including bootstrap styling. Node express backend using Javascript, and PSQL database.',
        date: '2021',
        links: [{ type: 'GitHub', url: 'https://github.com/zackorykelly/JamSpace' }],
        tags: ['react', 'node.js', 'express', 'psql', 'bootstrap'],
    },
]

function Portfolio() {
    const [open, setOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mt-10 sm:px-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/portfolio.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[18px] self-center text-left sm:text-right font-semibold">
                    <p className="mb-2">
                    Below is a sample of some projects I've worked on both professionally and for my own use.
                    </p>
                    <p>
                    Where possible, I've included links to see them either hosted live, on GitHub, or both.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {projects.map((proj) => {
                    return (
                        <div
                        onClick={() => {
                            setOpen(!open);
                            setActiveProject(proj)
                        }}
                        className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 border-dashed border-[1px] hover:shadow-lg rounded-2xl cursor-pointer w-[300px]"
                        >
                            <img src={proj.img[0].original} alt="Thumbnail" className="rounded-2xl h-[150px] mx-auto" />
                            <div className="p-3">
                                <div className="mb-2 font-bold text-center">{proj.title}</div>
                                <div className="mb-2 w-full">
                                    {proj.description.substring(0,100).trimEnd() + '...'}
                                </div>
                                <div>{proj.date}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {open && activeProject && (
                <ReactModal
                isOpen={open}
                onRequestClose={() => {
                    setOpen(!open);
                    setActiveProject(null)
                }}
                style={customStyles}
                contentLabel="Project Details"
                >
                    <div className="px-2 min-h-[500px]">
                        <div className="font-bold text-2xl mb-2">{activeProject.title}</div>
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                            <div className="flex justify-center items-center">
                                <div className="w-full md:w-[400px]">
                                <ReactImageGallery
                                items={activeProject.img}
                                showPlayButton={false}
                                showThumbnails={false}
                                showBullets={true}
                                additionalClass={'rounded bg-gray-800'}
                                useTranslate3D={false}
                                />
                                </div>
                            </div>
                            <div className="grow">
                                <div className="mb-4"><span className="font-bold">Description:</span> {activeProject.description}</div>
                                <div className="mb-4"><span className="font-bold">Technology:</span> {activeProject.technology}</div>
                                <div className="font-bold">Links:</div>
                                {activeProject.links.map((link) => {
                                    return (
                                        <div>
                                            <span className="font-semibold">- {link.type}: </span>
                                            <a className="text-secondary hover:underline" href={link.url}>{link.url}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </ReactModal>
            )}
        </div>
    )
}

export default Portfolio