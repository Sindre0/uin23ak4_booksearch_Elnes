import Bookcard from "./BookCard"
export default function SearchResult({content}){

    const result = content
    console.log(result,"s")

    return(
        <>
        <span className="bookdisplay">
            {result?.map(singleResult => 
                <Bookcard className="contentcard" 
                key={singleResult?._version_}
                isbn={singleResult?.isbn} 
                title={singleResult?.title}
                author_name={singleResult?.author_name} 
                first_publish_year={singleResult?.first_publish_year}
                ratings_average={singleResult?.ratings_average}
                coverImage={singleResult?.cover_i}>
                </Bookcard>)}
        </span>
        </>
    )
}