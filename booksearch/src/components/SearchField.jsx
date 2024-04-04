import { useState } from "react"

export default function SearchBar({query, content, setQuery}){
    
    //På denne siden brukte jeg nærmest identisk søketeknikk som AC brukte i R&M API-søket
    const [search, setSearch] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }    

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    console.log(query)

return(
    <>
        <h2>Søk etter bøker</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="James Bond..." onChange={handleChange}></input>
            <input type="submit" value="Søk"></input>
        </form>
    </>
    )
}