import { useState } from "react"
import ReactModal from "react-modal"
import SimpleImageSlider from "react-simple-image-slider";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-45%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '1rem',
      backgroundColor: 'grey'
    },
};

const projects = [
    {
        title: 'This Site! (zackkelly.dev)',
        description: 'A simple portfolio webapp built to showcase some of my work and experience. It also serves as a creative outlet and a place to test out features and technologies.',
        img: [{ url: '/reading-books.png'}],
        date: '2023',
        links: [{ type: 'GitHub', url: ''}, { type: 'Live', url: ''}],
    },
    {
        title: 'KnownUnknown - Helvetica',
        description: '',
        img: [{ url: '/reading-books.png'}],
        date: '2022',
        links: [{ type: 'None', url: '' }],
    },
    {
        title: 'Chain Champs',
        description: '',
        img: [{ url: '/reading-books.png'}],
        date: '2021',
        links: [{ type: 'Live', url: '' }],
    },
    {
        title: 'RealSage',
        description: '',
        img: [{ url: '/reading-books.png'}],
        date: '2021',
        links: [{ type: 'Live', url: '' }],
    },
    {
        title: 'JamSpace',
        description: 'JamSpace is a space jam that lorem ipsum dolor sit amet. Four score and seven years ago there was lorem ipsum dolor sit amet.',
        img: [{ url: '/reading-books.png'},{ url: '/reading-books.png'},{ url: '/Resume-No-Contact.jpg'}],
        date: '2021',
        links: [{ type: 'GitHub', url: 'https://github.com/zackorykelly/JamSpace' }],
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
                    Below is a sample of some projects I've worked on both professionally and in my own time.
                    </p>
                    <p>
                    Where possible, I've included links to see them hosted live.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {projects.map((proj) => {
                    return (
                        <div
                        onClick={() => {
                            setOpen(!open);
                            setActiveProject(proj)
                        }}
                        className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 border-dashed border-[1px] hover:shadow-lg rounded-2xl"
                        >
                            <img src={proj.img[0].url} alt="Thumbnail" className="rounded-t-2xl max-h-[150px] mx-auto" />
                            <div className="p-3">
                                <div className="font-bold text-center">{proj.title}</div>
                                <div className="my-2">
                                    {proj.description.substring(0,100).trimEnd() + '...'}
                                </div>
                                <div>{proj.date}</div>
                                <div>
                                    <SimpleImageSlider
                                    images={proj.img}/>
                                </div>
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
                contentLabel="Example Modal"
                >
                    <div className="px-2">
                        <div className="font-bold text-2xl mb-2">{activeProject.title}</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="block lg:hidden mx-auto">
                                <SimpleImageSlider
                                width={250}
                                height={250}
                                images={activeProject.img}
                                showBullets={true}
                                showNavs={true}
                                style={{ borderRadius: '1rem' }}
                                />
                            </div>
                            <div className="hidden lg:block">
                                <SimpleImageSlider
                                width={400}
                                height={400}
                                images={activeProject.img}
                                showBullets={true}
                                showNavs={true}
                                style={{ borderRadius: '1rem' }}
                                />
                            </div>
                            <div className="">
                                <div>Description: {activeProject.description}</div>
                                <div className="mt-4">Links:</div>
                                {activeProject.links.map((link) => {
                                    return (
                                        <div>
                                            <span>{link.type}: </span>
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