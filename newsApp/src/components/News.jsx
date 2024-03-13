export function News({title,description,publishedAt,urlToImage,source,url}){
    return(
        <>
        <div className="font-sans shadow-md">
            <div className="mt-2">
                <img src={urlToImage} width="400px" />
                <h1 className="font-bold mt-2 text-2xl">{title}</h1>
                <div className="flex mt-2">
                    <p className="font-semibold">{source}</p>
                    <p className="ml-10">{publishedAt}</p>
                </div>
                <p className="mt-2 text-[18px]">{description && description.substring(0,140) + "..."}<a href={url} className="font-bold cursor-pointer">Read more</a></p>
            </div>
        </div>
        </>
    )
}