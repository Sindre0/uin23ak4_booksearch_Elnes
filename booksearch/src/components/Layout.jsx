import SearchField from "./SearchField";

export default function Layout({children}){

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
            {children}
        </main>
        </>
    )
}