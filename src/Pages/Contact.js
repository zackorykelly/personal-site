function Contact() {

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-3 gap-4 mb-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]" src="/laptop-wave.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[20px] self-center text-center">
                    I would love to chat.
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
                <div className="flex flex-col">
                    <span className="text-[26px] text-center font-bold">Contact Me</span>
                    <span className="text-center mb-4">I do my best to respond to messages within 48 hours.</span>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-8">
                            <div className="flex flex-col">
                                <label>First Name:</label>
                                <input className="text-gray-800 p-2 rounded bg-gray-200" type={'text'} />
                            </div>
                            <div className="flex flex-col">
                                <label>Last Name:</label>
                                <input className="text-gray-800 p-2 rounded bg-gray-200" type={'text'} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>Email:</label>
                            <input className="text-gray-800 p-2 rounded bg-gray-200" type={'text'} />
                        </div>
                        <div className="flex flex-col">
                            <label>Message:</label>
                            <textarea
                            className="text-gray-800 resize-none p-2 rounded bg-gray-200"
                            rows={5}
                            />
                        </div>
                        <div className="flex flex-row justify-end px-4 mt-2">
                            <button className="bg-primary px-4 py-2 rounded font-bold group hover:bg-opacity-80 hover:shadow-inner" type="button"><span className="group-hover:drop-shadow-sm">Send</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact