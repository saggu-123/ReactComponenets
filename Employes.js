import React , {useState}from 'react'
import List from './List';
import emp from './data';
import "../Sass/Emp.scss";
const Employes = () => {
    const [empP, setEmp]=useState(emp);
   const deleteAll= ()=>{
       setEmp ([]);
   }
    return (
        <>
        <main>
          <section  className="container">
              <h1> {empP.length} no of Employees</h1>
               <List  people={empP}></List>
               <button onClick={deleteAll}> DELETE ALL </button>
          </section>

        </main>
                
           
        </>
    )
}

export default Employes
