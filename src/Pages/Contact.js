import { useEffect, useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [validationError, setValidationError] = useState(null)
    
    useEffect(() => {
        console.log({formData})
    },[formData])

    const handleSubmit = (e) => {
        e.preventDefault()
        let errors = []
        if (!formData.firstName) {
            errors.push("First Name")
        }
        if (!formData.lastName) {
            errors.push("Last Name")
        }
        if (!formData.email) {
            errors.push("Email")
        }
        if (!formData.message) {
            errors.push("Message")
        }

        if (errors.length > 0) {
            setValidationError("Missing fields: " + errors.join(', '))
            return;
        }

        setLoading(true);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", formData.firstName + ' ' + formData.lastName);
        urlencoded.append("email", formData.email);
        urlencoded.append("message", formData.message);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://us-central1-zackkelly-portfolio.cloudfunctions.net/sendMailOverHTTP", requestOptions)
        .then(response => {
            return response.text()
        })
        .then(result => {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
            setLoading(false)
            alert('Message Sent')
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-3 gap-4 mb-20 px-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)]" src="/keep-me-posted.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[16px] self-center text-center">
                    <p>
                    I would love to chat work opportunities, your latest project, anything tech, woodworking, or whatever you personally nerd out on.
                    </p>
                    <p>
                    If you would like to connect professionally, send me a message and a request on{" "}
                    <a className="hover:text-secondary underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zack-kelly/">LinkedIn</a>, or email me using the form below.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
                <div className="flex flex-col">
                    <span className="text-[26px] text-center font-bold">Contact Me</span>
                    <span className="text-center text-[16px] mb-4 max-w-md">I do my best to respond to messages within 48 hours.</span>
                    <form className="flex flex-col gap-2"
                    onSubmit={handleSubmit}
                    >
                        <div className="flex flex-row gap-8 justify-between">
                            <div className="flex flex-col">
                                <label>First Name:</label>
                                <input className="text-gray-800 p-2 rounded bg-gray-200" type={'text'}
                                value={formData.firstName}
                                required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        firstName: e.target.value.trim()
                                    })
                                }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Last Name:</label>
                                <input className="text-gray-800 p-2 rounded bg-gray-200" type={'text'}
                                value={formData.lastName}
                                required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        lastName: e.target.value.trim()
                                    })
                                }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>Email:</label>
                            <input className="text-gray-800 p-2 rounded bg-gray-200"
                            type={'email'}
                            value={formData.email}
                            required
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value.trim()
                                })
                            }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Message:</label>
                            <textarea
                            className="text-gray-800 resize-none p-2 rounded bg-gray-200"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    message: e.target.value.trim()
                                })
                            }}
                            />
                        </div>
                        {validationError && (
                        <span className="text-center text-red-400 animate-bounce mt-2">{validationError}</span>
                        )}
                        <div className="flex flex-row justify-end px-4 mt-2">
                            <button disabled={loading} className="bg-primary px-4 py-2 rounded font-bold group hover:bg-opacity-80 hover:shadow-inner" type="submit">
                                {!loading ? (
                                    <span className="group-hover:drop-shadow-sm">Send</span>
                                ) : (
                                    <div role="status">
                                        <svg aria-hidden="true" className="mx-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact