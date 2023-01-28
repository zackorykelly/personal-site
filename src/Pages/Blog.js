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
                <div className="col-span-2 px-4 py-8 text-[18px] self-center text-left font-semibold">
                    <p className="mb-2">
                    p1
                    </p>
                    <p>
                    p2
                    </p>
                </div>
                <img className="drop-shadow-[6px_10px_4px_rgba(0,0,0,0.3)] my-auto" src="/studying.png" alt="Zack Kelly" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                {blogData && blogData.items.map((item) => {
                    return (
                        <div className="border-gray-500 border-solid border-2 rounded hover:bg-gray-700">
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <img src={item.thumbnail} alt="Thumbnail" className="rounded-t" />
                            <div className="p-3">
                                <div className="font-bold">{item.title}</div>
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