export default function Bookcard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage, isbn}) {

    
    return (
    <>
        <article className="contentcard" key={keyBook}>
        <h3>{title}</h3>
        <p>Publisert: {first_publish_year}</p>
        <p>Forfatter: {author_name}</p>
        {ratings_average == null ? <p>Rating: foreløpig ingen rating </p> : <p>rating: {ratings_average}</p>} 
        {isbn == null ? "" : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`} target="_blank">Vis på amazon</a>}
        <img src={`https://covers.openlibrary.org/b/id/${coverImage}-L.jpg`} alt={title}/>
        </article>
    </>
    )
}