export default function SearchField(){

    return(
        <>
        <h2>Søk etter bøker</h2>
        <form>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="James Bond..."></input>
            <input type="submit" value="Søk"></input>
        </form>
        </>
    )
}