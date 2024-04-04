import SearchField from "./SearchField";

export default function Layout({children, setQuery, query, content}){

    return(
        <>
        <header>
                <h1>Boksøk</h1>
        </header>
        <main>
            <section className="searchField">
                <SearchField setQuery={setQuery} content={content} query={query}></SearchField>
            </section>
            {children}
        </main>
    
        </>
    )
}