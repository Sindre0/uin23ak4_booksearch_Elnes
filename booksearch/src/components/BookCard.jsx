export default function Bookcard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage, isbn}) {

    //puttet inn ett placeholder bilde hvis bilde ikke fås tak i. optimalt ville bildet vist en image not found eller et stock-photo av en bok.
    return (
    <>
        <article className="contentcard" key={keyBook}>
        <h3>{title}</h3>
        <p>Publisert: {first_publish_year}</p>
        <p>Forfatter: {author_name}</p>
        {ratings_average == null ? <p>Rating: foreløpig ingen rating </p> : <p>rating: {ratings_average}</p>} 
        {isbn == null ? "" : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`} target="_blank">Vis på amazon</a>}
        {coverImage == null ? <img src="https://placehold.co/175x289" alt="image not found"/> : <img src={`https://covers.openlibrary.org/b/id/${coverImage}-L.jpg`} alt={title}/>}
        </article>
    </>
    )
}