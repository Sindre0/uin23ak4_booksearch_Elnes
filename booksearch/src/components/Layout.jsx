import SearchField from "./SearchField";

export default function Layout(){

    return(
        <>
        <header>
            <nav>
                <h1>Boksøk</h1>
            </nav>
        </header>
        <main>
            <section>
                <SearchField></SearchField>
            </section>
        </main>
        </>
    )
}