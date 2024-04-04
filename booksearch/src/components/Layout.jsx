import SearchField from "./SearchField";

export default function Layout({children, setQuery, query, content}){

    return(
        <>
        <header>
            <nav>
                <h1>Boksøk</h1>
            </nav>
        </header>
        <main>
            <section>
                <SearchField setQuery={setQuery} content={content} query={query}></SearchField>
            </section>
            {children}
        </main>
    
        </>
    )
}