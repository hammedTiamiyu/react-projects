import React , {useState, useEffect} from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data"

function App () {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let lastIndex = people.length-1
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
    
  },[index, people])

  // slides effect
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    },5000);
    return () => {
      clearInterval(slider)
    };
  },[index])
  

 return(
   <section className="section">
     <div className="title">
       <h2>
         <span>/</span>reviews
       </h2>
     </div>
      <div className="section-center">
        {
           people.map((person,personIndex) => {
            const {id, image, name, title, quote} = person

            let position = "nextSlide"
            if(personIndex === index ){
              position = "activeSlide"
            }
            if(
              personIndex === index - 1 ||
              (personIndex === 0 && personIndex === people.length -1 )
              ){
                position ="lastSlide"
              }
            return(
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <h3 className="icon"><FaQuoteRight /></h3>
              </article>
            );
          })}
        <button className="prev" onClick={() =>setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={() =>setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
   </section>
 )
}

export default App