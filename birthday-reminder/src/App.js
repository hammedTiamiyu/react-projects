// import React, { useState } from 'react'
// import data from './data'
// import List from './List'
// function App() {
//     console.log(data)
//   const [people, setPeople] = useState(data)
//   return (
//     <main>
//       <section className='container'>
//         <h3>{people.length} birthdays today</h3>
//         <List people={people} />
//         <button onClick={() => setPeople([])}>clear all</button>
//       </section>
//     </main>
//   )
// }
import React, {useState} from "react"
import data from "./birthday_reminder/data"
import List  from "./birthday_reminder/List"
function App (){
    const [people, setPeople] = useState(data)
    const [title, setTitle] = useState(data)
    return(
        <div>
            <main>
                <section className="container">
                  <h3>{title.length} people have birthday today</h3>
                  <List
                  people = {people}
                  />
                  <button onClick={()=> setPeople([]) && setTitle([])}>clear me</button>
                </section>
            </main>
        </div>
    )
}

export default App
