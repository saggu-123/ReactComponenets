import React  , {useState , useEffect} from 'react'

import Allplaces from './Allplaces';
import Bufring from './Bufring';
const url = 'https://course-api.com/react-tours-project'

const Places = () => {
    const [loading, setLoading] = useState(true);
    const [place, setPlaces] = useState([]);
//  fetching data 
    const fetchTours = async () => {
        setLoading(true)
        try {
          const response = await fetch(url)
          const tours = await response.json()
          setLoading(false)
          setPlaces(tours)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      }
      useEffect(() => {
        fetchTours()
      }, []);

    // LOADING THING 
    if(loading) {
    return (
      <main>
        <Bufring />
      </main>
    )
  }
  return <h2>
      <Allplaces Allplaces={place}></Allplaces>
  </h2>
    

}

export default Places
