import { useEffect, useState } from "react";

const mediumURL =
"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zackorykelly";

const requestOptions = {
    method: 'GET',
};

function Blog() {
    const [blogData, setBlogData] = useState();

    useEffect(() => {
        //Fetch medium feed
        fetch(mediumURL, requestOptions)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            setBlogData(res);
            console.log(res)
        })
    },[])

    return (
        <div className="text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 mt-10 sm:px-10">
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/studying.png" alt="Zack Kelly" />
                <div className="col-span-2 px-4 py-8 text-[18px] self-center text-left sm:text-right font-semibold">
                    <p className="mb-2">
                    While I don't have a regular publishing schedule, any articles I write on my medium account will automatically be added below.
                    </p>
                    <p>
                    If there's something you think I should write about, let me know!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                {blogData && blogData.items.map((item) => {
                    return (
                        <div className="border-gray-500 hover:border-gray-400 hover:bg-gray-700 border-dashed border-[1px] hover:shadow-lg rounded-2xl">
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <img src={item.thumbnail} alt="Thumbnail" className="rounded-t-2xl" />
                                <div className="p-3">
                                    <div className="font-bold text-center">{item.title}</div>
                                    <div className="my-2">
                                        {item.description.substring(4,150).trim() + '...'}
                                    </div>
                                    <div>{item.author}</div>
                                    <div>{item.pubDate.substring(0,10)}</div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog