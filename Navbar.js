import React , {useState} from 'react';
import {AiOutlineAppstore} from 'react-icons/ai';
import '../Sass/Navbar.scss';
import {  Link } from "react-router-dom";
import Navitem from '../DATA/Navitem';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
    
    const [show , setShow] = useState(false);
    const [toggledrop, settoggledrop] = useState(false);
    const Toggle = ()=> {
     setShow(!show);
      };

  
 
    return (
        <>
        <nav>
              <div className="nav-center">
             <div className="nav-header">
             <Link to= '/'
              className='logo'>
             <AiOutlineAppstore/>
              LAVISH INTERIOR 
              </Link>
             </div>

            <div className={ `${show ? 'links-container show' : 'links-container'}`}
            >

              <ul className="links">
              {Navitem.map((item)=> {
                  if (item.title === 'Home'){
                  return (
                    <li key={item.id}
                    className="parent"
                  onMouseEnter={() => settoggledrop(true)}
                  onMouseLeave={() => settoggledrop(false)}>
                     <Link  to={item.path}>{item.title}</Link>
                    {toggledrop &&<Dropdown/>}
                 </li>
                 );
                  }
                   return (
                <li key={item.id}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
                })}
           </ul> 
             </div>
          <div className="nav-toggle" onClick={Toggle}>
             <i className= {show ? 'fas fa-times fa' :'fas fa-bars fa'}> </i>
             </div>
            
             </div>
             </nav>
            
        </>
    );
              };           

export default Navbar;

