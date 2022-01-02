import React from 'react'
import SinglePlace from './SinglePlace'
const Allplaces = ({Allplaces}) => {
    return (
       <>
       <section>
           <div className="title">
               <h2>OUR PLACES</h2>
           </div>
           <div>
           {Allplaces.map((place) => {
          return <SinglePlace key={place.id} {...place} />;
        })}
           </div>
       </section>
       </>
    )
}

export default Allplaces
