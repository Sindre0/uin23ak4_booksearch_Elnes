import Bookcard from "./BookCard"
export default function SearchResult({content}){

    const result = content
    console.log(result,"s")

    /*begrenset søkeresultater for å kun vise 40 resultater, dette gjør
    siden mye raskere og hindrer unødvendig lastetid.
    Et page-system ville også være nyttig for å vise de neste 40 f.eks */
    return(
        <>
        <span className="bookdisplay">
            {result?.map((singleResult, index) => 
                index < 40 && (
                <Bookcard className="contentcard" 
                key={singleResult?._version_}
                isbn={singleResult?.isbn} 
                title={singleResult?.title}
                author_name={singleResult?.author_name} 
                first_publish_year={singleResult?.first_publish_year}
                ratings_average={singleResult?.ratings_average}
                coverImage={singleResult?.cover_i}>
                </Bookcard>))}
        </span>
        </>
    )
}