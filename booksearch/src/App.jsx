import './App.css'
import Layout from './components/Layout'
import { useEffect, useState } from 'react';



function App() {

  const [content, setContent] = useState()
  const [query, setQuery] = useState("James Bond")
  
  const getData = async()=>{
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setContent(data);

    } catch {
      console.error("En feil har oppstått.")
    } 
   }

   useEffect(() => {
    getData();
  }, [query]);

  console.log(content)

  return (
    <>
     <Layout>
      
     </Layout>
    </>
  )
}

export default App
